// EATER — kart görselleri: mutfak türüne göre TEMSİLİ yemek fotoğrafları.
// Görseller kullanıcı tarafından üretilmiş (yapay zekâ) stüdyo kareleridir;
// restoranların kendi fotoğrafları DEĞİLDİR ve öyle sunulmaz — kartta türü
// anında okutan görsel kimlik sağlarlar.
// Dosyalar: gorseller/yemekler/*.jpg (kolajlardan kırpıldı).

// Sıra önemli: özel türler genel türlerden önce yakalanır.
// [eşleşen mutfak terimleri], [fotoğraf havuzu]
const YEMEK_FOTO_ESLEME = [
  [['Gyoza'], ['manti']],
  [['Ramen', 'Tonkotsu', 'Udon', 'Soba', 'Japanese Noodles'], ['ramen']],
  [['Sushi', 'Kaiseki'], ['sushi', 'nigiri', 'meze-tartar']],
  [['Izakaya', 'Yakitori'], ['ramen', 'manti', 'et-kusbasi']],
  [['Cocktail Bar', 'Mixology', 'Wine Bar', 'Rooftop'],
    ['negroni', 'kokteyl-sour', 'kokteyl-pembe', 'kokteyl-salatalik', 'gimlet']],
  [['Specialty Coffee', 'Cafe', 'Breakfast'], ['sandvic']],
  [['Patisserie'], ['tatli-krem', 'tatli-tart', 'tatli-fistik', 'tatli-tiramisu-kase']],
  [['Pizza', 'Wood-Fired'], ['pizza-margherita', 'pizza-roka', 'pizza-bresaola', 'pizza-pepperoni',
    'pizza-mantar', 'pizza-beyaz', 'pizza-acili', 'pizza-prosciutto', 'pizza-burrata',
    'pizza-patlican', 'pizza-parma', 'pizza-dilim']],
  [['Kobe Beef', 'Wagyu', 'Teppanyaki'], ['wagyu', 'et-ribeye', 'et-fileto']],
  // Etçiler: 12 farklı et karesi — aynı kare iki mekâna denk gelmesin.
  [['Steakhouse', 'Grill', 'Meat', 'Argentinian', 'Uruguayan'],
    ['et-tomahawk', 'et-ribeye', 'et-dilim-pure', 'et-fileto', 'et-dilim-sebze',
     'et-rosto', 'et-kusbasi', 'et-pirzola-atesli', 'et-wellington', 'et-rossini',
     'biftek', 'biftek-fine']],
  // Şık yerler: geniş havuz — şef tabakları, başlangıçlar, zarif balıklar.
  [['Fine Dining', 'Chef-driven', 'Creative', 'Contemporary', 'Tasting Menu',
    'Luxury Dining', 'Modern European', 'Progressive Indian', 'New Nordic',
    'Korean', 'Modern Turkish', 'Modern Anatolian'],
    ['sef-ordek', 'sef-kuzu-havuc', 'sef-kuzu-pirzola', 'sef-kaburga',
     'meze-crudo', 'meze-tarak', 'meze-tartar', 'balik-siyah', 'balik-midyeli',
     'tarak', 'corba', 'ordek-glaze', 'ordek-dilim', 'balik-fine', 'kalkan',
     'levrek', 'biftek-fine', 'crudo', 'ordek-visne', 'ordek-confit', 'et-rossini']],
  [['Peruvian', 'Latin American', 'Raw Bar', 'Pescatarian'],
    ['crudo', 'meze-crudo', 'meze-tartar', 'meze-tarak']],
  [['Seafood', 'Black Sea'],
    ['balik-butun', 'balik-cipura', 'balik-kalkan-butun', 'balik-somon-fine',
     'balik-midyeli', 'balik-siyah', 'somon', 'levrek', 'kalkan']],
  [['Spanish', 'Traditional Spanish', 'Modern Spanish', 'Catalan', 'Castilian'],
    ['paella-a', 'paella-b', 'meze-burrata', 'et-rosto']],
  [['Pasta', 'Osteria', 'Italian', 'Traditional Italian', 'Southern Italian', 'Milanese', 'Calabrian'],
    ['trufmakarna', 'trufmakarna-b', 'makarna-penne', 'risotto-mantar', 'makarna-deniz',
     'makarna-pesto', 'makarna-tagliatelle', 'makarna-murekkep', 'makarna-karides',
     'makarna-rigatoni', 'risotto-truf', 'makarna-vongole', 'meze-burrata']],
  [['French', 'Brasserie', 'Luxury Bistro', 'French Bistro', 'Classic French'],
    ['foie', 'ordek-confit', 'ordek-visne', 'corba', 'sef-kuzu-pirzola', 'et-wellington']],
  [['Turkish', 'Anatolian', 'Meyhane', 'Turk-Asian',
    'Levantine', 'Middle Eastern', 'Palestinian'],
    ['et-kusbasi', 'balik-butun', 'meze-tartar', 'biftek', 'crudo']],
  [['Asian Fusion', 'Chinese', 'Thai-Chinese', 'Vietnamese'], ['manti', 'sef-kaburga']],
  [['New American', 'Contemporary American', 'Californian'],
    ['biftek-fine', 'tarak', 'somon', 'sef-kaburga', 'meze-tarak']],
  [['Casual'], ['burger']],
  [['Dessert'], ['tatli-cikolata', 'tatli-lava', 'tatli-basque', 'tatli-tiramisu', 'tatli-pannacotta']]
];

// Hiçbir kural tutmazsa: zarif tadım tabakları havuzu.
const VARSAYILAN_FOTOLAR = ['tarak', 'corba', 'balik-fine', 'sef-ordek', 'meze-crudo'];

// Mekânın TİPİNİ tanımlayan terimler: listenin neresinde geçerse geçsin
// önce bunlara bakılır (Beyaz Fırın'da 'Patisserie' üçüncü sırada olsa da
// pastanedir). 'Sushi' bilerek burada DEĞİL: Nusret'in yan menüsünde sushi
// var ama kimliği Steakhouse.
const TIP_TERIMLERI = new Set([
  'Cocktail Bar', 'Mixology', 'Wine Bar',
  'Patisserie', 'Breakfast', 'Specialty Coffee', 'Cafe',
  'Pizza', 'Wood-Fired',
  'Steakhouse', 'Kobe Beef', 'Wagyu', 'Teppanyaki',
  'Gyoza', 'Ramen', 'Tonkotsu', 'Udon', 'Soba', 'Japanese Noodles'
]);

function fotoKurali(m) {
  for (const [turler, havuz] of YEMEK_FOTO_ESLEME) {
    if (turler.includes(m)) return havuz;
  }
  return null;
}

function havuzuBul(r) {
  for (const m of r.mutfak) {
    if (TIP_TERIMLERI.has(m)) { const h = fotoKurali(m); if (h) return h; }
  }
  for (const m of r.mutfak) {
    const h = fotoKurali(m);
    if (h) return h;
  }
  return VARSAYILAN_FOTOLAR;
}

// Listede YAKIN duran kartlar aynı fotoğrafı göstermesin: son çizilen birkaç
// fotoğraf hatırlanır, havuzdaki başlangıç noktası (id'den, kararlı) çakışırsa
// havuzda ilerlenir. render() her çizimden önce fotoAkisiSifirla() çağırır.
const SON_FOTO_HAFIZASI = 4;
let sonFotolar = [];

function fotoAkisiSifirla() {
  sonFotolar = [];
}

function fotoSec(havuz, id) {
  let toplam = 0;
  for (const karakter of id) toplam += karakter.charCodeAt(0);
  const baslangic = toplam % havuz.length;
  for (let i = 0; i < havuz.length; i++) {
    const aday = havuz[(baslangic + i) % havuz.length];
    if (!sonFotolar.includes(aday)) return aday;
  }
  return havuz[baslangic]; // havuz tümüyle yakında kullanılmış — kaçınılmaz tekrar
}

function mutfakGorseli(r) {
  const secilen = fotoSec(havuzuBul(r), r.id);
  sonFotolar.push(secilen);
  if (sonFotolar.length > SON_FOTO_HAFIZASI) sonFotolar.shift();
  return `<img class="kart-foto" src="gorseller/yemekler/${secilen}.jpg"
    alt="" loading="lazy">`;
}
