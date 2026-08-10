# EATER Günlük + Hesap Sistemi Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** EATER'a Supabase tabanlı hesap sistemi ve Letterboxd benzeri, herkese açık profilli kişisel restoran günlüğü eklemek; semt filtresini ülke/şehir filtresine çevirmek.

**Architecture:** Site statik kalır (framework yok, build yok). Supabase JS istemcisi CDN'den tek `<script>` ile yüklenir; `hesap.js` tüm oturum/veri erişimini sarar. Kişisel puanlar yalnızca Supabase'te yaşar, `veri.js` katalog puanlarına asla karışmaz.

**Tech Stack:** Saf HTML/CSS/JS, Supabase (Auth + Postgres + RLS), `@supabase/supabase-js@2` (CDN).

## Global Constraints

- Test çerçevesi yok: her görev tarayıcıda elle doğrulanır (önizleme: `http://localhost:8123`).
- Tüm adlandırma Türkçe, mevcut kod stiliyle aynı (ör. `kartHTML`, `filtreleriCiz`).
- `veri.js` yalnızca veri içerir; hiçbir görevde mantık eklenmez.
- Kullanıcı puanları katalog puanlarıyla asla toplanmaz/ortalanmaz.
- Katalog, Supabase yapılandırılmamışken ya da internetsizken tam çalışmalı.
- Commit mesajları Türkçe, mevcut stil: `feat|fix|docs: kısa açıklama`.
- CDN scripti sabit sürümle (`@supabase/supabase-js@2.112.2`) ve SRI
  (`integrity` + `crossorigin="anonymous"`) ile yüklenir; sürüm yükseltilirse
  hash de yenilenmeli.

---

### Task 1: Gezinme, tagline kaldırma, ülke/şehir filtreleri

**Files:**
- Modify: `index.html`, `detay.html`, `app.js:34-146`, `bilesenler.js`, `styles.css`

**Interfaces:**
- Produces: `gezinmeHTML(aktif)` (bilesenler.js) — `aktif` ∈ `'kesfet' | 'gunluk' | 'kisiler'`; nav + `<span id="hesapKutusu">` döndürür. Sonraki tüm sayfalar bunu kullanır.

- [ ] **Step 1: `bilesenler.js`'e gezinme bileşeni ekle** (dosya sonuna):

```js
function gezinmeHTML(aktif) {
  const sekme = (href, ad, anahtar) =>
    `<a class="sekme${aktif === anahtar ? ' sekme-aktif' : ''}" href="${href}">${ad}</a>`;
  return `
    <nav class="gezinme">
      ${sekme('index.html', 'Keşfet', 'kesfet')}
      ${sekme('gunluk.html', 'Gittiklerim', 'gunluk')}
      ${sekme('kisiler.html', 'Kişiler', 'kisiler')}
      <span id="hesapKutusu" class="hesap-kutusu"></span>
    </nav>`;
}
```

- [ ] **Step 2: `index.html` başlığını değiştir** — `<p class="alt-baslik">…</p>` satırını SİL, `<title>`'ı `EATER — Restoran Rehberi` yap, `<h1 class="logo">EATER</h1>` altına ekle:

```html
<div id="gezinme"></div>
```

`detay.html`'de de `<header>` içine aynı `<div id="gezinme"></div>` ekle.

- [ ] **Step 3: `app.js` ve `detay.js`'te gezinmeyi çiz** — her ikisinin `DOMContentLoaded` bloğu başına:

```js
document.getElementById('gezinme').innerHTML = gezinmeHTML('kesfet'); // detay.js'te de 'kesfet'
```

- [ ] **Step 4: `app.js` filtrelerini ülke/şehire çevir:**

`filtreDurumu`'nu değiştir: `{ segment: '', ulke: '', sehir: '', etiket: '', rezervasyon: '' }`.
`filtrele` içindeki `if (f.semt && r.semt !== f.semt) return false;` satırı yerine:

```js
    if (f.ulke && r.ulke !== f.ulke) return false;
    if (f.sehir && r.sehir !== f.sehir) return false;
```

`filtreleriCiz` içinde `const semtler = …` satırını sil, yerine:

```js
  const ulkeler = benzersiz(RESTORANLAR.map(r => r.ulke));
  const sehirler = benzersiz(RESTORANLAR
    .filter(r => !filtreDurumu.ulke || r.ulke === filtreDurumu.ulke)
    .map(r => r.sehir));
```

`fSemt` seçim kutusunu iki kutuyla değiştir:

```js
    secimKutusu('fUlke', 'Ülke',
      [{ deger: '', metin: 'Hepsi' }, ...ulkeler.map(u => ({ deger: u, metin: u }))]) +
    secimKutusu('fSehir', 'Şehir',
      [{ deger: '', metin: 'Hepsi' }, ...sehirler.map(s => ({ deger: s, metin: s }))]) +
```

`bagla('fSemt', 'semt');` yerine (ülke değişince şehir listesi tazelensin diye ülke bağını özel yaz):

```js
  document.getElementById('fUlke').addEventListener('change', e => {
    filtreDurumu.ulke = e.target.value;
    filtreDurumu.sehir = '';
    filtreleriCiz();          // şehir seçenekleri seçilen ülkeye daralır
    render();
  });
  bagla('fSehir', 'sehir');
```

Not: `filtreleriCiz` yeniden çizerken mevcut seçimleri geri yüklemeli — fonksiyonun sonuna ekle:

```js
  document.getElementById('fSegment').value = filtreDurumu.segment;
  document.getElementById('fUlke').value = filtreDurumu.ulke;
  document.getElementById('fSehir').value = filtreDurumu.sehir;
  document.getElementById('fEtiket').value = filtreDurumu.etiket;
  document.getElementById('fRezervasyon').value = filtreDurumu.rezervasyon;
```

Sıfırlama düğmesindeki kimlik listesini `['fSegment', 'fUlke', 'fSehir', 'fEtiket', 'fRezervasyon']` yap.

- [ ] **Step 5: `styles.css`'e gezinme stilleri ekle** (dosya sonuna; mevcut değişkenleri kullan):

```css
.gezinme { display: flex; gap: .25rem; justify-content: center; align-items: center;
  flex-wrap: wrap; margin-top: 1rem; }
.sekme { padding: .45rem 1rem; border-radius: 999px; text-decoration: none;
  color: inherit; opacity: .75; }
.sekme:hover { opacity: 1; }
.sekme-aktif { background: rgba(255,255,255,.12); opacity: 1; font-weight: 600; }
.hesap-kutusu { margin-left: .75rem; }
.hesap-kutusu a, .hesap-kutusu button { font: inherit; color: inherit; background: none;
  border: 1px solid rgba(255,255,255,.35); border-radius: 999px; padding: .4rem .9rem;
  cursor: pointer; text-decoration: none; }
```

- [ ] **Step 6: Tarayıcıda doğrula** — önizlemeyi yenile: tagline yok; üstte Keşfet/Gittiklerim/Kişiler sekmeleri var (son ikisi henüz 404 verir, normal); Ülke=Türkiye seçince Şehir kutusunda yalnız İstanbul kalıyor; filtre + temizleme çalışıyor; detay sayfasında gezinme görünüyor.

- [ ] **Step 7: Commit**

```bash
git add index.html detay.html app.js detay.js bilesenler.js styles.css
git commit -m "feat: gezinme sekmeleri, ülke/şehir filtreleri; tagline kaldırıldı"
```

---

### Task 2: Supabase temeli — ayarlar, istemci, oturum, veritabanı şeması

**Files:**
- Create: `ayarlar.js`, `hesap.js`, `docs/supabase-sema.sql`
- Modify: `index.html`, `detay.html` (script etiketleri)

**Interfaces:**
- Produces (`hesap.js`, global `eaterHesap` nesnesi):
  - `eaterHesap.hazir()` → bool — ayarlar dolu ve istemci kuruldu mu
  - `eaterHesap.istemci` → Supabase istemcisi (hazır değilse `null`)
  - `eaterHesap.oturum()` → Promise<Session|null>
  - `eaterHesap.kayitOl(eposta, sifre, kullaniciAdi)` → Promise<{hata}>
  - `eaterHesap.girisYap(eposta, sifre)` → Promise<{hata}>
  - `eaterHesap.cikisYap()` → Promise<void>
  - `eaterHesap.hesapKutusunuCiz()` — gezinmedeki `#hesapKutusu`'na Giriş/Çıkış durumunu çizer

- [ ] **Step 1: `ayarlar.js` oluştur:**

```js
// EATER — Supabase bağlantı ayarları.
// supabase.com'da proje açtıktan sonra Project Settings → API'den iki değeri buraya yapıştırın.
// Boş kaldıkları sürece site "katalog-yalnız" kipte çalışır; günlük sayfaları uyarı gösterir.
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';
```

- [ ] **Step 2: `hesap.js` oluştur:**

```js
// EATER — hesap ve Supabase erişim katmanı. Tüm oturum işleri buradan geçer.

const eaterHesap = (() => {
  const kuruldu = typeof SUPABASE_URL === 'string' && SUPABASE_URL !== '' &&
    typeof supabase !== 'undefined';
  const istemci = kuruldu
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

  async function oturum() {
    if (!istemci) return null;
    const { data } = await istemci.auth.getSession();
    return data.session ?? null;
  }

  async function kayitOl(eposta, sifre, kullaniciAdi) {
    const { data, error } = await istemci.auth.signUp({ email: eposta, password: sifre });
    if (error) return { hata: error.message };
    const { error: pHata } = await istemci.from('profiller')
      .insert({ id: data.user.id, kullanici_adi: kullaniciAdi });
    return { hata: pHata ? pHata.message : null };
  }

  async function girisYap(eposta, sifre) {
    const { error } = await istemci.auth.signInWithPassword({ email: eposta, password: sifre });
    return { hata: error ? error.message : null };
  }

  async function cikisYap() {
    await istemci.auth.signOut();
    window.location.reload();
  }

  async function hesapKutusunuCiz() {
    const kutu = document.getElementById('hesapKutusu');
    if (!kutu) return;
    if (!istemci) { kutu.innerHTML = ''; return; }
    const o = await oturum();
    kutu.innerHTML = o
      ? `<a href="kisi.html?id=${o.user.id}">Profilim</a>
         <button type="button" id="btnCikis">Çıkış</button>`
      : '<a href="gunluk.html">Giriş</a>';
    document.getElementById('btnCikis')?.addEventListener('click', cikisYap);
  }

  return { hazir: () => kuruldu, istemci, oturum, kayitOl, girisYap, cikisYap, hesapKutusunuCiz };
})();
```

- [ ] **Step 3: Script etiketlerini bağla** — `index.html` ve `detay.html`'de `veri.js`'ten ÖNCE:

```html
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.2"
          integrity="sha384-B2duOBIryCXbX4eDE4BdJwtNkQMRQde3o6IsjfPW28E6aH1CYE96hHeZRG3zY56O"
          crossorigin="anonymous"></script>
  <script src="ayarlar.js"></script>
```

ve `bilesenler.js`'ten sonra `<script src="hesap.js"></script>`. `app.js` ve `detay.js` `DOMContentLoaded` içine `eaterHesap.hesapKutusunuCiz();` ekle (gezinme çiziminden sonra).

- [ ] **Step 4: `docs/supabase-sema.sql` oluştur** (kullanıcı Supabase SQL Editor'da çalıştıracak):

```sql
-- EATER şeması. Supabase Dashboard → SQL Editor'a yapıştırıp Run deyin.
create table profiller (
  id uuid primary key references auth.users(id) on delete cascade,
  kullanici_adi text unique not null check (char_length(kullanici_adi) between 2 and 30),
  ad text,
  tanitim text,
  created_at timestamptz not null default now()
);
create table mekanlar (
  id uuid primary key default gen_random_uuid(),
  isim text not null,
  ulke text not null,
  sehir text not null,
  ekleyen uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
create table ziyaretler (
  id uuid primary key default gen_random_uuid(),
  kullanici uuid not null references auth.users(id) on delete cascade,
  restoran_id text,
  mekan_id uuid references mekanlar(id) on delete cascade,
  tarih date not null,
  yemek_puan numeric check (yemek_puan is null or (yemek_puan between 0 and 10)),
  ambiyans_puan numeric check (ambiyans_puan is null or (ambiyans_puan between 0 and 10)),
  servis_puan numeric check (servis_puan is null or (servis_puan between 0 and 10)),
  yorum text,
  created_at timestamptz not null default now(),
  check (restoran_id is not null or mekan_id is not null)
);

alter table profiller enable row level security;
alter table mekanlar enable row level security;
alter table ziyaretler enable row level security;

-- Profiller herkese açık; herkes yalnız kendi satırını yazar/günceller.
create policy "profil okuma" on profiller for select using (true);
create policy "profil ekleme" on profiller for insert with check (auth.uid() = id);
create policy "profil güncelleme" on profiller for update using (auth.uid() = id);

-- Mekânlar herkese açık okunur; girişli herkes ekleyebilir.
create policy "mekan okuma" on mekanlar for select using (true);
create policy "mekan ekleme" on mekanlar for insert with check (auth.uid() is not null);

-- Ziyaretler herkese açık okunur (profiller açık); yazma yalnız sahibine.
create policy "ziyaret okuma" on ziyaretler for select using (true);
create policy "ziyaret ekleme" on ziyaretler for insert with check (auth.uid() = kullanici);
create policy "ziyaret güncelleme" on ziyaretler for update using (auth.uid() = kullanici);
create policy "ziyaret silme" on ziyaretler for delete using (auth.uid() = kullanici);
```

- [ ] **Step 5: Tarayıcıda doğrula** — ayarlar boşken: konsolda hata YOK, katalog aynen çalışıyor, gezinmede hesap kutusu boş. (Supabase kurulumu kullanıcıya teslim edilecek ayrı adım; kurulunca kutuda "Giriş" görünecek.)

- [ ] **Step 6: Commit**

```bash
git add ayarlar.js hesap.js docs/supabase-sema.sql index.html detay.html app.js detay.js
git commit -m "feat: Supabase temeli — ayarlar, hesap katmanı, veritabanı şeması"
```

---

### Task 3: Gittiklerim sayfası — giriş/kayıt + ziyaret ekleme + kendi listem

**Files:**
- Create: `gunluk.html`, `gunluk.js`
- Modify: `styles.css` (form stilleri)

**Interfaces:**
- Consumes: `eaterHesap.*` (Task 2), `gezinmeHTML` (Task 1), `RESTORANLAR`, `puanRozeti` (bilesenler.js)
- Produces: `gunluk.html?restoran=<id>` sorgu parametresi — detay sayfası (Task 5) bu bağlantıyla formu önceden doldurur. `ziyaretKartHTML(z, restoranAdi)` deseni Task 4'te kopyalanır (paylaşılan dosyaya taşınmaz, iki sayfa bağımsız kalır).

- [ ] **Step 1: `gunluk.html` oluştur** (`detay.html` iskeletiyle aynı baş/uç; `<title>EATER — Gittiklerim</title>`):

```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>EATER — Gittiklerim</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="ust">
    <h1 class="logo">EATER</h1>
    <div id="gezinme"></div>
  </header>
  <main class="govde">
    <section id="icerik"></section>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.2"
          integrity="sha384-B2duOBIryCXbX4eDE4BdJwtNkQMRQde3o6IsjfPW28E6aH1CYE96hHeZRG3zY56O"
          crossorigin="anonymous"></script>
  <script src="ayarlar.js"></script>
  <script src="veri.js"></script>
  <script src="bilesenler.js"></script>
  <script src="hesap.js"></script>
  <script src="gunluk.js"></script>
</body>
</html>
```

- [ ] **Step 2: `gunluk.js` oluştur:**

```js
// EATER — Gittiklerim: giriş/kayıt, ziyaret ekleme formu, kendi kayıt listem.

function girisFormuHTML() {
  return `
    <div class="panel">
      <h2>Giriş yap</h2>
      <form id="fGiris" class="dikey-form">
        <input type="email" id="gEposta" placeholder="E-posta" required>
        <input type="password" id="gSifre" placeholder="Şifre" required>
        <button type="submit">Giriş</button>
      </form>
      <h2>Hesabın yok mu?</h2>
      <form id="fKayit" class="dikey-form">
        <input type="text" id="kAd" placeholder="Kullanıcı adı" required minlength="2" maxlength="30">
        <input type="email" id="kEposta" placeholder="E-posta" required>
        <input type="password" id="kSifre" placeholder="Şifre (en az 6 karakter)" required minlength="6">
        <button type="submit">Kayıt ol</button>
      </form>
      <p id="hesapHata" class="hata" aria-live="polite"></p>
    </div>`;
}

function puanAlani(id, etiket) {
  return `
    <label class="puan-alani">${etiket}
      <input type="number" id="${id}" min="0" max="10" step="0.1" placeholder="—">
    </label>`;
}

function ziyaretFormuHTML(onSecimId) {
  const secenekler = RESTORANLAR
    .map(r => `<option value="${r.id}" ${r.id === onSecimId ? 'selected' : ''}>${r.isim} (${r.sehir})</option>`)
    .join('');
  return `
    <div class="panel">
      <h2>Ziyaret ekle</h2>
      <form id="fZiyaret" class="dikey-form">
        <label>Mekân
          <select id="zRestoran">
            <option value="">— katalog dışı mekân —</option>${secenekler}
          </select>
        </label>
        <div id="serbestAlan">
          <input type="text" id="zIsim" placeholder="Mekân adı">
          <input type="text" id="zUlke" placeholder="Ülke">
          <input type="text" id="zSehir" placeholder="Şehir">
        </div>
        <label>Tarih <input type="date" id="zTarih" required></label>
        <div class="puan-satiri">
          ${puanAlani('zYemek', 'Yemek')}${puanAlani('zAmbiyans', 'Ambiyans')}${puanAlani('zServis', 'Servis')}
        </div>
        <textarea id="zYorum" placeholder="Yorumun (isteğe bağlı)" rows="3"></textarea>
        <button type="submit">Günlüğe ekle</button>
      </form>
      <p id="ziyaretHata" class="hata" aria-live="polite"></p>
      <h2>Gittiklerim</h2>
      <div id="ziyaretListesi"></div>
    </div>`;
}

function ziyaretKartHTML(z, mekanAdi, yer) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? puanRozeti(etiket, deger) : '';
  return `
    <article class="ziyaret">
      <div class="ziyaret-ust">
        <strong>${mekanAdi}</strong>
        <span class="silik">${yer} · ${z.tarih}</span>
      </div>
      <div class="rozetler">
        ${puan('Yemek', z.yemek_puan)}${puan('Ambiyans', z.ambiyans_puan)}${puan('Servis', z.servis_puan)}
      </div>
      ${z.yorum ? `<p>${z.yorum}</p>` : ''}
    </article>`;
}

function ziyaretIsimYer(z, mekanlar) {
  if (z.restoran_id) {
    const r = RESTORANLAR.find(x => x.id === z.restoran_id);
    return r ? [r.isim, `${r.sehir}, ${r.ulke}`] : [z.restoran_id, ''];
  }
  const m = mekanlar.find(x => x.id === z.mekan_id);
  return m ? [m.isim, `${m.sehir}, ${m.ulke}`] : ['(silinmiş mekân)', ''];
}

async function ziyaretleriGoster(kullaniciId) {
  const kap = document.getElementById('ziyaretListesi');
  const { data: ziyaretler, error } = await eaterHesap.istemci
    .from('ziyaretler').select('*')
    .eq('kullanici', kullaniciId).order('tarih', { ascending: false });
  if (error) { kap.innerHTML = `<p class="hata">Kayıtlar yüklenemedi: ${error.message}</p>`; return; }
  const mekanIdler = ziyaretler.filter(z => z.mekan_id).map(z => z.mekan_id);
  let mekanlar = [];
  if (mekanIdler.length > 0) {
    ({ data: mekanlar = [] } = await eaterHesap.istemci
      .from('mekanlar').select('*').in('id', mekanIdler));
  }
  kap.innerHTML = ziyaretler.length === 0
    ? '<p class="silik">Henüz kayıt yok — ilk ziyaretini yukarıdan ekle.</p>'
    : ziyaretler.map(z => ziyaretKartHTML(z, ...ziyaretIsimYer(z, mekanlar))).join('');
}

function sayiVeyaNull(id) {
  const ham = document.getElementById(id).value;
  return ham === '' ? null : Number(ham);
}

async function ziyaretKaydet(kullaniciId) {
  const hataKutusu = document.getElementById('ziyaretHata');
  hataKutusu.textContent = '';
  const restoranId = document.getElementById('zRestoran').value || null;
  let mekanId = null;
  if (!restoranId) {
    const isim = document.getElementById('zIsim').value.trim();
    const ulke = document.getElementById('zUlke').value.trim();
    const sehir = document.getElementById('zSehir').value.trim();
    if (!isim || !ulke || !sehir) {
      hataKutusu.textContent = 'Katalog dışı mekân için ad, ülke ve şehir gerekli.';
      return;
    }
    const { data, error } = await eaterHesap.istemci
      .from('mekanlar').insert({ isim, ulke, sehir, ekleyen: kullaniciId }).select().single();
    if (error) { hataKutusu.textContent = error.message; return; }
    mekanId = data.id;
  }
  const { error } = await eaterHesap.istemci.from('ziyaretler').insert({
    kullanici: kullaniciId,
    restoran_id: restoranId,
    mekan_id: mekanId,
    tarih: document.getElementById('zTarih').value,
    yemek_puan: sayiVeyaNull('zYemek'),
    ambiyans_puan: sayiVeyaNull('zAmbiyans'),
    servis_puan: sayiVeyaNull('zServis'),
    yorum: document.getElementById('zYorum').value.trim() || null
  });
  if (error) { hataKutusu.textContent = error.message; return; }
  document.getElementById('fZiyaret').reset();
  ziyaretleriGoster(kullaniciId);
}

async function sayfayiKur() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Günlük özelliği henüz yapılandırılmadı (Supabase ayarları boş). Katalog için <a href="index.html">Keşfet</a> sayfası açık.</p>';
    return;
  }
  const o = await eaterHesap.oturum();
  if (!o) {
    kap.innerHTML = girisFormuHTML();
    document.getElementById('fGiris').addEventListener('submit', async e => {
      e.preventDefault();
      const { hata } = await eaterHesap.girisYap(
        document.getElementById('gEposta').value, document.getElementById('gSifre').value);
      if (hata) document.getElementById('hesapHata').textContent = hata;
      else window.location.reload();
    });
    document.getElementById('fKayit').addEventListener('submit', async e => {
      e.preventDefault();
      const { hata } = await eaterHesap.kayitOl(
        document.getElementById('kEposta').value,
        document.getElementById('kSifre').value,
        document.getElementById('kAd').value.trim());
      if (hata) document.getElementById('hesapHata').textContent = hata;
      else window.location.reload();
    });
    return;
  }
  const onSecim = new URLSearchParams(window.location.search).get('restoran');
  kap.innerHTML = ziyaretFormuHTML(onSecim);
  document.getElementById('fZiyaret').addEventListener('submit', e => {
    e.preventDefault();
    ziyaretKaydet(o.user.id);
  });
  ziyaretleriGoster(o.user.id);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('gunluk');
  eaterHesap.hesapKutusunuCiz();
  sayfayiKur();
});
```

- [ ] **Step 3: `styles.css`'e form/panel stilleri ekle** (dosya sonuna):

```css
.panel { background: rgba(0,0,0,.18); border-radius: 12px; padding: 1.25rem; margin-top: 1rem; }
.dikey-form { display: flex; flex-direction: column; gap: .6rem; max-width: 420px; }
.dikey-form input, .dikey-form select, .dikey-form textarea {
  font: inherit; padding: .55rem .7rem; border-radius: 8px;
  border: 1px solid rgba(255,255,255,.25); background: rgba(0,0,0,.25); color: inherit; }
.dikey-form button { font: inherit; padding: .55rem; border-radius: 8px; border: none;
  cursor: pointer; font-weight: 600; }
.puan-satiri { display: flex; gap: .6rem; }
.puan-alani { display: flex; flex-direction: column; gap: .25rem; flex: 1; }
.hata { color: #ffb3a7; min-height: 1.2em; }
.ziyaret { border-top: 1px solid rgba(255,255,255,.15); padding: .8rem 0; }
.ziyaret-ust { display: flex; justify-content: space-between; gap: .75rem; flex-wrap: wrap; }
```

- [ ] **Step 4: Tarayıcıda doğrula** — ayarlar boşken `gunluk.html` "yapılandırılmadı" uyarısı + çalışan gezinme gösteriyor; konsol hatasız. (Supabase kurulunca: kayıt → giriş → katalogdan ziyaret ekle → listede gör; katalog dışı mekân ekle → listede gör.)

- [ ] **Step 5: Commit**

```bash
git add gunluk.html gunluk.js styles.css
git commit -m "feat: Gittiklerim — giriş/kayıt, ziyaret ekleme, kişisel liste"
```

---

### Task 4: Herkese açık profil sayfası (kisi.html) ve kişiler listesi (kisiler.html)

**Files:**
- Create: `kisi.html`, `kisi.js`, `kisiler.html`, `kisiler.js`

**Interfaces:**
- Consumes: `eaterHesap.istemci`, `gezinmeHTML`, `RESTORANLAR`, `puanRozeti`
- Produces: `kisi.html?id=<uuid>` bağlantı deseni — `hesap.js`'teki "Profilim" ve `kisiler.js` bunu kullanır.

- [ ] **Step 1: `kisi.html` oluştur** — `gunluk.html` ile aynı iskelet; `<title>EATER — Profil</title>`, son script `kisi.js`.

- [ ] **Step 2: `kisi.js` oluştur:**

```js
// EATER — herkese açık profil: bir kullanıcının günlüğü (salt okunur).

function profilZiyaretHTML(z, mekanAdi, yer) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? puanRozeti(etiket, deger) : '';
  return `
    <article class="ziyaret">
      <div class="ziyaret-ust">
        <strong>${mekanAdi}</strong>
        <span class="silik">${yer} · ${z.tarih}</span>
      </div>
      <div class="rozetler">
        ${puan('Yemek', z.yemek_puan)}${puan('Ambiyans', z.ambiyans_puan)}${puan('Servis', z.servis_puan)}
      </div>
      ${z.yorum ? `<p>${z.yorum}</p>` : ''}
    </article>`;
}

async function profiliGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Profiller henüz yapılandırılmadı (Supabase ayarları boş).</p>';
    return;
  }
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) { kap.innerHTML = '<p class="panel">Profil bulunamadı.</p>'; return; }

  const { data: profil, error } = await eaterHesap.istemci
    .from('profiller').select('*').eq('id', id).single();
  if (error || !profil) { kap.innerHTML = '<p class="panel">Profil bulunamadı.</p>'; return; }

  const { data: ziyaretler = [] } = await eaterHesap.istemci
    .from('ziyaretler').select('*').eq('kullanici', id).order('tarih', { ascending: false });
  const mekanIdler = ziyaretler.filter(z => z.mekan_id).map(z => z.mekan_id);
  let mekanlar = [];
  if (mekanIdler.length > 0) {
    ({ data: mekanlar = [] } = await eaterHesap.istemci
      .from('mekanlar').select('*').in('id', mekanIdler));
  }
  const isimYer = z => {
    if (z.restoran_id) {
      const r = RESTORANLAR.find(x => x.id === z.restoran_id);
      return r ? [r.isim, `${r.sehir}, ${r.ulke}`] : [z.restoran_id, ''];
    }
    const m = mekanlar.find(x => x.id === z.mekan_id);
    return m ? [m.isim, `${m.sehir}, ${m.ulke}`] : ['(silinmiş mekân)', ''];
  };
  kap.innerHTML = `
    <div class="panel">
      <h2>@${profil.kullanici_adi}</h2>
      ${profil.tanitim ? `<p>${profil.tanitim}</p>` : ''}
      <p class="silik">${ziyaretler.length} ziyaret</p>
      ${ziyaretler.map(z => profilZiyaretHTML(z, ...isimYer(z))).join('') ||
        '<p class="silik">Henüz kayıt yok.</p>'}
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  profiliGoster();
});
```

- [ ] **Step 3: `kisiler.html` oluştur** — aynı iskelet; `<title>EATER — Kişiler</title>`, son script `kisiler.js`. `kisiler.js`:

```js
// EATER — kişiler: herkese açık profil listesi.

async function kisileriGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Kişiler henüz yapılandırılmadı (Supabase ayarları boş).</p>';
    return;
  }
  const { data: profiller, error } = await eaterHesap.istemci
    .from('profiller').select('id, kullanici_adi, tanitim')
    .order('created_at', { ascending: false }).limit(100);
  if (error) { kap.innerHTML = `<p class="panel hata">Liste yüklenemedi: ${error.message}</p>`; return; }
  kap.innerHTML = `
    <div class="panel">
      <h2>Kişiler</h2>
      ${profiller.length === 0 ? '<p class="silik">Henüz kimse yok — ilk sen ol.</p>' : ''}
      ${profiller.map(p => `
        <article class="ziyaret">
          <a href="kisi.html?id=${p.id}"><strong>@${p.kullanici_adi}</strong></a>
          ${p.tanitim ? `<p class="silik">${p.tanitim}</p>` : ''}
        </article>`).join('')}
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  kisileriGoster();
});
```

- [ ] **Step 4: Tarayıcıda doğrula** — ayarlar boşken iki sayfa da uyarı + gezinme gösteriyor, konsol temiz; sekmeler arası geçiş çalışıyor.

- [ ] **Step 5: Commit**

```bash
git add kisi.html kisi.js kisiler.html kisiler.js
git commit -m "feat: herkese açık profil ve kişiler sayfaları"
```

---

### Task 5: Detay sayfası — "Günlüğüme ekle" ve site/sen karşılaştırması

**Files:**
- Modify: `detay.js`

**Interfaces:**
- Consumes: `gunluk.html?restoran=<id>` (Task 3), `eaterHesap` (Task 2)

- [ ] **Step 1: `detay.js`'te restoran çizildikten sonra çağrılacak bölümü ekle** (dosyanın sonuna; `detay.js` içinde restoranı `id` ile bulan mevcut koddan sonra `gunlukBaglantisiniEkle(r)` çağrısı ekle — render fonksiyonunun sonunda):

```js
async function gunlukBaglantisiniEkle(r) {
  const kap = document.createElement('div');
  kap.className = 'panel';
  kap.innerHTML = `<a class="sekme sekme-aktif" href="gunluk.html?restoran=${encodeURIComponent(r.id)}">+ Günlüğüme ekle</a>
    <span id="senPuanlarin"></span>`;
  document.querySelector('main').appendChild(kap);

  if (!eaterHesap.hazir()) return;
  const o = await eaterHesap.oturum();
  if (!o) return;
  const { data: ziyaretler } = await eaterHesap.istemci
    .from('ziyaretler').select('yemek_puan, ambiyans_puan, servis_puan')
    .eq('kullanici', o.user.id).eq('restoran_id', r.id)
    .order('tarih', { ascending: false }).limit(1);
  if (!ziyaretler || ziyaretler.length === 0) return;
  const z = ziyaretler[0];
  const ciz = (etiket, site, sen) =>
    typeof sen === 'number'
      ? `<span class="silik">${etiket} — Site: ${site ?? '—'} · Sen: ${sen}</span> `
      : '';
  document.getElementById('senPuanlarin').innerHTML =
    ' ' + ciz('Yemek', r.yemek.puan, z.yemek_puan) +
    ciz('Ambiyans', r.ambiyans.puan, z.ambiyans_puan) +
    ciz('Servis', r.servis.puan, z.servis_puan);
}
```

- [ ] **Step 2: Tarayıcıda doğrula** — herhangi bir detay sayfasında "+ Günlüğüme ekle" görünüyor; tıklayınca `gunluk.html`'de o restoran seçili geliyor (girişsizken giriş formu, normal). Katalog puanları değişmedi.

- [ ] **Step 3: Commit**

```bash
git add detay.js
git commit -m "feat: detay sayfasından günlüğe ekleme ve site/sen karşılaştırması"
```

---

### Task 6: Belgeleri güncelle + Supabase kurulum yönergesi

**Files:**
- Modify: `README.md`
- Create: `docs/supabase-kurulum.md`

- [ ] **Step 1: `README.md`** — dosya tablosuna yeni dosyaları ekle (`gunluk.html/js`, `kisi.html/js`, `kisiler.html/js`, `hesap.js`, `ayarlar.js`), "Sonraki Adımlar"dan günlük maddesini çıkar, "Sınırlar"a ekle: "Kişisel puanlar Supabase'te tutulur ve katalog puanlarına hiçbir biçimde karışmaz." `file://` notunu güncelle: katalog `file://` ile çalışır, günlük özellikleri internet ister.

- [ ] **Step 2: `docs/supabase-kurulum.md` oluştur:**

```markdown
# Supabase Kurulumu (5 dakika)

1. https://supabase.com → ücretsiz hesap → "New project" (ad: eater, bölge: Frankfurt).
2. Sol menü → SQL Editor → New query → `docs/supabase-sema.sql` içeriğini yapıştır → Run.
3. Project Settings → API → "Project URL" ve "anon public" anahtarını kopyala.
4. `ayarlar.js` içindeki `SUPABASE_URL` ve `SUPABASE_ANON_KEY` değerlerine yapıştır.
5. Authentication → Providers → Email: "Confirm email" seçeneğini kapat
   (aksi hâlde kayıt sonrası e-posta onayı gerekir).
6. Siteyi yenile — gezinmede "Giriş" görünür; kayıt olup ilk ziyaretini ekle.
```

- [ ] **Step 3: Commit**

```bash
git add README.md docs/supabase-kurulum.md
git commit -m "docs: günlük/hesap belgeleri ve Supabase kurulum yönergesi"
```

---

## Self-Review Notu

- Spec kapsaması: tagline (T1), ülke/şehir (T1), hesap (T2-3), günlük + serbest mekân (T3), herkese açık profiller + kişiler (T4), detaydan ekleme + site/sen karşılaştırması (T5), hata durumları (her sayfada `hazir()` kontrolü), belgeler (T6). Yayınlama bilinçli kapsam dışı (spec'e uygun).
- Tip tutarlılığı: `eaterHesap` API adları T2'de tanımlandı, T3-T5 aynı adları kullanıyor; `gunluk.html?restoran=` T3'te üretilip T5'te tüketiliyor.
- Doğrulamalar elle (Global Constraints'e uygun; projede test çerçevesi yok).
