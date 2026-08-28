// EATER — tanıtım turu. Siteye İLK girişte tam ekran açılır; "Skip" ya da
// son adımdaki "Let's EAT" ile kapanır ve bir daha kendiliğinden görünmez
// (localStorage bayrağı). Alt bilgiye eklenen "How EATER works" bağlantısıyla
// istenildiğinde yeniden açılır. Yalnız index.html yükler; tek dosyadır,
// kaldırmak için bu dosyayı ve script satırını silmek yeter.

const TANITIM_ANAHTAR = 'eaterTanitimV1';

const TANITIM_ADIMLARI = [
  {
    foto: 'sef-ordek',
    baslik: 'Welcome to EATER',
    metin: 'Your guide to the world’s best tables — and a diary of every one you conquer. 87 hand-picked restaurants across 7 countries, from Michelin temples to the perfect gyoza counter.'
  },
  {
    foto: 'paella-a',
    baslik: 'EATPLORE the world',
    metin: 'Spin the globe and tap a country, search any dish in any city — “sushi in Tokyo”, “kebab in Istanbul” — or feeling lucky? Hit 🎲 Pick For Me and let fate choose your dinner.'
  },
  {
    foto: 'asya-sushi-tabak',
    baslik: 'Log what you ATE',
    metin: 'After every meal, add it to your Eatory: rate Food, Ambiance and Service, give your overall EATER Point, snap your favorite dishes. Every visit earns Ate Points 🎉'
  },
  {
    foto: 'kokteyl-pembe',
    baslik: 'Share on EATGRAM',
    metin: 'Find your friends with FEAT, follow their meals in the feed, like ❤️ and comment on their plates. Eating alone is fine — bragging alone is not.'
  },
  {
    foto: 'tatli-cikolata',
    baslik: 'Build your Passport',
    metin: 'Your profile becomes an EATER Passport: cities and countries stamped, your Taste DNA computed, and your BEAST list — the best things you’ve ever eaten, on record.'
  }
];

const TANITIM_CSS = `
  #tanitimOrtu {
    position: fixed; inset: 0; z-index: 5000;
    display: grid; place-items: center; padding: 20px;
    background: linear-gradient(160deg, rgba(110, 10, 18, .96), rgba(154, 14, 25, .96));
    backdrop-filter: blur(3px);
  }
  .tanitim-kart {
    width: min(420px, 100%);
    background: var(--yuzey-yukseltilmis, #F7EDDF);
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 24px 70px rgba(0, 0, 0, .45);
    text-align: center;
  }
  .tanitim-foto { height: 200px; overflow: hidden; }
  .tanitim-foto img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .tanitim-gövde { padding: 20px 26px 24px; }
  .tanitim-baslik {
    margin: 0 0 8px; font-family: var(--serif, Georgia, serif);
    font-size: 26px; color: var(--vurgu, #9A0E19);
  }
  .tanitim-metin {
    margin: 0; font-size: 14.5px; line-height: 1.6;
    color: var(--krem-sonuk, rgba(58, 12, 16, .72));
  }
  .tanitim-noktalar { display: flex; justify-content: center; gap: 7px; margin: 18px 0 14px; }
  .tanitim-nokta {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--kenar, rgba(58, 12, 16, .16)); transition: background .2s, transform .2s;
  }
  .tanitim-nokta.aktif { background: var(--altin, #F5B700); transform: scale(1.3); }
  .tanitim-butonlar { display: flex; gap: 10px; justify-content: center; }
  .tanitim-ileri {
    padding: 11px 34px; border: none; border-radius: 999px; cursor: pointer;
    background: var(--altin, #F5B700); color: #fff;
    font: inherit; font-size: 15px; font-weight: 800; letter-spacing: .02em;
  }
  .tanitim-ileri:hover { filter: brightness(.95); }
  .tanitim-gec {
    padding: 11px 18px; border: none; border-radius: 999px; cursor: pointer;
    background: transparent; color: var(--krem-silik, rgba(58, 12, 16, .5));
    font: inherit; font-size: 14px;
  }
  .tanitim-gec:hover { color: var(--vurgu, #9A0E19); }
  .tanitim-baglanti {
    background: none; border: none; cursor: pointer; font: inherit;
    color: inherit; text-decoration: underline; padding: 0;
  }
`;

function tanitimGoster() {
  if (document.getElementById('tanitimOrtu')) return;
  let adim = 0;

  const ortu = document.createElement('div');
  ortu.id = 'tanitimOrtu';
  document.body.appendChild(ortu);
  document.body.style.overflow = 'hidden';

  const kapat = () => {
    localStorage.setItem(TANITIM_ANAHTAR, '1');
    ortu.remove();
    document.body.style.overflow = '';
  };

  const ciz = () => {
    const a = TANITIM_ADIMLARI[adim];
    const son = adim === TANITIM_ADIMLARI.length - 1;
    ortu.innerHTML = `
      <div class="tanitim-kart" role="dialog" aria-label="How EATER works">
        <div class="tanitim-foto"><img src="gorseller/yemekler/${a.foto}.jpg" alt=""></div>
        <div class="tanitim-gövde">
          <h2 class="tanitim-baslik">${a.baslik}</h2>
          <p class="tanitim-metin">${a.metin}</p>
          <div class="tanitim-noktalar">
            ${TANITIM_ADIMLARI.map((_, i) =>
              `<span class="tanitim-nokta${i === adim ? ' aktif' : ''}"></span>`).join('')}
          </div>
          <div class="tanitim-butonlar">
            ${son ? '' : '<button type="button" class="tanitim-gec" id="tanitimGec">Skip</button>'}
            <button type="button" class="tanitim-ileri" id="tanitimIleri">
              ${son ? "Let's EAT 🍽️" : 'Next'}
            </button>
          </div>
        </div>
      </div>`;
    document.getElementById('tanitimIleri').addEventListener('click', () => {
      if (son) { kapat(); return; }
      adim++;
      ciz();
    });
    document.getElementById('tanitimGec')?.addEventListener('click', kapat);
  };
  ciz();
}

document.addEventListener('DOMContentLoaded', () => {
  // Alt bilgiye kalıcı bağlantı: tur her zaman yeniden izlenebilir.
  const alt = document.querySelector('.alt');
  if (alt) {
    const p = document.createElement('p');
    p.innerHTML = '<button type="button" class="tanitim-baglanti" id="tanitimAc">How EATER works →</button>';
    alt.appendChild(p);
    p.querySelector('#tanitimAc').addEventListener('click', tanitimGoster);
  }

  const stil = document.createElement('style');
  stil.textContent = TANITIM_CSS;
  document.head.appendChild(stil);

  if (!localStorage.getItem(TANITIM_ANAHTAR)) tanitimGoster();
});
