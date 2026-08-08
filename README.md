# EATER

EATER, İstanbul'daki restoranları yorumlardan çıkarılmış yemek/ambiyans/servis puanlarıyla karşılaştırmalı olarak listeleyen, framework ve build adımı olmayan statik bir rehber sitesidir.

## Dosya Yapısı

| Dosya | Sorumluluk |
|---|---|
| `index.html` | Liste sayfası iskeleti |
| `detay.html` | Detay sayfası iskeleti |
| `styles.css` | Tüm görsel katman — tema değişkenleri, kart, filtre, detay ve mobil stiller |
| `veri.js` | Restoran verisi (`const RESTORANLAR = [...]`) |
| `SEMA.md` | Veri alanlarının tanımı — otomasyon için referans |
| `bilesenler.js` | Paylaşılan çizim yardımcıları: `puanRozeti`, `fiyatEtiketi`, `veyaYok` |
| `app.js` | Liste sayfası: kart render, filtreleme, sıralama |
| `detay.js` | Detay sayfası render |
| `.claude/launch.json` | Yerel önizleme sunucusu tanımı |

## Çalıştırma

```bash
python3 -m http.server 8123
```

sonra tarayıcıda `http://localhost:8123/index.html` açılır.

Sunucu kurmaya gerek yok: `index.html` dosyasına çift tıklayıp doğrudan `file://` üzerinden de açabilirsiniz — site bu şekilde çalışacak şekilde tasarlandı. Bu yüzden veri `veri.js` içinde JSON değil, düz bir JavaScript dosyası olarak tutuluyor; `file://` üzerinden `fetch` ile JSON okumak tarayıcı güvenlik kısıtları yüzünden çalışmaz, ama bir `<script>` etiketiyle yüklenen `.js` dosyası çalışır.

## Yeni Restoran Ekleme

`SEMA.md`'deki alan tanımlarına uyan bir nesneyi `veri.js` içindeki `RESTORANLAR` dizisine eklemek yeterlidir. Başka hiçbir dosyaya dokunmaya gerek yok — kart, filtreler, sıralama ve detay sayfası yeni nesneyi otomatik olarak işler.

Doğrulanamayan alanlar tahmin edilerek doldurulmaz; `SEMA.md`'nin belirttiği gibi `null` (veya boş dizi) bırakılır ve arayüzde "veri yok" olarak gösterilir.

## Sonraki Adımlar

- **Fotoğraflar** — şemadaki `fotolar` alanı ve kart/detay sayfasındaki yer tutucular hazır; fotoğrafların kendisi eklenmedi.
- **Öneri sihirbazı (quiz)** — anlamlı bir öneri üretebilmek için veri setinde daha fazla restoran birikmesi bekleniyor, bu yüzden ertelendi.
- **Veri toplama otomasyonu** — `veri.js`'i üretecek bir script; `SEMA.md` bu scriptin sözleşmesi olarak yazıldı.
- **Yeni şehirler/ülkeler** — şemadaki `ulke`/`sehir` alanları buna hazır; gerektiğinde bir filtre eklemek yeterli.

## Sınırlar

- Puanlar ölçüm değil, bir yorum örnekleminden çıkarılmış öznel değerlendirmelerdir.
- Veri elle güncelleniyor; bir restoran değiştiğinde site bunu otomatik yakalamaz, bilgiler zamanla eskiyebilir.
- **Genel/ortalama bir puan bilinçli olarak hesaplanmıyor.** Yemek, ambiyans ve servis her zaman ayrı ayrı gösteriliyor — bunları tek bir sayıya indirgemek, bir yiyicinin asıl önemsediği farkları gizler.
- `neYenir` listesindeki `kacKisiOnerdi` (kaç kişi önerdi) alanı şu an her restoranda boş. Beş yemek de gerçek ve kaynaklıdır, ama Google ve TripAdvisor sayılabilir bir yorum kümesi sunmuyor; bu yüzden sayı uydurmak yerine boş bırakıldı.
- `fiyat.kisiBasi` (kişi başı fiyat aralığı) da aynı nedenle üç restoranda da boş. Fiyat bilgisini bunun yerine `₺` / `₺₺` / `₺₺₺` segmenti ve `fiyat.not` içindeki tarihli not taşıyor.
