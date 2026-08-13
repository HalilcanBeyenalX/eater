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
      "not": "Mid-range on paper, but expect bread, water and a service charge billed separately on top."
    },
    "yemek": {
      "puan": 8.6,
      "ozet": "A Bib Gourmand pick beloved for its mezes and hünkar beğendi — slow-cooked lamb over smoked eggplant purée. Portions can run small, and desserts are the weakest part of the menu."
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
      "ozet": "Turquoise tiles and a calm harborside terrace give it a distinct look, working as a neighborhood lunch spot by day and a lively meyhane by night. Tables sit close together and it can get loud.",
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
      "ozet": "Service is a mixed bag: some diners find the English-speaking staff warm and attentive, while others describe distant service and a tense run-in with the owner.",
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
        "detay": "Bib Gourmand — MICHELIN Guide Istanbul 2026."
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
      "not": "Turbot is priced by weight, so the bill varies widely — always ask the price before ordering. Expect roughly ₺8,000 or more per person."
    },
    "yemek": {
      "puan": 8.7,
      "ozet": "Selected in the MICHELIN Guide for its whole grilled turbot, lakerda (salted bonito) and fish kokoreç, with the tomato salad and anchovy cornbread a favorite pairing. Most complaints here are about the bill, not the cooking."
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
      "ozet": "The room itself is the letdown: no sea view, a side-street location and decor that could belong to any fish restaurant in the city. Diners often question whether the trip out is worth it for the setting alone.",
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
      "ozet": "Staff are attentive and cook the fish well, but the restaurant doesn't hand out a menu or state prices before you order — ask upfront, since the bill can otherwise come as a shock.",
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
        "detay": "Selected — MICHELIN Guide Turkey 2026."
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
      "not": "Expect mid-range chain pricing — a two-person breakfast platter runs about ₺1,650, and pastries and mains are priced individually."
    },
    "yemek": {
      "puan": 7.5,
      "ozet": "The bakery side is the draw — the potato gül böreği, Polka pastry and puff pastry get consistent praise. Recurring hygiene complaints, including foreign objects found in food, are a real and repeated issue at this location though."
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
      "ozet": "An art-deco, two-story space with a vertical winter garden and a long bakery counter at the entrance, split across a garden, indoor hall and upper floor. Weekend breakfast hours get crowded and noisy, with no one greeting guests at the door.",
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
      "ozet": "Reports swing wildly, from friendly and fast to indifferent and unbelievably slow, sometimes for the very same visit. The brand does respond to complaints, but service consistency is the branch's clear weak spot.",
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
      "not": "Pasta dishes run roughly ₺1,100–1,350; a full dinner with starters and a main will likely land at the high end of mid-range or above."
    },
    "yemek": {
      "puan": 7.8,
      "ozet": "The Etiler branch holds a Gault&Millau toque and built its name on handmade fresh pasta, stone-oven pizza, burrata and carpaccio. The tiramisu, lasagna and crème brûlée draw recurring criticism though, and some diners question whether the cooking is consistently Italian enough for the price."
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
      "ozet": "Set inside a villa with white tablecloths, wood paneling and dim lighting — elegant without feeling stiff. The tree-shaded garden, with a bar area in warmer months, is the best seat in the house, though it fills up fast and needs a reservation days in advance.",
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
      "ozet": "Service is generally fast and respectful, and a rare complaint was resolved directly by the business. Some visitors do note inconsistency and feel the service doesn't always match the price.",
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
        "detay": "Gault&Millau Turkey 2026 — 1 toque (12.5/20)."
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
    "fotolar": [],
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
      "not": "Mid-range: à la carte dishes run roughly ₺300–900, and the brunch menu sits around ₺2,500."
    },
    "yemek": {
      "puan": 7.5,
      "ozet": "Chef Çiğdem Seferoğlu built a name for sourcing directly from Anatolian producers, and Hodan holds two Gault&Millau toques and a best-brunch award. Recurring complaints call portions small for the price, and some dishes land as bland or overly oily."
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
      "ozet": "The new Nişantaşı address has a glass-domed garden terrace that feels calm and intimate despite sitting in the middle of the city, with live music on weekends. It's a fresh space, so the verdict on the new room is still settling.",
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
      "ozet": "The kitchen outpaces the floor — service is repeatedly described as slow, even though the food itself gets praised. Cocktails are a standout on their own.",
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
        "detay": "Gault&Millau Turkey 2026 — 2 toques (13/20)."
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
      "not": "Expect to pay a premium — a single main course alone runs upward of ₺2,000, and steaks like the Tomahawk go well beyond that."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Nusr-Et's birthplace branch holds two Gault&Millau toques for beef aged in-house, prized for its tenderness and clean flavor. The main gripe is value: quality is rarely questioned, but many feel the price is a real premium."
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
      "ozet": "Elegant and high-energy, built as much around spectacle as dinner — the fire show and Salt Bae's signature salting move turn a meal into a performance. This is the brand's original branch, opened in 2010. Some find the luxury-car valet and celebrity-photo marketing over the top, and seating can get chaotic on busy nights.",
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
      "ozet": "Service swings from top-tier and attentive — sometimes with Nusret himself carving tableside — to slow, particularly on drink orders, when the room gets busy. No printed menu and unclear pricing before you order add to the unpredictability.",
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
        "detay": "Gault&Millau Turkey 2026 — 2 toques (14/20)."
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
      "not": "Expensive — a full dinner runs upward of ₺2,500 per person, and a service charge is added on top."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Home to what's considered Turkey's first sushi bar, opened in 1999, alongside meats dry-aged in-house and grilled over charcoal. The Sunset Fillet and the beef cheek are regular favorites. Quality has been known to fluctuate though, with occasional complaints about inconsistent portions and less-than-fresh sushi."
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
      "ozet": "Perched above the Bosphorus with a terrace view that's genuinely one of the city's best, the evening unfolds in layers — bar, main dining room, then the late-night Sunset After. The one recurring frustration is seating: some guests with reservations still end up placed away from the view.",
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
      "ozet": "This team won MICHELIN's Service Award in 2023 for an old-school hospitality style built around guest comfort, and it shows on a good night. Recent visits have been rockier though, with reports of long waits at the bar despite reservations and billing mix-ups on pricier items.",
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
        "detay": "Selected — MICHELIN Guide Istanbul, and winner of the Mastercard Service Award in the 2023 Guide."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 — 2 toques, plus Contribution to the Industry and Honor awards."
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
    "fotolar": [],
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
      "not": "Expensive — a two-person dinner with the cover charge and service fee can run around ₺11,000 total."
    },
    "yemek": {
      "puan": 7.2,
      "ozet": "The fish soup, grilled sea bass and grilled octopus are the standout orders. Reviews split hard on the rest of the kitchen though — plenty call it mediocre and accuse the restaurant of coasting on its view rather than its cooking."
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
      "ozet": "Right on the Bosphorus beneath the Fatih Sultan Mehmet Bridge, with guests arriving from Rumeli Hisarı ferried over by the restaurant's own boat. Even its harshest critics agree the view is spectacular, especially at sunset — though it varies noticeably by table, and the interior itself feels dated.",
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
      "ozet": "Staff are friendly and attentive, but the extras add up fast — a per-person cover charge, a service fee and a separate valet charge all get tacked onto the bill, which many read as a forced tip. There have been complaints about valet staff favoring flashier cars and about reaching the restaurant by phone at all.",
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
        "detay": "Gault&Millau Turkey 2026 — 1 toque (12/20), Seafood category."
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
      "not": "The seven-course tasting menu runs ₺10,500 per person (ordered for the whole table); a three-course à la carte option is ₺8,500."
    },
    "yemek": {
      "puan": 8.2,
      "ozet": "Mikla holds a MICHELIN star and three Gault&Millau toques, built on a tightly composed tasting menu — the fish-and-bread course and slow-cooked lamb are highlights, backed by an extensive wine list. Consistency has been a recurring question over the years, with some visits landing well below the restaurant's best nights. Majority ownership passed to Fenix Yapı in 2023, though founding chef Mehmet Gürs's team reportedly stayed in place."
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
      "ozet": "Set on the top two floors of The Marmara Pera, with a panoramic Istanbul view that peaks at sunset and a clean mid-century interior. It reads as a serious dining room rather than a scene. Some local guests have reported trouble securing the best tables despite reservations made well ahead, with a sense that view seats skew toward tourists.",
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
      "ozet": "Staff are consistently praised as attentive and genuinely engaged, often sending out off-menu extras. The service charge added on top of the bill draws some criticism, and the same table-allocation concerns from the dining room carry over here.",
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
        "detay": "One MICHELIN star (retained) — MICHELIN Guide Turkey 2026."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 — 3 toques (15/20), Chef-driven Restaurant category."
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
    "fotolar": [],
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
      "not": "The tasting menu was priced around ₺6,100 per person plus service as of 2025; expect a similarly high price for the current menu."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Neolokal holds a MICHELIN star, four Gault&Millau toques — the country's second-highest score, just behind TURK Fatih Tutak — and its sommelier has won a national award. The lamb, prawn and dessert courses draw the strongest praise. Some diners feel the tasting menu doesn't fully live up to its star, pointing to overpowering spice work or lean portions on certain courses."
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
      "ozet": "Set inside SALT Galata, the historic Ottoman Bank building, with large windows and a terrace looking out over the historic peninsula toward Hagia Sophia — especially striking at sunset. The room gets loud once it fills up, and the tablet-and-headphones video accompanying one course strikes some diners as an unnecessary gimmick.",
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
      "ozet": "Service is generally described as polished and well-trained, with table cards that walk guests through each course. Some find the welcome overly formal rather than warm, and there have been isolated mishaps — a wrong order, a spilled dish. The palate-cleansing water being billed separately during the tasting menu is a recurring gripe, as is the credit-card pre-authorization required to book.",
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
        "detay": "One MICHELIN star (retained) and a MICHELIN Green Star — MICHELIN Guide Turkey 2026; sommelier award for Ersin Topkara."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Turkey 2026 — 4 toques (18/20), Prestigious Table."
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
    "fotolar": [],
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
      "not": "The nine-course tasting menu runs ₺6,500 per person, the seven-course option ₺5,350; à la carte mains alone run ₺1,950–2,300."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "One of the most consistently loved kitchens on this list: the mantı, sourdough bread with smoked butter and hummus have drawn praise for over a decade with barely a bad word said. Chef Civan Er's approach gives Turkish flavors a fresher, lighter quality. The only real gripe is that the tasting menu can leave you overly full, with the closing katmer felt as one course too many."
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
      "ozet": "Warm, intimate and understated on Kumbaracı Yokuşu — dim lighting, green table lamps and an intimate dining room split into a glass-fronted area, the main room and a back room. It runs as a neighborhood lunch spot by day and shifts into tasting-menu mode at night. Small and popular enough that an evening table without a reservation is close to impossible.",
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
      "ozet": "Waiters know the menu inside out, strike the right balance of attentive and unobtrusive, and regularly send out off-menu extras. The service charge added to the bill is a sore point for some regulars.",
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
        "detay": "Selected — MICHELIN Guide Turkey, first included in 2023."
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
      "not": "On the expensive side, and several diners feel the bill doesn't match what's on the plate."
    },
    "yemek": {
      "puan": 6.8,
      "ozet": "The lobster linguine, octopus and tuna starter get consistent praise, and the chicken main has its fans too. Consistency is the issue — some visits land as mediocre, and one reviewer's supposedly prime ribeye came out extremely tough."
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
      "ozet": "An art-deco room inside the Palais Garnier building, with live music and evening entertainment that turns dinner into something closer to a show. It's genuinely festive, but the noise can drown out conversation — the later evening sitting is where the real energy is.",
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
      "ozet": "Individual staff members earn real praise for kindness, even on visits that otherwise went wrong. But service missteps recur — lost reservations, food arriving before drinks, and long waits for a glass of wine among the complaints.",
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
        "detay": "Gault&Millau — 11/20, Table Gourmande."
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
      "not": "Roughly €40–90 per person; several diners feel portions don't match the price, especially on starters."
    },
    "yemek": {
      "puan": 6.0,
      "ozet": "When it's on, dishes like the trofie with pistachio pesto and the tuna linguine come out well, and the tiramisu gets real praise. When it's off, pasta arrives lukewarm or undercooked and under-seasoned — a recurring enough pattern that consistency is the venue's clearest weakness. Portions also draw complaints relative to the price."
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
      "ozet": "The terrace and its Eiffel Tower view are the main draw, praised even by diners who were otherwise unimpressed. Not every table gets the view though, and outdoor seating can feel crowded.",
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
      "ozet": "Wait times are the biggest complaint — hour-plus waits have been reported for something as simple as a dessert or a glass of water. The restaurant also enforces a minimum of one main course per person, and there have been reports of an accessibility request being mishandled.",
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
        "detay": "Listed in the Gault&Millau guide."
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
    "fotolar": [],
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
      "not": "Roughly €20–30 per person — the full formule of steak, sauce, fries and walnut salad runs about €26.50."
    },
    "yemek": {
      "puan": 7.8,
      "ozet": "The whole draw is the steak-frites-sauce combination, and it's what most diners come back for — the meat and the Café-de-Paris-style sauce paired with fries. A couple of visits have landed badly on both meat quality and the sauce, but it's the exception. Worth noting this is a separate, later (1974) establishment from the original Le Relais de l'Entrecôte, though reviewers rate it on par."
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
      "ozet": "A classic, bustling Parisian brasserie with art nouveau mirrors and Mucha-style posters — lively yet relaxed. The catch is that it takes no reservations, so expect to queue, and some diners have complained the line isn't always managed fairly.",
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
      "ozet": "Consistently the strongest service of any restaurant on this list — warm, attentive and genuinely helpful once you're seated. The only real complaint is about fairness in the walk-in queue, since no reservations are taken at all.",
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
      "not": "Among the most expensive tasting menus in Madrid."
    },
    "yemek": {
      "puan": 9.8,
      "ozet": "Dabiz Muñoz's three-MICHELIN-star restaurant is one of Madrid's most unusual gastronomic experiences, blending Spanish ingredients with techniques and influences from Asia, Mexico and beyond. Expect a tasting menu built on surprise and theater — unexpected combinations and textures rather than familiar comfort food."
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
      "ozet": "Theatrical and provocative rather than a traditional white-tablecloth dining room — the visual language follows the food: exaggerated, playful and unconventional. Best suited to a full-blown special occasion rather than a quiet dinner.",
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
      "ozet": "Service is woven into the experience itself, guiding guests through a long sequence of dishes and presentations. Staff are professional and playful without losing the precision this level of cooking demands.",
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
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars."
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
    "fotolar": [],
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
      "not": "Roughly €30–70 per person depending on dishes and drinks."
    },
    "yemek": {
      "puan": 8.5,
      "ozet": "The signature cochinillo asado — roast suckling pig from the historic wood-fired oven — along with roast lamb define the kitchen. Opinions split on whether the cooking itself lives up to the legend, or whether the draw is really the history and atmosphere around it."
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
      "ozet": "Atmosphere is the real strength here — historic dining rooms, stone walls, the old oven and cellar-like spaces make it feel like stepping into old Madrid rather than a contemporary restaurant.",
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
      "ozet": "With a very high volume of international visitors, service leans more structured than personal. Staff are generally experienced and friendly, sometimes sharing bits of the restaurant's history, though peak hours can feel distinctly touristic.",
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
    "fotolar": [],
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
      "not": "Roughly €40–90 per person; a full meal with drinks can reach the higher end."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Spanish ingredients presented in a modern, playful format — seafood, meat and minimally manipulated sharing plates built around presentation and ingredient quality. It sits comfortably between Madrid's traditional restaurants and its tasting-menu destinations: more contemporary than Botín, far less formal (and expensive) than DiverXO."
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
      "ozet": "Industrial and playful — the design nods to a butcher's cutting room, with stainless surfaces and a lively counter-style energy. Trendy rather than romantic.",
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
      "ozet": "Energetic and informal, matching the sharing concept — staff explain the more unusual preparations and keep the plates moving at a lively pace rather than a ceremonial one.",
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
    "fotolar": [],
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
      "not": "Very expensive — among Barcelona's top tasting-menu prices."
    },
    "yemek": {
      "puan": 9.9,
      "ozet": "Run by Oriol Castro, Eduard Xatruch and Mateu Casañas — all former members of Ferran Adrià's elBulli team — Disfrutar holds three MICHELIN stars for highly technical, creative Mediterranean cooking. Dishes play with shape, texture and temperature while keeping flavors recognizable, served across Classic and Festival tasting formats. Reviews consistently praise the precision and the sense of a carefully built progression."
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
      "ozet": "The dining room is more restrained than the food — bright, modern and minimal, keeping the plates as the main visual event. Calmer and more architectural than DiverXO, less theatrical.",
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
      "ozet": "Highly polished and carefully timed to the tasting menu, guiding diners through technical dishes without excessive formality. Knowledge and precision stand out, especially given how many courses there are to keep track of.",
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
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars."
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
    "fotolar": [],
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
      "not": "Expensive, though notably below Disfrutar's tasting-menu prices."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "From the same chef team behind Disfrutar — Oriol Castro, Eduard Xatruch and Mateu Casañas — but considerably more relaxed. 'Compartir' means 'to share': the menu is built around dishes meant for the table rather than a formal tasting sequence, and the seafood, tuna and brioche preparations are particular favorites."
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
      "ozet": "Modern, spacious and noticeably more social than Disfrutar — stylish enough for a special dinner but relaxed enough for a lively meal with friends.",
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
      "ozet": "Generally warm and professional, though reviews are a bit more mixed than at Disfrutar — pacing and table management can slip during busy service.",
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
      "not": "Roughly €20–30 per person."
    },
    "yemek": {
      "puan": 8.1,
      "ozet": "Classic Catalan cooking — stews, cannelloni, roast meats, fish dishes and traditional Catalan desserts. Reviews are more mixed than at Barcelona's elite tables, so it's best approached as a historic local institution rather than a top culinary destination."
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
      "ozet": "History is the real draw — traditional dining rooms and an old-Barcelona aesthetic give it a sense of continuity that newer restaurants simply can't match.",
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
      "ozet": "Service is mixed — some diners appreciate the traditional, no-frills style and experienced staff, while others notice inconsistencies during busy periods.",
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
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "gigi-rigolatto-paris",
    "isim": "Gigi Rigolatto Paris",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "8th Arr. / Avenue Montaigne",
    "mutfak": [
      "Italian",
      "Mediterranean",
      "Luxury Dining"
    ],
    "adres": "15 Avenue Montaigne, 75008 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gigi%20Rigolatto%2C%2015%20Avenue%20Montaigne%2C%2075008%20Paris",
    "koordinat": {
      "lat": 48.86555,
      "lng": 2.30302
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive — luxury Paris dining prices."
    },
    "yemek": {
      "puan": 8.4,
      "ozet": "Polished Italian comfort food rather than experimental cooking — arancini, ossobuco, linguine alle vongole, carpaccio and Milanese-style dishes done well. The reputation rests as much on the scene and setting as on culinary ambition; think strong lifestyle restaurant rather than top gastronomic destination."
    },
    "neYenir": [
      {
        "yemek": "Linguine alle vongole",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Ossobuco",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Arancini",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Beef carpaccio",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Milanese-style veal",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "The main reason to come: high above Avenue Montaigne with Eiffel Tower views and a glamorous Italian-palazzo look — golden Sienna marble, travertine and the Bellini Bar. Live music and a fashionable crowd keep it lively rather than intimate.",
      "etiketler": [
        "eiffel-view",
        "luxury",
        "fashionable",
        "live-music",
        "date-night",
        "special-occasion"
      ],
      "dressCode": "Smart elegant / upscale",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 7.8,
      "ozet": "Experiences are mixed — many describe polished, attentive service, while others report long waits and inconsistency on busy nights. Expectations run high given the pricing and setting.",
      "artilar": [
        "Polished luxury presentation",
        "International clientele handled comfortably",
        "Good cocktail and wine guidance",
        "Strong special-occasion experience"
      ],
      "eksiler": [
        "Busy evenings can create delays",
        "Some reports of inconsistent attentiveness",
        "High pricing creates very high service expectations"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+33 1 47 23 55 99",
      "link": null,
      "beklemeSuresi": "Strongly recommended, especially for dinner and terrace/view tables.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Gigi Rigolatto / Paris Society, TripAdvisor, recent diner reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "girafe-paris",
    "isim": "Girafe",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Trocadéro / 16th Arr.",
    "mutfak": [
      "French",
      "Seafood",
      "Mediterranean",
      "Luxury Dining"
    ],
    "adres": "1 Place du Trocadéro et du 11 Novembre, 75016 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Girafe%2C%201%20Place%20du%20Trocad%C3%A9ro%2C%2075016%20Paris",
    "koordinat": {
      "lat": 48.86256,
      "lng": 2.28876
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 8.5,
      "ozet": "A modern seafood restaurant built around platters, ceviche, sashimi, lobster, sole and turbot. Raw seafood and shellfish get the strongest praise; some cooked mains draw more moderate reactions. The kitchen holds its own, but the view is an equally big part of the draw."
    },
    "neYenir": [
      {
        "yemek": "Seafood platter",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Ceviche",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sashimi",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lobster",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Turbot",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sole",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.8,
      "ozet": "A direct Eiffel Tower view from the Trocadéro, with Joseph Dirand's interior channeling 1930s Paris in cream tones, wood and marble. The terrace is one of the most sought-after (and photographed) tables in the city.",
      "etiketler": [
        "eiffel-view",
        "terrace",
        "luxury",
        "romantic",
        "art-deco",
        "fashionable"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 7.8,
      "ozet": "Polished when the restaurant is running smoothly, but peak-time reviews repeatedly mention delays, reservation friction and uneven attentiveness.",
      "artilar": [
        "Experienced with international diners",
        "Professional presentation",
        "Strong wine and seafood service"
      ],
      "eksiler": [
        "Can become extremely busy",
        "Reports of slow or inconsistent attention",
        "High demand for terrace tables can complicate expectations"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+33 1 40 62 70 61",
      "link": null,
      "beklemeSuresi": "Strongly recommended; for Eiffel Tower / terrace seating, booking ahead is particularly important.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Girafe, Paris Society, TripAdvisor, selected recent reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "loulou-paris",
    "isim": "Loulou Paris",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Louvre / Tuileries",
    "mutfak": [
      "Italian",
      "French",
      "Mediterranean"
    ],
    "adres": "107 Rue de Rivoli, 75001 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Loulou%2C%20107%20Rue%20de%20Rivoli%2C%2075001%20Paris",
    "koordinat": {
      "lat": 48.86276,
      "lng": 2.33339
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Expensive to very expensive."
    },
    "yemek": {
      "puan": 8.7,
      "ozet": "Italian and Mediterranean cooking with the polish that fits its setting beside the Musée des Arts Décoratifs and the Tuileries — pastas, vegetables, seafood, grilled meats and Italian-inspired desserts, more relaxed than haute cuisine. Simplicity and ingredient quality are the strengths, though busy nights can bring some inconsistency."
    },
    "neYenir": [
      {
        "yemek": "Truffle pizza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Linguine or seasonal pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Vitello tonnato",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Artichoke preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.6,
      "ozet": "The garden and terrace are the defining feature — elegant but less theatrical than Gigi or Girafe, with a relaxed Mediterranean feel overlooking one of the prettiest corners of central Paris. Best for a long lunch or a warm-weather dinner.",
      "etiketler": [
        "garden",
        "terrace",
        "elegant",
        "romantic",
        "fashionable"
      ],
      "dressCode": "Smart casual / elegant",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.2,
      "ozet": "Friendly and professional on a normal night, though a busy terrace can bring complaints about pacing and forgotten items — quality varies with the season and the crowd.",
      "artilar": [
        "Friendly upscale style",
        "Good for long lunches",
        "Strong international guest experience"
      ],
      "eksiler": [
        "Peak terrace service can be hectic",
        "Some recent reports of long waits",
        "Demand can make the experience feel crowded"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+33 1 42 60 41 96",
      "link": null,
      "beklemeSuresi": "Recommended. Online reservations for smaller groups generally open close to the dining date according to the restaurant's booking system.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Loulou Paris, TripAdvisor, recent diner reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "baronne-paris",
    "isim": "Baronne",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "8th Arr.",
    "mutfak": [
      "French",
      "Contemporary",
      "Grill",
      "Luxury Dining"
    ],
    "adres": "11 Rue Berryer, 75008 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Baronne%2C%2011%20Rue%20Berryer%2C%2075008%20Paris",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 8.5,
      "ozet": "Modern French dining built on high-quality products — grilled meats, fish and polished sharing dishes, generally well executed. This isn't purely chef-driven gastronomy though; as with other Paris Society venues, the design and clientele are as central to the appeal as the kitchen."
    },
    "neYenir": [
      {
        "yemek": "Premium grilled meat",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Beef tartare",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Vegetable sides",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "Housed in the historic Hôtel Salomon de Rothschild — one of the most dramatic restaurant settings around. Grand architectural details and a large terrace make it feel more like dinner inside a private mansion than a conventional restaurant.",
      "etiketler": [
        "historic-building",
        "luxury",
        "glamorous",
        "fashionable",
        "terrace",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "groups",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 7.9,
      "ozet": "Generally stylish and professional, though reviews show more inconsistency than the grand setting suggests — crowded evenings and the value of extras like wine draw the most criticism.",
      "artilar": [
        "Professional front-of-house presentation",
        "Luxury dining experience",
        "Suitable for business and special occasions"
      ],
      "eksiler": [
        "Service consistency can vary",
        "Very high expectations because of pricing",
        "Some reports of weaker support service at peak periods"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+33 1 42 25 73 35",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Baronne / Paris Society, TripAdvisor, recent diner reviews. No name-pinned OpenStreetMap POI found, so coordinates are left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "siena-paris",
    "isim": "Siena Paris",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Marché Saint-Honoré / 1st Arr.",
    "mutfak": [
      "Italian",
      "Mediterranean"
    ],
    "adres": "35 Place du Marché Saint-Honoré, 75001 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Siena%2C%2035%20Place%20du%20March%C3%A9%20Saint-Honor%C3%A9%2C%2075001%20Paris",
    "koordinat": {
      "lat": 48.86759,
      "lng": 2.332
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Expensive."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "A fashionable Italian restaurant built on familiar, comfort-driven dishes — pasta, seafood and meat — rather than highly technical cooking. Reviews are unusually split: some diners love the food, others question the value and consistency."
    },
    "neYenir": [
      {
        "yemek": "Fresh pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Truffle pasta",
        "kacKisiOnerdi": null,
        "not": "When available."
      },
      {
        "yemek": "Beef carpaccio",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Burrata",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "Warm colors, greenery and a polished contemporary interior create a lively, social atmosphere — particularly good for dinner with friends and later evenings, helped by its speakeasy concept and late hours.",
      "etiketler": [
        "lively",
        "fashionable",
        "late-night",
        "date-night"
      ],
      "dressCode": "Smart / fashionable",
      "uygun": [
        "groups",
        "couples"
      ]
    },
    "servis": {
      "puan": 7.7,
      "ozet": "Opinions are mixed — some describe an organized, professional team even when busy, while others report uneven attention and frustration over value.",
      "artilar": [
        "Comfortable with busy evening service",
        "Lively hospitality style",
        "Suitable for groups"
      ],
      "eksiler": [
        "Inconsistency reported in guest reviews",
        "Peak evenings may feel rushed",
        "Premium positioning raises expectations"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+33 1 88 83 00 88",
      "link": null,
      "beklemeSuresi": "Recommended, especially in the evening.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Siena Paris, TripAdvisor, recent diner reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "hotel-costes-restaurant",
    "isim": "Hôtel Costes Restaurant",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Place Vendôme / 1st Arr.",
    "mutfak": [
      "French",
      "International",
      "Luxury Dining"
    ],
    "adres": "7 Rue de Castiglione, 75001 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Costes%2C%207%20Rue%20de%20Castiglione%2C%2075001%20Paris",
    "koordinat": {
      "lat": 48.86628,
      "lng": 2.32801
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 8.2,
      "ozet": "Not primarily a destination for experimental cooking — the menu is polished luxury comfort food and long-standing house favorites. The food can be genuinely good, but the real draw is the complete Costes experience: the music, the crowd, the design."
    },
    "neYenir": [
      {
        "yemek": "Tuna tartare",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Club-style classics",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Steak and fries",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Salads",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature desserts and cocktails",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.8,
      "ozet": "Few Paris restaurants are as tied to the fashion world. Dark lighting, the famous courtyard and carefully curated music create a seductive atmosphere that feels closer to nightlife than conventional hotel dining.",
      "etiketler": [
        "fashionable",
        "iconic",
        "dim",
        "courtyard",
        "luxury",
        "people-watching",
        "romantic"
      ],
      "dressCode": "Smart fashionable / upscale",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 7.5,
      "ozet": "Probably the most divisive part of the experience — some guests report excellent, polished attention, while others find the staff aloof and unwelcoming.",
      "artilar": [
        "Experienced luxury hospitality",
        "Strong cocktail service",
        "Handles high-profile international clientele"
      ],
      "eksiler": [
        "Repeated criticism of attitude",
        "Can feel exclusive or pretentious",
        "Service experience varies significantly"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+33 1 42 44 50 00",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Hôtel Costes, TripAdvisor, fashion/travel media, recent diner reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "lavenue-paris",
    "isim": "L'Avenue",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Avenue Montaigne / 8th Arr.",
    "mutfak": [
      "French",
      "International",
      "Luxury Bistro"
    ],
    "adres": "41 Avenue Montaigne, 75008 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=L%27Avenue%2C%2041%20Avenue%20Montaigne%2C%2075008%20Paris",
    "koordinat": {
      "lat": 48.86728,
      "lng": 2.30628
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 8.4,
      "ozet": "A luxury Parisian social restaurant mixing French classics with international dishes — tuna tartare, burrata, matchstick fries and a well-known sea bass curry. The kitchen is reliably appealing, but the fashionable Avenue Montaigne crowd and the people-watching are just as much the point."
    },
    "neYenir": [
      {
        "yemek": "Tuna tartare",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sea bass curry",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Burrata",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Matchstick fries",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal soup",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Escargots",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.2,
      "ozet": "The terrace on Avenue Montaigne is the center of the action — fashion designers, luxury shoppers and international visitors make it one of the city's classic people-watching restaurants, more fashionable than formal.",
      "etiketler": [
        "fashionable",
        "people-watching",
        "terrace",
        "luxury"
      ],
      "dressCode": "Smart fashionable",
      "uygun": [
        "groups",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 7.8,
      "ozet": "Long-term popularity means service can be extremely efficient on a good day, though reservation pressure and inconsistent warmth are noted — walk-ins can be tough on busy weekends.",
      "artilar": [
        "Experienced staff",
        "Fast-paced professional operation",
        "Familiar with international clientele"
      ],
      "eksiler": [
        "Busy periods can feel impersonal",
        "Reservation access can be difficult",
        "Mixed feedback on warmth and attentiveness"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Strongly recommended, especially at weekends.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official L'Avenue, TripAdvisor, selected fashion and travel references. No verified phone number recorded. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "maxims-paris",
    "isim": "Maxim's",
    "ulke": "France",
    "sehir": "Paris",
    "semt": "Rue Royale / 8th Arr.",
    "mutfak": [
      "French",
      "Luxury Dining"
    ],
    "adres": "3 Rue Royale, 75008 Paris, France",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Maxim%27s%2C%203%20Rue%20Royale%2C%2075008%20Paris",
    "koordinat": {
      "lat": 48.86731,
      "lng": 2.32223
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 7.9,
      "ozet": "The current kitchen focuses on classic French luxury dining. Some dishes land well, others are criticized as underwhelming relative to the price and the weight of the name."
    },
    "neYenir": [
      {
        "yemek": "French classic starters",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Fish or seafood dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Beef preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal French mains",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Classic desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.6,
      "ozet": "The preserved Art Nouveau interiors are the real reason to come — ornate decoration, live music and Belle Époque history create an atmosphere unlike almost any modern restaurant. For guests interested in old Paris, the room itself is the experience.",
      "etiketler": [
        "historic-building",
        "art-nouveau",
        "live-music",
        "luxury",
        "iconic"
      ],
      "dressCode": "Elegant attire expected",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 7.4,
      "ozet": "Feedback is inconsistent — some visitors get attentive, classic service, while recurring reviews describe inattentiveness and a feeling geared more toward tourists than regulars.",
      "artilar": [
        "Traditional restaurant presentation",
        "Historic special-occasion feeling",
        "Live entertainment adds to the experience"
      ],
      "eksiler": [
        "Inconsistent guest feedback",
        "Some complaints about inattentiveness",
        "Price and historical reputation create very high expectations"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+33 1 42 65 27 94",
      "link": null,
      "beklemeSuresi": "Required / strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Maxim's, Paris Society, TripAdvisor, recent reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "oroya-madrid-edition",
    "isim": "Oroya & The Roof",
    "ulke": "Spain",
    "sehir": "Madrid",
    "semt": "Centro / Puerta del Sol",
    "mutfak": [
      "Peruvian",
      "Latin American",
      "Rooftop"
    ],
    "adres": "The Madrid EDITION, Plaza de Celenque 2, 28013 Madrid, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Oroya%2C%20The%20Madrid%20EDITION%2C%20Plaza%20de%20Celenque%202%2C%2028013%20Madrid",
    "koordinat": {
      "lat": 40.41778,
      "lng": -3.70631
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Expensive, though below Madrid's top luxury tasting-menu tier."
    },
    "yemek": {
      "puan": 8.6,
      "ozet": "Chef Diego Muñoz's Peruvian rooftop restaurant at The Madrid EDITION runs on an informal, sharing-driven menu — ceviche, causa-style dishes, grilled plates and small plates that pair naturally with the pisco-focused cocktail program."
    },
    "neYenir": [
      {
        "yemek": "Sea bass ceviche",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Peruvian sharing plates",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Papas rellenas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal grilled dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pisco-based cocktails",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "On the fourth floor of The Madrid EDITION, with a rooftop terrace, abundant greenery and views across central Madrid. The neighboring pool and greenhouse-like interior make it one of the city's strongest hotel-restaurant settings, especially at sunset.",
      "etiketler": [
        "rooftop",
        "view",
        "sunset",
        "lively",
        "luxury"
      ],
      "dressCode": "Casual per the hotel; smart casual works best for dinner",
      "uygun": [
        "groups",
        "couples"
      ]
    },
    "servis": {
      "puan": 8.5,
      "ozet": "Contemporary luxury-hotel style rather than formal fine dining — staff are especially useful for navigating the sharing portions and the extensive cocktail list.",
      "artilar": [
        "Strong cocktail knowledge",
        "Luxury hotel hospitality",
        "Good for international guests",
        "Relaxed rather than formal"
      ],
      "eksiler": [
        "Rooftop demand can slow service",
        "Atmosphere may take priority over a quiet dining experience"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+34 919 54 54 50",
      "link": null,
      "beklemeSuresi": "Recommended, especially evenings and rooftop periods.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official The Madrid EDITION, official Oroya, Vogue, recent reviews. Coordinates are the hotel's name-pinned OpenStreetMap POI (the restaurant is on its 4th floor)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "lana-madrid",
    "isim": "Lana",
    "ulke": "Spain",
    "sehir": "Madrid",
    "semt": "Chamberí / Ponzano",
    "mutfak": [
      "Argentinian",
      "Steakhouse",
      "Grill"
    ],
    "adres": "Calle de Ponzano 59, 28003 Madrid, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Lana%2C%20Calle%20de%20Ponzano%2059%2C%2028003%20Madrid",
    "koordinat": {
      "lat": 40.44129,
      "lng": -3.6992
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "High-end steakhouse pricing — the final bill varies significantly by cut and weight."
    },
    "yemek": {
      "puan": 9.5,
      "ozet": "One of Madrid's strongest modern steakhouses: brothers Martín and Joaquín Narvaiz bring Argentine grilling with a serious focus on sourcing, aging and precise fire control. The meat program is the main event, but starters and vegetable dishes get just as much attention. Listed in the MICHELIN Guide."
    },
    "neYenir": [
      {
        "yemek": "Chuleta / premium aged beef",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Entraña",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Wagyu cecina",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Empanadas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled seasonal mushrooms",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled vegetables",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "Serious about the food without being formal — a warm, contemporary room that keeps the focus on the grill rather than theatrical decor. A high-end steak experience without the nightclub energy.",
      "etiketler": [
        "steakhouse",
        "intimate",
        "modern",
        "date-night"
      ],
      "dressCode": "Smart casual",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.1,
      "ozet": "Staff explain cuts, origins and preparation styles in detail, helping guests order to their preferred fat level and doneness. Limited seating means more personal attention than most fashionable Madrid hotspots.",
      "artilar": [
        "Excellent meat knowledge",
        "Detailed explanation of cuts",
        "Personal attention",
        "Strong wine guidance"
      ],
      "eksiler": [
        "High demand makes reservations difficult",
        "Less suitable for diners uninterested in meat"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Listed in the MICHELIN Guide (no star)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+34 626 86 98 55",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Lana, MICHELIN Guide 2026, Guía Repsol, recent restaurant reviews. Coordinates verified by name on OpenStreetMap/Nominatim (Restaurante Lana, Ponzano 59)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "charrua-madrid",
    "isim": "Charrúa Madrid",
    "ulke": "Spain",
    "sehir": "Madrid",
    "semt": "Salesas / Justicia",
    "mutfak": [
      "Uruguayan",
      "Steakhouse",
      "Grill"
    ],
    "adres": "C. del Conde de Xiquena, 4, 28004 Madrid, Spain",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Charr%C3%BAa%2C%20C.%20del%20Conde%20de%20Xiquena%204%2C%2028004%20Madrid",
    "koordinat": {
      "lat": 40.42235,
      "lng": -3.69397
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Expensive, especially for the premium cuts."
    },
    "yemek": {
      "puan": 9.2,
      "ozet": "A meat-driven restaurant built around Uruguayan fire cooking — premium cuts grilled over oak and vine wood give the menu a clear identity centered on smoke and live fire. Grilled vegetables, sweetbreads, empanadas and desserts round things out. Popular with chefs and diners after a serious grill without the scale of a big steakhouse."
    },
    "neYenir": [
      {
        "yemek": "Chuletón",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Premium beef cuts",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Mollejas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Empanadas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled artichokes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lemon pie / seasonal dessert",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "Small, dark and rustic-chic — more intimate than many of Madrid's high-profile restaurants. Warm lighting and the open fire make it especially good for a date night.",
      "etiketler": [
        "rustic",
        "dim",
        "romantic",
        "steakhouse",
        "intimate",
        "live-fire"
      ],
      "dressCode": "Smart casual",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.0,
      "ozet": "Staff consistently earn praise for their knowledge and warmth, walking guests through sourcing, cuts and preparation — valuable when choosing the right piece of beef matters this much.",
      "artilar": [
        "Strong product knowledge",
        "Warm and attentive",
        "Good explanation of cuts",
        "Intimate scale allows personal service"
      ],
      "eksiler": [
        "Limited space",
        "High demand",
        "Not ideal for large groups"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Charrúa Madrid, recent Madrid restaurant reviews, Guía Repsol references, chef/dining media. Address and coordinates from the name-pinned OpenStreetMap POI at Conde de Xiquena 4 (matches the stated Salesas/Justicia location). No verified phone number recorded."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "petra-roasting-co",
    "isim": "Petra Roasting Co.",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Gayrettepe",
    "mutfak": [
      "Specialty Coffee",
      "Cafe",
      "Breakfast"
    ],
    "adres": "Gayrettepe, Hoşsohbet Sk. Selenium Residence Mağaza 1, 34349 Beşiktaş, Istanbul, Türkiye",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Petra%20Roasting%20Co.%20Gayrettepe%2C%20Ho%C5%9Fsohbet%20Sk.%2C%20Be%C5%9Fikta%C5%9F%2C%20Istanbul",
    "koordinat": {
      "lat": 41.06209,
      "lng": 29.00948
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Moderate café and brunch pricing."
    },
    "yemek": {
      "puan": 8.5,
      "ozet": "First and foremost one of Istanbul's best-known specialty coffee brands — the larger locations pair a serious coffee program with a compact breakfast and brunch menu. Not fine dining, but the ingredients and café dishes are well handled."
    },
    "neYenir": [
      {
        "yemek": "Seasonal breakfast dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Eggs / brunch plates",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sandwiches",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pastries",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Filter coffee / espresso",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.7,
      "ozet": "Industrial design with a relaxed, modern café feel. The Gayrettepe flagship sits right alongside the roasting operation, which appeals to coffee-focused visitors more than the average brunch crowd.",
      "etiketler": [
        "coffee",
        "industrial",
        "casual",
        "brunch",
        "daytime"
      ],
      "dressCode": null,
      "uygun": [
        "solo",
        "groups",
        "family"
      ]
    },
    "servis": {
      "puan": 8.2,
      "ozet": "Café-style rather than formal table service — coffee knowledge is the real strength, while food service can feel more functional during busy brunch hours. Experience varies by branch.",
      "artilar": [
        "Strong specialty-coffee knowledge",
        "Casual and approachable",
        "Good daytime experience"
      ],
      "eksiler": [
        "Busy periods can create waits",
        "Food selection is smaller than a full restaurant",
        "Experience varies by branch"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": "+90 212 356 10 57",
      "link": null,
      "beklemeSuresi": "Usually not essential; depends on the branch.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Petra Roasting Co. (petracoffee.com), TripAdvisor, specialty coffee and travel references; the Gayrettepe HQ address corroborated by Gault&Millau Türkiye and the official cafés page. Coordinates from the name-pinned OpenStreetMap POI in Gayrettepe."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "arkestra-istanbul",
    "isim": "Arkestra",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Etiler",
    "mutfak": [
      "Contemporary",
      "Modern European",
      "Fine Dining"
    ],
    "adres": "Etiler, Dilhayat Sk. No:28, 34337 Beşiktaş, Istanbul, Türkiye",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arkestra%2C%20Dilhayat%20Sk.%20No%3A28%2C%20Etiler%2C%20Istanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 9.4,
      "ozet": "Chef Cenk Debensason combines contemporary European technique with a personal, cosmopolitan style, moving comfortably between seafood, pasta and meat rather than sticking to a strictly Turkish identity. The tuna preparations and duck-filled pasta are frequent favorites. Holds one MICHELIN star."
    },
    "neYenir": [
      {
        "yemek": "Tuna sashimi / seasonal tuna preparation",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Duck-filled pansotti or current pasta course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Chef's meat course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature dessert",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.4,
      "ozet": "The property combines the Michelin-starred main dining room with Ritmo, a music-driven nightlife space — sophisticated but playful. Low lighting and careful design make it one of Istanbul's strongest date-night spots.",
      "etiketler": [
        "dim",
        "romantic",
        "live-music",
        "modern",
        "date-night",
        "creative"
      ],
      "dressCode": "Smart casual / elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.2,
      "ozet": "Friendly, knowledgeable service and a strong wine program — polished without feeling stiff, matching the mix of fine dining and nightlife energy.",
      "artilar": [
        "Excellent menu knowledge",
        "Strong wine guidance",
        "Friendly rather than overly formal",
        "Fine-dining precision"
      ],
      "eksiler": [
        "Long dining experience",
        "Higher expectations due to Michelin status"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star — MICHELIN Guide 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+90 212 970 72 73",
      "link": null,
      "beklemeSuresi": "Required / strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Arkestra (arkestra.com.tr), MICHELIN Guide 2026, TripAdvisor, recent restaurant reviews. Address corroborated by the MICHELIN Guide and TripAdvisor listings; no name-pinned OpenStreetMap POI found, so coordinates are left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "ulus-29",
    "isim": "Ulus 29",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Ulus",
    "mutfak": [
      "Turkish",
      "Mediterranean",
      "International",
      "Grill"
    ],
    "adres": "A. Adnan Saygun Caddesi, Ulus Parkı İçi No:71/1, Ulus, Istanbul, Türkiye",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ulus%2029%2C%20A.%20Adnan%20Saygun%20Caddesi%20No%3A71%2F1%2C%20Ulus%2C%20Istanbul",
    "koordinat": {
      "lat": 41.06451,
      "lng": 29.03193
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 8.6,
      "ozet": "One of Istanbul's long-running luxury dining institutions — modern Turkish and Mediterranean cooking with premium seafood, sushi-inspired dishes, grills and international classics. The food holds up well, though the location and scene are just as central to the appeal."
    },
    "neYenir": [
      {
        "yemek": "Seasonal seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled meat",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Meze-style starters",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sushi / raw seafood selections",
        "kacKisiOnerdi": null,
        "not": "Where available."
      },
      {
        "yemek": "Signature desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "An elevated position above the Bosphorus with panoramic evening views. For decades it's functioned as both a restaurant and a social destination for Istanbul's business and fashion crowd, with the energy building as the night goes on.",
      "etiketler": [
        "bosphorus-view",
        "luxury",
        "nightlife",
        "classic",
        "romantic",
        "lively"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "groups",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Generally experienced and professional, reflecting years of serving high-end local and international guests — friendly staff and good English-language service are frequently noted, though busy nights lean more nightlife than fine dining.",
      "artilar": [
        "Experienced team",
        "Strong international guest handling",
        "Professional table service",
        "Good knowledge of the menu"
      ],
      "eksiler": [
        "Busy evenings can become loud",
        "The social/nightlife character may reduce intimacy"
      ]
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+90 212 358 29 29",
      "link": null,
      "beklemeSuresi": "Strongly recommended, particularly for view tables.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Ulus 29, TripAdvisor, recent Istanbul dining reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "gallada",
    "isim": "GALLADA by Fatih Tutak",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Karaköy / Galataport",
    "mutfak": [
      "Turk-Asian",
      "Contemporary"
    ],
    "adres": "The Peninsula Istanbul, Kemankeş Caddesi No:34, Karaköy, Beyoğlu, Istanbul, Türkiye",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=GALLADA%2C%20The%20Peninsula%20Istanbul%2C%20Kemanke%C5%9F%20Caddesi%20No%3A34%2C%20Karak%C3%B6y%2C%20Istanbul",
    "koordinat": {
      "lat": 41.02295,
      "lng": 28.97816
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 9.1,
      "ozet": "Chef Fatih Tutak's more relaxed restaurant at The Peninsula Istanbul, inspired by the cuisines connected along the historic Silk Road — Turkish, Central Asian and East Asian flavors. Wood-fired dishes, spice work and manti-inspired preparations are ambitious but built for sharing. Listed in the MICHELIN Guide."
    },
    "neYenir": [
      {
        "yemek": "Tomato plate",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Potato bread",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Manti-style seasonal dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Wood-fired fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Artichoke preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Silk Road-inspired sharing dishes",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "On the roof of The Peninsula Istanbul, with wide Bosphorus and Historic Peninsula views — one of the strongest restaurant settings in the city. It leans closer to fun dining than formal fine dining despite the sophistication of the food.",
      "etiketler": [
        "bosphorus-view",
        "rooftop",
        "luxury",
        "terrace",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.2,
      "ozet": "The Peninsula's luxury hospitality standards show clearly — staff are frequently praised for guiding guests through an unfamiliar menu and the right order of sharing dishes.",
      "artilar": [
        "Luxury hotel hospitality",
        "Detailed menu guidance",
        "International service standard",
        "Strong cocktail and wine program"
      ],
      "eksiler": [
        "Premium pricing",
        "The large restaurant size may feel less intimate than TURK"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Listed in the MICHELIN Guide (no star)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official GALLADA, The Peninsula Istanbul, MICHELIN Guide 2026, TripAdvisor, Fatih Tutak references. Coordinates are the hotel's name-pinned OpenStreetMap POI (the restaurant is on its roof). No verified direct phone number recorded."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "turk-fatih-tutak",
    "isim": "TURK FATİH TUTAK",
    "ulke": "Turkey",
    "sehir": "Istanbul",
    "semt": "Bomonti / Şişli",
    "mutfak": [
      "Modern Turkish",
      "Contemporary",
      "Fine Dining"
    ],
    "adres": "Bomonti, Silahşör Cd. Yeniyol Sk. No:2, Şişli, 34440 Istanbul, Türkiye",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TURK%20FATIH%20TUTAK%2C%20Bomonti%2C%20Yeniyol%20Sk.%20No%3A2%2C%20%C5%9Ei%C5%9Fli%2C%20Istanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive — destination fine-dining pricing."
    },
    "yemek": {
      "puan": 9.8,
      "ozet": "One of the most important restaurants in contemporary Turkish gastronomy: Fatih Tutak interprets Turkish ingredients, childhood memories and regional culinary traditions through modern fine-dining technique. Many courses are built around a story or a regional product rather than simply modernizing a familiar recipe. Holds two MICHELIN stars, and the tasting menu changes seasonally."
    },
    "neYenir": [
      {
        "yemek": "Current tasting menu",
        "kacKisiOnerdi": null,
        "not": "Changes seasonally — specific courses are not listed to avoid stale or unverifiable dish names."
      },
      {
        "yemek": "Signature bread course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Modern mantı-style preparations",
        "kacKisiOnerdi": null,
        "not": "When featured on the current menu."
      },
      {
        "yemek": "Seasonal seafood course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature dessert sequence",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.1,
      "ozet": "Refined and contemporary, but deliberately puts the food ahead of spectacle — quieter and more serious than Gallada, Ulus 29 or Sunset, built for guests who want to focus on the tasting menu itself.",
      "etiketler": [
        "fine-dining",
        "simple",
        "modern",
        "special-occasion",
        "calm"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.7,
      "ozet": "One of the restaurant's strongest elements — the team walks guests through the story or regional reference behind each course, which is key to understanding Tutak's cooking. Service is regularly described as precise and warm.",
      "artilar": [
        "Exceptional tasting-menu pacing",
        "Detailed explanations",
        "Strong wine and beverage knowledge",
        "Highly personalized service",
        "Fine-dining precision without excessive stiffness"
      ],
      "eksiler": [
        "Long tasting-menu experience",
        "Not suitable for quick or casual dining",
        "Very high price"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-2-yildiz",
        "detay": "Two MICHELIN stars — MICHELIN Guide 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Required; booking well in advance is recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official TURK FATİH TUTAK, MICHELIN Guide 2026, TripAdvisor, chef Fatih Tutak sources, recent fine-dining reviews. No name-pinned OpenStreetMap POI found, so coordinates are left null; no verified phone number recorded."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "ichiran-ramen-tokyo",
    "isim": "ICHIRAN Ramen",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Multiple branches",
    "mutfak": [
      "Ramen",
      "Tonkotsu",
      "Japanese",
      "Casual"
    ],
    "adres": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ICHIRAN%20Ramen%20Tokyo",
    "koordinat": null,
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": {
        "min": 1000,
        "max": 2000,
        "paraBirimi": "JPY"
      },
      "not": "Affordable — typically ¥1,000–2,000 depending on toppings and extras."
    },
    "yemek": {
      "puan": 8.8,
      "ozet": "A famous tonkotsu ramen chain built around solo dining booths and a single, perfected bowl. Order the classic tonkotsu and customize the broth richness, noodle firmness and toppings to taste."
    },
    "neYenir": [
      {
        "yemek": "Classic Tonkotsu Ramen",
        "kacKisiOnerdi": null,
        "not": "The signature and essentially only main dish."
      },
      {
        "yemek": "Extra noodles (kaedama)",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Soft-boiled egg",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Extra chashu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Kikurage mushrooms",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Matcha almond pudding",
        "kacKisiOnerdi": null,
        "not": "If available."
      }
    ],
    "ambiyans": {
      "puan": 8.1,
      "ozet": "Individual solo-dining booths and ordering by ticket machine and paper form — an iconic, purely food-focused format rather than a social restaurant. Many branches run late into the night or around the clock.",
      "etiketler": [
        "solo-dining",
        "casual",
        "iconic",
        "late-night"
      ],
      "dressCode": null,
      "uygun": [
        "solo"
      ]
    },
    "servis": {
      "puan": 8.4,
      "ozet": "Fast, systemized counter service built around the booth format — interaction is minimal by design.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": false,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "No traditional reservations; queue and branch-specific systems. Expect lines at peak hours.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official ICHIRAN, TableCheck where applicable, recent Tokyo dining references. ICHIRAN has many Tokyo branches, so no single address or coordinate is recorded — the catalog does not yet support per-branch entries."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "the-sg-club",
    "isim": "The SG Club",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Shibuya / Jinnan",
    "mutfak": [
      "Cocktail Bar",
      "Mixology"
    ],
    "adres": "1-7-8 Jinnan, Shibuya-ku, Tokyo, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=The%20SG%20Club%2C%201-7-8%20Jinnan%2C%20Shibuya%2C%20Tokyo",
    "koordinat": {
      "lat": 35.66425,
      "lng": 139.69924
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Premium cocktail-bar pricing."
    },
    "yemek": {
      "puan": 7.5,
      "ozet": "A bar first — food is light and secondary. The reason to come is the cocktail program: signature SG creations, seasonal drinks and shochu- and Japanese-spirit-based cocktails spread across the venue's different floors."
    },
    "neYenir": [
      {
        "yemek": "Signature SG cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Japanese spirit-based cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Shochu cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Bartender recommendations",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "One of Japan's most awarded cocktail bars — creative, intimate and energetic, with a distinct concept on each floor in the middle of Shibuya's Jinnan district.",
      "etiketler": [
        "cocktail-bar",
        "speakeasy",
        "creative",
        "nightlife",
        "intimate"
      ],
      "dressCode": "Smart casual",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.4,
      "ozet": "World-class bartending, with warm and knowledgeable guidance through the menu.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "50best",
        "detay": "World's 50 Best Bars No.10 (2020); Asia's 50 Best Bars No.3 (2021); Best Bar in Japan (2020, 2021)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+81 50 3138 2618",
      "link": null,
      "beklemeSuresi": "Recommended depending on floor/concept and time.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official SG Group, The World's 50 Best Bars / Asia's 50 Best Bars, recent bar reviews. Coordinates verified by name on OpenStreetMap/Nominatim."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "gonpachi-nishiazabu",
    "isim": "Gonpachi Nishiazabu",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Nishi-Azabu / Minato",
    "mutfak": [
      "Izakaya",
      "Japanese",
      "Soba",
      "Yakitori"
    ],
    "adres": "1-13-11 Nishiazabu, Minato City, Tokyo 106-0031, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gonpachi%20Nishiazabu%2C%201-13-11%20Nishiazabu%2C%20Minato%2C%20Tokyo",
    "koordinat": {
      "lat": 35.66016,
      "lng": 139.72359
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Mid-range izakaya pricing."
    },
    "yemek": {
      "puan": 8.3,
      "ozet": "A grand izakaya serving handmade soba, yakitori, tempura, grilled wagyu and stone-grilled rice dishes. The food is solid, but the cinematic hall — famous as the inspiration for the Kill Bill fight scene — is what makes the visit."
    },
    "neYenir": [
      {
        "yemek": "Handmade soba",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Yakitori / grilled skewers",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tempura",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled black wagyu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Silver cod with Saikyo miso",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Stone-grilled rice dishes",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "A huge, multi-level wooden hall with balconies and lanterns — a lively, theatrical old-Japan atmosphere famously associated with Kill Bill. Welcoming to first-time Tokyo visitors well into the night.",
      "etiketler": [
        "izakaya",
        "cinematic",
        "lively",
        "late-night"
      ],
      "dressCode": "Casual / smart casual",
      "uygun": [
        "groups"
      ]
    },
    "servis": {
      "puan": 8.5,
      "ozet": "High-volume but organized service, well accustomed to international guests.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Recommended for dinner.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Gonpachi, Tabelog, TripAdvisor, recent Tokyo dining reviews. Coordinates verified by name on OpenStreetMap/Nominatim (権八 西麻布)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "bar-centifolia",
    "isim": "BAR CENTIFOLIA",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Azabu-Juban / Minato",
    "mutfak": [
      "Cocktail Bar",
      "Mixology"
    ],
    "adres": "La Muse Azabu-Juban Bldg. 6F, 1-6-5 Azabu-Juban, Minato-ku, Tokyo 106-0045, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=BAR%20CENTIFOLIA%2C%201-6-5%20Azabu-Juban%2C%20Minato%2C%20Tokyo",
    "koordinat": {
      "lat": 35.65635,
      "lng": 139.73422
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Premium cocktail bar pricing."
    },
    "yemek": {
      "puan": 7.0,
      "ozet": "A bar, not a restaurant — food is minimal. The draw is seasonal fruit cocktails and theatrical signature drinks built with Japanese ingredients."
    },
    "neYenir": [
      {
        "yemek": "Seasonal fruit cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature theatrical cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Bartender's choice",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Classic cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Japanese ingredient cocktails",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "An intimate Azabu-Juban room where cocktail-making becomes performance — theatrical presentations in a small, late-night setting.",
      "etiketler": [
        "cocktail-bar",
        "theatrical",
        "intimate",
        "creative",
        "late-night"
      ],
      "dressCode": "Smart casual",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.5,
      "ozet": "Personal, performance-driven bartending with limited seats.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+81 3 3478 6228",
      "link": null,
      "beklemeSuresi": "Reservations available and strongly recommended due to limited seating.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): TableCheck, Tabelog, TripAdvisor, recent cocktail-bar reviews. Coordinates verified by name on OpenStreetMap/Nominatim (バー センティフォリア)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "ginza-tenryu",
    "isim": "Ginza Tenryu",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Ginza / Chuo",
    "mutfak": [
      "Chinese",
      "Gyoza",
      "Casual"
    ],
    "adres": "PUZZLE GINZA 4F, 2-5-19 Ginza, Chuo City, Tokyo 104-0061, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ginza%20Tenryu%2C%202-5-19%20Ginza%2C%20Chuo%2C%20Tokyo",
    "koordinat": null,
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": null,
      "not": "Affordable to moderate."
    },
    "yemek": {
      "puan": 8.8,
      "ozet": "A Ginza institution famous for its jumbo pan-fried gyoza, alongside shrimp noodle soup, fried rice and Chinese-style noodle dishes."
    },
    "neYenir": [
      {
        "yemek": "Signature jumbo gyoza",
        "kacKisiOnerdi": null,
        "not": "The house speciality."
      },
      {
        "yemek": "Shrimp noodle soup",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Fried rice",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Chinese-style noodle dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal side dishes",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 7.7,
      "ozet": "Busy and no-frills, a local classic in the middle of Ginza — the point is the gyoza, not the décor.",
      "etiketler": [
        "casual",
        "classic",
        "crowded",
        "simple"
      ],
      "dressCode": null,
      "uygun": [
        "family",
        "solo",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "Quick, functional service suited to a high-turnover lunch and dinner crowd.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Usually walk-in / queue-oriented; no verified current reservation policy recorded.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): recent Tokyo restaurant guides, Tabelog and local references, recent diner reviews. No name-pinned OpenStreetMap POI found, so coordinates are left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "mon-cher-ton-ton-roppongi",
    "isim": "Mon cher ton ton Roppongi",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Roppongi / Minato",
    "mutfak": [
      "Teppanyaki",
      "Kobe Beef",
      "Wagyu",
      "Seafood"
    ],
    "adres": "B1 Seryna Bldg., 3-12-2 Roppongi, Minato-ku, Tokyo 106-0032, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mon%20cher%20ton%20ton%2C%20Seryna%20Bldg.%2C%203-12-2%20Roppongi%2C%20Minato%2C%20Tokyo",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Luxury teppanyaki pricing."
    },
    "yemek": {
      "puan": 9.3,
      "ozet": "Seryna's long-standing Roppongi teppanyaki room — Kobe beef and premium wagyu, teppanyaki seafood and seasonal vegetables grilled at the counter, finished with garlic rice."
    },
    "neYenir": [
      {
        "yemek": "Kobe beef steak",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Premium Japanese wagyu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Teppanyaki seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal vegetables",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Chef's course menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Garlic rice",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "Counter-focused luxury teppanyaki with private rooms available — intimate and celebratory rather than showy.",
      "etiketler": [
        "luxury",
        "counter",
        "intimate",
        "special-occasion"
      ],
      "dressCode": "Smart casual / elegant",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.4,
      "ozet": "Classic chef-at-the-counter hospitality, in the long-standing Seryna tradition.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+81 3 3402 1055",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Seryna / Mon cher ton ton (seryna.co.jp), TableCheck, TripAdvisor, recent Tokyo dining reviews. Address verified from the official Seryna site and TableCheck; no name-pinned OpenStreetMap POI found, so coordinates are left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "udon-shin",
    "isim": "Udon Shin",
    "ulke": "Japan",
    "sehir": "Tokyo",
    "semt": "Yoyogi / Shinjuku area",
    "mutfak": [
      "Udon",
      "Japanese Noodles",
      "Casual"
    ],
    "adres": "2-20-16 Yoyogi, Shibuya, Tokyo 151-0053, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Udon%20Shin%2C%202-20-16%20Yoyogi%2C%20Shibuya%2C%20Tokyo",
    "koordinat": {
      "lat": 35.68648,
      "lng": 139.697
    },
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": null,
      "not": "Typical spend is around ¥1,500 per person."
    },
    "yemek": {
      "puan": 9.4,
      "ozet": "One of Tokyo's most sought-after udon shops — fresh handmade noodles, served hot or cold with beef or tempura, made to order in a tiny, food-first room."
    },
    "neYenir": [
      {
        "yemek": "Fresh handmade udon",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tempura udon",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Cold udon",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Beef udon",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal udon specials",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tempura sides",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.1,
      "ozet": "Small, minimal and entirely food-focused — the queue outside is part of the experience.",
      "etiketler": [
        "small",
        "casual",
        "queue",
        "simple"
      ],
      "dressCode": null,
      "uygun": [
        "solo"
      ]
    },
    "servis": {
      "puan": 8.5,
      "ozet": "Compact counter service — noodles are cooked to order, so pacing follows the kitchen.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Queue-based; a priority/queue system may be available through supported reservation services — not a conventional reservation.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Udon Shin, TableCheck, recent Tokyo food guides. Coordinates verified by name on OpenStreetMap/Nominatim (うどん 慎)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "chao-chao-gyoza-kyoto",
    "isim": "Chao Chao Gyoza",
    "ulke": "Japan",
    "sehir": "Kyoto",
    "semt": "Sanjo Kiyamachi / Shijo Kawaramachi",
    "mutfak": [
      "Gyoza",
      "Japanese",
      "Izakaya",
      "Casual"
    ],
    "adres": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Chao%20Chao%20Gyoza%20Kyoto",
    "koordinat": null,
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": null,
      "not": "Affordable."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Kyoto's beloved gyoza specialist — the signature stick-style gyoza, plus shrimp, chicken-cheese, Kujo green onion and ume-shiso variations, best sampled as an assorted set."
    },
    "neYenir": [
      {
        "yemek": "Chao Chao signature gyoza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Shrimp gyoza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Chicken cheese gyoza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Kujo green onion gyoza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Ume shiso gyoza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Assorted gyoza set",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "Small, lively counter rooms in the Kiyamachi/Kawaramachi nightlife district — busy, local and fun.",
      "etiketler": [
        "casual",
        "lively",
        "small",
        "counter",
        "crowded"
      ],
      "dressCode": null,
      "uygun": [
        "groups",
        "family"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Quick, friendly counter service — expect a wait at popular hours.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Mostly queue-oriented; expect waiting at popular hours.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Chao Chao, TripAdvisor, Tabelog, recent diner reviews. The Sanjo Kiyamachi and Shijo Kawaramachi branches are distinct venues; per the owner's instruction no single merged address is recorded — the catalog does not yet support per-branch entries."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "mouriya-gion",
    "isim": "Kobe Beef Steak Mouriya Gion",
    "ulke": "Japan",
    "sehir": "Kyoto",
    "semt": "Gion",
    "mutfak": [
      "Kobe Beef",
      "Teppanyaki",
      "Steakhouse",
      "Japanese"
    ],
    "adres": "Gion Mouriya Bldg., 7-1 Tokiwacho, Yamatooji-dori Shijo-sagaru, Higashiyama-ku, Kyoto 605-0802, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mouriya%20Gion%2C%20Tokiwacho%2C%20Higashiyama%2C%20Kyoto",
    "koordinat": {
      "lat": 35.00335,
      "lng": 135.77275
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive — special tasting courses can exceed ¥30,000 per person."
    },
    "yemek": {
      "puan": 9.5,
      "ozet": "The Mouriya group's Gion teppanyaki room, built around certified premium-grade Kobe beef — sirloin, filet and three-cut tasting courses cooked at the counter, rounded out with seasonal fish and teppanyaki vegetables. The Mouriya name has been associated with Kobe beef since 1885."
    },
    "neYenir": [
      {
        "yemek": "A5 Kobe beef course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Sirloin",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Filet / tenderloin",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Three-cut Kobe beef tasting course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal fish course",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Teppanyaki vegetables",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.2,
      "ozet": "Counter-focused luxury teppanyaki steps from Gion's historic streets — intimate and built for special occasions.",
      "etiketler": [
        "luxury",
        "counter",
        "intimate",
        "special-occasion"
      ],
      "dressCode": "Smart casual / elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.6,
      "ozet": "Chef-at-the-counter service, guiding guests through the cuts and courses.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+81 75 532 4129",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): official Mouriya (mouriya.co.jp/en/gion), TableCheck, TripAdvisor, recent Kyoto steakhouse reviews. Address verified from the official Mouriya site and TableCheck; coordinates verified by name on OpenStreetMap/Nominatim (モーリヤ祇園)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "lescamoteur-kyoto",
    "isim": "L'Escamoteur Bar",
    "ulke": "Japan",
    "sehir": "Kyoto",
    "semt": "Kiyamachi / Shimogyo",
    "mutfak": [
      "Cocktail Bar",
      "Mixology"
    ],
    "adres": "138-9 Saitocho, Shimogyo Ward, Kyoto 600-8012, Japan",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=L%27Escamoteur%20Bar%2C%20138-9%20Saitocho%2C%20Shimogyo%2C%20Kyoto",
    "koordinat": {
      "lat": 35.00182,
      "lng": 135.76999
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 5000,
        "max": 5999,
        "paraBirimi": "JPY"
      },
      "not": "Cocktails average roughly US$14; a full visit typically runs ¥5,000–6,000."
    },
    "yemek": {
      "puan": 7.0,
      "ozet": "A bar, not a restaurant — food is minimal. The point is the drinks: house 'elixirs' and flaming, alchemy-style experimental cocktails alongside seasonal and classic options."
    },
    "neYenir": [
      {
        "yemek": "House signature elixirs",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Flaming cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Bartender's choice",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Classic cocktails",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Experimental / alchemy-style drinks",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.8,
      "ozet": "A tiny, apothecary-like room above the Kiyamachi canal — magic, alchemy and steampunk details make it one of Kyoto's most atmospheric bars.",
      "etiketler": [
        "cocktail-bar",
        "theatrical",
        "intimate",
        "speakeasy",
        "steampunk",
        "nightlife"
      ],
      "dressCode": "Casual / smart casual",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.5,
      "ozet": "Showmanship-driven, friendly bartending in a very small space.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+81 75 708 8511",
      "link": null,
      "beklemeSuresi": "Limited capacity; arriving early is recommended. No verified current booking policy recorded.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated EATER editorial entry (Aug 2026): 50 Best Discovery listing, TripAdvisor, Tabelog, official L'Escamoteur social channels, recent Kyoto bar reviews. Coordinates verified by name on OpenStreetMap/Nominatim (レスカモトゥール バー)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-11"
  },
  {
    "id": "da-oscar-milano",
    "isim": "Ristorante Da Oscar",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Porta Venezia",
    "mutfak": [
      "Italian",
      "Milanese",
      "Pasta",
      "Traditional Italian"
    ],
    "adres": "Via Lazzaro Palazzi 4, 20124 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ristorante%20Da%20Oscar%2C%20Via%20Lazzaro%20Palazzi%204%2C%20Milano",
    "koordinat": {
      "lat": 45.47644,
      "lng": 9.20597
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Mid-range Milanese trattoria pricing."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "An old-school Porta Venezia favorite famous for enormous portions of rich, buttery pasta — the Oscar-style carbonara and penne are the calling cards, backed by cotoletta and Voronoff-style fillet."
    },
    "neYenir": [
      {
        "yemek": "Carbonara alla Oscar",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Penne alla Oscar",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Filetto Voronoff",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Cotoletta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Gnocchi",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Ravioli",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.2,
      "ozet": "Lively, unpretentious and proudly old-fashioned — a neighborhood classic rather than a design statement.",
      "etiketler": [
        "traditional",
        "classic",
        "lively",
        "local",
        "casual"
      ],
      "dressCode": "Casual / smart casual",
      "uygun": [
        "groups",
        "family"
      ]
    },
    "servis": {
      "puan": 8.4,
      "ozet": "Fast, familiar trattoria service that keeps the big plates coming.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 02 2951 8806",
      "link": null,
      "beklemeSuresi": "Recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Da Oscar, TripAdvisor. Porta Venezia location. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "le-specialita-milano",
    "isim": "Le Specialità",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Porta Vittoria",
    "mutfak": [
      "Pizza",
      "Italian",
      "Milanese",
      "Seafood"
    ],
    "adres": "Via Pietro Calvi 29, 20129 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Specialit%C3%A0%2C%20Via%20Pietro%20Calvi%2029%2C%20Milano",
    "koordinat": {
      "lat": 45.46268,
      "lng": 9.21048
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 31,
        "max": 50,
        "paraBirimi": "EUR"
      },
      "not": "Roughly €31–50 per person depending on order."
    },
    "yemek": {
      "puan": 9.1,
      "ozet": "A Milan pizza institution since 1977: thin, blistered wood-fired pies from the classic Margherita to seasonal specials, plus pasta and seafood. Gluten-free pizza is a house strength."
    },
    "neYenir": [
      {
        "yemek": "Wood-fired thin pizza",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pizza Margherita",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal specialty pizzas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Gluten-free pizza",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.2,
      "ozet": "Classic, family-friendly and reliably busy — the feel of a beloved local institution rather than a trend spot.",
      "etiketler": [
        "classic",
        "casual",
        "family",
        "local",
        "traditional"
      ],
      "dressCode": "Casual / smart casual",
      "uygun": [
        "family",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.3,
      "ozet": "Practiced, high-volume pizzeria service.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 02 738 8235",
      "link": null,
      "beklemeSuresi": "Recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Le Specialità, TripAdvisor, OpenTable. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "la-bullona-milano",
    "isim": "La Bullona",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Bullona / Sempione",
    "mutfak": [
      "Italian",
      "Seafood",
      "Mediterranean",
      "Contemporary"
    ],
    "adres": "Via Piero della Francesca 64, 20154 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=La%20Bullona%2C%20Via%20Piero%20della%20Francesca%2064%2C%20Milano",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Expensive dinner-and-scene pricing."
    },
    "yemek": {
      "puan": 8.3,
      "ozet": "Homemade pasta, raw fish and Mediterranean seafood served to one of Milan's most fashionable dinner crowds. The kitchen is solid, but the night itself is the main course."
    },
    "neYenir": [
      {
        "yemek": "Homemade pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Raw fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Mediterranean fish dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature desserts",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Cocktails",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "Music, glamour and a see-and-be-seen energy that builds as the evening goes on — dinner sliding into nightlife.",
      "etiketler": [
        "nightlife",
        "fashionable",
        "luxury",
        "lively",
        "live-music",
        "late-night",
        "people-watching"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "groups"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "Stylish but busy — on packed nights the show can outpace the service.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 344 084 1891",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official La Bullona, TripAdvisor. No name-pinned OpenStreetMap POI found (only the Bullona district), so coordinates are left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "langosteria-milano",
    "isim": "Langosteria",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Navigli / Via Savona",
    "mutfak": [
      "Seafood",
      "Italian",
      "Mediterranean",
      "Fine Dining"
    ],
    "adres": "Via Savona 10, 20144 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Langosteria%2C%20Via%20Savona%2010%2C%20Milano",
    "koordinat": {
      "lat": 45.45563,
      "lng": 9.16863
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Top-tier seafood pricing."
    },
    "yemek": {
      "puan": 9.5,
      "ozet": "Milan's reference point for luxury seafood: pristine raw selections, langoustines and oysters, then shellfish pasta and whole grilled fish. This is the Via Savona flagship that started it all."
    },
    "neYenir": [
      {
        "yemek": "Raw seafood selection",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Langoustines",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Oysters",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Warm seafood salad",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grilled fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lobster / shellfish pasta",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.2,
      "ozet": "Elegant, romantic and quietly fashionable — dressed-up dining without stiffness.",
      "etiketler": [
        "luxury",
        "elegant",
        "romantic",
        "fashionable",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.3,
      "ozet": "Polished, knowledgeable seafood service at pace with the room.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the MICHELIN Guide selection."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 02 5811 1649",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Langosteria, TripAdvisor, MICHELIN Guide. Via Savona flagship (not Montenapoleone). Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "dal-milanese",
    "isim": "Dal Milanese",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Porta Monforte",
    "mutfak": [
      "Milanese",
      "Italian",
      "Traditional Italian",
      "Contemporary"
    ],
    "adres": "Viale Premuda 16, 20129 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Dal%20Milanese%2C%20Viale%20Premuda%2016%2C%20Milano",
    "koordinat": {
      "lat": 45.46448,
      "lng": 9.20766
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 31,
        "max": 50,
        "paraBirimi": "EUR"
      },
      "not": "Roughly €31–50 per person."
    },
    "yemek": {
      "puan": 8.5,
      "ozet": "Milanese classics done with a modern hand: saffron risotto, ossobuco and a properly crisp cotoletta alla Milanese are the reasons to come."
    },
    "neYenir": [
      {
        "yemek": "Cotoletta alla Milanese",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Risotto alla Milanese",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Ossobuco",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Traditional Milanese starters",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "Retro-styled and social — traditional Milan wrapped in a stylish, modern room.",
      "etiketler": [
        "retro",
        "elegant",
        "lively",
        "traditional",
        "modern"
      ],
      "dressCode": "Business casual / smart casual",
      "uygun": [
        "groups",
        "couples"
      ]
    },
    "servis": {
      "puan": 8.1,
      "ozet": "Friendly and stylish, though busy evenings can stretch the pacing.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 02 7628 0457",
      "link": null,
      "beklemeSuresi": "Recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Dal Milanese, OpenTable, TripAdvisor. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "da-giacomo-milano",
    "isim": "Da Giacomo Milano",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Porta Vittoria",
    "mutfak": [
      "Italian",
      "Seafood",
      "Milanese",
      "Fine Dining"
    ],
    "adres": "Via Pasquale Sottocorno 6, 20129 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Da%20Giacomo%2C%20Via%20Pasquale%20Sottocorno%206%2C%20Milano",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Classic fine-dining seafood pricing."
    },
    "yemek": {
      "puan": 9.2,
      "ozet": "A historic Milanese dining room where seafood is the family trade: spaghetti with shellfish, seafood carpaccio, langoustines and whole fresh fish, finished with the house desserts."
    },
    "neYenir": [
      {
        "yemek": "Spaghetti with seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Fresh fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Langoustines",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seafood carpaccio",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Giacomo's desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.1,
      "ozet": "Old-world elegance — wood panels, soft light and a room that feels like classic Milan itself.",
      "etiketler": [
        "classic",
        "elegant",
        "romantic",
        "luxury",
        "historic-building"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Courtly, experienced service in the old style.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 02 7602 3313",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Giacomo Milano, TripAdvisor, SevenRooms. Historic Via Sottocorno restaurant (not Giacomo Arengario). No name-pinned OpenStreetMap POI found, coordinates left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "veramente-milano",
    "isim": "Veramente",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Brera",
    "mutfak": [
      "Italian",
      "Milanese",
      "Contemporary"
    ],
    "adres": "Via Palermo 11, 20121 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Veramente%2C%20Via%20Palermo%2011%2C%20Milano",
    "koordinat": {
      "lat": 45.47527,
      "lng": 9.18497
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Mid-range Brera pricing."
    },
    "yemek": {
      "puan": 8.9,
      "ozet": "New-generation Milanese cooking in Brera: risotto, fresh pasta and seasonal Italian plates that respect the classics without feeling stuck in them."
    },
    "neYenir": [
      {
        "yemek": "Risotto",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Fresh pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Milanese classics",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal Italian dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Meat dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.9,
      "ozet": "Warm, stylish and social — a Brera room that works as easily for a date as for dinner with friends.",
      "etiketler": [
        "elegant",
        "warm",
        "modern",
        "date-night",
        "lively"
      ],
      "dressCode": "Smart casual",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Attentive and easy-going.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Veramente, TripAdvisor, recent Milan dining guides. Brera location at Via Palermo 11. Coordinates verified by name on OpenStreetMap. No verified phone recorded."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "gloria-osteria-milano",
    "isim": "Gloria Osteria Milano",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Brera",
    "mutfak": [
      "Italian",
      "Osteria",
      "Contemporary"
    ],
    "adres": "Via Tivoli 3, 20121 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gloria%20Osteria%2C%20Via%20Tivoli%203%2C%20Milano",
    "koordinat": {
      "lat": 45.47179,
      "lng": 9.18324
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Expensive, scene-driven Brera pricing."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Crowd-pleasing Italian done well: homemade pasta, burrata and truffle dishes leading into seasonal mains and a proper tiramisu."
    },
    "neYenir": [
      {
        "yemek": "Homemade pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Burrata",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Truffle dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Italian starters",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal mains",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.6,
      "ozet": "Maximalist, flower-drenched glamour — one of Milan's most photographed dining rooms, romantic and buzzing at once.",
      "etiketler": [
        "glamorous",
        "romantic",
        "lively",
        "fashionable"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.1,
      "ozet": "Energetic and polished for a room this busy.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 344 073 9345",
      "link": null,
      "beklemeSuresi": "Strongly recommended; walk-ins subject to availability.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Gloria Osteria, TripAdvisor. Coordinates verified by name on OpenStreetMap (Osteria Gloria, Via Tivoli)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "la-gioia-san-marco",
    "isim": "La Gioia San Marco",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Brera / San Marco",
    "mutfak": [
      "Italian",
      "Seafood",
      "Fine Dining"
    ],
    "adres": "Via San Marco 38, 20121 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=La%20Gioia%2C%20Via%20San%20Marco%2038%2C%20Milano",
    "koordinat": {
      "lat": 45.47818,
      "lng": 9.18909
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Fine-dining pricing."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Refined Italian seafood in San Marco: raw fish, seafood pasta and delicate seasonal starters built around the day's catch."
    },
    "neYenir": [
      {
        "yemek": "Seafood pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Raw fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal Italian starters",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Fresh fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "Elegant, intimate and romantic — a jewel-box room made for slow, special dinners.",
      "etiketler": [
        "elegant",
        "romantic",
        "luxury",
        "intimate",
        "fine-dining"
      ],
      "dressCode": "Elegant / business casual",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.1,
      "ozet": "Warm, precise and unhurried.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 388 883 9951",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official La Gioia San Marco, TripAdvisor (Travelers' Choice 2025), SevenRooms. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "al-baretto-san-marco",
    "isim": "Al Baretto San Marco",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "San Marco / Brera",
    "mutfak": [
      "Italian",
      "Seafood",
      "Fine Dining"
    ],
    "adres": "Via Marsala 2, 20121 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Al%20Baretto%20San%20Marco%2C%20Via%20Marsala%202%2C%20Milano",
    "koordinat": {
      "lat": 45.47839,
      "lng": 9.18793
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Usually upwards of €51 per person depending on order."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Understated classic Italian seafood — the lobster linguine is the signature, alongside pristine raw fish and simply treated seasonal catches."
    },
    "neYenir": [
      {
        "yemek": "Linguine all'Astice",
        "kacKisiOnerdi": null,
        "not": "The signature lobster linguine."
      },
      {
        "yemek": "Fresh seafood",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Raw fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal fish",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Traditional Italian desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.3,
      "ozet": "Understated luxury in the old Milanese manner — intimate, classic and quietly romantic.",
      "etiketler": [
        "classic",
        "elegant",
        "intimate",
        "romantic",
        "luxury"
      ],
      "dressCode": "Business casual / elegant",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.1,
      "ozet": "Discreet, attentive service in step with the room.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 334 352 9882",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Al Baretto San Marco, TripAdvisor, SevenRooms, OpenTable. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "il-salumaio-di-montenapoleone",
    "isim": "Il Salumaio di Montenapoleone",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Quadrilatero della Moda",
    "mutfak": [
      "Italian",
      "Milanese",
      "Mediterranean"
    ],
    "adres": "Via Santo Spirito 10 / Via Gesù 5, Palazzo Bagatti Valsecchi, 20121 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Il%20Salumaio%20di%20Montenapoleone%2C%20Via%20Santo%20Spirito%2010%2C%20Milano",
    "koordinat": {
      "lat": 45.46969,
      "lng": 9.19459
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Fashion-district pricing."
    },
    "yemek": {
      "puan": 8.7,
      "ozet": "A fashion-district legend since 1957: burrata, fresh pasta, tortellini and porcini dishes served in one of Milan's most beautiful settings."
    },
    "neYenir": [
      {
        "yemek": "Burrata",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Milanese dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Fresh pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tortellini",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Porcini mushroom pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Steak",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "The ivy-clad courtyard of Palazzo Bagatti Valsecchi is one of Milan's dreamiest places to sit — old Milan elegance in the middle of the fashion district.",
      "etiketler": [
        "historic-building",
        "courtyard",
        "luxury",
        "elegant",
        "terrace",
        "fashionable"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.5,
      "ozet": "Elegant and practiced, though prime hours keep the team stretched.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 02 7600 1123",
      "link": null,
      "beklemeSuresi": "Strongly recommended, especially for courtyard seating.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Il Salumaio di Montenapoleone, TripAdvisor. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "dongio-milano",
    "isim": "Dongiò",
    "ulke": "Italy",
    "sehir": "Milan",
    "semt": "Porta Romana",
    "mutfak": [
      "Calabrian",
      "Southern Italian",
      "Traditional Italian"
    ],
    "adres": "Via Bernardino Corio 3, 20135 Milano, Italy",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Dongi%C3%B2%2C%20Via%20Bernardino%20Corio%203%2C%20Milano",
    "koordinat": {
      "lat": 45.45164,
      "lng": 9.20491
    },
    "fiyat": {
      "segment": "ucuz",
      "kisiBasi": null,
      "not": "One of the best-value tables in Milan."
    },
    "yemek": {
      "puan": 9.2,
      "ozet": "Fiery, generous Calabrian cooking in Porta Romana: 'nduja-spiked pastas like the spaghetti alla Tamarro, melting caciocavallo and the spice-loving south on every plate."
    },
    "neYenir": [
      {
        "yemek": "Spaghetti alla Tamarro",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Maccheroncini alla Disperata",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Calabrian pasta",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Caciocavallo",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Traditional spicy Calabrian dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal southern Italian dishes",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 8.0,
      "ozet": "Small, no-frills and genuinely local — the charm is the food and the welcome, not the décor.",
      "etiketler": [
        "traditional",
        "local",
        "casual",
        "small",
        "simple"
      ],
      "dressCode": null,
      "uygun": [
        "family",
        "groups",
        "solo"
      ]
    },
    "servis": {
      "puan": 8.7,
      "ozet": "Warm, family-style hospitality.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the MICHELIN Guide selection."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "phone"
      ],
      "telefon": "+39 349 276 1011",
      "link": null,
      "beklemeSuresi": "Recommended; the restaurant manages bookings directly.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): official Dongiò, MICHELIN Guide, TripAdvisor. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "gaggan-bangkok",
    "isim": "Gaggan",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Sukhumvit / Watthana",
    "mutfak": [
      "Progressive Indian",
      "Creative",
      "Fine Dining",
      "Asian Fusion"
    ],
    "asia50Sira": 3,
    "adres": "68 Sukhumvit 31, Khlong Tan Nuea, Watthana, Bangkok 10110, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gaggan+68+Sukhumvit+31+Bangkok+Thailand",
    "koordinat": {
      "lat": 13.74076,
      "lng": 100.56757
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive tasting-menu experience."
    },
    "yemek": {
      "puan": 9.9,
      "ozet": "Gaggan Anand's progressive Indian tasting menu is one of the world's most talked-about meals — playful, provocative and eaten partly with your hands, from the Yoghurt Explosion to Lick It Up. Holds a Michelin star and was named the best restaurant in Thailand."
    },
    "neYenir": [
      {
        "yemek": "Current Gaggan tasting experience",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Yoghurt Explosion",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lick It Up",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Progressive Indian courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Hand-eaten interactive courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal chef creations",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "A chef's-table show with music, energy and theatre — dinner as performance, not ceremony.",
      "etiketler": [
        "theatrical",
        "creative",
        "avant-garde",
        "lively",
        "special-occasion"
      ],
      "dressCode": "Smart casual / elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.6,
      "ozet": "The team is part of the performance — precise, funny and completely in sync with the menu.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 98 883 1022",
      "link": null,
      "beklemeSuresi": "Required — book well in advance.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.3, Best Restaurant in Thailand), official Gaggan, MICHELIN Guide Thailand 2026. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "nusara-bangkok",
    "isim": "Nusara",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Phra Nakhon / Old Town",
    "mutfak": [
      "Contemporary Thai",
      "Fine Dining"
    ],
    "asia50Sira": 5,
    "adres": "336 Maha Rat Road, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nusara+336+Maha+Rat+Road+Bangkok+Thailand",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Luxury Thai fine dining."
    },
    "yemek": {
      "puan": 9.7,
      "ozet": "Brothers Ton and Tam Tassanakajohn cook refined family-recipe Thai — blue swimming crab curry, panang with brisket and holy-basil Wagyu — in a Michelin-starred jewel box across from Wat Pho."
    },
    "neYenir": [
      {
        "yemek": "Blue swimming crab curry",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Yum tua plu with river prawn",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Panang curry with brisket",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Thai Wagyu with holy basil",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Regional Thai relishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Thai ice cream sandwich",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "Intimate rooms with a rooftop view of Wat Pho's spires — old Bangkok romance at its most concentrated.",
      "etiketler": [
        "intimate",
        "rooftop",
        "elegant",
        "romantic",
        "view",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.8,
      "ozet": "Gracious, personal and quietly perfect — a tiny room served like a private dinner.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 97 293 5549",
      "link": null,
      "beklemeSuresi": "Required — very limited seating; book far ahead.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.5), official Nusara, MICHELIN Guide Thailand 2026. No name-pinned OpenStreetMap POI found; coordinates left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "gaggan-at-louis-vuitton",
    "isim": "Gaggan at Louis Vuitton",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Pathum Wan / Phloen Chit",
    "mutfak": [
      "Creative",
      "Asian Fusion",
      "Fine Dining"
    ],
    "asia50Sira": 8,
    "adres": "LV The Place Bangkok, 2F, 502 Phloen Chit Road, Bangkok 10330, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gaggan+at+Louis+Vuitton+502+Phloen+Chit+Road+Bangkok+Thailand",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 9.6,
      "ozet": "Gaggan Anand's concept inside Louis Vuitton's Bangkok flagship, with Vix Rathour on the pass and Dej Kewkacha on desserts: Indian, Thai, Japanese and French ideas folded into one gleaming tasting menu."
    },
    "neYenir": [
      {
        "yemek": "Seasonal tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lick It Up",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Yoghurt Explosion",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Progressive Asian courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "French-influenced Gaggan creations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Dej Kewkacha dessert courses",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.9,
      "ozet": "Fashion-house glamour taken to the extreme — immersive, exclusive and unlike anywhere else in Bangkok.",
      "etiketler": [
        "luxury",
        "fashionable",
        "glamorous",
        "fine-dining",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.7,
      "ozet": "Couture-level attention from arrival to the last dessert.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 61 413 6295",
      "link": null,
      "beklemeSuresi": "Required / strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.8), Louis Vuitton, MICHELIN Guide Thailand 2026 (selection, no star per owner instruction). No name-pinned OSM POI; coordinates left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "sorn-bangkok",
    "isim": "Sorn",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Sukhumvit / Khlong Toei",
    "mutfak": [
      "Southern Thai",
      "Thai",
      "Fine Dining"
    ],
    "asia50Sira": 12,
    "adres": "56 Soi Sukhumvit 26, Klongton, Khlong Toei, Bangkok 10110, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sorn+56+Soi+Sukhumvit+26+Bangkok+Thailand",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive; one of Bangkok's hardest tables."
    },
    "yemek": {
      "puan": 10.0,
      "ozet": "Supaksorn 'Ice' Jongsiri's three-Michelin-star temple of Southern Thai cooking — crab roe kan chu piang, fierce curries and seafood of startling purity. For many, the single most essential meal in Thailand."
    },
    "neYenir": [
      {
        "yemek": "Current Southern Thai tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Kan Chu Piang — crab roe and blue swimmer crab leg",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Southern seafood courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Spice-driven curry courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Regional Southern Thai dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal dessert sequence",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "An intimate Thai house where tradition and luxury sit side by side — destination dining in the truest sense.",
      "etiketler": [
        "intimate",
        "luxury",
        "traditional",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.9,
      "ozet": "Deeply knowledgeable and proud of every region on the plate.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 99 081 1119",
      "link": null,
      "beklemeSuresi": "Required — extremely difficult reservation; book far in advance.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.12), official Sorn, MICHELIN Guide Thailand 2026. No name-pinned OSM POI; coordinates left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "suhring-bangkok",
    "isim": "Sühring",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Yen Akat / Yan Nawa",
    "mutfak": [
      "German",
      "Contemporary European",
      "Fine Dining"
    ],
    "asia50Sira": 18,
    "adres": "10 Soi Yen Akat 3, Chong Nonsi, Yan Nawa, Bangkok 10120, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Suhring+10+Soi+Yen+Akat+3+Bangkok+Thailand",
    "koordinat": {
      "lat": 13.71082,
      "lng": 100.54552
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 9.8,
      "ozet": "Twin brothers Thomas and Mathias Sühring cook modern German food of three-Michelin-star finesse — truffle spätzle, lobster, A5 Wagyu and childhood classics reimagined with wit."
    },
    "neYenir": [
      {
        "yemek": "Seasonal German tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Spätzle with Périgord truffle",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Lobster with seasonal accompaniments",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Scallop preparations",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "A5 Wagyu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Modern interpretations of German classics",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "A garden villa of unusual calm — romantic, unhurried and green, far from Bangkok's noise.",
      "etiketler": [
        "villa",
        "garden",
        "calm",
        "romantic",
        "luxury",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.8,
      "ozet": "Relais & Châteaux polish with real warmth; the wine service is a highlight.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 2 107 2777",
      "link": null,
      "beklemeSuresi": "Required / strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.18), official Sühring, MICHELIN Guide Thailand 2026. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "potong-bangkok",
    "isim": "Potong",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Chinatown / Samphanthawong",
    "mutfak": [
      "Thai-Chinese",
      "Contemporary",
      "Fine Dining"
    ],
    "asia50Sira": 25,
    "adres": "422 Vanich Road, Samphanthawong, Bangkok 10100, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Potong+422+Vanich+Road+Bangkok+Thailand",
    "koordinat": {
      "lat": 13.73928,
      "lng": 100.50844
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Very expensive."
    },
    "yemek": {
      "puan": 9.7,
      "ozet": "Chef Pam Soontornyanakij tells her family's Thai-Chinese story through a Michelin-starred tasting menu in their ancestral Chinatown pharmacy — aged duck, crab-roe brioche and heritage flavors reborn."
    },
    "neYenir": [
      {
        "yemek": "Current tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Historical Stories — crab roe, blue crab and brioche",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Aged duck",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "House-made charcuterie",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Thai-Chinese heritage courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Pandan, peanut and tamarind dessert sequence",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.8,
      "ozet": "Five dramatic floors of a century-old Chinatown apothecary — one of the most atmospheric dining rooms in Asia.",
      "etiketler": [
        "historic-building",
        "glamorous",
        "intimate",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.6,
      "ozet": "Storytelling service that carries the family history course by course.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 82 979 3950",
      "link": null,
      "beklemeSuresi": "Required — book ahead.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.25), official Potong, MICHELIN Guide Thailand 2026. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "ms-maria-mr-singh-bangkok",
    "isim": "Ms. Maria & Mr. Singh",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Sukhumvit / Watthana",
    "mutfak": [
      "Indian",
      "Mexican",
      "Asian Fusion"
    ],
    "asia50Sira": 27,
    "adres": "2nd Floor, 68 Sukhumvit 31, Klongton-Neu, Watthana, Bangkok 10110, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ms+Maria+Mr+Singh+68+Sukhumvit+31+Bangkok+Thailand",
    "koordinat": {
      "lat": 13.74076,
      "lng": 100.56757
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Expensive, but far more casual than Bangkok's big tasting menus."
    },
    "yemek": {
      "puan": 9.3,
      "ozet": "Gaggan Anand's joyful Indian-Mexican mashup: vindaloo tacos, butter-chicken enchiladas and keema quesadillas, finished with cardamom churros and rose-pistachio tres leches."
    },
    "neYenir": [
      {
        "yemek": "Pork vindaloo tacos",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Butter chicken enchiladas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Keema quesadillas",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Indian-Mexican sharing dishes",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Churros with cardamom chocolate",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Rose and pistachio tres leches",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.5,
      "ozet": "Color, kitsch and mariachi-meets-Bollywood energy — the fun side of the Gaggan universe.",
      "etiketler": [
        "colorful",
        "lively",
        "casual",
        "fun",
        "sharing"
      ],
      "dressCode": "Casual / smart casual",
      "uygun": [
        "groups",
        "couples"
      ]
    },
    "servis": {
      "puan": 9.1,
      "ozet": "Playful and quick, built for sharing tables.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 91 698 6688",
      "link": null,
      "beklemeSuresi": "Recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.27), official Ms. Maria & Mr. Singh, Gaggan Anand. Same building as Gaggan (2nd floor) — shares its verified coordinates."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "le-du-bangkok",
    "isim": "Le Du",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Silom / Bang Rak",
    "mutfak": [
      "Modern Thai",
      "Contemporary Thai",
      "Fine Dining"
    ],
    "asia50Sira": 36,
    "adres": "399/3 Silom 7 Alley, Silom, Bang Rak, Bangkok 10500, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Le+Du+399%2F3+Silom+7+Alley+Bangkok+Thailand",
    "koordinat": {
      "lat": 13.72506,
      "lng": 100.5293
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Luxury fine dining."
    },
    "yemek": {
      "puan": 9.6,
      "ozet": "Chef Ton's Michelin-starred ode to Thai produce — the giant river prawn is legend, and the seasonal menu once carried this room to the top of Asia's dining map."
    },
    "neYenir": [
      {
        "yemek": "Current seasonal tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Signature river prawn",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Grouper with ant eggs",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal Thai produce",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Contemporary Thai curry courses",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Seasonal desserts",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.1,
      "ozet": "Understated and contemporary — the plates carry the drama, not the room.",
      "etiketler": [
        "modern",
        "intimate",
        "fine-dining",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.5,
      "ozet": "Precise, warm and deeply fluent in Thai ingredients.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 92 919 9969",
      "link": null,
      "beklemeSuresi": "Required / strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.36, former Asia's No.1), official Le Du, MICHELIN Guide Thailand 2026. Coordinates verified by name on OpenStreetMap."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "wana-yook-bangkok",
    "isim": "Wana Yook",
    "ulke": "Thailand",
    "sehir": "Bangkok",
    "semt": "Ratchathewi",
    "mutfak": [
      "Thai",
      "Contemporary Thai",
      "Fine Dining"
    ],
    "asia50Sira": 47,
    "adres": "5/15 Phaya Thai Road, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Wana+Yook+5%2F15+Phaya+Thai+Road+Bangkok+Thailand",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Fine dining."
    },
    "yemek": {
      "puan": 9.4,
      "ozet": "Chalee Kader elevates khao gaeng — Thailand's humble curry-over-rice — into a Michelin-starred tasting menu of regional rices, tai pla curry with crab and prawns, and a modern piak poon to finish."
    },
    "neYenir": [
      {
        "yemek": "Seasonal tasting menu",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Reimagined khao gaeng",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Tod man pla",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Crab and tiger prawns with tai pla curry",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Regional Thai rice varieties",
        "kacKisiOnerdi": null,
        "not": null
      },
      {
        "yemek": "Modern piak poon dessert",
        "kacKisiOnerdi": null,
        "not": null
      }
    ],
    "ambiyans": {
      "puan": 9.7,
      "ozet": "A restored colonial house of quiet elegance — art, wood and soft light making the meal feel like a private visit.",
      "etiketler": [
        "historic-building",
        "elegant",
        "intimate",
        "art",
        "romantic",
        "special-occasion"
      ],
      "dressCode": "Smart elegant",
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.4,
      "ozet": "Composed and generous with the stories behind each region.",
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star — MICHELIN Guide Thailand 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+66 63 662 3598",
      "link": null,
      "beklemeSuresi": "Strongly recommended.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Owner-curated entry (Aug 2026): Asia's 50 Best Restaurants 2026 (No.47), official Wana Yook, MICHELIN Guide Thailand 2026. No name-pinned OSM POI; coordinates left null."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "smyth-chicago",
    "isim": "Smyth",
    "ulke": "USA",
    "sehir": "Chicago",
    "semt": "West Loop",
    "mutfak": [
      "Contemporary American",
      "New American",
      "Tasting Menu"
    ],
    "adres": "177 N Ada St #101, Chicago, IL 60607, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Smyth+177+N+Ada+St+Chicago+IL+60607",
    "koordinat": {
      "lat": 41.8852803,
      "lng": -87.6605832
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 420,
        "max": 420,
        "paraBirimi": "USD"
      },
      "not": "Single tasting menu priced at $420 per person, exclusive of beverage, tax and gratuity; optional wine pairings run $245-475 more. From November 5, 2026 the reservation system moves from a $100 deposit to full prepayment."
    },
    "yemek": {
      "puan": 9.3,
      "ozet": "Chicago's only three-Michelin-starred kitchen, built around a daily-changing farm-to-table tasting menu that leans into bold, unexpected pairings — a crab course and a wagyu-and-truffle-doughnut plate are the ones reviewers keep returning to. Praise for the cooking is close to unanimous. A smaller but recurring thread of opinion argues the ambition occasionally outpaces coherence, especially since the third star arrived."
    },
    "neYenir": [
      {
        "yemek": "Dungeness crab course",
        "kacKisiOnerdi": null,
        "not": "Singled out repeatedly for its inventive, unexpected composition."
      },
      {
        "yemek": "Wagyu with truffle doughnut and marrow glaze",
        "kacKisiOnerdi": null,
        "not": "Called one of the standout courses on the current tasting menu."
      },
      {
        "yemek": "Rainbow trout & pineapple",
        "kacKisiOnerdi": null,
        "not": "Cited as a seasonal highlight on the current menu."
      },
      {
        "yemek": "Bittersweet chocolate and maitake mushroom tart",
        "kacKisiOnerdi": null,
        "not": "A frequently mentioned dessert course blending savory and sweet."
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "An open kitchen anchors a warm, understated dining room that reads as refined without stiffness — closer to relaxed than the Michelin pedigree might suggest.",
      "etiketler": [
        "fine-dining",
        "tasting-menu",
        "open-kitchen",
        "refined",
        "farm-to-table"
      ],
      "dressCode": "Smart and Elegant",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.3,
      "ozet": "Staff are generally described as technically precise and attentive to individual guest needs. A recurring minority complaint is that dish explanations can lean jargon-heavy rather than illuminating for less experienced diners.",
      "artilar": [
        "Attentive, well-paced service",
        "Staff described as empathetic to guest needs"
      ],
      "eksiler": [
        "Dish explanations sometimes seen as overly technical rather than clarifying"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars — 2025 MICHELIN Guide Chicago, maintained into 2026; currently the only three-star restaurant in the city."
      },
      {
        "tip": "50best",
        "detay": "No. 1, North America's 50 Best Restaurants 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+1 773-913-3773",
      "link": null,
      "beklemeSuresi": "Reservations released on a rolling 90-day basis at 12:00 PM CST via Tock.",
      "kapora": {
        "var": true,
        "detay": "$100 per-person deposit under the current system; from November 5, 2026 reservations require full prepayment at booking."
      }
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide ceremony coverage, North America's 50 Best Restaurants announcement, Chicago Sun-Times/NBC Chicago news coverage, official Smyth/Tock booking pages, and aggregated review commentary (Chicago magazine, travel and food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "dakar-nola",
    "isim": "Dakar NOLA",
    "ulke": "USA",
    "sehir": "New Orleans",
    "semt": "Leonidas",
    "mutfak": [
      "Senegalese",
      "Creole",
      "West African",
      "Tasting Menu",
      "Pescatarian"
    ],
    "adres": "937 Leonidas St, New Orleans, LA 70118, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Dakar+NOLA+937+Leonidas+St+New+Orleans+LA+70118",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 175,
        "max": 175,
        "paraBirimi": "USD"
      },
      "not": "Seven-course tasting menu at $175 per person; wine pairing adds $120 and a 20% service charge applies to beverages. A separate three-course Wednesday chef's menu is offered at $55."
    },
    "yemek": {
      "puan": 8.9,
      "ozet": "A pescatarian, Senegalese-rooted tasting menu that threads Louisiana ingredients through West African technique and family-style courses; the concept won a James Beard Award for Best New Restaurant in 2024. The cooking draws consistent praise for depth of flavor and its personal, storytelling structure, with the seafood and rice courses singled out most often. Portions run intentionally small given the multi-course format."
    },
    "neYenir": [
      {
        "yemek": "Fonio salad",
        "kacKisiOnerdi": null,
        "not": "West African millet with citrus, beets and lemon vinaigrette."
      },
      {
        "yemek": "Grilled head-on Gulf shrimp",
        "kacKisiOnerdi": null,
        "not": "Served over tamarind syrup with a New Orleans-style barbecue-shrimp influence."
      },
      {
        "yemek": "Louisiana rice course",
        "kacKisiOnerdi": null,
        "not": "Jollof-style, citrus- and spice-seasoned rice closing the family-style portion of the meal."
      }
    ],
    "ambiyans": {
      "puan": 8.6,
      "ozet": "Set inside a traditional New Orleans house turned intimate dining room, with some courses served family-style around a shared table. Reviewers consistently describe the room as warm and inviting rather than formal.",
      "etiketler": [
        "intimate",
        "historic-building",
        "tasting-menu",
        "warm"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "solo",
        "groups"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Staff are repeatedly described as affable and professional, guiding guests through the multi-course, partly communal format without feeling rushed despite tight seating turns.",
      "artilar": [
        "Warm, professional front-of-house staff",
        "Clear explanation of dishes and format"
      ],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the inaugural 2025 MICHELIN Guide American South (New Orleans) with a Recommended designation — no star or Bib Gourmand."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+1 504-493-9396",
      "link": "https://www.dakarnola.com/reservations",
      "beklemeSuresi": "Booking window opens 21 days in advance at 10:00 AM Central.",
      "kapora": {
        "var": true,
        "detay": "Full tasting-menu payment is taken at booking; the restaurant states all sales are final."
      }
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from the official Dakar NOLA site (menu, reservations), MICHELIN Guide American South 2025 coverage, the James Beard Foundation award record, and aggregated review commentary (Tripadvisor, Yelp, The Local Palate, Eater)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "albi-dc",
    "isim": "Albi",
    "ulke": "USA",
    "sehir": "Washington, D.C.",
    "semt": "Navy Yard",
    "mutfak": [
      "Levantine",
      "Palestinian",
      "Middle Eastern",
      "Wood-Fired"
    ],
    "adres": "1346 4th St SE, Washington, DC 20003, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Albi+1346+4th+St+SE+Washington+DC+20003",
    "koordinat": {
      "lat": 38.8740554,
      "lng": -77.0003218
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 150,
        "max": 200,
        "paraBirimi": "USD"
      },
      "not": "Estimated $150-200 per person for the Sofra tasting menu before drinks, tax and tip, based on aggregated coverage rather than a published menu price; with wine pairings two diners should expect roughly $300-450 total."
    },
    "yemek": {
      "puan": 9.1,
      "ozet": "Progressive Levantine, live-fire cooking rooted in the chef's Palestinian heritage — crisped kibbeh, fresh-baked pita and a duck-and-foie maqluba are the dishes reviewers return to most. The chef holds a national Outstanding Chef honor, and the restaurant's Michelin star has held every year since it first arrived. Complaints are rare and center more on how hard the room is to book than on the food itself."
    },
    "neYenir": [
      {
        "yemek": "Crispy kibbeh with pine nuts",
        "kacKisiOnerdi": null,
        "not": "A recurring opening-course favorite."
      },
      {
        "yemek": "Fresh-baked pita with hummus",
        "kacKisiOnerdi": null,
        "not": "Called a must-try bread course."
      },
      {
        "yemek": "BBQ'd warak dawali (stuffed grape leaves)",
        "kacKisiOnerdi": null,
        "not": "Live-fire preparation highlighted in menu coverage."
      },
      {
        "yemek": "Duck and foie gras kefta maqluba",
        "kacKisiOnerdi": null,
        "not": "A skillet dish of rice, lentils and golden onions folded with duck breast, foie gras and kefta."
      },
      {
        "yemek": "Brown butter knafeh",
        "kacKisiOnerdi": null,
        "not": "Signature dessert combining sweet and savory, buttery layers."
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "Floor-to-ceiling windows open the dining room onto the hearth-powered kitchen on a busy Navy Yard corner, giving the space an energetic, see-and-be-seen quality rather than hushed formality.",
      "etiketler": [
        "lively",
        "open-kitchen",
        "modern",
        "wood-fired",
        "special-occasion"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups",
        "business dinner"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star, held continuously since 2022 — maintained in the 2025 MICHELIN Guide Washington, D.C."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": "+1 202-921-9592",
      "link": null,
      "beklemeSuresi": "Reservations strongly recommended; limited à la carte walk-in seating sometimes available.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from the official Albi site, MICHELIN Guide Washington, D.C. pages and ceremony articles, James Beard Foundation record, Washingtonian/Washington Post recognitions, and aggregated review commentary (The Infatuation, Tripadvisor, Resto Mojo)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "atomix-nyc",
    "isim": "Atomix",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "NoMad",
    "mutfak": [
      "Korean",
      "Tasting Menu",
      "Contemporary"
    ],
    "adres": "104 E 30th St, New York, NY 10016, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Atomix+104+E+30th+St+New+York+NY+10016",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 375,
        "max": 375,
        "paraBirimi": "USD"
      },
      "not": "Tasting menu (course count reported between 10 and 15 depending on source) priced at $375 per person, prepaid and nonrefundable at booking; optional beverage pairing adds $175."
    },
    "yemek": {
      "puan": 9.6,
      "ozet": "A globally recognized tasting-menu destination for contemporary Korean cooking, built around banchan-inspired ideas and precise, seasonal technique. It is consistently cited as one of the hardest reservations in the city, and the cooking is treated as a genuine reference point rather than a passing trend. Criticism is rare and mostly directed at the rigidity of the nonrefundable booking system rather than the food."
    },
    "neYenir": [
      {
        "yemek": "Jeju abalone in soy reduction",
        "kacKisiOnerdi": null,
        "not": "A recurring highlight of the tasting menu."
      },
      {
        "yemek": "Korean wagyu with truffle sauce",
        "kacKisiOnerdi": null,
        "not": "Cited among the menu's standout protein courses."
      },
      {
        "yemek": "Ganjang gejang (soy-marinated crab) with rice cake",
        "kacKisiOnerdi": null,
        "not": "Described as melting in the mouth."
      },
      {
        "yemek": "Ssamjang-glazed Iberico pork",
        "kacKisiOnerdi": null,
        "not": "Noted for the ssamjang sauce pairing."
      },
      {
        "yemek": "Osetra caviar with turbot and green sorrel apple",
        "kacKisiOnerdi": null,
        "not": "A recurring luxury course on the current menu."
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "A stylish, lounge-like dining room built around an open counter, described consistently as sophisticated without feeling cold or overly formal.",
      "etiketler": [
        "fine-dining",
        "lounge",
        "modern",
        "tasting-menu",
        "romantic"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.0,
      "ozet": "Warm, hospitality-forward service is repeatedly praised as matching the ambition of the cooking, with the husband-and-wife team's presence often cited as central to the experience.",
      "artilar": [
        "Warm, hospitality-forward service style"
      ],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-2-yildiz",
        "detay": "Two MICHELIN stars — 2025 MICHELIN Guide New York City, maintained into 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": null,
      "link": "https://www.exploretock.com/atomixnyc/",
      "beklemeSuresi": "Following month's reservations open on the 1st at 3PM ET via Tock.",
      "kapora": {
        "var": true,
        "detay": "Full tasting-menu price ($375+ per person) charged at time of booking; nonrefundable but transferable via Tock."
      }
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide New York coverage, official Atomix/Tock booking pages, and aggregated review commentary (travel and food blogs, Tripadvisor)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "cesar-nyc",
    "isim": "César",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "Hudson Square",
    "mutfak": [
      "Seafood",
      "Contemporary",
      "Tasting Menu"
    ],
    "adres": "333 Hudson St, New York, NY 10013, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Cesar+333+Hudson+St+New+York+NY+10013",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 365,
        "max": 368,
        "paraBirimi": "USD"
      },
      "not": "Single-format tasting menu (12-13 courses depending on source), reported between $365 and $368 per person across different check dates; all guests at a table must order the same menu."
    },
    "yemek": {
      "puan": 9.5,
      "ozet": "Chef César Ramirez's first solo project after leaving a three-Michelin-starred kitchen behind, built around exceptionally sourced, seafood-forward tasting courses. It earned two Michelin stars within five months of opening, a remarkably fast turnaround for the Guide. The consensus across coverage is near-uniform praise for ingredient quality and precision, with little in the way of recurring criticism yet on record."
    },
    "neYenir": [
      {
        "yemek": "Abalone chawanmushi with truffle, ramp and hon-shimeji mushroom",
        "kacKisiOnerdi": null,
        "not": "Cited as a standout seasonal course."
      },
      {
        "yemek": "Seared North Sea turbot with Spanish cuttlefish and spring peas",
        "kacKisiOnerdi": null,
        "not": "A recurring highlight on the tasting menu."
      },
      {
        "yemek": "Aji nigiri",
        "kacKisiOnerdi": null,
        "not": "Named among the menu's signature bites."
      },
      {
        "yemek": "Uni on brioche",
        "kacKisiOnerdi": null,
        "not": "Named among the menu's signature bites."
      }
    ],
    "ambiyans": {
      "puan": 8.9,
      "ozet": "Housed in a century-old former printing-press building with 16-foot ceilings, the room is described as understated and modern rather than stuffy, with every seat given a kitchen view.",
      "etiketler": [
        "fine-dining",
        "intimate",
        "modern",
        "historic-building",
        "counter"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "solo",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.2,
      "ozet": "The chef himself works the kitchen every service, and coverage consistently describes the execution and presentation as close to flawless.",
      "artilar": [
        "Chef present and directly involved every service",
        "Widely described as highly polished, precise execution"
      ],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-2-yildiz",
        "detay": "Two MICHELIN stars, awarded within five months of opening — 2024 MICHELIN Guide New York City, maintained in the 2025 edition."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+1 212-220-5152",
      "link": "https://www.cesar.restaurant/",
      "beklemeSuresi": null,
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from the official César site, MICHELIN Guide New York coverage and ceremony articles, Resy editorial coverage, and aggregated review commentary (Tripadvisor, Yelp, travel/food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "kalaya-philadelphia",
    "isim": "Kalaya",
    "ulke": "USA",
    "sehir": "Philadelphia",
    "semt": "Fishtown",
    "mutfak": [
      "Thai",
      "Southern Thai"
    ],
    "adres": "4 W Palmer St, Philadelphia, PA 19125, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kalaya+4+W+Palmer+St+Philadelphia+PA+19125",
    "koordinat": {
      "lat": 39.975633,
      "lng": -75.133092
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 85,
        "max": 85,
        "paraBirimi": "USD"
      },
      "not": "The 'Taste of Kalaya' family-style tasting menu is $85 per guest. À la carte, shared-plate dinners have been estimated by outside coverage at roughly $80-130 per person including drinks, though that reflects shared dishes rather than a fixed per-person menu price."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Southern Thai cooking built around the chef's own family recipes, named for her mother; the kitchen has won a national Best Chef award and remains a nominee for the country's top restaurant honor. Coverage consistently highlights bold, layered spicing and dishes rarely found on other Thai menus in the city. There is little recurring criticism in the coverage reviewed."
    },
    "neYenir": [
      {
        "yemek": "Khao pad pu (crab fried rice)",
        "kacKisiOnerdi": null,
        "not": "A weekend-lunch signature with colossal crab, onion, egg and scallion."
      },
      {
        "yemek": "Khao soi nua (beef curry noodle soup)",
        "kacKisiOnerdi": null,
        "not": "Egg noodles in coconut curry with chili crisp and crispy noodles."
      },
      {
        "yemek": "Kanon jeen gaeng pu (crab curry with rice vermicelli)",
        "kacKisiOnerdi": null,
        "not": "Colossal lump crab curry over rice vermicelli with soft-boiled egg."
      },
      {
        "yemek": "Shaw muang dumplings",
        "kacKisiOnerdi": null,
        "not": "Flower-shaped dumplings with ground chicken, cucumber and Thai chili."
      },
      {
        "yemek": "Gui chai cakes",
        "kacKisiOnerdi": null,
        "not": "Crisply fried mustard-chive cakes."
      }
    ],
    "ambiyans": {
      "puan": 7.8,
      "ozet": "A converted warehouse space in Fishtown with a casual, high-energy feel rather than fine-dining formality; valet or street parking is the main practical note in coverage.",
      "etiketler": [
        "casual",
        "lively",
        "neighborhood",
        "warehouse-conversion"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups",
        "family"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the inaugural 2025 MICHELIN Guide Philadelphia with a Recommended designation — no star or Bib Gourmand."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+1 215-545-2535",
      "link": "https://resy.com/cities/philadelphia-pa/venues/kalaya",
      "beklemeSuresi": "Bookable via Resy for parties up to 12; larger groups by email.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from the official Kalaya site, MICHELIN Guide Philadelphia 2025 coverage, James Beard Foundation record, Philadelphia Inquirer coverage, and aggregated review commentary (Tripadvisor, Yelp)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "le-veau-dor-nyc",
    "isim": "Le Veau d'Or",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "Upper East Side",
    "mutfak": [
      "French",
      "French Bistro",
      "Classic French"
    ],
    "adres": "129 E 60th St, New York, NY 10022, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Le+Veau+d%27Or+129+E+60th+St+New+York+NY+10022",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 125,
        "max": 125,
        "paraBirimi": "USD"
      },
      "not": "$125 three-course prix fixe with roughly ten choices per course; no confirmed separate à la carte pricing was found."
    },
    "yemek": {
      "puan": 8.8,
      "ozet": "A 1937 bistro revived by the founding chefs of Balthazar and Minetta Tavern, serving Escoffier-era classics played straight rather than reinvented; the revival won a 2025 James Beard Award for Outstanding Restaurateur. Reviewers describe the frog legs as having reached cult status, alongside praise for the onion soup and duck. Coverage skews strongly positive, with little recurring criticism found."
    },
    "neYenir": [
      {
        "yemek": "Soupe à l'oignon (French onion soup)",
        "kacKisiOnerdi": null,
        "not": "Served bubbling under a blanket of gruyère."
      },
      {
        "yemek": "Cuisses de grenouille (frog legs)",
        "kacKisiOnerdi": null,
        "not": "Described in coverage as having achieved cult status."
      },
      {
        "yemek": "Pommes soufflées with red caviar and crème",
        "kacKisiOnerdi": null,
        "not": "A signature potato course."
      },
      {
        "yemek": "Duck magret aux cerises (duck breast with cherries)",
        "kacKisiOnerdi": null,
        "not": "Praised for its classic preparation."
      },
      {
        "yemek": "Tripes à la mode",
        "kacKisiOnerdi": null,
        "not": "Cited as a classic, rarely-seen-elsewhere dish on the menu."
      }
    ],
    "ambiyans": {
      "puan": 8.9,
      "ozet": "A small, throwback dining room with dark wood, red accents and a mirror-map of France, praised as cozy and unmistakably historic rather than a modern pastiche of a bistro.",
      "etiketler": [
        "historic",
        "intimate",
        "romantic",
        "classic"
      ],
      "dressCode": "Smart casual to business casual; no strict enforcement, but sneakers are discouraged.",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 8.7,
      "ozet": "Classic tableside French service, with pink-jacketed waiters pouring wine, is consistently described as polished and geared toward long, unhurried dinners rather than fast turns.",
      "artilar": [
        "Classic, attentive tableside French service style",
        "Encourages long, unhurried dinners"
      ],
      "eksiler": []
    },
    "oduller": [],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": "+1 212-838-8133",
      "link": null,
      "beklemeSuresi": "Reservations released via SevenRooms at 9:00 AM, fourteen days in advance.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from the official Le Veau d'Or site, James Beard Foundation award record, and aggregated review commentary (The Infatuation, Resto Mojo, Tripadvisor, Yelp). Coverage on a specific MICHELIN star or Bib Gourmand designation for this restaurant was inconsistent across sources and could not be independently confirmed, so no MICHELIN award is listed."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "le-bernardin-nyc",
    "isim": "Le Bernardin",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "Midtown",
    "mutfak": [
      "Seafood",
      "French",
      "Fine Dining"
    ],
    "adres": "155 W 51st St, New York, NY 10019, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Le+Bernardin+155+W+51st+St+New+York+NY+10019",
    "koordinat": {
      "lat": 40.7613945,
      "lng": -73.981691
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 218,
        "max": 350,
        "paraBirimi": "USD"
      },
      "not": "Four-course prix fixe dinner $218; eight-course Chef's Tasting $350; three-course lunch prix fixe around $135. All before wine, tax and tip."
    },
    "yemek": {
      "puan": 9.7,
      "ozet": "A three-Michelin-star seafood institution built on a 'unilateral cooking method' that treats fish with exacting, minimal-intervention technique. The tuna carpaccio with foie gras has stayed on the menu for decades and remains the dish most cited by reviewers. Praise is close to universal; the cooking is treated as a benchmark rather than a matter of debate."
    },
    "neYenir": [
      {
        "yemek": "Tuna carpaccio with foie gras and toasted baguette",
        "kacKisiOnerdi": null,
        "not": "On the menu for decades and the most frequently cited dish."
      },
      {
        "yemek": "Barely-warmed scallop in caviar beurre blanc",
        "kacKisiOnerdi": null,
        "not": "Cited as a signature preparation of the unilateral cooking method."
      },
      {
        "yemek": "Salmon with Royal Osetra caviar and horseradish emulsion",
        "kacKisiOnerdi": null,
        "not": "A recurring tasting-menu highlight."
      },
      {
        "yemek": "Wild salmon with lacquered crust",
        "kacKisiOnerdi": null,
        "not": "Noted for its crust technique."
      }
    ],
    "ambiyans": {
      "puan": 8.9,
      "ozet": "A hushed, formal dining room that some reviewers compare to a boardroom rather than a buzzy restaurant — elegant and controlled, but not for guests seeking a livelier atmosphere.",
      "etiketler": [
        "formal",
        "elegant",
        "fine-dining",
        "luxury"
      ],
      "dressCode": "Elegant/formal; jackets strongly preferred for men, no shorts, athletic wear or flip-flops.",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.3,
      "ozet": "Service is consistently held up as among the most polished and formally trained in the city, with no recurring complaints found in the coverage reviewed.",
      "artilar": [
        "Renowned, highly polished formal service"
      ],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars, held continuously since 2005 — one of only five three-star restaurants in New York City in the 2025 MICHELIN Guide, maintained into 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+1 212-554-1515",
      "link": null,
      "beklemeSuresi": null,
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide New York coverage and ceremony articles, the official Le Bernardin site, and aggregated review commentary (Forbes Travel Guide, Tripadvisor, Yelp, travel/food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "kabawa-nyc",
    "isim": "Kabawa",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "East Village",
    "mutfak": [
      "Caribbean",
      "Tasting Menu",
      "Contemporary"
    ],
    "adres": "8 Extra Pl, New York, NY 10003, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kabawa+8+Extra+Pl+New+York+NY+10003",
    "koordinat": {
      "lat": 40.7249557,
      "lng": -73.9913634
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 145,
        "max": 150,
        "paraBirimi": "USD"
      },
      "not": "Three-course tasting menu reported at $145-150 per person across sources, exclusive of beverage, tax and gratuity."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Chef Paul Carmichael's personal take on Caribbean cuisine, served as a tasting menu in the former Momofuku Ko space; the restaurant has been named a top new-restaurant pick in multiple year-end lists. Dishes like the goat curry and plantain-and-caviar course are cited most consistently across coverage. No recurring criticism emerged from the sources reviewed."
    },
    "neYenir": [
      {
        "yemek": "Roti with curry chickpeas and eggplant",
        "kacKisiOnerdi": null,
        "not": "Opening bread course."
      },
      {
        "yemek": "Fried sweet plantain with crispy salt cod and scrambled eggs with caviar",
        "kacKisiOnerdi": null,
        "not": "Named repeatedly as a standout early course."
      },
      {
        "yemek": "Seared black bass with yellow curry",
        "kacKisiOnerdi": null,
        "not": "A recurring main course."
      },
      {
        "yemek": "Chuleta can can with recaíto",
        "kacKisiOnerdi": null,
        "not": "Puerto Rican-influenced pork chop course."
      },
      {
        "yemek": "Goat curry",
        "kacKisiOnerdi": null,
        "not": "Described in coverage as rich, tender and deeply satisfying."
      },
      {
        "yemek": "Coconut turnover",
        "kacKisiOnerdi": null,
        "not": "Dessert course meant to be shared."
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "A 30-seat, elegant dark-green dining room with subtle regional design references, consistently described as sophisticated rather than casual for the neighborhood.",
      "etiketler": [
        "elegant",
        "intimate",
        "modern",
        "tasting-menu"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the MICHELIN Guide New York City selection and recommended by Michelin inspectors; no star confirmed as of the 2025 guide."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+1 212-203-8095",
      "link": null,
      "beklemeSuresi": null,
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide New York coverage, official Kabawa/Momofuku site, North America's 50 Best Restaurants listing, and aggregated review commentary (Resto Mojo, Yelp, Tripadvisor)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "singlethread-healdsburg",
    "isim": "SingleThread",
    "ulke": "USA",
    "sehir": "Healdsburg",
    "semt": "Sonoma County",
    "mutfak": [
      "Contemporary American",
      "Japanese-influenced",
      "Kaiseki",
      "Farm-to-Table",
      "Tasting Menu"
    ],
    "adres": "131 North St, Healdsburg, CA 95448, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=SingleThread+131+North+St+Healdsburg+CA+95448",
    "koordinat": {
      "lat": 38.6123379,
      "lng": -122.8696919
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 540,
        "max": 541,
        "paraBirimi": "USD"
      },
      "not": "Ten-course kaiseki-inspired tasting menu reported at roughly $540.75 per person before wine pairings; a service charge is added, with gratuity noted as additional in fine print, which some guests find unclear."
    },
    "yemek": {
      "puan": 9.6,
      "ozet": "A kaiseki-framed tasting menu built almost entirely from the restaurant's own 24-acre farm, changing daily based on what is harvested rather than a fixed seasonal plan. Reviewers consistently rank the cooking among the most refined in the country, with the recurring hassun course singled out as a highlight. The main critical thread in coverage concerns cost rather than execution."
    },
    "neYenir": [
      {
        "yemek": "Hassun course — aged whole yuzu stuffed with walnut miso",
        "kacKisiOnerdi": null,
        "not": "The seasonal-theme-setting course of the kaiseki structure."
      },
      {
        "yemek": "Cured, aged, grilled dried spear squid with salted plum dip",
        "kacKisiOnerdi": null,
        "not": "Part of the hassun course, aged for one year before serving."
      },
      {
        "yemek": "Seasonal mushroom donabe",
        "kacKisiOnerdi": null,
        "not": "Closes the savory portion of the tasting menu."
      },
      {
        "yemek": "Corn sablé cookie with lemon-thyme ganache",
        "kacKisiOnerdi": null,
        "not": "A recurring dessert course."
      }
    ],
    "ambiyans": {
      "puan": 9.4,
      "ozet": "A serene, floral-forward dining room paired with a rooftop terrace for pre-dinner cocktails; reviewers describe the setting and pacing as close to flawless.",
      "etiketler": [
        "luxury",
        "romantic",
        "farm-to-table",
        "serene",
        "special-occasion"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.5,
      "ozet": "Staff are described as warm, knowledgeable and extremely professional throughout the entire stay, without exception in the coverage reviewed. The one recurring complaint concerns the clarity of service-charge and gratuity disclosures rather than staff behavior.",
      "artilar": [
        "Warm, highly professional, knowledgeable staff throughout the stay"
      ],
      "eksiler": [
        "Service-charge and gratuity structure criticized as unclear"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars — 2025 MICHELIN Guide California, maintained into 2026; the first three-star restaurant in Sonoma County."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+1 707-723-4646",
      "link": "https://singlethreadfarms.com/restaurant/",
      "beklemeSuresi": "Bookings released online at 9:00 AM PST on the 1st of each month for the following month.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide California coverage, the official SingleThread site, and aggregated review commentary (Tripadvisor, Forbes, travel/food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "jungsik-nyc",
    "isim": "Jungsik",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "Tribeca",
    "mutfak": [
      "Korean",
      "Contemporary",
      "Tasting Menu"
    ],
    "adres": "2 Harrison St, New York, NY 10013, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Jungsik+2+Harrison+St+New+York+NY+10013",
    "koordinat": {
      "lat": 40.7187884,
      "lng": -74.0090911
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 325,
        "max": 325,
        "paraBirimi": "USD"
      },
      "not": "Tasting menu priced around $325 per person; wine pairing $200, non-alcoholic pairing $115."
    },
    "yemek": {
      "puan": 9.4,
      "ozet": "The first Korean restaurant outside South Korea to hold three Michelin stars, opening with an elaborate banchan presentation before moving into modern Korean courses. Reviewers consistently praise the creativity and technical precision of the cooking. Service is called professional and largely error-free, with only isolated pacing hiccups noted."
    },
    "neYenir": [
      {
        "yemek": "Raw striped jack with white kimchi and chilled fish bone broth",
        "kacKisiOnerdi": null,
        "not": "A recurring opening course."
      },
      {
        "yemek": "Crisped octopus with gochujang aioli",
        "kacKisiOnerdi": null,
        "not": "Cited as a standout texture-driven course."
      },
      {
        "yemek": "Dry-aged Arctic char with kimchi and red curry sauce",
        "kacKisiOnerdi": null,
        "not": "A recurring main course on the tasting menu."
      }
    ],
    "ambiyans": {
      "puan": 8.3,
      "ozet": "The main dining room's decor draws mixed reactions — some find it spectacular and relaxing, while others note the beige palette has looked largely unchanged for a decade; guests seated in the darker rear annex have described the room as noticeably dimmer.",
      "etiketler": [
        "modern",
        "fine-dining",
        "tasting-menu"
      ],
      "dressCode": "Smart casual recommended; no strict enforcement.",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.0,
      "ozet": "Service is consistently described as professional and outstanding, with isolated exceptions such as a delayed amuse-bouche that was addressed with an extra pour by the sommelier.",
      "artilar": [
        "Consistently described as professional and largely error-free"
      ],
      "eksiler": [
        "Occasional pacing issues (e.g. delayed amuse-bouche) noted in isolated reviews"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-3-yildiz",
        "detay": "Three MICHELIN stars since 2024 — the first Korean restaurant outside South Korea to hold three stars; maintained in the 2025 MICHELIN Guide New York City."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": "+1 212-219-0900",
      "link": null,
      "beklemeSuresi": null,
      "kapora": {
        "var": true,
        "detay": "$50 per-person deposit for bar seating reservations (parties of 1-5)."
      }
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide New York coverage and ceremony articles, the official Jungsik site, and aggregated review commentary (Tripadvisor, Yelp, travel/food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "penny-nyc",
    "isim": "Penny",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "East Village",
    "mutfak": [
      "Seafood",
      "Wine Bar",
      "Raw Bar"
    ],
    "adres": "90 E 10th St, 1st Floor, New York, NY 10003, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Penny+90+E+10th+St+New+York+NY+10003",
    "koordinat": {
      "lat": 40.7308231,
      "lng": -73.989714
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 100,
        "max": 150,
        "paraBirimi": "USD"
      },
      "not": "No fixed tasting menu; à la carte seafood counter with typical per-person spend around $100 or more depending on wine and shared plates (e.g. $26 for five cocktail shrimp)."
    },
    "yemek": {
      "puan": 9.1,
      "ozet": "A 31-seat seafood counter above sister restaurant Claud, built around a raw-bar 'Ice Box' and a short, technique-driven menu; it has been a finalist for the country's top new-restaurant honor. Ingredient quality draws consistent, strong praise across coverage, with the whole lobster and oyster confit mentioned most often. No significant recurring food criticism was found."
    },
    "neYenir": [
      {
        "yemek": "Ice Box raw bar (oysters, clams, shrimp, mussels escabeche, crudo)",
        "kacKisiOnerdi": null,
        "not": "The restaurant's signature raw-bar presentation."
      },
      {
        "yemek": "Sesame brioche with Cantabrian anchovies",
        "kacKisiOnerdi": null,
        "not": "Named a standout starter."
      },
      {
        "yemek": "Tuna carpaccio with Manzanilla olives and cipollini onion",
        "kacKisiOnerdi": null,
        "not": "A recurring starter course."
      },
      {
        "yemek": "Oyster confit in chicken fat",
        "kacKisiOnerdi": null,
        "not": "Described as a simple, surprisingly rich snack."
      },
      {
        "yemek": "Whole 1.5lb live lobster",
        "kacKisiOnerdi": null,
        "not": "Praised for its sauce work and precise cooking."
      }
    ],
    "ambiyans": {
      "puan": 8.2,
      "ozet": "Every seat sits along one long marble bar facing an open, fast-moving kitchen — reviewers describe the seats as comfortable but note the room's only-counter layout means waits are common even with reservations.",
      "etiketler": [
        "counter",
        "casual",
        "wine-bar",
        "lively"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "solo",
        "groups"
      ]
    },
    "servis": {
      "puan": 9.0,
      "ozet": "Servers are consistently described as friendly, efficient and deeply knowledgeable about the seafood program, able to describe dishes in detail.",
      "artilar": [
        "Friendly, efficient counter service",
        "Staff deeply knowledgeable about the seafood program"
      ],
      "eksiler": [
        "Walk-in-heavy seating model can mean a wait even with a reservation"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the MICHELIN Guide New York City selection (2025 edition) — no star or Bib Gourmand confirmed."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": null,
      "link": null,
      "beklemeSuresi": "Most seats are reserved for walk-ins; standing room is available at the front while waiting.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide New York coverage, Robb Report and Michelin editorial features, and aggregated review commentary (The Infatuation, Tripadvisor, Yelp)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "emerils-nola",
    "isim": "Emeril's",
    "ulke": "USA",
    "sehir": "New Orleans",
    "semt": "Warehouse District",
    "mutfak": [
      "Contemporary Creole",
      "New Orleans",
      "Contemporary American"
    ],
    "adres": "800 Tchoupitoulas St, New Orleans, LA 70130, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Emerils+800+Tchoupitoulas+St+New+Orleans+LA+70130",
    "koordinat": {
      "lat": 29.9446386,
      "lng": -90.0673486
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 295,
        "max": 295,
        "paraBirimi": "USD"
      },
      "not": "The dining room now runs exclusively on a $295 chef's tasting menu; à la carte ordering is only available at the adjoining Wine Bar at Emeril's."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Opened by Emeril Lagasse in 1990 and now led by his son E.J. Lagasse, the kitchen reinterprets New Orleans Creole flavor at a global fine-dining level while keeping two dishes that have run since opening night: a smoked salmon cheesecake starter and a banana pudding finish. The chef was named the region's top young chef by Michelin in the inaugural American South guide. Coverage is strongly positive with no significant recurring complaints found."
    },
    "neYenir": [
      {
        "yemek": "Smoked salmon cheesecake",
        "kacKisiOnerdi": null,
        "not": "On the menu since the restaurant opened in 1990."
      },
      {
        "yemek": "Banana pudding",
        "kacKisiOnerdi": null,
        "not": "The tasting menu's closing course since 1990."
      },
      {
        "yemek": "BBQ shrimp po'boy (tasting bite)",
        "kacKisiOnerdi": null,
        "not": "A miniature version of a New Orleans classic."
      },
      {
        "yemek": "Shrimp tartlets with rosemary biscuits",
        "kacKisiOnerdi": null,
        "not": "A recurring bite-sized course."
      },
      {
        "yemek": "Gumbo",
        "kacKisiOnerdi": null,
        "not": "Served in a small-bowl tasting-menu format."
      },
      {
        "yemek": "Mississippi trout with slivered almonds",
        "kacKisiOnerdi": null,
        "not": "Lightly dredged, pan-fried and finished with almonds."
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "A renovated pharmacy warehouse with exposed brick, glass walls and a wine wall — a long-established, classic Warehouse District dining room rather than a newly designed space.",
      "etiketler": [
        "classic",
        "historic-building",
        "fine-dining",
        "warehouse-conversion"
      ],
      "dressCode": "Dining Room formal — collared shirts required for men, jackets recommended; the adjoining Salon is more relaxed.",
      "uygun": [
        "couples",
        "business dinner",
        "groups"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-2-yildiz",
        "detay": "Two MICHELIN stars — inaugural 2025 MICHELIN Guide American South; the only two-star restaurant in that edition."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+1 504-528-9393",
      "link": null,
      "beklemeSuresi": "Reservations highly recommended, especially at peak times and around special events.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide American South ceremony coverage, the official Emeril's Restaurants site, nola.com and Post and Courier restaurant coverage, and aggregated review commentary (Tripadvisor, Feastio)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "chubby-fish-charleston",
    "isim": "Chubby Fish",
    "ulke": "USA",
    "sehir": "Charleston",
    "semt": "Cannonborough",
    "mutfak": [
      "Seafood",
      "Lowcountry"
    ],
    "adres": "252 Coming St, Charleston, SC 29403, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Chubby+Fish+252+Coming+St+Charleston+SC+29403",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 70,
        "max": 80,
        "paraBirimi": "USD"
      },
      "not": "Average spend estimated at $70-80 per person; the menu changes daily and is handwritten over the kitchen, so exact per-dish pricing varies night to night."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "A walk-in-only seafood spot built on daily-changing raw bar, starter and entree offerings sourced directly from local fishermen and farmers; it is a national semifinalist for the country's top restaurant honor. Reviewers describe nearly every dish as a highlight, with fresh, boldly seasoned Lowcountry seafood as the consistent throughline. The main friction point in coverage is the wait to get a table, not the food itself."
    },
    "neYenir": [
      {
        "yemek": "North Carolina yellowtail tuna crudo",
        "kacKisiOnerdi": null,
        "not": "A recurring raw-bar starter."
      },
      {
        "yemek": "Steamboat Creek oysters with crab fat curry",
        "kacKisiOnerdi": null,
        "not": "Named a standout starter in local coverage."
      },
      {
        "yemek": "Smoked sheepshead curry over rice",
        "kacKisiOnerdi": null,
        "not": "A recurring entree highlight."
      }
    ],
    "ambiyans": {
      "puan": 8.3,
      "ozet": "A small room centered on a communal table with an open kitchen and a hip, no-frills feel; the space itself draws praise, though the long pre-opening line is the dominant experience many guests describe.",
      "etiketler": [
        "casual",
        "lively",
        "communal",
        "no-reservations"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups",
        "solo"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the inaugural 2025 MICHELIN Guide American South (Charleston) with a Recommended designation — no star or Bib Gourmand."
      }
    ],
    "rezervasyon": {
      "gerekiyor": false,
      "yontem": [],
      "telefon": "+1 854-222-3949",
      "link": null,
      "beklemeSuresi": "Walk-in only; the queue commonly forms 1-2.5 hours before the 5:00 PM opening. Walk-in parties are limited to six; groups of seven or more must email to inquire about availability.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide American South (Charleston) coverage, the official Chubby Fish site, Post and Courier reporting on the restaurant's walk-in line, and aggregated review commentary (Tripadvisor, Yelp)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "saison-sf",
    "isim": "Saison",
    "ulke": "USA",
    "sehir": "San Francisco",
    "semt": "SoMa",
    "mutfak": [
      "Contemporary American",
      "Californian",
      "Tasting Menu"
    ],
    "adres": "178 Townsend St, San Francisco, CA 94107, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Saison+178+Townsend+St+San+Francisco+CA+94107",
    "koordinat": {
      "lat": 37.7794954,
      "lng": -122.3922179
    },
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 368,
        "max": 538,
        "paraBirimi": "USD"
      },
      "not": "Dining-room tasting menu from $368 per person; private kitchen-table experience $398-538; a separate, lower-priced bar experience runs $58-78. Wine pairings start at $198."
    },
    "yemek": {
      "puan": 9.5,
      "ozet": "A two-Michelin-star tasting menu built around live-fire technique and the chef's own blend of Chinese heritage and premium California ingredients, from caviar and seaweed courses to a dry-aged duck with salted cherry leaf sauce. Reviewers consistently describe the execution as exacting and the overall experience as a well-run fine-dining machine. Little recurring criticism was found in the coverage reviewed."
    },
    "neYenir": [
      {
        "yemek": "Saison caviar with coastal seaweeds",
        "kacKisiOnerdi": null,
        "not": "A recurring opening course."
      },
      {
        "yemek": "Uni toast",
        "kacKisiOnerdi": null,
        "not": "Combines uni, sourdough and butter."
      },
      {
        "yemek": "Pacific king salmon with heart of palm",
        "kacKisiOnerdi": null,
        "not": "A recurring seasonal course."
      },
      {
        "yemek": "Santa Barbara spot prawn with finger lime and mustard flower",
        "kacKisiOnerdi": null,
        "not": "Noted for its bright, acid-forward pairing."
      },
      {
        "yemek": "Dry-aged Sonoma duck with salted cherry leaf sauce",
        "kacKisiOnerdi": null,
        "not": "Cited among the dishes that earned the restaurant its Michelin stars."
      }
    ],
    "ambiyans": {
      "puan": 8.9,
      "ozet": "An upscale open-kitchen dining room with tableside pours and a choreographed feel, described by reviewers as polished and precise, if slightly formal in its pacing.",
      "etiketler": [
        "fine-dining",
        "luxury",
        "open-kitchen",
        "tasting-menu"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": 9.0,
      "ozet": "Service is described as a well-oiled, precise fine-dining operation, with tableside touches like caviar service and knife selection called out as strengths.",
      "artilar": [
        "Polished, precise, well-choreographed fine-dining service"
      ],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-2-yildiz",
        "detay": "Two MICHELIN stars — 2025 MICHELIN Guide California, maintained into 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+1 415-828-7990",
      "link": null,
      "beklemeSuresi": "Dinner reservations released roughly one month out, on the 1st of the prior month, via OpenTable.",
      "kapora": {
        "var": true,
        "detay": "Credit card held on file; cancellations inside 30 days are charged $98/person as rebooking credit; cancellations inside 48 hours or no-shows are charged the full menu price."
      }
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide California coverage, the official Saison site, and aggregated review commentary (The Infatuation, Tripadvisor, Yelp, travel/food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "aska-brooklyn",
    "isim": "Aska",
    "ulke": "USA",
    "sehir": "New York",
    "semt": "Williamsburg / Brooklyn",
    "mutfak": [
      "Scandinavian",
      "New Nordic",
      "Tasting Menu"
    ],
    "adres": "47 S 5th St, Brooklyn, NY 11249, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Aska+47+S+5th+St+Brooklyn+NY+11249",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 375,
        "max": 375,
        "paraBirimi": "USD"
      },
      "not": "12-14 course tasting menu at $375 per person; optional wine pairing from $250 per guest. Full prepayment is required to hold a reservation."
    },
    "yemek": {
      "puan": 9.5,
      "ozet": "Brooklyn's only two-Michelin-star kitchen, drawing on the chef's Swedish heritage and Northeastern-US foraging to build a highly personal tasting menu centered on preservation, smoke and seasonality. A raw kingfish course wrapped in seaweed with caviar is the dish most often singled out as the best bite of the meal. Reviews are consistently strong with essentially no recurring criticism found."
    },
    "neYenir": [
      {
        "yemek": "Raw king fish wrapped in seaweed with caviar",
        "kacKisiOnerdi": null,
        "not": "Repeatedly named the best bite of the tasting menu."
      },
      {
        "yemek": "Caviar course with grilled onions",
        "kacKisiOnerdi": null,
        "not": "Uses sustainably farmed Finnish caviar."
      },
      {
        "yemek": "Norwegian langoustine cooked in its own shell sauce",
        "kacKisiOnerdi": null,
        "not": "A recurring highlight course."
      },
      {
        "yemek": "Rye pancake with vendace roe in lilac vinegar",
        "kacKisiOnerdi": null,
        "not": "Cited as a distinctive Nordic-technique course."
      },
      {
        "yemek": "Brown crab with crab-brain custard",
        "kacKisiOnerdi": null,
        "not": "A recurring course showcasing whole-ingredient use."
      }
    ],
    "ambiyans": {
      "puan": 8.8,
      "ozet": "A dark, intimate room built around an open kitchen, with just ten tables; reviewers describe the presentation and setting as artistic rather than austere.",
      "etiketler": [
        "intimate",
        "dark",
        "open-kitchen",
        "tasting-menu",
        "romantic"
      ],
      "dressCode": null,
      "uygun": [
        "couples"
      ]
    },
    "servis": {
      "puan": 9.0,
      "ozet": "Service is consistently praised as outstanding, attentive and knowledgeable about the foraged and Nordic ingredients on the menu, with beautiful presentation called out repeatedly.",
      "artilar": [
        "Outstanding, attentive service consistently praised",
        "Staff knowledgeable about foraged and Nordic ingredients"
      ],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-2-yildiz",
        "detay": "Two MICHELIN stars — Brooklyn's only two-star restaurant in the 2025 MICHELIN Guide New York City, maintained into 2026."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online"
      ],
      "telefon": "+1 929-337-6792",
      "link": "https://www.askanyc.com/",
      "beklemeSuresi": null,
      "kapora": {
        "var": true,
        "detay": "Full $375-per-person prepayment required to hold a reservation."
      }
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide New York coverage, the official Aska site, and aggregated review commentary (Tripadvisor, Yelp, travelsort, travel/food blogs)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "moon-rabbit-dc",
    "isim": "Moon Rabbit",
    "ulke": "USA",
    "sehir": "Washington, D.C.",
    "semt": "Penn Quarter",
    "mutfak": [
      "Vietnamese",
      "Contemporary"
    ],
    "adres": "927 F St NW, Washington, DC 20004, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Moon+Rabbit+927+F+St+NW+Washington+DC+20004",
    "koordinat": {
      "lat": 38.8975293,
      "lng": -77.0252444
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 95,
        "max": 115,
        "paraBirimi": "USD"
      },
      "not": "Tasting-format menu reported around $95-115 per person across sources (one source cites a five-course option at $85); à la carte mains are also available, roughly $32-42."
    },
    "yemek": {
      "puan": 8.8,
      "ozet": "Chef Kevin Tien channels his Vietnamese heritage and Cajun Louisiana upbringing into a modern, contemporary-technique menu at this Penn Quarter dining room. Dishes like the fried quail over Viet-Cajun tomato rice and mochi eel draw consistent praise for creativity without feeling overly formal. Coverage is strongly positive with no significant recurring criticism found."
    },
    "neYenir": [
      {
        "yemek": "Water fern rice cake with caramelized king trumpet mushroom",
        "kacKisiOnerdi": null,
        "not": "Praised for its comforting flavor."
      },
      {
        "yemek": "Fried quail stuffed with duck sausage over Viet-Cajun tomato rice",
        "kacKisiOnerdi": null,
        "not": "Served with bright clementine mustard."
      },
      {
        "yemek": "Mochi eel",
        "kacKisiOnerdi": null,
        "not": "Cited as a unique, beautifully presented dish."
      },
      {
        "yemek": "Kanpachi crudo with sweet potato and Maryland crab",
        "kacKisiOnerdi": null,
        "not": "A recurring starter course."
      },
      {
        "yemek": "Green curry sponge cake",
        "kacKisiOnerdi": null,
        "not": "A dessert course blending Vietnamese flavor with Western technique."
      }
    ],
    "ambiyans": {
      "puan": 8.4,
      "ozet": "A bright, contemporary dining room at the restaurant's current F Street location, described consistently as modern and inviting rather than themed or overly casual.",
      "etiketler": [
        "modern",
        "contemporary",
        "lively"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Held a MICHELIN Bib Gourmand in 2022-2023 at the restaurant's prior Wharf location; the current Penn Quarter location appears in the MICHELIN Guide Washington, D.C. selection without a confirmed star or Bib Gourmand as of the 2025 guide."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": "+1 202-525-1446",
      "link": null,
      "beklemeSuresi": null,
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide Washington, D.C. coverage, the official Moon Rabbit site, North America's 50 Best Restaurants listing, and aggregated review commentary (Washingtonian, Tripadvisor)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "holbox-la",
    "isim": "Holbox",
    "ulke": "USA",
    "sehir": "Los Angeles",
    "semt": "Historic South-Central",
    "mutfak": [
      "Mexican",
      "Seafood",
      "Yucatecan"
    ],
    "adres": "Mercado La Paloma, 3655 S Grand Ave C9, Los Angeles, CA 90007, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Holbox+3655+S+Grand+Ave+C9+Los+Angeles+CA+90007",
    "koordinat": {
      "lat": 34.0173172,
      "lng": -118.278365
    },
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 60,
        "max": 70,
        "paraBirimi": "USD"
      },
      "not": "Regular à la carte spend estimated around $60-70 per person; individual tacos are roughly $6 and tostadas run under $20. A separate reservation-only 8-course tasting menu is offered Wednesday and Thursday evenings for $130."
    },
    "yemek": {
      "puan": 9.3,
      "ozet": "A Yucatecan-style seafood counter inside a South Los Angeles food hall, and the first Mexican marisquería in the country to hold a Michelin star. Its heirloom-corn tostadas and ceviches draw consistently strong praise, and it remains one of the only food-court restaurants recognized on a global best-restaurants list. No significant recurring food criticism was found in the coverage reviewed."
    },
    "neYenir": [
      {
        "yemek": "Baja shrimp taco",
        "kacKisiOnerdi": null,
        "not": "Named among the six essential dishes in coverage."
      },
      {
        "yemek": "Smoked kanpachi tostada",
        "kacKisiOnerdi": null,
        "not": "A recurring highlight on nixtamalized heirloom-corn tostadas."
      },
      {
        "yemek": "Scallop aguachile",
        "kacKisiOnerdi": null,
        "not": "Cited as a standout raw preparation."
      },
      {
        "yemek": "Bluefin tuna tostada with avocado purée and chile de árbol peanut sauce",
        "kacKisiOnerdi": null,
        "not": "Called a favorite by multiple reviewers."
      }
    ],
    "ambiyans": {
      "puan": 7.2,
      "ozet": "A bustling counter inside a shared food hall rather than a standalone dining room — functional and lively, with the main recurring friction being long weekend lines rather than the space itself.",
      "etiketler": [
        "casual",
        "food-hall",
        "counter",
        "lively"
      ],
      "dressCode": null,
      "uygun": [
        "solo",
        "groups",
        "family"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "One MICHELIN star, awarded August 2024 and maintained since — the first Mexican marisquería in the US to hold a Michelin star (2025 MICHELIN Guide California)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": "+1 213-986-9972",
      "link": null,
      "beklemeSuresi": "No reservations for regular counter service; order at the counter and wait for food, with weekend waits running 30-45 minutes. A separate 8-course tasting menu is reservation-only, released monthly.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide California coverage, L.A. Taco and Resy editorial features, and aggregated review commentary (Tripadvisor, Yelp, kevinEats)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "avize-atlanta",
    "isim": "Avize",
    "ulke": "USA",
    "sehir": "Atlanta",
    "semt": "West Midtown",
    "mutfak": [
      "Alpine",
      "French",
      "European",
      "Modern European"
    ],
    "adres": "956 Brady Ave NW, Atlanta, GA 30318, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Avize+956+Brady+Ave+NW+Atlanta+GA+30318",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": {
        "min": 195,
        "max": 195,
        "paraBirimi": "USD"
      },
      "not": "Seasonal prix fixe at $195 per person without pairings; base wine pairings bring the total to about $300, elevated pairings to about $400."
    },
    "yemek": {
      "puan": 8.9,
      "ozet": "A mountain-lodge-themed dining room drawing on French, Northern Italian, Swiss, Austrian and German traditions, sourced heavily from the restaurant's own partner farm. Reviewers highlight the lemon-pepper frog legs and Milanese schnitzel most consistently, and it is the only Georgia restaurant named to a major national best-restaurants list. No significant recurring criticism was found in the coverage reviewed."
    },
    "neYenir": [
      {
        "yemek": "Lemon pepper wet frog legs",
        "kacKisiOnerdi": null,
        "not": "The dish most frequently cited in coverage."
      },
      {
        "yemek": "Venison tartare",
        "kacKisiOnerdi": null,
        "not": "A recurring starter course."
      },
      {
        "yemek": "Foie gras parfait",
        "kacKisiOnerdi": null,
        "not": "Paired with a caviar-and-berliner service."
      },
      {
        "yemek": "Fermented carrot Bolognese",
        "kacKisiOnerdi": null,
        "not": "A vegetable-forward main course."
      },
      {
        "yemek": "Milanese schnitzel with green goddess sauce",
        "kacKisiOnerdi": null,
        "not": "Topped with mizuna salad and furikake breadcrumbs."
      },
      {
        "yemek": "Black sesame tiramisu",
        "kacKisiOnerdi": null,
        "not": "A recurring dessert course."
      }
    ],
    "ambiyans": {
      "puan": 8.6,
      "ozet": "A mountain-lodge-styled dining room, complete with a dry-aged duck display case, that reviewers describe as distinctive and immersive rather than generic fine dining.",
      "etiketler": [
        "modern",
        "alpine",
        "intimate",
        "special-occasion"
      ],
      "dressCode": "Business casual.",
      "uygun": [
        "couples",
        "business dinner"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "Included in the 2025 MICHELIN Guide American South (Atlanta) with a Recommended designation — no star or Bib Gourmand."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online"
      ],
      "telefon": "+1 404-879-1713",
      "link": "https://resy.com/cities/atlanta-ga/venues/avize",
      "beklemeSuresi": null,
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide American South (Atlanta) coverage, the official Avize site, North America's 50 Best Restaurants and NYT 50 Best listings, and aggregated review commentary (Tripadvisor, Yelp)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  },
  {
    "id": "acamaya-nola",
    "isim": "Acamaya",
    "ulke": "USA",
    "sehir": "New Orleans",
    "semt": "Bywater",
    "mutfak": [
      "Mexican",
      "Seafood"
    ],
    "adres": "3070 Dauphine St, New Orleans, LA 70117, United States",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Acamaya+3070+Dauphine+St+New+Orleans+LA+70117",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": {
        "min": 50,
        "max": 100,
        "paraBirimi": "USD"
      },
      "not": "À la carte Mexican-seafood menu; estimated per-person spend of $50-100 depending on how many dishes are ordered."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "A Bywater restaurant bridging the chef's Mexico City upbringing with Gulf seafood, earning a Bib Gourmand in the region's first Michelin guide. The al pastor hamachi tostada and crab-and-mushroom masa dumplings are the dishes most cited in coverage, and the restaurant has been named a best-new-restaurant pick by multiple national outlets. No significant recurring criticism was found."
    },
    "neYenir": [
      {
        "yemek": "Al pastor hamachi tostada",
        "kacKisiOnerdi": null,
        "not": "Made with in-house nixtamalized corn tostadas."
      },
      {
        "yemek": "Masa dumplings with Higgins crab, oyster mushroom and corn beurre blanc",
        "kacKisiOnerdi": null,
        "not": "Described as warm and refined."
      }
    ],
    "ambiyans": {
      "puan": 8.7,
      "ozet": "Pastel-pink tile, stonework and breeze walls set a stylish, design-forward stage that reviewers describe as dramatic without feeling stiff.",
      "etiketler": [
        "stylish",
        "modern",
        "casual"
      ],
      "dressCode": null,
      "uygun": [
        "couples",
        "groups"
      ]
    },
    "servis": {
      "puan": null,
      "ozet": null,
      "artilar": [],
      "eksiler": []
    },
    "oduller": [
      {
        "tip": "michelin-bib",
        "detay": "MICHELIN Bib Gourmand — inaugural 2025 MICHELIN Guide American South (New Orleans)."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "phone"
      ],
      "telefon": "+1 504-299-3477",
      "link": null,
      "beklemeSuresi": "Reservations recommended; some seats are held for walk-ins.",
      "kapora": null
    },
    "kaynaklar": {
      "google": null,
      "tripadvisor": null,
      "tiktok": null,
      "diger": "Compiled from MICHELIN Guide American South (New Orleans) coverage via neworleans.com, the official Acamaya site, and aggregated review commentary (nola.com, The Infatuation, Tripadvisor)."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-13"
  }
];
