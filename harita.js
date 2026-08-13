// EATER — şehir haritası katmanı. Yalnız index.html yükler.
// Ülke filtresi seçilince #haritaBolumu açılır ve o ülkenin (şehir de
// seçiliyse o şehrin) restoranları OpenStreetMap üzerinde iğnelenir.
// Leaflet (CDN) yüklenemezse bölüm gizli kalır; sayfa haritasız çalışır.

let harita = null;
let haritaIsaretKatmani = null;
let benimIsaret = null;      // "Place your location" ile konan kullanıcı pini
let rotaCizgi = null;        // çizili rota (OSRM)
let rotaBalonu = null;       // rotanın ortasındaki süre/mesafe balonu
let yerlestirModu = false;   // düğmeye basıldı, sıradaki harita tıklaması pini koyar

function rotayiTemizle() {
  if (rotaCizgi) { rotaCizgi.remove(); rotaCizgi = null; }
  if (rotaBalonu) { rotaBalonu.remove(); rotaBalonu = null; }
}

function haritayiKur() {
  if (typeof L === 'undefined') return false;
  if (harita) return true;
  const kap = document.getElementById('harita');
  if (!kap) return false;
  harita = L.map(kap, { scrollWheelZoom: false }); // sayfa kaydırması iğne yüzünden kilitlenmesin
  // Carto'nun CDN'i tile.openstreetmap.org'dan belirgin hızlı yükleniyor;
  // keepBuffer kaydırma sırasında çevre karoları hazır tutar.
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
    keepBuffer: 4,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(harita);
  haritaIsaretKatmani = L.layerGroup().addTo(harita);
  konumYerlestirmeKur();
  return true;
}

// "Place your location": düğmeye bas → haritada bir yere tıkla → pinin konur.
// Sonrasında herhangi bir restoran iğnesine tıklamak rotayı çizer.
function konumYerlestirmeKur() {
  const bilgi = document.getElementById('rotaBilgi');
  document.getElementById('btnKonumYerlestir')?.addEventListener('click', () => {
    yerlestirModu = true;
    harita.getContainer().style.cursor = 'crosshair';
    bilgi.textContent = 'Click anywhere on the map to place your location.';
  });
  harita.on('click', e => {
    if (!yerlestirModu) return;
    yerlestirModu = false;
    harita.getContainer().style.cursor = '';
    if (benimIsaret) benimIsaret.remove();
    benimIsaret = L.marker(e.latlng, {
      icon: L.divIcon({ className: 'benim-pin', html: '📍', iconSize: [30, 30], iconAnchor: [15, 28] })
    }).addTo(harita);
    rotayiTemizle();
    bilgi.textContent = 'Location placed — now click a restaurant pin to get the route.';
  });
}

// Kullanıcı pini ile restoran arası sürüş rotası (OSRM, anahtarsız).
async function rotaCiz(hedef, isim) {
  const bilgi = document.getElementById('rotaBilgi');
  if (!benimIsaret) {
    bilgi.textContent = 'First use “Place your location”, then click a restaurant pin.';
    return;
  }
  const a = benimIsaret.getLatLng();
  bilgi.textContent = 'Calculating route…';
  try {
    const yanit = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${a.lng},${a.lat};${hedef.lng},${hedef.lat}` +
      '?overview=full&geometries=geojson');
    const veri = await yanit.json();
    if (veri.code !== 'Ok' || !veri.routes?.length) throw new Error('rota yok');
    const rota = veri.routes[0];
    rotayiTemizle();
    rotaCizgi = L.geoJSON(rota.geometry, {
      style: { color: '#F5B700', weight: 5, opacity: 0.9 }
    }).addTo(harita);
    harita.fitBounds(rotaCizgi.getBounds(), { padding: [40, 40] });
    const km = rota.distance / 1000;
    const kmMetin = km < 10 ? km.toFixed(1) : String(Math.round(km));
    const dakika = Math.max(1, Math.round(rota.duration / 60));
    // Google Maps usulü: sürenin yazdığı balon rotanın ortasına oturur.
    const noktalar = rota.geometry.coordinates;
    const orta = noktalar[Math.floor(noktalar.length / 2)];
    rotaBalonu = L.marker([orta[1], orta[0]], {
      interactive: false,
      icon: L.divIcon({
        className: 'rota-balon-kap',
        html: `<span class="rota-balon">🚗 ~${dakika} min · ${kmMetin} km</span>`,
        iconSize: [0, 0]
      })
    }).addTo(harita);
    bilgi.textContent =
      `🚗 ${kmMetin} km · ~${dakika} min drive to ${isim}`;
  } catch {
    // Rota servisi yanıt vermezse en azından kuş uçuşu mesafe söylenir.
    bilgi.textContent =
      `Route service unavailable — straight-line distance to ${isim}: ${mesafeMetni(mesafeKm({ lat: a.lat, lng: a.lng }, hedef))}`;
  }
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
  rotayiTemizle(); // ülke/şehir değişti, eski rota ve balonu kalksın
  konumlular.forEach(r => {
    L.circleMarker([r.koordinat.lat, r.koordinat.lng], {
      radius: 9, color: '#6E0A12', weight: 2,
      fillColor: '#F5B700', fillOpacity: 0.95
    })
      .bindPopup(haritaBalonuHTML(r))
      .bindTooltip(r.isim, { direction: 'top', offset: [0, -8] })
      .on('click', () => rotaCiz(r.koordinat, r.isim))
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
