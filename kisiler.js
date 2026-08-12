// EATER — Eaters: herkese açık profil listesi + takip ("Add Eaters") +
// satır başına açılır ATE özeti (gittiği yerler, puanlar, fotoğraflar).

// Bir kişinin son ziyaretlerinin kompakt satırı. Tüm metinler kacis()ten geçer.
function ozetZiyaretHTML(z, mekanAdi) {
  const puan = (etiket, deger) =>
    typeof deger === 'number' ? `<span class="mini-puan">${etiket} ${ondalikTR(deger)}</span>` : '';
  return `
    <div class="ozet-ziyaret">
      <div class="ozet-ust">
        <strong>${kacis(mekanAdi)}</strong>
        <span class="silik">${kacis(z.tarih)}</span>
      </div>
      <div class="ozet-puanlar">
        ${puan('Food', z.yemek_puan)}${puan('Ambiance', z.ambiyans_puan)}${puan('Service', z.servis_puan)}
      </div>
      ${ziyaretFotolariHTML(z)}
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
        ${takipte ? '✓ Added' : 'Add Eaters'}
      </button>`;
    return `
      <article class="ziyaret kisi-satir">
        <div>
          <a class="kisi-ad" href="kisi.html?id=${encodeURIComponent(p.id)}">${kacis(p.kullanici_adi)}</a>
          ${p.tanitim ? `<p class="silik">${kacis(p.tanitim)}</p>` : ''}
        </div>
        <div class="kisi-butonlar">
          <button type="button" class="ozet-btn" data-id="${kacis(p.id)}"
            title="Show their ATE" aria-label="Show their ATE" aria-expanded="false">+</button>
          ${dugme}
        </div>
      </article>
      <div class="kisi-ozet" data-kisi="${kacis(p.id)}" hidden></div>`;
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

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kisiler');
  eaterHesap.hesapKutusunuCiz();
  kisileriGoster();
  fotoBuyutmeKur(document.body);
});
