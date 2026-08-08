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

function render() {
  const liste = RESTORANLAR;
  document.getElementById('liste').innerHTML = liste.map(kartHTML).join('');
  document.getElementById('sonucSayisi').textContent = `${liste.length} restoran`;
}

document.addEventListener('DOMContentLoaded', render);
