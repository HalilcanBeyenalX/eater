// EATER — herkese açık profil: bir kullanıcının günlüğü (salt okunur).

// Ziyaret kartı. mekanAdi/yer/yorum kullanıcı üretimi olabilir — kacis() şart.
function profilZiyaretHTML(z, mekanAdi, yer) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? puanRozeti(etiket, deger) : '';
  return `
    <article class="ziyaret">
      <div class="ziyaret-ust">
        <strong>${kacis(mekanAdi)}</strong>
        <span class="silik">${kacis(yer)} · ${kacis(z.tarih)}</span>
      </div>
      <div class="rozetler">
        ${puan('Yemek', z.yemek_puan)}${puan('Ambiyans', z.ambiyans_puan)}${puan('Servis', z.servis_puan)}
      </div>
      ${z.yorum ? `<p>${kacis(z.yorum)}</p>` : ''}
    </article>`;
}

async function profiliGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Profiller henüz yapılandırılmadı (Supabase ayarları boş).</p>';
    return;
  }
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) { kap.innerHTML = '<p class="panel">Profil bulunamadı.</p>'; return; }

  const { data: profil, error } = await eaterHesap.istemci
    .from('profiller').select('*').eq('id', id).single();
  if (error || !profil) { kap.innerHTML = '<p class="panel">Profil bulunamadı.</p>'; return; }

  const { data: ziyaretler = [] } = await eaterHesap.istemci
    .from('ziyaretler').select('*').eq('kullanici', id).order('tarih', { ascending: false });
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
    return m ? [m.isim, `${m.sehir}, ${m.ulke}`] : ['(silinmiş mekân)', ''];
  };
  document.title = `@${profil.kullanici_adi} — EATER`;
  kap.innerHTML = `
    <div class="panel">
      <h2>@${kacis(profil.kullanici_adi)}</h2>
      ${profil.tanitim ? `<p>${kacis(profil.tanitim)}</p>` : ''}
      <p class="silik">${ziyaretler.length} ziyaret</p>
      ${ziyaretler.map(z => profilZiyaretHTML(z, ...isimYer(z))).join('') ||
        '<p class="silik">Henüz kayıt yok.</p>'}
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  profiliGoster();
});
