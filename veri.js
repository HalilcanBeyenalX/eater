// EATER — restoran verisi.
// Bu dosya SADECE veri içerir. Mantık, hesaplama veya fonksiyon eklenmez.
// Alan tanımları için SEMA.md dosyasına bakın.
// Doğrulanamayan alanlar null bırakılır — tahmini değer yazılmaz.
// Aşağıdaki dizi, atama öneki ve sondaki noktalı virgül çıkarıldığında geçerli JSON'dur:
// çift tırnaklı anahtarlar, sonda virgül yok, dizi içinde yorum yok.

const RESTORANLAR = [
  {
    "id": "karakoy-lokantasi",
    "isim": "Karaköy Lokantası",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Karaköy",
    "mutfak": [
      "Turkish",
      "Meyhane",
      "Mediterranean"
    ],
    "adres": "Kemankeş Mahallesi, Kemankeş Caddesi No:57, Karaköy, Beyoğlu, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Karak%C3%B6y%20Lokantas%C4%B1%2C%20Kemanke%C5%9F%20Caddesi%20No%3A57%2C%20Karak%C3%B6y%2C%20Beyo%C4%9Flu%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0245922,
      "lng": 28.980028
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "The per-person spending range could not be verified, so kisiBasi was left blank. Concrete data obtained: the Michelin Guide places the restaurant in the Bib Gourmand category citing an 'exceptional price/quality ratio' and notes that main courses rarely exceed 25-30 euros; meyhankoli.com tags the venue at the ₺₺ level. In contrast, Google reviews (read via Wanderlog) report a bill exceeding ₺6,000 per person with extra line items such as ₺80 bread, ₺140 water, and a 10% service charge; Turkish-language reviews repeatedly criticize 'small portions, high prices.' After weighing both sides, the segment was set to 'orta' (mid-range); the sources do not agree on this point. According to the thresholds set by the owner (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), this data corresponds to the mid-range segment."
    },
    "yemek": {
      "puan": 8.6,
      "ozet": "Sources reinforce each other on the food: Bib Gourmand in the MICHELIN Guide Turkey 2026 selection, TripAdvisor 4.2/5 (about 1,360 reviews, ranked ~448th out of 9,705 restaurants in Istanbul), a Google rating of 4.3 as seen via Wanderlog (3,031 reviews). Praise is concentrated almost entirely on the mezes and the hünkar beğendi. The reason it wasn't raised to 9.0 is two recurring complaints: portions considered small and desserts seen as the menu's weakest link (Uplifers review). This fits the 8.0-8.9 band definition of 'strong but with recurring minor complaints.'"
    },
    "neYenir": [
      {
        "yemek": "Hünkar Beğendi",
        "kacKisiOnerdi": null,
        "not": "Described in the MICHELIN Guide write-up as the venue's signature dish (slow-cooked lamb over smoked eggplant purée). It also recurs in Google reviews read via Wanderlog and in Turkish food articles. How many people recommended it could not be derived from a countable set of comments."
      },
      {
        "yemek": "Ahtapot Izgara",
        "kacKisiOnerdi": null,
        "not": "The MICHELIN Guide's emphasis on 'flawless grilled octopus' matches the 'Ahtapot Izgara' item on the restaurant's own menu list and the meze recommendations found in Turkish blog roundups."
      },
      {
        "yemek": "Pastırmalı Humus",
        "kacKisiOnerdi": null,
        "not": "Highlighted in the Uplifers review as lighter and less oily than usual; the hummus is also specifically praised in Turkish venue roundups."
      },
      {
        "yemek": "Topik",
        "kacKisiOnerdi": null,
        "not": "Also described in the Uplifers review for its sugar-cinnamon-onion balance; it also appears in Turkish sources writing about the meze selection."
      },
      {
        "yemek": "Fava",
        "kacKisiOnerdi": null,
        "not": "Described in a Google review read via Wanderlog as 'the tastiest fava I've eaten despite being from Izmir'; it also appears on the restaurant's own menu list."
      }
    ],
    "ambiyans": {
      "puan": 8.0,
      "ozet": "Praise for the turquoise tile-clad interior and the harborside terrace appears in nearly every source; the MICHELIN Guide separately notes the calm terrace and waterfront location. Turkish sources consistently describe it operating under two distinct concepts: a neighborhood lunch spot by day and a meyhane by night. What keeps the score below 9 is two recurring complaints in Google and TripAdvisor reviews: tables being too close together and the noise level (including a review calling it 'the noisiest restaurant I've seen').",
      "etiketler": [
        "lively",
        "noisy",
        "terrace",
        "meyhane",
        "tiled-decor"
      ],
      "dressCode": null,
      "uygun": [
        "groups",
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 7.5,
      "ozet": "Service is this restaurant's most divided topic. On one side there's praise in TripAdvisor reviews for English-speaking, friendly staff and 'professional staff' comments in search results. On the other, the Uplifers review considers service the venue's actual weak point, saying 'I couldn't catch a single smile,' and there's a TripAdvisor review describing a negative experience with the owner. Because this is a clear and recurring weakness, it was placed in the 7.0-7.9 band.",
      "artilar": [
        "English-speaking staff noted in TripAdvisor reviews",
        "Being able to order by standing at the meze case and picking items"
      ],
      "eksiler": [
        "Uplifers review criticizes distant, unsmiling staff",
        "Tables too close together and high noise level (Google and TripAdvisor reviews)",
        "Bread and water charged separately, plus a 10% service fee on top (Google reviews)",
        "Desserts found to be the menu's weakest link (Uplifers)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-bib",
        "detay": "MICHELIN Guide Istanbul — Bib Gourmand. Included in the 2026 Istanbul Bib Gourmand selection (verified from two independent lists)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "phone",
        "online"
      ],
      "telefon": "+90 212 292 44 55",
      "link": "https://www.karakoylokantasi.com/en/reservation",
      "beklemeSuresi": "That reservations are required is repeated in both Turkish venue write-ups and TripAdvisor reviews; one TripAdvisor review describes waiting about an hour on a Saturday evening. The restaurant's own reservation page states that they hold the table for 15 minutes from the reservation time.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.3,
        "yorumSayisi": 3031,
        "incelenen": 8
      },
      "tripadvisor": {
        "puan": 4.2,
        "yorumSayisi": 1360,
        "incelenen": 5
      },
      "tiktok": null,
      "diger": "The MICHELIN Guide Turkey 2026 (Bib Gourmand selection) and the Uplifers review were also included in the assessment."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "balikci-kahraman",
    "isim": "Balıkçı Kahraman",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Rumelikavağı",
    "mutfak": [
      "Seafood",
      "Black Sea",
      "Turkish"
    ],
    "adres": "Rumeli Kavağı Mahallesi, İskele Caddesi No:15, Sarıyer, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bal%C4%B1k%C3%A7%C4%B1%20Kahraman%2C%20%C4%B0skele%20Caddesi%20No%3A15%2C%20Rumeli%20Kava%C4%9F%C4%B1%2C%20Sar%C4%B1yer%2C%20%C4%B0stanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "The most talked-about topic for this restaurant is price, but since the verified figures don't agree with each other, no per-person range was given. Verified concrete data: (1) a complaint filed on Şikayetvar on December 25, 2025 reports ₺16,000 for two people, i.e. about ₺8,000 per person; (2) other complaints on the same site show two-person bills ranging ₺8,500-11,500; (3) a receipt reported in the press on January 11, 2026 shows turbot at ₺8,000/kg, 2.5 kg of fish at ₺20,000, tomato salad ₺1,000, fried calamari ₺1,000, water-bread-cornbread ₺600, two desserts ₺800, and a 10% service charge of ₺2,600, for a total of ₺28,900. Because turbot is sold by weight and the venue doesn't provide a menu, the bill varies widely depending on the weight of fish ordered; reviews insistently repeat that prices should be asked before ordering. Ekşi Sözlük has a separate, dozens-of-pages-long thread devoted solely to the bill. The 'two people for ₺1,500-2,000' figure on Onedio is undated and clearly contradicts current receipts, so it was not used. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), the verified figures of roughly ₺8,000 per person correspond to the expensive segment."
    },
    "yemek": {
      "puan": 8.7,
      "ozet": "Almost all the complaints are about price, not the food. It's included in the MICHELIN Guide Turkey 2026 selection, which praises the whole grilled turbot, lakerda (salted bonito), and fish kokoreç; Vedat Milor gives the tomato salad and the anchovy cornbread + lakerda pairing a perfect 10/10. Even a TripAdvisor review title reads 'The turbot is amazing but the price...' The only clear complaint on the food side is a TikTok review saying better lakerda can be found at more ordinary places. TripAdvisor's aggregate rating of 3.7/5 is mostly driven by price and ambiance; since those are scored separately, this wasn't reflected in the food score."
    },
    "neYenir": [
      {
        "yemek": "Bütün Kalkan",
        "kacKisiOnerdi": null,
        "not": "The venue's signature dish. The MICHELIN Guide calls the flawless grilled turbot the house specialty; the restaurant's own website says the turbot is traditionally oven-roasted whole; Vedat Milor writes that this is one of only three places with a chef who can properly grill a whole turbot. Since it's priced by weight, reviews repeatedly warn to ask about weight and cost before ordering."
      },
      {
        "yemek": "Domates Salatası",
        "kacKisiOnerdi": null,
        "not": "Vedat Milor gives it a perfect 10/10. It's also mentioned in Meyhankoli and the TikTok review as a standout side alongside the turbot."
      },
      {
        "yemek": "Lakerda",
        "kacKisiOnerdi": null,
        "not": "The MICHELIN Guide describes it as 'butter-textured lakerda,' and Vedat Milor recommends spreading it on cornbread, giving it a 10/10. In contrast, a TikTok review says 'I've had better at more average places' — sources diverge on this item."
      },
      {
        "yemek": "Hamsili Mısır Ekmeği",
        "kacKisiOnerdi": null,
        "not": "Vedat Milor gives it a 10/10 alongside the lakerda; the TikTok review also counts it among the items served before the fish arrives."
      },
      {
        "yemek": "Balık Kokoreç",
        "kacKisiOnerdi": null,
        "not": "Listed first among the dishes the MICHELIN Guide names for this venue; the Onedio review also cites this as Michelin's top recommendation."
      }
    ],
    "ambiyans": {
      "puan": 6.5,
      "ozet": "Ambiance is consistently the venue's weak point across sources. There's no sea view, the venue is on a side street, and the interior decor is said to be no different from a standard fish restaurant; TripAdvisor reviews question the 40-minute trip citing 'zero ambiance.' Ekşi Sözlük reviews repeat the same pattern: 'good taste, good service, but no view and prices are very high.' This fits the below-7.0 definition of 'persistent dissatisfaction.' On the other side, there are only a few comments at the level of 'cute place.'",
      "etiketler": [
        "no-view",
        "simple",
        "fish-tavern",
        "side-street"
      ],
      "dressCode": null,
      "uygun": [
        "groups"
      ]
    },
    "servis": {
      "puan": 6.8,
      "ozet": "There's praise for staff attentiveness and how the fish is cooked, but a recurring, serious pattern pulls the score down: not providing a menu and not stating prices before ordering. All four complaints on Şikayetvar are about exorbitant pricing and none appear to have a business response; the page's brand score is 0/100 from a single review. Ekşi Sözlük reviews mention 'no fixed prices, they write it based on the customer' and allegations of bill errors. Since price itself is assessed under a separate heading, what's scored here is not the price but the failure to disclose it to customers in advance.",
      "artilar": [
        "Skillful cooking of the whole turbot (MICHELIN Guide and Vedat Milor reviews)",
        "Reviews mentioning a complimentary watermelon and dessert at the end of the meal",
        "Ekşi Sözlük comments giving full marks for service and customer attentiveness in some cases"
      ],
      "eksiler": [
        "No menu provided; recurring complaints that prices aren't stated before ordering",
        "Bill errors and claims that 'prices are written based on the customer' (Ekşi Sözlük)",
        "All four complaints on Şikayetvar concern exorbitant pricing with no business response",
        "The 10% service charge noticeably inflating the bill (₺2,600 on the January 2026 receipt)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "MICHELIN Guide Turkey 2026 — restaurant selected in the guide. Not a star or Bib Gourmand; not included in the Istanbul Bib Gourmand lists."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone",
        "email"
      ],
      "telefon": "+90 212 242 64 47",
      "link": null,
      "beklemeSuresi": null,
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": {
        "puan": 3.7,
        "yorumSayisi": 115,
        "incelenen": 3
      },
      "tiktok": {
        "incelenenVideo": 1,
        "ozet": "The only video whose content could be read is a meal-bill review: for the pan-fried turbot the smallest fish was cooked, served with tomato salad, lakerda, and anchovy cornbread; the bill came to ₺3,000 and the author said 'not worth the money.' The freshness and cooking method of the fish were found positive, while the lakerda fell short of expectations."
      },
      "diger": "The MICHELIN Guide Turkey 2026 selection, Vedat Milor's review, the price complaints on Şikayetvar, and the receipt thread on Ekşi Sözlük were also included in the assessment."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "beyaz-firin-etiler",
    "isim": "Beyaz Fırın Etiler",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Etiler",
    "mutfak": [
      "Brasserie",
      "Patisserie",
      "Breakfast"
    ],
    "adres": "Etiler Mahallesi, Nispetiye Caddesi No:82, Beşiktaş, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Beyaz%20F%C4%B1r%C4%B1n%20Etiler%2C%20Nispetiye%20Caddesi%20No%3A82%2C%20Etiler%2C%20Be%C5%9Fikta%C5%9F%2C%20%C4%B0stanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Beyaz Fırın is a chain and the published price list is brand-wide, not branch-specific. So no per-person range was given. Items verified from the brand-wide price list dated June 2, 2026: two-person breakfast platter ₺1,650, single-person breakfast platter ₺750, breakfast pan ₺860, potato gül böreği (rose pastry) ₺190, Polka ₺240, menemen ₺320, schnitzel ₺650-780, grilled salmon ₺850, homemade lemonade ₺160, filter coffee ₺130. The brand's own menu PDF has also been published as the 2026 summer menu. In TripAdvisor reviews specific to the Etiler branch, prices are described as 'a bit expensive but reasonable for Etiler.' For comparison: in an August 2023 Gurme Rehber article about the Etiler branch, the pastry platter was ₺240, poached egg with sucuk was ₺210, and tea was ₺30. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), these items in the ₺750-1,650 per-person range correspond to the mid-range segment."
    },
    "yemek": {
      "puan": 7.5,
      "ozet": "Only sources specific to the Etiler branch were used; reviews of the brand's other branches (e.g. Time Out's Ataşehir-Suadiye-Erenköy review and the Ataşehir branch's Yandex page) were excluded. For Etiler, TripAdvisor is 4.5/5 but based on only 18 reviews; the Yandex Maps listing for Nispetiye Cd. No:82 shows 4.3/5 and 137 reviews. The bakery side — especially the potato gül böreği, Polka, and puff pastry — is consistently praised both on TripAdvisor and in two blog reviews specifically covering the Etiler branch; Gurme Rehber gives the Etiler branch 7.5/10 for taste. What keeps the score down is the recurring hygiene and foreign-object reports in the 11 complaints on Şikayetvar's Etiler branch page (hair, glass fragments, plastic wire in packaging, spoiled cake over five months). This fits the 7.0-7.9 band definition of 'a clear and frequently recurring weakness.'"
    },
    "neYenir": [
      {
        "yemek": "Patatesli Gül Böreği",
        "kacKisiOnerdi": null,
        "not": "Described in brand-wide menu roundups as 'the brand's most iconic savory item' (₺190 on the 2026 price list). It's also among the standout bakery-case items in write-ups specific to the Etiler branch."
      },
      {
        "yemek": "Polka",
        "kacKisiOnerdi": null,
        "not": "The brand's secret-recipe signature cake; ₺240 on the 2026 brand-wide price list. Not separately verified in a branch-specific source, so this recommendation applies at the brand level."
      },
      {
        "yemek": "Kahvaltı Tavası",
        "kacKisiOnerdi": null,
        "not": "₺860 on the 2026 menu; consists of grilled halloumi, a fried egg over sourdough bread, prosciutto, three types of mushroom, cherry tomatoes, and avocado. Breakfast is the most praised meal in reviews specific to the Etiler branch."
      },
      {
        "yemek": "Sucuklu Poşe Yumurta",
        "kacKisiOnerdi": null,
        "not": "Described as 'our favorite here' in Gurme Rehber's article on the Etiler branch. Another review of the same branch highlights a version with tomato sauce and burrata poached egg."
      },
      {
        "yemek": "Çilekli Milföy",
        "kacKisiOnerdi": null,
        "not": "Specifically recommended as a dessert in the Üşengeç Şef review covering the Etiler branch."
      }
    ],
    "ambiyans": {
      "puan": 8.2,
      "ozet": "Two reviews specifically covering the Etiler branch consistently praise the venue: an art-deco-influenced, two-story space seating about 350, with a vertical winter garden and a 6.5-meter bakery counter at the entrance; a second review calls it 'sparkling clean' and describes three separate seating areas — garden, indoor hall, and upper floor. What keeps the score below 9 is crowding: multiple reviews mention the venue filling up during weekend breakfast hours, no host greeting guests at the door, and crowd/noise issues.",
      "etiketler": [
        "airy",
        "art-deco",
        "winter-garden",
        "crowded",
        "patisserie"
      ],
      "dressCode": null,
      "uygun": [
        "solo",
        "groups"
      ]
    },
    "servis": {
      "puan": 7.2,
      "ozet": "Service reviews for the Etiler branch openly contradict each other: for the same branch there are both 'staff indifferent, service unbelievably slow' and 'service is fantastic, staff are friendly' comments; one review says they were seated without any wait, another says no one greeted them at the door. The TripAdvisor summary also mentions 'occasional service inconsistencies and order issues.' Among the 11 complaints on Şikayetvar's Etiler page, one complaining customer reports staff being dismissive, even mocking (April 2024); on the other hand, the brand appears to have responded to all complaints in the past year. Because the inconsistency is pronounced and frequently repeated, it falls in the 7.0-7.9 band.",
      "artilar": [
        "Friendly and attentive staff in some reviews",
        "Reviews mentioning being seated without a wait on weekdays",
        "All complaints on Şikayetvar in the past year have received a business response"
      ],
      "eksiler": [
        "Inconsistent service — both 'very slow and indifferent' and 'fantastic' for the same branch",
        "Recurring hygiene and foreign-object reports on Şikayetvar's Etiler page",
        "Reviews mentioning no host greeting guests at the door",
        "Difficulty finding a table during weekend breakfast hours"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+90 212 263 70 91",
      "link": null,
      "beklemeSuresi": "Multiple sources state that during weekend breakfast hours you either need a reservation or should expect to wait; there are also reviews saying you can be seated without a wait on weekdays. Whether reservations are mandatory and a concrete wait time could not be verified, so the 'gerekiyor' (required) field was left blank.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": {
        "puan": 4.5,
        "yorumSayisi": 18,
        "incelenen": 4
      },
      "tiktok": null,
      "diger": "The Etiler branch listing on Yandex Maps (4.3/5, 137 reviews), Şikayetvar's Etiler branch page, and the Gurme Rehber and Üşengeç Şef reviews were also included in the assessment."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "da-mario-etiler",
    "isim": "Da Mario Etiler",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Etiler",
    "mutfak": [
      "Italian",
      "Pizza",
      "Mediterranean"
    ],
    "adres": "Etiler Mahallesi, Nispetiye Caddesi, Dilhayat Sokak No:7, Etiler, Beşiktaş, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Da%20Mario%2C%20Dilhayat%20Sokak%20No%3A7%2C%20Etiler%2C%20Be%C5%9Fikta%C5%9F%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0787555,
      "lng": 29.0322742
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "No reliable source giving a per-person range was found, so kisiBasi was left blank. Concrete data obtained: (1) RestaurantGuru's Etiler listing tags per-person spending at 'around ₺2,000 and up' — since the upper end is open-ended, this alone isn't enough to set a threshold; (2) menufiyati.tr's Da Mario menu list dated June 5, 2026 gives pasta dishes at ₺1,100-1,350 (Tagliatelle alla Bolognese ₺1,200, Linguine con Pomodorini ₺1,100, Spaghetti ai Frutti di Mare ₺1,350), antipasti at ₺1,200-1,350 (Burrata ₺1,350, Beef Carpaccio ₺1,200), and Lobster Tagliolini at ₺4,800 — however this source miscounts the restaurant's branches (it mentions a nonexistent 'Kalamış branch'; the official site lists only Etiler and İstinyePark), so it wasn't treated as decisive for the segment decision; (3) for comparison, in an April 2022 Gurme Rehber article on Etiler, burrata-truffle tagliolini was ₺225, Diavola pizza was ₺145, and buffalo mozzarella was ₺160; (4) the restaurant's official July 2026 menu PDF is published but its text isn't machine-readable, so prices couldn't be verified from it. Ekşi Sözlük and TripAdvisor reviews repeat the criticism 'prices are high / not worth it,' while the ₺400 average figure on the meyhankoli page is clearly outdated. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), the one verifiable per-person figure falls at the upper end of the mid-range band; a two-course dinner is likely to exceed ₺2,500, but no reliable per-person figure showing this was found."
    },
    "yemek": {
      "puan": 7.8,
      "ozet": "Only sources specific to the Etiler branch were used; the İstinyePark branch's separate TripAdvisor listing and brand-wide write-ups were excluded. For Etiler, TripAdvisor is 4.0/5 (206 reviews, ranked 1,128th out of 13,891 restaurants in Istanbul), a Google rating of 4.2/5 seen via RestaurantGuru (1,573 reviews), Foursquare 8.6/10 (1,301 reviews). In the Gault&Millau Turkey 2026 guide it holds 1 toque and 12.5/20 in the 'gourmet table' category. Praise is consistently concentrated on handmade fresh pasta, stone-oven pizza, burrata, and carpaccio; Gurme Rehber gives the Etiler branch 7.5/10 for taste. Two recurring complaints keep the score below 8: on Ekşi Sözlük, the tiramisu being found 'mostly cream' and entries criticizing the carpaccio, lasagna, and crème brûlée; on TripAdvisor, reviews asking 'is this really Italian, the food is always mediocre' and finding prices exorbitant. This fits the 7.0-7.9 band definition of 'a clear and frequently recurring weakness.'"
    },
    "neYenir": [
      {
        "yemek": "Burrata",
        "kacKisiOnerdi": null,
        "not": "Highlighted in Müdavim's Etiler review as 'generous portion and intense flavor'; Gurme Rehber's Etiler review also recommends the buffalo mozzarella/burrata starter. It's also listed at the top of the antipasti section in the restaurant's own menu."
      },
      {
        "yemek": "Linguine Asparagi e Tartufo",
        "kacKisiOnerdi": null,
        "not": "The restaurant's official website lists 'Asparagus and Truffle Linguine' among its signature dishes; the Müdavim review also recommends the same dish. It's also among the standout items on RestaurantGuru as 'asparagus truffle linguine.'"
      },
      {
        "yemek": "Tagliolini con Burrata e Tartufo",
        "kacKisiOnerdi": null,
        "not": "Gurme Rehber's Etiler article finds this dish 'quite delicious,' saying the olive oil and parmesan complete it (₺225 in April 2022). The Müdavim review also recommends the truffle-burrata taglioni."
      },
      {
        "yemek": "Dana Carpaccio",
        "kacKisiOnerdi": null,
        "not": "Highlighted as 'well-marinated' in the Müdavim review, and 'beef carpaccio' tops RestaurantGuru's list of popular items. On the other hand, there's an Ekşi Sözlük entry that didn't like the carpaccio — sources diverge on this item."
      },
      {
        "yemek": "Pizza Diavola",
        "kacKisiOnerdi": null,
        "not": "Described in Gurme Rehber's Etiler article as 'one of the favorite classics here,' emphasizing the quality of the sucuk and the dough (₺145 in April 2022). Ekşi Sözlük also praises the stone-oven pizzas, including the prosciutto e funghi."
      }
    ],
    "ambiyans": {
      "puan": 8.3,
      "ozet": "The Etiler branch is inside a villa; sources consistently describe it as 'white tablecloths, wood paneling, dim lighting, elegant but intimate.' The tree-shaded garden is separately praised in nearly every source: Müdavim specifically recommends the garden, which has a bar area in spring/summer; the restaurant's own website also highlights the garden; Ekşi Sözlük describes the dim lighting as 'quite lovely.' Gurme Rehber rates the venue 7.5/10. What keeps the score below 9 is crowding: multiple sources repeat that the venue fills up on evenings and weekends and that reservations a few days ahead are needed.",
      "etiketler": [
        "garden",
        "elegant",
        "dim",
        "villa",
        "crowded"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "family",
        "business dinner",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "Service is mostly positive across sources but there's no full consensus. A comment relayed on meyhankoli says 'service is fast, waiters are respectful and considerate'; there are Ekşi Sözlük entries finding the service successful compared to other upscale Istanbul venues; on nerdenerede, service was rated 10/10 (a single review). On the other side, TripAdvisor has complaints about service inconsistency and a price/service imbalance, and the meyhankoli summary also notes 'service quality varies among reviews.' The single complaint on Şikayetvar (January 2, 2025) was withdrawn after the business reached out to the customer — concrete evidence that complaint handling works. Because of recurring minor complaints, it sits at the lower end of the 8.0-8.9 band.",
      "artilar": [
        "Fast service and respectful staff (comments relayed on meyhankoli)",
        "Service found successful compared to upscale competitors (Ekşi Sözlük entries)",
        "The single complaint on Şikayetvar was resolved and withdrawn after business contact (January 2025)"
      ],
      "eksiler": [
        "TripAdvisor reviews criticizing service inconsistency and a price/service imbalance",
        "Drinks found particularly expensive (comments relayed on meyhankoli)",
        "Needing to reserve a few days ahead due to evening and weekend crowds"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 Gastronomy Guide — 1 toque, 12.5/20 ('gourmet table'), head chef Emre Koyucan. Verified from both Gault&Millau Turkey's own Da Mario Etiler page and the Food in Life listing covering the December 8, 2025 launch of the 2026 guide. The restaurant's own website also mentions the Ospitalità Italiana certification and three forks in the İncili Gastronomi Rehberi; since the İncili Gastronomi Rehberi's site is in maintenance mode, this second piece of information could not be independently verified. Da Mario was not found in the MICHELIN Guide Istanbul selection."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone",
        "online"
      ],
      "telefon": "+90 212 263 74 84",
      "link": null,
      "beklemeSuresi": "No statement was found saying reservations are mandatory, so 'gerekiyor' was left blank; however, recommending reservations a few days ahead for dinner and weekends is consistently repeated across Gurme Rehber, Müdavim, and venue roundups. Reservations are also recommended for the garden in spring/summer. No source giving a concrete wait time was found.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.2,
        "yorumSayisi": 1573,
        "incelenen": 0
      },
      "tripadvisor": {
        "puan": 4.0,
        "yorumSayisi": 206,
        "incelenen": 3
      },
      "tiktok": null,
      "diger": "Gault&Millau Turkey 2026 (1 toque, 12.5/20), the restaurant's official website and July 2026 menu, the Gurme Rehber and Müdavim reviews of the Etiler branch, the Ekşi Sözlük 'da mario' thread, the Şikayetvar record, meyhankoli, RestaurantGuru, and the OpenStreetMap POI record were also included in the assessment."
    },
    "fotolar": [
      {
        "dosya": "fotolar/da-mario-etiler-1.jpg",
        "alt": "Spaghetti with capers, olives, and tomatoes, served with a basket of olives and bread",
        "kaynak": "https://www.damario.com.tr/static/uploads/2026/01/bg-1.webp",
        "kredi": "Da Mario"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "hodan-nisantasi",
    "isim": "Hodan",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Nişantaşı",
    "mutfak": [
      "Modern Turkish",
      "Anatolian",
      "Chef-driven"
    ],
    "adres": "Harbiye Mahallesi, Mim Kemal Öke Caddesi No:19/A, Nişantaşı, Şişli, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hodan%2C%20Mim%20Kemal%20%C3%96ke%20Caddesi%20No%3A19%2FA%2C%20Harbiye%2C%20Ni%C5%9Fanta%C5%9F%C4%B1%2C%20%C5%9Ei%C5%9Fli%2C%20%C4%B0stanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "No source gave a per-person range, so kisiBasi was left blank; most of the price data that could be found is also undated. Verified concrete data: the Made in City guide tags the venue in the '1000+ ₺' price band; Ekşi Sözlük reviews found via search results report that dishes range ₺300-900, a single-person bill runs around ₺1,200, desserts are ₺200 each, and the brunch menu is ₺2,500 — the dates of these figures aren't stated in the reviews. TripAdvisor reviews repeat 'unbelievably high prices for very small portions' and give price/performance ratings of 4-5 out of 10. When the venue was at its former Beyoğlu address (Müdavim review), dish prices were in the ₺60-95 band; since this data doesn't reflect the current level, it's cited only for comparison. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), both the à la carte bill and the brunch menu fall into the mid-range segment; the brunch is right at the threshold, not clearly above it."
    },
    "yemek": {
      "puan": 7.5,
      "ozet": "Sources are clearly split on this restaurant. Positive side: 2 toques and 13/20 in the Gault&Millau Turkey 2026 guide (up from 1 toque, 12.5/20 in the 2025 guide — i.e. its score rose), a 4.3/5 rating (34 reviews) on the Nişantaşı listing on Yandex Maps, Gault&Millau's 'Istanbul's best brunch venue' award, and Turkish food writing consistently praising chef Çiğdem Seferoğlu's supply network with Anatolian producers. Negative side: 3.1/5 on TripAdvisor (29 reviews, ranked 5,763rd out of 9,672 restaurants in Istanbul); reviews titled 'portions are very small, bland, nothing special' and 'oily and heavy dishes'; Ekşi Sözlük giving 4-5 out of 10 for price/performance and calling the venue 'overhyped.' A significant portion of the TripAdvisor record dates to the venue's Beyoğlu period, so it may not fully reflect the new kitchen in Nişantaşı; this distinction couldn't be made. Because there's a clear and frequently recurring weakness (portion/price balance), it falls in the 7.0-7.9 band."
    },
    "neYenir": [
      {
        "yemek": "Taş Fırında Konya Küflüsü",
        "kacKisiOnerdi": null,
        "not": "Consistently mentioned as one of the signature dishes reflecting the chef's talent in the Yandex listing, Mekan Önerisi, and Müdavim reviews. In Müdavim's price list from the Beyoğlu period it was ₺75."
      },
      {
        "yemek": "Erzincan Tulumlu Çıtır Pide",
        "kacKisiOnerdi": null,
        "not": "Mentioned in the Yandex Maps listing and Turkish venue write-ups as one of the venue's two standout dishes alongside the Konya küflüsü; it's central to the 'From the Stone Oven' section of the menu."
      },
      {
        "yemek": "Çıtır Enginar",
        "kacKisiOnerdi": null,
        "not": "Gault&Millau Turkey's Hodan page counts the crispy artichoke among the venue's signature flavors; Turkish roundups also describe it as 'one of the most beloved dishes.'"
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": "The Gault&Millau Turkey page recommends the tiramisu alongside the crispy artichoke as one of two signature flavors. The Müdavim review highlights the pistachio soufflé as the dessert instead — sources diverge on the dessert recommendation."
      },
      {
        "yemek": "Ciğer ve Nohut Dürüm",
        "kacKisiOnerdi": null,
        "not": "Gazete Oksijen's brunch roundup dated July 14, 2026 specifically describes this Antep-influenced dish as taking Hodan's weekend spread beyond a classic breakfast. Only available during brunch service."
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "Ambiance is the topic sources agree on the most. During the Beyoğlu period, the garden floor of the Cezayir building was praised for its 'artworks, trees, white tablecloths' and an atmosphere 'insulated from Beyoğlu's crowds'; for the new Nişantaşı address, Indagare says 'glass-domed garden terrace,' while Oggusto says 'calm and intimate despite being in the city center' and 'a larger experience space.' Ekşi Sözlük reviews describe the garden section as resembling 'a hidden courtyard'; positive TripAdvisor reviews also mention 'a magnificent venue in the garden conservatory, contemporary art.' Gazete Oksijen's July 2026 roundup notes there's live music on weekends. The reason it's not raised to 9 is that as of August 2026 the venue is new at its new address, and independent evaluation of the new dining room is still limited.",
      "etiketler": [
        "garden",
        "calm",
        "elegant",
        "art",
        "live-music"
      ],
      "dressCode": "Smart dress recommended (Made in City guide)",
      "uygun": [
        "couples",
        "business dinner",
        "groups"
      ]
    },
    "servis": {
      "puan": 7.2,
      "ozet": "The only recurring pattern regarding service is negative: the review summary on the Yandex listing, Mekan Önerisi, and Turkish reviews found via search results all repeat 'food is delicious but service is sometimes slow.' TripAdvisor has a negative review titled 'bad customer service, small portions, high price.' On the other side, one positive TripAdvisor review calls the service quality 'excellent and top-tier,' and Yandex reviews separately praise the cocktails. Because the slowness complaint is clear and frequently repeated, it falls in the 7.0-7.9 band. No Hodan brand page could be found on Şikayetvar.",
      "artilar": [
        "Service quality found 'top-tier' in positive TripAdvisor reviews",
        "The cocktail and bar side separately praised in Yandex reviews",
        "Chef Çiğdem Seferoğlu's producer network having concrete expression in the menu and storytelling"
      ],
      "eksiler": [
        "Slow service complaint repeated across multiple sources",
        "Criticism that portions are small and all dishes arrive the same size",
        "TripAdvisor reviews citing a price/performance imbalance and 'bad customer service'"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 Gastronomy Guide — 2 toques, 13/20, chef Çiğdem Seferoğlu (ceremony dated December 8, 2025; verified from Food in Life's 2026 guide listing). It held 1 toque / 12.5/20 in the 2025 guide and won the 'Istanbul's best brunch venue' award that same year (Gault&Millau Turkey's own Hodan page). Hodan's Istanbul branch was not found in the MICHELIN Guide Istanbul selection; the brand's separate business in Bodrum, Hodan Yalıkavak, is included in the MICHELIN Guide 2026 recommended list, but since that is a separate branch it wasn't recorded here as an award."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+90 533 304 76 34",
      "link": null,
      "beklemeSuresi": "No explicit statement was found that reservations are mandatory, so 'gerekiyor' was left blank. However, the warning 'it's always crowded so it helps to book ahead' is repeated in Gazete Oksijen's July 2026 roundup, Müdavim, and the Made in City guide. No source gives a concrete wait time. Closed Monday; Tuesday-Saturday lunch 12:30-16:00 and dinner 18:00-23:00, Sunday brunch service — this schedule comes from sources dating to the Beyoğlu period and could not be verified for the new address.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": {
        "puan": 3.1,
        "yorumSayisi": 29,
        "incelenen": 3
      },
      "tiktok": null,
      "diger": "The Gault&Millau Turkey 2025 and 2026 guides, the Nişantaşı listing on Yandex Maps (4.3/5, 34 reviews), Gazete Oksijen's brunch roundup dated July 14, 2026, Oggusto's 'Istanbul's newest venues' list, the Müdavim and Mekan Önerisi reviews, the Made in City and Indagare guides, the Foursquare record, and the Ekşi Sözlük 'hodan' thread were also included in the assessment. The Google Maps rating was not used because it was only found in a source of questionable currency showing the venue's old Beyoğlu address."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "nusret-etiler",
    "isim": "Nusr-Et Steakhouse Etiler",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Etiler",
    "mutfak": [
      "Steakhouse",
      "Meat",
      "Sushi"
    ],
    "adres": "Etiler Mahallesi, Nisbetiye Caddesi No:87, Etiler, Beşiktaş, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nusr-Et%20Steakhouse%20Etiler%2C%20Nisbetiye%20Caddesi%20No%3A87%2C%20Etiler%2C%20Be%C5%9Fikta%C5%9F%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0805296,
      "lng": 29.0335554
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "No per-person range was given because the figures obtained belong to different years and don't fully corroborate each other. Verified concrete data: (1) an Etiler branch receipt that surfaced on social media on August 12, 2024 and was published by multiple news sites shows ₺16,372 for 7 people, i.e. about ₺2,339 per person; (2) Uplifers' 2025 'Etiler's best 15 restaurants' list gives Nusr-Et a per-person range of ₺1,500-2,500; (3) RestaurantGuru's Etiler listing tags per-person spending at 'around ₺2,000 and up'; (4) several independent 2026 menu lists show a single 200-gram main course at ₺2,100-2,200 (Dana Lokum ₺2,100, Dana Antrikot/ribeye ₺2,200), beef carpaccio at ₺1,250-1,450, and Tomahawk at ₺4,300-5,000 — these lists aren't official and are inconsistent with each other, so only the order of magnitude was used, not individual figures. The restaurant's own website and menu page don't publish prices; the arrangement often mentioned on Ekşi Sözlük — 'no menu given, Nusret comes to the table and narrates it like a live menu' — also makes it hard to know the price in advance. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), the 2024-2025 data sits right at the top edge of the mid-range band; the segment was set to 'expensive' based on 2026 main-course prices and the fact that even a single main course exceeds ₺2,000. This choice is not definitive since no verified 2026 per-person figure was found."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Only sources specific to the Etiler branch were used; reviews of the İstinyePark, Bebek, Galataport, and international branches, as well as complaints about the Nusr-Et Burger brand, were excluded — this distinction mattered especially on Şikayetvar, where the 36 complaints mix different brands and branches. For Etiler, a Google rating of 4.2/5 seen via RestaurantGuru (21,083 reviews), TripAdvisor 3.9/5 (2,589 reviews); 2 toques and 14/20 in the Gault&Millau Turkey 2026 guide. Praise is consistently concentrated on the tenderness and doneness of beef aged 28-30 days; Ekşi Sözlük says 'one of the best places in Turkey to eat meat,' and Trip.com reviews report the meat as 'not fatty at all, very flavorful.' What keeps it from reaching 9 is less about the food itself and more the price/performance debate and TripAdvisor's aggregate 3.9; the RestaurantGuru summary also repeats a pattern of 'quality is good but the price is a premium, try it once, don't go regularly.' This fits the 8.0-8.9 band definition of 'strong but with recurring minor complaints.'"
    },
    "neYenir": [
      {
        "yemek": "Lokum",
        "kacKisiOnerdi": null,
        "not": "The brand's signature cut of meat; the restaurant's own website lists it among the signature dishes alongside Nusr-Et Sushi and Nusr-Et Special. The Lokantalarım review describes it as 'melts in the mouth, from the inner part of the back.' Ekşi Sözlük entries also cite the bonfile/lokum duo as the standout order."
      },
      {
        "yemek": "Nusr-Et Sushi",
        "kacKisiOnerdi": null,
        "not": "A brand-specific item made from beef; the restaurant's own Etiler page lists it near the top of its signature dishes. Written as a separate item since it's a beef sushi, not fish sushi, on the menu."
      },
      {
        "yemek": "Tomahawk",
        "kacKisiOnerdi": null,
        "not": "A signature cut counted alongside Steak Tartar and Lokum in Nusr-Et's official menu presentation. Publicly shared menu lists show it as one of the most expensive items with a 600-800 gram portion; known for being carved and served tableside."
      },
      {
        "yemek": "Dana Pirzola",
        "kacKisiOnerdi": null,
        "not": "Cited among the standout cuts alongside T-Bone and Dallas in Lokantalarım's Etiler review, paired with a recommendation of Shiraz. RestaurantGuru's popular items list also mentions 'beef ribs.'"
      },
      {
        "yemek": "Altın Baklava (Golden Baklava)",
        "kacKisiOnerdi": null,
        "not": "The restaurant's own website highlights this item on the dessert side; RestaurantGuru's popular items list also ranks baklava first among desserts. The edible gold-leaf presentation is one of the brand's most talked-about touches."
      }
    ],
    "ambiyans": {
      "puan": 8.0,
      "ozet": "Sources consistently describe the venue as 'elegant and luxurious'; the Trip.com listing says 'upscale, trendy atmosphere,' and Turkish venue roundups describe Nusr-Et not just as a steakhouse but as a 'stage show' — the staff's fire show, the Salt Bae signature salting move, and high-energy service. The Etiler branch is also symbolic as the brand's birthplace (2010). What keeps it from reaching 9 is that the same showmanship backfires for some reviewers: Ekşi Sözlük entries criticize luxury cars parked at the entrance and photos with celebrities used in marketing as 'selling status,' and note that seating arrangements are problematic during busy hours.",
      "etiketler": [
        "luxury",
        "glamorous",
        "lively",
        "crowded",
        "steakhouse"
      ],
      "dressCode": null,
      "uygun": [
        "groups",
        "business dinner",
        "couples"
      ]
    },
    "servis": {
      "puan": 7.5,
      "ozet": "Service is this restaurant's most divided topic. On the positive side there are Trip.com and Turkish roundup comments like 'top-tier service, staff were very attentive,' Nusret personally coming to the table to carve the meat, and RestaurantGuru's summary emphasis on 'professional service.' On the negative side, Ekşi Sözlük entries say service isn't good, that there are particular delays with drink orders, and that service quality drops during busy hours; the RestaurantGuru summary also mentions 'occasional service hiccups.' Also, not providing a menu and prices not being clear before ordering was recorded here as a service issue independent of the price itself. The 36 complaints on Şikayetvar couldn't be separated between the Etiler branch and other branches/Nusr-Et Burger, so that source wasn't used for scoring. Because it's a clear and frequently recurring weakness, it falls in the 7.0-7.9 band.",
      "artilar": [
        "Attentive, fast, and friendly staff mentioned in Trip.com and Turkish roundups",
        "Meat carved and presented tableside, plus the Salt Bae signature salting show",
        "No valet or parking issues (Ekşi Sözlük entries)"
      ],
      "eksiler": [
        "Recurring slow drink service and declining service quality during busy hours (Ekşi Sözlük)",
        "No printed menu given; prices not clear before ordering",
        "The RestaurantGuru summary's mention of 'occasional service hiccups'",
        "Needing to book 1-2 weeks ahead for weekends"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 Gastronomy Guide — 2 toques, 14/20, chefs Nusret Gökçe and Oğuzhan Dedeoğlu (ceremony dated December 8, 2025; verified from Food in Life's 2026 guide listing, which explicitly names the 'Nusr-Et Steakhouse Etiler' branch). Nusr-Et was not found in the MICHELIN Guide Istanbul selection; it doesn't appear in the 2026 Istanbul star, Bib Gourmand, or recommended lists."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "phone",
        "online"
      ],
      "telefon": "+90 530 919 09 94",
      "link": null,
      "beklemeSuresi": "That reservations are mandatory is stated in two independent sources (the Trip.com listing says 'reservation required'; Dress Code Finder says 'reservation mandatory, a few days ahead on weekdays, 1-2 weeks ahead for weekends'). The Lokantalarım review specifically recommends reservations for weekday lunch service. The restaurant's own website has a reservation section but no directly accessible reservation URL could be verified; there's also a Nusr-Et Etiler listing on OpenTable, but since the page couldn't be opened, the link was left blank.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.2,
        "yorumSayisi": 21083,
        "incelenen": 0
      },
      "tripadvisor": {
        "puan": 3.9,
        "yorumSayisi": 2589,
        "incelenen": 0
      },
      "tiktok": null,
      "diger": "Gault&Millau Turkey 2026 (2 toques, 14/20), Nusr-Et's official Etiler page, news coverage of the August 12, 2024 Etiler receipt (Mynet and other news sites), Uplifers' 2025 Etiler list, the Lokantalarım review, the Ekşi Sözlük 'nusr-et' thread, the Trip.com listing, RestaurantGuru, and the OpenStreetMap POI record were also included in the assessment. The 36 complaints on Şikayetvar couldn't be separated by branch and brand, so they weren't used for scoring."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "sunset-grill-bar",
    "isim": "Sunset Grill & Bar",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Ulus",
    "mutfak": [
      "Mediterranean",
      "Japanese",
      "Sushi",
      "Steakhouse"
    ],
    "adres": "Kuruçeşme Mahallesi, Yol Sokak No:2, Ulus Parkı, Ulus, Beşiktaş, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sunset%20Grill%20%26%20Bar%2C%20Yol%20Sokak%20No%3A2%2C%20Ulus%20Park%C4%B1%2C%20Kuru%C3%A7e%C5%9Fme%2C%20Be%C5%9Fikta%C5%9F%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0639692,
      "lng": 29.0330189
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "No source gave a per-person range, so kisiBasi was left blank; the restaurant's own July 2026 menu PDFs on its website aren't machine-readable, so prices couldn't be taken from them. The most concrete data verified: a complaint filed on Şikayetvar on October 19, 2025 reports a bill of ₺20,291 for a table of 8, i.e. about ₺2,536 per person — and a cake fee and service charge were billed separately on top of that amount. The same complaint states the service charge was billed separately, and third-party roundups mention about a 15% service charge added to the bill. The RestaurantGuru listing tags per-person spending as 'around ₺2,000 (about 100 euros)'; since these two figures are inconsistent with each other, only the verified receipt was used. TripAdvisor has reviews titled 'Prices are extremely high' and 'Prices beyond belief'; the top25restaurants review tags the venue in the $$$$ (very expensive) band and reports a guest being billed $1,000 instead of $100 for wine, plus complaints about extra charges like ambiance and coat check. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), the verified October 2025 per-person figure of about ₺2,536 corresponds to the expensive segment."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Since Sunset has only one location, there was no branch-separation issue. Sources: included in the MICHELIN Guide Istanbul selection (not a star or Bib Gourmand), 2 toques in Gault&Millau Turkey 2026, a Google rating of 4.1/5 seen via RestaurantGuru (4,489 reviews), TripAdvisor 3.8/5 (1,510 reviews), Zomato 4.4/5 (723 reviews), Foursquare 9.1/10 (3,979 reviews); ranked 315th out of 68,798 restaurants in Istanbul on RestaurantGuru. Praise is concentrated in two areas: the section that opened in 1999 and is considered Turkey's first sushi bar, and the meats grilled over charcoal after being dry-aged in-house for 30 days; Voggia's review dated March 23, 2026 highlights the Sunset Fillet and the sushi bar, and Turkish reviews describe the beef cheek as 'the most delicious meat I've eaten.' What keeps it from reaching 9 is a clear consistency issue: the top25restaurants review says there's been serious fluctuation in portion and food quality in recent reviews, and that the miso cod gets mixed reviews; a complaint on Şikayetvar dated October 2025 reports the sushi arriving 'not fresh, stale.' This fits the 8.0-8.9 band definition of 'strong but with recurring minor complaints.'"
    },
    "neYenir": [
      {
        "yemek": "Sushi ve Sashimi Seçkisi",
        "kacKisiOnerdi": null,
        "not": "The sushi bar opened in 1999 and is cited in multiple sources as Turkey's first upscale sushi bar (Gault&Millau Turkey's page, Voggia, top25restaurants). Turkish reviews say it's 'among the places that make the best sushi.' Counter-example: a complaint on Şikayetvar dated October 19, 2025 reports the sushi arriving stale — sources diverge on this item."
      },
      {
        "yemek": "Kömür Ateşinde Dinlendirilmiş Izgara Et",
        "kacKisiOnerdi": null,
        "not": "The restaurant's own website and Voggia's March 2026 review describe the meats, aged in-house for 30 days and grilled over charcoal, as the menu's main draw. The Gault&Millau page also notes the venue began with California cuisine and a grilling tradition."
      },
      {
        "yemek": "Sunset Fillet",
        "kacKisiOnerdi": null,
        "not": "Specifically cited in Voggia's review dated March 23, 2026 as a signature dish served with asparagus and mashed potatoes."
      },
      {
        "yemek": "Dana Yanak",
        "kacKisiOnerdi": null,
        "not": "Highlighted in Turkish reviews as 'the most delicious meat I've eaten.' On the other hand, a Şikayetvar complaint claims the portion and preparation quality of signature dishes like beef cheek and duck has clearly declined — sources diverge."
      },
      {
        "yemek": "Miso Cod",
        "kacKisiOnerdi": null,
        "not": "The top25restaurants review says this dish is often featured on the menu but gets mixed reviews. Added to the recommendation list while explicitly noting it's both frequently mentioned and controversial."
      }
    ],
    "ambiyans": {
      "puan": 9.2,
      "ozet": "Ambiance is the topic sources agree on almost unanimously, and it's the venue's real asset. Atop Ulus Parkı, with a terrace overlooking the Bosphorus and the Bosphorus Bridge; the MICHELIN Guide description says 'a stunning view of the city and the Bosphorus,' top25restaurants sums it up as 'the main draw is the location' and describes a 350-seat indoor-outdoor area, and a ZAGAT quote on the restaurant's own website reads 'nothing beats this terrace over the Bosphorus on a warm, starry night.' Voggia's March 2026 review calls the venue 'a living landmark' and describes a layered evening structure of bar, main dining room, and Sunset After. The only negative side concerns seating allocation: Şikayetvar has claims of being seated in the back despite a reservation and of the door staff sorting groups by composition. This fits the 9.0-10 band definition of 'a reference point in the city in that category.'",
      "etiketler": [
        "bosphorus-view",
        "terrace",
        "fine-dining",
        "sunset",
        "bar"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "Service is both the strongest and most controversial topic at this restaurant. The strong side is official: in the MICHELIN Guide Istanbul's first selection (announced October 2022, the 2023 guide), the Service Award presented with Mastercard went to the Sunset Grill & Bar team; Michelin's reasoning cited an 'old-school' hospitality approach that makes guest comfort the absolute priority. Gault&Millau Turkey also gives the venue 'Contribution to the Industry' and 'Honor' awards. The weak side is current: two of the 7 complaints on Şikayetvar were filed on the same day, October 19, 2025, and both describe being kept standing at the bar for about 40 minutes despite a reservation, then being seated in the back; the same complaints say a guest wanting to pay the bill was ignored for a long time. The top25restaurants review also reports a guest being billed $1,000 instead of $100 for wine, and complaints about extra charges like ambiance and coat check. Because of this gap between an award-winning history and current, recurring lapses, the score was kept at the lower end of the 8.0-8.9 band.",
      "artilar": [
        "MICHELIN Guide Istanbul Service Award (2023 selection, presented with Mastercard)",
        "Gault&Millau Turkey's Contribution to the Industry and Honor awards",
        "Frequent repetition of 'service was amazing' in Turkish reviews",
        "At least one complaint on Şikayetvar marked as 'resolved'"
      ],
      "eksiler": [
        "Kept standing for ~40 minutes despite a reservation (Şikayetvar, October 19, 2025, two separate complaints)",
        "Reservation holders seated in the back and claims of sorting by group composition at the door",
        "Requests to pay the bill going unanswered for a long time (Şikayetvar, October 2025)",
        "Cake and service charges billed separately; claims of billing errors (top25restaurants)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "MICHELIN Guide Istanbul — restaurant selected in the guide. Not a star or Bib Gourmand; not in the 2026 Istanbul star and Bib Gourmand lists, but included in the recommended restaurants selection. Also the recipient of the Mastercard-presented Service Award from MICHELIN Guide Istanbul's first selection (the 2023 guide, announced October 2022); this award was verified from Michelin's own announcement and Michelin Turkey's press page."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 Gastronomy Guide — 2 toques, head chef Marios Tsouris. Scores differ between sources: Gault&Millau Turkey's own Sunset Grill & Bar page gives 14/20, while the Food in Life listing covering the 2026 guide launch gives 14.5/20. The same page also gives the venue 'Contribution to the Industry' and 'Honor' awards. The restaurant's own website also mentions Wine Spectator and Chaîne des Rôtisseurs membership; since these couldn't be independently verified, no separate award record was created."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone",
        "online",
        "email"
      ],
      "telefon": "+90 212 287 03 57",
      "link": null,
      "beklemeSuresi": "Since reservations are stated to be conditionally necessary, 'gerekiyor' was left blank: sources say 'reservations matter, especially for evenings and weekends, to get one of the good tables and enjoy the view'; top25restaurants directly says 'reservation required.' No verified source gives a concrete wait time; however, two complaints on Şikayetvar dated October 19, 2025 describe reservation holders being kept waiting at the bar for about 40 minutes. Because the reservation button on the restaurant's own website runs on JavaScript, a direct reservation URL couldn't be extracted, so the link was left blank; for groups of 15 or more, the email info@sunsetgrillbar.com is given for group menus.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.1,
        "yorumSayisi": 4489,
        "incelenen": 0
      },
      "tripadvisor": {
        "puan": 3.8,
        "yorumSayisi": 1510,
        "incelenen": 2
      },
      "tiktok": null,
      "diger": "The MICHELIN Guide Istanbul selection and 2023 Service Award announcement, the Michelin Turkey press page, Gault&Millau Turkey 2026 (2 toques), the restaurant's official website and July 2026 menu pages, Voggia's review dated March 23, 2026, the top25restaurants review, the 7 complaints on Şikayetvar (including two dated October 19, 2025), Zomato (4.4/5, 723 reviews), Foursquare (9.1/10, 3,979 reviews), Yandex Maps (4.3/5, 49 reviews), RestaurantGuru, and the OpenStreetMap POI record were also included in the assessment."
    },
    "fotolar": [
      {
        "dosya": "fotolar/sunset-grill-bar-1.jpg",
        "alt": "A cocktail served over crushed ice at the bar counter",
        "kaynak": "https://www.sunsetgrillbar.com/assets/upload/images/bar-2535f1.jpg",
        "kredi": "Sunset Grill & Bar"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "lacivert",
    "isim": "Lacivert",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Anadolu Hisarı",
    "mutfak": [
      "Seafood",
      "Mediterranean",
      "Fine Dining"
    ],
    "adres": "Anadolu Hisarı, Körfez Caddesi No:57/A, 34410 Beykoz, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Lacivert%20Restaurant%2C%20K%C3%B6rfez%20Cd.%2057/A%2C%20Anadolu%20Hisar%C4%B1%2C%20Beykoz%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0913113,
      "lng": 29.0666699
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "The restaurant's own menu ('Lacivert-Menu-Temmuz26-EN.pdf' on lacivertrestaurant.com, dated July 2026) was downloaded, but since the menu pages are prepared as images, the prices inside couldn't be read; so the official price list couldn't be used. No source gave a per-person range, so it was left blank. Verified concrete data comes from reviews: in a thread on Ekşi Sözlük devoted solely to this restaurant's bill (January 24, 2025), cacık (yogurt-cucumber dip) is reported at ₺290, eggplant salad ₺440, dessert ₺350, tea ₺80, and a glass/bottle of wine ₺480; the same thread states the combined cover charge and service fee came to about $50 and the two-person bill came to around ₺11,000, with one writer comparing the per-person cost to 100 euros. Another Ekşi Sözlük review dated October 2, 2024 states the per-person cover charge is ₺125, a 10% service fee is added to the bill, and valet is ₺300. Sources don't fully agree: restaurantguru.com tags per-person spending at ~₺2,000 (undated, an algorithmic estimate), while Wanderlog tags the price level as $$$$. A detailed list titled 'Lacivert Menu Prices 2026' was found on menufiyati.tr, but since the page cites no sources and couldn't be cross-checked against the restaurant's own menu, it wasn't used. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), the verified per-person receipt data of about ₺5,500 corresponds to the expensive segment."
    },
    "yemek": {
      "puan": 7.2,
      "ozet": "Platform ratings are good but review text is clearly split. In the table compiled by restaurantguru.com, Google is 4.3/5 (2,990 reviews), Zomato 4.4/5, Foursquare 8.8/10; TripAdvisor is notably lower at 3.9/5 (659 reviews, ranked ~600th out of 9,734 restaurants in Istanbul). It sits at the bottom rung of the Gault & Millau Turkey 2026 selection with 1 toque / 12 out of 20. On the praise side, the fish soup, grilled sea bass, and grilled octopus/calamari recur. In contrast, about 40 entries read on Ekşi Sözlük repeat, across years, phrases like 'the food is terrible,' 'a 1/10 for taste,' 'the food is mediocre, the view is a 10,' and 'small portions'; multiple writers say the venue is 'selling the view.' On the other side, a review dated May 23, 2025 says 'it really was delicious, 8/10.' This fits the 7.0-7.9 band definition of 'good, but with a clear and frequently recurring weakness.'"
    },
    "neYenir": [
      {
        "yemek": "Balık Çorbası",
        "kacKisiOnerdi": null,
        "not": "The most-mentioned item in Zomato/mekan.com review roundups; described as 'one of the best fish soups I've had.' Sources diverge on this item: a Google review read via Wanderlog says 'the fish soup didn't taste good.'"
      },
      {
        "yemek": "Levrek Külbastı",
        "kacKisiOnerdi": null,
        "not": "An Ekşi Sözlük review dated April 10, 2022 specifically recommends 'definitely try the grilled sea bass, it was wonderful.'"
      },
      {
        "yemek": "Zahmetsiz Levrek",
        "kacKisiOnerdi": null,
        "not": "An Ekşi Sözlük review dated October 2, 2024 names this item specifically and says they enjoyed it; the same review also details the cover charge and service fee."
      },
      {
        "yemek": "Izgara Ahtapot",
        "kacKisiOnerdi": null,
        "not": "An Ekşi Sözlük review dated April 1, 2025 recommends grilled octopus or calamari as a starter, saying 'it was successful in terms of taste.' Gault & Millau Turkey's restaurant page also emphasizes they cook the octopus using traditional techniques. In Google reviews read via Wanderlog, the calamari is both highly praised and, in one review, found 'undercooked.'"
      },
      {
        "yemek": "Kabak Çiçeği Dolması",
        "kacKisiOnerdi": null,
        "not": "Specifically praised in a Google review read via Wanderlog ('squash blossom stuffed'); the same review also praises the eggplant-sauce version of the fish main course."
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "Ambiance is the one topic nearly all sources agree on. The restaurant sits on the Anatolian side of the Bosphorus, right beneath the Fatih Sultan Mehmet Bridge, directly on the water; guests arriving from Rumeli Hisarı cross by the restaurant's own boat (official description and multiple Google/Ekşi reviews). Even the harshest critics on Ekşi Sözlük say 'the view is a 10' and 'some tables are a 9/10 for view'; sitting outside at sunset is specifically recommended. Two things keep it from reaching 10: the view varies noticeably from table to table, and a review dated April 10, 2022 says 'there's nothing that shows off luxury, even the restrooms are dated.'",
      "etiketler": [
        "bosphorus-view",
        "seaside",
        "terrace",
        "luxury",
        "boat-service"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner",
        "groups"
      ]
    },
    "servis": {
      "puan": 7.3,
      "ozet": "Service reviews are split in two. On the positive side, Zomato/mekan.com roundups mention 'friendly waiters,' 'service at an excellent level,' and there's service praise in a Sunday brunch review dated August 30, 2016; multiple reviews mention companies hosting foreign guests here. On the negative side there's a recurring pattern with concrete examples: the cover charge (₺125 per person), 10% service fee, and ₺300 valet fee being billed separately is criticized in many reviews as a 'forced tip'; a review dated July 6, 2021 describes valets prioritizing owners of luxury cars while an elderly couple waiting for a taxi was left standing; on April 4, 2022, not being given a second fork for a single shared dessert was a separate complaint; a review dated June 15, 2025 says the reservation phone line went unanswered for days. A 2016 review also mentions no menu being given, with dishes described verbally. Because it's a clear and recurring weakness, it falls in the 7.0-7.9 band.",
      "artilar": [
        "Free boat service departing from Rumeli Hisarı (official description and Google reviews)",
        "Friendly and attentive staff (Zomato/mekan.com review roundups)",
        "Service found 'excellent' for Sunday brunch (Ekşi Sözlük, 2016)"
      ],
      "eksiler": [
        "Cover charge (₺125 per person), 10% service fee, and ₺300 valet fee billed separately (Ekşi Sözlük, October 2024 and January 2025)",
        "Detailed complaint that the valet team discriminates among customers (Ekşi Sözlük, July 2021)",
        "Rigid conduct such as not providing a second fork for a single shared dessert (Ekşi Sözlük, April 2022)",
        "Reservation phone line going unanswered (Ekşi Sözlük, June 2025)"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault & Millau Turkey 2026 selection — 1 toque, 12 out of 20, in the 'Seafood' category. Verified from the guide's own restaurant page (gault-millau.com.tr/lacivert-3) and the 2026 award announcement page; the same page names Rıdvan Külçek as executive chef. The restaurant's Michelin status was also separately checked: in the MICHELIN Guide Turkey 2026 selection (announced December 4, 2025), it appears neither as a star, nor Bib Gourmand, nor a recommended restaurant in the guide; it doesn't appear in any of the star, Bib Gourmand, or Istanbul list roundups reviewed."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone",
        "online"
      ],
      "telefon": "+90 216 413 37 53",
      "link": "https://rezervasyon.rezervin.com/tr/lacivert",
      "beklemeSuresi": "An Ekşi Sözlük review dated April 1, 2025 says 'reservations matter, it's generally busy'; another review dated June 15, 2025 says the reservation phone line went unanswered for days. No official statement was found on whether reservations are mandatory, so 'gerekiyor' was left blank. The reservation link is the rezervin.com page given on the restaurant's own website, and it has been verified as accessible.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.3,
        "yorumSayisi": 2990,
        "incelenen": 6
      },
      "tripadvisor": {
        "puan": 3.9,
        "yorumSayisi": 659,
        "incelenen": 3
      },
      "tiktok": null,
      "diger": "The restaurant's own website and its July 2026 menu PDF, its owner D-ream's brand page, Gault & Millau Turkey's restaurant and 2026 award pages, the Ekşi Sözlük 'lacivert restaurant' and 'lacivert restaurant adisyonu' threads, Wanderlog and restaurantguru roundups, Zomato/mekan.com review summaries, the OpenStreetMap POI record, and MICHELIN Guide Turkey 2026 list roundups (to verify absence) were also included in the assessment."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "mikla",
    "isim": "Mikla",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Beyoğlu",
    "mutfak": [
      "Modern Anatolian",
      "Mediterranean",
      "Fine Dining"
    ],
    "adres": "The Marmara Pera, Meşrutiyet Caddesi No:15, 34430 Beyoğlu, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mikla%2C%20The%20Marmara%20Pera%2C%20Me%C5%9Frutiyet%20Caddesi%20No%3A15%2C%20Beyo%C4%9Flu%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0310866,
      "lng": 28.9740165
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 8500,
        "max": 10500,
        "paraBirimi": "TRY"
      },
      "not": "The range was taken directly from the restaurant's own menu page (miklarestaurant.com/menu, read in August 2026): the three-course prix fixe à la carte is ₺8,500 per person, the seven-course Mikla tasting menu is ₺10,500 per person (only for the whole table), and the vegan tasting menu is ₺9,600. The menu explicitly states VAT is included but service is not. Wine pairings are also listed at ₺3,200 (three glasses), ₺5,500, and ₺8,000; the cheese-and-honey plate is ₺2,500 for two; cocktails are ₺950-1,150. The rapid price increase can be tracked through Ekşi Sözlük entries: the tasting menu was ₺2,600 + 12% service on November 26, 2022, ₺8,000 on November 14, 2025, and ₺10,500 in August 2026. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), this range clearly falls into the expensive segment."
    },
    "yemek": {
      "puan": 8.2,
      "ozet": "Institutional reviews are strong: it retained its star in the MICHELIN Guide Turkey 2026 selection, scored 3 toques / 15 out of 20 in Gault & Millau Turkey 2026, TripAdvisor 4.2/5 (2,224 reviews, ranked ~478th out of 9,761 restaurants in Istanbul), a Google rating of 4.3/5 compiled by restaurantguru (2,686 reviews). Praise concentrates on the coherence of the tasting menu, the fish-and-bread course, the slow-cooked lamb, and the wine program (450 labels). What keeps the score below 9 is that consistency criticism recurs across years: Vedat Milor's June 16, 2018 piece in Hürriyet, titled 'mixed feelings,' finds the sea bass dry and looking frozen, the quince dessert overcooked, and the lamb shank flavorless; TripAdvisor has a review titled 'Good, but nowhere near Michelin'; an Ekşi Sözlük review dated September 3, 2025 says 'quality has really dropped, not worth going until it's fixed,' and one dated October 4, 2023 says it 'fell a notch below other Michelin restaurants in Turkey.' This fits the 8.0-8.9 band definition of 'strong but with recurring minor complaints.' Note: majority ownership of the restaurant was sold to Fenix Yapı in November 2023 and founding chef Mehmet Gürs transferred his shares; press reports say the team and system stayed the same, but some of the quality debate dates from after this point."
    },
    "neYenir": [
      {
        "yemek": "Balık Ekmek (Hamsi)",
        "kacKisiOnerdi": null,
        "not": "Stands out across three separate sources: Vedat Milor's 2018 piece praises the thin, crisp bread; the ET Food Voyage review calls it the highlight of the evening; an Ekşi Sözlük review dated December 28, 2022 says 'the creativity of the fish sandwich course was incredible.'"
      },
      {
        "yemek": "Ağır Ateşte Pişmiş Kuzu",
        "kacKisiOnerdi": null,
        "not": "Listed as 'braised lamb' on the tasting menu published in August 2026. Two separate Ekşi Sözlük users highlight it: one says '12-hour cooked lamb saddle, an amazing flavor and texture,' the other writes 'the grilled lamb was unforgettable.' The ET Food Voyage review also finds the pistachio-crusted lamb chop flawless."
      },
      {
        "yemek": "Kurutulmuş Dana Bonfile",
        "kacKisiOnerdi": null,
        "not": "A fixed item on both the prix fixe à la carte and the tasting menu (the restaurant's own menu page, August 2026). A Google review read via Wanderlog describes the dry-aged beef arriving in a 'huge' portion compared to other Michelin restaurants."
      },
      {
        "yemek": "Ayva Tatlısı",
        "kacKisiOnerdi": null,
        "not": "Sources clearly diverge on this item: Vedat Milor writes in 2018 that the quince was overcooked and turned into jam, and ET Food Voyage prefers the accompanying hazelnut ice cream over the dessert itself; in contrast, an Ekşi Sözlük review dated December 28, 2022 mentions it positively, saying they finished with the quince dessert. It doesn't appear on the August 2026 menu, so it may be seasonal."
      },
      {
        "yemek": "Yanmış Fındık Helvası",
        "kacKisiOnerdi": null,
        "not": "The closing dessert of the seven-course tasting menu published by the restaurant in August 2026. No record was found of it being separately highlighted in an independent review; the recommendation is based solely on the restaurant's own menu."
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "The venue is on the top two floors of The Marmara Pera, and the panoramic Istanbul view is the first thing nearly every source mentions. Google reviews read via Wanderlog describe the sunset as 'absolutely mesmerizing' and praise the mid-20th-century modern design of the interior; Vedat Milor also rates the ambiance and terrace positively; an Ekşi Sözlük review dated December 28, 2022 emphasizes that the venue is 'not an atmosphere place or an Instagram place, it's a real dining place.' The one recurring complaint keeping the score at 9.0 concerns table allocation: an Ekşi Sözlük review dated October 4, 2023 says view tables go to tourists and that local guests can be told 'no tables left' even with reservations made well in advance; another review says Turkish guests were a minority in the room.",
      "etiketler": [
        "rooftop",
        "panoramic-view",
        "modern",
        "bar",
        "fine-dining"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.7,
      "ozet": "Service is Mikla's most consistently strong point. Google reviews read via Wanderlog describe staff as 'attentive, courteous, and genuinely passionate'; an Ekşi Sözlük review dated December 28, 2022 says 'the hospitality, service, staff attentiveness are all excellent, I was impressed'; multiple reviews mention off-menu extras. The restaurant's own reservation rules are also transparent: cancellations must be made at least 8 hours ahead, tables are released 30 minutes after the reservation time, and allergy notes are collected in advance, all stated in writing. Two things pull the score below 9: allegations of discrimination in the allocation of view tables, and the 12% service charge added to the bill being frequently and separately criticized in reviews (the menu states service is not included).",
      "artilar": [
        "Attentive, knowledgeable, non-intrusive service (Google reviews and Ekşi Sözlük)",
        "Off-menu extras and guidance on wine pairing (Ekşi Sözlük reviews)",
        "Reservation and cancellation rules clearly stated in writing on the restaurant's own website"
      ],
      "eksiler": [
        "Recurring reviews claiming discrimination in the allocation of view tables (Ekşi Sözlük, 2023)",
        "The 12% service charge noticeably inflating the bill (Ekşi Sözlük, 2022 onward)",
        "The tasting menu can only be ordered for the whole table (the restaurant's own menu)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "MICHELIN Guide Turkey 2026 — 1 star (retained). Among the Istanbul restaurants that retained a star in the 2026 selection announced December 4, 2025; appears consistently in all four independent 2026 list roundups from Anadolu Ajansı, Türkiye Today, yemek.com, and OGGUSTO. Not two stars, not Bib Gourmand. guide.michelin.com couldn't be read directly (bot protection), but the restaurant's own website also announces the Michelin star."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault & Millau Turkey 2026 — 3 toques, 15 out of 20, in the 'Chef-driven Restaurant' category. Verified from the guide's 2026 award announcement page; the restaurant's own website also mentions the three toques and the guide's Best Manager / Best Bartender awards."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone",
        "email"
      ],
      "telefon": "+90 212 293 56 56",
      "link": "https://www.miklarestaurant.com/reservation",
      "beklemeSuresi": "The restaurant is closed Sundays and for lunch service; it opens at 18:00 in the evening, last food order is 21:30, closing is 24:00, and the bar stays open until 02:00 (the restaurant's own website). Per its own reservation rules page, cancellations must be made at least 8 hours ahead, and the table is canceled if guests haven't arrived within 30 minutes of the reservation time; groups larger than 8 are asked to call or email. No explicit statement was found that reservations are mandatory, so 'gerekiyor' was left blank.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.3,
        "yorumSayisi": 2686,
        "incelenen": 6
      },
      "tripadvisor": {
        "puan": 4.2,
        "yorumSayisi": 2224,
        "incelenen": 2
      },
      "tiktok": null,
      "diger": "Anadolu Ajansı, Türkiye Today, yemek.com, and OGGUSTO roundups on the MICHELIN Guide Turkey 2026 selection; the Gault & Millau Turkey 2026 award page; the restaurant's own menu, reservation, and reservation-rules pages; Vedat Milor's 2018 Mikla piece in Hürriyet; the ET Food Voyage review; the Ekşi Sözlük 'mikla' thread; Wanderlog and restaurantguru roundups; Gazete Oksijen's and 10Haber's 2023 ownership-change news coverage; and the OpenStreetMap POI record were also included in the assessment."
    },
    "fotolar": [
      {
        "dosya": "fotolar/mikla-1.jpg",
        "alt": "A single-portion signature dish presented on a white plate",
        "kaynak": "https://www.miklarestaurant.com/media/n03p2lla/4.webp",
        "kredi": "Mikla"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "neolokal",
    "isim": "Neolokal",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Karaköy",
    "mutfak": [
      "Modern Turkish",
      "Anatolian",
      "Fine Dining"
    ],
    "adres": "SALT Galata, Bankalar Caddesi No:11, Karaköy, 34420 Beyoğlu, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Neolokal%2C%20SALT%20Galata%2C%20Bankalar%20Caddesi%2C%20Karak%C3%B6y%2C%20Beyo%C4%9Flu%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.023932,
      "lng": 28.973497
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "The restaurant's current tasting-menu PDF on its website (neolokal_tasting_menu_tr_2026_V2_210726.pdf, uploaded July 22, 2026) was downloaded, but since the pages are prepared as images, the prices inside couldn't be read; so the 2026 price couldn't be verified and kisiBasi was left blank. Dated concrete data obtained: for 2025, the tasting menu was ₺6,100 + service per person, the vegetarian tasting menu ₺5,300 + service, wine pairings ₺4,000 and ₺5,000 (VAT included, all per person); TripAdvisor reviews also mention the ₺6,100 tasting menu. An Ekşi Sözlük review dated August 27, 2024 breaks down the tasting menu as ₺5,300 + 12% service = ₺5,936 (about $170 at that day's exchange rate); a review dated January 14, 2024 gives a two-person bill of ₺14,500 (~$500); a review dated January 8, 2023 describes the tasting menu at ₺2,100, with wines starting from a ₺9,000 band. The same reviews criticize the palate-cleansing water being billed separately. According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), these figures correspond to the expensive segment."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "A file that's very strong institutionally but clearly divided on the user side. It retained its star in the MICHELIN Guide Turkey 2026, scored 4 toques / 18 out of 20 in Gault & Millau Turkey 2026 — one of the country's top two restaurants (only behind TURK Fatih Tutak) — and the restaurant's sommelier Ersin Topkara won the Sommelier Award in the 2026 selection; sources also mention the restaurant ranking 100th on the World's 50 Best 2025 list. In contrast, platform ratings are modest for this level: a Google rating of 4.3/5 compiled by restaurantguru (1,321 reviews), TripAdvisor 4.1/5 (496 reviews). Of about 20 entries read on Ekşi Sözlük, three complaints recur: 'the tasting menu doesn't deserve the star it received,' spices and powdered garnishes overpowering the dish, and stinginess in portion/ingredients ('the ingredient quality is way too low,' 'mixed bag'). On the other side, there are also detailed reviews highly praising the lamb, prawn, and dessert course, and finding the service and menu balance flawless. This fits the 8.0-8.9 band definition of 'strong but with recurring minor complaints.'"
    },
    "neYenir": [
      {
        "yemek": "Kuzu",
        "kacKisiOnerdi": null,
        "not": "Listed as 'lamb neck' in restaurantguru's compiled list of standout dishes; an Ekşi Sözlük review dated March 7, 2023 says 'the lamb was amazing,' though the same writer liked the rest of the menu less."
      },
      {
        "yemek": "Ekşi Mayalı Ekmek ve Zeytinli Tereyağı",
        "kacKisiOnerdi": null,
        "not": "Highlighted in restaurantguru's roundup as 'sourdough bread with olive and parsley-infused butter'; even one of the most critical Ekşi Sözlük reviews says 'the butter served up front was quite nice.'"
      },
      {
        "yemek": "Karides",
        "kacKisiOnerdi": null,
        "not": "Listed as 'red prawn' in restaurantguru's roundup; an Ekşi Sözlük review dated March 7, 2023 says 'the rose-shaped dessert plate and the prawn were both really, really good.'"
      },
      {
        "yemek": "Sinkonta (Balkabağı)",
        "kacKisiOnerdi": null,
        "not": "Listed as one of the venue's signature items in restaurantguru's roundup. Sources diverge: a detailed Ekşi Sözlük review describing the tasting menu uses an unfavorable phrase for the 'pumpkin sinkonta.'"
      },
      {
        "yemek": "Kuzu Kulağı Sorbe",
        "kacKisiOnerdi": null,
        "not": "Cited as one of the menu's two standout items in an Ekşi Sözlük review dated January 25, 2023 ('the sheep sorrel sorbet and the mains were good, they stand out')."
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "The venue is inside SALT Galata in Karaköy, the historic Ottoman Bank building; its large windows and terrace offer a view of the historic peninsula. A Google review compiled by restaurantguru describes the sunset view of Sultanahmet and Hagia Sophia as 'beautiful and unforgettable'; even the harshest critic on Ekşi Sözlük says 'the physical setting is very beautiful.' The restaurant's own website states it received the NUDE Restaurant Design award. Two concrete complaints pull the score down: a review dated November 6, 2022 says 'it gets terribly loud, especially once all the tables fill up'; a review dated December 30, 2023 finds it unnecessary that a tablet and headphones are placed on the table before a dish to play a video (also noting the headphones' battery had died).",
      "etiketler": [
        "historic-building",
        "view",
        "terrace",
        "noisy",
        "fine-dining"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 7.8,
      "ozet": "Sources openly conflict on service. On the positive side, a detailed Ekşi Sözlük review finds the service team 'extremely professional and clearly well-trained,' rating the item-explanation cards presented at the table as successful; Google reviews compiled by restaurantguru include the phrase 'service was fantastic.' On the negative side there are concrete, recurring examples: a review posted after November 13, 2022 describes the welcome at the entrance and the waiters being 'excessively over-the-top, not warm' as 'a pretentiousness I didn't encounter at Mikla, Nicole, or TURK'; a review dated January 25, 2023 says food was spilled on the table from the plates and the wrong cocktail was brought; a review dated August 27, 2024 criticizes the palate-cleansing water being billed separately during the tasting menu as 'a cheap move'; a review compiled by restaurantguru reports being charged twice on a credit card. Reservations being tied to a credit-card pre-authorization also creates extra friction for some guests.",
      "artilar": [
        "Professional, well-trained service team (detailed Ekşi Sözlük review)",
        "Item-explanation cards presented tableside (Ekşi Sözlük)",
        "The restaurant's sommelier Ersin Topkara receiving the 2026 MICHELIN Guide Turkey Sommelier Award"
      ],
      "eksiler": [
        "Welcome and waiter demeanor found distant/'pretentious' (Ekşi Sözlük)",
        "Clumsiness carrying plates and a wrong cocktail served (Ekşi Sözlük, January 2023)",
        "Palate-cleansing water billed separately during the tasting menu (Ekşi Sözlük, August 2024)",
        "Report of a double credit-card charge (review compiled by restaurantguru)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "MICHELIN Guide Turkey 2026 — 1 star (retained). Among the Istanbul restaurants that retained a star in the 2026 selection announced December 4, 2025; appears consistently in all four independent 2026 list roundups from Anadolu Ajansı, Türkiye Today, yemek.com, and OGGUSTO. Not two stars, not Bib Gourmand. In the same selection, the restaurant's sommelier Ersin Topkara won the Sommelier Award. The restaurant also holds a Michelin Green Star and multiple sources state it was the first restaurant in Turkey to receive one; the Green Star is not among the newly awarded ones for 2026, it carries over from previous years. guide.michelin.com couldn't be read directly (bot protection)."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault & Millau Turkey 2026 — 4 toques, 18 out of 20 ('Prestigious Table'). Verified from the guide's own 2026 award announcement page; only TURK Fatih Tutak (18.5/20) scores higher on the list. Note: one third-party page gives the Gault & Millau score as 16/20, most likely from a previous edition; the guide's own 2026 page was taken as authoritative."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone",
        "email"
      ],
      "telefon": "+90 212 244 00 16",
      "link": "https://www.neolokal.com/#rezervasyon",
      "beklemeSuresi": "The restaurant's own Pre-Information Form states that because they operate with a limited number of tables and the tasting menu requires advance kitchen preparation, reservations are tied to a pre-authorization; arriving 30 minutes late to the reservation counts as a 'no-show.' An Ekşi Sözlük review dated January 8, 2023 says it's a venue where 'getting a reservation is very hard,' and another review dated March 25, 2025 says it's generally busy. No concrete wait time was found.",
      "kapora": {
        "var": true,
        "detay": "Per the restaurant's own Distance Sales Agreement and Pre-Information Form, an online reservation places a pre-authorization (hold) on the credit card for a 'cancellation fee' amount determined by the date/time and number of guests; the transaction is processed via Rezervem Teknoloji. The hold is released if the guest shows up as reserved. If the guest doesn't show or is more than 30 minutes late, the amount is charged and non-refundable. The right of withdrawal can be exercised up to at least 48 hours in advance for standard reservations, and at least 72 hours for special events and reservations of 7+ people. The amount itself is shown on the reservation screen and isn't published as a fixed figure in advance."
      }
    },
    "kaynaklar": {
      "google": {
        "puan": 4.3,
        "yorumSayisi": 1321,
        "incelenen": 3
      },
      "tripadvisor": {
        "puan": 4.1,
        "yorumSayisi": 496,
        "incelenen": 3
      },
      "tiktok": null,
      "diger": "The restaurant's official Turkish and English websites, its Pre-Information Form and Distance Sales Agreement, the tasting-menu PDF dated July 22, 2026, and the Rezervem reservation page; Anadolu Ajansı, Türkiye Today, yemek.com, and OGGUSTO roundups on the MICHELIN Guide Turkey 2026 selection; the Gault & Millau Turkey 2026 award page; the Ekşi Sözlük 'neolokal' thread; the restaurantguru roundup; and the Foodle record were also included in the assessment."
    },
    "fotolar": [
      {
        "dosya": "fotolar/neolokal-1.jpg",
        "alt": "Fresh spinach leaves arranged on parchment paper",
        "kaynak": "https://www.neolokal.com/wp-content/uploads/2023/01/11.01.2023_Neolokal-22820-copy.jpg",
        "kredi": "Neolokal"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "yeni-lokanta",
    "isim": "Yeni Lokanta",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Beyoğlu",
    "mutfak": [
      "Modern Turkish",
      "Anatolian",
      "Mediterranean"
    ],
    "adres": "Tomtom Mahallesi, Kumbaracı Yokuşu No:66/B, 34433 Beyoğlu, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yeni%20Lokanta%2C%20Kumbarac%C4%B1%20Yoku%C5%9Fu%2066/B%2C%20Beyo%C4%9Flu%2C%20%C4%B0stanbul",
    "koordinat": {
      "lat": 41.0295272,
      "lng": 28.9754514
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 5350,
        "max": 6500,
        "paraBirimi": "TRY"
      },
      "not": "The range was taken directly from the menu PDFs published on the restaurant's own website (downloaded August 2026): the nine-course tasting menu is ₺6,500 per person, the seven-course tasting menu is ₺5,350 per person; both must be ordered by the whole table. Wine pairing is +₺3,750 for five glasses with the nine-course menu, +₺3,150 for four glasses with the seven-course menu. À la carte items run lower: starters ₺740-880 (apple-sultana pea salad ₺740, tartare köfte ₺880, prawn on a spit ₺860), mains ₺1,950-2,300 (beef short rib with isot pepper ₺2,150, lamb ₺2,150, veal sweetbread ₺1,950, sea bass ₺2,300), desserts ₺780, homemade ice cream ₺240, cocktails ₺930. So even a starter plus a main exceeds ₺2,690 per person. The site itself notes 'menu items and prices are subject to change.' According to the owner's thresholds (cheap: under ₺750; mid-range: ₺750-2,500; expensive: over ₺2,500), both the tasting menu and a typical à la carte spend fall into the expensive segment. There are two separate Ekşi Sözlük reviews finding the prices 'normal compared to competitors of the same class and service' (2017) and 'a touch high for the experience offered' (2022)."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Among these restaurants, this is the venue with the most consistent review pattern. In the table compiled by restaurantguru, Google is 4.8/5 (2,597 reviews) — the highest Google rating among all sources reviewed — TripAdvisor 4.4/5 (593 reviews), Zomato 4.6/5. Included in the MICHELIN Guide Turkey selection, and the inspector's note says the chef's approach gives Turkish flavors 'a fresher, lighter quality.' Of 26 entries read on Ekşi Sözlük dating from 2013 to today, negative taste comments are practically nonexistent; the mantı (dumplings), sourdough bread with smoked butter, and hummus have been consistently praised the same way for over a decade. The one constructive criticism concerns the heaviness of the tasting menu: one writer says the menu leaves you 'stuffed,' and that the closing katmer (layered pastry) is unnecessarily heavy. Vedat Milor's Gurman Atlas entry calls the cooking 'an honest effort' and finds chef Civan Er's presence in the kitchen a positive, but flags ingredient quality as a limiting factor: 'even premium lamb or fish can sometimes come out bland.' Because negative reviews are nearly nonexistent, it's placed at the lower end of the 9.0-10 band. Note: reviews of the chef's London branch (Beak Street) were excluded."
    },
    "neYenir": [
      {
        "yemek": "Yeni Lokanta Mantısı",
        "kacKisiOnerdi": 7,
        "not": "Of the 26 Ekşi Sözlük entries read, seven different users recommend the mantı by name; versions with dried eggplant, meat, tahini, and ginger are each mentioned separately. On the tasting menu published by the restaurant in August 2026, 'yeni lokanta mantısı (dana/beef)' is the opening course. The 50 Best Discovery record also considers the chef's move of replacing the lamb in the mantı with dried eggplant a signature touch."
      },
      {
        "yemek": "Ekşi Mayalı Ekmek ve İsli Tereyağı",
        "kacKisiOnerdi": 4,
        "not": "Of the 26 Ekşi Sözlük entries read, four different users specifically mention the smoked butter; one writes 'I could jump from a second-floor apartment for that smoked butter,' another writes 'the mantı and smoked butter have become a classic now.'"
      },
      {
        "yemek": "Humus",
        "kacKisiOnerdi": 4,
        "not": "Of the 26 Ekşi Sözlük entries read, four different users recommend the hummus; one separately mentions the sour cherry hummus version. It recurs intermittently from the first review in 2013 through 2017."
      },
      {
        "yemek": "İsotlu Dana Kaburga",
        "kacKisiOnerdi": null,
        "not": "₺2,150 on the restaurant's own à la carte menu and the main course of the nine-course tasting menu (August 2026). An Ekşi Sözlük review dated November 7, 2022 says 'we devoured the braised beef short rib,' and a review dated June 11, 2016 highlights the 'smoked ribs' on the winter menu."
      },
      {
        "yemek": "Muhallebili Kadayıf Kızartması",
        "kacKisiOnerdi": null,
        "not": "Described on Ekşi Sözlük as 'a downright orgasmic dessert'; the 50 Best Discovery record also calls the chef's muhallebi wrapped and fried in kadayıf, served with water-buffalo-milk ice cream, pistachio, and candied orange, 'worth the trip on its own.' On the tasting menu published by the restaurant in August 2026, the dessert is listed as 'baklava roll, Boz pistachio, orange, coconut ice cream,' so today's version may have changed."
      }
    ],
    "ambiyans": {
      "puan": 8.7,
      "ozet": "Reviews spanning twelve years on Ekşi Sözlük consistently describe the venue as 'warm, intimate, and understated': on Kumbaracı Yokuşu, dimly lit, green table lamps, a dining room seating no more than 50; a detailed review describes the venue as made up of three sections — a glass-partitioned front area, the main dining room, and the back room — and notes the front section should be requested when booking. 50 Best Discovery and food writing highlight the wood-fired oven and rustic decor. One review notes the venue serves stew-style neighborhood-lunch food by day and takes on a different identity with tasting menus at night. The one recurring point keeping the score below 9 is the venue's small size and the impossibility of getting a table without a reservation in the evening.",
      "etiketler": [
        "intimate",
        "dim",
        "small",
        "simple",
        "wood-fired-oven"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Service is a topic separately and specifically praised in reviews. A detailed Ekşi Sözlük review from a guest who visited three times in 2021-2022 finds service 'far, far above the Istanbul average' and explains why: waiters fully in command of the menu, never lingering a second too long at the table, never interrupting conversation. Other reviews also say 'the service staff are wonderful'; a Google review compiled by restaurantguru mentions 'incredible attentiveness' and off-menu extras. Two things keep the score below 9: the 10% service charge added to the bill being sharply criticized in two separate reviews (one says they won't return because of it), and the repeated point that you shouldn't go without a reservation in the evening. Note: a billing error and service criticism experienced at the London branch were excluded from this assessment due to the branch separation.",
      "artilar": [
        "Service fully in command of the menu, measured, and non-intrusive (detailed Ekşi Sözlük review, 2021-2022)",
        "The cocktail program separately praised (multiple Ekşi Sözlük reviews)",
        "Off-menu extras and a warm welcome (Google review compiled by restaurantguru)"
      ],
      "eksiler": [
        "The 10% service charge added to the bill sharply criticized in two separate reviews (Ekşi Sözlük, 2021)",
        "Impossible to get a table without a reservation in the evening (Ekşi Sözlük)",
        "The tasting menu being mandatory for groups of five or more (the restaurant's own website)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "MICHELIN Guide Turkey — restaurant selected in the guide. Not a star, not Bib Gourmand: it doesn't appear in the star lists of the 2026 selection announced December 4, 2025 (Anadolu Ajansı, Türkiye Today, yemek.com, OGGUSTO roundups) nor in the Istanbul Bib Gourmand roundups; however, the restaurant has its own entry on guide.michelin.com with a published inspector's note. OGGUSTO's roundup states the restaurant first entered the guide as a 'recommended restaurant' in the 2023 selection. An Ekşi Sözlük review dated November 12, 2023 also openly questions why it hasn't received a star. guide.michelin.com couldn't be read directly (bot protection), so the absence of a star was cross-verified from four independent list roundups. Note: the restaurant's name could not be found in the Gault & Millau Turkey 2026 award list."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone",
        "email"
      ],
      "telefon": "+90 212 292 25 50",
      "link": "https://guest.rezervem.com.tr/Yeni-Lokanta",
      "beklemeSuresi": "The restaurant is open Monday-Saturday 12:00-16:00 and 17:00-00:30, Sunday 13:00-22:00 (its own website). The site's reservation page explicitly states that submissions are a 'request,' not a confirmed reservation; the tasting menu is mandatory for groups of five or more, and special-room requests are handled by email. There's an Ekşi Sözlük review saying 'a venue you should absolutely not go to in the evening without a reservation,' but there's no such warning for lunch service; since it's conditional, 'gerekiyor' was left blank. No concrete wait time was found.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 4.8,
        "yorumSayisi": 2597,
        "incelenen": 2
      },
      "tripadvisor": {
        "puan": 4.4,
        "yorumSayisi": 593,
        "incelenen": 1
      },
      "tiktok": null,
      "diger": "The restaurant's own website and the five menu PDFs downloaded from it (tasting, à la carte, dessert, cocktail); Anadolu Ajansı, Türkiye Today, yemek.com, and OGGUSTO roundups on the MICHELIN Guide Turkey 2026 selection; Vedat Milor's Gurman Atlas record; the 50 Best Discovery page; the Ekşi Sözlük 'yeni lokanta' thread; the restaurantguru roundup; the Gault & Millau Turkey 2026 award list (to verify absence); and the OpenStreetMap POI record were also included in the assessment."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "beaucoco-paris",
    "isim": "BeauCoCo Paris",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Opéra",
    "mutfak": [
      "French",
      "European"
    ],
    "adres": "1 Place Jacques Rouché, 75009 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=BeauCoCo%20Paris%2C%201%20Place%20Jacques%20Rouch%C3%A9%2C%2075009%20Paris",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "No official price list found on restaurant-beaucoco.com. RestaurantGuru (accessed Aug 2026) lists an average spend of about €100 per person, given as a single figure rather than a min-max range, so kisiBasi was left null rather than invented. TripAdvisor tags the venue at the highest price tier ($$$$). Multiple TripAdvisor reviewers (Jul 2026) explicitly say prices do not match what is served; TripAdvisor's own 'Value' subscore is the lowest of its four dimensions at 2.7/5."
    },
    "yemek": {
      "puan": 6.8,
      "ozet": "Based on 11 TripAdvisor reviews read (Jun-Aug 2026, out of 643 total, platform Food subscore 3.2/5). Recent reviews skew positive on specific dishes -- lobster linguine, octopus, tuna starter and a chicken main were each singled out as excellent by individual reviewers -- but recurring complaints exist: one reviewer (Aug 2026) called the food 'mediocre', another (Jun 2026) described a supposedly 1.2kg ribeye as 'extremely tough'. Starters were called 'ok, nothing stood out' by one reviewer even when mains were praised. The gap between the generally positive recent reviews I read and the platform-wide 3.2/5 subscore suggests inconsistency over time is a real pattern, not just recency bias."
    },
    "neYenir": [
      {
        "yemek": "Lobster linguine",
        "kacKisiOnerdi": null,
        "not": "Called 'MAGNIFICENT' by one TripAdvisor reviewer (Jul 2026) who ordered it for a birthday dinner; also listed on the Gault&Millau menu description as 'lieu jaune coco et citronnelle' style seafood pasta."
      },
      {
        "yemek": "Octopus (main course)",
        "kacKisiOnerdi": null,
        "not": "Praised alongside the lobster linguine by the same TripAdvisor reviewer (Jul 2026) as 'truly MAGNIFICENT'."
      },
      {
        "yemek": "Tuna starter",
        "kacKisiOnerdi": null,
        "not": "Specifically recommended ('recommend the tuna') by a TripAdvisor reviewer, Jul 2026."
      },
      {
        "yemek": "Croque truffé / croque monsieur canapé",
        "kacKisiOnerdi": null,
        "not": "Called 'delicious as a canapé' by a TripAdvisor reviewer (Jul 2026); also appears by name ('croque truffé') in the Gault&Millau dish description of the menu."
      },
      {
        "yemek": "Entrecôte Angus, sauce béarnaise",
        "kacKisiOnerdi": null,
        "not": "Named as a menu signature in the Gault&Millau review (fr.gaultmillau.com, accessed Aug 2026); not independently confirmed in the TripAdvisor reviews I read, so treated as menu-description evidence only."
      }
    ],
    "ambiyans": {
      "puan": 7.5,
      "ozet": "TripAdvisor Atmosphere subscore 3.2/5 (643 reviews); among the 11 reviews I read, the art-deco Palais Garnier setting (design by Corinne Sachot), live music and evening entertainment (singers, DJ) are repeatedly and enthusiastically praised ('festive', 'elegant', 'like a musical and comedy show'). The recurring negative is noise: one reviewer noted the loud music/party format meant they were seated away from the entertainment at the early sitting and recommended the post-10pm 'second sitting' for the real vibe; the official TripAdvisor AI review summary also flags that loud music can impede conversation.",
      "etiketler": [
        "historic-building",
        "lively",
        "elegant",
        "live-music",
        "noisy"
      ],
      "dressCode": "Smart and Elegant",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 6.0,
      "ozet": "TripAdvisor Service subscore 3.0/5 (643 reviews). Among the 11 reviews I read, several individual staff members are praised by name (Hugo, Quentin) for kindness even when the overall visit went badly, but repeated, serious complaints recur: a lost reservation and refusal to reseat a family (Aug 2026), a discrimination allegation over outdoor seating on a cold night (Jul 2026), and a detailed complaint (Jul 2026) that 'steps of service' were ignored -- food arriving before drinks or water, plates for different courses served simultaneously. 30-45+ minute waits for ordered wine were reported twice.",
      "artilar": [
        "Individual servers repeatedly praised by name for warmth",
        "Fast food delivery to the table once ordered"
      ],
      "eksiler": [
        "Slow drink/wine service, 30-45+ minute waits reported",
        "Reports of poor table placement and perceived favoritism toward 'VIP' tables",
        "Rude reception when handling complaints or seating requests",
        "Courses not paced/coursed correctly (multiple dishes and courses arriving together)"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau guide lists BeauCoCo (Palais Garnier, the current name of the venue previously branded 'Coco') at 11/20 with the 'Table Gourmande' designation. Verified at fr.gaultmillau.com/fr/restaurants/beau-co-co, address matches (1 Place Jacques Rouché, 75009 Paris), accessed Aug 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+33 1 42 68 86 80",
      "link": "https://www.sevenrooms.com/experiences/beaucocoparis",
      "beklemeSuresi": "No explicit statement that reservations are mandatory, but the venue runs on a SevenRooms booking system with a card guarantee, and reviews describe a distinction between an early sitting and a livelier 'second sitting' after 10pm. Reviewers report 30-45+ minute waits for drinks even with a reservation.",
      "kapora": {
        "var": true,
        "detay": "Online reservation requires a card guarantee via ADYEN (per restaurant-beaucoco.com/paris-fr/termes-et-conditions-dutilisation/). The official terms state a no-show or uncancelled reservation is charged fifty (50) euros held as guarantee."
      }
    },
    "kaynaklar": {
      "google": {
        "puan": 3.8,
        "yorumSayisi": 6206,
        "incelenen": 0
      },
      "tripadvisor": {
        "puan": 2.9,
        "yorumSayisi": 643,
        "incelenen": 11
      },
      "tiktok": null,
      "diger": "Gault&Millau (fr.gaultmillau.com) — 11/20, 'Table Gourmande'; RestaurantGuru — aggregation page citing the above Google figure and an approx. €100/person average spend."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-10"
  },
  {
    "id": "bambini-paris",
    "isim": "Bambini Paris",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Passy",
    "mutfak": [
      "Italian"
    ],
    "adres": "13 Avenue du Président Wilson, 75116 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bambini%20Paris%2C%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%2075116%20Paris",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 40,
        "max": 90,
        "paraBirimi": "EUR"
      },
      "not": "Range per RestaurantGuru (accessed Aug 2026), which states '€40 - €90' per person. Corroborated by concrete menu figures found separately: a pizza+dessert formula around €26, pasta €15-17, mains €25-29 (menu-price aggregator search results, undated). Several TripAdvisor reviewers explicitly complain about the price-to-portion ratio (e.g. a melon-and-ham starter described as 'a few grams... for 16 euros', and '70€ for two dishes, an apple juice, and a bottle of water' without dessert). Value is TripAdvisor's lowest subscore for this venue (2.3/5), so despite the €40-90 range technically spanning into 'pahali' territory at the top end, 'orta' was chosen because the RestaurantGuru range midpoint and most concrete menu prices found sit within the 30-80 band; this is a borderline call and is flagged here rather than resolved definitively."
    },
    "yemek": {
      "puan": 6.0,
      "ozet": "Based on 13 TripAdvisor reviews read (May-Aug 2026, out of 436 total; platform Food subscore 2.9/5, the lowest of the three restaurants researched). Recurring complaint: dishes served lukewarm or undercooked -- an Aug 2026 reviewer described undercooked pasta and 'lacked flavor'; a Jul 2026 reviewer's rigatoni was 'served only lukewarm'. Positive counterpoint from a May 2026 reviewer who ordered trofie with pistachio pesto and tuna linguine with lemon, both 'prepared really well', and tiramisu described as 'really amazing'. A Jul 2026 reviewer called truffle tagliatelle 'acceptable and quite tasty' but under-seasoned. Portion-for-price complaints recur independently of taste complaints."
    },
    "neYenir": [
      {
        "yemek": "Trofie with pistachio pesto",
        "kacKisiOnerdi": null,
        "not": "Praised as 'prepared really well' by one TripAdvisor reviewer (May 2026, family birthday dinner)."
      },
      {
        "yemek": "Tuna linguine with lemon",
        "kacKisiOnerdi": null,
        "not": "Praised by the same reviewer as the trofie above (May 2026 TripAdvisor review)."
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": "Called 'really amazing' in the same May 2026 review; also appears repeatedly in complaint reviews as the dish guests waited unusually long for, which independently confirms it is a frequently-ordered item."
      },
      {
        "yemek": "Truffle tagliatelle",
        "kacKisiOnerdi": null,
        "not": "Described as the most expensive dish on the menu and 'acceptable and quite tasty, although... could have been seasoned more' by a Jul 2026 TripAdvisor reviewer."
      },
      {
        "yemek": "Rigatoni",
        "kacKisiOnerdi": null,
        "not": "One of the restaurant's most-mentioned dishes (TripAdvisor 'popular mentions' tag), but two separate TripAdvisor reviewers (Jun-Aug 2026) specifically reported it arriving undercooked or lukewarm -- included here because it is clearly a signature order, with the quality caveat noted."
      }
    ],
    "ambiyans": {
      "puan": 7.6,
      "ozet": "TripAdvisor Atmosphere subscore 3.5/5 (436 reviews), the best of the four TripAdvisor dimensions for this venue. Among the 13 reviews I read, the terrace and Eiffel Tower view are praised repeatedly and even mentioned favorably by reviewers who were otherwise critical of food or service (e.g. 'one extra point for the location with a view of the tower'). One Jul 2026 reviewer said the promised view 'is not there' from their table, and the TripAdvisor AI summary notes the outdoor seating 'did feel a bit crowded at times'.",
      "etiketler": [
        "view",
        "terrace",
        "calm",
        "crowded"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups",
        "solo"
      ]
    },
    "servis": {
      "puan": 5.5,
      "ozet": "TripAdvisor Service subscore 2.9/5 (436 reviews). Among the 13 reviews I read, wait times are the dominant and most severe complaint: two separate Jun 2026 reviewers reported roughly 1-1.5 hour waits for a single tiramisu and a plain carafe of water. A May 2026 reviewer describes being refused a lunch reservation for two starters because the restaurant enforces a minimum of one main dish per person. A May 2026 review documents a mishandled accessibility request for a wheelchair user (contradictory information about step-free access, staff moving the wheelchair without consent). A Jun 2026 reviewer specifically felt foreign/international guests were treated worse than others.",
      "artilar": [
        "Staff described as friendly once seated (multiple reviews)",
        "Service quality reported to improve over the course of a longer visit (Jun 2026 review)"
      ],
      "eksiler": [
        "Very long waits reported for simple items -- up to ~1.5 hours for water or a single dessert",
        "Mandatory 'one main course per person' policy turns away guests wanting only starters",
        "One documented case of a poorly handled wheelchair-accessibility request",
        "Reports that plates are cleared or dishes rushed out before guests are ready"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Listed with a written review on the Gault&Millau guide (fr.gaultmillau.com/en/restaurants/bambini, accessed Aug 2026), but no numeric score/toque is shown on that listing -- treated as guide inclusion only, not a scored rating."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone",
        "email"
      ],
      "telefon": "+33 1 40 70 86 08",
      "link": "https://www.sevenrooms.com/reservations/bambiniparis",
      "beklemeSuresi": "Reservations run through SevenRooms with a card guarantee; contact email contact@bambini-paris.com confirmed via the Palais de Tokyo's own venue page. One reviewer (May 2026) reports being refused a lunch table without ordering a full main course per person. No explicit statement found that reservations are strictly mandatory.",
      "kapora": {
        "var": true,
        "detay": "Official terms of service (bambini-restaurant.com/paris-fr/termes-et-conditions-dutilisation/) state a no-show or uncancelled reservation guaranteed by card is charged fifty (50) euros. Corroborated by a May 2026 TripAdvisor review describing a bank-card imprint with a stated €50-per-person cancellation charge for a group booking."
      }
    },
    "kaynaklar": {
      "google": {
        "puan": 3.8,
        "yorumSayisi": 4489,
        "incelenen": 0
      },
      "tripadvisor": {
        "puan": 2.7,
        "yorumSayisi": 436,
        "incelenen": 13
      },
      "tiktok": null,
      "diger": "Gault&Millau (fr.gaultmillau.com) — listed, no numeric score; RestaurantGuru — aggregation page citing the above Google figure and the €40-90/person range; Palais de Tokyo official venue page (palaisdetokyo.com/en/bambini) — address, phone, hours."
    },
    "fotolar": [
      {
        "dosya": "fotolar/bambini-paris-1.jpg",
        "alt": "Interior dining room of Bambini restaurant at the Palais de Tokyo, Paris, with terracotta decor and a tall arched window",
        "kaynak": "https://commons.wikimedia.org/wiki/File:Restaurant_bambini.jpg",
        "kredi": "Morgzinzin, CC0, via Wikimedia Commons"
      }
    ],
    "sonGuncelleme": "2026-08-10"
  },
  {
    "id": "entrecote-de-paris-1974",
    "isim": "L'Entrecôte de Paris 1974",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Champs-Élysées",
    "mutfak": [
      "French",
      "Steakhouse"
    ],
    "adres": "29 Rue de Marignan, 75008 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=L%27Entrec%C3%B4te%20de%20Paris%2C%2029%20Rue%20de%20Marignan%2C%2075008%20Paris",
    "koordinat": {
      "lat": 48.8695103,
      "lng": 2.306366
    },
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": {
        "min": 20,
        "max": 30,
        "paraBirimi": "EUR"
      },
      "not": "Range per RestaurantGuru (accessed Aug 2026): '€20 - €30' per person. Directly corroborated by a concrete, dated data point: a Jun 2026 TripAdvisor reviewer paid €26.50 for the full formule (steak, sauce, fries, walnut salad); a children's menu with drink and dessert is separately cited at €11 (undated menu-aggregator search result). Chosen segment 'ucuz' because the whole verified range sits at or under the ~€30/person threshold given for this project, even though TripAdvisor's own coarse price-tier symbol shows $$-$$$ (a relative, not absolute, scale)."
    },
    "yemek": {
      "puan": 7.8,
      "ozet": "Based on 15 TripAdvisor reviews read (May-Aug 2026, out of 1,748 total; platform Food subscore 3.7/5, the highest of the three restaurants researched). Strongly and repeatedly praised: 10 of the 15 reviews I read explicitly recommend the steak-frites-sauce combination ('excellent meat', 'the famous sauce, and the fries make a perfect combination', 'my most favourite restaurant in Paris'). Two reviews were clearly negative on food quality (one called the meat 'not good quality and... porly cooked', another said the signature Café-de-Paris-style sauce was 'the worst... I had in my hole life' while calling the meat itself fine). One reviewer (Jun 2026) who visited expecting the original/older 'Le Relais de l'Entrecôte' realized this is a different, later (1974) establishment, but rated the food, service and atmosphere here as being on par regardless."
    },
    "neYenir": [
      {
        "yemek": "Entrecôte steak with secret sauce and fries",
        "kacKisiOnerdi": 9,
        "not": "The restaurant's single main dish. Recommended explicitly in 9 of the 15 TripAdvisor reviews I read (Aug 2026 read-through) -- e.g. 'excellent meat, accompanied by fries... the quantity... will not lead to any frustration'; 'the quality of the meat, the famous sauce, and the fries make a perfect combination'."
      },
      {
        "yemek": "Walnut salad (starter)",
        "kacKisiOnerdi": null,
        "not": "Part of the fixed formule; specifically praised as 'a good salad sprinkled with walnuts' by one reviewer (Aug 2026) and mentioned alongside the steak by a second (Jun 2026)."
      },
      {
        "yemek": "French onion soup",
        "kacKisiOnerdi": null,
        "not": "Alternative starter, called 'really good' by one TripAdvisor reviewer (Jun 2026); also listed on the official menu (lentrecotedeparis.fr)."
      },
      {
        "yemek": "Crème brûlée (from the dessert cart)",
        "kacKisiOnerdi": null,
        "not": "Mentioned as 'good' by one reviewer (Jul 2026); the official site describes desserts as presented tableside on a cart, but I could not find more than this single review naming a specific dessert."
      },
      {
        "yemek": "Mixed steak platter (for sharing)",
        "kacKisiOnerdi": null,
        "not": "A family-style version of the same steak/sauce/fries described as 'generous mixed platters of perfectly cooked meat' by one reviewer (May 2026 TripAdvisor review, family visit)."
      }
    ],
    "ambiyans": {
      "puan": 7.2,
      "ozet": "TripAdvisor Atmosphere subscore 3.3/5 (1,748 reviews). Described consistently as a classic, bustling Parisian brasserie with art nouveau mirrors and Mucha-style posters (per general restaurant descriptions found in search results); reviews I read call it 'very Parisian', 'lively yet relaxed', and one business-trip reviewer called it a 'classic French spot... simple but interesting'. The main friction point is not the room itself but getting into it: since the restaurant takes no reservations, reviewers describe queuing, and one reviewer (May 2026) specifically complained about unfair queue management ('they keep picking people up from behind').",
      "etiketler": [
        "classic",
        "lively",
        "casual"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "TripAdvisor Service subscore 3.6/5 (1,748 reviews), the highest of the three restaurants researched. Among the 15 reviews I read, service is praised far more consistently than at the other two venues: 'the service was top notch, fine dining attention', 'truly exceptional... friendly, warm, helpful, and attentive', 'quality service with attentive staff', one reviewer even named and thanked the manager by name (Jun 2026). The only recurring negative theme is not about table service but about queue fairness for walk-ins (no reservations are taken at all).",
      "artilar": [
        "Warm, attentive table service repeatedly praised across many independent reviews",
        "Fast seating and table turnover reported despite high demand",
        "Staff praised by name in at least one review"
      ],
      "eksiler": [
        "No reservation system at all, so entry depends entirely on the walk-in queue",
        "One reviewer (May 2026) reported the queue being managed unfairly, with some guests seated out of arrival order"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": false,
      "yontem": [],
      "telefon": "+33 1 42 25 28 60",
      "link": null,
      "beklemeSuresi": "The restaurant does not accept reservations at all ('Nous ne prenons pas de réservation', official site lentrecotedeparis.fr). Service is continuous through the day. Secondary sources describe queuing outside and recommend arriving 40-60 minutes before opening at peak times; one TripAdvisor reviewer (May 2026) complained the queue is not managed fairly.",
      "kapora": null
    },
    "kaynaklar": {
      "google": {
        "puan": 3.9,
        "yorumSayisi": 7301,
        "incelenen": 0
      },
      "tripadvisor": {
        "puan": 3.4,
        "yorumSayisi": 1748,
        "incelenen": 15
      },
      "tiktok": null,
      "diger": "RestaurantGuru (restaurantguru.com/Entrecote-de-Paris-Paris, accessed Aug 2026) — aggregation page citing the above Google figure and the €20-30/person range; official site lentrecotedeparis.fr — address, phone, hours, no-reservation policy. No Michelin Guide or Gault&Millau listing could be found for this specific address, so oduller is left empty."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-10"
  },
  {
    "id": "diverxo",
    "isim": "DiverXO",
    "ulke": "Spain",
    "sehir": "Madrid",
    "semt": "Chamartín",
    "mutfak": [
      "Creative",
      "Fine Dining",
      "Asian Fusion",
      "Spanish"
    ],
    "adres": "C. del Padre Damián, 23, Chamartín, 28036 Madrid, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=DiverXO%2C%20C.%20del%20Padre%20Dami%C3%A1n%2023%2C%2028036%20Madrid",
    "koordinat": {
      "lat": 40.4578,
      "lng": -3.68595
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Luxury tasting-menu restaurant at the very top of Madrid's price range. No verified current menu price was recorded, so no exact amount is given (owner-curated entry, Aug 2026)."
    },
    "yemek": {
      "puan": 9.8,
      "ozet": "Dabiz Muñoz's three-MICHELIN-star restaurant is one of Madrid's most unusual gastronomic experiences. The MICHELIN Guide describes a highly creative cuisine combining Spanish ingredients with techniques and influences from Asia, Mexico and beyond. Guest reviews praise not only flavor but creativity, surprise and theatrical presentation; the tasting menu is designed as a progression of unexpected combinations, textures and ideas rather than familiar comfort dishes. Owner-curated summary (Aug 2026) based on the MICHELIN Guide, official sources and recent fine-dining reviews."
    },
    "neYenir": [
      {
        "yemek": "Flying Pigs Cuisine tasting menu",
        "kacKisiOnerdi": null,
        "not": "The restaurant's single long-format tasting experience."
      },
      {
        "yemek": "Galician lobster",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Drunken crabs",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Minutejo del Agus",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal seafood preparations",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.3,
      "ozet": "Rather than a traditional white-tablecloth Michelin dining room, DiverXO feels theatrical, provocative and experience-driven; the visual language follows the food — exaggerated, playful and unconventional. Works for a romantic dinner, but its strongest category is a full gastronomic experience or major special occasion.",
      "etiketler": [
        "avant-garde",
        "theatrical",
        "luxury",
        "creative",
        "special-occasion"
      ],
      "dressCode": "Smart / upscale recommended",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.5,
      "ozet": "Service is part of the tasting-menu experience rather than plain table service: the team guides guests through a long sequence of dishes and presentations. Fine-dining reviews describe the staff as professional, warm and playful while keeping the precision expected at this level.",
      "artilar": [
        "Highly coordinated tasting-menu service",
        "Detailed explanations of dishes",
        "Professional but less rigid than traditional luxury restaurants",
        "Staff interaction contributes to the theatrical experience"
      ],
      "eksiler": [
        "Very long dining experience",
        "Not ideal for guests looking for a quick or casual dinner",
        "The highly choreographed style may feel excessive to diners who prefer simplicity"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "Three MICHELIN stars — per the MICHELIN Guide's current selection; recorded from the site owner's curated notes citing the MICHELIN Guide (Aug 2026)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+34 915 70 07 66",
      "link": null,
      "beklemeSuresi": "Booking well in advance through the official online reservation system is strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): MICHELIN Guide, official DiverXO/Dabiz Muñoz sources, TripAdvisor, selected recent fine-dining reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [
      {
        "dosya": "fotolar/diverxo-1.jpg",
        "alt": "Illuminated DiverXO entrance sign at night at its location inside the NH Collection Eurobuilding hotel, Madrid",
        "kaynak": "https://commons.wikimedia.org/wiki/File:DiverXO_AV4A3445-Edit_(27539833998).jpg",
        "kredi": "City Foodsters, CC BY 2.0, via Wikimedia Commons"
      }
    ],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "botin",
    "isim": "Botín",
    "ulke": "Spain",
    "sehir": "Madrid",
    "semt": "Centro",
    "mutfak": [
      "Traditional Spanish",
      "Castilian"
    ],
    "adres": "C. de Cuchilleros, 17, Centro, 28005 Madrid, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Bot%C3%ADn%2C%20C.%20de%20Cuchilleros%2017%2C%2028005%20Madrid",
    "koordinat": {
      "lat": 40.41417,
      "lng": -3.70798
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 30,
        "max": 70,
        "paraBirimi": "EUR"
      },
      "not": "Approximately €30–70 per person depending on dishes and drinks (owner-curated estimate, Aug 2026)."
    },
    "yemek": {
      "puan": 8.5,
      "ozet": "Botín's food identity is traditional Castilian oven cooking: the signature cochinillo asado (roast suckling pig) comes from the restaurant's historic wood-fired oven, with roast lamb as the other core specialty. Reviews are more divided than at Madrid's top fine-dining rooms — many visitors consider the roasts excellent, while others feel the global fame owes as much to history and atmosphere as to the food. Included as a Madrid institution, not presented as the city's best plate of food. Owner-curated summary (Aug 2026)."
    },
    "neYenir": [
      {
        "yemek": "Cochinillo asado",
        "kacKisiOnerdi": null,
        "not": "The signature dish — roast suckling pig from the historic wood-fired oven."
      },
      {
        "yemek": "Cordero asado",
        "kacKisiOnerdi": null,
        "not": "Roast lamb, the other core specialty."
      },
      {
        "yemek": "Sopa de ajo",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Jamón Ibérico",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Traditional Spanish desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.4,
      "ozet": "Atmosphere is one of Botín's biggest strengths: historic dining rooms, stone walls, the old oven and cellar-like spaces create a strong sense of traditional Madrid. It feels like a historic institution rather than a contemporary restaurant — a major part of why travelers seek it out.",
      "etiketler": [
        "historic-building",
        "traditional",
        "rustic",
        "touristic",
        "classic"
      ],
      "dressCode": "No strict formal dress code; smart casual works well",
      "uygun": [
        "family",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.3,
      "ozet": "Botín handles a very high volume of international visitors, so service is less personal than at a small fine-dining restaurant. Many guests still describe the team as experienced and friendly, and staff may explain parts of the restaurant's history; at peak periods the experience can feel more structured and touristic.",
      "artilar": [
        "Experienced staff",
        "Strong familiarity with international guests",
        "Helpful explanations of traditional dishes",
        "The historic-restaurant experience is woven into the service"
      ],
      "eksiler": [
        "Can feel busy and tourist-oriented",
        "Less personal during peak hours",
        "Table turnover and crowd levels may affect the experience"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+34 913 66 42 17",
      "link": null,
      "beklemeSuresi": "Reservation recommended, especially for dinner and busy travel periods.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Botín sources, TripAdvisor, recent Madrid traveler reviews, historical restaurant references. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [
      {
        "dosya": "fotolar/botin-1.jpg",
        "alt": "Facade and entrance of Sobrino de Botín (Casa Botín) on Calle de Cuchilleros, Madrid, the world's oldest continuously operating restaurant",
        "kaynak": "https://commons.wikimedia.org/wiki/File:Casa_Bot%C3%ADn_1.jpg",
        "kredi": "Esetena, Public Domain, via Wikimedia Commons"
      }
    ],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "sala-de-despiece-1",
    "isim": "Sala de Despiece 1",
    "ulke": "Spain",
    "sehir": "Madrid",
    "semt": "Chamberí",
    "mutfak": [
      "Modern Spanish",
      "Seafood",
      "Meat"
    ],
    "adres": "C. de Alonso Cano, 28, Chamberí, 28003 Madrid, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sala%20de%20Despiece%2C%20C.%20de%20Alonso%20Cano%2028%2C%2028003%20Madrid",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 40,
        "max": 90,
        "paraBirimi": "EUR"
      },
      "not": "Approximately €40–90 per person depending on dishes and drinks (owner-curated estimate, Aug 2026). The top of the range reaches into high-end territory; 'orta' chosen for the typical order."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "A strong choice for Spanish ingredients presented in a much more modern, playful format: seafood, meat, raw or minimally manipulated products and sharing plates. It sits usefully between traditional Madrid restaurants and tasting-menu destinations — more contemporary than Botín, less formal and far less expensive than DiverXO. Presentation and ingredient quality are a major part of the appeal. Owner-curated summary (Aug 2026)."
    },
    "neYenir": [
      {
        "yemek": "Tuna preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Beef / steak preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seafood dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tomato-based dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature sharing plates",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "Industrial visual language inspired by a butcher's cutting room: stainless surfaces, packaging references and a lively counter-style atmosphere make the space feel deliberately unconventional — trendy and energetic rather than romantic or formal.",
      "etiketler": [
        "industrial",
        "trendy",
        "lively",
        "experimental"
      ],
      "dressCode": "Casual / smart casual",
      "uygun": [
        "groups",
        "couples"
      ]
    },
    "servis": {
      "puan": 8.5,
      "ozet": "Energetic, informal service matching the sharing concept: staff focus on explaining the unusual preparations and keeping dishes moving at a lively pace. Intentionally social rather than ceremonial.",
      "artilar": [
        "Energetic service style",
        "Good fit for sharing dishes",
        "Staff can explain unusual preparations",
        "Less formal and intimidating than Michelin-style dining"
      ],
      "eksiler": [
        "Busy atmosphere can make service feel fast",
        "Not ideal for a quiet or highly formal meal",
        "Peak periods may feel crowded"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+34 919 59 06 03",
      "link": null,
      "beklemeSuresi": "Reservation recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official restaurant sources, TripAdvisor, recent Madrid dining reviews, selected food-media references. Note: OpenStreetMap pins 'Sala de Despiece' at Calle de Ponzano 11 (the original); this entry uses the owner-provided Alonso Cano 28 address, so coordinates are left null pending branch confirmation."
    },
    "fotolar": [
      {
        "dosya": "fotolar/sala-de-despiece-1-1.jpg",
        "alt": "Interior view of Sala de Despiece restaurant, Madrid",
        "kaynak": "https://commons.wikimedia.org/wiki/File:Sala_de_Despiece_Restaurant_(28895584653).jpg",
        "kredi": "Nan Palmero, CC BY 2.0, via Wikimedia Commons"
      }
    ],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "disfrutar",
    "isim": "Disfrutar",
    "ulke": "Spain",
    "sehir": "Barcelona",
    "semt": "Eixample",
    "mutfak": [
      "Creative",
      "Mediterranean",
      "Fine Dining",
      "Spanish"
    ],
    "adres": "Carrer de Villarroel, 163, Eixample, 08036 Barcelona, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Disfrutar%2C%20Carrer%20de%20Villarroel%20163%2C%2008036%20Barcelona",
    "koordinat": {
      "lat": 41.38776,
      "lng": 2.15317
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive tasting-menu restaurant. No verified current official menu price was recorded, so no exact amount is given (owner-curated entry, Aug 2026)."
    },
    "yemek": {
      "puan": 9.9,
      "ozet": "Run by Oriol Castro, Eduard Xatruch and Mateu Casañas — all former members of Ferran Adrià's elBulli team — Disfrutar holds three MICHELIN stars and builds on highly technical, creative Mediterranean cuisine. Dishes play with shape, texture, temperature and expectation while preserving recognizable flavors; tasting-menu formats include Classic and Festival. Reviews consistently emphasize creativity, precision and the sense of a carefully designed progression. Owner-curated summary (Aug 2026)."
    },
    "neYenir": [
      {
        "yemek": "Classic tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Multi-spherical pesto with smoked eel and pistachio",
        "kacKisiOnerdi": null,
        "not": "One of the restaurant's signature technical dishes."
      },
      {
        "yemek": "Signature solid bubbles",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal Festival menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Living Table Experience",
        "kacKisiOnerdi": null,
        "not": "Only if separately available and reserved."
      }
    ],
    "ambiyans": {
      "puan": 9.4,
      "ozet": "The dining room is more restrained than the food: modern, Mediterranean, bright and relatively minimal, letting the dishes remain the main visual focus. Compared with DiverXO it feels calmer and more architectural rather than theatrical.",
      "etiketler": [
        "modern",
        "simple",
        "creative",
        "fine-dining",
        "special-occasion"
      ],
      "dressCode": "Smart casual / upscale recommended",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.6,
      "ozet": "Highly polished service carefully synchronized with the tasting menu; guests are guided through technical dishes without excessive formality. Reviews frequently praise the team's knowledge, warmth and precision — timing and explanation matter especially in a meal with this many courses.",
      "artilar": [
        "Excellent knowledge of the menu",
        "Precise tasting-menu pacing",
        "Clear explanation of complex preparations",
        "Warm service despite the restaurant's elite status"
      ],
      "eksiler": [
        "Very long meal",
        "The price creates very high expectations",
        "Not suitable for a spontaneous or casual meal"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "Three MICHELIN stars — per the MICHELIN Guide's current selection; recorded from the site owner's curated notes citing the MICHELIN Guide (Aug 2026)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+34 933 48 68 96",
      "link": null,
      "beklemeSuresi": "Booking far in advance is strongly recommended; a waitlist may be necessary.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): MICHELIN Guide, official Disfrutar sources, TripAdvisor, recent fine-dining reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [
      {
        "dosya": "fotolar/disfrutar-1.jpg",
        "alt": "Storefront window of Disfrutar restaurant at night, showing its distinctive colorful checkerboard tile facade, Carrer de Villarroel, Barcelona",
        "kaynak": "https://commons.wikimedia.org/wiki/File:Disfrutar.jpg",
        "kredi": "Pere prlpz, CC BY-SA 3.0, via Wikimedia Commons"
      }
    ],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "compartir-barcelona",
    "isim": "Compartir Barcelona",
    "ulke": "Spain",
    "sehir": "Barcelona",
    "semt": "Eixample",
    "mutfak": [
      "Mediterranean",
      "Spanish",
      "Creative"
    ],
    "adres": "Carrer de València, 225, Eixample, 08007 Barcelona, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Compartir%20Barcelona%2C%20Carrer%20de%20Val%C3%A8ncia%20225%2C%2008007%20Barcelona",
    "koordinat": {
      "lat": 41.3912,
      "lng": 2.16109
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Expensive (owner-curated entry, Aug 2026); no verified per-person range recorded."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "From the same chef team behind Disfrutar — Oriol Castro, Eduard Xatruch and Mateu Casañas — but considerably more relaxed. 'Compartir' means 'to share': the menu is structured around dishes designed for the table rather than a formal tasting sequence, combining modern technique with Mediterranean and Spanish flavors. Guest reviews frequently highlight the seafood, tuna and brioche preparations. Owner-curated summary (Aug 2026)."
    },
    "neYenir": [
      {
        "yemek": "Tuna cannelloni",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Razor clams",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Brioche / tartare preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Whole fish or sea bass",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lobster",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sharing-style desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "Modern, spacious Mediterranean look, noticeably more social than Disfrutar. The design supports the sharing concept: stylish enough for a special dinner, but less formal and well suited to a lively meal with friends.",
      "etiketler": [
        "modern",
        "sharing",
        "elegant"
      ],
      "dressCode": "Smart casual",
      "uygun": [
        "groups",
        "couples"
      ]
    },
    "servis": {
      "puan": 8.6,
      "ozet": "Generally warm and professional, but reviews are somewhat more mixed than at Disfrutar: some guests report excellent guidance through the sharing menu, others mention pacing or table-management inconsistencies at busy times — which is why the service score sits slightly below the food score.",
      "artilar": [
        "Good guidance on how much food to order",
        "Friendly and professional style",
        "Works well with the sharing concept",
        "Knowledgeable about the menu"
      ],
      "eksiler": [
        "Some reports of inconsistent pacing",
        "Busy periods can affect table management",
        "Expectations run high relative to the price"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+34 936 24 78 86",
      "link": null,
      "beklemeSuresi": "Reservation recommended — often effectively required during popular dinner periods.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Compartir Barcelona sources, TripAdvisor, chef-team references, recent diner reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "can-culleretes",
    "isim": "Can Culleretes",
    "ulke": "Spain",
    "sehir": "Barcelona",
    "semt": "Ciutat Vella",
    "mutfak": [
      "Catalan",
      "Traditional Spanish",
      "Mediterranean"
    ],
    "adres": "Carrer d'en Quintana, 5, Ciutat Vella, 08002 Barcelona, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Can%20Culleretes%2C%20Carrer%20d%27en%20Quintana%205%2C%2008002%20Barcelona",
    "koordinat": {
      "lat": 41.38121,
      "lng": 2.17442
    },
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": {
        "min": 20,
        "max": 30,
        "paraBirimi": "EUR"
      },
      "not": "Approximately €20–30 per person depending on dishes and drinks (owner-curated estimate, Aug 2026)."
    },
    "yemek": {
      "puan": 8.1,
      "ozet": "Represents the traditional side of Barcelona — classic Catalan cooking rather than modern gastronomy: traditional stews, cannelloni, roast meats, fish dishes and Catalan desserts form the core. Reviews are noticeably more divided than at Barcelona's elite restaurants, so it is presented as a historic local experience rather than one of the city's strongest purely gastronomic destinations. Owner-curated summary (Aug 2026)."
    },
    "neYenir": [
      {
        "yemek": "Escudella catalana",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Canelons",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Roast meats",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Catalan-style fish dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Crema Catalana",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "History and atmosphere are among the restaurant's strongest qualities: traditional dining rooms and an old-Barcelona aesthetic give a sense of continuity newer restaurants cannot reproduce — which is why the ambiance score is intentionally higher than the food score.",
      "etiketler": [
        "historic-building",
        "traditional",
        "classic",
        "local"
      ],
      "dressCode": "No strict dress code; casual / smart casual",
      "uygun": [
        "family",
        "groups"
      ]
    },
    "servis": {
      "puan": 7.9,
      "ozet": "Service reviews are mixed: some diners appreciate the traditional, straightforward style and experienced staff, while others report inconsistencies at busy times. Presented realistically rather than romanticized for its history.",
      "artilar": [
        "Traditional restaurant service",
        "Staff familiar with classic Catalan dishes",
        "Suitable for families and groups",
        "Straightforward, non-formal experience"
      ],
      "eksiler": [
        "Service quality can vary during busy periods",
        "Some reviews mention slow or inconsistent attention",
        "Less polished than contemporary fine-dining restaurants"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+34 933 17 30 22",
      "link": null,
      "beklemeSuresi": "Reservation recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Can Culleretes sources, TripAdvisor, recent Barcelona dining reviews, historical references. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [
      {
        "dosya": "fotolar/can-culleretes-1.jpg",
        "alt": "Entrance of Can Culleretes on Carrer d'en Quintana, Barcelona, the oldest restaurant in Barcelona (established 1786)",
        "kaynak": "https://commons.wikimedia.org/wiki/File:Barcelona_-_entrance_of_Can_Culleretes_01.jpg",
        "kredi": "Joe Mabel, CC BY-SA 4.0, via Wikimedia Commons"
      }
    ],
    "sonGuncelleme": "2026-08-11"
  }
];
