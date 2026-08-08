// EATER — app.js ve detay.js tarafından paylaşılan çizim yardımcıları.

const FIYAT_SEMBOLLERI = { ucuz: '₺', orta: '₺₺', pahali: '₺₺₺' };
const FIYAT_ADLARI = { ucuz: 'Ucuz', orta: 'Orta', pahali: 'Pahalı' };

function veyaYok(deger, bosMetin = 'veri yok') {
  if (deger === null || deger === undefined || deger === '') return bosMetin;
  return deger;
}

function puanRozeti(etiket, puan) {
  if (typeof puan !== 'number') {
    return `<span class="rozet rozet-yok">
      <span class="rozet-etiket">${etiket}</span>
      <span class="rozet-puan">—</span>
    </span>`;
  }
  return `<span class="rozet">
    <span class="rozet-etiket">${etiket}</span>
    <span class="rozet-puan">${puan.toFixed(1)}</span>
  </span>`;
}

function fiyatEtiketi(segment) {
  const sembol = FIYAT_SEMBOLLERI[segment];
  if (!sembol) return '<span class="fiyat fiyat-yok">veri yok</span>';
  return `<span class="fiyat" title="${FIYAT_ADLARI[segment]} fiyat aralığı">${sembol}</span>`;
}
