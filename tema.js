// EATER — canlı tema editörü (deneme aracı). Sağ üstteki 🎨 düğmesi bir panel
// açar; arka plan, kutu, metin, vurgu renkleri ve yazı tipleri anında değişir.
// Seçimler yalnız bu tarayıcıda saklanır (localStorage) — siteyi ziyaret eden
// başka kimse görmez. Beğenilen tema "Copy CSS" ile kopyalanıp kalıcı hale
// getirilebilir. KALDIRMAK İÇİN: bu dosyayı ve HTML'lerdeki
// <script src="tema.js"> satırını silmek yeterlidir; başka hiçbir dosyaya
// dokunmaz.

const TEMA_ANAHTAR = 'eaterTemaV1';

// styles.css :root ile birebir aynı başlangıç değerleri.
const TEMA_VARSAYILAN = {
  kirmizi: '#C1121F',   // sayfa arka planı
  ust: '#9A0E19',       // başlık + alt bilgi zemini
  fildisi: '#FFF3E4',   // kırmızı zemin üstündeki metin
  kutu: '#F7EDDF',      // kutuların zemini (koyu tonları türetilir)
  metin: '#3A0C10',     // kutu içindeki metin
  vurgu: '#9A0E19',     // puanlar ve vurgular
  altin: '#F5B700',     // düğmeler ve rozetler
  serif: 'georgia',
  sans: 'nunito'
};

const TEMA_SERIFLER = {
  georgia:   { ad: 'Georgia (current)', deger: 'Georgia, "Times New Roman", serif', google: null },
  playfair:  { ad: 'Playfair Display', deger: '"Playfair Display", Georgia, serif', google: 'Playfair+Display:wght@500;700' },
  cormorant: { ad: 'Cormorant Garamond', deger: '"Cormorant Garamond", Georgia, serif', google: 'Cormorant+Garamond:wght@600;700' },
  lora:      { ad: 'Lora', deger: 'Lora, Georgia, serif', google: 'Lora:wght@500;700' },
  marcellus: { ad: 'Marcellus', deger: 'Marcellus, Georgia, serif', google: 'Marcellus' }
};

const TEMA_SANSLAR = {
  nunito:    { ad: 'Nunito (current)', deger: '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', google: null },
  inter:     { ad: 'Inter', deger: '"Inter", -apple-system, sans-serif', google: 'Inter:wght@400;600;700' },
  quicksand: { ad: 'Quicksand', deger: '"Quicksand", -apple-system, sans-serif', google: 'Quicksand:wght@400;600;700' },
  poppins:   { ad: 'Poppins', deger: '"Poppins", -apple-system, sans-serif', google: 'Poppins:wght@400;600;700' },
  sistem:    { ad: 'System default', deger: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', google: null }
};

// ---- renk yardımcıları ----------------------------------------------------

function temaHexRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}

// Rengi siyaha doğru karıştırır (oran 0–1). Kutu iç tonları buradan türer.
function temaKoyulastir(hex, oran) {
  const [r, g, b] = temaHexRgb(hex).map(k => Math.round(k * (1 - oran)));
  return '#' + [r, g, b].map(k => k.toString(16).padStart(2, '0')).join('');
}

function temaAlfa(hex, a) {
  const [r, g, b] = temaHexRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// ---- temanın uygulanması --------------------------------------------------

// Seçilen 7 renk + 2 fonttan styles.css'teki TÜM değişkenler türetilir;
// alfa/koyuluk oranları :root'taki orijinal değerlerle aynıdır.
function temaDegiskenleri(t) {
  return {
    '--kirmizi': t.kirmizi,
    '--kirmizi-koyu': t.ust,
    '--kirmizi-derin': temaKoyulastir(t.ust, 0.28),
    '--kirmizi-derin-desen': temaAlfa(temaKoyulastir(t.ust, 0.28), 0.72),
    '--fildisi': t.fildisi,
    '--fildisi-sonuk': temaAlfa(t.fildisi, 0.72),
    '--fildisi-silik': temaAlfa(t.fildisi, 0.48),
    '--yuzey-yukseltilmis': t.kutu,
    '--yuzey-oyuk': temaKoyulastir(t.kutu, 0.055),
    '--yuzey-derin': temaKoyulastir(t.kutu, 0.11),
    '--krem': t.metin,
    '--krem-sonuk': temaAlfa(t.metin, 0.72),
    '--krem-silik': temaAlfa(t.metin, 0.50),
    '--kenar': temaAlfa(t.metin, 0.16),
    '--ortu-koyu': temaAlfa(t.metin, 0.06),
    '--vurgu': t.vurgu,
    '--altin': t.altin,
    '--altin-koyu': temaKoyulastir(t.altin, 0.18),
    '--altin-hale': temaAlfa(t.altin, 0.20),
    '--serif': TEMA_SERIFLER[t.serif]?.deger ?? TEMA_SERIFLER.georgia.deger,
    '--sans': TEMA_SANSLAR[t.sans]?.deger ?? TEMA_SANSLAR.nunito.deger
  };
}

function temaFontYukle(google) {
  if (!google) return;
  const id = 'temaFont-' + google;
  if (document.getElementById(id)) return;
  const bag = document.createElement('link');
  bag.id = id;
  bag.rel = 'stylesheet';
  bag.href = `https://fonts.googleapis.com/css2?family=${google}&display=swap`;
  document.head.appendChild(bag);
}

function temaUygula(t) {
  temaFontYukle(TEMA_SERIFLER[t.serif]?.google);
  temaFontYukle(TEMA_SANSLAR[t.sans]?.google);
  const kok = document.documentElement.style;
  Object.entries(temaDegiskenleri(t)).forEach(([k, v]) => kok.setProperty(k, v));
}

function temaSifirla() {
  const kok = document.documentElement.style;
  Object.keys(temaDegiskenleri(TEMA_VARSAYILAN)).forEach(k => kok.removeProperty(k));
}

// Kayıttan dönen her değer doğrulanır: renk alanları #rrggbb, font alanları
// sözlük anahtarı olmalı. Bozuk/elle kurcalanmış kayıt sessizce varsayılana
// düşer — değerler panele HTML olarak yazıldığı için bu şart.
function temaOku() {
  try {
    const ham = JSON.parse(localStorage.getItem(TEMA_ANAHTAR) ?? 'null');
    if (!ham || typeof ham !== 'object') return null;
    const t = { ...TEMA_VARSAYILAN };
    for (const [alan] of TEMA_RENK_SATIRLARI) {
      if (/^#[0-9a-f]{6}$/i.test(ham[alan] ?? '')) t[alan] = ham[alan];
    }
    if (TEMA_SERIFLER[ham.serif]) t.serif = ham.serif;
    if (TEMA_SANSLAR[ham.sans]) t.sans = ham.sans;
    return t;
  } catch { return null; }
}

// ---- panel ----------------------------------------------------------------

// Panelin görünümü tema değişkenlerinden BAĞIMSIZ sabittir; deneme sırasında
// renkler ne kadar bozulursa bozulsun panel okunur kalır ve geri dönülebilir.
const TEMA_PANEL_CSS = `
  #temaDugme {
    position: fixed; top: 14px; right: 14px; z-index: 4000;
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,.35);
    background: rgba(20,20,20,.72); color: #fff; font-size: 19px;
    cursor: pointer; backdrop-filter: blur(4px);
  }
  #temaDugme:hover { background: rgba(20,20,20,.9); }
  #temaPanel {
    position: fixed; top: 64px; right: 14px; z-index: 4000;
    width: min(300px, calc(100vw - 28px)); max-height: calc(100vh - 84px);
    overflow-y: auto; padding: 14px 16px; border-radius: 12px;
    background: #1d1d1f; color: #f2f2f2;
    font: 13px/1.4 -apple-system, "Segoe UI", Roboto, sans-serif;
    box-shadow: 0 10px 34px rgba(0,0,0,.5);
  }
  #temaPanel h3 { margin: 0 0 10px; font-size: 14px; letter-spacing: .04em; }
  #temaPanel .tema-satir {
    display: flex; align-items: center; justify-content: space-between;
    gap: 10px; margin-bottom: 8px;
  }
  #temaPanel input[type="color"] {
    width: 44px; height: 28px; padding: 0; border: 1px solid #555;
    border-radius: 6px; background: none; cursor: pointer;
  }
  #temaPanel select {
    max-width: 160px; padding: 4px 6px; border-radius: 6px;
    border: 1px solid #555; background: #2b2b2d; color: #f2f2f2; font: inherit;
  }
  #temaPanel .tema-bolum {
    margin: 12px 0 6px; font-size: 11px; letter-spacing: .1em;
    text-transform: uppercase; color: #9a9a9a;
  }
  #temaPanel .tema-alt { display: flex; gap: 8px; margin-top: 14px; }
  #temaPanel .tema-alt button {
    flex: 1; padding: 7px 0; border-radius: 8px; border: 1px solid #555;
    background: #2b2b2d; color: #f2f2f2; font: inherit; cursor: pointer;
  }
  #temaPanel .tema-alt button:hover { background: #3a3a3d; }
`;

const TEMA_RENK_SATIRLARI = [
  ['kirmizi', 'Page background'],
  ['ust', 'Header & footer'],
  ['fildisi', 'Header text'],
  ['kutu', 'Boxes'],
  ['metin', 'Box text'],
  ['vurgu', 'Scores & accents'],
  ['altin', 'Buttons & badges']
];

function temaSecenekler(sozluk, secili) {
  return Object.entries(sozluk)
    .map(([k, f]) => `<option value="${k}"${k === secili ? ' selected' : ''}>${f.ad}</option>`)
    .join('');
}

function temaPanelKur() {
  const t = { ...TEMA_VARSAYILAN, ...(temaOku() ?? {}) };

  const stil = document.createElement('style');
  stil.textContent = TEMA_PANEL_CSS;
  document.head.appendChild(stil);

  const dugme = document.createElement('button');
  dugme.id = 'temaDugme';
  dugme.type = 'button';
  dugme.title = 'Theme editor';
  dugme.textContent = '🎨';
  document.body.appendChild(dugme);

  const panel = document.createElement('div');
  panel.id = 'temaPanel';
  panel.hidden = true;
  panel.innerHTML = `
    <h3>🎨 Theme editor</h3>
    <div class="tema-bolum">Colors</div>
    ${TEMA_RENK_SATIRLARI.map(([alan, etiket]) => `
      <label class="tema-satir">${etiket}
        <input type="color" data-alan="${alan}" value="${t[alan]}">
      </label>`).join('')}
    <div class="tema-bolum">Fonts</div>
    <label class="tema-satir">Headings
      <select data-alan="serif">${temaSecenekler(TEMA_SERIFLER, t.serif)}</select>
    </label>
    <label class="tema-satir">Body
      <select data-alan="sans">${temaSecenekler(TEMA_SANSLAR, t.sans)}</select>
    </label>
    <div class="tema-alt">
      <button type="button" id="temaSifirla">Reset</button>
      <button type="button" id="temaKopyala">Copy CSS</button>
    </div>`;
  document.body.appendChild(panel);

  dugme.addEventListener('click', () => { panel.hidden = !panel.hidden; });

  panel.querySelectorAll('input[type="color"], select').forEach(giris => {
    giris.addEventListener('input', () => {
      t[giris.dataset.alan] = giris.value;
      temaUygula(t);
      localStorage.setItem(TEMA_ANAHTAR, JSON.stringify(t));
    });
  });

  panel.querySelector('#temaSifirla').addEventListener('click', () => {
    localStorage.removeItem(TEMA_ANAHTAR);
    temaSifirla();
    Object.assign(t, TEMA_VARSAYILAN);
    panel.querySelectorAll('input[type="color"], select').forEach(giris => {
      giris.value = t[giris.dataset.alan];
    });
  });

  // Beğenilen temanın :root bloğu panoya kopyalanır — kalıcı yapmak için
  // styles.css'e yapıştırılabilir (fontlar dahil).
  panel.querySelector('#temaKopyala').addEventListener('click', async e => {
    const satirlar = Object.entries(temaDegiskenleri(t))
      .map(([k, v]) => `  ${k}: ${v};`).join('\n');
    try {
      await navigator.clipboard.writeText(`:root {\n${satirlar}\n}\n`);
      e.target.textContent = 'Copied ✓';
    } catch {
      e.target.textContent = 'Copy failed';
    }
    setTimeout(() => { e.target.textContent = 'Copy CSS'; }, 1600);
  });
}

// Kaydedilmiş tema sayfa açılır açılmaz uygulanır (panel açılmasa bile).
const temaKayitli = temaOku();
if (temaKayitli) temaUygula(temaKayitli);
document.addEventListener('DOMContentLoaded', temaPanelKur);
