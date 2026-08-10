// EATER — liste sayfası. Kartları çizer, filtre ve sıralamayı yönetir.

function kartHTML(r) {
  const oduller = r.oduller
    .map(o => `<span class="odul">★ ${odulEtiketi(o.tip)}</span>`)
    .join('');
  const rezUyari = r.rezervasyon.gerekiyor
    ? '<span class="rez-uyari">Rezervasyon gerekli</span>'
    : '';
  const konum = window.eaterKure?.konumAl();
  const mesafe = (konum && r.koordinat)
    ? `<span class="mesafe">${mesafeMetni(mesafeKm(konum, r.koordinat))}</span>`
    : '';
  const foto = ilkFoto(r.fotolar);
  const fotoBlok = foto
    ? `<div class="kart-foto"><img src="${foto.dosya}" alt="${foto.alt}" loading="lazy"></div>`
    : '<div class="kart-foto kart-foto-bos" aria-hidden="true"><span>fotoğraf yakında</span></div>';

  return `
    <a class="kart" href="detay.html?id=${encodeURIComponent(r.id)}">
      ${fotoBlok}
      <div class="kart-govde">
        <div class="kart-ust">
          <h2 class="kart-isim">${r.isim}</h2>
          ${fiyatEtiketi(r.fiyat.segment)}
        </div>
        <p class="kart-yer">${r.semt} · ${r.mutfak.join(', ')}${mesafe}</p>
        <div class="rozetler">
          ${puanRozeti('Yemek', r.yemek.puan)}
          ${puanRozeti('Ambiyans', r.ambiyans.puan)}
          ${puanRozeti('Servis', r.servis.puan)}
        </div>
        <div class="isaretler">${oduller}${rezUyari}</div>
      </div>
    </a>`;
}

const filtreDurumu = { segment: '', ulke: '', sehir: '', etiket: '', rezervasyon: '' };

let siralamaOlcutu = 'yemek';

function filtrele(liste, f) {
  return liste.filter(r => {
    if (f.segment && r.fiyat.segment !== f.segment) return false;
    if (f.ulke && r.ulke !== f.ulke) return false;
    if (f.sehir && r.sehir !== f.sehir) return false;
    if (f.etiket && !r.ambiyans.etiketler.includes(f.etiket)) return false;
    if (f.rezervasyon === 'gerekli' && r.rezervasyon.gerekiyor !== true) return false;
    if (f.rezervasyon === 'gerekmiyor' && r.rezervasyon.gerekiyor !== false) return false;
    return true;
  });
}

const FIYAT_SIRASI = { ucuz: 0, orta: 1, pahali: 2 };

function sirala(liste, olcut) {
  const kopya = [...liste];

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

  if (olcut === 'fiyat') {
    return kopya.sort((a, b) => {
      const fark = (FIYAT_SIRASI[a.fiyat.segment] ?? 99) - (FIYAT_SIRASI[b.fiyat.segment] ?? 99);
      if (fark !== 0) return fark;

      // Bilinmeyen (null) kişi başı fiyatlar daima sona düşer. İki taraf da
      // Infinity olduğunda çıkarma NaN döndürür (Infinity - Infinity); bunun
      // yerine null durumları ayrı ayrı ele alınıp asla NaN dönmez.
      const aMin = a.fiyat.kisiBasi?.min;
      const bMin = b.fiyat.kisiBasi?.min;
      if (aMin == null && bMin == null) return 0;
      if (aMin == null) return 1;
      if (bMin == null) return -1;
      return aMin - bMin;
    });
  }

  // Puana göre azalan. Puanı olmayan (null) restoranlar daima sona düşer.
  return kopya.sort((a, b) => {
    const pa = typeof a[olcut].puan === 'number' ? a[olcut].puan : -1;
    const pb = typeof b[olcut].puan === 'number' ? b[olcut].puan : -1;
    return pb - pa;
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
  const ulkeler = benzersiz(RESTORANLAR.map(r => r.ulke));
  const sehirler = benzersiz(RESTORANLAR
    .filter(r => !filtreDurumu.ulke || r.ulke === filtreDurumu.ulke)
    .map(r => r.sehir));
  const etiketler = benzersiz(RESTORANLAR.flatMap(r => r.ambiyans.etiketler));

  document.getElementById('filtreler').innerHTML =
    secimKutusu('fSegment', 'Fiyat', [
      { deger: '', metin: 'Hepsi' },
      { deger: 'ucuz', metin: '₺ Ucuz' },
      { deger: 'orta', metin: '₺₺ Orta' },
      { deger: 'pahali', metin: '₺₺₺ Pahalı' }
    ]) +
    secimKutusu('fUlke', 'Ülke',
      [{ deger: '', metin: 'Hepsi' }, ...ulkeler.map(u => ({ deger: u, metin: u }))]) +
    secimKutusu('fSehir', 'Şehir',
      [{ deger: '', metin: 'Hepsi' }, ...sehirler.map(s => ({ deger: s, metin: s }))]) +
    secimKutusu('fEtiket', 'Ambiyans',
      [{ deger: '', metin: 'Hepsi' }, ...etiketler.map(e => ({ deger: e, metin: e }))]) +
    secimKutusu('fRezervasyon', 'Rezervasyon', [
      { deger: '', metin: 'Farketmez' },
      { deger: 'gerekli', metin: 'Gerekli' },
      { deger: 'gerekmiyor', metin: 'Gerekmiyor' }
    ]) +
    secimKutusu('fSiralama', 'Sırala', [
      ...(window.eaterKure?.konumAl()
        ? [{ deger: 'yakinlik', metin: 'Yakınlık' }] : []),
      { deger: 'yemek', metin: 'Yemek puanı' },
      { deger: 'ambiyans', metin: 'Ambiyans puanı' },
      { deger: 'servis', metin: 'Servis puanı' },
      { deger: 'fiyat', metin: 'Fiyat (ucuzdan)' }
    ]) +
    '<button id="fSifirla" class="sifirla" type="button">Filtreleri temizle</button>';

  const bagla = (id, alan) => {
    document.getElementById(id).addEventListener('change', e => {
      filtreDurumu[alan] = e.target.value;
      render();
    });
  };
  bagla('fSegment', 'segment');
  document.getElementById('fUlke').addEventListener('change', e => {
    filtreDurumu.ulke = e.target.value;
    filtreDurumu.sehir = '';
    filtreleriCiz(); // şehir seçenekleri seçilen ülkeye daralır
    window.eaterKure?.ulkeSec(filtreDurumu.ulke);
    render();
  });
  bagla('fSehir', 'sehir');
  bagla('fEtiket', 'etiket');
  bagla('fRezervasyon', 'rezervasyon');

  // filtreleriCiz yeniden çağrıldığında mevcut seçimler korunur.
  document.getElementById('fSegment').value = filtreDurumu.segment;
  document.getElementById('fUlke').value = filtreDurumu.ulke;
  document.getElementById('fSehir').value = filtreDurumu.sehir;
  document.getElementById('fEtiket').value = filtreDurumu.etiket;
  document.getElementById('fRezervasyon').value = filtreDurumu.rezervasyon;

  const sSecim = document.getElementById('fSiralama');
  sSecim.value = siralamaOlcutu;
  sSecim.addEventListener('change', e => {
    siralamaOlcutu = e.target.value;
    render();
  });

  document.getElementById('fSifirla').addEventListener('click', () => {
    Object.keys(filtreDurumu).forEach(k => { filtreDurumu[k] = ''; });
    ['fSegment', 'fUlke', 'fSehir', 'fEtiket', 'fRezervasyon']
      .forEach(id => { document.getElementById(id).value = ''; });
    window.eaterKure?.ulkeSec(filtreDurumu.ulke);
    render();
  });
}

function render() {
  const liste = sirala(filtrele(RESTORANLAR, filtreDurumu), siralamaOlcutu);
  const kap = document.getElementById('liste');

  if (liste.length === 0) {
    kap.innerHTML = '<p class="bos">Bu filtrelerle eşleşen restoran yok. Filtreleri temizleyip tekrar deneyin.</p>';
  } else {
    kap.innerHTML = liste.map(kartHTML).join('');
  }

  document.getElementById('sonucSayisi').textContent =
    `${liste.length} restoran${liste.length !== RESTORANLAR.length ? ` (toplam ${RESTORANLAR.length})` : ''}`;
}

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

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kesfet');
  eaterHesap.hesapKutusunuCiz();
  filtreleriCiz();
  render();
});
