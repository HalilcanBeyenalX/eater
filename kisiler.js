// EATER — kişiler: herkese açık profil listesi.

async function kisileriGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Kişiler henüz yapılandırılmadı (Supabase ayarları boş).</p>';
    return;
  }
  const { data: profiller, error } = await eaterHesap.istemci
    .from('profiller').select('id, kullanici_adi, tanitim')
    .order('created_at', { ascending: false }).limit(100);
  if (error) { kap.innerHTML = `<p class="panel hata">Liste yüklenemedi: ${kacis(error.message)}</p>`; return; }
  kap.innerHTML = `
    <div class="panel">
      <h2>Kişiler</h2>
      ${profiller.length === 0 ? '<p class="silik">Henüz kimse yok — ilk sen ol.</p>' : ''}
      ${profiller.map(p => `
        <article class="ziyaret">
          <a href="kisi.html?id=${encodeURIComponent(p.id)}"><strong>@${kacis(p.kullanici_adi)}</strong></a>
          ${p.tanitim ? `<p class="silik">${kacis(p.tanitim)}</p>` : ''}
        </article>`).join('')}
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  kisileriGoster();
});
