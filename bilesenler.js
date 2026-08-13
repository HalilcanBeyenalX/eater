// EATER — app.js ve detay.js tarafından paylaşılan çizim yardımcıları.

// Fiyat rozeti ülkenin para birimiyle yazılır: ₺₺, €€€, ¥ gibi.
const PARA_BIRIMLERI = { 'Turkey': '₺', 'Japan': '¥', 'France': '€', 'Spain': '€', 'Italy': '€' };
const FIYAT_ADLARI = { ucuz: 'Budget', orta: 'Mid-range', pahali: 'High-end' };

// oduller[].tip -> kısa, rozete uygun etiket. Tanınmayan bir tip
// asla ham `detay` metnine düşmez; "Award-winning" ile karşılanır.
const ODUL_ETIKETLERI = {
  'michelin-yildiz': 'Michelin star',
  'michelin-bib': 'Michelin Bib Gourmand',
  'michelin-secilmis': 'Michelin Guide selection',
  'michelin-yesil': 'Michelin Green Star',
  'gault-millau': 'Gault&Millau',
  'servis-odulu': 'Service award',
  '50best': "World's 50 Best"
};

// Doğrulanamayan / boş bırakılan alanlar için tek görsel işaret. Ham "veri
// yok" metni yerine kullanılır; okuyucuya bozuk bir alan gibi görünmemesi
// için ayrı bir sınıfla soluk renkte çizilir (bkz. styles.css .deger-yok).
const BOS_ISARET = '<span class="deger-yok">—</span>';

function odulEtiketi(tip) {
  return ODUL_ETIKETLERI[tip] || 'Award-winning';
}

function veyaYok(deger, bosMetin = BOS_ISARET) {
  if (deger === null || deger === undefined || deger === '') return bosMetin;
  return deger;
}

// Sayıyı nokta ondalıklı biçimlendirir: 8.6 -> "8.6". (Ad tarihsel; site
// İngilizceye geçince ayraç da noktaya döndü, çağıran yerler değişmedi.)
function ondalikTR(sayi, basamak = 1) {
  return sayi.toFixed(basamak);
}

function puanRozeti(etiket, puan) {
  if (typeof puan !== 'number') {
    return `<span class="rozet rozet-yok">
      <span class="rozet-etiket">${etiket}</span>
      <span class="rozet-puan">—</span>
    </span>`;
  }
  return `<span class="rozet">
    <span class="rozet-etiket">${etiket}</span>
    <span class="rozet-puan">${ondalikTR(puan)}</span>
  </span>`;
}

function fiyatEtiketi(segment, ulke) {
  const seviye = { ucuz: 1, orta: 2, pahali: 3 }[segment];
  if (!seviye) return '<span class="fiyat fiyat-yok">—</span>';
  const birim = PARA_BIRIMLERI[ulke] || '$';
  return `<span class="fiyat" title="${FIYAT_ADLARI[segment]} price range">${birim.repeat(seviye)}</span>`;
}

// Kullanıcıdan gelen metinler (yorum, kullanıcı adı, mekân adı) HTML'e ham
// gömülmez — innerHTML'e girmeden önce bu fonksiyondan geçirilir (XSS önlemi).
function kacis(metin) {
  if (metin === null || metin === undefined) return '';
  return String(metin)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

// Üst gezinme. aktif: 'kesfet' | 'gunluk' | 'kisiler'. #hesapKutusu içeriğini
// hesap.js doldurur (bu dosya yüklü değilse kutu boş kalır).
function gezinmeHTML(aktif) {
  const sekme = (href, ad, anahtar) =>
    `<a class="sekme${aktif === anahtar ? ' sekme-aktif' : ''}" href="${href}">${ad}</a>`;
  return `
    <nav class="gezinme">
      ${sekme('index.html', 'EATPLORE', 'kesfet')}
      ${sekme('gunluk.html', 'ATE', 'gunluk')}
      ${sekme('kisiler.html', 'EATGRAM', 'kisiler')}
      <span id="hesapKutusu" class="hesap-kutusu"></span>
    </nav>`;
}

// --- Yemek fotoğrafları (ziyaretler) ---

// Telefon fotoğrafı (8+ MB) yüklenmeden önce tarayıcıda küçültülür; Supabase'in
// 1 GB ücretsiz depolamasında bir fotoğraf ~300 KB yer tutar.
function fotoKucult(dosya, maksKenar = 1600, kalite = 0.8) {
  return new Promise((coz, reddet) => {
    const url = URL.createObjectURL(dosya);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const oran = Math.min(1, maksKenar / Math.max(img.width, img.height));
      const tuval = document.createElement('canvas');
      tuval.width = Math.round(img.width * oran);
      tuval.height = Math.round(img.height * oran);
      tuval.getContext('2d').drawImage(img, 0, 0, tuval.width, tuval.height);
      tuval.toBlob(b => b ? coz(b) : reddet(new Error('görsel dönüştürülemedi')),
        'image/jpeg', kalite);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reddet(new Error('görsel okunamadı')); };
    img.src = url;
  });
}

// Ziyaret kartındaki foto şeridi. Yol sütunları boşsa boş string döner.
function ziyaretFotolariHTML(z) {
  const yollar = [z.sevilen_yemek1_foto, z.sevilen_yemek2_foto].filter(Boolean);
  if (yollar.length === 0 || !eaterHesap.hazir()) return '';
  return `<div class="ziyaret-fotolar">${yollar.map(y =>
    `<img class="ziyaret-foto" src="${kacis(eaterHesap.fotoUrl(y))}"
          alt="Food photo" loading="lazy">`).join('')}</div>`;
}

// Tam boy görüntüleme: kap içindeki .ziyaret-foto tıklamalarını yakalar.
function fotoBuyutmeKur(kap) {
  kap.addEventListener('click', e => {
    const img = e.target.closest('.ziyaret-foto');
    if (!img) return;
    const ortu = document.createElement('div');
    ortu.className = 'foto-buyutme';
    ortu.innerHTML = `<img src="${kacis(img.src)}" alt="Food photo — full size">`;
    ortu.addEventListener('click', () => ortu.remove());
    document.body.appendChild(ortu);
  });
}

// --- Mesafe (yakınlık sıralaması) ---

// Kuş uçuşu (haversine), km. a ve b: {lat, lng}.
function mesafeKm(a, b) {
  const R = 6371;
  const rad = d => d * Math.PI / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

function mesafeMetni(km) {
  return km < 10 ? `~${ondalikTR(km)} km` : `~${Math.round(km).toLocaleString('en-US')} km`;
}

// --- Ate Points + kutlama ---

// Her ziyaret 10 puan; yemek fotoğrafı eklendiyse +5. Puan veritabanında
// tutulmaz, ziyaretlerden türetilir — böylece her yerde tutarlı kalır.
function ziyaretAtePuani(z) {
  return 10 + ((z.sevilen_yemek1_foto || z.sevilen_yemek2_foto) ? 5 : 0);
}

// Tam ekran "YOU ATE THAT" + konfeti. Tıklayınca ya da ~2,6 sn sonra kapanır.
function kutlamaGoster(puan) {
  const ortu = document.createElement('div');
  ortu.className = 'kutlama';
  ortu.innerHTML = `
    <canvas class="kutlama-konfeti" aria-hidden="true"></canvas>
    <div class="kutlama-metin">
      <div class="kutlama-baslik">YOU ATE THAT</div>
      <div class="kutlama-puan">+${puan} Ate Points</div>
    </div>`;
  document.body.appendChild(ortu);

  const tuval = ortu.querySelector('canvas');
  tuval.width = window.innerWidth;
  tuval.height = window.innerHeight;
  const ctx = tuval.getContext('2d');
  const renkler = ['#F5B700', '#FFF3E4', '#C1121F', '#FFD966', '#FFFFFF'];
  const parcalar = Array.from({ length: 150 }, () => ({
    x: Math.random() * tuval.width,
    y: -30 - Math.random() * tuval.height * 0.6,
    en: 6 + Math.random() * 6, boy: 8 + Math.random() * 9,
    hiz: 2.5 + Math.random() * 4,
    don: Math.random() * Math.PI, donHiz: (Math.random() - 0.5) * 0.25,
    salinim: Math.random() * 2 * Math.PI,
    renk: renkler[(Math.random() * renkler.length) | 0]
  }));
  const baslangic = performance.now();
  function ciz(t) {
    if (!ortu.isConnected) return;
    const gecen = t - baslangic;
    ctx.clearRect(0, 0, tuval.width, tuval.height);
    parcalar.forEach(p => {
      p.y += p.hiz;
      p.x += Math.sin(gecen / 300 + p.salinim) * 1.3;
      p.don += p.donHiz;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.don);
      ctx.fillStyle = p.renk;
      ctx.fillRect(-p.en / 2, -p.boy / 2, p.en, p.boy);
      ctx.restore();
    });
    if (gecen < 2600) requestAnimationFrame(ciz);
    else { ortu.classList.add('kutlama-kapan'); setTimeout(() => ortu.remove(), 450); }
  }
  requestAnimationFrame(ciz);
  ortu.addEventListener('click', () => ortu.remove());
  // Emniyet: sekme arka planda kalıp animasyon duraklasa bile kutlama kapanır.
  setTimeout(() => {
    if (ortu.isConnected) {
      ortu.classList.add('kutlama-kapan');
      setTimeout(() => ortu.remove(), 450);
    }
  }, 3200);
}
