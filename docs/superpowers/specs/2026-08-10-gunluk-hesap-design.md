# EATER — Kişisel Günlük ve Hesap Sistemi (Tasarım)

Tarih: 2026-08-10
Durum: Kullanıcı onayladı (sohbet içinde), uygulama planına geçilecek.

## Amaç

EATER'ı İstanbul rehberinden dünya geneline açmak ve Letterboxd benzeri bir
kişisel günlük katmanı eklemek: insanlar hesap açıp gittikleri restoranları
kaydeder, kendince puanlar, yorum yazar ve birbirlerinin profillerini gezebilir.

## Kararlar (kullanıcı onaylı)

1. **Kapsam:** Günlüğe hem katalogdaki restoranlar hem katalogda olmayan
   mekânlar (ad + ülke/şehir ile serbest ekleme) kaydedilebilir.
2. **Puan biçimi:** Sitenin diliyle aynı — yemek / ambiyans / servis, her biri
   0-10. Tek "genel puan" yok.
3. **Altyapı:** Supabase (hazır üyelik + veritabanı). Site statik kalır;
   framework ve build adımı eklenmez.
4. **Erişim modeli:** Katalog girişsiz, tamamen açık. Hesap yalnızca günlük
   yazmak için gerekir. Profiller **herkese açık** — giriş yapmadan da
   başkalarının günlük sayfaları gezilebilir.
5. **Kırmızı çizgi:** Kullanıcı puanları editoryal katalog puanlarına hiçbir
   biçimde karışmaz; ortalamaya dahil edilmez. Detay sayfasında yan yana
   karşılaştırma ("Site: 8,6 · Sen: 7,5") gösterilebilir, birleştirilmez.

## Görünür değişiklikler

- Alt başlık ("İstanbul'un öne çıkan restoranları — …") kaldırılır.
- Üst gezinme: **Keşfet** (mevcut liste) · **Gittiklerim** (kendi günlüğüm) ·
  **Kişiler** (profil listesi) · sağda **Giriş / Profil** düğmesi.
- Filtrelerde "Semt" yerine **Ülke** ve **Şehir** seçim kutuları. Semt bilgisi
  kartta yazı olarak kalır.
- Restoran detay sayfasına "Günlüğüme ekle" düğmesi.

## Sayfalar ve dosyalar

| Dosya | Sorumluluk |
|---|---|
| `gunluk.html` + `gunluk.js` | Gittiklerim: kayıt formu + kendi kayıt listem |
| `kisi.html` + `kisi.js` | Herkese açık profil: bir kullanıcının günlüğü |
| `kisiler.html` + `kisiler.js` | Kullanıcı listesi / keşif |
| `hesap.js` | Supabase istemcisi, kayıt/giriş/çıkış, oturum durumu |
| `app.js` (değişir) | Ülke/şehir filtreleri, gezinme |
| `detay.js` (değişir) | "Günlüğüme ekle" + site/sen karşılaştırması |

Supabase JS istemcisi tek `<script>` etiketiyle (CDN) yüklenir. Yerel `file://`
kullanımında katalog aynen çalışır; günlük bölümleri internet ister.

## Veri modeli (Supabase)

- `profiller` — id (auth.users'a bağlı), kullanici_adi (benzersiz), ad, tanitim.
- `mekanlar` — serbest eklenen mekânlar: id, isim, ulke, sehir, ekleyen.
  Katalog restoranları veri.js'te kalır; günlük kayıtları katalog için
  `restoran_id` (metin, veri.js id'si), serbest mekân için `mekan_id` taşır.
- `ziyaretler` — id, kullanici (auth uid), restoran_id VEYA mekan_id,
  tarih, yemek_puan, ambiyans_puan, servis_puan (0-10, boş olabilir), yorum,
  created_at.

Satır güvenliği (RLS): herkes okuyabilir (profiller herkese açık olduğu için);
yazma/silme yalnızca kayıt sahibine. `profiller` yalnızca sahibince güncellenir.

## Hata durumları

- Supabase erişilemiyorsa: katalog tam çalışır; günlük sayfaları "şu an
  ulaşılamıyor" uyarısı gösterir, veri kaybı olmaz (form gönderimi başarısızsa
  içerik alanda kalır).
- Girişsiz kullanıcı "Günlüğüme ekle"ye basarsa giriş formuna yönlendirilir.
- Aynı mekâna birden çok ziyaret eklenebilir (günlük mantığı — engel yok).

## Test

- Katalog tarafı: filtrelerin (ülke/şehir dahil) ve sıralamanın elle doğrulanması.
- Günlük tarafı: kayıt → giriş → ziyaret ekle → kendi sayfamda gör → çıkış →
  aynı ziyareti başka birinin profil sayfasından gör.
- Puan ayrımı: ziyaret eklendikten sonra katalog puanlarının değişmediğinin
  doğrulanması.

## Kapsam dışı (bilinçli ertelendi)

- Takip etme / beğeni / yorumlara cevap gibi sosyal özellikler.
- Fotoğraflar (ayrı iş olarak bekliyor; "resimleri en son yükleriz").
- Öneri sihirbazı.
- Yayınlama (GitHub Pages/Netlify) — çok kullanıcılı yapı için gerekli ama
  ayrı bir adım; Supabase kurulumundan sonra ele alınacak.

## Kullanıcıdan beklenen adımlar

1. supabase.com'da ücretsiz proje açmak (hesap gerektirdiği için kullanıcı
   yapar; adım adım yönlendirilecek). Proje URL'i ve anon anahtarı alınacak.
2. İleride: siteyi yayınlamak için bir barındırma seçimi.
