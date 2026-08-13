// EATER — Eaters: herkese açık profil listesi + takip ("Add Eaters") +
// satır başına açılır ATE özeti (gittiği yerler, puanlar, fotoğraflar).

// Bir kişinin son ziyaretlerinin tek satırlık özeti: foto · mekân · puanlar · tarih.
function ozetZiyaretHTML(z, mekanAdi) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? `<span class="mini-puan">${etiket} ${ondalikTR(deger)}</span>` : '';
  const yol = z.sevilen_yemek1_foto || z.sevilen_yemek2_foto;
  const foto = yol
    ? `<img class="ozet-foto ziyaret-foto" src="${kacis(eaterHesap.fotoUrl(yol))}"
         alt="Food photo" loading="lazy">`
    : '<span class="ozet-foto ozet-foto-bos" aria-hidden="true">🍽️</span>';
  return `
    <div class="ozet-ziyaret">
      ${foto}
      <strong class="ozet-ad">${kacis(mekanAdi)}</strong>
      <span class="ozet-puanlar">
        ${puan('Food', z.yemek_puan)}${puan('Ambiance', z.ambiyans_puan)}${puan('Service', z.servis_puan)}
      </span>
      <span class="silik ozet-tarih">${kacis(z.tarih)}</span>
    </div>`;
}

// + düğmesine basılınca o kişinin son 5 ziyaretini çekip özet olarak açar.
async function ozetYukle(kisiId, kap) {
  kap.innerHTML = '<p class="silik">Loading…</p>';
  const { data: ziyaretler, error } = await eaterHesap.istemci
    .from('ziyaretler').select('*')
    .eq('kullanici', kisiId).order('tarih', { ascending: false }).limit(5);
  if (error) { kap.innerHTML = `<p class="hata">Could not load: ${kacis(error.message)}</p>`; return; }
  if (!ziyaretler.length) { kap.innerHTML = '<p class="silik">No entries in their ATE yet.</p>'; return; }

  const mekanIdler = ziyaretler.filter(z => z.mekan_id).map(z => z.mekan_id);
  let mekanlar = [];
  if (mekanIdler.length > 0) {
    ({ data: mekanlar = [] } = await eaterHesap.istemci
      .from('mekanlar').select('id, isim').in('id', mekanIdler));
  }
  const adBul = z => {
    if (z.restoran_id) return RESTORANLAR.find(x => x.id === z.restoran_id)?.isim ?? z.restoran_id;
    return mekanlar.find(x => x.id === z.mekan_id)?.isim ?? '(deleted place)';
  };
  kap.innerHTML = ziyaretler.map(z => ozetZiyaretHTML(z, adBul(z))).join('');
}

async function kisileriGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Eaters are not configured yet (Supabase settings are empty).</p>';
    return;
  }
  const { data: profiller, error } = await eaterHesap.istemci
    .from('profiller').select('id, kullanici_adi, tanitim, avatar')
    .order('created_at', { ascending: false }).limit(100);
  if (error) { kap.innerHTML = `<p class="panel hata">Could not load the list: ${kacis(error.message)}</p>`; return; }

  const takip = await eaterHesap.takipEttiklerim(); // girişsizse null

  const satir = p => {
    const kendim = takip && takip.benimId === p.id;
    const takipte = takip ? takip.kume.has(p.id) : false;
    const istekte = takip?.bekleyen?.has(p.id) ?? false; // eski önbellekli hesap.js'te bekleyen olmayabilir
    const dugme = kendim ? '' : `
      <button type="button" class="takip-btn${takipte ? ' takipte' : ''}"
        data-id="${kacis(p.id)}" data-iliskili="${takipte || istekte ? '1' : ''}">
        ${takipte ? '✓ Added' : (istekte ? 'Requested ✕' : 'Add Eaters')}
      </button>`;
    const avatar = p.avatar
      ? `<img class="avatar-mini" src="${kacis(eaterHesap.fotoUrl(p.avatar))}" alt="">`
      : '<span class="avatar-mini avatar-bos" aria-hidden="true">👤</span>';
    return `
      <article class="ziyaret kisi-satir">
        <div class="kisi-sol">
          ${avatar}
          <div>
            <a class="kisi-ad" href="kisi.html?id=${encodeURIComponent(p.id)}">${kacis(p.kullanici_adi)}</a>
            ${p.tanitim ? `<p class="silik">${kacis(p.tanitim)}</p>` : ''}
          </div>
        </div>
        <div class="kisi-butonlar">
          <button type="button" class="ozet-btn" data-id="${kacis(p.id)}"
            title="Show their ATE" aria-label="Show their ATE" aria-expanded="false">+</button>
          ${dugme}
        </div>
      </article>
      <div class="kisi-ozet" data-kisi="${kacis(p.id)}" hidden></div>`;
  };

  const arama = (document.getElementById('eaterArama')?.value ?? '').trim();
  let liste = profiller;
  if (arama) {
    const { data: bulunan } = await eaterHesap.istemci
      .from('profiller').select('id, kullanici_adi, tanitim, avatar')
      .ilike('kullanici_adi', `%${arama}%`).order('kullanici_adi').limit(50);
    liste = bulunan || [];
  }

  kap.innerHTML = `
    <div class="panel">
      <h2>Eaters</h2>
      <div class="eater-arama">
        <span class="arama-ikon" aria-hidden="true">🔍</span>
        <input id="eaterArama" type="search" placeholder="Find Eaters by username…"
          aria-label="Find Eaters" value="${kacis(arama)}">
      </div>
      ${liste.length === 0
        ? `<p class="silik">${arama ? 'No Eaters match that name.' : 'Nobody here yet — be the first.'}</p>` : ''}
      ${liste.map(satir).join('')}
    </div>`;

  // Arama kutusu: yazdıkça (kısa bir beklemeyle) listeyi süzer.
  const aramaKutusu = document.getElementById('eaterArama');
  let aramaZamanlayici = null;
  aramaKutusu.addEventListener('input', () => {
    clearTimeout(aramaZamanlayici);
    aramaZamanlayici = setTimeout(() => {
      const imlec = aramaKutusu.value;
      kisileriGoster().then(() => {
        const yeni = document.getElementById('eaterArama');
        yeni.focus();
        yeni.setSelectionRange(imlec.length, imlec.length);
      });
    }, 350);
  });

  kap.querySelectorAll('.takip-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const oldu = await eaterHesap.takipDegistir(btn.dataset.id, btn.dataset.iliskili === '1');
      if (oldu) kisileriGoster();
    });
  });

  kap.querySelectorAll('.ozet-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ozet = kap.querySelector(`.kisi-ozet[data-kisi="${btn.dataset.id}"]`);
      const aciliyor = ozet.hidden;
      ozet.hidden = !aciliyor;
      btn.textContent = aciliyor ? '−' : '+';
      btn.setAttribute('aria-expanded', aciliyor ? 'true' : 'false');
      if (aciliyor && !ozet.dataset.yuklendi) {
        ozet.dataset.yuklendi = '1';
        ozetYukle(btn.dataset.id, ozet);
      }
    });
  });
}

// --- EATGRAM akışı: herkesin son ziyaretleri, Instagram usulü tek kolon ---

function akisKartiHTML(z, profil, mekanAdi) {
  const avatar = profil?.avatar
    ? `<img class="avatar-mini" src="${kacis(eaterHesap.fotoUrl(profil.avatar))}" alt="">`
    : '<span class="avatar-mini avatar-bos" aria-hidden="true">👤</span>';
  const ad = profil ? profil.kullanici_adi : '(deleted account)';
  const profilBaglanti = profil
    ? `<a class="kisi-ad" href="kisi.html?id=${encodeURIComponent(profil.id)}">${kacis(ad)}</a>`
    : `<span class="kisi-ad">${kacis(ad)}</span>`;
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? `<span class="mini-puan">${etiket} ${ondalikTR(deger)}</span>` : '';
  const fotolar = [z.sevilen_yemek1_foto, z.sevilen_yemek2_foto].filter(Boolean);
  const fotoHTML = fotolar.length
    ? `<div class="akis-fotolar${fotolar.length > 1 ? ' akis-iki' : ''}">
        ${fotolar.map(y => `<img class="ziyaret-foto akis-foto"
          src="${kacis(eaterHesap.fotoUrl(y))}" alt="Food photo" loading="lazy">`).join('')}
      </div>`
    : '';
  return `
    <article class="akis-kart">
      <div class="akis-ust">
        ${avatar}
        <div class="akis-kim">
          ${profilBaglanti}
          <span class="silik">ate at <strong>${kacis(mekanAdi)}</strong> · ${kacis(z.tarih)}</span>
        </div>
      </div>
      ${fotoHTML}
      <div class="akis-puanlar">
        ${puan('Food', z.yemek_puan)}${puan('Ambiance', z.ambiyans_puan)}${puan('Service', z.servis_puan)}
      </div>
      ${z.yorum ? `<p class="akis-yorum">${kacis(z.yorum)}</p>` : ''}
    </article>`;
}

async function akisiGoster() {
  const kap = document.getElementById('akis');
  if (!kap || !eaterHesap.hazir()) return;
  const { data: ziyaretler, error } = await eaterHesap.istemci
    .from('ziyaretler').select('*')
    .order('created_at', { ascending: false }).limit(20);
  if (error || !ziyaretler || ziyaretler.length === 0) return;

  const kullaniciIdler = [...new Set(ziyaretler.map(z => z.kullanici))];
  const mekanIdler = [...new Set(ziyaretler.filter(z => z.mekan_id).map(z => z.mekan_id))];
  const [profilY, mekanY] = await Promise.all([
    eaterHesap.istemci.from('profiller')
      .select('id, kullanici_adi, avatar').in('id', kullaniciIdler),
    mekanIdler.length
      ? eaterHesap.istemci.from('mekanlar').select('id, isim').in('id', mekanIdler)
      : Promise.resolve({ data: [] })
  ]);
  const profiller = profilY.data || [];
  const mekanlar = mekanY.data || [];
  const mekanAdi = z => {
    if (z.restoran_id) return RESTORANLAR.find(x => x.id === z.restoran_id)?.isim ?? z.restoran_id;
    return mekanlar.find(x => x.id === z.mekan_id)?.isim ?? '(deleted place)';
  };

  kap.innerHTML = `
    <div class="panel akis-paneli">
      <h2 class="akis-baslik">Feed</h2>
      ${ziyaretler.map(z =>
        akisKartiHTML(z, profiller.find(p => p.id === z.kullanici), mekanAdi(z))).join('')}
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  kisileriGoster();
  akisiGoster();
  fotoBuyutmeKur(document.body);
});
