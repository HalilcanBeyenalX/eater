# EATER

EATER, restoranları yorumlardan çıkarılmış yemek/ambiyans/servis puanlarıyla karşılaştırmalı olarak listeleyen, framework ve build adımı olmayan statik bir rehber sitesidir. Üzerine Letterboxd benzeri bir kişisel günlük katmanı eklidir: insanlar hesap açıp gittikleri mekânları kaydeder, kendince puanlar ve birbirlerinin herkese açık profillerini gezebilir.

## Dosya Yapısı

| Dosya | Sorumluluk |
|---|---|
| `index.html` | Liste sayfası iskeleti |
| `detay.html` | Detay sayfası iskeleti |
| `gunluk.html` + `gunluk.js` | Gittiklerim: giriş/kayıt, ziyaret ekleme, kişisel liste |
| `kisi.html` + `kisi.js` | Herkese açık profil: bir kullanıcının günlüğü |
| `kisiler.html` + `kisiler.js` | Kullanıcı listesi |
| `hesap.js` | Supabase istemcisi ve oturum katmanı (`eaterHesap`) |
| `ayarlar.js` | Supabase URL/anahtar yapılandırması (boşsa katalog-yalnız kip) |
| `styles.css` | Tüm görsel katman — tema değişkenleri, kart, filtre, detay ve mobil stiller |
| `veri.js` | Restoran verisi (`const RESTORANLAR = [...]`) |
| `SEMA.md` | Veri alanlarının tanımı — otomasyon için referans |
| `bilesenler.js` | Paylaşılan çizim yardımcıları: `puanRozeti`, `fiyatEtiketi`, `veyaYok`, `gezinmeHTML`, `kacis` |
| `app.js` | Liste sayfası: kart render, filtreleme (ülke/şehir), sıralama |
| `kure.js` | Dünya küresi, konum (GPS/Nominatim) ve yakınlık — yalnız `index.html` |
| `dunya-ulkeler.js` | Ülke sınırları verisi (üretilmiş; elle düzenlenmez) |
| `detay.js` | Detay sayfası render + "Günlüğüme ekle" |
| `docs/supabase-sema.sql` | Veritabanı şeması ve RLS kuralları |
| `docs/supabase-kurulum.md` | Supabase kurulum yönergesi |
| `.claude/launch.json` | Yerel önizleme sunucusu tanımı |

## Çalıştırma

```bash
python3 -m http.server 8123
```

sonra tarayıcıda `http://localhost:8123/index.html` açılır.

Sunucu kurmaya gerek yok: `index.html` dosyasına çift tıklayıp doğrudan `file://` üzerinden de açabilirsiniz — katalog bu şekilde çalışacak şekilde tasarlandı. Bu yüzden veri `veri.js` içinde JSON değil, düz bir JavaScript dosyası olarak tutuluyor; `file://` üzerinden `fetch` ile JSON okumak tarayıcı güvenlik kısıtları yüzünden çalışmaz, ama bir `<script>` etiketiyle yüklenen `.js` dosyası çalışır. Günlük/hesap özellikleri ise internet ve Supabase yapılandırması ister (`docs/supabase-kurulum.md`).

## Yeni Restoran Ekleme

`SEMA.md`'deki alan tanımlarına uyan bir nesneyi `veri.js` içindeki `RESTORANLAR` dizisine eklemek yeterlidir. Başka hiçbir dosyaya dokunmaya gerek yok — kart, filtreler, sıralama ve detay sayfası yeni nesneyi otomatik olarak işler.

Doğrulanamayan alanlar tahmin edilerek doldurulmaz; `SEMA.md`'nin belirttiği gibi `null` (veya boş dizi) bırakılır ve arayüzde "veri yok" olarak gösterilir.

Yeni bir **ülkeden** ilk restoran eklenirken `kure.js` içindeki `ULKE_KODLARI` sözlüğüne o ülkenin ISO alpha-3 kodu da eklenmelidir (ör. `'İtalya': 'ITA'`); aksi halde ülke kürede vurgulanmaz (konsola uyarı düşer, site bozulmaz).

## Sonraki Adımlar

- **Supabase kurulumu** — `docs/supabase-kurulum.md` izlenerek yapılır; yapılana dek günlük sayfaları "yapılandırılmadı" uyarısı gösterir.
- **Yayınlama** — çok kullanıcılı günlük için sitenin bir adreste yayınlanması gerekir (GitHub Pages/Netlify).
- **Fotoğraflar** — şemadaki `fotolar` alanı ve kart/detay sayfasındaki yer tutucular hazır; 7 restoranın fotoğrafı eklenmedi.
- **Öneri sihirbazı (quiz)** — anlamlı bir öneri üretebilmek için veri setinde daha fazla restoran birikmesi bekleniyor, bu yüzden ertelendi.
- **Veri toplama otomasyonu** — `veri.js`'i üretecek bir script; `SEMA.md` bu scriptin sözleşmesi olarak yazıldı.

## Sınırlar

- Puanlar ölçüm değil, bir yorum örnekleminden çıkarılmış öznel değerlendirmelerdir.
- Kişisel puanlar Supabase'te tutulur ve katalog puanlarına hiçbir biçimde karışmaz; detay sayfasında yalnızca yan yana karşılaştırma olarak gösterilir.
- Veri elle güncelleniyor; bir restoran değiştiğinde site bunu otomatik yakalamaz, bilgiler zamanla eskiyebilir.
- **Genel/ortalama bir puan bilinçli olarak hesaplanmıyor.** Yemek, ambiyans ve servis her zaman ayrı ayrı gösteriliyor — bunları tek bir sayıya indirgemek, bir yiyicinin asıl önemsediği farkları gizler.
- `neYenir` listesindeki `kacKisiOnerdi` (kaç kişi önerdi) alanı şu an her restoranda boş. Beş yemek de gerçek ve kaynaklıdır, ama Google ve TripAdvisor sayılabilir bir yorum kümesi sunmuyor; bu yüzden sayı uydurmak yerine boş bırakıldı.
- `fiyat.kisiBasi` (kişi başı fiyat aralığı) da aynı nedenle üç restoranda da boş. Fiyat bilgisini bunun yerine `₺` / `₺₺` / `₺₺₺` segmenti ve `fiyat.not` içindeki tarihli not taşıyor.
