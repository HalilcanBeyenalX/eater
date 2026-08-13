// EATER — dünya küresi ve konum katmanı. Yalnız index.html yükler.
// Globe (CDN) veya DUNYA_ULKELER yoksa hiçbir şey çizilmez; #kureBolumu gizli
// kalır ve sayfa bugünkü filtre+liste haliyle çalışır.

// veri.js ülke adları İngilizce, sınır verisi ISO alpha-3 — eşleme buradan.
// Kataloğa yeni ülke eklenince buraya bir satır eklemek yeterli (README'de not).
const ULKE_KODLARI = {
  'Turkey': 'TUR', 'Italy': 'ITA', 'France': 'FRA', 'Spain': 'ESP',
  'Greece': 'GRC', 'Germany': 'DEU', 'United Kingdom': 'GBR', 'Netherlands': 'NLD',
  'Portugal': 'PRT', 'USA': 'USA', 'Japan': 'JPN', 'South Korea': 'KOR'
};
const KOD_ULKE = Object.fromEntries(
  Object.entries(ULKE_KODLARI).map(([ad, kod]) => [kod, ad]));

// Nominatim arama sonucu ISO alpha-2 ülke kodu döndürür ("fr" gibi);
// aranan yerin ülkesine göre listeyi süzmek için veri.js adına çevrilir.
const ULKE_ISO2 = {
  tr: 'Turkey', it: 'Italy', fr: 'France', es: 'Spain',
  gr: 'Greece', de: 'Germany', gb: 'United Kingdom', nl: 'Netherlands',
  pt: 'Portugal', us: 'USA', jp: 'Japan', kr: 'South Korea'
};

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
    .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe@2.45.2/example/img/earth-blue-marble.jpg')
    .polygonsData(DUNYA_ULKELER.features)
    .polygonAltitude(0.008)
    .polygonCapColor(kureUlkeRengi)
    .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
    .polygonStrokeColor(() => 'rgba(255, 243, 228, 0.35)')
    .polygonLabel(p => kacis(KOD_ULKE[p.id] || p.properties.name))
    .onPolygonClick(p => {
      // Tıklanan ülkenin adı arama kutusuna yazılır — kullanıcı elle yazmasın.
      const arama = document.getElementById('konumArama');
      if (arama) arama.value = KOD_ULKE[p.id] || p.properties.name;
      if (!kureKatalogKodlari().has(p.id)) return; // restoranı olmayan ülke: filtre kurulmaz
      ulkeFiltresiUygula(kureSeciliKod === p.id ? '' : KOD_ULKE[p.id]); // app.js ulkeSec ile geri döner
    });

  kure.controls().autoRotate = true;
  kure.controls().autoRotateSpeed = 0.6;
  kure.pointOfView({ lat: 39, lng: 35, altitude: 2.2 }, 0); // açılışta Türkiye görünür
  window.addEventListener('resize', () => kure.width(kap.clientWidth));
  ulkeTamamlamaKur();
  konumCubuguKur(); // konum çubuğu bağları
}

// Arama kutusuna tarayıcının yerel otomatik tamamlaması: sınır verisindeki
// 180 ülkenin İngilizce adı datalist'e dökülür ("Sp" yazınca Spain önerilir).
function ulkeTamamlamaKur() {
  const liste = document.getElementById('ulkeListesi');
  if (!liste) return;
  liste.innerHTML = DUNYA_ULKELER.features
    .map(f => f.properties.name)
    .sort((a, b) => a.localeCompare(b, 'en'))
    .map(ad => `<option value="${kacis(ad)}"></option>`)
    .join('');
}

// app.js her ülke filtresi değişiminde çağırır — vurgu senkron kalır.
function kureUlkeSec(ulkeAdi) {
  kureSeciliKod = ULKE_KODLARI[ulkeAdi] || '';
  if (kure) kure.polygonCapColor(kureUlkeRengi); // yeniden boya
}

function kureKonumAl() { return kullaniciKonumu; }

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
  mesaj.textContent = 'Searching…';
  try {
    const yanit = await fetch(
      'https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&q=' +
        encodeURIComponent(sorgu),
      { headers: { 'Accept-Language': 'en' } });
    if (!yanit.ok) throw new Error(String(yanit.status));
    const liste = await yanit.json();
    if (liste.length === 0) {
      mesaj.textContent = 'No match — try something broader (e.g. "Kadıköy, Istanbul").';
      return;
    }
    konumBelirle(Number(liste[0].lat), Number(liste[0].lon),
      `📍 ${liste[0].display_name.split(',')[0]}`);
    aramaUlkesineSuz(liste[0].address);
  } catch {
    mesaj.textContent = 'Connection error — check your internet and try again.';
  }
}

// Aranan yerin ülkesine göre liste süzülür: katalogda restoranı olan bir
// ülkeyse filtre ona kurulur (küre vurgusu dahil); değilse filtre temizlenir
// ve mesaja not düşülür. GPS bilerek dokunmaz — kendi konumun ülke "seçimi" değildir.
function aramaUlkesineSuz(adres) {
  const ulkeAdi = ULKE_ISO2[adres?.country_code] || '';
  if (ulkeAdi && kureKatalogKodlari().has(ULKE_KODLARI[ulkeAdi])) {
    ulkeFiltresiUygula(ulkeAdi);
  } else {
    ulkeFiltresiUygula('');
    document.getElementById('konumMesaj').textContent += ' — no restaurants in this country yet';
  }
}

function konumCubuguKur() {
  document.getElementById('btnKonumAra').addEventListener('click', konumAra);
  document.getElementById('konumArama').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); konumAra(); }
  });
}

window.eaterKure = { ulkeSec: kureUlkeSec, konumAl: kureKonumAl };
document.addEventListener('DOMContentLoaded', kureyiKur);
