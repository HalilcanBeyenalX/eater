// EATER — app.js ve detay.js tarafından paylaşılan çizim yardımcıları.

const FIYAT_SEMBOLLERI = { ucuz: '₺', orta: '₺₺', pahali: '₺₺₺' };
const FIYAT_ADLARI = { ucuz: 'Ucuz', orta: 'Orta', pahali: 'Pahalı' };

// oduller[].tip -> kısa, rozete uygun Türkçe etiket. Tanınmayan bir tip
// asla ham `detay` metnine düşmez; "Ödüllü" ile karşılanır.
const ODUL_ETIKETLERI = {
  'michelin-bib': 'Michelin Bib Gourmand',
  'michelin-secilmis': 'Michelin Guide seçkisi'
};

function odulEtiketi(tip) {
  return ODUL_ETIKETLERI[tip] || 'Ödüllü';
}

function veyaYok(deger, bosMetin = 'veri yok') {
  if (deger === null || deger === undefined || deger === '') return bosMetin;
  return deger;
}

// Sayıyı Türkçe ondalık ayırıcıyla (virgül) biçimlendirir: 8.6 -> "8,6".
function ondalikTR(sayi, basamak = 1) {
  return sayi.toFixed(basamak).replace('.', ',');
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
    <span class="rozet-puan">${ondalikTR(puan)}</span>
  </span>`;
}

function fiyatEtiketi(segment) {
  const sembol = FIYAT_SEMBOLLERI[segment];
  if (!sembol) return '<span class="fiyat fiyat-yok">veri yok</span>';
  return `<span class="fiyat" title="${FIYAT_ADLARI[segment]} fiyat aralığı">${sembol}</span>`;
}
