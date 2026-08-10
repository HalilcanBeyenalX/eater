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
