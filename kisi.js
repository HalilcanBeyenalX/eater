// EATER — herkese açık profil: avatar, gelen arkadaşlık istekleri (kendi
// profilinde), kabul edilmiş eater sayısı ve kişinin ATE dökümü.

// Ziyaret kartı. mekanAdi/yer/yorum/favoriler kullanıcı üretimi olabilir — kacis() şart.
function profilZiyaretHTML(z, mekanAdi, yer) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? puanRozeti(etiket, deger) : '';
  const favoriler = [z.sevilen_yemek1, z.sevilen_yemek2].filter(Boolean);
  return `
    <article class="ziyaret">
      <div class="ziyaret-ust">
        <strong>${kacis(mekanAdi)}</strong>
        <span class="silik">${kacis(yer)} · ${kacis(z.tarih)}</span>
      </div>
      <div class="rozetler">
        ${puan('Food', z.yemek_puan)}${puan('Ambiance', z.ambiyans_puan)}${puan('Service', z.servis_puan)}
      </div>
      ${favoriler.length ? `<p class="silik">Favorites: ${kacis(favoriler.join(', '))}</p>` : ''}
      ${ziyaretFotolariHTML(z)}
      ${z.yorum ? `<p>${kacis(z.yorum)}</p>` : ''}
    </article>`;
}

function avatarHTML(profil, kendim) {
  const gorsel = profil.avatar
    ? `<img src="${kacis(eaterHesap.fotoUrl(profil.avatar))}" alt="Profile photo">`
    : '<span class="avatar-bos" aria-hidden="true">👤</span>';
  if (!kendim) return `<div class="avatar">${gorsel}</div>`;
  return `
    <button type="button" class="avatar avatar-tikla" id="btnAvatar"
      title="Change profile photo" aria-label="Change profile photo">
      ${gorsel}<span class="avatar-ipucu">📷</span>
    </button>
    <input type="file" id="avatarInput" accept="image/*" hidden>`;
}

function istekPaneliHTML(istekler) {
  const satirlar = istekler.length === 0
    ? '<p class="silik">No requests right now.</p>'
    : istekler.map(k => `
        <div class="istek-satir">
          <a class="kisi-ad" href="kisi.html?id=${encodeURIComponent(k.id)}">${kacis(k.kullanici_adi)}</a>
          <span class="istek-butonlar">
            <button type="button" class="istek-kabul" data-id="${kacis(k.id)}"
              title="Accept" aria-label="Accept">✓</button>
            <button type="button" class="istek-ret" data-id="${kacis(k.id)}"
              title="Decline" aria-label="Decline">✕</button>
          </span>
        </div>`).join('');
  return `
    <div class="istek-paneli">
      <h3>Requests${istekler.length ? ` <span class="istek-sayi">${istekler.length}</span>` : ''}</h3>
      ${satirlar}
    </div>`;
}

async function profiliGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Profiles are not configured yet (Supabase settings are empty).</p>';
    return;
  }
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) { kap.innerHTML = '<p class="panel">Profile not found.</p>'; return; }

  const { data: profil, error } = await eaterHesap.istemci
    .from('profiller').select('*').eq('id', id).single();
  if (error || !profil) { kap.innerHTML = '<p class="panel">Profile not found.</p>'; return; }

  const [{ data: ziyaretler = [] }, takipciler, takip] = await Promise.all([
    eaterHesap.istemci.from('ziyaretler').select('*')
      .eq('kullanici', id).order('tarih', { ascending: false }),
    eaterHesap.takipciSayisi(id),
    eaterHesap.takipEttiklerim()
  ]);
  const mekanIdler = ziyaretler.filter(z => z.mekan_id).map(z => z.mekan_id);
  let mekanlar = [];
  if (mekanIdler.length > 0) {
    ({ data: mekanlar = [] } = await eaterHesap.istemci
      .from('mekanlar').select('*').in('id', mekanIdler));
  }
  const isimYer = z => {
    if (z.restoran_id) {
      const r = RESTORANLAR.find(x => x.id === z.restoran_id);
      return r ? [r.isim, `${r.sehir}, ${r.ulke}`] : [z.restoran_id, ''];
    }
    const m = mekanlar.find(x => x.id === z.mekan_id);
    return m ? [m.isim, `${m.sehir}, ${m.ulke}`] : ['(deleted place)', ''];
  };

  const kendim = takip && takip.benimId === id;
  const takipte = takip ? takip.kume.has(id) : false;
  const istekte = takip?.bekleyen?.has(id) ?? false; // eski önbellekli hesap.js'te bekleyen olmayabilir
  const dugme = kendim ? '' : `
    <button type="button" id="btnTakip" class="takip-btn${takipte ? ' takipte' : ''}">
      ${takipte ? '✓ Added' : (istekte ? 'Requested ✕' : 'Add Eaters')}
    </button>`;

  const istekler = kendim ? await eaterHesap.gelenIstekler() : [];

  document.title = `${profil.kullanici_adi} — EATER`;
  kap.innerHTML = `
    <div class="panel">
      <div class="profil-ust">
        <div class="avatar-alan">${avatarHTML(profil, kendim)}</div>
        <div class="profil-bilgi">
          <h2 class="profil-ad">${kacis(profil.kullanici_adi)}</h2>
          ${profil.tanitim ? `<p>${kacis(profil.tanitim)}</p>` : ''}
          <p class="silik">${takipciler} eater${takipciler === 1 ? '' : 's'} · ${ziyaretler.length} visit${ziyaretler.length === 1 ? '' : 's'} ·
            <span class="ate-puan">⭐ ${ziyaretler.reduce((t, z) => t + ziyaretAtePuani(z), 0)} Ate Points</span></p>
        </div>
        <div class="profil-sag">
          ${kendim ? istekPaneliHTML(istekler) : dugme}
        </div>
      </div>
      ${ziyaretler.map(z => profilZiyaretHTML(z, ...isimYer(z))).join('') ||
        '<p class="silik">No entries yet.</p>'}
    </div>`;

  // Takip / istek düğmesi: kabul edilmişse çıkar, bekliyorsa geri çeker, yoksa istek yollar.
  document.getElementById('btnTakip')?.addEventListener('click', async e => {
    e.target.disabled = true;
    const oldu = await eaterHesap.takipDegistir(id, takipte || istekte);
    if (oldu) profiliGoster();
  });

  // Gelen istekler: ✓ kabul, ✕ ret.
  kap.querySelectorAll('.istek-kabul, .istek-ret').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      await eaterHesap.istekYanitla(btn.dataset.id, btn.classList.contains('istek-kabul'));
      profiliGoster();
    });
  });

  // Avatar yükleme (yalnız kendi profilinde).
  const avatarBtn = document.getElementById('btnAvatar');
  const avatarGirdi = document.getElementById('avatarInput');
  avatarBtn?.addEventListener('click', () => avatarGirdi.click());
  avatarGirdi?.addEventListener('change', async () => {
    const dosya = avatarGirdi.files[0];
    if (!dosya) return;
    try {
      const kucuk = await fotoKucult(dosya, 512, 0.85);
      const { hata } = await eaterHesap.avatarKaydet(kucuk, profil.avatar);
      if (hata) alert('Could not save the photo: ' + hata);
      profiliGoster();
    } catch {
      alert("Couldn't process the image — try another one (HEIC isn't supported in every browser).");
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  profiliGoster();
  fotoBuyutmeKur(document.body);
});
