// EATER — app.js ve detay.js tarafından paylaşılan çizim yardımcıları.

// Fiyat rozeti ülkenin para birimiyle yazılır: ₺₺, €€€, ¥ gibi.
const PARA_BIRIMLERI = { 'Turkey': '₺', 'Japan': '¥', 'France': '€', 'Spain': '€', 'Italy': '€', 'Thailand': '฿' };
const FIYAT_ADLARI = { ucuz: 'Budget', orta: 'Mid-range', pahali: 'High-end' };

// oduller[].tip -> kısa, rozete uygun etiket. Tanınmayan bir tip
// asla ham `detay` metnine düşmez; "Award-winning" ile karşılanır.
// Yıldızlar rehberdeki gibi sembolle gösterilir ("★★★ Michelin");
// "Stars" kelimesi bilerek yok. Yıldızsız ödüller yıldız işareti almaz.
const ODUL_ETIKETLERI = {
  'michelin-yildiz': '★ Michelin',
  'michelin-2-yildiz': '★★ Michelin',
  'michelin-3-yildiz': '★★★ Michelin',
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

// Asia's 50 Best sıra rozeti: puanlara karışmaz, ayrı bir işaret olarak durur.
function asya50Rozeti(r) {
  return typeof r.asia50Sira === 'number'
    ? `<span class="odul odul-50best">🏆 Asia's 50 Best — No.${r.asia50Sira}</span>`
    : '';
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

// Ülke bayrağı — mekânın yerini bir bakışta okutur. Katalogda olmayan bir
// ülke gelirse hiç bayrak çizilmez (yanlış bayrak göstermektense boş kalsın).
const ULKE_BAYRAKLARI = {
  'Turkey': '🇹🇷', 'France': '🇫🇷', 'Spain': '🇪🇸', 'Italy': '🇮🇹',
  'Japan': '🇯🇵', 'Thailand': '🇹🇭', 'USA': '🇺🇸', 'Greece': '🇬🇷',
  'Germany': '🇩🇪', 'United Kingdom': '🇬🇧', 'Netherlands': '🇳🇱',
  'Portugal': '🇵🇹', 'South Korea': '🇰🇷'
};

function bayrakEtiketi(ulke) {
  const bayrak = ULKE_BAYRAKLARI[ulke];
  return bayrak ? `<span class="bayrak" title="${kacis(ulke)}">${bayrak}</span>` : '';
}

// Ziyaret kartlarının ortak parçaları: hap puanlar + geniş fotoğraflar.
// EATGRAM, ATE (Eatory) ve profil aynı kart yapısını kullanır.
// 2×2 hap ızgarası: Food|Ambiance üstte, Service|EATER altta. EATER puanı
// verilmemiş eski kayıtlarda bile hap görünür ("—") — metrik hep göz önünde.
function puanPilleriHTML(z) {
  const p = (etiket, deger) => typeof deger === 'number'
    ? `<span class="mini-puan">${etiket} ${ondalikTR(deger)}</span>` : '';
  const eater = `<span class="mini-puan mini-eater">EATER ${
    typeof z.genel_puan === 'number' ? ondalikTR(z.genel_puan) : '—'}</span>`;
  return `<div class="akis-puanlar">
    ${p('Food', z.yemek_puan)}${p('Ambiance', z.ambiyans_puan)}${p('Service', z.servis_puan)}${eater}
  </div>`;
}

function ziyaretFotolarGenisHTML(z) {
  const fotolar = [z.sevilen_yemek1_foto, z.sevilen_yemek2_foto].filter(Boolean);
  if (fotolar.length === 0) return '';
  return `<div class="akis-fotolar${fotolar.length > 1 ? ' akis-iki' : ''}">
    ${fotolar.map(y => `<img class="ziyaret-foto akis-foto"
      src="${kacis(eaterHesap.fotoUrl(y))}" alt="Food photo" loading="lazy">`).join('')}
  </div>`;
}

// --- Sosyal eylemler (beğeni + yorum + EATER Point) — akışta ve profilde ortak ---

// sosyal: { sayilar, benimkiler, yorumlar } (hesap.js begeniOzeti + yorumSayilari).
// null ise (Ek 7 kurulmamış) hiçbir şey çizilmez. EATER Point sağda altın hapta.
function sosyalEylemlerHTML(z, sosyal) {
  if (!sosyal) return '';
  return `
    <div class="akis-eylemler">
      <button type="button" class="akis-eylem akis-begen"
        data-id="${kacis(z.id)}" data-var="${sosyal.benimkiler.has(z.id) ? 1 : 0}">
        ${sosyal.benimkiler.has(z.id) ? '❤️' : '🤍'}
        <span class="eylem-sayi">${sosyal.sayilar.get(z.id) || 0}</span>
      </button>
      <button type="button" class="akis-eylem akis-yorumla" data-id="${kacis(z.id)}">
        💬 <span class="eylem-sayi">${sosyal.yorumlar.get(z.id) || 0}</span>
      </button>
    </div>
    <div class="akis-yorum-kutu" id="yorumKutu-${kacis(z.id)}" hidden></div>`;
}

// Yorum kutusunu doldurur: mevcut yorumlar + yazma satırı. Yazar adları
// profiller tablosundan toplu çekilir; yorum metni kullanıcı üretimi — kacis() şart.
async function yorumKutusunuDoldur(ziyaretId) {
  const kutu = document.getElementById('yorumKutu-' + ziyaretId);
  const yorumlar = await eaterHesap.yorumlariGetir(ziyaretId);
  const yazarIdler = [...new Set(yorumlar.map(y => y.kullanici))];
  let yazarlar = [];
  if (yazarIdler.length > 0) {
    ({ data: yazarlar = [] } = await eaterHesap.istemci
      .from('profiller').select('id, kullanici_adi').in('id', yazarIdler));
  }
  const adiniBul = id => yazarlar.find(p => p.id === id)?.kullanici_adi ?? '(deleted account)';
  kutu.innerHTML = `
    ${yorumlar.map(y => `
      <p class="yorum-satir"><strong>${kacis(adiniBul(y.kullanici))}</strong> ${kacis(y.metin)}</p>`).join('')
      || '<p class="silik">No comments yet.</p>'}
    <div class="yorum-form">
      <input type="text" maxlength="300" placeholder="Add a comment…"
        id="yorumGirdi-${kacis(ziyaretId)}">
      <button type="button" class="yorum-gonder" data-id="${kacis(ziyaretId)}">Send</button>
    </div>`;
  kutu.querySelector('.yorum-gonder').addEventListener('click', async e => {
    const girdi = document.getElementById('yorumGirdi-' + ziyaretId);
    const metin = girdi.value.trim();
    if (!metin) return;
    e.target.disabled = true;
    const hata = await eaterHesap.yorumEkle(ziyaretId, metin);
    if (!hata) {
      const sayac = document.querySelector(`.akis-yorumla[data-id="${ziyaretId}"] .eylem-sayi`);
      if (sayac) sayac.textContent = Number(sayac.textContent) + 1;
      await yorumKutusunuDoldur(ziyaretId);
    } else { e.target.disabled = false; }
  });
  kutu.querySelector('input').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); kutu.querySelector('.yorum-gonder').click(); }
  });
}

// Beğeni ve yorum düğmelerini bağlar; kart yerinde güncellenir (yeniden çizim yok).
function sosyalEylemleriBagla(kap) {
  kap.querySelectorAll('.akis-begen').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const vardi = btn.dataset.var === '1';
      const oldu = await eaterHesap.begeniDegistir(btn.dataset.id, vardi);
      if (oldu) {
        btn.dataset.var = vardi ? '0' : '1';
        const sayac = btn.querySelector('.eylem-sayi');
        sayac.textContent = Number(sayac.textContent) + (vardi ? -1 : 1);
        btn.childNodes[0].textContent = (vardi ? '🤍' : '❤️') + ' ';
      }
      btn.disabled = false;
    });
  });
  kap.querySelectorAll('.akis-yorumla').forEach(btn => {
    btn.addEventListener('click', async () => {
      const kutu = document.getElementById('yorumKutu-' + btn.dataset.id);
      if (kutu.hidden && !kutu.dataset.yuklu) {
        kutu.dataset.yuklu = '1';
        await yorumKutusunuDoldur(btn.dataset.id);
      }
      kutu.hidden = !kutu.hidden;
    });
  });
}

// PWA: ana ekrana kurulabilirlik için service worker kaydı (sw.js hiçbir şeyi
// önbelleğe almaz — her push telefonda da anında görünür). localhost'ta ve
// https'te çalışır; desteklenmeyen tarayıcıda sessizce atlanır.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
