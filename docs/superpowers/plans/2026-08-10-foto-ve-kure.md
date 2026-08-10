# EATER Yemek Fotoğrafları + Dünya Küresi Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ziyaretlere kamera/galeriden favori yemek fotoğrafı eklemek (Supabase Storage) ve `index.html`'in başına ülkeye tıklanabilen, konum + yakınlık sıralaması destekli 3D dünya küresi (globe.gl) koymak.

**Architecture:** Site statik kalır. Fotoğraflar tarayıcıda küçültülüp `yemek-fotolari` bucket'ına yüklenir; `ziyaretler` iki yol sütunu kazanır. Küre `kure.js` + yerel `dunya-ulkeler.js` sınır verisiyle çalışır, mevcut ülke filtresiyle çift yönlü senkrondur; konum GPS veya Nominatim'den gelir, `app.js` "yakinlik" sıralamasıyla kuş uçuşu mesafeye göre dizer.

**Tech Stack:** Saf HTML/CSS/JS, Supabase (Storage + RLS), globe.gl (CDN, SRI'lı), OpenStreetMap Nominatim (anahtarsız), `navigator.geolocation`.

**Spec:** `docs/superpowers/specs/2026-08-10-foto-ve-kure-design.md`

## Global Constraints

- Test çerçevesi yok: her görev tarayıcıda elle doğrulanır (önizleme: `.claude/launch.json` → `eater`, `http://localhost:8123`).
- Tüm adlandırma Türkçe, mevcut stil (`kartHTML`, `filtreleriCiz` gibi).
- Kullanıcı üretimi her metin `innerHTML`'e girmeden `kacis()`ten geçer.
- Katalog, Supabase yapılandırılmamışken, internetsizken ve `file://` altında bozulmadan çalışmalı; küre yüklenemezse bölümü gizli kalır.
- Anahtar/hesap/kart isteyen hiçbir servis kullanılmaz (Google Maps bilinçli kapsam dışı).
- CDN scriptleri sabit sürüm + SRI (`integrity` + `crossorigin="anonymous"`) ile yüklenir.
- Commit mesajları Türkçe: `feat|fix|docs: kısa açıklama`.
- Renk/aralıklar `styles.css` `:root` değişkenleriyle (`--krem`, `--kenar`, `--yuvarlak`…).

---

### Task 1: Veritabanı Ek 3 — foto sütunları + Storage bucket'ı ve kuralları

**Files:**
- Modify: `docs/supabase-sema.sql` (dosya sonu)
- Modify: `docs/supabase-kurulum.md` (Ek 3 notu)

**Interfaces:**
- Produces: `ziyaretler.sevilen_yemek1_foto`, `ziyaretler.sevilen_yemek2_foto` (`text | null`, Storage yolu); herkese açık `yemek-fotolari` bucket'ı — yol düzeni `{kullanici_id}/{uuid}-1.jpg` / `-2.jpg`. Task 2-3 bu adlarla çalışır.

- [ ] **Step 1: `docs/supabase-sema.sql` sonuna Ek 3 bloğunu ekle:**

```sql

-- Ek 3 (10 Ağustos 2026): favori yemek fotoğrafları.
-- Sütunlar Storage'daki dosya yolunu tutar (yemek-fotolari/{kullanici_id}/{uuid}-N.jpg).
alter table ziyaretler add column if not exists sevilen_yemek1_foto text;
alter table ziyaretler add column if not exists sevilen_yemek2_foto text;

-- Herkese açık okunur bucket. Profiller ve ziyaretler zaten açık; fotoğraflar da öyle.
insert into storage.buckets (id, name, public)
  values ('yemek-fotolari', 'yemek-fotolari', true)
  on conflict (id) do update set public = true;

-- Postgres'te "create policy if not exists" yok — idempotentlik için drop+create.
drop policy if exists "yemek foto okuma" on storage.objects;
create policy "yemek foto okuma" on storage.objects
  for select using (bucket_id = 'yemek-fotolari');

-- Girişli kullanıcı yalnız kendi klasörüne ({kullanici_id}/...) yazar/siler.
drop policy if exists "yemek foto yukleme" on storage.objects;
create policy "yemek foto yukleme" on storage.objects
  for insert with check (
    bucket_id = 'yemek-fotolari'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "yemek foto silme" on storage.objects;
create policy "yemek foto silme" on storage.objects
  for delete using (
    bucket_id = 'yemek-fotolari'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
```

- [ ] **Step 2: `docs/supabase-kurulum.md` sonuna kısa not ekle:**

```markdown

## Ek 3 — Yemek fotoğrafları (10 Ağustos 2026)

`docs/supabase-sema.sql` dosyasındaki "Ek 3" bloğunu SQL Editor'a yapıştırıp Run deyin.
Blok idempotenttir; yanlışlıkla iki kez çalıştırmak hata vermez. Bu blok `yemek-fotolari`
adında herkese açık bir Storage bucket'ı oluşturur — Dashboard → Storage altında görünür.
```

- [ ] **Step 3: KULLANICI ADIMI — Ek 3 bloğunu Supabase SQL Editor'da çalıştır.** Kullanıcıya bloğu ver, Run sonrası Dashboard → Storage'da `yemek-fotolari` bucket'ının göründüğünü onaylat. (Sonraki görevlerin uçtan uca doğrulaması buna bağlı.)

- [ ] **Step 4: İkinci kez çalıştırınca da hata vermediğini kullanıcıya doğrulat** (idempotentlik).

- [ ] **Step 5: Commit**

```bash
git add docs/supabase-sema.sql docs/supabase-kurulum.md
git commit -m "feat: Ek 3 — yemek fotoğrafı sütunları ve yemek-fotolari bucket kuralları"
```

---

### Task 2: Foto yardımcıları — küçültme, yükleme, kart görünümü, büyütme

**Files:**
- Modify: `bilesenler.js` (dosya sonuna), `hesap.js`, `styles.css` (dosya sonuna)

**Interfaces:**
- Consumes: Task 1'in bucket'ı ve yol düzeni.
- Produces:
  - `fotoKucult(dosya) → Promise<Blob>` (bilesenler.js) — uzun kenar ≤ 1600 px, JPEG 0.8.
  - `eaterHesap.fotoYukle(kullaniciId, blob, sira) → Promise<{yol?: string, hata?: string}>`
  - `eaterHesap.fotoUrl(yol) → string` (herkese açık URL)
  - `ziyaretFotolariHTML(z) → string` (bilesenler.js) — thumbnail bloğu; `z.sevilen_yemek1_foto/2_foto` okur.
  - `fotoBuyutmeKur(kap)` (bilesenler.js) — `.ziyaret-foto` tıklamalarına lightbox bağlar.

- [ ] **Step 1: `bilesenler.js` sonuna küçültme + kart + büyütme yardımcılarını ekle:**

```js
// --- Yemek fotoğrafları (ziyaretler) ---

// Telefon fotoğrafı (8+ MB) yüklenmeden önce tarayıcıda küçültülür; Supabase'in
// 1 GB ücretsiz depolamasında bir fotoğraf ~300 KB yer tutar.
function fotoKucult(dosya, maksKenar = 1600, kalite = 0.8) {
  return new Promise((coz, reddet) => {
    const url = URL.createObjectURL(dosya);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const oran = Math.min(1, maksKenar / Math.max(img.width, img.height));
      const tuval = document.createElement('canvas');
      tuval.width = Math.round(img.width * oran);
      tuval.height = Math.round(img.height * oran);
      tuval.getContext('2d').drawImage(img, 0, 0, tuval.width, tuval.height);
      tuval.toBlob(b => b ? coz(b) : reddet(new Error('görsel dönüştürülemedi')),
        'image/jpeg', kalite);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reddet(new Error('görsel okunamadı')); };
    img.src = url;
  });
}

// Ziyaret kartındaki foto şeridi. Yol sütunları boşsa boş string döner.
function ziyaretFotolariHTML(z) {
  const yollar = [z.sevilen_yemek1_foto, z.sevilen_yemek2_foto].filter(Boolean);
  if (yollar.length === 0 || !eaterHesap.hazir()) return '';
  return `<div class="ziyaret-fotolar">${yollar.map(y =>
    `<img class="ziyaret-foto" src="${kacis(eaterHesap.fotoUrl(y))}"
          alt="Yemek fotoğrafı" loading="lazy">`).join('')}</div>`;
}

// Tam boy görüntüleme: kap içindeki .ziyaret-foto tıklamalarını yakalar.
function fotoBuyutmeKur(kap) {
  kap.addEventListener('click', e => {
    const img = e.target.closest('.ziyaret-foto');
    if (!img) return;
    const ortu = document.createElement('div');
    ortu.className = 'foto-buyutme';
    ortu.innerHTML = `<img src="${kacis(img.src)}" alt="Yemek fotoğrafı — tam boy">`;
    ortu.addEventListener('click', () => ortu.remove());
    document.body.appendChild(ortu);
  });
}
```

- [ ] **Step 2: `hesap.js`'e Storage katmanını ekle** — `// --- Takip (Eater ekle) ---` satırının ÜSTÜNE:

```js
  // --- Yemek fotoğrafları (Storage) ---

  // Yol: {kullanici_id}/{uuid}-{sira}.jpg — rastgele ad, ziyaret kaydından önce
  // yüklemeye izin verir; RLS ilk klasör adını auth.uid() ile karşılaştırır.
  async function fotoYukle(kullaniciId, dosyaBlob, sira) {
    const yol = `${kullaniciId}/${crypto.randomUUID()}-${sira}.jpg`;
    const { error } = await istemci.storage.from('yemek-fotolari')
      .upload(yol, dosyaBlob, { contentType: 'image/jpeg' });
    return error ? { hata: error.message } : { yol };
  }

  function fotoUrl(yol) {
    return istemci.storage.from('yemek-fotolari').getPublicUrl(yol).data.publicUrl;
  }
```

ve dönüş nesnesine iki adı ekle:

```js
  return { hazir: () => kuruldu, istemci, oturum, kayitOl, girisYap, cikisYap,
    hesapKutusunuCiz, takipEttiklerim, takipDegistir, takipciSayisi,
    fotoYukle, fotoUrl };
```

- [ ] **Step 3: `styles.css` sonuna foto stillerini ekle:**

```css
/* --- Yemek fotoğrafları --- */
.fav-satir { display: flex; gap: .4rem; align-items: center; }
.fav-satir input { flex: 1; min-width: 0; }
.foto-alan { display: flex; gap: .25rem; align-items: center; }
.foto-btn {
  width: 42px; height: 42px; padding: 0; flex: none;
  border: 1px solid var(--kenar); border-radius: 10px;
  background: var(--yuzey-oyuk); color: var(--krem); font-size: 1.1rem;
  cursor: pointer; overflow: hidden;
}
.foto-btn img { width: 100%; height: 100%; object-fit: cover; display: block; }
.foto-sil {
  width: 22px; height: 22px; padding: 0; flex: none; line-height: 1;
  border: none; border-radius: 50%; background: var(--ortu-koyu);
  color: var(--krem-sonuk); font-size: .8rem; cursor: pointer;
}
.ziyaret-fotolar { display: flex; gap: .5rem; margin: .4rem 0; }
.ziyaret-foto {
  width: 76px; height: 76px; object-fit: cover;
  border-radius: 10px; border: 1px solid var(--kenar); cursor: zoom-in;
}
.foto-buyutme {
  position: fixed; inset: 0; z-index: 60; cursor: zoom-out;
  background: rgba(0, 0, 0, .85);
  display: flex; align-items: center; justify-content: center;
}
.foto-buyutme img { max-width: 92vw; max-height: 92vh; border-radius: var(--yuvarlak); }
```

- [ ] **Step 4: Konsolda hızlı doğrula** — önizlemeyi başlat, `index.html`'de tarayıcı konsolunda:
`typeof fotoKucult, typeof ziyaretFotolariHTML, typeof eaterHesap.fotoYukle, typeof eaterHesap.fotoUrl`
→ hepsi `"function"`. `eaterHesap.fotoUrl('x/y-1.jpg')` → `.../storage/v1/object/public/yemek-fotolari/x/y-1.jpg` biçiminde URL.

- [ ] **Step 5: Commit**

```bash
git add bilesenler.js hesap.js styles.css
git commit -m "feat: foto yardımcıları — küçültme, Storage yükleme, kart şeridi, büyütme"
```

---

### Task 3: Ziyaret formunda 📷 düğmeleri + kartlarda fotoğraflar

**Files:**
- Modify: `gunluk.js` (`ziyaretFormuHTML`, `ziyaretKartHTML`, `ziyaretKaydet`, `sayfayiKur`), `kisi.js` (`profilZiyaretHTML`, `DOMContentLoaded`)

**Interfaces:**
- Consumes: Task 2'nin tamamı (`fotoKucult`, `eaterHesap.fotoYukle`, `ziyaretFotolariHTML`, `fotoBuyutmeKur`).
- Produces: uçtan uca foto akışı; `ziyaretler` insert'i `sevilen_yemek1_foto/2_foto` alanlarını da yazar.

- [ ] **Step 1: `gunluk.js` — form durumuna foto ekle.** `const formSecim = ...` satırının altına:

```js
// Seçilip küçültülmüş foto Blob'ları; kaydetmede Storage'a yüklenir.
const fotoSecim = { 1: null, 2: null };
```

- [ ] **Step 2: `ziyaretFormuHTML` içindeki favori `form-satir` bloğunu değiştir.** Mevcut:

```html
        <div class="form-satir">
          <label>En sevdiğin yemek
            <input type="text" id="zFav1" placeholder="ör. Hünkar Beğendi" maxlength="80"></label>
          <label>İkinci favorin
            <input type="text" id="zFav2" placeholder="isteğe bağlı" maxlength="80"></label>
        </div>
```

yerine:

```html
        <div class="form-satir">
          <label>En sevdiğin yemek
            <span class="fav-satir">
              <input type="text" id="zFav1" placeholder="ör. Hünkar Beğendi" maxlength="80">
              <span class="foto-alan">
                <button type="button" class="foto-btn" id="btnFoto1"
                        title="Yemeğin fotoğrafını ekle" aria-label="Fotoğraf ekle">📷</button>
                <button type="button" class="foto-sil" id="btnFotoSil1" hidden
                        title="Fotoğrafı kaldır" aria-label="Fotoğrafı kaldır">✕</button>
              </span>
            </span></label>
          <label>İkinci favorin
            <span class="fav-satir">
              <input type="text" id="zFav2" placeholder="isteğe bağlı" maxlength="80">
              <span class="foto-alan">
                <button type="button" class="foto-btn" id="btnFoto2"
                        title="Yemeğin fotoğrafını ekle" aria-label="Fotoğraf ekle">📷</button>
                <button type="button" class="foto-sil" id="btnFotoSil2" hidden
                        title="Fotoğrafı kaldır" aria-label="Fotoğrafı kaldır">✕</button>
              </span>
            </span></label>
        </div>
        <input type="file" id="fotoInput1" accept="image/*" capture="environment" hidden>
        <input type="file" id="fotoInput2" accept="image/*" capture="environment" hidden>
```

(`capture="environment"` telefonda arka kamerayı önerir; tarayıcı "kamera / galeri" seçtirir ve kamera seçilirse işletim sistemi erişim iznini kendisi sorar.)

- [ ] **Step 3: Foto düğme bağlarını ekle** — `mekanSecimBagla`'nın altına yeni fonksiyonlar:

```js
// 📷 düğmeleri: gizli file input'u tetikler; seçilen görsel küçültülüp önizlenir.
function fotoBaglariniKur() {
  [1, 2].forEach(n => {
    const btn = document.getElementById('btnFoto' + n);
    const sil = document.getElementById('btnFotoSil' + n);
    const girdi = document.getElementById('fotoInput' + n);
    btn.addEventListener('click', () => girdi.click());
    sil.addEventListener('click', () => fotoTemizle(n));
    girdi.addEventListener('change', async () => {
      const dosya = girdi.files[0];
      if (!dosya) return;
      try {
        fotoSecim[n] = await fotoKucult(dosya);
        btn.innerHTML = `<img src="${URL.createObjectURL(fotoSecim[n])}" alt="Seçilen fotoğraf">`;
        sil.hidden = false;
      } catch {
        fotoTemizle(n);
        document.getElementById('ziyaretHata').textContent =
          'Fotoğraf işlenemedi — başka bir görsel dene.';
      }
    });
  });
}

function fotoTemizle(n) {
  fotoSecim[n] = null;
  document.getElementById('fotoInput' + n).value = '';
  document.getElementById('btnFoto' + n).innerHTML = '📷';
  document.getElementById('btnFotoSil' + n).hidden = true;
}
```

- [ ] **Step 4: `ziyaretKaydet`'i yeni akışa geçir** — sıra: doğrula → fotoları yükle → (gerekirse) mekânı ekle → ziyareti yaz. Fonksiyonun tamamını değiştir:

```js
async function ziyaretKaydet(kullaniciId) {
  const hataKutusu = document.getElementById('ziyaretHata');
  hataKutusu.textContent = '';

  // 1) Mekân seçimini doğrula (henüz hiçbir şey yazmadan).
  let restoranId = null;
  let yeniMekan = null; // katalog dışı mekân: foto yüklemesinden sonra insert edilir
  if (formSecim.mekan && formSecim.mekan !== DIGER) {
    restoranId = formSecim.mekan;
  } else {
    const ulke = formSecim.ulke === DIGER ? alanDegeri('zUlkeSerbest') : formSecim.ulke;
    const sehir = formSecim.sehir === DIGER ? alanDegeri('zSehirSerbest') : formSecim.sehir;
    const isim = alanDegeri('zIsim');
    if (!ulke || !sehir || !isim) {
      hataKutusu.textContent = 'Mekân için önce ülke ve şehir seçip mekânı belirtmelisin.';
      return;
    }
    yeniMekan = { isim, ulke, sehir, ekleyen: kullaniciId };
  }

  // 2) Fotoğrafları yükle. Yükleme başarısızsa ziyaret KAYDEDİLMEZ (spec §4).
  const fotoYollari = { 1: null, 2: null };
  for (const n of [1, 2]) {
    if (!fotoSecim[n]) continue;
    const { yol, hata } = await eaterHesap.fotoYukle(kullaniciId, fotoSecim[n], n);
    if (hata) { hataKutusu.textContent = `Fotoğraf yüklenemedi: ${hata}`; return; }
    fotoYollari[n] = yol;
  }

  // 3) Katalog dışı mekân şimdi eklenir.
  let mekanId = null;
  if (yeniMekan) {
    const { data, error } = await eaterHesap.istemci
      .from('mekanlar').insert(yeniMekan).select().single();
    if (error) { hataKutusu.textContent = error.message; return; }
    mekanId = data.id;
  }

  // 4) Ziyaret satırı.
  const { error } = await eaterHesap.istemci.from('ziyaretler').insert({
    kullanici: kullaniciId,
    restoran_id: restoranId,
    mekan_id: mekanId,
    tarih: document.getElementById('zTarih').value,
    yemek_puan: sayiVeyaNull('zYemek'),
    ambiyans_puan: sayiVeyaNull('zAmbiyans'),
    servis_puan: sayiVeyaNull('zServis'),
    sevilen_yemek1: alanDegeri('zFav1') || null,
    sevilen_yemek2: alanDegeri('zFav2') || null,
    sevilen_yemek1_foto: fotoYollari[1],
    sevilen_yemek2_foto: fotoYollari[2],
    yorum: alanDegeri('zYorum') || null
  });
  if (error) { hataKutusu.textContent = error.message; return; }
  document.getElementById('fZiyaret').reset();
  fotoTemizle(1); fotoTemizle(2);
  formSecim.ulke = ''; formSecim.sehir = ''; formSecim.mekan = '';
  document.getElementById('mekanSecimi').innerHTML = mekanSecimHTML();
  mekanSecimBagla();
  ziyaretleriGoster(kullaniciId);
}
```

- [ ] **Step 5: Kartlara foto şeridini ekle.** `gunluk.js` `ziyaretKartHTML` içinde `${favoriler.length ? ... : ''}` satırının ALTINA (yorum satırının üstüne):

```js
      ${ziyaretFotolariHTML(z)}
```

`kisi.js` `profilZiyaretHTML`'de aynı konuma aynı satırı ekle.

- [ ] **Step 6: Bağları kur.** `gunluk.js` `sayfayiKur` içinde `mekanSecimBagla();` çağrısının hemen altına `fotoBaglariniKur();` ekle. Her iki dosyanın `DOMContentLoaded` bloğuna (gunluk.js ve kisi.js) şu satırı ekle:

```js
  fotoBuyutmeKur(document.body);
```

- [ ] **Step 7: Uçtan uca doğrula (masaüstü, dosya seçici yolu).** Önizlemede `gunluk.html` → giriş yap → 📷'ye bas, bir görsel seç → önizleme + ✕ görünür → ziyareti kaydet → kartta thumbnail görünür → tıkla, tam boy açılır, tıkla kapanır. `kisi.html?id=<kendi id>` sayfasında da thumbnail + büyütme çalışır. ✕ ile vazgeçme ve fotosuz kayıt da denenir. Konsolda hata olmamalı. (Kamera yolu telefonda: kullanıcıya not düş — plan sonunda Task 7'de.)

- [ ] **Step 8: Commit**

```bash
git add gunluk.js kisi.js
git commit -m "feat: ziyaret formuna kamera/galeri foto ekleme, kartlarda foto şeridi"
```

---

### Task 4: Ülke sınırları verisi — `dunya-ulkeler.js`

**Files:**
- Create: `dunya-ulkeler.js` (üretilmiş veri dosyası, ~250 KB)

**Interfaces:**
- Produces: global `const DUNYA_ULKELER` — GeoJSON `FeatureCollection`; her feature'da `id` = ISO-3166 alpha-3 kodu (`"TUR"`), `properties.name` = İngilizce ad. Task 5 `DUNYA_ULKELER.features`'ı globe.gl'e verir.

- [ ] **Step 1: Veriyi indir ve sarmala** (koordinatlar 2 ondalığa yuvarlanır — 110m çözünürlükte görsel fark yok, dosya küçülür):

```bash
cd /Users/halilcanbeyenal/Downloads/PROJELER/eater
curl -sL https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json \
  -o "$TMPDIR/countries.geo.json"
node -e "
const fs = require('fs');
const g = JSON.parse(fs.readFileSync(process.env.TMPDIR + '/countries.geo.json', 'utf8'));
const yuvarla = k => Array.isArray(k[0])
  ? k.map(yuvarla)
  : [Math.round(k[0] * 100) / 100, Math.round(k[1] * 100) / 100];
g.features.forEach(f => { f.geometry.coordinates = f.geometry.coordinates.map(yuvarla); });
const bas = '// EATER — ülke sınırları (Natural Earth 110m; kaynak: github.com/johan/world.geo.json).\n'
  + '// veri.js kalıbı: file:// altında fetch çalışmadığından script olarak yüklenir.\n'
  + '// Elle düzenlenmez; yenilemek için docs/superpowers/plans/2026-08-10-foto-ve-kure.md Task 4.\n';
fs.writeFileSync('dunya-ulkeler.js', bas + 'const DUNYA_ULKELER = ' + JSON.stringify(g) + ';\n');
console.log('özellik sayısı:', g.features.length);
"
```

- [ ] **Step 2: Doğrula:**

```bash
node -e "
const fs = require('fs');
const icerik = fs.readFileSync('dunya-ulkeler.js', 'utf8');
const g = JSON.parse(icerik.slice(icerik.indexOf('= ') + 2, icerik.lastIndexOf(';')));
const tur = g.features.find(f => f.id === 'TUR');
console.log('tip:', g.type, '| ülke:', g.features.length, '| TUR:', tur.properties.name);
"
ls -lh dunya-ulkeler.js
```

Beklenen: `tip: FeatureCollection | ülke: 180` (±5) `| TUR: Turkey`; dosya ≤ ~350 KB.

- [ ] **Step 3: Commit**

```bash
git add dunya-ulkeler.js
git commit -m "feat: dünya ülke sınırları verisi (dunya-ulkeler.js)"
```

---

### Task 5: Küre — `kure.js` + `index.html` bölümü + filtre senkronu

**Files:**
- Create: `kure.js`
- Modify: `index.html`, `app.js` (`filtreleriCiz`, dosya sonu), `styles.css` (dosya sonuna)

**Interfaces:**
- Consumes: `DUNYA_ULKELER` (Task 4), `RESTORANLAR` (veri.js), globe.gl CDN globali `Globe`.
- Produces:
  - `window.eaterKure = { ulkeSec(ulkeAdi), konumAl() }` — `ulkeSec('')` vurguyu temizler; `konumAl()` bu görevde hep `null` (Task 6 doldurur).
  - `ulkeFiltresiUygula(ulke)` (app.js) — kure.js ülke tıklamasında çağırır; `''` temizler.
  - `yakinlikModunuAc()` (app.js) — Task 6 kullanır; burada tanımlanır.

- [ ] **Step 1: globe.gl sürümünü sabitle ve SRI hash'ini hesapla:**

```bash
SURUM=$(curl -sL "https://data.jsdelivr.com/v1/packages/npm/globe.gl/resolved?specifier=2" | sed -n 's/.*"version": *"\([^"]*\)".*/\1/p')
echo "sürüm: $SURUM"
curl -sL "https://cdn.jsdelivr.net/npm/globe.gl@${SURUM}/dist/globe.gl.min.js" \
  | openssl dgst -sha384 -binary | openssl base64 -A; echo
```

Çıkan sürümü ve hash'i Step 2'deki script etiketine yaz.

- [ ] **Step 2: `index.html`'i güncelle.** `<main class="govde">` açılışının hemen ALTINA (filtrelerin üstüne):

```html
    <section id="kureBolumu" class="kure-bolumu" hidden aria-label="Dünya küresi">
      <div id="kure"></div>
      <div class="konum-cubugu">
        <input id="konumArama" type="search" placeholder="Semt, şehir veya ülke yaz…"
               aria-label="Konum ara">
        <button id="btnKonumAra" type="button">Ara</button>
        <button id="btnKonumum" type="button">📍 Konumumu kullan</button>
      </div>
      <p id="konumMesaj" class="silik konum-mesaj" aria-live="polite"></p>
      <p class="silik osm-kredi">Konum araması: © OpenStreetMap katkıcıları</p>
    </section>
```

Script bloğunda `app.js` satırının ALTINA (SÜRÜM ve HASH Step 1'den):

```html
  <script src="https://cdn.jsdelivr.net/npm/globe.gl@SÜRÜM/dist/globe.gl.min.js"
          integrity="sha384-HASH" crossorigin="anonymous"></script>
  <script src="dunya-ulkeler.js"></script>
  <script src="kure.js"></script>
```

(CDN yüklenemezse `Globe` tanımsız kalır; kure.js bölümü gizli bırakır — sayfa küresiz çalışır.)

- [ ] **Step 3: `kure.js`'i oluştur:**

```js
// EATER — dünya küresi ve konum katmanı. Yalnız index.html yükler.
// Globe (CDN) veya DUNYA_ULKELER yoksa hiçbir şey çizilmez; #kureBolumu gizli
// kalır ve sayfa bugünkü filtre+liste haliyle çalışır.

// veri.js ülke adları Türkçe, sınır verisi ISO alpha-3 — eşleme buradan.
// Kataloğa yeni ülke eklenince buraya bir satır eklemek yeterli (README'de not).
const ULKE_KODLARI = {
  'Türkiye': 'TUR', 'İtalya': 'ITA', 'Fransa': 'FRA', 'İspanya': 'ESP',
  'Yunanistan': 'GRC', 'Almanya': 'DEU', 'İngiltere': 'GBR', 'Hollanda': 'NLD',
  'Portekiz': 'PRT', 'ABD': 'USA', 'Japonya': 'JPN', 'Güney Kore': 'KOR'
};
const KOD_ULKE = Object.fromEntries(
  Object.entries(ULKE_KODLARI).map(([ad, kod]) => [kod, ad]));

const KURE_RENK_KATALOG = 'rgba(245, 183, 0, 0.65)';   // --altin ailesi
const KURE_RENK_SECILI  = 'rgba(255, 243, 228, 0.85)'; // --krem
const KURE_RENK_DIGER   = 'rgba(255, 255, 255, 0.06)';

let kure = null;
let kureSeciliKod = '';
let kullaniciKonumu = null; // {lat, lng} | null — Task 6 doldurur

function kureKatalogKodlari() {
  const kodlar = new Set();
  RESTORANLAR.forEach(r => {
    const kod = ULKE_KODLARI[r.ulke];
    if (kod) kodlar.add(kod);
    else console.warn(`kure.js: "${r.ulke}" için ULKE_KODLARI'nda kod yok — küreyle eşleşmez.`);
  });
  return kodlar;
}

function kureUlkeRengi(p) {
  if (p.id === kureSeciliKod) return KURE_RENK_SECILI;
  return kureKatalogKodlari().has(p.id) ? KURE_RENK_KATALOG : KURE_RENK_DIGER;
}

function kureyiKur() {
  if (typeof Globe === 'undefined' || typeof DUNYA_ULKELER === 'undefined') return;
  const bolum = document.getElementById('kureBolumu');
  const kap = document.getElementById('kure');
  if (!bolum || !kap) return;
  bolum.hidden = false;

  kure = Globe()(kap)
    .width(kap.clientWidth)
    .height(Math.min(420, Math.round(window.innerHeight * 0.5)))
    .backgroundColor('rgba(0,0,0,0)')
    .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe@2/example/img/earth-blue-marble.jpg')
    .polygonsData(DUNYA_ULKELER.features)
    .polygonAltitude(0.008)
    .polygonCapColor(kureUlkeRengi)
    .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
    .polygonStrokeColor(() => 'rgba(255, 243, 228, 0.35)')
    .polygonLabel(p => kacis(KOD_ULKE[p.id] || p.properties.name))
    .onPolygonClick(p => {
      if (!kureKatalogKodlari().has(p.id)) return; // restoranı olmayan ülke: tıklama yok
      const ad = KOD_ULKE[p.id];
      ulkeFiltresiUygula(kureSeciliKod === p.id ? '' : ad); // app.js ulkeSec ile geri döner
    });

  kure.controls().autoRotate = true;
  kure.controls().autoRotateSpeed = 0.6;
  kure.pointOfView({ lat: 39, lng: 35, altitude: 2.2 }, 0); // açılışta Türkiye görünür
  window.addEventListener('resize', () => kure.width(kap.clientWidth));
  konumCubuguKur(); // Task 6'da dolar; bu görevde boş gövdeli tanımlanır
}

// app.js her ülke filtresi değişiminde çağırır — vurgu senkron kalır.
function kureUlkeSec(ulkeAdi) {
  kureSeciliKod = ULKE_KODLARI[ulkeAdi] || '';
  if (kure) kure.polygonCapColor(kureUlkeRengi); // yeniden boya
}

function kureKonumAl() { return kullaniciKonumu; }

function konumCubuguKur() { /* Task 6 dolduracak */ }

window.eaterKure = { ulkeSec: kureUlkeSec, konumAl: kureKonumAl };
document.addEventListener('DOMContentLoaded', kureyiKur);
```

- [ ] **Step 4: `app.js`'e senkron uçlarını ekle.** Dosya sonuna (DOMContentLoaded bloğunun ÜSTÜNE):

```js
// kure.js ülkeye tıklanınca çağırır; '' filtreyi temizler.
function ulkeFiltresiUygula(ulke) {
  filtreDurumu.ulke = ulke;
  filtreDurumu.sehir = '';
  filtreleriCiz();
  render();
  window.eaterKure?.ulkeSec(ulke);
}

// kure.js konum belirlenince çağırır: "Yakınlık" seçeneği görünür ve seçilir.
function yakinlikModunuAc() {
  siralamaOlcutu = 'yakinlik';
  filtreleriCiz();
  render();
}
```

`filtreleriCiz` içindeki `fUlke` change dinleyicisine (`render();` satırından önce) ve `fSifirla` click dinleyicisine (`render();` satırından önce) şu satırı ekle:

```js
    window.eaterKure?.ulkeSec(filtreDurumu.ulke);
```

- [ ] **Step 5: `styles.css` sonuna küre stillerini ekle:**

```css
/* --- Dünya küresi --- */
.kure-bolumu {
  margin-bottom: 1rem; border-radius: var(--yuvarlak);
  background: var(--yuzey-derin); box-shadow: var(--golge);
  padding: .5rem .9rem .9rem; overflow: hidden;
}
#kure { display: flex; justify-content: center; }
#kure canvas { max-width: 100%; }
.konum-cubugu { display: flex; gap: .5rem; flex-wrap: wrap; margin-top: .4rem; }
.konum-cubugu input {
  flex: 1; min-width: 160px; padding: .5rem .7rem;
  border: 1px solid var(--kenar); border-radius: 10px;
  background: var(--yuzey-oyuk); color: var(--krem);
}
.konum-cubugu button {
  padding: .5rem .8rem; border: none; border-radius: 10px;
  background: var(--altin); color: var(--kirmizi-derin);
  font-weight: 600; cursor: pointer;
}
.konum-cubugu button:hover { background: var(--altin-koyu); }
.konum-mesaj { margin: .35rem 0 0; }
.osm-kredi { margin: .15rem 0 0; font-size: .75rem; }
.mesafe { color: var(--altin); font-weight: 600; margin-left: .4rem; }
```

- [ ] **Step 6: Doğrula.** Önizlemede `index.html`: küre görünür ve kendi kendine döner; sürüklenebilir; Türkiye altın renkte, diğer ülkeler soluk. Türkiye'ye tıkla → ülke filtresi "Türkiye" olur, liste süzülür, küre vurgusu krem olur; tekrar tıkla → temizlenir. Filtre kutusundan Türkiye seç → küre vurgulanır; "Filtreleri temizle" → vurgu kalkar. Konsolda hata yok. `file://` ile `index.html` aç → küre bölümü gizli, filtreler+liste çalışır (CDN scripti `file://` altında da yüklenebilir; internetsiz durumda gizli kalması esas — DevTools'ta "Offline" işaretleyip yenileyerek de sınanır).

- [ ] **Step 7: Commit**

```bash
git add kure.js index.html app.js styles.css
git commit -m "feat: dönen dünya küresi — ülke tıklama ile filtre senkronu"
```

---

### Task 6: Konum (GPS + Nominatim) ve yakınlık sıralaması

**Files:**
- Modify: `kure.js` (`konumCubuguKur` ve yeni fonksiyonlar), `app.js` (`kartHTML`, `sirala`, `filtreleriCiz`), `bilesenler.js` (dosya sonuna)

**Interfaces:**
- Consumes: Task 5'in tamamı (`kure`, `kullaniciKonumu`, `yakinlikModunuAc`, `window.eaterKure.konumAl`).
- Produces:
  - `mesafeKm(a, b) → number` ve `mesafeMetni(km) → string` (bilesenler.js) — `a`,`b`: `{lat, lng}`.
  - `sirala(liste, 'yakinlik')` — konuma göre artan; `koordinat: null` sona.
  - Kartlarda `~3,2 km` etiketi; sıralama menüsünde koşullu "Yakınlık" seçeneği.

- [ ] **Step 1: `bilesenler.js` sonuna mesafe yardımcılarını ekle:**

```js
// --- Mesafe (yakınlık sıralaması) ---

// Kuş uçuşu (haversine), km. a ve b: {lat, lng}.
function mesafeKm(a, b) {
  const R = 6371;
  const rad = d => d * Math.PI / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

function mesafeMetni(km) {
  return km < 10 ? `~${ondalikTR(km)} km` : `~${Math.round(km).toLocaleString('tr-TR')} km`;
}
```

- [ ] **Step 2: `kure.js`'te konum çubuğunu doldur.** `function konumCubuguKur() { /* Task 6 dolduracak */ }` satırını sil, yerine:

```js
function konumBelirle(lat, lng, etiket) {
  kullaniciKonumu = { lat, lng };
  kure.pointsData([{ lat, lng }])
    .pointColor(() => '#ff5252')
    .pointAltitude(0.03)
    .pointRadius(0.6);
  kure.controls().autoRotate = false; // pin görünür kalsın
  kure.pointOfView({ lat, lng, altitude: 1.6 }, 1000);
  document.getElementById('konumMesaj').textContent = etiket;
  yakinlikModunuAc(); // app.js: Yakınlık seçeneğini ekler ve seçer
}

async function konumAra() {
  const mesaj = document.getElementById('konumMesaj');
  const sorgu = document.getElementById('konumArama').value.trim();
  if (!sorgu) return;
  mesaj.textContent = 'Aranıyor…';
  try {
    const yanit = await fetch(
      'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' +
        encodeURIComponent(sorgu),
      { headers: { 'Accept-Language': 'tr' } });
    if (!yanit.ok) throw new Error(String(yanit.status));
    const liste = await yanit.json();
    if (liste.length === 0) {
      mesaj.textContent = 'Bulunamadı — daha genel bir ad dene ("Kadıköy, İstanbul" gibi).';
      return;
    }
    konumBelirle(Number(liste[0].lat), Number(liste[0].lon),
      `📍 ${liste[0].display_name.split(',')[0]}`);
  } catch {
    mesaj.textContent = 'Bağlantı hatası — internetini kontrol edip tekrar dene.';
  }
}

function konumumuKullan() {
  const mesaj = document.getElementById('konumMesaj');
  if (!navigator.geolocation) {
    mesaj.textContent = 'Tarayıcın konum desteklemiyor — yazarak arayabilirsin.';
    return;
  }
  mesaj.textContent = 'Konum alınıyor…';
  navigator.geolocation.getCurrentPosition(
    p => konumBelirle(p.coords.latitude, p.coords.longitude, '📍 Konumun'),
    () => { mesaj.textContent = 'Konum izni verilmedi — yazarak arayabilirsin.'; });
}

function konumCubuguKur() {
  document.getElementById('btnKonumAra').addEventListener('click', konumAra);
  document.getElementById('konumArama').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); konumAra(); }
  });
  document.getElementById('btnKonumum').addEventListener('click', konumumuKullan);
}
```

(Nominatim yalnız düğme/Enter ile çağrılır — tuş başına istek yok; kullanım koşuluna uygun. Kredi ibaresi Task 5'te sayfaya kondu.)

- [ ] **Step 3: `app.js` — "yakinlik" sıralaması.** `sirala` fonksiyonunda `if (olcut === 'fiyat') {` bloğunun ÜSTÜNE:

```js
  if (olcut === 'yakinlik') {
    const konum = window.eaterKure?.konumAl();
    if (!konum) return kopya; // konum yokken seçenek menüde zaten yok
    return kopya.sort((a, b) => {
      // koordinat: null restoranlar daima sona; iki null eşit sayılır (NaN üretme).
      if (!a.koordinat && !b.koordinat) return 0;
      if (!a.koordinat) return 1;
      if (!b.koordinat) return -1;
      return mesafeKm(konum, a.koordinat) - mesafeKm(konum, b.koordinat);
    });
  }
```

- [ ] **Step 4: `app.js` — koşullu "Yakınlık" seçeneği.** `filtreleriCiz` içindeki `fSiralama` seçeneklerini değiştir:

```js
    secimKutusu('fSiralama', 'Sırala', [
      ...(window.eaterKure?.konumAl()
        ? [{ deger: 'yakinlik', metin: 'Yakınlık' }] : []),
      { deger: 'yemek', metin: 'Yemek puanı' },
      { deger: 'ambiyans', metin: 'Ambiyans puanı' },
      { deger: 'servis', metin: 'Servis puanı' },
      { deger: 'fiyat', metin: 'Fiyat (ucuzdan)' }
    ]) +
```

- [ ] **Step 5: `app.js` — kartlara mesafe etiketi.** `kartHTML` içinde `const foto = ilkFoto(r.fotolar);` satırının ÜSTÜNE:

```js
  const konum = window.eaterKure?.konumAl();
  const mesafe = (konum && r.koordinat)
    ? `<span class="mesafe">${mesafeMetni(mesafeKm(konum, r.koordinat))}</span>`
    : '';
```

ve `kart-yer` satırını şöyle değiştir:

```js
        <p class="kart-yer">${r.semt} · ${r.mutfak.join(', ')}${mesafe}</p>
```

- [ ] **Step 6: Doğrula.** Önizlemede: (1) "İstanbul" yaz + Ara → pin düşer, küre İstanbul'a döner, sıralama "Yakınlık"a geçer, kartlarda `~X km` etiketleri görünür ve artan sıradadır; koordinatsız 3 restoran (grep `"koordinat": null`) listenin sonundadır. (2) "Roma" ara → sıralama değişir, etiketler büyür (`~1.400 km` gibi). (3) Saçma bir metin ara → "Bulunamadı…" mesajı. (4) 📍 Konumumu kullan → izin ver: pin + sıralama; izni reddet: "Konum izni verilmedi…" mesajı. (5) Konum yokken menüde "Yakınlık" seçeneği görünmez. Konsolda hata yok.

- [ ] **Step 7: Commit**

```bash
git add kure.js app.js bilesenler.js
git commit -m "feat: GPS/Nominatim konum, kürede pin, yakınlık sıralaması ve mesafe etiketleri"
```

---

### Task 7: Dokümantasyon + son uçtan uca doğrulama

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: önceki tüm görevler.

- [ ] **Step 1: `README.md` dosya tablosuna iki satır ekle** (`app.js` satırının altına):

```markdown
| `kure.js` | Dünya küresi, konum (GPS/Nominatim) ve yakınlık — yalnız `index.html` |
| `dunya-ulkeler.js` | Ülke sınırları verisi (üretilmiş; elle düzenlenmez) |
```

- [ ] **Step 2: README "Yeni Restoran Ekleme" bölümüne not ekle** (mevcut paragrafın sonuna):

```markdown

Yeni bir **ülkeden** ilk restoran eklenirken `kure.js` içindeki `ULKE_KODLARI`
sözlüğüne o ülkenin ISO alpha-3 kodu da eklenmelidir (ör. `'İtalya': 'ITA'`);
aksi halde ülke kürede vurgulanmaz (konsola uyarı düşer, site bozulmaz).
```

README "Sonraki Adımlar"daki fotoğraf maddesi katalog fotoğraflarıyla ilgilidir, dokunma.

- [ ] **Step 3: Son uçtan uca tur (önizlemede):** `index.html` → küre döner, ülke tıkla/temizle, konum ara, yakınlık sıralaması; `gunluk.html` → fotolu ziyaret ekle; `kisi.html` → fotolar + büyütme; her sayfada konsol temiz. `file://` ile `index.html` ve `detay.html` aç → katalog çalışır.

- [ ] **Step 4: KULLANICI ADIMI — telefonda kamera yolunu dene:** siteyi telefondan aç (aynı ağda `http://<mac-ip>:8123` veya yayın sonrası), 📷 → "Fotoğraf çek" → kamera izni onayı → çek → kaydet → kartta görün. (Not: `getUserMedia` değil `capture` kullanıldığından izin akışı tamamen tarayıcınındır; `http://` yerel adreste de çalışır.)

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs: README — küre dosyaları ve ULKE_KODLARI notu"
```
