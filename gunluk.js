// EATER — ATE (Gittiklerim): giriş/kayıt, ziyaret ekleme formu, kendi kayıt listem.

const DIGER = '__diger';

function benzersizSirali(dizi) {
  return [...new Set(dizi)].sort((a, b) => a.localeCompare(b, 'tr'));
}

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

function secenekHTML(deger, metin, secili) {
  return `<option value="${kacis(deger)}"${secili ? ' selected' : ''}>${kacis(metin)}</option>`;
}

// Kademeli mekân seçimi durumu: ülke → şehir → mekân. DIGER = katalog dışı.
const formSecim = { ulke: '', sehir: '', mekan: '' };

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
      <label>Ülke
        <select id="zUlke">
          <option value="">Seç…</option>
          ${ulkeler.map(u => secenekHTML(u, u, formSecim.ulke === u)).join('')}
          ${secenekHTML(DIGER, 'Başka bir ülke…', formSecim.ulke === DIGER)}
        </select>
      </label>
      ${formSecim.ulke === DIGER
        ? '<label>Ülke adı<input type="text" id="zUlkeSerbest" placeholder="ör. İtalya"></label>' : ''}
      <label>Şehir
        <select id="zSehir" ${formSecim.ulke === '' ? 'disabled' : ''}>
          <option value="">Seç…</option>
          ${sehirler.map(s => secenekHTML(s, s, formSecim.sehir === s)).join('')}
          ${formSecim.ulke === '' ? '' : secenekHTML(DIGER, 'Başka bir şehir…', formSecim.sehir === DIGER)}
        </select>
      </label>
      ${formSecim.sehir === DIGER
        ? '<label>Şehir adı<input type="text" id="zSehirSerbest" placeholder="ör. Roma"></label>' : ''}
      <label>Mekân
        <select id="zMekan" ${formSecim.sehir === '' ? 'disabled' : ''}>
          <option value="">Seç…</option>
          ${mekanlar.map(r => secenekHTML(r.id, r.isim, formSecim.mekan === r.id)).join('')}
          ${formSecim.sehir === '' ? '' : secenekHTML(DIGER, 'Katalogda yok — kendim yazacağım', formSecim.mekan === DIGER)}
        </select>
      </label>
      ${formSecim.mekan === DIGER
        ? '<label>Mekân adı<input type="text" id="zIsim" placeholder="Mekânın adı"></label>' : ''}
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

function ziyaretFormuHTML() {
  return `
    <div class="panel">
      <h2>Ziyaret ekle</h2>
      <form id="fZiyaret" class="dikey-form">
        <div id="mekanSecimi">${mekanSecimHTML()}</div>
        <label>Tarih <input type="date" id="zTarih" required></label>
        <div class="puan-satiri">
          ${puanAlani('zYemek', 'Yemek')}${puanAlani('zAmbiyans', 'Ambiyans')}${puanAlani('zServis', 'Servis')}
        </div>
        <div class="form-satir">
          <label>En sevdiğin yemek
            <input type="text" id="zFav1" placeholder="ör. Hünkar Beğendi" maxlength="80"></label>
          <label>İkinci favorin
            <input type="text" id="zFav2" placeholder="isteğe bağlı" maxlength="80"></label>
        </div>
        <textarea id="zYorum" placeholder="Yorumun (opsiyonel)" rows="3"></textarea>
        <button type="submit">Günlüğe ekle</button>
      </form>
      <p id="ziyaretHata" class="hata" aria-live="polite"></p>
      <h2>ATE — Gittiklerim</h2>
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
        ${puan('Yemek', z.yemek_puan)}${puan('Ambiyans', z.ambiyans_puan)}${puan('Servis', z.servis_puan)}
      </div>
      ${favoriler.length ? `<p class="silik">Favoriler: ${kacis(favoriler.join(', '))}</p>` : ''}
      ${z.yorum ? `<p>${kacis(z.yorum)}</p>` : ''}
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
  if (error) { kap.innerHTML = `<p class="hata">Kayıtlar yüklenemedi: ${kacis(error.message)}</p>`; return; }
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

function alanDegeri(id) {
  return document.getElementById(id)?.value.trim() ?? '';
}

function sayiVeyaNull(id) {
  const ham = document.getElementById(id).value;
  return ham === '' ? null : Number(ham);
}

async function ziyaretKaydet(kullaniciId) {
  const hataKutusu = document.getElementById('ziyaretHata');
  hataKutusu.textContent = '';

  let restoranId = null;
  let mekanId = null;
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
    sevilen_yemek1: alanDegeri('zFav1') || null,
    sevilen_yemek2: alanDegeri('zFav2') || null,
    yorum: alanDegeri('zYorum') || null
  });
  if (error) { hataKutusu.textContent = error.message; return; }
  document.getElementById('fZiyaret').reset();
  formSecim.ulke = ''; formSecim.sehir = ''; formSecim.mekan = '';
  document.getElementById('mekanSecimi').innerHTML = mekanSecimHTML();
  mekanSecimBagla();
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
