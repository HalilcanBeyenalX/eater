# EATER Restoran Rehberi — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** İstanbul'daki üç restoranı, gerçek kullanıcı yorumlarından çıkarılmış Yemek / Ambiyans / Servis metrikleriyle tanıtan, filtrelenebilir statik bir web sitesi kurmak.

**Architecture:** Framework ve build adımı olmayan statik site. Veri `veri.js` içinde saf bir dizi olarak durur, mantık içermez. `app.js` liste sayfasını (filtre + sıralama), `detay.js` tek restoran sayfasını çizer; ikisi de `bilesenler.js` içindeki paylaşılan çizim yardımcılarını kullanır. İki sayfa birbirini tanımaz, sadece URL'deki `?id=` üzerinden bağlanır.

**Tech Stack:** HTML, CSS, vanilla JavaScript (ES2020). Harici bağımlılık yok. Yerel sunucu: `python3 -m http.server`.

**Kaynak spec:** `docs/superpowers/specs/2026-08-08-eater-restoran-rehberi-design.md`

## Global Constraints

Aşağıdakiler her görev için geçerlidir, her seferinde tekrarlanmaz:

- **Harici bağımlılık yok.** CDN, npm paketi, web fontu, analytics — hiçbiri kullanılmaz. Her şey depo içinde olmalı.
- **Build adımı yok.** Dosyalar tarayıcıya doğrudan servis edilir.
- **Genel puan / ortalama puan hesaplanmaz ve hiçbir yerde gösterilmez.** Yemek, ambiyans ve servis daima ayrı ayrı sunulur. Bu spec'in bilinçli bir kararıdır.
- **Fiyat bir puan değildir.** Sadece `₺` / `₺₺` / `₺₺₺` etiketi ve filtre ölçütüdür.
- **Veri uydurulmaz.** Araştırmayla doğrulanamayan her alan `null` (veya boş dizi) bırakılır ve arayüzde "veri yok" olarak gösterilir. Tahmini değer yazmak bu planın en ciddi ihlalidir.
- **`veri.js` sadece veri içerir.** Fonksiyon, hesaplama, koşul yok.
- **Tüm arayüz metinleri Türkçe.**
- **Renk ve ölçü değerleri `styles.css` içindeki `:root` değişkenlerinden gelir.** Kod içine sabit renk yazılmaz.
- **Otomatik test altyapısı kurulmaz** (spec kararı). Bunun yerine her görev tarayıcıda, konsolda çalıştırılan somut doğrulama adımlarıyla bitirilir.
- **Her görevin sonunda commit atılır.**

---

## Dosya Yapısı

| Dosya | Sorumluluk | Oluşturan görev |
|---|---|---|
| `index.html` | Liste sayfası iskeleti | Görev 1 |
| `styles.css` | Tüm görsel — tema değişkenleri, kart, filtre, detay stilleri | Görev 1 (sonraki görevlerde eklenir) |
| `.claude/launch.json` | Yerel önizleme sunucusu tanımı | Görev 1 |
| `veri.js` | Restoran verisi (`const RESTORANLAR = [...]`) | Görev 2 |
| `SEMA.md` | Veri alanlarının tanımı — otomasyon için referans | Görev 2 |
| `bilesenler.js` | Paylaşılan çizim yardımcıları: `puanRozeti`, `fiyatEtiketi`, `veyaYok` | Görev 3 |
| `app.js` | Liste render + filtreleme + sıralama | Görev 3 (Görev 4-5'te genişler) |
| `detay.html` | Detay sayfası iskeleti | Görev 6 |
| `detay.js` | Detay sayfası render | Görev 6 |
| `README.md` | Projenin ne olduğu, nasıl çalıştırıldığı | Görev 7 |

---

## Görev 1: Proje iskeleti ve görsel tema

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `.claude/launch.json`

**Interfaces:**
- Consumes: yok (ilk görev)
- Produces: `styles.css` içinde `:root` CSS değişkenleri (`--kirmizi`, `--krem`, `--altin`, `--yuvarlak` vb.) — sonraki tüm görevler bunları kullanır. `index.html` içinde `#filtreler`, `#sonucSayisi`, `#liste` id'li boş kapsayıcılar — Görev 3-5 bunları doldurur.

- [ ] **Step 1: `index.html` oluştur**

```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>EATER — İstanbul Restoran Rehberi</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="ust">
    <h1 class="logo">EATER</h1>
    <p class="alt-baslik">İstanbul'un öne çıkan restoranları — yorumlardan çıkarılmış metriklerle</p>
  </header>

  <main class="govde">
    <section id="filtreler" class="filtreler" aria-label="Filtreler"></section>
    <p id="sonucSayisi" class="sonuc-sayisi"></p>
    <section id="liste" class="liste"></section>
  </main>

  <footer class="alt">
    <p>Puanlar, kullanıcı yorumlarından oluşan bir örneklemden çıkarılmış öznel değerlendirmelerdir.
       Genel puan hesaplanmaz — yemek, ambiyans ve servis ayrı ayrı değerlendirilir.</p>
  </footer>
</body>
</html>
```

Script etiketi henüz yok — `veri.js` ve `app.js` sonraki görevlerde oluşturulacak. Şimdi eklenirse konsolda 404 hatası çıkar.

- [ ] **Step 2: `styles.css` oluştur**

```css
:root {
  --kirmizi: #C1121F;
  --kirmizi-koyu: #9A0E19;
  --kirmizi-derin: #6E0A12;
  --krem: #FFF3E4;
  --krem-sonuk: rgba(255, 243, 228, 0.72);
  --krem-silik: rgba(255, 243, 228, 0.48);
  --altin: #F5B700;
  --altin-koyu: #C99400;
  --kenar: rgba(255, 243, 228, 0.18);
  --golge: 0 6px 20px rgba(0, 0, 0, 0.28);
  --yuvarlak: 14px;
  --serif: Georgia, "Times New Roman", serif;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--kirmizi);
  background-image:
    radial-gradient(1200px 600px at 50% -10%, rgba(245, 183, 0, 0.16), transparent 65%);
  color: var(--krem);
  font-family: var(--sans);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.ust {
  padding: 56px 24px 28px;
  text-align: center;
}

.logo {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(44px, 9vw, 88px);
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--krem);
  text-shadow: 0 3px 0 var(--kirmizi-derin);
}

.alt-baslik {
  margin: 10px auto 0;
  max-width: 46ch;
  color: var(--krem-sonuk);
  font-size: 15px;
}

.govde {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 64px;
}

.sonuc-sayisi {
  margin: 24px 2px 14px;
  color: var(--krem-silik);
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.liste {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 22px;
}

.alt {
  border-top: 1px solid var(--kenar);
  padding: 26px 24px 48px;
  text-align: center;
}

.alt p {
  max-width: 62ch;
  margin: 0 auto;
  color: var(--krem-silik);
  font-size: 13px;
}
```

- [ ] **Step 3: `.claude/launch.json` oluştur**

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "eater",
      "runtimeExecutable": "python3",
      "runtimeArgs": ["-m", "http.server", "8123"],
      "port": 8123
    }
  ]
}
```

- [ ] **Step 4: Tarayıcıda doğrula**

`eater` önizleme sunucusunu başlat (`preview_start` ile, `name: "eater"`), sonra:
- Sayfa kırmızı arka planla açılıyor, ortada "EATER" başlığı görünüyor
- `read_console_messages` → hiç hata yok (özellikle 404 yok)
- `javascript_tool` ile doğrula:
  ```js
  getComputedStyle(document.documentElement).getPropertyValue('--altin').trim()
  ```
  Beklenen: `#F5B700`

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css .claude/launch.json
git commit -m "feat: proje iskeleti ve kırmızı tema"
```

---

## Görev 2: Veri araştırması, şema dokümanı ve `veri.js`

Bu görev planın en uzun ve en dikkat isteyen adımı. Kod yazmak değil, araştırma yapmak.

**Files:**
- Create: `veri.js`
- Create: `SEMA.md`

**Interfaces:**
- Consumes: yok
- Produces: Global `RESTORANLAR` dizisi. Her eleman aşağıdaki şemaya birebir uyar. Görev 3-6 bu alan adlarına doğrudan bağlıdır — alan adı değiştirilirse arayüz kırılır.

**Şema (bağlayıcı sözleşme):**

```js
{
  id: "karakoy-lokantasi",              // string, slug
  isim: "Karaköy Lokantası",            // string
  ulke: "Türkiye",                      // string
  sehir: "İstanbul",                    // string
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
    { tip: "michelin-bib", detay: "Bib Gourmand 2024" }
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
    tiktok:      { incelenenVideo: 15, ozet: "..." }                // | null
  },

  fotolar: [],                          // şimdilik daima boş
  sonGuncelleme: "2026-08-08"           // "YYYY-AA-GG"
}
```

**Puanlama kılavuzu (tutarlılık için):** 9.0+ = yorumlarda neredeyse hiç olumsuz yok, o kategoride şehirde referans nokta. 8.0-8.9 = güçlü, tekrarlayan küçük şikâyetler var. 7.0-7.9 = iyi ama belirgin ve sık tekrarlanan bir zayıflık var. 7.0 altı = yorumlarda kalıcı memnuniyetsizlik. Puanı yazarken hangi yorum örüntüsüne dayandığını `ozet` alanında somut olarak belirt.

- [ ] **Step 1: Karaköy Lokantası için araştırma yap**

`WebSearch` ve `WebFetch` kullan. Aranacaklar:
- `Karaköy Lokantası yorumlar Google Maps puan`
- `Karaköy Lokantası TripAdvisor reviews`
- `Karaköy Lokantası ne yenir en iyi yemekler`
- `Karaköy Lokantası rezervasyon telefon kapora`
- `Karaköy Lokantası Michelin Guide İstanbul`

Notlar:
- Google Maps ve TripAdvisor doğrudan kazımaya kapalıdır. Arama sonuçlarındaki toplu puan bilgisi, yemek yazıları, blog incelemeleri ve erişilebilen yorum sayfaları kullanılır.
- TikTok için: `Karaköy Lokantası TikTok` araması + erişilebilen video açıklamaları. Erişilemezse `kaynaklar.tiktok = null`.
- **Michelin bilgisini uydurma.** Michelin Guide İstanbul listesini doğrula; restoran listede yoksa `oduller: []`.
- Bulguları not al: hangi kaynaktan kaç yorum/yazı incelendi. `incelenen` alanına gerçek sayıyı yaz.

- [ ] **Step 2: Balıkçı Kahraman için araştırma yap**

Aynı yöntem. Aramalar:
- `Balıkçı Kahraman Rumelikavağı yorumlar`
- `Balıkçı Kahraman TripAdvisor`
- `Balıkçı Kahraman fiyat kişi başı`
- `Balıkçı Kahraman rezervasyon telefon`

Bu restoran fiyat şikâyetleriyle bilinir; yorumlardaki fiyat/değer örüntüsünü `fiyat.not` ve `servis.eksiler` alanlarına dürüstçe yansıt.

- [ ] **Step 3: Beyaz Fırın Etiler için araştırma yap**

Aramalar:
- `Beyaz Fırın Etiler yorumlar`
- `Beyaz Fırın Etiler kahvaltı menü fiyat`
- `Beyaz Fırın Etiler rezervasyon`

Beyaz Fırın bir zincir; **sadece Etiler şubesine ait** yorumları kullan, diğer şubelerin yorumlarını karıştırma. Ayırt edilemiyorsa bunu `ozet` alanında belirt.

- [ ] **Step 4: `SEMA.md` yaz**

Yukarıdaki şema bloğunu, her alanın ne anlama geldiğini ve hangi kaynaktan doldurulacağını açıklayan bir tablo hâlinde `SEMA.md` dosyasına yaz. Bu dosya ileride otomasyon yazılırken sözleşme olarak kullanılacak. Şunları mutlaka içersin:
- Her alanın tipi ve `null` olabilir mi
- `fiyat.segment` için izinli üç değer: `"ucuz"`, `"orta"`, `"pahali"` (Türkçe karakter yok — filtre değeri olarak kullanılıyor)
- Puanlama kılavuzu (yukarıdaki 9.0+/8.0-8.9/7.0-7.9/7.0- ölçeği)
- "Doğrulanamayan alan `null` bırakılır, tahmin yazılmaz" kuralı

- [ ] **Step 5: `veri.js` yaz**

```js
// EATER — restoran verisi.
// Bu dosya SADECE veri içerir. Mantık, hesaplama veya fonksiyon eklenmez.
// Alan tanımları için SEMA.md dosyasına bakın.
// Doğrulanamayan alanlar null bırakılır — tahmini değer yazılmaz.

const RESTORANLAR = [
  // Görev 2'de araştırılan üç restoran, şemaya birebir uygun olarak buraya
];
```

Üç restoranı da araştırma bulgularıyla doldur. `sonGuncelleme` alanına bugünün tarihini yaz.

- [ ] **Step 6: Veriyi doğrula**

`index.html`'e geçici olarak `<script src="veri.js"></script>` ekle, sayfayı yenile ve konsolda şu denetimi çalıştır:

```js
(() => {
  const zorunlu = ['id','isim','ulke','sehir','semt','mutfak','fiyat','yemek',
                   'neYenir','ambiyans','servis','oduller','rezervasyon',
                   'kaynaklar','fotolar','sonGuncelleme'];
  const gecerliSegment = ['ucuz','orta','pahali',null];
  const hatalar = [];
  RESTORANLAR.forEach(r => {
    zorunlu.forEach(a => { if (!(a in r)) hatalar.push(`${r.id}: ${a} alanı yok`); });
    if (!gecerliSegment.includes(r.fiyat.segment)) hatalar.push(`${r.id}: geçersiz fiyat segmenti`);
    if (!Array.isArray(r.ambiyans.etiketler)) hatalar.push(`${r.id}: etiketler dizi değil`);
    if (r.neYenir.length === 0) hatalar.push(`${r.id}: neYenir boş`);
    ['yemek','ambiyans','servis'].forEach(m => {
      const p = r[m].puan;
      if (p !== null && (typeof p !== 'number' || p < 0 || p > 10)) hatalar.push(`${r.id}: ${m} puanı geçersiz`);
    });
    if ('genelPuan' in r) hatalar.push(`${r.id}: genelPuan veride olmamalı`);
  });
  return { adet: RESTORANLAR.length, kimlikler: RESTORANLAR.map(r => r.id), hatalar };
})()
```

Beklenen: `adet: 3`, `hatalar: []`.

Sonra eklediğin geçici `<script>` etiketini `index.html`'den **çıkarma** — Görev 3'te zaten kalıcı olarak gerekecek. Yerinde bırak.

- [ ] **Step 7: Commit**

```bash
git add veri.js SEMA.md index.html
git commit -m "feat: üç restoranın araştırılmış verisi ve şema dokümanı"
```

---

## Görev 3: Liste render'ı

**Files:**
- Create: `bilesenler.js`
- Create: `app.js`
- Modify: `index.html` (script etiketleri)
- Modify: `styles.css` (kart stilleri)

**Interfaces:**
- Consumes: `RESTORANLAR` (Görev 2)
- Produces:
  - `puanRozeti(etiket: string, puan: number|null) → string` (HTML)
  - `fiyatEtiketi(segment: string|null) → string` (HTML)
  - `veyaYok(deger: any, bosMetin?: string) → string`
  - `kartHTML(r: Restoran) → string`
  - `render() → void` — `#liste` ve `#sonucSayisi` içeriğini günceller
  - Görev 4-5 `render()` fonksiyonunu genişletir; Görev 6 `bilesenler.js`'i kullanır.

- [ ] **Step 1: `bilesenler.js` oluştur**

```js
// EATER — app.js ve detay.js tarafından paylaşılan çizim yardımcıları.

const FIYAT_SEMBOLLERI = { ucuz: '₺', orta: '₺₺', pahali: '₺₺₺' };
const FIYAT_ADLARI = { ucuz: 'Ucuz', orta: 'Orta', pahali: 'Pahalı' };

function veyaYok(deger, bosMetin = 'veri yok') {
  if (deger === null || deger === undefined || deger === '') return bosMetin;
  return deger;
}

function puanRozeti(etiket, puan) {
  if (typeof puan !== 'number') {
    return `<span class="rozet rozet-yok">
      <span class="rozet-etiket">${etiket}</span>
      <span class="rozet-puan">—</span>
    </span>`;
  }
  return `<span class="rozet">
    <span class="rozet-etiket">${etiket}</span>
    <span class="rozet-puan">${puan.toFixed(1)}</span>
  </span>`;
}

function fiyatEtiketi(segment) {
  const sembol = FIYAT_SEMBOLLERI[segment];
  if (!sembol) return '<span class="fiyat fiyat-yok">veri yok</span>';
  return `<span class="fiyat" title="${FIYAT_ADLARI[segment]} fiyat aralığı">${sembol}</span>`;
}
```

- [ ] **Step 2: `app.js` oluştur**

```js
// EATER — liste sayfası. Kartları çizer, filtre ve sıralamayı yönetir.

function kartHTML(r) {
  const oduller = r.oduller
    .map(o => `<span class="odul">★ ${o.detay}</span>`)
    .join('');
  const rezUyari = r.rezervasyon.gerekiyor
    ? '<span class="rez-uyari">Rezervasyon gerekli</span>'
    : '';

  return `
    <a class="kart" href="detay.html?id=${encodeURIComponent(r.id)}">
      <div class="kart-foto" aria-hidden="true"><span>fotoğraf yakında</span></div>
      <div class="kart-govde">
        <div class="kart-ust">
          <h2 class="kart-isim">${r.isim}</h2>
          ${fiyatEtiketi(r.fiyat.segment)}
        </div>
        <p class="kart-yer">${r.semt} · ${r.mutfak.join(', ')}</p>
        <div class="rozetler">
          ${puanRozeti('Yemek', r.yemek.puan)}
          ${puanRozeti('Ambiyans', r.ambiyans.puan)}
          ${puanRozeti('Servis', r.servis.puan)}
        </div>
        <div class="isaretler">${oduller}${rezUyari}</div>
      </div>
    </a>`;
}

function render() {
  const liste = RESTORANLAR;
  document.getElementById('liste').innerHTML = liste.map(kartHTML).join('');
  document.getElementById('sonucSayisi').textContent = `${liste.length} restoran`;
}

document.addEventListener('DOMContentLoaded', render);
```

- [ ] **Step 3: `index.html`'e script etiketlerini ekle**

`</body>` etiketinden hemen önce, bu sırayla:

```html
  <script src="veri.js"></script>
  <script src="bilesenler.js"></script>
  <script src="app.js"></script>
```

Görev 2'de eklenen `veri.js` etiketi zaten varsa tekrar ekleme — sadece diğer ikisini altına koy. Sıra önemlidir: `app.js` hem `RESTORANLAR`'a hem `bilesenler.js`'e bağlıdır.

- [ ] **Step 4: `styles.css`'e kart stillerini ekle**

```css
.kart {
  display: block;
  background: var(--kirmizi-koyu);
  border: 1px solid var(--kenar);
  border-radius: var(--yuvarlak);
  box-shadow: var(--golge);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.16s ease, border-color 0.16s ease;
}

.kart:hover {
  transform: translateY(-3px);
  border-color: var(--altin);
}

.kart-foto {
  height: 150px;
  display: grid;
  place-items: center;
  background: repeating-linear-gradient(
    45deg,
    var(--kirmizi-derin),
    var(--kirmizi-derin) 12px,
    rgba(110, 10, 18, 0.72) 12px,
    rgba(110, 10, 18, 0.72) 24px
  );
  color: var(--krem-silik);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.kart-govde { padding: 16px 18px 18px; }

.kart-ust {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.kart-isim {
  margin: 0;
  font-family: var(--serif);
  font-size: 21px;
  font-weight: 700;
}

.kart-yer {
  margin: 4px 0 14px;
  color: var(--krem-sonuk);
  font-size: 13px;
}

.fiyat {
  flex: none;
  color: var(--altin);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.fiyat-yok { color: var(--krem-silik); font-size: 12px; font-weight: 400; }

.rozetler { display: flex; gap: 8px; }

.rozet {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 4px;
  border: 1px solid var(--kenar);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.14);
}

.rozet-etiket {
  color: var(--krem-silik);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.rozet-puan {
  color: var(--altin);
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
}

.rozet-yok .rozet-puan { color: var(--krem-silik); }

.isaretler {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.isaretler:empty { margin-top: 0; }

.odul, .rez-uyari {
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.03em;
}

.odul { background: var(--altin); color: var(--kirmizi-derin); font-weight: 700; }

.rez-uyari {
  border: 1px solid var(--kenar);
  color: var(--krem-sonuk);
}
```

- [ ] **Step 5: Tarayıcıda doğrula**

Sayfayı yenile:
- Üç kart yan yana/alt alta görünüyor, her birinde üç puan rozeti var
- `read_console_messages` → hata yok
- `javascript_tool`:
  ```js
  ({ kartAdedi: document.querySelectorAll('.kart').length,
     rozetAdedi: document.querySelectorAll('.rozet').length,
     ilkKartLinki: document.querySelector('.kart').getAttribute('href') })
  ```
  Beklenen: `kartAdedi: 3`, `rozetAdedi: 9`, link `detay.html?id=` ile başlıyor
- Ekran görüntüsü al, kırmızı/altın kontrastının okunur olduğunu gözle doğrula

- [ ] **Step 6: Commit**

```bash
git add bilesenler.js app.js index.html styles.css
git commit -m "feat: restoran kartları ve liste render'ı"
```

---

## Görev 4: Filtreleme

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

**Interfaces:**
- Consumes: `RESTORANLAR`, `render()` (Görev 3)
- Produces:
  - `filtrele(liste: Restoran[], f: FiltreDurumu) → Restoran[]`
  - `FiltreDurumu = { segment: string, semt: string, etiket: string, rezervasyon: string }` — boş string = filtre yok
  - `filtreDurumu` — modül düzeyinde durum nesnesi. Görev 5 buna `siralama` alanını ekler.

- [ ] **Step 1: `app.js`'e filtre durumu ve mantığını ekle**

`kartHTML` tanımının **altına**, `render` tanımının **üstüne**:

```js
const filtreDurumu = { segment: '', semt: '', etiket: '', rezervasyon: '' };

function filtrele(liste, f) {
  return liste.filter(r => {
    if (f.segment && r.fiyat.segment !== f.segment) return false;
    if (f.semt && r.semt !== f.semt) return false;
    if (f.etiket && !r.ambiyans.etiketler.includes(f.etiket)) return false;
    if (f.rezervasyon === 'gerekli' && r.rezervasyon.gerekiyor !== true) return false;
    if (f.rezervasyon === 'gerekmiyor' && r.rezervasyon.gerekiyor !== false) return false;
    return true;
  });
}

function benzersiz(degerler) {
  return [...new Set(degerler)].sort((a, b) => a.localeCompare(b, 'tr'));
}

function secimKutusu(id, etiket, secenekler) {
  const opsiyonlar = secenekler
    .map(s => `<option value="${s.deger}">${s.metin}</option>`)
    .join('');
  return `
    <label class="filtre">
      <span class="filtre-etiket">${etiket}</span>
      <select id="${id}">${opsiyonlar}</select>
    </label>`;
}

function filtreleriCiz() {
  const semtler = benzersiz(RESTORANLAR.map(r => r.semt));
  const etiketler = benzersiz(RESTORANLAR.flatMap(r => r.ambiyans.etiketler));

  document.getElementById('filtreler').innerHTML =
    secimKutusu('fSegment', 'Fiyat', [
      { deger: '', metin: 'Hepsi' },
      { deger: 'ucuz', metin: '₺ Ucuz' },
      { deger: 'orta', metin: '₺₺ Orta' },
      { deger: 'pahali', metin: '₺₺₺ Pahalı' }
    ]) +
    secimKutusu('fSemt', 'Semt',
      [{ deger: '', metin: 'Hepsi' }, ...semtler.map(s => ({ deger: s, metin: s }))]) +
    secimKutusu('fEtiket', 'Ambiyans',
      [{ deger: '', metin: 'Hepsi' }, ...etiketler.map(e => ({ deger: e, metin: e }))]) +
    secimKutusu('fRezervasyon', 'Rezervasyon', [
      { deger: '', metin: 'Farketmez' },
      { deger: 'gerekli', metin: 'Gerekli' },
      { deger: 'gerekmiyor', metin: 'Gerekmiyor' }
    ]) +
    '<button id="fSifirla" class="sifirla" type="button">Filtreleri temizle</button>';

  const bagla = (id, alan) => {
    document.getElementById(id).addEventListener('change', e => {
      filtreDurumu[alan] = e.target.value;
      render();
    });
  };
  bagla('fSegment', 'segment');
  bagla('fSemt', 'semt');
  bagla('fEtiket', 'etiket');
  bagla('fRezervasyon', 'rezervasyon');

  document.getElementById('fSifirla').addEventListener('click', () => {
    Object.keys(filtreDurumu).forEach(k => { filtreDurumu[k] = ''; });
    ['fSegment', 'fSemt', 'fEtiket', 'fRezervasyon']
      .forEach(id => { document.getElementById(id).value = ''; });
    render();
  });
}
```

Not: `filtreDurumu` sıfırlanırken kendi tüm anahtarlarını temizler. Görev 5'te eklenecek sıralama ölçütü bilinçli olarak bu nesnenin **dışında**, ayrı bir değişkende tutulacak — böylece "Filtreleri temizle" sıralama seçimini bozmaz.

- [ ] **Step 2: `render()` fonksiyonunu güncelle**

```js
function render() {
  const liste = filtrele(RESTORANLAR, filtreDurumu);
  const kap = document.getElementById('liste');

  if (liste.length === 0) {
    kap.innerHTML = '<p class="bos">Bu filtrelerle eşleşen restoran yok. Filtreleri temizleyip tekrar deneyin.</p>';
  } else {
    kap.innerHTML = liste.map(kartHTML).join('');
  }

  document.getElementById('sonucSayisi').textContent =
    `${liste.length} restoran${liste.length !== RESTORANLAR.length ? ` (toplam ${RESTORANLAR.length})` : ''}`;
}

document.addEventListener('DOMContentLoaded', () => {
  filtreleriCiz();
  render();
});
```

Dosyanın sonundaki eski `document.addEventListener('DOMContentLoaded', render);` satırını sil — yukarıdaki blok onun yerini alıyor.

- [ ] **Step 3: `styles.css`'e filtre stillerini ekle**

```css
.filtreler {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 14px;
  padding: 16px 18px;
  border: 1px solid var(--kenar);
  border-radius: var(--yuvarlak);
  background: rgba(0, 0, 0, 0.14);
}

.filtre { display: flex; flex-direction: column; gap: 5px; }

.filtre-etiket {
  color: var(--krem-silik);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.filtreler select {
  min-width: 148px;
  padding: 8px 10px;
  border: 1px solid var(--kenar);
  border-radius: 9px;
  background: var(--kirmizi-derin);
  color: var(--krem);
  font-family: inherit;
  font-size: 14px;
}

.filtreler select:focus-visible { outline: 2px solid var(--altin); outline-offset: 1px; }

.sifirla {
  margin-left: auto;
  padding: 9px 15px;
  border: 1px solid var(--kenar);
  border-radius: 9px;
  background: transparent;
  color: var(--krem-sonuk);
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
}

.sifirla:hover { border-color: var(--altin); color: var(--altin); }

.bos {
  grid-column: 1 / -1;
  padding: 44px 20px;
  border: 1px dashed var(--kenar);
  border-radius: var(--yuvarlak);
  color: var(--krem-sonuk);
  text-align: center;
}
```

- [ ] **Step 4: Tarayıcıda doğrula**

Sayfayı yenile, konsolda:

```js
(() => {
  const d = (s, m, e, rz) => ({ segment: s, semt: m, etiket: e, rezervasyon: rz });
  return {
    hepsi:        filtrele(RESTORANLAR, d('', '', '', '')).length,
    ucuz:         filtrele(RESTORANLAR, d('ucuz', '', '', '')).map(r => r.id),
    pahali:       filtrele(RESTORANLAR, d('pahali', '', '', '')).map(r => r.id),
    ilkSemt:      filtrele(RESTORANLAR, d('', RESTORANLAR[0].semt, '', '')).map(r => r.id),
    rezGerekli:   filtrele(RESTORANLAR, d('', '', '', 'gerekli')).map(r => r.id),
    olmayanSemt:  filtrele(RESTORANLAR, d('', 'Yokoluk', '', '')).length
  };
})()
```

Beklenen: `hepsi: 3`; `olmayanSemt: 0`; diğer sonuçlar `veri.js`'teki gerçek değerlerle tutarlı (elle karşılaştır).

Sonra arayüzde: her açılır menüden bir seçim yap, kart sayısının değiştiğini gör. Sonuç vermeyen bir kombinasyon seç → "Bu filtrelerle eşleşen restoran yok" mesajı çıkmalı. "Filtreleri temizle" → üç kart geri gelmeli. `read_console_messages` → hata yok.

- [ ] **Step 5: Commit**

```bash
git add app.js styles.css
git commit -m "feat: fiyat, semt, ambiyans ve rezervasyon filtreleri"
```

---

## Görev 5: Sıralama

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

**Interfaces:**
- Consumes: `filtrele`, `filtreDurumu`, `render`, `secimKutusu` (Görev 4)
- Produces: `sirala(liste: Restoran[], olcut: string) → Restoran[]` — `olcut` şunlardan biri: `"yemek"`, `"ambiyans"`, `"servis"`, `"fiyat"`

- [ ] **Step 1: `app.js`'e sıralama mantığını ekle**

`filtrele` fonksiyonunun altına:

```js
const FIYAT_SIRASI = { ucuz: 0, orta: 1, pahali: 2 };

function sirala(liste, olcut) {
  const kopya = [...liste];

  if (olcut === 'fiyat') {
    return kopya.sort((a, b) => {
      const fark = (FIYAT_SIRASI[a.fiyat.segment] ?? 99) - (FIYAT_SIRASI[b.fiyat.segment] ?? 99);
      if (fark !== 0) return fark;
      return (a.fiyat.kisiBasi?.min ?? Infinity) - (b.fiyat.kisiBasi?.min ?? Infinity);
    });
  }

  // Puana göre azalan. Puanı olmayan (null) restoranlar daima sona düşer.
  return kopya.sort((a, b) => {
    const pa = typeof a[olcut].puan === 'number' ? a[olcut].puan : -1;
    const pb = typeof b[olcut].puan === 'number' ? b[olcut].puan : -1;
    return pb - pa;
  });
}
```

- [ ] **Step 2: Sıralama durumunu ayrı tut ve menüyü ekle**

`filtreDurumu` satırının altına ayrı bir değişken ekle (sıfırlama döngüsüne takılmasın diye filtre nesnesine konmuyor):

```js
let siralamaOlcutu = 'yemek';
```

`filtreleriCiz()` içinde, `'<button id="fSifirla" ...'` satırından **önce** şu bloğu ekle (string birleştirmeye dahil et):

```js
    secimKutusu('fSiralama', 'Sırala', [
      { deger: 'yemek', metin: 'Yemek puanı' },
      { deger: 'ambiyans', metin: 'Ambiyans puanı' },
      { deger: 'servis', metin: 'Servis puanı' },
      { deger: 'fiyat', metin: 'Fiyat (ucuzdan)' }
    ]) +
```

Aynı fonksiyonun sonunda, `bagla(...)` çağrılarının altına:

```js
  const sSecim = document.getElementById('fSiralama');
  sSecim.value = siralamaOlcutu;
  sSecim.addEventListener('change', e => {
    siralamaOlcutu = e.target.value;
    render();
  });
```

`fSifirla` tıklama işleyicisindeki `['fSegment', 'fSemt', 'fEtiket', 'fRezervasyon']` dizisine `'fSiralama'` **eklenmez** — filtreleri temizlemek sıralamayı sıfırlamamalı.

- [ ] **Step 3: `render()` içinde sıralamayı uygula**

`render()` fonksiyonunun ilk satırını şununla değiştir:

```js
  const liste = sirala(filtrele(RESTORANLAR, filtreDurumu), siralamaOlcutu);
```

- [ ] **Step 4: `styles.css`'e sıralama vurgusu ekle**

```css
#fSiralama { border-color: var(--altin-koyu); }
```

- [ ] **Step 5: Tarayıcıda doğrula**

Konsolda:

```js
(() => {
  const p = (l, m) => l.map(r => `${r.isim}:${r[m].puan}`);
  return {
    yemek:    p(sirala(RESTORANLAR, 'yemek'), 'yemek'),
    ambiyans: p(sirala(RESTORANLAR, 'ambiyans'), 'ambiyans'),
    servis:   p(sirala(RESTORANLAR, 'servis'), 'servis'),
    fiyat:    sirala(RESTORANLAR, 'fiyat').map(r => `${r.isim}:${r.fiyat.segment}`),
    ozgunKorundu: RESTORANLAR.map(r => r.id).join(',')
  };
})()
```

Beklenen: ilk üç dizi azalan puan sırasında; `fiyat` dizisi ucuz→orta→pahalı sırasında; `ozgunKorundu` `veri.js`'teki özgün sırayı veriyor (yani `sirala` diziyi yerinde değiştirmemiş).

Arayüzde sıralama menüsünü her seçenekle dene, kart sırasının değiştiğini gör. Bir filtre uygulanmışken sıralamayı değiştir — ikisinin birlikte çalıştığını doğrula. `read_console_messages` → hata yok.

- [ ] **Step 6: Commit**

```bash
git add app.js styles.css
git commit -m "feat: yemek, ambiyans, servis ve fiyata göre sıralama"
```

---

## Görev 6: Detay sayfası

**Files:**
- Create: `detay.html`
- Create: `detay.js`
- Modify: `styles.css`

**Interfaces:**
- Consumes: `RESTORANLAR` (Görev 2), `puanRozeti` / `fiyatEtiketi` / `veyaYok` (Görev 3)
- Produces: `detay.html?id=<slug>` adresinde çalışan sayfa. Liste kartlarının `href`'i buraya işaret eder.

- [ ] **Step 1: `detay.html` oluştur**

```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>EATER</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="ust ust-ince">
    <a class="geri" href="index.html">&larr; Tüm restoranlar</a>
    <span class="logo logo-kucuk">EATER</span>
  </header>

  <main id="detay" class="govde"></main>

  <script src="veri.js"></script>
  <script src="bilesenler.js"></script>
  <script src="detay.js"></script>
</body>
</html>
```

- [ ] **Step 2: `detay.js` oluştur**

```js
// EATER — detay sayfası. URL'deki ?id= değerine göre tek restoranı çizer.

function maddeListesi(dizi, bosMetin) {
  if (!Array.isArray(dizi) || dizi.length === 0) {
    return `<p class="silik">${bosMetin}</p>`;
  }
  return `<ul class="madde">${dizi.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

function etiketler(dizi) {
  if (!Array.isArray(dizi) || dizi.length === 0) return '';
  return `<div class="etiketler">${dizi.map(e => `<span class="etiket">${e}</span>`).join('')}</div>`;
}

function fiyatMetni(fiyat) {
  if (!fiyat.kisiBasi) return 'Kişi başı fiyat bilgisi yok';
  const { min, max, paraBirimi } = fiyat.kisiBasi;
  const birim = paraBirimi === 'TRY' ? '₺' : ` ${paraBirimi}`;
  return `Kişi başı yaklaşık ${min.toLocaleString('tr-TR')}${birim} – ${max.toLocaleString('tr-TR')}${birim}`;
}

function kaynakSatiri(ad, k) {
  if (!k) return `<tr><td>${ad}</td><td class="silik" colspan="2">veri yok</td></tr>`;
  if (ad === 'TikTok') {
    return `<tr><td>TikTok</td><td>—</td><td>${k.incelenenVideo} video incelendi</td></tr>`;
  }
  return `<tr>
    <td>${ad}</td>
    <td>${k.puan} / 5</td>
    <td>${k.yorumSayisi.toLocaleString('tr-TR')} yorum — ${k.incelenen} tanesi incelendi</td>
  </tr>`;
}

function metrikKarti(baslik, metrik) {
  return `
    <div class="metrik">
      ${puanRozeti(baslik, metrik.puan)}
      <p>${veyaYok(metrik.ozet, 'Bu boyut için yeterli yorum bulunamadı.')}</p>
    </div>`;
}

function detayHTML(r) {
  const rez = r.rezervasyon;
  const rezSatirlari = rez.gerekiyor === null
    ? '<p class="silik">Rezervasyon bilgisi bulunamadı.</p>'
    : `
      <dl class="cift">
        <dt>Gerekli mi</dt><dd>${rez.gerekiyor ? 'Evet' : 'Hayır — ama yoğun saatlerde beklemek gerekebilir'}</dd>
        <dt>Yöntem</dt><dd>${rez.yontem.length ? rez.yontem.join(', ') : 'veri yok'}</dd>
        <dt>Telefon</dt><dd>${rez.telefon ? `<a href="tel:${rez.telefon.replace(/\s/g, '')}">${rez.telefon}</a>` : 'veri yok'}</dd>
        <dt>Online</dt><dd>${rez.link ? `<a href="${rez.link}" target="_blank" rel="noopener">Rezervasyon sayfası</a>` : 'veri yok'}</dd>
        <dt>Bekleme süresi</dt><dd>${veyaYok(rez.beklemeSuresi)}</dd>
        <dt>Kapora</dt><dd>${rez.kapora ? (rez.kapora.var ? `Evet — ${rez.kapora.detay}` : 'İstenmiyor') : 'veri yok'}</dd>
      </dl>`;

  return `
    <div class="detay-basi">
      <h1 class="detay-isim">${r.isim}</h1>
      <p class="detay-yer">${r.semt}, ${r.sehir} · ${r.mutfak.join(', ')} · ${fiyatEtiketi(r.fiyat.segment)}</p>
      <div class="isaretler">
        ${r.oduller.map(o => `<span class="odul">★ ${o.detay}</span>`).join('')}
      </div>
    </div>

    <section class="metrikler">
      ${metrikKarti('Yemek', r.yemek)}
      ${metrikKarti('Ambiyans', r.ambiyans)}
      ${metrikKarti('Servis', r.servis)}
    </section>

    <section class="blok">
      <h2>Ne yenir</h2>
      <ol class="yemekler">
        ${r.neYenir.map(y => `
          <li>
            <span class="yemek-ad">${y.yemek}</span>
            <span class="yemek-sayi">${y.kacKisiOnerdi} yorumda önerildi</span>
            ${y.not ? `<span class="yemek-not">${y.not}</span>` : ''}
          </li>`).join('')}
      </ol>
    </section>

    <section class="blok">
      <h2>Ambiyans</h2>
      ${etiketler(r.ambiyans.etiketler)}
      <dl class="cift">
        <dt>Kıyafet kuralı</dt><dd>${veyaYok(r.ambiyans.dressCode, 'Belirtilmiş bir kıyafet kuralı yok')}</dd>
        <dt>Kimler için uygun</dt><dd>${r.ambiyans.uygun.length ? r.ambiyans.uygun.join(', ') : 'veri yok'}</dd>
      </dl>
    </section>

    <section class="blok ikili">
      <div>
        <h2>Servis — artılar</h2>
        ${maddeListesi(r.servis.artilar, 'Yorumlarda öne çıkan bir artı yok.')}
      </div>
      <div>
        <h2>Servis — eksiler</h2>
        ${maddeListesi(r.servis.eksiler, 'Yorumlarda tekrarlayan bir şikâyet yok.')}
      </div>
    </section>

    <section class="blok">
      <h2>Fiyat</h2>
      <p>${fiyatMetni(r.fiyat)}</p>
      ${r.fiyat.not ? `<p class="silik">${r.fiyat.not}</p>` : ''}
    </section>

    <section class="blok">
      <h2>Rezervasyon</h2>
      ${rezSatirlari}
    </section>

    <section class="blok">
      <h2>Adres</h2>
      <p>${veyaYok(r.adres, 'Adres bilgisi bulunamadı')}</p>
      ${r.mapsUrl ? `<p><a class="harita" href="${r.mapsUrl}" target="_blank" rel="noopener">Google Maps'te aç &rarr;</a></p>` : ''}
    </section>

    <section class="blok">
      <h2>Kaynaklar</h2>
      <table class="kaynak">
        <thead><tr><th>Platform</th><th>Puan</th><th>İncelenen</th></tr></thead>
        <tbody>
          ${kaynakSatiri('Google', r.kaynaklar.google)}
          ${kaynakSatiri('TripAdvisor', r.kaynaklar.tripadvisor)}
          ${kaynakSatiri('TikTok', r.kaynaklar.tiktok)}
        </tbody>
      </table>
      <p class="silik">Son güncelleme: ${r.sonGuncelleme}. Puanlar bu örneklemden çıkarılmış öznel değerlendirmelerdir.</p>
    </section>`;
}

function bulVeCiz() {
  const id = new URLSearchParams(location.search).get('id');
  const r = RESTORANLAR.find(x => x.id === id);
  const kap = document.getElementById('detay');

  if (!r) {
    kap.innerHTML = `
      <p class="bos">Böyle bir restoran bulunamadı${id ? ` (<code>${id}</code>)` : ''}.
      <a href="index.html">Listeye dön</a>.</p>`;
    return;
  }

  document.title = `${r.isim} — EATER`;
  kap.innerHTML = detayHTML(r);
}

document.addEventListener('DOMContentLoaded', bulVeCiz);
```

- [ ] **Step 3: `styles.css`'e detay stillerini ekle**

```css
.ust-ince {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.logo-kucuk { font-size: 24px; letter-spacing: 0.2em; }

.geri {
  color: var(--krem-sonuk);
  font-size: 14px;
  text-decoration: none;
}

.geri:hover { color: var(--altin); }

.detay-basi { padding-bottom: 22px; border-bottom: 1px solid var(--kenar); }

.detay-isim {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(30px, 5vw, 46px);
}

.detay-yer { margin: 6px 0 12px; color: var(--krem-sonuk); }

.metrikler {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 26px 0;
}

.metrik {
  padding: 18px;
  border: 1px solid var(--kenar);
  border-radius: var(--yuvarlak);
  background: var(--kirmizi-koyu);
}

.metrik .rozet { border: none; background: none; padding: 0; align-items: flex-start; }
.metrik .rozet-puan { font-size: 34px; }
.metrik p { margin: 10px 0 0; color: var(--krem-sonuk); font-size: 14px; }

.blok {
  padding: 24px 0;
  border-top: 1px solid var(--kenar);
}

.blok h2 {
  margin: 0 0 14px;
  font-family: var(--serif);
  font-size: 20px;
  color: var(--altin);
}

.blok.ikili {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 26px;
}

.yemekler { margin: 0; padding-left: 22px; }
.yemekler li { margin-bottom: 12px; }
.yemek-ad { font-weight: 700; }
.yemek-sayi { display: block; color: var(--altin-koyu); font-size: 12px; }
.yemek-not { display: block; color: var(--krem-sonuk); font-size: 13px; }

.etiketler { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 14px; }

.etiket {
  padding: 4px 11px;
  border: 1px solid var(--kenar);
  border-radius: 999px;
  font-size: 12px;
  color: var(--krem-sonuk);
}

.cift { display: grid; grid-template-columns: minmax(120px, 180px) 1fr; gap: 8px 18px; margin: 0; }
.cift dt { color: var(--krem-silik); font-size: 13px; }
.cift dd { margin: 0; }
.cift a, .harita { color: var(--altin); }

.madde { margin: 0; padding-left: 20px; color: var(--krem-sonuk); }
.madde li { margin-bottom: 6px; }

.silik { color: var(--krem-silik); font-size: 13px; }

.kaynak { width: 100%; border-collapse: collapse; font-size: 14px; }
.kaynak th, .kaynak td { padding: 9px 10px; text-align: left; border-bottom: 1px solid var(--kenar); }
.kaynak th { color: var(--krem-silik); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
.kaynak td.silik { color: var(--krem-silik); }
```

- [ ] **Step 4: Tarayıcıda doğrula**

Üç restoranın detay sayfasını da tek tek aç (`detay.html?id=<her bir id>`):
- Dokuz bölümün hepsi görünüyor: başlık, üç metrik kartı, ne yenir, ambiyans, servis artı/eksi, fiyat, rezervasyon, adres, kaynaklar
- Hiçbir yerde `undefined`, `null` veya `[object Object]` yazmıyor
- `read_console_messages` → hata yok
- Geçersiz id dene: `detay.html?id=olmayan-restoran` → "Böyle bir restoran bulunamadı" mesajı + listeye dönüş bağlantısı
- Parametresiz dene: `detay.html` → aynı hata mesajı, sayfa çökmüyor
- Listeden bir karta tıkla → doğru detay sayfası açılıyor
- Konsolda `undefined` taraması:
  ```js
  document.getElementById('detay').textContent.match(/undefined|\[object Object\]|NaN/g)
  ```
  Beklenen: `null`

- [ ] **Step 5: Commit**

```bash
git add detay.html detay.js styles.css
git commit -m "feat: restoran detay sayfası"
```

---

## Görev 7: Mobil düzen, README ve son doğrulama

**Files:**
- Modify: `styles.css`
- Create: `README.md`

**Interfaces:**
- Consumes: tüm önceki görevler
- Produces: teslim edilebilir sürüm

- [ ] **Step 1: `styles.css`'e mobil düzenlemeleri ekle**

Dosyanın **sonuna**:

```css
@media (max-width: 640px) {
  .ust { padding: 34px 18px 20px; }
  .govde { padding: 0 18px 44px; }

  .filtreler { gap: 11px; padding: 14px; }
  .filtre { flex: 1 1 100%; }
  .filtreler select { width: 100%; min-width: 0; }
  .sifirla { width: 100%; margin-left: 0; }

  .liste { grid-template-columns: 1fr; }

  .rozetler { gap: 6px; }
  .rozet-puan { font-size: 18px; }

  .cift { grid-template-columns: 1fr; gap: 2px 0; }
  .cift dd { margin-bottom: 10px; }

  .kaynak { font-size: 13px; }
  .kaynak th, .kaynak td { padding: 7px 6px; }
}
```

- [ ] **Step 2: `README.md` yaz**

Şunları içersin:
- EATER'ın ne olduğu (bir cümle)
- Dosya tablosu (planın başındaki "Dosya Yapısı" tablosunun sadeleştirilmiş hâli)
- Çalıştırma: `python3 -m http.server 8123` ve `index.html`'i çift tıklayarak açma seçeneği
- **Yeni restoran ekleme:** `SEMA.md`'ye uyan bir nesneyi `veri.js`'teki `RESTORANLAR` dizisine eklemek yeterli; başka dosyaya dokunmaya gerek yok
- **Sonraki adımlar:** fotoğraflar, öneri sihirbazı (quiz), veri toplama otomasyonu
- **Sınırlar:** puanlar yorum örnekleminden çıkarılmış öznel değerlendirmeler; veri elle güncelleniyor; genel puan bilinçli olarak hesaplanmıyor

- [ ] **Step 3: Mobil genişlikte doğrula**

`resize_window` ile `preset: "mobile"` (375px), sayfayı yenile:
- `index.html`: kartlar tek sütun, filtreler tam genişlik, yatay kaydırma **yok**
- `detay.html?id=<bir id>`: `dl` çiftleri alt alta, kaynak tablosu taşmıyor
- Yatay taşma denetimi (her iki sayfada da çalıştır):
  ```js
  ({ tasma: document.documentElement.scrollWidth - document.documentElement.clientWidth })
  ```
  Beklenen: `tasma: 0`
- Her iki sayfadan da ekran görüntüsü al

- [ ] **Step 4: Masaüstünde son geçiş**

`resize_window` ile `preset: "desktop"`, sonra baştan sona:
- Üç filtreyi birlikte uygula + sıralamayı değiştir → sonuç tutarlı
- "Filtreleri temizle" → üç kart geri geliyor, sıralama seçimi korunuyor
- Her karttan detay sayfasına git, "Tüm restoranlar" bağlantısıyla geri dön
- `read_console_messages` (iki sayfa için de) → hata yok
- `preview_logs` → 404 yok

- [ ] **Step 5: Commit**

```bash
git add styles.css README.md
git commit -m "feat: mobil düzen ve README"
```

---

## Sonraki sürümler (bu planın kapsamı dışında)

- Fotoğraflar — `fotolar` alanı şemada hazır, kart ve detay sayfasında yer tutucular duruyor
- Öneri sihirbazı (quiz) — daha fazla restoran verisi toplandıktan sonra
- Veri toplama otomasyonu — `veri.js`'i üreten script; `SEMA.md` bunun sözleşmesi
- Yeni şehirler/ülkeler — `ulke`/`sehir` alanları şemada hazır, filtre eklemek yeterli
