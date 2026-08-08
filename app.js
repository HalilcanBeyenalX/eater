// EATER — liste sayfası. Kartları çizer, filtre ve sıralamayı yönetir.

function kartHTML(r) {
  const oduller = r.oduller
    .map(o => `<span class="odul">★ ${o.detay}</span>`)
    .join('');
  const rezUyari = r.rezervasyon.gerekiyor
    ? '<span class="rez-uyari">Rezervasyon gerekli</span>'
    : '';

  return `
    <a class="kart" href="detay.html?id=${encodeURIComponent(r.id)}">
      <div class="kart-foto" aria-hidden="true"><span>fotoğraf yakında</span></div>
      <div class="kart-govde">
        <div class="kart-ust">
          <h2 class="kart-isim">${r.isim}</h2>
          ${fiyatEtiketi(r.fiyat.segment)}
        </div>
        <p class="kart-yer">${r.semt} · ${r.mutfak.join(', ')}</p>
        <div class="rozetler">
          ${puanRozeti('Yemek', r.yemek.puan)}
          ${puanRozeti('Ambiyans', r.ambiyans.puan)}
          ${puanRozeti('Servis', r.servis.puan)}
        </div>
        <div class="isaretler">${oduller}${rezUyari}</div>
      </div>
    </a>`;
}

const filtreDurumu = { segment: '', semt: '', etiket: '', rezervasyon: '' };

function filtrele(liste, f) {
  return liste.filter(r => {
    if (f.segment && r.fiyat.segment !== f.segment) return false;
    if (f.semt && r.semt !== f.semt) return false;
    if (f.etiket && !r.ambiyans.etiketler.includes(f.etiket)) return false;
    if (f.rezervasyon === 'gerekli' && r.rezervasyon.gerekiyor !== true) return false;
    if (f.rezervasyon === 'gerekmiyor' && r.rezervasyon.gerekiyor !== false) return false;
    return true;
  });
}

function benzersiz(degerler) {
  return [...new Set(degerler)].sort((a, b) => a.localeCompare(b, 'tr'));
}

function secimKutusu(id, etiket, secenekler) {
  const opsiyonlar = secenekler
    .map(s => `<option value="${s.deger}">${s.metin}</option>`)
    .join('');
  return `
    <label class="filtre">
      <span class="filtre-etiket">${etiket}</span>
      <select id="${id}">${opsiyonlar}</select>
    </label>`;
}

function filtreleriCiz() {
  const semtler = benzersiz(RESTORANLAR.map(r => r.semt));
  const etiketler = benzersiz(RESTORANLAR.flatMap(r => r.ambiyans.etiketler));

  document.getElementById('filtreler').innerHTML =
    secimKutusu('fSegment', 'Fiyat', [
      { deger: '', metin: 'Hepsi' },
      { deger: 'ucuz', metin: '₺ Ucuz' },
      { deger: 'orta', metin: '₺₺ Orta' },
      { deger: 'pahali', metin: '₺₺₺ Pahalı' }
    ]) +
    secimKutusu('fSemt', 'Semt',
      [{ deger: '', metin: 'Hepsi' }, ...semtler.map(s => ({ deger: s, metin: s }))]) +
    secimKutusu('fEtiket', 'Ambiyans',
      [{ deger: '', metin: 'Hepsi' }, ...etiketler.map(e => ({ deger: e, metin: e }))]) +
    secimKutusu('fRezervasyon', 'Rezervasyon', [
      { deger: '', metin: 'Farketmez' },
      { deger: 'gerekli', metin: 'Gerekli' },
      { deger: 'gerekmiyor', metin: 'Gerekmiyor' }
    ]) +
    '<button id="fSifirla" class="sifirla" type="button">Filtreleri temizle</button>';

  const bagla = (id, alan) => {
    document.getElementById(id).addEventListener('change', e => {
      filtreDurumu[alan] = e.target.value;
      render();
    });
  };
  bagla('fSegment', 'segment');
  bagla('fSemt', 'semt');
  bagla('fEtiket', 'etiket');
  bagla('fRezervasyon', 'rezervasyon');

  document.getElementById('fSifirla').addEventListener('click', () => {
    Object.keys(filtreDurumu).forEach(k => { filtreDurumu[k] = ''; });
    ['fSegment', 'fSemt', 'fEtiket', 'fRezervasyon']
      .forEach(id => { document.getElementById(id).value = ''; });
    render();
  });
}

function render() {
  const liste = filtrele(RESTORANLAR, filtreDurumu);
  const kap = document.getElementById('liste');

  if (liste.length === 0) {
    kap.innerHTML = '<p class="bos">Bu filtrelerle eşleşen restoran yok. Filtreleri temizleyip tekrar deneyin.</p>';
  } else {
    kap.innerHTML = liste.map(kartHTML).join('');
  }

  document.getElementById('sonucSayisi').textContent =
    `${liste.length} restoran${liste.length !== RESTORANLAR.length ? ` (toplam ${RESTORANLAR.length})` : ''}`;
}

document.addEventListener('DOMContentLoaded', () => {
  filtreleriCiz();
  render();
});
