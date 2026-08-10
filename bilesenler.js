// EATER — app.js ve detay.js tarafından paylaşılan çizim yardımcıları.

const FIYAT_SEMBOLLERI = { ucuz: '₺', orta: '₺₺', pahali: '₺₺₺' };
const FIYAT_ADLARI = { ucuz: 'Ucuz', orta: 'Orta', pahali: 'Pahalı' };

// oduller[].tip -> kısa, rozete uygun Türkçe etiket. Tanınmayan bir tip
// asla ham `detay` metnine düşmez; "Ödüllü" ile karşılanır.
const ODUL_ETIKETLERI = {
  'michelin-yildiz': 'Michelin yıldızı',
  'michelin-bib': 'Michelin Bib Gourmand',
  'michelin-secilmis': 'Michelin Guide seçkisi',
  'michelin-yesil': 'Michelin Yeşil Yıldız',
  'gault-millau': 'Gault&Millau',
  'servis-odulu': 'Servis ödülü',
  '50best': "World's 50 Best"
};

// Doğrulanamayan / boş bırakılan alanlar için tek görsel işaret. Ham "veri
// yok" metni yerine kullanılır; okuyucuya bozuk bir alan gibi görünmemesi
// için ayrı bir sınıfla soluk renkte çizilir (bkz. styles.css .deger-yok).
const BOS_ISARET = '<span class="deger-yok">—</span>';

function odulEtiketi(tip) {
  return ODUL_ETIKETLERI[tip] || 'Ödüllü';
}

function veyaYok(deger, bosMetin = BOS_ISARET) {
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
  if (!sembol) return '<span class="fiyat fiyat-yok">—</span>';
  return `<span class="fiyat" title="${FIYAT_ADLARI[segment]} fiyat aralığı">${sembol}</span>`;
}

// Fotoğraf yardımcıları. fotolar[] girdileri: { dosya, alt, kaynak, kredi }
function ilkFoto(fotolar) {
  return Array.isArray(fotolar) && fotolar.length ? fotolar[0] : null;
}

function fotoKredisi(f) {
  if (!f.kredi && !f.kaynak) return '';
  const kaynak = f.kaynak
    ? ` · <a href="${f.kaynak}" target="_blank" rel="noopener">kaynak</a>`
    : '';
  return `<figcaption class="foto-kredi silik">${f.kredi || '—'}${kaynak}</figcaption>`;
}

// Kullanıcıdan gelen metinler (yorum, kullanıcı adı, mekân adı) HTML'e ham
// gömülmez — innerHTML'e girmeden önce bu fonksiyondan geçirilir (XSS önlemi).
function kacis(metin) {
  if (metin === null || metin === undefined) return '';
  return String(metin)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

// Üst gezinme. aktif: 'kesfet' | 'gunluk' | 'kisiler'. #hesapKutusu içeriğini
// hesap.js doldurur (bu dosya yüklü değilse kutu boş kalır).
function gezinmeHTML(aktif) {
  const sekme = (href, ad, anahtar) =>
    `<a class="sekme${aktif === anahtar ? ' sekme-aktif' : ''}" href="${href}">${ad}</a>`;
  return `
    <nav class="gezinme">
      ${sekme('index.html', 'Keşfet', 'kesfet')}
      ${sekme('gunluk.html', 'Gittiklerim', 'gunluk')}
      ${sekme('kisiler.html', 'Kişiler', 'kisiler')}
      <span id="hesapKutusu" class="hesap-kutusu"></span>
    </nav>`;
}
