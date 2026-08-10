# SEMA — `veri.js` veri şeması

Bu dosya `veri.js` içindeki `RESTORANLAR` dizisinin **bağlayıcı sözleşmesidir**. Görev 3-6'daki
arayüz kodu bu alan adlarına doğrudan bağlıdır; bir alan adı değiştirilirse arayüz kırılır.
İleride otomatik veri toplama yazılırsa, çıktısı bu şemaya birebir uymak zorundadır.

---

## 1. Temel kurallar

1. **Veri uydurulmaz.** Araştırmayla doğrulanamayan her skaler alan `null`, her dizi alanı `[]`
   bırakılır. Arayüz bunları "veri yok" olarak gösterir. Boş alan doğru ve beklenen bir sonuçtur;
   tahmini değer yazmak bu şemanın en ciddi ihlalidir.
2. **Genel puan / ortalama puan yoktur.** `genelPuan` diye bir alan **eklenmez**. Yemek, ambiyans
   ve servis daima ayrı ayrı sunulur. Bu bilinçli bir karardır.
3. **Fiyat bir puan değildir.** `fiyat` yalnızca etiket ve filtre ölçütüdür, hiçbir puana katılmaz.
4. **`veri.js` sadece veri içerir.** Fonksiyon, hesaplama, koşul, hesaplanmış alan yok.
5. **Şemada olmayan alan eklenmez.** Yeni bir bilgi türü gerekiyorsa önce bu doküman güncellenir.
6. **`veri.js` sarmalayıcı çıkarıldığında geçerli JSON olmalıdır.** `const RESTORANLAR = ` öneki ve
   sondaki `;` atıldığında kalan metin katı JSON olmalı: çift tırnaklı anahtar ve metinler, sonda
   virgül yok, dizi içinde yorum yok, `undefined` yok, JS ifadesi yok. Yorumlar yalnızca `const`
   satırının üstüne yazılır. Doğrulama betiği bu kurala dayanır.
7. **Zincir restoranlarda yalnızca ilgili şubenin verisi kullanılır.** Kaynak şubeyi ayırt
   edemiyorsa o kaynak dışarıda bırakılır veya durum ilgili `ozet` alanında açıkça belirtilir.

---

## 2. Puanlama kılavuzu

`yemek.puan`, `ambiyans.puan`, `servis.puan` alanları 0-10 aralığında sayı veya `null`'dur.
Puan verilirken hangi yorum örüntüsüne dayandığı ilgili `ozet` alanında somut olarak yazılır.

| Aralık | Anlamı |
|---|---|
| **9.0 – 10** | Yorumlarda neredeyse hiç olumsuz yok; o kategoride şehirde referans nokta. |
| **8.0 – 8.9** | Güçlü, ama tekrarlayan küçük şikâyetler var. |
| **7.0 – 7.9** | İyi, ama belirgin ve sık tekrarlanan bir zayıflık var. |
| **7.0 altı** | Yorumlarda kalıcı memnuniyetsizlik. |
| **`null`** | Puan verecek kadar kaynak bulunamadı. Tahmini puan yazılmaz. |

---

## 3. Şema

```js
{
  id: "karakoy-lokantasi",              // string, slug
  isim: "Karaköy Lokantası",            // string
  ulke: "Turkey",                       // string, İngilizce ülke adı
  sehir: "Istanbul",                    // string, İngilizce/yerel yazım
  semt: "Karaköy",                      // string
  mutfak: ["Türk", "Meyhane"],          // string[]
  adres: "...",                         // string | null
  mapsUrl: "https://...",               // string | null
  koordinat: { lat: 41.0, lng: 28.9 },  // {lat,lng} | null

  fiyat: {
    segment: "orta",                    // "ucuz" | "orta" | "pahali" | null
    kisiBasi: { min: 800, max: 1400, paraBirimi: "TRY" },  // | null
    not: "..."                          // string | null
  },

  yemek: { puan: 9.0, ozet: "..." },    // puan: number | null

  neYenir: [                            // 5 eleman hedefi; daha az bulunursa bulunduğu kadar
    { yemek: "Karides Güveç", kacKisiOnerdi: 42, not: "..." }
  ],

  ambiyans: {
    puan: 9.2,                          // number | null
    ozet: "...",                        // string | null
    etiketler: ["tarihi", "canlı"],     // string[] — filtrede kullanılır
    dressCode: "...",                   // string | null
    uygun: ["çift", "grup"]             // string[]
  },

  servis: {
    puan: 8.5,                          // number | null
    ozet: "...",                        // string | null
    artilar: ["..."],                   // string[]
    eksiler: ["..."]                    // string[]
  },

  oduller: [                            // boş dizi olabilir
    // detay: rozette gösterilmez, serbest metin kökendir (bkz. 4.7)
    { tip: "michelin-bib", detay: "MICHELIN Guide İstanbul 2024 Bib Gourmand seçkisi — iki bağımsız listeden doğrulandı." }
  ],

  rezervasyon: {
    gerekiyor: true,                    // boolean | null
    yontem: ["telefon", "online"],      // string[]
    telefon: "+90 ...",                 // string | null
    link: "https://...",                // string | null
    beklemeSuresi: "...",               // string | null
    kapora: { var: false, detay: "" }   // | null
  },

  kaynaklar: {
    google:      { puan: 4.5, yorumSayisi: 12400, incelenen: 60 },  // | null
    tripadvisor: { puan: 4.0, yorumSayisi: 3100,  incelenen: 40 },  // | null
    tiktok:      { incelenenVideo: 15, ozet: "..." },               // | null
    diger:       "Michelin Guide, Vedat Milor incelemesi ..."       // string | null, opsiyonel
  },

  fotolar: [                            // boş olabilir
    { dosya: "fotolar/mikla-1.jpg", alt: "...", kaynak: "https://...", kredi: "Mikla" }
  ],
  sonGuncelleme: "2026-08-08"           // "YYYY-AA-GG"
}
```

---

## 4. Alan alan referans

### 4.1 Kimlik ve konum

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `id` | `string` | Hayır | Slug. Küçük harf, ASCII, kelimeler arası `-`. Dizi içinde **tekil** olmalı. Arayüzde anahtar olarak kullanılır. Elle yazılır, restoran adından türetilir. |
| `isim` | `string` | Hayır | Restoranın kendi tanıttığı ad. Kaynak: resmî site / resmî sosyal hesap. Zincirse şube adı da yazılır (`"Beyaz Fırın Etiler"`). |
| `ulke` | `string` | Hayır | İngilizce ülke adı (`"Turkey"`, `"France"`). `kure.js` içindeki `ULKE_KODLARI` anahtarlarıyla birebir aynı yazılmalı — aksi halde ülke kürede vurgulanmaz. |
| `sehir` | `string` | Hayır | Şehrin İngilizce/uluslararası yazımı (`"Istanbul"`, `"Paris"`). |
| `semt` | `string` | Hayır | Restoranın bulunduğu semt. Kaynak: doğrulanmış adres. Filtrede kullanılır, yazımı tutarlı olmalı. |
| `mutfak` | `string[]` | Hayır (boş olabilir) | Mutfak/konsept etiketleri. Kaynak: Michelin Guide açıklaması, resmî site, yemek yazıları. Filtrede kullanılır. |
| `adres` | `string \| null` | Evet | Tam açık adres. **Yalnızca** resmî site veya birbirini doğrulayan en az iki bağımsız kaynaktan yazılır. Örüntüden adres türetilmez. |
| `mapsUrl` | `string \| null` | Evet | Haritada açma bağlantısı. Ya bulunmuş gerçek bir yer bağlantısı olur, ya da **doğrulanmış** `isim + adres` metninden kurulan `https://www.google.com/maps/search/?api=1&query=...` biçiminde bir arama bağlantısı olur. İkinci durumda bağlantı bir olgu iddiası değil, doğrulanmış metinden üretilmiş deterministik bir bağlantıdır. Adres doğrulanmamışsa `null`. |
| `koordinat` | `{lat:number, lng:number} \| null` | Evet | Restoranın konumu. Yalnızca restoranı **adıyla** işaretleyen bir kaynaktan (ör. OpenStreetMap/Nominatim POI kaydı) alınır. Yalnızca cadde/sokak merkezine düşen geokod sonucu **kullanılmaz** — `null` bırakılır. |

### 4.2 `fiyat`

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `fiyat.segment` | `"ucuz" \| "orta" \| "pahali" \| null` | Evet | Filtre değeri. **Sadece bu üç değer**; Türkçe karakter yok, küçük harf ASCII (`pahali`, `"pahalı"` değil). Arayüzde `₺` / `₺₺` / `₺₺₺` olarak gösterilir. Kaynak: fiyat listeleri, doğrulanmış adisyonlar, kaynaklardaki fiyat seviyesi etiketleri, yorumlardaki fiyat örüntüsü. Kaynaklar çelişiyorsa çelişki `fiyat.not` içinde açıkça yazılır. Eşikler (kişi başı, TRY, İstanbul 2026 — sahibinin belirlediği ölçüt): **`ucuz`** 750 ₺ altı; **`orta`** 750-2.500 ₺; **`pahali`** 2.500 ₺ üstü. Kişi başı somut tutar yoksa `fiyat.not` içindeki kanıtlar bu eşiklere göre değerlendirilip segment ona göre seçilir. |
| `fiyat.kisiBasi` | `{min:number, max:number, paraBirimi:string} \| null` | Evet | Kişi başı harcama aralığı. **Yalnızca** kaynağın kendisi kişi başı bir aralık verdiğinde doldurulur. Toplam hesabı kişi sayısına bölerek, ya da menü kalemlerini toplayarak aralık **üretilmez** — o durumda `null` bırakılır ve somut sayılar `fiyat.not` içine yazılır. `paraBirimi` ISO kodu (`"TRY"`). |
| `fiyat.not` | `string \| null` | Evet | Fiyatla ilgili serbest metin: doğrulanmış somut tutarlar, tutarların **tarihi**, ekmek/su/servis bedeli gibi ek kalemler, kaynaklar arası çelişkiler, fiyatın neden aralık olarak verilemediği. Tarih taşımayan fiyat verisi kullanılacaksa tarihsiz olduğu burada belirtilir. |

### 4.3 `yemek`

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `yemek.puan` | `number \| null` | Evet | 0-10. Puanlama kılavuzuna göre. Yalnızca yemeğin kendisi; fiyat/servis/ambiyans buraya karışmaz. |
| `yemek.ozet` | `string \| null` | Evet | Puanın hangi yorum örüntüsüne dayandığını **somut** anlatır: hangi platformda kaç yorum, hangi övgü ve hangi şikâyet tekrarlanıyor. Zincirse şube ayrımının yapılıp yapılamadığı burada belirtilir. |

### 4.4 `neYenir`

Dizi. 5 eleman hedeflenir; daha azı bulunursa bulunduğu kadar yazılır. **Boş olamaz** —
doğrulama betiği boş `neYenir` dizisini hata sayar.

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `yemek` | `string` | Hayır | Yemeğin adı, mümkünse menüde yazdığı gibi. |
| `kacKisiOnerdi` | `number \| null` | Evet | Bu yemeği öneren **kişi** sayısı. Yalnızca gerçekten sayılabilen bir yorum kümesinden gelir. Kaç kaynağın yemekten söz ettiği bu alana yazılmaz — o bilgi `not` alanına gider. Sayı üretilemiyorsa `null`. Yuvarlak/temsilî sayı yazmak yasaktır. |
| `not` | `string \| null` | Evet | Yemeğin neden öne çıktığı ve **hangi kaynaklarda** geçtiği. Kaynaklar arasında görüş ayrılığı varsa (bir yazar övüp diğeri eleştiriyorsa) ikisi de yazılır. |

### 4.5 `ambiyans`

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `ambiyans.puan` | `number \| null` | Evet | 0-10. Puanlama kılavuzuna göre. Mekân, dekor, gürültü, manzara, kalabalık. |
| `ambiyans.ozet` | `string \| null` | Evet | Puanın dayandığı somut örüntü. |
| `ambiyans.etiketler` | `string[]` | Hayır (boş olabilir) | **Filtrede kullanılır** — küçük harf, kısa, tutarlı yazılmış etiketler (`"canlı"`, `"gürültülü"`, `"teras"`). Aynı kavram için farklı yazım kullanılmaz. Doğrulama betiği bunun dizi olmasını şart koşar. |
| `ambiyans.dressCode` | `string \| null` | Evet | Kılık kıyafet kuralı. **Yalnızca** restoran veya bir kaynak açıkça belirtiyorsa yazılır. Mekânın "şıklığından" kural çıkarılmaz. |
| `ambiyans.uygun` | `string[]` | Hayır (boş olabilir) | Kimlere uygun (`"çift"`, `"grup"`, `"iş yemeği"`, `"tek kişi"`). Kaynakta karşılığı olmayan etiket eklenmez. |

### 4.6 `servis`

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `servis.puan` | `number \| null` | Evet | 0-10. Puanlama kılavuzuna göre. Personel, hız, doğruluk, şikâyet yönetimi. |
| `servis.ozet` | `string \| null` | Evet | Puanın dayandığı somut örüntü. |
| `servis.artilar` | `string[]` | Hayır (boş olabilir) | Yorumlarda tekrarlanan olumlu servis örüntüleri. Her madde bir kaynağa dayanmalı. |
| `servis.eksiler` | `string[]` | Hayır (boş olabilir) | Yorumlarda tekrarlanan olumsuz servis örüntüleri. Fiyat/değer şikâyetleri servis kaynaklıysa (fiyatın önceden söylenmemesi, adisyon hatası) buraya da yazılır. |

### 4.7 `oduller`

Dizi; **boş olabilir ve boş olması normaldir**.

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `tip` | `string` | Hayır | Ödülün makine-okunur türü. Kullanılan değerler: `"michelin-yildiz"`, `"michelin-bib"`, `"michelin-secilmis"` (yıldız/Bib olmadan rehberde yer alma), `"gault-millau"`. Yeni bir tür gerekirse bu listeye eklenir. Arayüz `tip` değerini kısa bir rozet etiketine çevirir (`bilesenler.js` içindeki `odulEtiketi`): `"michelin-bib"` → "Michelin Bib Gourmand", `"michelin-secilmis"` → "Michelin Guide seçkisi", `"michelin-yildiz"` → "Michelin yıldızı", `"michelin-yesil"` → "Michelin Yeşil Yıldız", `"gault-millau"` → "Gault&Millau", `"servis-odulu"` → "Servis ödülü", `"50best"` → "World's 50 Best"; tanınmayan bir `tip` → "Ödüllü". Rozet **asla** `detay` metnini göstermez. |
| `detay` | `string` | Hayır | Ödülün **serbest metin kökeni/provenance'ı** — kısa bir etiket değil, ödülün doğrulanma şeklini anlatan cümle(ler), mümkünse yıl/seçki bilgisiyle. Rozette gösterilmez; yalnızca detay sayfasında rozetlerin altında okunabilir metin olarak (`.odul-detaylari`) render edilir. |

> **Michelin kuralı.** Michelin bilgisi asla varsayımla yazılmaz. Restoranın Michelin Guide
> İstanbul seçkisinde yer aldığı doğrulanamıyorsa `oduller: []` olur. "Bu kadar bilinen bir
> restoranın muhtemelen vardır" biçiminde bir çıkarım yapılmaz. Ayrıca **yıldız**, **Bib Gourmand**
> ve **rehberde seçilmiş olmak** birbirinden farklı üç şeydir; hangisi olduğu doğrulanmadan
> `tip` yazılmaz.

### 4.8 `rezervasyon`

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `rezervasyon.gerekiyor` | `boolean \| null` | Evet | Rezervasyon zorunlu mu. Kaynaklar "hafta sonu rezervasyon ya da sıra beklemek gerekir" gibi koşullu şeyler söylüyorsa bu alan `null` bırakılır ve durum `beklemeSuresi` içinde anlatılır. |
| `rezervasyon.yontem` | `string[]` | Hayır (boş olabilir) | `"telefon"`, `"online"`, `"e-posta"`. Yalnızca varlığı doğrulanmış kanallar. |
| `rezervasyon.telefon` | `string \| null` | Evet | Uluslararası biçimde (`"+90 212 ..."`). **Yalnızca** resmî site veya birbirini doğrulayan en az iki bağımsız kaynaktan. Telefon numarası asla tahmin edilmez veya örüntüden türetilmez. |
| `rezervasyon.link` | `string \| null` | Evet | Doğrudan rezervasyon sayfası. Yalnızca erişilebildiği doğrulanan URL yazılır. |
| `rezervasyon.beklemeSuresi` | `string \| null` | Evet | Serbest metin: yoğunluk, sıra bekleme, masa tutma süresi gibi bilgiler ve bunların kaynağı. |
| `rezervasyon.kapora` | `{var:boolean, detay:string} \| null` | Evet | Kapora/ön ödeme. Kapora olup olmadığına dair **hiçbir** bilgi bulunamadıysa alan `null` bırakılır — `{var:false}` yazmak "kapora yok" iddiasıdır ve doğrulama gerektirir. |

### 4.9 `kaynaklar`

Her platform için ayrı nesne. **Bir platformdan kullanılabilir hiçbir şey elde edilemediyse o
anahtar `null` yapılır** (ör. `kaynaklar.tiktok: null`). Platform bloğunu uydurma sayılarla
doldurmak yasaktır.

| Alan | Tip | `null` olabilir | Anlamı ve kaynağı |
|---|---|---|---|
| `kaynaklar.google` | `{puan, yorumSayisi, incelenen} \| null` | Evet | `puan`: Google Maps toplu puanı. `yorumSayisi`: platformdaki toplam yorum sayısı. Google Maps doğrudan kazımaya kapalı olduğundan bu iki değer yalnızca kendini açıkça "Google puanı / Google yorumu" diye tanımlayan bir kaynaktan alınır. Kaynağın güncelliği şüpheliyse (ör. yanında bariz eski fiyat verisi varsa) blok `null` yapılır. |
| `kaynaklar.tripadvisor` | `{puan, yorumSayisi, incelenen} \| null` | Evet | Aynı kurallar TripAdvisor için. |
| `kaynaklar.tiktok` | `{incelenenVideo, ozet} \| null` | Evet | `incelenenVideo`: içeriği **gerçekten okunan/izlenen** video sayısı. `ozet`: bu videolardan çıkan bulgu. Videoya erişilemediyse anahtar `null`. |
| `kaynaklar.diger` | `string \| null` | Evet (opsiyonel) | `google`/`tripadvisor`/`tiktok` kalıplarına girmeyen ama puanlamada fiilen kullanılan diğer kaynakları (Michelin Guide, Vedat Milor, Şikayetvar, Ekşi Sözlük, Yandex Haritalar, blog incelemeleri vb.) adlandıran serbest metin. **Yalnızca** o restoranın kendi `ozet`/`not` alanlarında zaten anılan kaynaklardan derlenir — buraya yeni bir araştırma sonucu eklenmez. Detay sayfasındaki kaynaklar tablosunun son satırında, "veri yok" satırı gibi değer sütunlarına yayılarak gösterilir. |
| `incelenen` | `number` | — | **Gerçekten okunan** yorum sayısı. `yorumSayisi` ile karıştırılmaz: `yorumSayisi` platformdaki toplam, `incelenen` bizim okuduğumuzdur. Temsilî yuvarlak sayı yazmak yasaktır; 12 yorum okunduysa `12` yazılır. |

### 4.10 Diğer

| Alan | Tip | `null` olabilir | Anlamı |
|---|---|---|---|
| `fotolar` | `{dosya,alt,kaynak,kredi}[]` | Hayır | Restoran fotoğrafları; fotoğraf bulunamazsa `[]`. Sıradaki ilk öğe kartta ve detay sayfasının başında kullanılır. |
| `fotolar[].dosya` | `string` | Hayır | Depo içindeki göreli yol (`fotolar/<id>-1.jpg`). Dış bağlantı **kullanılmaz** — site çevrimdışı ve `file://` üzerinden de çalışmalı. |
| `fotolar[].alt` | `string` | Hayır | İngilizce, kısa, görselde ne olduğunu anlatan metin (site içeriği İngilizce). Erişilebilirlik için zorunlu. |
| `fotolar[].kaynak` | `string` | Hayır | Görselin alındığı **tam URL**. Kaynağı adlandırılamayan görsel kullanılmaz. |
| `fotolar[].kredi` | `string` | Hayır | Görselin kime ait olduğu; detay sayfasında her fotoğrafın altında gösterilir. Bu görseller üçüncü tarafların telifindedir; site yayına alınacaksa izin gerekir. |
| `sonGuncelleme` | `string` | Hayır | Verinin toplandığı tarih, `"YYYY-AA-GG"` biçiminde. |

---

## 5. Doğrulama

`veri.js` değiştirildikten sonra en az şu denetimler geçmelidir:

- Sarmalayıcı çıkarıldığında içerik geçerli JSON olarak ayrıştırılabiliyor.
- Her restoranda şu üst düzey alanlar mevcut: `id`, `isim`, `ulke`, `sehir`, `semt`, `mutfak`,
  `adres`, `mapsUrl`, `koordinat`, `fiyat`, `yemek`, `neYenir`, `ambiyans`, `servis`, `oduller`,
  `rezervasyon`, `kaynaklar`, `fotolar`, `sonGuncelleme`.
- `fiyat.segment` ∈ {`"ucuz"`, `"orta"`, `"pahali"`, `null`}.
- `ambiyans.etiketler` bir dizi; `neYenir` boş olmayan bir dizi.
- `yemek.puan`, `ambiyans.puan`, `servis.puan` her biri `null` ya da 0-10 arası sayı.
- Hiçbir yerde `genelPuan` anahtarı yok.
- `id` değerleri tekil.
