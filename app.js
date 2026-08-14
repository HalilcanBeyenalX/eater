// EATER — liste sayfası. Kartları çizer, filtre ve sıralamayı yönetir.

function kartHTML(r) {
  const oduller = r.oduller
    .map(o => `<span class="odul">★ ${odulEtiketi(o.tip)}</span>`)
    .join('');
  const rezUyari = r.rezervasyon.gerekiyor
    ? '<span class="rez-uyari">Reservation required</span>'
    : '';
  const konum = window.eaterKure?.konumAl();
  const mesafe = (konum && r.koordinat)
    ? `<span class="mesafe">${mesafeMetni(mesafeKm(konum, r.koordinat))}</span>`
    : '';

  return `
    <a class="kart" href="detay.html?id=${encodeURIComponent(r.id)}">
      <div class="kart-gorsel" aria-hidden="true">${mutfakGorseli(r)}</div>
      <div class="kart-govde">
        <div class="kart-ust">
          <h2 class="kart-isim">${r.isim}</h2>
          ${fiyatEtiketi(r.fiyat.segment, r.ulke)}
        </div>
        <p class="kart-yer">${r.semt} · ${r.mutfak.join(', ')}${mesafe}</p>
        <div class="rozetler">
          ${puanRozeti('Food', r.yemek.puan)}
          ${puanRozeti('Ambiance', r.ambiyans.puan)}
          ${puanRozeti('Service', r.servis.puan)}
        </div>
        <div class="isaretler">${asya50Rozeti(r)}${oduller}${rezUyari}</div>
      </div>
    </a>`;
}

const filtreDurumu = { segment: '', ulke: '', sehir: '', rezervasyon: '' };

let siralamaOlcutu = 'yemek';

function filtrele(liste, f) {
  return liste.filter(r => {
    if (f.segment && r.fiyat.segment !== f.segment) return false;
    if (f.ulke && r.ulke !== f.ulke) return false;
    if (f.sehir && r.sehir !== f.sehir) return false;
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
  document.getElementById('filtreler').innerHTML =
    secimKutusu('fSegment', 'Price', [
      { deger: '', metin: 'All' },
      { deger: 'ucuz', metin: '$ Budget' },
      { deger: 'orta', metin: '$$ Mid-range' },
      { deger: 'pahali', metin: '$$$ High-end' }
    ]) +
    secimKutusu('fUlke', 'Country',
      [{ deger: '', metin: 'All' }, ...ulkeler.map(u => ({ deger: u, metin: u }))]) +
    secimKutusu('fSehir', 'City',
      [{ deger: '', metin: 'All' }, ...sehirler.map(s => ({ deger: s, metin: s }))]) +
    secimKutusu('fRezervasyon', 'Reservation', [
      { deger: '', metin: 'Any' },
      { deger: 'gerekli', metin: 'Required' },
      { deger: 'gerekmiyor', metin: 'Not required' }
    ]) +
    secimKutusu('fSiralama', 'Sort', [
      ...(window.eaterKure?.konumAl()
        ? [{ deger: 'yakinlik', metin: 'Nearby' }] : []),
      { deger: 'yemek', metin: 'Food score' },
      { deger: 'ambiyans', metin: 'Ambiance score' },
      { deger: 'servis', metin: 'Service score' },
      { deger: 'fiyat', metin: 'Price (low to high)' }
    ]) +
    '<button id="fSifirla" class="sifirla" type="button">Clear filters</button>';

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
  bagla('fRezervasyon', 'rezervasyon');

  // filtreleriCiz yeniden çağrıldığında mevcut seçimler korunur.
  document.getElementById('fSegment').value = filtreDurumu.segment;
  document.getElementById('fUlke').value = filtreDurumu.ulke;
  document.getElementById('fSehir').value = filtreDurumu.sehir;
  document.getElementById('fRezervasyon').value = filtreDurumu.rezervasyon;

  const sSecim = document.getElementById('fSiralama');
  sSecim.value = siralamaOlcutu;
  sSecim.addEventListener('change', e => {
    siralamaOlcutu = e.target.value;
    render();
  });

  document.getElementById('fSifirla').addEventListener('click', () => {
    Object.keys(filtreDurumu).forEach(k => { filtreDurumu[k] = ''; });
    ['fSegment', 'fUlke', 'fSehir', 'fRezervasyon']
      .forEach(id => { document.getElementById(id).value = ''; });
    window.eaterKure?.ulkeSec(filtreDurumu.ulke);
    render();
  });
}

function render() {
  const liste = sirala(filtrele(RESTORANLAR, filtreDurumu), siralamaOlcutu);
  const kap = document.getElementById('liste');

  if (liste.length === 0) {
    kap.innerHTML = '<p class="bos">No restaurants match these filters. Clear the filters and try again.</p>';
  } else {
    kap.innerHTML = liste.map(kartHTML).join('');
  }

  document.getElementById('sonucSayisi').textContent =
    `${liste.length} restaurant${liste.length === 1 ? '' : 's'}${liste.length !== RESTORANLAR.length ? ` (of ${RESTORANLAR.length})` : ''}`;

  // Şehir haritası ülke seçimini izler (harita.js; yüklü değilse sessizce atlanır).
  window.eaterHarita?.guncelle(filtreDurumu.ulke, filtreDurumu.sehir);
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
