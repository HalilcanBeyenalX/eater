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

// Ziyaret kartı. mekanAdi/yer/yorum kullanıcı üretimi olabilir — kacis() şart.
function ziyaretKartHTML(z, mekanAdi, yer) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? puanRozeti(etiket, deger) : '';
  return `
    <article class="ziyaret">
      <div class="ziyaret-ust">
        <strong>${kacis(mekanAdi)}</strong>
        <span class="silik">${kacis(yer)} · ${kacis(z.tarih)}</span>
      </div>
      <div class="rozetler">
        ${puan('Yemek', z.yemek_puan)}${puan('Ambiyans', z.ambiyans_puan)}${puan('Servis', z.servis_puan)}
      </div>
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
