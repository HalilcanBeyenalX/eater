# EATER — Restoran Rehberi (Tasarım Dokümanı)

Tarih: 2026-08-08
Durum: Onay bekliyor

## Amaç

Bir şehirdeki öne çıkan restoranları, gerçek kullanıcı yorumlarından çıkarılmış
yapılandırılmış metriklerle tanıtan statik bir web sitesi. Siteye giren kişi
restoranları karşılaştırıp kendi tercihini yapabilsin.

İlk sürüm: İstanbul, üç restoran.

## Kapsam dışı (bu sürümde yapılmayacak)

- Öneri sihirbazı / quiz — daha fazla restoran verisi toplandıktan sonra
- Otomatik veri toplama servisi (backend, API entegrasyonu)
- Kullanıcı hesabı, yorum yazma, favori listesi
- Fotoğraflar — yer tutucular konur, görseller sonra eklenir

## Veri stratejisi

**Karma yaklaşım:** Veri şeması ve arayüz baştan otomasyona uygun tasarlanır,
ancak ilk sürümde veri elle doldurulur.

Veri toplama yöntemi: Google Maps, TripAdvisor ve TikTok üzerinde restoran başına
40-60 yorumluk bir örneklem okunur, metrikler bu yorumlardan çıkarılır.

Dürüstlük kuralları:
- Yorum sayıları ve incelenen örneklem boyutu sitede açıkça gösterilir
  ("Google: 4.5 / 12.400 yorum — 60 tanesi incelendi").
- Booking.com kaynak olarak kullanılmaz; restoran yorumu sunmuyor, otel odaklı.
- Puanlar bir örneklemden çıkarılmış yorumlardır, ölçüm değildir. Site bunu belirtir.

## Puanlama modeli

**Genel puan / ortalama puan YOKTUR.** Restoranları tek bir sayıya indirmek
yanıltıcıdır: servisi zayıf ama yemeği olağanüstü bir yer ile her boyutu vasat
bir yer aynı ortalamaya düşer. Üç metrik ayrı ayrı gösterilir.

| Alan | Biçim |
|---|---|
| Yemek | 0-10, bir ondalık |
| Ambiyans | 0-10, bir ondalık |
| Servis | 0-10, bir ondalık |
| Fiyat segmenti | ₺ / ₺₺ / ₺₺₺ — etiket ve filtre, puan değil |
| Ödül / Michelin | Rozet — puana katılmaz |

Fiyat bir kalite ölçüsü değildir; pahalı bir yer cezalandırılmaz, ucuz bir yer
ödüllendirilmez.

## Veri şeması

Her restoran için tutulan alanlar. Bu şema aynı zamanda ileride otomasyonun
dolduracağı sözleşmedir; alan adları değişirse arayüz de değişir.

```js
{
  id: "karakoy-lokantasi",          // slug, URL'de kullanılır
  isim: "Karaköy Lokantası",
  ulke: "Türkiye",                  // ülke > şehir > semt hiyerarşisi baştan var
  sehir: "İstanbul",
  semt: "Karaköy",
  mutfak: ["Türk", "Meyhane"],
  adres: "...",
  mapsUrl: "https://maps.app.goo.gl/...",
  koordinat: { lat: 41.0, lng: 28.9 },

  fiyat: {
    segment: "orta",                // "ucuz" | "orta" | "pahali"
    kisiBasi: { min: 800, max: 1400, paraBirimi: "TRY" },
    not: "İçki dahil kişi başı ~1200₺"
  },

  yemek: { puan: 9.0, ozet: "..." },

  neYenir: [                        // tam 5 adet, en çok önerilenden aza
    { yemek: "Karides Güveç", kacKisiOnerdi: 42, not: "..." }
  ],

  ambiyans: {
    puan: 9.2,
    ozet: "...",
    etiketler: ["tarihi", "canlı", "gürültülü"],   // filtrede kullanılır
    dressCode: "Smart casual — akşam servisinde şıklık bekleniyor",
    uygun: ["çift", "grup", "iş yemeği"]
  },

  servis: {
    puan: 8.5,
    ozet: "...",
    artilar: ["..."],
    eksiler: ["..."]
  },

  oduller: [                        // boş dizi olabilir
    { tip: "michelin-bib", detay: "Bib Gourmand 2024" }
  ],

  rezervasyon: {
    gerekiyor: true,
    yontem: ["telefon", "online"],
    telefon: "+90 ...",
    link: "https://...",
    beklemeSuresi: "Hafta sonu akşamı için 2-3 hafta önce",
    kapora: { var: false, detay: "" }
  },

  kaynaklar: {
    google:      { puan: 4.5, yorumSayisi: 12400, incelenen: 60 },
    tripadvisor: { puan: 4.0, yorumSayisi: 3100,  incelenen: 40 },
    tiktok:      { incelenenVideo: 15, ozet: "..." }
  },

  fotolar: [],                      // { url, alt } — şimdilik boş
  sonGuncelleme: "2026-08-08"
}
```

Türetilmiş hiçbir değer veride tutulmaz; hesaplanabilecek her şey kodda hesaplanır.

## Mimari

Framework yok, build adımı yok, backend yok. Mevcut projelerle tutarlı; statik bir
katalog için React/Vite kurulum yükü karşılığını vermez ve `file://` üzerinden
çift tıklayıp açılabilmek pratik.

```
eater/
  index.html      liste + filtre çubuğu
  detay.html      tek restoran (?id=karakoy-lokantasi)
  veri.js         const RESTORANLAR = [...]
  app.js          liste render + filtreleme + sıralama
  detay.js        detay sayfası render
  styles.css
  SEMA.md         alan tanımlarının referansı (otomasyon için)
```

`veri.js` JSON değil JS'tir; tek sebebi `file://` protokolünde `fetch`'in engelli
olması. İçeriği saf veridir, mantık içermez. Otomasyon eklendiğinde bu dosyayı
üreten bir script yazılır, arayüz kodu değişmez.

### Bileşen sınırları

| Dosya | Sorumluluk | Bağımlılığı |
|---|---|---|
| `veri.js` | Sadece veri | Yok |
| `app.js` | Liste kartlarını çizmek, filtre/sıralama durumunu yönetmek | `veri.js` |
| `detay.js` | URL'deki id'ye göre tek restoranı çizmek | `veri.js` |
| `styles.css` | Tüm görsel | Yok |

`app.js` ve `detay.js` birbirini tanımaz. Ortak ihtiyaç çıkarsa (ör. puan rozeti
çizimi) `bilesenler.js` adında paylaşılan bir dosyaya taşınır.

## Arayüz

### Liste sayfası (`index.html`)

Restoran kartı şunları gösterir: isim, semt, mutfak, fiyat etiketi (₺/₺₺/₺₺₺),
üç puan rozeti (Yemek / Ambiyans / Servis), varsa ödül rozeti, rezervasyon
gerekiyorsa uyarı işareti, fotoğraf yer tutucusu.

**Filtreler:** fiyat segmenti · semt · ambiyans etiketi · rezervasyon gerekli mi

**Sıralama** (açılır menü): Yemek puanı · Ambiyans puanı · Servis puanı ·
Fiyat (ucuzdan pahalıya)

Genel puan olmadığı için "minimum puan" filtresi yoktur — üç metrik için üç ayrı
eşik denetimi gereksiz karmaşa yaratır. Sıralama bu ihtiyacı yeterince karşılar.

### Detay sayfası (`detay.html?id=...`)

Sırayla:
1. Başlık — isim, semt, mutfak, fiyat etiketi, ödül rozetleri
2. Üç puan kartı — Yemek / Ambiyans / Servis, her biri puan + özet
3. **Ne yenir** — 5 yemek, kaç kişinin önerdiğiyle birlikte
4. **Ambiyans** — özet, etiketler, dress code, kimler için uygun
5. **Servis** — özet, artılar ve eksiler
6. **Fiyat** — kişi başı aralık, açıklama notu
7. **Rezervasyon** — gerekiyor mu, telefon, link, bekleme süresi, kapora
8. **Adres** — açık adres + Google Maps bağlantısı
9. **Kaynaklar** — hangi platformdan kaç yorum incelendi, son güncelleme tarihi

## Görsel yön

- Arka plan: canlı, derin kırmızı (`#C1121F` civarı)
- Metin: krem / kemik beyazı
- Vurgu: altın sarısı — puan rozetleri, ödül işaretleri, aktif filtreler
- Kartlar: arka plandan biraz koyu kırmızı yüzeyler, yumuşak köşeler
- Fotoğraf alanları baştan yer tutucu olarak yerleştirilir

## İlk veri seti

1. Karaköy Lokantası (Karaköy)
2. Balıkçı Kahraman (Rumelikavağı)
3. Beyaz Fırın Etiler (Etiler)

Üçü için de gerçek yorum araştırması yapılacak, veri uydurulmayacak. Bir alan
güvenilir biçimde bulunamazsa boş bırakılır ve sitede "veri yok" olarak gösterilir —
tahmin yazılmaz.

## Test / doğrulama

Otomatik test altyapısı kurulmaz (statik katalog, mantık yüzeyi küçük). Bunun
yerine her sürümde tarayıcıda doğrulanır:

- Konsolda hata yok
- Üç restoran da listede görünüyor
- Her filtre kombinasyonu doğru sonuç veriyor, boş sonuçta anlamlı mesaj çıkıyor
- Her sıralama seçeneği doğru sırayı üretiyor
- Üç detay sayfası da eksiksiz açılıyor; geçersiz `?id=` anlamlı hata gösteriyor
- Mobil genişlikte (375px) düzen bozulmuyor

## Bilinen sınırlar

- Puanlar bir yorum örnekleminden çıkarılmış öznel değerlendirmelerdir
- Veri elle güncellenir; restoran kapanır veya menüsünü değiştirirse site geride kalır
- `sonGuncelleme` alanı bu nedenle her restoranda gösterilir
- `Eater` adı, Vox Media'nın eater.com yayınıyla çakışıyor. Kişisel/yerel kullanımda
  sorun değil; yayına alınırsa marka değerlendirmesi gerekir.
