// EATER — kart görselleri: mutfak türüne göre TEMSİLİ yemek fotoğrafları.
// Görseller kullanıcı tarafından üretilmiş (yapay zekâ) stüdyo kareleridir;
// restoranların kendi fotoğrafları DEĞİLDİR ve öyle sunulmaz — kartta türü
// anında okutan görsel kimlik sağlarlar (eski SVG ikonların yerine geçti).
// Dosyalar: gorseller/yemekler/*.jpg (kolajlardan kırpıldı).

// Aynı havuzdaki restoranlar arasında çeşitlilik: id'den deterministik seçim
// (her yenilemede aynı restoran aynı fotoğrafı gösterir).
function fotoSec(havuz, id) {
  let toplam = 0;
  for (const karakter of id) toplam += karakter.charCodeAt(0);
  return havuz[toplam % havuz.length];
}

// Sıra önemli: özel türler genel türlerden önce yakalanır.
// [eşleşen mutfak terimleri], [fotoğraf havuzu]
const YEMEK_FOTO_ESLEME = [
  [['Gyoza'], ['manti']],
  [['Ramen', 'Tonkotsu', 'Udon', 'Soba', 'Japanese Noodles'], ['ramen']],
  [['Sushi', 'Kaiseki'], ['sushi', 'nigiri']],
  [['Izakaya', 'Yakitori'], ['ramen', 'manti']],
  [['Cocktail Bar', 'Mixology', 'Wine Bar', 'Rooftop'],
    ['negroni', 'kokteyl-sour', 'kokteyl-pembe', 'kokteyl-salatalik', 'gimlet']],
  [['Specialty Coffee', 'Cafe', 'Breakfast'], ['sandvic']],
  [['Patisserie'], ['tatli-krem']],
  [['Pizza', 'Wood-Fired'], ['pizza-a', 'pizza-b']],
  [['Kobe Beef', 'Wagyu', 'Teppanyaki'], ['wagyu']],
  [['Steakhouse', 'Grill', 'Meat', 'Argentinian', 'Uruguayan'], ['biftek', 'biftek-fine']],
  // Şık yerlere şık tabaklar: tadım menüsü/fine dining havuzu geniş tutuldu
  // ki 20+ restoran aynı kareyi paylaşmasın.
  [['Fine Dining', 'Chef-driven', 'Creative', 'Contemporary', 'Tasting Menu',
    'Luxury Dining', 'Modern European', 'Progressive Indian', 'New Nordic', 'Kaiseki',
    'Korean', 'Modern Turkish', 'Modern Anatolian'],
    ['tarak', 'corba', 'ordek-glaze', 'ordek-dilim', 'balik-fine', 'kalkan', 'levrek', 'biftek-fine', 'crudo']],
  [['Peruvian', 'Latin American', 'Raw Bar', 'Pescatarian'], ['crudo']],
  [['Seafood', 'Black Sea'], ['somon', 'levrek', 'kalkan']],
  [['Spanish', 'Traditional Spanish', 'Modern Spanish', 'Catalan', 'Castilian'], ['paella-a', 'paella-b']],
  [['Pasta', 'Osteria', 'Italian', 'Traditional Italian', 'Southern Italian', 'Milanese', 'Calabrian'],
    ['trufmakarna', 'trufmakarna-b']],
  [['French', 'Brasserie', 'Luxury Bistro', 'French Bistro', 'Classic French'], ['foie']],
  [['Turkish', 'Anatolian', 'Meyhane', 'Turk-Asian',
    'Levantine', 'Middle Eastern', 'Palestinian'], ['crudo', 'biftek']],
  [['Asian Fusion', 'Chinese', 'Thai-Chinese', 'Vietnamese'], ['manti']],
  [['New American', 'Contemporary American', 'Californian'], ['biftek-fine', 'tarak', 'somon']],
  [['Casual'], ['burger']],
  [['Dessert'], ['tatli-cikolata']]
];

// Hiçbir kural tutmazsa: zarif tadım tabakları havuzu.
const VARSAYILAN_FOTOLAR = ['tarak', 'corba', 'balik-fine', 'ordek-glaze', 'tatli-cikolata'];

// Mekânın TİPİNİ tanımlayan terimler: listenin neresinde geçerse geçsin
// önce bunlara bakılır (Beyaz Fırın'da 'Patisserie' üçüncü sırada olsa da
// pastanedir; L'Entrecôte'ta 'Steakhouse' etçi demektir). 'Sushi' bilerek
// burada DEĞİL: Nusret yan menüsünde sushi var ama kimliği Steakhouse.
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

// 1. geçiş: tip terimleri (sırayla). 2. geçiş: birincil mutfaktan itibaren
// genel eşleşme. Hiçbiri tutmazsa zarif varsayılan havuz.
function mutfakGorseli(r) {
  let havuz = null;
  for (const m of r.mutfak) {
    if (TIP_TERIMLERI.has(m)) { havuz = fotoKurali(m); if (havuz) break; }
  }
  if (!havuz) {
    for (const m of r.mutfak) {
      havuz = fotoKurali(m);
      if (havuz) break;
    }
  }
  if (!havuz) havuz = VARSAYILAN_FOTOLAR;
  return `<img class="kart-foto" src="gorseller/yemekler/${fotoSec(havuz, r.id)}.jpg"
    alt="" loading="lazy">`;
}
