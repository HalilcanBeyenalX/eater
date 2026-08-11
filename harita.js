// EATER — şehir haritası katmanı. Yalnız index.html yükler.
// Ülke filtresi seçilince #haritaBolumu açılır ve o ülkenin (şehir de
// seçiliyse o şehrin) restoranları OpenStreetMap üzerinde iğnelenir.
// Leaflet (CDN) yüklenemezse bölüm gizli kalır; sayfa haritasız çalışır.

let harita = null;
let haritaIsaretKatmani = null;

function haritayiKur() {
  if (typeof L === 'undefined') return false;
  if (harita) return true;
  const kap = document.getElementById('harita');
  if (!kap) return false;
  harita = L.map(kap, { scrollWheelZoom: false }); // sayfa kaydırması iğne yüzünden kilitlenmesin
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(harita);
  haritaIsaretKatmani = L.layerGroup().addTo(harita);
  return true;
}

function haritaBalonuHTML(r) {
  const puan = typeof r.yemek.puan === 'number' ? r.yemek.puan.toFixed(1) : '—';
  return `<strong>${kacis(r.isim)}</strong><br>` +
    `${kacis(r.semt)} · Food ${puan}<br>` +
    `<a href="detay.html?id=${encodeURIComponent(r.id)}">Details →</a>`;
}

// app.js her render sonunda çağırır. Ülke yoksa bölüm gizlenir.
function haritayiGuncelle(ulke, sehir) {
  const bolum = document.getElementById('haritaBolumu');
  const not = document.getElementById('haritaNotu');
  if (!bolum) return;
  if (!ulke || !haritayiKur()) { bolum.hidden = true; return; }

  const secilenler = RESTORANLAR.filter(r =>
    r.ulke === ulke && (!sehir || r.sehir === sehir));
  const konumlular = secilenler.filter(r => r.koordinat);
  if (konumlular.length === 0) {
    bolum.hidden = true; // iğnelenecek nokta yoksa boş harita gösterme
    return;
  }

  const gizliydi = bolum.hidden;
  bolum.hidden = false;
  if (gizliydi) harita.invalidateSize(); // gizliyken kurulan harita boyutunu tazele

  haritaIsaretKatmani.clearLayers();
  konumlular.forEach(r => {
    L.circleMarker([r.koordinat.lat, r.koordinat.lng], {
      radius: 9, color: '#6E0A12', weight: 2,
      fillColor: '#F5B700', fillOpacity: 0.95
    })
      .bindPopup(haritaBalonuHTML(r))
      .bindTooltip(r.isim, { direction: 'top', offset: [0, -8] })
      .addTo(haritaIsaretKatmani);
  });

  const sinirlar = L.latLngBounds(konumlular.map(r => [r.koordinat.lat, r.koordinat.lng]));
  harita.fitBounds(sinirlar, { padding: [40, 40], maxZoom: 14 });

  const konumsuz = secilenler.filter(r => !r.koordinat).map(r => r.isim);
  not.textContent = konumsuz.length
    ? `Not on the map (no verified location): ${konumsuz.join(', ')}`
    : '';
}

window.eaterHarita = { guncelle: haritayiGuncelle };
