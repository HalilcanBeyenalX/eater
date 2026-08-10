// EATER — herkese açık profil: bir kullanıcının günlüğü (salt okunur) + takip.

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
  const dugme = kendim ? '' : `
    <button type="button" id="btnTakip" class="takip-btn${takipte ? ' takipte' : ''}">
      ${takipte ? '✓ Your Eater' : '+ Add Eater'}
    </button>`;

  document.title = `${profil.kullanici_adi} — EATER`;
  kap.innerHTML = `
    <div class="panel">
      <div class="kisi-satir">
        <h2 class="profil-ad">${kacis(profil.kullanici_adi)}</h2>
        ${dugme}
      </div>
      ${profil.tanitim ? `<p>${kacis(profil.tanitim)}</p>` : ''}
      <p class="silik">${takipciler} eater${takipciler === 1 ? '' : 's'} · ${ziyaretler.length} visit${ziyaretler.length === 1 ? '' : 's'}</p>
      ${ziyaretler.map(z => profilZiyaretHTML(z, ...isimYer(z))).join('') ||
        '<p class="silik">No entries yet.</p>'}
    </div>`;

  document.getElementById('btnTakip')?.addEventListener('click', async e => {
    e.target.disabled = true;
    const oldu = await eaterHesap.takipDegistir(id, takipte);
    if (oldu) profiliGoster();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  profiliGoster();
  fotoBuyutmeKur(document.body);
});
