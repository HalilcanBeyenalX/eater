// EATER — kart görselleri: mutfak türüne göre stilize çizimler (SVG).
// Fotoğraf değildir ve fotoğraf iddiası taşımaz; kartta "bu bir ramen
// mekânı" gibi anında okunan bir görsel kimlik sağlar. Telif: özgün çizim.

const IKON_ALTIN = '#9A0E19';  // bej bant üstünde okunan koyu kırmızı ana çizgi
const IKON_KREM = '#C99400';   // ikincil vurgu: koyu altın

// Ortak sarmalayıcı: 120x90 tuval, kalın uçları yuvarlak altın çizgi.
function ikonSar(icerik) {
  return `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" fill="none"
    stroke="${IKON_ALTIN}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${icerik}</svg>`;
}

const MUTFAK_IKONLARI = {
  noodles: ikonSar(`
    <path d="M22 46h76c0 16-12 28-28 30l-2 6H50l-2-6c-16-2-26-14-26-30z"/>
    <path d="M38 46c0-14 2-24 2-24M52 46c0-16 2-28 2-28M66 46c0-16-2-28-2-28M80 46c0-14-2-24-2-24" stroke-width="3"/>
    <path d="M30 20 98 8M34 30 102 20" stroke="${IKON_KREM}" stroke-width="3"/>`),
  gyoza: ikonSar(`
    <path d="M18 62c0-12 10-20 21-20s21 8 21 20z"/>
    <path d="M60 62c0-12 10-20 21-20s21 8 21 20z"/>
    <path d="M28 46l3-6M39 42v-6M50 46l-3-6" stroke-width="3"/>
    <path d="M70 46l3-6M81 42v-6M92 46l-3-6" stroke-width="3"/>
    <path d="M14 70h92" stroke="${IKON_KREM}" stroke-width="3"/>`),
  sushi: ikonSar(`
    <ellipse cx="44" cy="60" rx="24" ry="12"/>
    <path d="M22 52c4-10 14-16 22-16s18 6 22 16" stroke="${IKON_KREM}"/>
    <circle cx="88" cy="54" r="16"/>
    <circle cx="88" cy="54" r="6" stroke="${IKON_KREM}" stroke-width="3"/>`),
  cocktail: ikonSar(`
    <path d="M34 18h52l-26 28z"/>
    <path d="M60 46v26M44 74h32"/>
    <circle cx="52" cy="27" r="5" stroke="${IKON_KREM}" stroke-width="3"/>
    <path d="M70 12l6-6" stroke-width="3"/>`),
  coffee: ikonSar(`
    <path d="M30 38h48v18c0 12-10 20-24 20s-24-8-24-20z"/>
    <path d="M78 42h10a9 9 0 0 1 0 18h-10"/>
    <path d="M44 28c0-5 4-6 4-10M60 28c0-5 4-6 4-10" stroke="${IKON_KREM}" stroke-width="3"/>
    <path d="M22 82h64" stroke-width="3"/>`),
  croissant: ikonSar(`
    <path d="M22 60c-6-4-6-12 2-18 6-16 22-24 36-24s30 8 36 24c8 6 8 14 2 18-10 8-24 12-38 12s-28-4-38-12z"/>
    <path d="M42 24c-2 12-2 26 2 42M78 24c2 12 2 26-2 42" stroke-width="3"/>`),
  pizza: ikonSar(`
    <path d="M20 26c26-12 54-12 80 0L60 80z"/>
    <path d="M20 26c26-12 54-12 80 0" stroke="${IKON_KREM}" stroke-width="6"/>
    <circle cx="52" cy="42" r="5" stroke-width="3"/>
    <circle cx="72" cy="38" r="5" stroke-width="3"/>
    <circle cx="60" cy="58" r="5" stroke-width="3"/>`),
  skewer: ikonSar(`
    <path d="M28 82V16M28 16l-4-8M28 16l4-8" stroke-width="3"/>
    <rect x="18" y="24" width="20" height="12" rx="6"/>
    <rect x="18" y="42" width="20" height="12" rx="6"/>
    <path d="M78 82V16M78 16l-4-8M78 16l4-8" stroke-width="3"/>
    <rect x="68" y="24" width="20" height="12" rx="6"/>
    <rect x="68" y="42" width="20" height="12" rx="6"/>`),
  steak: ikonSar(`
    <path d="M24 34c8-10 26-14 40-10s34 2 34 16c0 16-16 26-38 26S16 56 16 44c0-4 4-8 8-10z"/>
    <path d="M36 36l14 20M54 32l14 22M72 32l12 18" stroke="${IKON_KREM}" stroke-width="3"/>`),
  ceviche: ikonSar(`
    <path d="M20 50h64c0 14-10 24-24 26l-2 6H46l-2-6c-14-2-24-12-24-26z"/>
    <path d="M32 42c8-8 24-10 36-4" stroke-width="3"/>
    <circle cx="94" cy="34" r="14"/>
    <path d="M94 20v28M82 27l24 14M82 41l24-14" stroke-width="2.5"/>`),
  tea: ikonSar(`
    <path d="M44 22h32l-6 20c-2 6-2 8 0 14l6 18H44l6-18c2-6 2-8 0-14z"/>
    <path d="M34 80h52" stroke-width="3"/>
    <path d="M52 12c0-4 3-5 3-8M66 12c0-4 3-5 3-8" stroke="${IKON_KREM}" stroke-width="3"/>`),
  fish: ikonSar(`
    <path d="M18 48c12-16 30-24 46-24 12 0 24 6 32 14l8-10v40l-8-10c-8 8-20 14-32 14-16 0-34-8-46-24z"/>
    <circle cx="38" cy="44" r="3" fill="${IKON_ALTIN}" stroke="none"/>
    <path d="M60 30c6 10 6 26 0 36" stroke="${IKON_KREM}" stroke-width="3"/>`),
  jamon: ikonSar(`
    <path d="M96 22c8 6 8 16 0 22L58 72c-10 8-26 8-34-2s-6-24 4-32l38-28c8-6 18-4 22 4z" transform="rotate(3 60 45)"/>
    <path d="M98 20l12-8M104 34l12-2" stroke-width="3"/>
    <path d="M42 48c6 6 14 8 22 4" stroke="${IKON_KREM}" stroke-width="3"/>`),
  pasta: ikonSar(`
    <path d="M46 82V38M46 38c-8 0-12-6-12-14V10M46 38c8 0 12-6 12-14V10M46 30V10" stroke-width="3"/>
    <circle cx="82" cy="52" r="20"/>
    <path d="M66 46c10-6 22-6 32 0M66 58c10 6 22 6 32 0" stroke="${IKON_KREM}" stroke-width="3"/>`),
  wine: ikonSar(`
    <path d="M38 14h28v10c0 14-6 20-14 22-8-2-14-8-14-22z"/>
    <path d="M52 46v26M40 74h24"/>
    <path d="M84 8h12v20l6 8v38a6 6 0 0 1-6 6h-12a6 6 0 0 1-6-6V36l6-8z" stroke-width="3"/>
    <path d="M78 52h30" stroke="${IKON_KREM}" stroke-width="3"/>`),
  cloche: ikonSar(`
    <path d="M22 62c0-22 17-36 38-36s38 14 38 36"/>
    <circle cx="60" cy="18" r="5"/>
    <path d="M14 62h92" stroke-width="5"/>
    <path d="M34 46c4-8 10-14 18-16" stroke="${IKON_KREM}" stroke-width="3"/>`),
  plate: ikonSar(`
    <circle cx="60" cy="46" r="26"/>
    <circle cx="60" cy="46" r="14" stroke="${IKON_KREM}" stroke-width="3"/>
    <path d="M16 20v30M10 20v12c0 4 2 6 6 6s6-2 6-6V20M16 50v20" stroke-width="3"/>
    <path d="M104 20c-6 4-8 12-4 20l-2 30" stroke-width="3"/>`)
};

// Sıra önemli: özel türler genel türlerden önce yakalanır.
const MUTFAK_ESLEME = [
  [['Gyoza'], 'gyoza'],
  [['Izakaya', 'Yakitori'], 'skewer'],
  [['Ramen', 'Tonkotsu', 'Udon', 'Soba', 'Japanese Noodles'], 'noodles'],
  [['Sushi'], 'sushi'],
  [['Cocktail Bar', 'Mixology'], 'cocktail'],
  [['Specialty Coffee', 'Cafe'], 'coffee'],
  [['Patisserie', 'Breakfast'], 'croissant'],
  [['Pizza'], 'pizza'],
  [['Fine Dining', 'Chef-driven'], 'cloche'],
  [['Teppanyaki', 'Kobe Beef', 'Wagyu'], 'steak'],
  [['Peruvian', 'Latin American'], 'ceviche'],
  [['Turkish', 'Modern Turkish', 'Meyhane', 'Anatolian', 'Modern Anatolian', 'Turk-Asian'], 'tea'],
  [['Steakhouse', 'Grill', 'Meat', 'Argentinian', 'Uruguayan'], 'steak'],
  [['Seafood', 'Black Sea'], 'fish'],
  [['Spanish', 'Traditional Spanish', 'Modern Spanish', 'Catalan', 'Castilian'], 'jamon'],
  [['Italian'], 'pasta'],
  [['French', 'Brasserie', 'Luxury Bistro'], 'wine'],
  [['Fine Dining', 'Chef-driven', 'Creative', 'Contemporary', 'Modern European', 'Luxury Dining'], 'cloche']
];

// Restoranın mutfak listesine en uygun çizimi döndürür; eşleşme yoksa tabak.
function mutfakGorseli(r) {
  for (const [turler, ikon] of MUTFAK_ESLEME) {
    if (r.mutfak.some(m => turler.includes(m))) return MUTFAK_IKONLARI[ikon];
  }
  return MUTFAK_IKONLARI.plate;
}
