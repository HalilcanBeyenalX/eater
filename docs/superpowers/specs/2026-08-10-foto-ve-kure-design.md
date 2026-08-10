# Tasarım — Yemek fotoğrafları + 3D dünya küresi ve yakınlık sıralaması

Tarih: 2026-08-10 · Durum: kullanıcı onayı alındı (bölüm bölüm sunuldu)

## Amaç

İki özellik:

1. **Yemek fotoğrafları** — ziyaret formundaki iki favori yemek alanının yanına kamera
   düğmesi; çekilen/seçilen fotoğraf Supabase Storage'a yüklenir, ziyaret kartlarında
   (kendi günlüğü + herkese açık profil) küçük önizleme olarak görünür.
2. **Dünya küresi + yakınlık** — `index.html`'in en üstünde dönen, gerçek ülke sınırlı
   3D küre (globe.gl). Ülkeye tıklamak mevcut ülke filtresini kurar. Kullanıcı konumunu
   GPS ile veya yazarak (OpenStreetMap/Nominatim) belirler; konum kürede işaretlenir ve
   restoranlar kuş uçuşu mesafeye göre sıralanabilir.

## Verilen kararlar (soru-cevapla netleşti)

- Fotoğraf kaynağı: **kamera + galeri** (`<input type="file" accept="image/*"
  capture="environment">` — izin akışı tamamen tarayıcının standart mekanizması).
- Küre: **globe.gl (WebGL, CDN)** — kullanıcı gösterişli 3D küreyi seçti.
- Konum: **GPS düğmesi + Nominatim yazarak arama.** Google Maps istenmişti; kart
  zorunluluğu öğrenilince vazgeçildi. Anahtar/hesap/kart gerektiren hiçbir servis yok.
- Fotoğraflar **herkese açık** (profiller ve ziyaretler zaten açık).
- Kullanıcının konumu **kaydedilmez** — yalnız o oturumda bellekte tutulur.

## 1. Veritabanı ve depolama (supabase-sema.sql → Ek 3)

Tek idempotent blok; SQL editöre bir kez yapıştırılır:

- `ziyaretler` tablosuna: `sevilen_yemek1_foto text`, `sevilen_yemek2_foto text`
  (`add column if not exists`). Değer, Storage içindeki dosya yolunu tutar; `null` olabilir.
- Storage bucket `yemek-fotolari`: `insert into storage.buckets ... on conflict do nothing`,
  `public = true` (herkese açık okunur).
- `storage.objects` politikaları (Postgres `create policy if not exists` desteklemediği
  için `drop policy if exists` + `create policy` çifti):
  - okuma: herkes, `bucket_id = 'yemek-fotolari'`;
  - yükleme: girişli kullanıcı, yalnız kendi klasörüne
    (`auth.uid()::text = (storage.foldername(name))[1]`);
  - silme: yalnız kendi dosyası.
- Dosya adı düzeni: `{kullanici_id}/{rastgeleUuid}-1.jpg` / `-2.jpg`. Rastgele ad,
  ziyaret kaydından **önce** yükleme yapılabilmesini sağlar (bkz. akış).

Küre/konum için şema değişikliği yok: katalog koordinatları `veri.js`'te
(`koordinat: {lat,lng} | null`), kullanıcı konumu kalıcı tutulmuyor.

## 2. Fotoğraf akışı

**Form (gunluk.js):**

- İki favori kutusunun sağ ucunda 📷 düğmesi; basınca gizli file input tetiklenir.
- Seçimden sonra: tarayıcıda canvas ile küçültme (uzun kenar ≤ 1600 px, JPEG ~0.8
  kalite), düğmenin yerinde küçük önizleme + ✕ (vazgeç).
- Yemek adı boşken de fotoğraf eklenebilir.
- Kaydetme sırası: (1) fotoğraflar Storage'a yüklenir, (2) ziyaret satırı foto
  yollarıyla birlikte `insert` edilir. Yükleme başarısızsa kayıt **yapılmaz**, hata
  `#ziyaretHata`'da gösterilir. (Insert başarısız olursa Storage'da öksüz dosya
  kalabilir — kabul edilen küçük maliyet; RLS gereği yalnız sahibi silebilir.)

**Görüntüleme (gunluk.js + kisi.js):** `ziyaretKartHTML` benzeri kart çiziminde,
favori satırının altında foto yolu dolu olanlar için kare thumbnail; tıklayınca tam boy
basit lightbox (tam ekran karartma + görsel + ✕). İki sayfa ortak fonksiyonu kullanır
(gerekirse `bilesenler.js`'e taşınır). Public URL, bucket'ın herkese açık adresinden
kurulur (`/storage/v1/object/public/yemek-fotolari/<yol>`).

## 3. Küre ve yakınlık

**Yeni dosyalar:**

- `kure.js` — küre kurulumu, ülke tıklama, konum çubuğu, yakınlık hesabı.
- `dunya-ulkeler.js` — ülke sınırları (world-atlas TopoJSON'dan türetilmiş,
  `const DUNYA_ULKELER = {...};` sarmalayıcısıyla yerel dosya, ~250 KB). `veri.js`
  kalıbı: `file://` altında fetch çalışmadığı için script olarak yüklenir.
- `index.html` — globe.gl CDN script'i (SRI/integrity ile, Supabase gibi) + küre
  bölümü (`<section id="kure">`) + konum çubuğu.

**Davranış:**

- Küre kendi kendine yavaş döner; sürükleyince döndürme kullanıcıya geçer.
- Katalogda restoranı olan ülkeler parlak/renkli, diğerleri soluk.
- Ülke adları eşlemesi: `veri.js` Türkçe ad kullanır ("Türkiye"), sınır verisi
  İngilizce/ISO. `kure.js` içinde küçük bir sözlük: katalogda geçen her Türkçe ülke adı →
  ISO-3166 alpha-3 kodu. Sözlükte olmayan ülke küreyle eşleşemez; konsola uyarı yazılır,
  site bozulmaz. (Yeni ülke eklenince sözlüğe bir satır eklemek yeterli — README'ye not.)
- **Ülkeye tıklama:** `app.js`'teki `filtreDurumu.ulke` o ülkeye kurulur (app.js bunun
  için küçük bir dışa açık fonksiyon kazanır: `ulkeFiltresiUygula(ulke)`), liste süzülür,
  filtre kutusu senkron güncellenir, küre ülkeyi vurgular. Aynı ülkeye ikinci tıklama
  filtreyi temizler. Filtre kutusundan seçim de küreyi günceller (çift yönlü senkron).
- **Konum çubuğu:** metin kutusu + "Ara" + "📍 Konumumu kullan".
  - Ara → `https://nominatim.openstreetmap.org/search?q=…&format=json&limit=1`
    (yalnız düğmeyle tetiklenir, tuş başına istek yok; yanına "© OpenStreetMap
    katkıcıları" ibaresi konur).
  - GPS → `navigator.geolocation.getCurrentPosition` (anahtarsız, tarayıcı izni).
- **Konum belirlenince:** kürede pin, küre oraya döner; sıralama menüsüne "Yakınlık"
  seçeneği eklenir ve otomatik seçilir; kartlara "~3,2 km" mesafe etiketi gelir.
  Mesafe haversine ile tarayıcıda hesaplanır. `koordinat: null` restoranlar sona düşer.
  Konum yokken "Yakınlık" seçeneği menüde görünmez.

## 4. Hata durumları

| Durum | Davranış |
|---|---|
| Kamera izni reddedildi / dosya seçilmedi | Hiçbir şey olmaz; form fotosuz gönderilebilir. |
| Görsel işlenemedi (bozuk dosya) | 📷 yanında kısa hata, kayıt fotosuz devam edebilir. |
| Storage yüklemesi başarısız | Ziyaret kaydedilmez; `#ziyaretHata`'da mesaj. |
| globe.gl CDN'den yüklenemedi (çevrimdışı / file://) | Küre bölümü kendini gizler; filtreler ve liste bugünkü gibi çalışır. |
| Nominatim sonuç bulamadı / ağ hatası | Konum çubuğunda "bulunamadı / bağlantı hatası" mesajı. |
| GPS izni reddedildi | "Konum izni verilmedi — yazarak arayabilirsin" mesajı. |
| Supabase yapılandırılmamış | Günlük sayfası zaten uyarı gösteriyor; foto özelliği o akışın içinde. Küre Supabase'siz de çalışır. |

## 5. Doğrulama

- Yerel önizleme sunucusuyla: küre çizimi, ülke tıklama ↔ filtre senkronu, GPS
  (izin ver/verme), yazarak arama, yakınlık sıralaması ve mesafe etiketleri, konsolda
  hata olmaması.
- Foto akışı masaüstünde dosya seçiciyle uçtan uca (yükleme → kart thumbnail →
  lightbox); kamera yolu gerçek telefonda el ile denenir (capture özniteliği
  masaüstünde sınanamaz).
- `file://` ile `index.html` açılıp kataloğun küresiz bozulmadan çalıştığı görülür.
- SQL Ek 3 bloğu Supabase SQL editörüne bir kez yapıştırılır; ikinci kez
  çalıştırıldığında hata vermediği (idempotentlik) denenir.

## Kapsam dışı (bilinçli)

- Google Maps / Places (kart zorunluluğu nedeniyle vazgeçildi; ileride eklenebilir).
- Ziyaret başına 2'den fazla fotoğraf; ayrı fotoğraf tablosu.
- Kullanıcı mekânlarına (`mekanlar`) koordinat ekleme — yakınlık yalnız katalog
  restoranlarında; mekânlar "koordinatı yok" muamelesi görür.
- Konumun sunucuya kaydedilmesi.
