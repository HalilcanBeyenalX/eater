// EATER — kişiler: herkese açık profil listesi + "Eater ekle" (takip).

async function kisileriGoster() {
  const kap = document.getElementById('icerik');
  if (!eaterHesap.hazir()) {
    kap.innerHTML = '<p class="panel">Eaters are not configured yet (Supabase settings are empty).</p>';
    return;
  }
  const { data: profiller, error } = await eaterHesap.istemci
    .from('profiller').select('id, kullanici_adi, tanitim')
    .order('created_at', { ascending: false }).limit(100);
  if (error) { kap.innerHTML = `<p class="panel hata">Could not load the list: ${kacis(error.message)}</p>`; return; }

  const takip = await eaterHesap.takipEttiklerim(); // girişsizse null

  const satir = p => {
    const kendim = takip && takip.benimId === p.id;
    const takipte = takip ? takip.kume.has(p.id) : false;
    const dugme = kendim ? '' : `
      <button type="button" class="takip-btn${takipte ? ' takipte' : ''}"
        data-id="${kacis(p.id)}" data-takipte="${takipte ? '1' : ''}">
        ${takipte ? '✓ Your Eater' : '+ Add Eater'}
      </button>`;
    return `
      <article class="ziyaret kisi-satir">
        <div>
          <a class="kisi-ad" href="kisi.html?id=${encodeURIComponent(p.id)}">${kacis(p.kullanici_adi)}</a>
          ${p.tanitim ? `<p class="silik">${kacis(p.tanitim)}</p>` : ''}
        </div>
        ${dugme}
      </article>`;
  };

  kap.innerHTML = `
    <div class="panel">
      <h2>Eaters</h2>
      ${profiller.length === 0 ? '<p class="silik">Nobody here yet — be the first.</p>' : ''}
      ${profiller.map(satir).join('')}
    </div>`;

  kap.querySelectorAll('.takip-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const oldu = await eaterHesap.takipDegistir(btn.dataset.id, btn.dataset.takipte === '1');
      if (oldu) kisileriGoster();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  kisileriGoster();
});
