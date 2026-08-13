// EATER — ATE (Gittiklerim): giriş/kayıt, ziyaret ekleme formu, kendi kayıt listem.

const DIGER = '__diger';

function benzersizSirali(dizi) {
  return [...new Set(dizi)].sort((a, b) => a.localeCompare(b, 'tr'));
}

function girisFormuHTML() {
  return `
    <div class="panel">
      <h2>Log in</h2>
      <form id="fGiris" class="dikey-form">
        <input type="email" id="gEposta" placeholder="Email" required>
        <input type="password" id="gSifre" placeholder="Password" required>
        <button type="submit">Log in</button>
      </form>
      <h2>No account yet?</h2>
      <form id="fKayit" class="dikey-form">
        <input type="text" id="kAd" placeholder="Username" required minlength="2" maxlength="30">
        <input type="email" id="kEposta" placeholder="Email" required>
        <input type="password" id="kSifre" placeholder="Password (min 6 characters)" required minlength="6">
        <button type="submit">Sign up</button>
      </form>
      <p id="hesapHata" class="hata" aria-live="polite"></p>
    </div>`;
}

// Puanlar kaydıraçla verilir; kullanıcı dokunmadıysa puan null kalır ("—").
function puanAlani(id, etiket) {
  return `
    <label class="puan-alani">
      <span class="puan-ust">${etiket} <output id="${id}Deger" class="puan-deger">—</output></span>
      <input type="range" id="${id}" min="0" max="10" step="0.1" value="5">
    </label>`;
}

function kaydiraclariKur() {
  ['zYemek', 'zAmbiyans', 'zServis'].forEach(id => {
    const kaydirac = document.getElementById(id);
    kaydirac?.addEventListener('input', () => {
      kaydirac.dataset.dokunuldu = '1';
      document.getElementById(id + 'Deger').textContent = Number(kaydirac.value).toFixed(1);
    });
  });
}

function puanlariSifirla() {
  ['zYemek', 'zAmbiyans', 'zServis'].forEach(id => {
    const kaydirac = document.getElementById(id);
    if (!kaydirac) return;
    kaydirac.value = 5;
    delete kaydirac.dataset.dokunuldu;
    document.getElementById(id + 'Deger').textContent = '—';
  });
}

function secenekHTML(deger, metin, secili) {
  return `<option value="${kacis(deger)}"${secili ? ' selected' : ''}>${kacis(metin)}</option>`;
}

// Kademeli mekân seçimi durumu: ülke → şehir → mekân. DIGER = katalog dışı.
const formSecim = { ulke: '', sehir: '', mekan: '' };

// Seçilip küçültülmüş foto Blob'ları; kaydetmede Storage'a yüklenir.
const fotoSecim = { 1: null, 2: null };

function mekanSecimHTML() {
  const ulkeler = benzersizSirali(RESTORANLAR.map(r => r.ulke));
  const ulkeKatalog = ulkeler.includes(formSecim.ulke);
  const sehirler = ulkeKatalog
    ? benzersizSirali(RESTORANLAR.filter(r => r.ulke === formSecim.ulke).map(r => r.sehir))
    : [];
  const sehirKatalog = sehirler.includes(formSecim.sehir);
  const mekanlar = (ulkeKatalog && sehirKatalog)
    ? RESTORANLAR.filter(r => r.ulke === formSecim.ulke && r.sehir === formSecim.sehir)
    : [];
  return `
    <div class="form-satir">
      <label>Country
        <select id="zUlke">
          <option value="">Select…</option>
          ${ulkeler.map(u => secenekHTML(u, u, formSecim.ulke === u)).join('')}
          ${secenekHTML(DIGER, 'Another country…', formSecim.ulke === DIGER)}
        </select>
      </label>
      ${formSecim.ulke === DIGER
        ? '<label>Country name<input type="text" id="zUlkeSerbest" placeholder="e.g. Italy"></label>' : ''}
      <label>City
        <select id="zSehir" ${formSecim.ulke === '' ? 'disabled' : ''}>
          <option value="">Select…</option>
          ${sehirler.map(s => secenekHTML(s, s, formSecim.sehir === s)).join('')}
          ${formSecim.ulke === '' ? '' : secenekHTML(DIGER, 'Another city…', formSecim.sehir === DIGER)}
        </select>
      </label>
      ${formSecim.sehir === DIGER
        ? '<label>City name<input type="text" id="zSehirSerbest" placeholder="e.g. Rome"></label>' : ''}
      <label>Place
        <select id="zMekan" ${formSecim.sehir === '' ? 'disabled' : ''}>
          <option value="">Select…</option>
          ${mekanlar.map(r => secenekHTML(r.id, r.isim, formSecim.mekan === r.id)).join('')}
          ${formSecim.sehir === '' ? '' : secenekHTML(DIGER, "Not in the catalog — I'll type it", formSecim.mekan === DIGER)}
        </select>
      </label>
      ${formSecim.mekan === DIGER
        ? '<label>Place name<input type="text" id="zIsim" placeholder="Name of the place"></label>' : ''}
    </div>`;
}

function mekanSecimBagla() {
  const yenidenCiz = () => {
    document.getElementById('mekanSecimi').innerHTML = mekanSecimHTML();
    mekanSecimBagla();
  };
  document.getElementById('zUlke')?.addEventListener('change', e => {
    formSecim.ulke = e.target.value;
    formSecim.sehir = formSecim.ulke === DIGER ? DIGER : '';
    formSecim.mekan = formSecim.ulke === DIGER ? DIGER : '';
    yenidenCiz();
  });
  document.getElementById('zSehir')?.addEventListener('change', e => {
    formSecim.sehir = e.target.value;
    formSecim.mekan = formSecim.sehir === DIGER ? DIGER : '';
    yenidenCiz();
  });
  document.getElementById('zMekan')?.addEventListener('change', e => {
    formSecim.mekan = e.target.value;
    yenidenCiz();
  });
}

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
        btn.innerHTML = `<img src="${URL.createObjectURL(fotoSecim[n])}" alt="Selected photo">`;
        sil.hidden = false;
      } catch {
        fotoTemizle(n);
        document.getElementById('ziyaretHata').textContent =
          "Couldn't process the photo — try another image (HEIC isn't supported in every browser).";
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

function ziyaretFormuHTML() {
  return `
    <div class="panel">
      <h2>WHAT I ATE</h2>
      <form id="fZiyaret" class="dikey-form">
        <div id="mekanSecimi">${mekanSecimHTML()}</div>
        <label>Date <input type="date" id="zTarih" required></label>
        <div class="puan-satiri">
          ${puanAlani('zYemek', 'Food')}${puanAlani('zAmbiyans', 'Ambiance')}${puanAlani('zServis', 'Service')}
        </div>
        <div class="form-satir">
          <label>Favorite dish
            <span class="fav-satir">
              <input type="text" id="zFav1" placeholder="e.g. Hünkar Beğendi" maxlength="80">
              <span class="foto-alan">
                <button type="button" class="foto-btn" id="btnFoto1"
                        title="Add a photo of the dish" aria-label="Add photo">📷</button>
                <button type="button" class="foto-sil" id="btnFotoSil1" hidden
                        title="Remove photo" aria-label="Remove photo">✕</button>
              </span>
            </span></label>
          <label>Second favorite
            <span class="fav-satir">
              <input type="text" id="zFav2" placeholder="optional" maxlength="80">
              <span class="foto-alan">
                <button type="button" class="foto-btn" id="btnFoto2"
                        title="Add a photo of the dish" aria-label="Add photo">📷</button>
                <button type="button" class="foto-sil" id="btnFotoSil2" hidden
                        title="Remove photo" aria-label="Remove photo">✕</button>
              </span>
            </span></label>
        </div>
        <input type="file" id="fotoInput1" accept="image/*" capture="environment" hidden>
        <input type="file" id="fotoInput2" accept="image/*" capture="environment" hidden>
        <textarea id="zYorum" placeholder="Your notes (optional)" rows="3"></textarea>
        <button type="submit">Add to Eat Book</button>
      </form>
      <p id="ziyaretHata" class="hata" aria-live="polite"></p>
      <h2>ATE — Eat Book</h2>
      <div id="ziyaretListesi"></div>
    </div>`;
}

// Ziyaret kartı. mekanAdi/yer/yorum/favoriler kullanıcı üretimi olabilir — kacis() şart.
function ziyaretKartHTML(z, mekanAdi, yer) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? puanRozeti(etiket, deger) : '';
  const favoriler = [z.sevilen_yemek1, z.sevilen_yemek2].filter(Boolean);
  return `
    <article class="ziyaret">
      <div class="ziyaret-ust">
        <strong>${kacis(mekanAdi)}</strong>
        <span class="silik">${kacis(yer)} · ${kacis(z.tarih)}</span>
      </div>
      <div class="rozetler">
        ${puan('Food', z.yemek_puan)}${puan('Ambiance', z.ambiyans_puan)}${puan('Service', z.servis_puan)}
      </div>
      ${favoriler.length ? `<p class="silik">Favorites: ${kacis(favoriler.join(', '))}</p>` : ''}
      ${ziyaretFotolariHTML(z)}
      ${z.yorum ? `<p>${kacis(z.yorum)}</p>` : ''}
    </article>`;
}

function ziyaretIsimYer(z, mekanlar) {
  if (z.restoran_id) {
    const r = RESTORANLAR.find(x => x.id === z.restoran_id);
    return r ? [r.isim, `${r.sehir}, ${r.ulke}`] : [z.restoran_id, ''];
  }
  const m = mekanlar.find(x => x.id === z.mekan_id);
  return m ? [m.isim, `${m.sehir}, ${m.ulke}`] : ['(deleted place)', ''];
}

async function ziyaretleriGoster(kullaniciId) {
  const kap = document.getElementById('ziyaretListesi');
  const { data: ziyaretler, error } = await eaterHesap.istemci
    .from('ziyaretler').select('*')
    .eq('kullanici', kullaniciId).order('tarih', { ascending: false });
  if (error) { kap.innerHTML = `<p class="hata">Could not load entries: ${kacis(error.message)}</p>`; return; }
  const mekanIdler = ziyaretler.filter(z => z.mekan_id).map(z => z.mekan_id);
  let mekanlar = [];
  if (mekanIdler.length > 0) {
    ({ data: mekanlar = [] } = await eaterHesap.istemci
      .from('mekanlar').select('*').in('id', mekanIdler));
  }
  kap.innerHTML = ziyaretler.length === 0
    ? '<p class="silik">No entries yet — add your first visit above.</p>'
    : ziyaretler.map(z => ziyaretKartHTML(z, ...ziyaretIsimYer(z, mekanlar))).join('');
}

function alanDegeri(id) {
  return document.getElementById(id)?.value.trim() ?? '';
}

function sayiVeyaNull(id) {
  const kaydirac = document.getElementById(id);
  return kaydirac.dataset.dokunuldu ? Number(kaydirac.value) : null;
}

async function ziyaretKaydet(kullaniciId) {
  const hataKutusu = document.getElementById('ziyaretHata');
  hataKutusu.textContent = '';

  // Kayıt sürerken çift gönderimi engelle; işlem bitince (hangi yoldan çıkarsa çıksın) geri aç.
  const gonderButonu = document.querySelector('#fZiyaret button[type="submit"]');
  if (gonderButonu) gonderButonu.disabled = true;
  try {
    // 0) Puanlar zorunlu — puansız kayıt profilde ve akışta boş görünüyor.
    if (['zYemek', 'zAmbiyans', 'zServis'].some(id => sayiVeyaNull(id) === null)) {
      hataKutusu.textContent = 'Please rate Food, Ambiance and Service before adding.';
      return;
    }

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
        hataKutusu.textContent = 'Pick a country and city first, then name the place.';
        return;
      }
      yeniMekan = { isim, ulke, sehir, ekleyen: kullaniciId };
    }

    // 2) Fotoğrafları yükle. Yükleme başarısızsa ziyaret KAYDEDİLMEZ (spec §4).
    const fotoYollari = { 1: null, 2: null };
    for (const n of [1, 2]) {
      if (!fotoSecim[n]) continue;
      const { yol, hata } = await eaterHesap.fotoYukle(kullaniciId, fotoSecim[n], n);
      if (hata) { hataKutusu.textContent = `Photo upload failed: ${hata}`; return; }
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
    kutlamaGoster(10 + ((fotoYollari[1] || fotoYollari[2]) ? 5 : 0)); // 🎉 YOU ATE THAT
    document.getElementById('fZiyaret').reset();
    puanlariSifirla();
    fotoTemizle(1); fotoTemizle(2);
    formSecim.ulke = ''; formSecim.sehir = ''; formSecim.mekan = '';
    document.getElementById('mekanSecimi').innerHTML = mekanSecimHTML();
    mekanSecimBagla();
    ziyaretleriGoster(kullaniciId);
  } finally {
    if (gonderButonu) gonderButonu.disabled = false;
  }
}

async function sayfayiKur() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">The Eat Book is not configured yet (Supabase settings are empty). The catalog is open on the <a href="index.html">Explore</a> page.</p>';
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

  // ?restoran= ile gelindiyse kademeli seçim o restorana kurulur.
  const onSecim = new URLSearchParams(window.location.search).get('restoran');
  const secili = onSecim && RESTORANLAR.find(r => r.id === onSecim);
  if (secili) {
    formSecim.ulke = secili.ulke;
    formSecim.sehir = secili.sehir;
    formSecim.mekan = secili.id;
  }
  kap.innerHTML = ziyaretFormuHTML();
  mekanSecimBagla();
  fotoBaglariniKur();
  kaydiraclariKur();
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
  fotoBuyutmeKur(document.body);
});
