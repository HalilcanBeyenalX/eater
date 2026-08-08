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
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Karaköy",
    "mutfak": ["Türk", "Meyhane", "Akdeniz"],
    "adres": "Kemankeş Mahallesi, Kemankeş Caddesi No:57, Karaköy, Beyoğlu, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Karak%C3%B6y%20Lokantas%C4%B1%2C%20Kemanke%C5%9F%20Caddesi%20No%3A57%2C%20Karak%C3%B6y%2C%20Beyo%C4%9Flu%2C%20%C4%B0stanbul",
    "koordinat": { "lat": 41.0245922, "lng": 28.980028 },

    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Kişi başı harcama aralığı doğrulanamadı, bu yüzden kisiBasi boş bırakıldı. Elde edilen somut veriler: Michelin Guide restoranı 'olağanüstü fiyat/kalite oranı' gerekçesiyle Bib Gourmand'a alıyor ve ana yemeklerin nadiren 25-30 avroyu aştığını yazıyor; meyhankoli.com mekânı ₺₺ seviyesinde etiketliyor. Buna karşılık Google yorumlarında (Wanderlog üzerinden okunanlar) kişi başı 80 ₺ ekmek, 140 ₺ su ve %10 servis bedeli gibi ek kalemler ile 6.000 ₺'yi aşan bir hesap bildiriliyor; Türkçe yorumlarda 'porsiyonlar küçük, fiyat yüksek' eleştirisi tekrarlanıyor. Segment bu iki taraf tartıldıktan sonra 'orta' seçildi; kaynaklar bu konuda hemfikir değil."
    },

    "yemek": {
      "puan": 8.6,
      "ozet": "Kaynaklar yemek konusunda birbirini destekliyor: MICHELIN Guide Türkiye 2026 seçkisinde Bib Gourmand, TripAdvisor 4,2/5 (yaklaşık 1.360 yorum, İstanbul'da 9.705 restoran içinde ~448. sıra), Wanderlog üzerinden görülen Google puanı 4,3 (3.031 yorum). Övgü neredeyse tamamen mezelerde ve hünkar beğendide yoğunlaşıyor. 9,0'a çıkarılmamasının nedeni iki tekrar eden şikâyet: porsiyonların küçük bulunması ve tatlıların menünün en zayıf halkası sayılması (Uplifers incelemesi). Bu, 8,0-8,9 bandındaki 'güçlü ama tekrarlayan küçük şikâyetler var' tanımına uyuyor."
    },

    "neYenir": [
      {
        "yemek": "Hünkar Beğendi",
        "kacKisiOnerdi": null,
        "not": "MICHELIN Guide açıklamasında mekânın yıldız yemeği olarak anlatılıyor (közlenmiş patlıcan üzerine ağır ateşte pişmiş kuzu). Wanderlog'da okunan Google yorumlarında ve Türkçe yemek yazılarında da tekrar ediyor. Kaç kişinin önerdiği sayılabilir bir yorum kümesinden çıkarılamadı."
      },
      {
        "yemek": "Ahtapot Izgara",
        "kacKisiOnerdi": null,
        "not": "MICHELIN Guide'ın 'kusursuz ızgara ahtapot' vurgusu, restoranın kendi menü listesindeki 'Ahtapot Izgara' kalemi ve Türkçe blog derlemelerindeki meze önerileriyle örtüşüyor."
      },
      {
        "yemek": "Pastırmalı Humus",
        "kacKisiOnerdi": null,
        "not": "Uplifers incelemesinde alışılmıştan daha hafif ve az yağlı bulunarak öne çıkarılıyor; Türkçe mekân derlemelerinde de humus özellikle övülüyor."
      },
      {
        "yemek": "Topik",
        "kacKisiOnerdi": null,
        "not": "Uplifers incelemesinde şeker-tarçın-soğan dengesiyle ayrıca anlatılıyor; meze seçkisi üzerine yazan Türkçe kaynaklarda da geçiyor."
      },
      {
        "yemek": "Fava",
        "kacKisiOnerdi": null,
        "not": "Wanderlog üzerinden okunan bir Google yorumunda 'İzmirli olmama rağmen yediğim en lezzetli fava' diye anlatılıyor; restoranın menü listesinde de yer alıyor."
      }
    ],

    "ambiyans": {
      "puan": 8.0,
      "ozet": "Turkuaz çini kaplamalı iç mekân ve liman kenarındaki terasa dair övgü hemen her kaynakta var; MICHELIN Guide sakin terası ve kıyı konumunu ayrıca anıyor. Öğlen esnaf lokantası, akşam meyhane olarak iki ayrı konseptle çalıştığı Türkçe kaynaklarda tutarlı biçimde anlatılıyor. Puanı 9'un altında tutan şey, Google ve TripAdvisor yorumlarında tekrarlanan iki şikâyet: masaların birbirine çok yakın olması ve gürültü seviyesi ('gördüğüm en gürültülü restoran' yorumu dahil).",
      "etiketler": ["canlı", "gürültülü", "teras", "meyhane", "çini-dekor"],
      "dressCode": null,
      "uygun": ["grup", "çift", "iş yemeği"]
    },

    "servis": {
      "puan": 7.5,
      "ozet": "Servis, bu restoranın en bölünmüş başlığı. Bir yanda TripAdvisor yorumlarında İngilizce bilen, güler yüzlü personel övgüsü ve arama sonuçlarında 'profesyonel personel' yorumları var. Diğer yanda Uplifers incelemesi servisi mekânın asıl zayıf yanı sayıp 'tek bir gülümseme yakalayamadım' diyor ve TripAdvisor'da işletme sahibiyle yaşanan olumsuz bir deneyimi anlatan bir yorum bulunuyor. Belirgin ve tekrar eden bir zayıflık olduğu için 7,0-7,9 bandına konuldu.",
      "artilar": [
        "TripAdvisor yorumlarında İngilizce konuşan personel",
        "Meze dolabının önünde durup seçerek sipariş verebilme"
      ],
      "eksiler": [
        "Uplifers incelemesinde mesafeli ve gülümsemeyen personel eleştirisi",
        "Masaların çok yakın olması ve yüksek gürültü seviyesi (Google ve TripAdvisor yorumları)",
        "Ekmek ve suyun ayrıca ücretlendirilmesi ve üstüne %10 servis bedeli (Google yorumları)",
        "Tatlıların menünün en zayıf halkası bulunması (Uplifers)"
      ]
    },

    "oduller": [
      {
        "tip": "michelin-bib",
        "detay": "MICHELIN Guide İstanbul — Bib Gourmand. 2026 İstanbul Bib Gourmand seçkisinde yer alıyor (iki bağımsız listeden doğrulandı)."
      }
    ],

    "rezervasyon": {
      "gerekiyor": true,
      "yontem": ["telefon", "online"],
      "telefon": "+90 212 292 44 55",
      "link": "https://www.karakoylokantasi.com/en/reservation",
      "beklemeSuresi": "Rezervasyonun şart olduğu hem Türkçe mekân yazılarında hem TripAdvisor yorumlarında tekrarlanıyor; bir TripAdvisor yorumunda cumartesi akşamı yaklaşık bir saat beklendiği anlatılıyor. Restoranın kendi rezervasyon sayfası masayı rezervasyon saatinden itibaren 15 dakika tuttuklarını yazıyor.",
      "kapora": null
    },

    "kaynaklar": {
      "google": { "puan": 4.3, "yorumSayisi": 3031, "incelenen": 8 },
      "tripadvisor": { "puan": 4.2, "yorumSayisi": 1360, "incelenen": 5 },
      "tiktok": null
    },

    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },

  {
    "id": "balikci-kahraman",
    "isim": "Balıkçı Kahraman",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Rumelikavağı",
    "mutfak": ["Deniz Ürünleri", "Karadeniz", "Türk"],
    "adres": "Rumeli Kavağı Mahallesi, İskele Caddesi No:15, Sarıyer, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bal%C4%B1k%C3%A7%C4%B1%20Kahraman%2C%20%C4%B0skele%20Caddesi%20No%3A15%2C%20Rumeli%20Kava%C4%9F%C4%B1%2C%20Sar%C4%B1yer%2C%20%C4%B0stanbul",
    "koordinat": null,

    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Bu restoranın en çok konuşulan konusu fiyat, ama doğrulanmış rakamlar birbiriyle uyuşmadığı için kişi başı aralık verilmedi. Doğrulanan somut veriler: (1) Şikayetvar'a 25 Aralık 2025'te düşen bir şikâyette iki kişi için 16.000 ₺, yani kişi başı yaklaşık 8.000 ₺; (2) aynı sitedeki diğer şikâyetlerde iki kişilik hesaplar 8.500-11.500 ₺ aralığında; (3) 11 Ocak 2026'da basına yansıyan bir adisyonda kalkanın kilosu 8.000 ₺, 2,5 kg balık 20.000 ₺, domates salatası 1.000 ₺, kalamar tava 1.000 ₺, su-ekmek-mısır ekmeği 600 ₺, iki tatlı 800 ₺ ve %10 servis 2.600 ₺ ile toplam 28.900 ₺. Kalkan kiloyla satıldığı ve mekânın menü vermediği için hesap sipariş edilen balığın ağırlığına göre çok geniş bir bantta değişiyor; yorumlarda fiyatların sipariş öncesi sorulması gerektiği ısrarla tekrarlanıyor. Ekşi Sözlük'te yalnızca adisyona ayrılmış, onlarca sayfalık ayrı bir başlık bulunuyor. Onedio'daki 'iki kişi 1.500-2.000 ₺' bilgisi tarihsiz ve güncel adisyonlarla açıkça çeliştiği için kullanılmadı."
    },

    "yemek": {
      "puan": 8.7,
      "ozet": "Şikâyetlerin neredeyse tamamı fiyata, yemeğe değil. MICHELIN Guide Türkiye 2026 seçkisinde yer alıyor ve bütün hâlde ızgara kalkanı, lakerdayı ve balık kokorecini övüyor; Vedat Milor domates salatasına ve hamsili mısır ekmeği + lakerda ikilisine 10 üzerinden 10 veriyor. TripAdvisor'daki bir yorumun başlığı bile 'Kalkan müthiş ama fiyat...' Yemek tarafında tek belirgin itiraz, bir TikTok incelemesinde lakerdanın daha sıradan yerlerde daha iyisinin yendiğinin söylenmesi. TripAdvisor'ın 3,7/5'lik toplu puanı ise ağırlıkla fiyat ve ambiyans kaynaklı; bu iki başlık ayrı ayrı puanlandığı için yemek puanına yansıtılmadı."
    },

    "neYenir": [
      {
        "yemek": "Kalkan Tandır",
        "kacKisiOnerdi": null,
        "not": "Mekânın imza yemeği. MICHELIN Guide 'kusursuz ızgara kalkan'ı evin spesiyali olarak anıyor; restoranın kendi sitesi kalkanın geleneksel fırında bütün hâlde pişirildiğini anlatıyor; Vedat Milor bütün kalkanı ızgarada pişirebilen üç ustadan birinin burada olduğunu yazıyor. Fiyatı kiloyla belirlendiği için sipariş öncesi ağırlık ve tutar sorulması yorumlarda tekrarlanan bir uyarı."
      },
      {
        "yemek": "Domates Salatası",
        "kacKisiOnerdi": null,
        "not": "Vedat Milor 10 üzerinden 10 veriyor. Meyhankoli ve TikTok incelemesinde de kalkanın yanında öne çıkan kalem olarak geçiyor."
      },
      {
        "yemek": "Lakerda",
        "kacKisiOnerdi": null,
        "not": "MICHELIN Guide 'tereyağı kıvamında lakerda' diye anlatıyor, Vedat Milor mısır ekmeğinin üzerine sürülmesini tavsiye edip 10/10 veriyor. Buna karşılık bir TikTok incelemesinde 'daha ortalama yerlerde daha iyisini yedim' deniyor — kaynaklar bu kalemde ayrışıyor."
      },
      {
        "yemek": "Hamsili Mısır Ekmeği",
        "kacKisiOnerdi": null,
        "not": "Vedat Milor lakerdayla birlikte 10/10 veriyor; TikTok incelemesinde de balık gelmeden servis edilen kalemler arasında sayılıyor."
      },
      {
        "yemek": "Balık Kokoreç",
        "kacKisiOnerdi": null,
        "not": "MICHELIN Guide'ın mekân için saydığı yemekler arasında ilk sırada geçiyor; Onedio incelemesi de Michelin'in bu öneriyi öne çıkardığını aktarıyor."
      }
    ],

    "ambiyans": {
      "puan": 6.5,
      "ozet": "Ambiyans, kaynaklarda tutarlı biçimde mekânın zayıf yanı. Deniz manzarası yok, mekân ara sokakta ve iç dekorasyonun standart bir balıkçıdan farkı olmadığı yazılıyor; TripAdvisor'da 40 dakikalık yolu 'sıfır ambiyans' gerekçesiyle sorgulayan yorumlar var. Ekşi Sözlük yorumlarında da 'tadı iyi, servis iyi ama manzara yok ve fiyat çok yüksek' örüntüsü tekrarlanıyor. Bu, 7,0 altındaki 'kalıcı memnuniyetsizlik' tanımına uyuyor. Karşı tarafta yalnızca 'şirin mekân' düzeyinde birkaç ifade var.",
      "etiketler": ["manzarasız", "sade", "balıkçı", "ara-sokak"],
      "dressCode": null,
      "uygun": ["grup"]
    },

    "servis": {
      "puan": 6.8,
      "ozet": "Personelin ilgisi ve balığın pişirilmesi konusunda övgü var, ama tekrarlayan ve ciddi bir örüntü puanı aşağı çekiyor: menü verilmemesi ve fiyatların sipariş öncesi söylenmemesi. Şikayetvar'daki dört şikâyetin dördü de fahiş fiyat başlıklı ve hiçbirine işletme yanıtı görünmüyor; sayfadaki marka puanı 1 değerlendirmeyle 0/100. Ekşi Sözlük yorumlarında 'sabit fiyat yok, müşteriye göre yazıyorlar' ve adisyon hatası iddiaları geçiyor. Fiyatın kendisi ayrı bir başlıkta değerlendirildiği için burada puanlanan şey fiyat değil, fiyatın müşteriye önceden bildirilmemesi.",
      "artilar": [
        "Bütün kalkanın ustalıkla pişirilmesi (MICHELIN Guide ve Vedat Milor değerlendirmeleri)",
        "Hesap sonunda karpuz ve tatlı ikramı geldiğini belirten yorumlar",
        "Ekşi Sözlük yorumlarında servis ve müşteri ilgisine tam not veren örnekler"
      ],
      "eksiler": [
        "Menü verilmemesi; fiyatların sipariş öncesi söylenmediğine dair tekrarlayan şikâyetler",
        "Adisyon hataları ve 'fiyatı müşteriye göre yazıyorlar' iddiaları (Ekşi Sözlük)",
        "Şikayetvar'daki dört şikâyetin tamamı fahiş fiyat konulu ve işletme yanıtı yok",
        "%10 servis bedelinin hesabı belirgin biçimde büyütmesi (Ocak 2026 adisyonunda 2.600 ₺)"
      ]
    },

    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "MICHELIN Guide Türkiye 2026 — rehberde seçilmiş restoran. Yıldız ya da Bib Gourmand değil; İstanbul Bib Gourmand listelerinde yer almıyor."
      }
    ],

    "rezervasyon": {
      "gerekiyor": null,
      "yontem": ["telefon", "e-posta"],
      "telefon": "+90 212 242 64 47",
      "link": null,
      "beklemeSuresi": null,
      "kapora": null
    },

    "kaynaklar": {
      "google": null,
      "tripadvisor": { "puan": 3.7, "yorumSayisi": 115, "incelenen": 3 },
      "tiktok": { "incelenenVideo": 1, "ozet": "İçeriği okunabilen tek video, bir yemek hesabı incelemesi: kalkan tava için en küçük balığın pişirildiği, yanında domates salatası, lakerda ve hamsili mısır ekmeği geldiği, hesabın 3.000 ₺ tuttuğu ve yazarın 'bu paraya değmez' dediği anlatılıyor. Balığın tazeliği ve pişirme yöntemi olumlu bulunmuş, lakerda ise beklentinin altında kalmış." }
    },

    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },

  {
    "id": "beyaz-firin-etiler",
    "isim": "Beyaz Fırın Etiler",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Etiler",
    "mutfak": ["Brasserie", "Pastane", "Kahvaltı"],
    "adres": "Etiler Mahallesi, Nispetiye Caddesi No:82, Beşiktaş, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Beyaz%20F%C4%B1r%C4%B1n%20Etiler%2C%20Nispetiye%20Caddesi%20No%3A82%2C%20Etiler%2C%20Be%C5%9Fikta%C5%9F%2C%20%C4%B0stanbul",
    "koordinat": null,

    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Beyaz Fırın bir zincir ve yayımlanan fiyat listesi şube bazlı değil, marka geneli. Bu yüzden kişi başı aralık verilmedi. 2 Haziran 2026 tarihli marka geneli fiyat listesinden doğrulanan kalemler: iki kişilik kahvaltı tabağı 1.650 ₺, tek kişilik kahvaltı tabağı 750 ₺, kahvaltı tavası 860 ₺, patatesli gül böreği 190 ₺, Polka 240 ₺, menemen 320 ₺, şnitzel 650-780 ₺, somon ızgara 850 ₺, ev yapımı limonata 160 ₺, filtre kahve 130 ₺. Markanın kendi menü PDF'i de 2026 yaz menüsü olarak yayımlanmış durumda. Etiler şubesine özel TripAdvisor yorumlarında fiyatlar 'biraz pahalı ama Etiler için makul' diye değerlendiriliyor. Karşılaştırma için: Ağustos 2023'te Gurme Rehber'in Etiler şubesi yazısında börek tabağı 240 ₺, sucuklu poşe yumurta 210 ₺, çay 30 ₺ idi."
    },

    "yemek": {
      "puan": 7.5,
      "ozet": "Yalnızca Etiler şubesine ait kaynaklar kullanıldı; markanın diğer şubelerine ait yorumlar (ör. Time Out'un Ataşehir-Suadiye-Erenköy değerlendirmesi ve Ataşehir şubesinin Yandex sayfası) kapsam dışı bırakıldı. Etiler için TripAdvisor 4,5/5 ama yalnızca 18 yorum üzerinden; Yandex Haritalar'da Nispetiye Cd. No:82 kaydı 4,3/5 ve 137 yorum. Pastane tarafı — özellikle patatesli gül böreği, Polka ve milföy — hem TripAdvisor'da hem Etiler şubesini ayrı ayrı yazan iki blog incelemesinde tutarlı biçimde övülüyor; Gurme Rehber Etiler şubesine lezzette 10 üzerinden 7,5 veriyor. Puanı aşağıda tutan şey Şikayetvar'ın Etiler şubesi sayfasındaki 11 şikâyette tekrarlanan hijyen ve yabancı madde bildirimleri (beş ay boyunca kıl, cam parçası, ambalajda plastik tel, bozuk pasta). Bu, 7,0-7,9 bandındaki 'belirgin ve sık tekrarlanan bir zayıflık' tanımına uyuyor."
    },

    "neYenir": [
      {
        "yemek": "Patatesli Gül Böreği",
        "kacKisiOnerdi": null,
        "not": "Marka geneli menü derlemelerinde 'markanın en ikonik tuzlu ürünü' olarak anlatılıyor (2026 fiyat listesinde 190 ₺). Etiler şubesine özel yazılarda da fırın reyonunun öne çıkan kalemleri arasında geçiyor."
      },
      {
        "yemek": "Polka",
        "kacKisiOnerdi": null,
        "not": "Markanın gizli tarifli imza pastası; 2026 marka geneli fiyat listesinde 240 ₺. Şube ayrımı yapan bir kaynakta ayrıca doğrulanamadı, yani bu öneri marka düzeyinde geçerli."
      },
      {
        "yemek": "Kahvaltı Tavası",
        "kacKisiOnerdi": null,
        "not": "2026 menüsünde 860 ₺; kızarmış hellim, ekşi mayalı ekmek üzerinde göz yumurta, dana jambon, üç çeşit mantar, kiraz domates ve avokadodan oluşuyor. Etiler şubesine gelen yorumlarda kahvaltı en çok övülen öğün."
      },
      {
        "yemek": "Sucuklu Poşe Yumurta",
        "kacKisiOnerdi": null,
        "not": "Gurme Rehber'in Etiler şubesi yazısında 'buradaki favorimiz' diye anlatılıyor. Aynı şubeyi yazan başka bir inceleme domates soslu, burrata peynirli poşe yumurta versiyonunu öne çıkarıyor."
      },
      {
        "yemek": "Çilekli Milföy",
        "kacKisiOnerdi": null,
        "not": "Etiler şubesini ayrı ele alan Üşengeç Şef incelemesinde tatlı olarak özellikle bu öneriliyor."
      }
    ],

    "ambiyans": {
      "puan": 8.2,
      "ozet": "Etiler şubesini ayrı ayrı yazan iki inceleme mekânı tutarlı biçimde övüyor: art deco etkili, iki katlı, yaklaşık 350 kişilik, dikey kış bahçeli bir mekân ve girişte 6,5 metrelik fırın tezgâhı; ikinci inceleme 'pırıl pırıl' diyor ve bahçe, kapalı salon ve üst kat olmak üzere üç ayrı oturma alanı olduğunu anlatıyor. Puanı 9'un altında tutan şey yoğunluk: hafta sonu kahvaltı saatlerinde mekânın dolduğu, kapıda karşılayan personel bulunmadığı ve kalabalık-gürültü sorunları birden fazla yorumda geçiyor.",
      "etiketler": ["ferah", "art-deco", "kış-bahçesi", "kalabalık", "pastane"],
      "dressCode": null,
      "uygun": ["tek kişi", "grup"]
    },

    "servis": {
      "puan": 7.2,
      "ozet": "Etiler şubesi için servis yorumları açıkça birbiriyle çelişiyor: aynı şube için hem 'personel ilgisiz, servis inanılmaz yavaş' hem 'servis süper, çalışanlar güler yüzlü' ifadeleri var; bir yorumda hiç sıra beklemeden oturulduğu, başka bir yorumda kapıda karşılayan kimse olmadığı anlatılıyor. TripAdvisor özetinde de 'zaman zaman servis tutarsızlıkları ve sipariş sorunları' geçiyor. Şikayetvar'ın Etiler sayfasındaki 11 şikâyette şikâyet bildiren müşteriye personelin ilgisiz kaldığı, hatta alay edildiği (Nisan 2024) yer alıyor; buna karşılık marka son bir yıldaki şikâyetlerin tamamına yanıt vermiş görünüyor. Tutarsızlık belirgin ve sık tekrarlandığı için 7,0-7,9 bandı.",
      "artilar": [
        "Yorumların bir bölümünde güler yüzlü ve ilgili personel",
        "Hafta içi sıra beklemeden oturulabildiğini belirten yorumlar",
        "Şikayetvar'da son bir yıldaki şikâyetlerin tamamına işletme yanıtı verilmiş"
      ],
      "eksiler": [
        "Aynı şube için hem 'çok yavaş ve ilgisiz' hem 'süper' denen tutarsız servis",
        "Şikayetvar'ın Etiler sayfasında tekrarlayan hijyen ve yabancı madde bildirimleri",
        "Kapıda karşılayan personel olmadığına dair yorumlar",
        "Hafta sonu kahvaltı saatlerinde yer bulmanın zor olması"
      ]
    },

    "oduller": [],

    "rezervasyon": {
      "gerekiyor": null,
      "yontem": ["telefon"],
      "telefon": "+90 212 263 70 91",
      "link": null,
      "beklemeSuresi": "Hafta sonu kahvaltı saatlerinde ya rezervasyon yaptırmak ya da sıra beklemeyi göze almak gerektiği birden fazla kaynakta belirtiliyor; hafta içi sıra beklemeden oturulduğunu söyleyen yorumlar da var. Rezervasyonun zorunlu olup olmadığı ve somut bekleme süresi doğrulanamadı, bu yüzden 'gerekiyor' alanı boş bırakıldı.",
      "kapora": null
    },

    "kaynaklar": {
      "google": null,
      "tripadvisor": { "puan": 4.5, "yorumSayisi": 18, "incelenen": 4 },
      "tiktok": null
    },

    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  }
];
