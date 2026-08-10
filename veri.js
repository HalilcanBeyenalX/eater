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
    "mutfak": [
      "Türk",
      "Meyhane",
      "Akdeniz"
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
      "not": "Kişi başı harcama aralığı doğrulanamadı, bu yüzden kisiBasi boş bırakıldı. Elde edilen somut veriler: Michelin Guide restoranı 'olağanüstü fiyat/kalite oranı' gerekçesiyle Bib Gourmand'a alıyor ve ana yemeklerin nadiren 25-30 avroyu aştığını yazıyor; meyhankoli.com mekânı ₺₺ seviyesinde etiketliyor. Buna karşılık Google yorumlarında (Wanderlog üzerinden okunanlar) kişi başı 80 ₺ ekmek, 140 ₺ su ve %10 servis bedeli gibi ek kalemler ile 6.000 ₺'yi aşan bir hesap bildiriliyor; Türkçe yorumlarda 'porsiyonlar küçük, fiyat yüksek' eleştirisi tekrarlanıyor. Segment bu iki taraf tartıldıktan sonra 'orta' seçildi; kaynaklar bu konuda hemfikir değil. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) bu veriler 'orta' segmentine karşılık geliyor."
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
      "etiketler": [
        "canlı",
        "gürültülü",
        "teras",
        "meyhane",
        "çini-dekor"
      ],
      "dressCode": null,
      "uygun": [
        "grup",
        "çift",
        "iş yemeği"
      ]
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
      "yontem": [
        "telefon",
        "online"
      ],
      "telefon": "+90 212 292 44 55",
      "link": "https://www.karakoylokantasi.com/en/reservation",
      "beklemeSuresi": "Rezervasyonun şart olduğu hem Türkçe mekân yazılarında hem TripAdvisor yorumlarında tekrarlanıyor; bir TripAdvisor yorumunda cumartesi akşamı yaklaşık bir saat beklendiği anlatılıyor. Restoranın kendi rezervasyon sayfası masayı rezervasyon saatinden itibaren 15 dakika tuttuklarını yazıyor.",
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
      "diger": "MICHELIN Guide Türkiye 2026 (Bib Gourmand seçkisi) ve Uplifers incelemesi de değerlendirmeye dahil edildi."
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
    "mutfak": [
      "Deniz Ürünleri",
      "Karadeniz",
      "Türk"
    ],
    "adres": "Rumeli Kavağı Mahallesi, İskele Caddesi No:15, Sarıyer, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bal%C4%B1k%C3%A7%C4%B1%20Kahraman%2C%20%C4%B0skele%20Caddesi%20No%3A15%2C%20Rumeli%20Kava%C4%9F%C4%B1%2C%20Sar%C4%B1yer%2C%20%C4%B0stanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "pahali",
      "kisiBasi": null,
      "not": "Bu restoranın en çok konuşulan konusu fiyat, ama doğrulanmış rakamlar birbiriyle uyuşmadığı için kişi başı aralık verilmedi. Doğrulanan somut veriler: (1) Şikayetvar'a 25 Aralık 2025'te düşen bir şikâyette iki kişi için 16.000 ₺, yani kişi başı yaklaşık 8.000 ₺; (2) aynı sitedeki diğer şikâyetlerde iki kişilik hesaplar 8.500-11.500 ₺ aralığında; (3) 11 Ocak 2026'da basına yansıyan bir adisyonda kalkanın kilosu 8.000 ₺, 2,5 kg balık 20.000 ₺, domates salatası 1.000 ₺, kalamar tava 1.000 ₺, su-ekmek-mısır ekmeği 600 ₺, iki tatlı 800 ₺ ve %10 servis 2.600 ₺ ile toplam 28.900 ₺. Kalkan kiloyla satıldığı ve mekânın menü vermediği için hesap sipariş edilen balığın ağırlığına göre çok geniş bir bantta değişiyor; yorumlarda fiyatların sipariş öncesi sorulması gerektiği ısrarla tekrarlanıyor. Ekşi Sözlük'te yalnızca adisyona ayrılmış, onlarca sayfalık ayrı bir başlık bulunuyor. Onedio'daki 'iki kişi 1.500-2.000 ₺' bilgisi tarihsiz ve güncel adisyonlarla açıkça çeliştiği için kullanılmadı. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) kişi başı ~8.000 ₺'lik doğrulanmış rakamlar 'pahalı' segmentine karşılık geliyor."
    },
    "yemek": {
      "puan": 8.7,
      "ozet": "Şikâyetlerin neredeyse tamamı fiyata, yemeğe değil. MICHELIN Guide Türkiye 2026 seçkisinde yer alıyor ve bütün hâlde ızgara kalkanı, lakerdayı ve balık kokorecini övüyor; Vedat Milor domates salatasına ve hamsili mısır ekmeği + lakerda ikilisine 10 üzerinden 10 veriyor. TripAdvisor'daki bir yorumun başlığı bile 'Kalkan müthiş ama fiyat...' Yemek tarafında tek belirgin itiraz, bir TikTok incelemesinde lakerdanın daha sıradan yerlerde daha iyisinin yendiğinin söylenmesi. TripAdvisor'ın 3,7/5'lik toplu puanı ise ağırlıkla fiyat ve ambiyans kaynaklı; bu iki başlık ayrı ayrı puanlandığı için yemek puanına yansıtılmadı."
    },
    "neYenir": [
      {
        "yemek": "Bütün Kalkan",
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
      "etiketler": [
        "manzarasız",
        "sade",
        "balıkçı",
        "ara-sokak"
      ],
      "dressCode": null,
      "uygun": [
        "grup"
      ]
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
      "yontem": [
        "telefon",
        "e-posta"
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
        "ozet": "İçeriği okunabilen tek video, bir yemek hesabı incelemesi: kalkan tava için en küçük balığın pişirildiği, yanında domates salatası, lakerda ve hamsili mısır ekmeği geldiği, hesabın 3.000 ₺ tuttuğu ve yazarın 'bu paraya değmez' dediği anlatılıyor. Balığın tazeliği ve pişirme yöntemi olumlu bulunmuş, lakerda ise beklentinin altında kalmış."
      },
      "diger": "MICHELIN Guide Türkiye 2026 seçkisi, Vedat Milor değerlendirmesi, Şikayetvar'daki fiyat şikâyetleri ve Ekşi Sözlük'teki adisyon başlığı da değerlendirmeye dahil edildi."
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
    "mutfak": [
      "Brasserie",
      "Pastane",
      "Kahvaltı"
    ],
    "adres": "Etiler Mahallesi, Nispetiye Caddesi No:82, Beşiktaş, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Beyaz%20F%C4%B1r%C4%B1n%20Etiler%2C%20Nispetiye%20Caddesi%20No%3A82%2C%20Etiler%2C%20Be%C5%9Fikta%C5%9F%2C%20%C4%B0stanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Beyaz Fırın bir zincir ve yayımlanan fiyat listesi şube bazlı değil, marka geneli. Bu yüzden kişi başı aralık verilmedi. 2 Haziran 2026 tarihli marka geneli fiyat listesinden doğrulanan kalemler: iki kişilik kahvaltı tabağı 1.650 ₺, tek kişilik kahvaltı tabağı 750 ₺, kahvaltı tavası 860 ₺, patatesli gül böreği 190 ₺, Polka 240 ₺, menemen 320 ₺, şnitzel 650-780 ₺, somon ızgara 850 ₺, ev yapımı limonata 160 ₺, filtre kahve 130 ₺. Markanın kendi menü PDF'i de 2026 yaz menüsü olarak yayımlanmış durumda. Etiler şubesine özel TripAdvisor yorumlarında fiyatlar 'biraz pahalı ama Etiler için makul' diye değerlendiriliyor. Karşılaştırma için: Ağustos 2023'te Gurme Rehber'in Etiler şubesi yazısında börek tabağı 240 ₺, sucuklu poşe yumurta 210 ₺, çay 30 ₺ idi. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) kişi başı 750-1.650 ₺ aralığındaki bu kalemler 'orta' segmentine karşılık geliyor."
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
      "etiketler": [
        "ferah",
        "art-deco",
        "kış-bahçesi",
        "kalabalık",
        "pastane"
      ],
      "dressCode": null,
      "uygun": [
        "tek kişi",
        "grup"
      ]
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
      "yontem": [
        "telefon"
      ],
      "telefon": "+90 212 263 70 91",
      "link": null,
      "beklemeSuresi": "Hafta sonu kahvaltı saatlerinde ya rezervasyon yaptırmak ya da sıra beklemeyi göze almak gerektiği birden fazla kaynakta belirtiliyor; hafta içi sıra beklemeden oturulduğunu söyleyen yorumlar da var. Rezervasyonun zorunlu olup olmadığı ve somut bekleme süresi doğrulanamadı, bu yüzden 'gerekiyor' alanı boş bırakıldı.",
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
      "diger": "Yandex Haritalar'daki Etiler şubesi kaydı (4,3/5, 137 yorum), Şikayetvar'ın Etiler şubesi sayfası, Gurme Rehber ve Üşengeç Şef incelemeleri de değerlendirmeye dahil edildi."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "da-mario-etiler",
    "isim": "Da Mario Etiler",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Etiler",
    "mutfak": [
      "İtalyan",
      "Pizza",
      "Akdeniz"
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
      "not": "Kişi başı aralık veren güvenilir bir kaynak bulunamadığı için kisiBasi boş bırakıldı. Elde edilen somut veriler: (1) RestaurantGuru'nun Etiler kaydı kişi başı harcamayı 'yaklaşık 2.000 ₺ ve üzeri' bandında etiketliyor — bandın üst ucu açık olduğu için tek başına eşik belirlemeye yetmiyor; (2) menufiyati.tr'nin 5 Haziran 2026 tarihli Da Mario menü listesinde makarnalar 1.100-1.350 ₺ (Tagliatelle alla Bolognese 1.200 ₺, Linguine con Pomodorini 1.100 ₺, Spaghetti ai Frutti di Mare 1.350 ₺), antipasti 1.200-1.350 ₺ (Burrata 1.350 ₺, Dana Carpaccio 1.200 ₺), Istakozlu Tagliolini 4.800 ₺ olarak veriliyor — ancak bu kaynak restoranın şubelerini yanlış sayıyor (var olmayan bir 'Kalamış şubesi'nden söz ediyor; resmî site yalnızca Etiler ve İstinyePark'ı listeliyor), bu yüzden segment kararında belirleyici sayılmadı; (3) karşılaştırma için Gurme Rehber'in Nisan 2022 tarihli Etiler yazısında burrata-trüflü tagliolini 225 ₺, Diavola pizza 145 ₺, bufalo mozzarella 160 ₺ idi; (4) restoranın resmî Temmuz 2026 menü PDF'i yayımda ama metni makinece okunabilir değil, fiyatlar oradan doğrulanamadı. Ekşi Sözlük ve TripAdvisor yorumlarında 'fiyatlar yüksek / fiyatına değmiyor' eleştirisi tekrar ediyor, meyhankoli sayfasındaki '400 ₺ ortalama' bilgisi ise açıkça eski. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) doğrulanabilen tek kişi başı veri 'orta' bandının üst ucuna denk geliyor; iki tabaklı bir akşam yemeğinin 2.500 ₺'yi aşması muhtemel görünüyor ama bunu gösteren güvenilir bir kişi başı rakam bulunamadı."
    },
    "yemek": {
      "puan": 7.8,
      "ozet": "Yalnızca Etiler şubesine ait kaynaklar kullanıldı; İstinyePark şubesinin ayrı TripAdvisor kaydı ve marka geneli yazılar kapsam dışı bırakıldı. Etiler için TripAdvisor 4,0/5 (206 yorum, İstanbul'da 13.891 restoran içinde 1.128. sıra), RestaurantGuru üzerinden görülen Google puanı 4,2/5 (1.573 yorum), Foursquare 8,6/10 (1.301 yorum). Gault&Millau Türkiye 2026 rehberinde 1 toque ve 12,5/20 ile 'gurme masa' kategorisinde. Övgü tutarlı biçimde el yapımı taze makarnalarda, taş fırın pizzada, burrata ve carpaccio'da yoğunlaşıyor; Gurme Rehber Etiler şubesine lezzette 10 üzerinden 7,5 veriyor. Puanı 8'in altında tutan iki tekrar eden itiraz var: Ekşi Sözlük'te tiramisunun 'çoğunlukla krema' bulunması ve carpaccio, lazanya, creme brûlée'yi eleştiren girdiler; TripAdvisor'da ise 'gerçekten İtalyan mı, yemekler hep vasat' diyen ve fiyatı fahiş bulan yorumlar. Bu, 7,0-7,9 bandındaki 'belirgin ve sık tekrarlanan bir zayıflık' tanımına uyuyor."
    },
    "neYenir": [
      {
        "yemek": "Burrata",
        "kacKisiOnerdi": null,
        "not": "Müdavim'in Etiler şubesi yazısında 'bol porsiyonlu ve lezzeti yoğun' diye öne çıkarılıyor; Gurme Rehber'in Etiler incelemesinde de bufalo mozzarella/burrata başlangıcı öneriliyor. Restoranın kendi menü tanıtımında da antipasti bölümünün başında yer alıyor."
      },
      {
        "yemek": "Linguine Asparagi e Tartufo",
        "kacKisiOnerdi": null,
        "not": "Restoranın resmî sitesi 'Kuşkonmazlı ve Trüflü Linguine'yi imza tabaklar arasında sayıyor; Müdavim incelemesi de aynı tabağı öneriyor. RestaurantGuru'da öne çıkan yemekler arasında 'asparagus truffle linguine' geçiyor."
      },
      {
        "yemek": "Tagliolini con Burrata e Tartufo",
        "kacKisiOnerdi": null,
        "not": "Gurme Rehber'in Etiler yazısı bu tabağı 'oldukça lezzetli' bulup zeytinyağı ve parmesanın tadı tamamladığını yazıyor (Nisan 2022'de 225 ₺). Müdavim incelemesinde de trüflü-burratalı taglioni öneriliyor."
      },
      {
        "yemek": "Dana Carpaccio",
        "kacKisiOnerdi": null,
        "not": "Müdavim incelemesinde 'iyi marine edilmiş' diye öne çıkarılıyor ve RestaurantGuru'nun popüler kalemler listesinde 'beef carpaccio' başta geliyor. Buna karşılık Ekşi Sözlük'te carpaccio'yu beğenmeyen bir girdi de var — kaynaklar bu kalemde ayrışıyor."
      },
      {
        "yemek": "Pizza Diavola",
        "kacKisiOnerdi": null,
        "not": "Gurme Rehber'in Etiler yazısında 'buranın favori klasiklerinden' diye anlatılıyor, sucuğun ve hamurun kalitesi vurgulanıyor (Nisan 2022'de 145 ₺). Ekşi Sözlük'te de prosciutto e funghi dahil taş fırın pizzalar övülüyor."
      }
    ],
    "ambiyans": {
      "puan": 8.3,
      "ozet": "Etiler şubesi bir villa içinde; kaynaklar mekânı tutarlı biçimde 'beyaz örtülü masalar, ahşap kaplama, loş aydınlatma, şık ama samimi' diye anlatıyor. Ağaçlarla gölgelenen bahçe hemen her kaynakta ayrıca övülüyor: Müdavim bahar-yaz aylarında bar bölümü olan bahçeyi özellikle öneriyor, restoranın kendi sitesi de bahçeyi öne çıkarıyor, Ekşi Sözlük'te loş ışığın 'çok hoş' olduğu yazılıyor. Gurme Rehber mekâna 10 üzerinden 7,5 veriyor. Puanı 9'un altında tutan şey yoğunluk: akşam saatleri ve hafta sonları mekânın dolduğu, birkaç gün önceden rezervasyon gerektiği birden fazla kaynakta tekrarlanıyor.",
      "etiketler": [
        "bahçe",
        "şık",
        "loş",
        "villa",
        "kalabalık"
      ],
      "dressCode": null,
      "uygun": [
        "çift",
        "aile",
        "iş yemeği",
        "grup"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "Servis, kaynakların çoğunda olumlu ama tam bir uzlaşma yok. Meyhankoli'de aktarılan bir yorum 'servis hızlı, garsonlar saygılı ve incelikli' diyor; Ekşi Sözlük'te İstanbul'un diğer üst segment mekânlarına kıyasla servisin başarılı bulunduğu girdiler var; nerdenerede kaydında servis 10/10 puanlanmış (tek değerlendirme). Karşı tarafta TripAdvisor'da servis tutarsızlığından ve fiyat/hizmet dengesizliğinden yakınan yorumlar, meyhankoli özetinde de 'servis kalitesi yorumlar arasında değişkenlik gösteriyor' notu var. Şikayetvar'daki tek şikâyet (2 Ocak 2025) işletmenin müşteriye ulaşması üzerine geri çekilmiş — bu, şikâyet yönetiminin çalıştığına dair somut bir kanıt. Tekrarlayan küçük şikâyetler nedeniyle 8,0-8,9 bandının alt ucu.",
      "artilar": [
        "Hızlı servis ve saygılı personel (meyhankoli'de aktarılan yorumlar)",
        "Üst segment rakiplerine kıyasla başarılı bulunan servis (Ekşi Sözlük girdileri)",
        "Şikayetvar'daki tek şikâyetin işletme temasıyla çözülüp geri çekilmesi (Ocak 2025)"
      ],
      "eksiler": [
        "TripAdvisor yorumlarında servis tutarsızlığı ve fiyat/hizmet dengesizliği eleştirisi",
        "İçeceklerin özellikle pahalı bulunması (meyhankoli'de aktarılan yorumlar)",
        "Akşam ve hafta sonu yoğunluğu nedeniyle birkaç gün önceden rezervasyon gerekmesi"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Türkiye 2026 Gastronomi Rehberi — 1 toque, 12,5/20 ('gurme masa'), mutfak şefi Emre Koyucan. Hem Gault&Millau Türkiye'nin kendi Da Mario Etiler sayfasından hem de 8 Aralık 2025'teki 2026 rehberi tanıtımını aktaran Food in Life listesinden doğrulandı. Restoranın kendi sitesi ayrıca Ospitalità Italiana sertifikasını ve İncili Gastronomi Rehberi'nde üç çatalı anıyor; İncili Gastronomi Rehberi'nin sitesi bakım modunda olduğu için bu ikinci bilgi bağımsız olarak doğrulanamadı. MICHELIN Guide İstanbul seçkisinde Da Mario'ya rastlanmadı."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "telefon",
        "online"
      ],
      "telefon": "+90 212 263 74 84",
      "link": null,
      "beklemeSuresi": "Rezervasyonun zorunlu olduğuna dair bir ifade bulunamadı, bu yüzden 'gerekiyor' boş bırakıldı; buna karşılık akşam yemekleri ve hafta sonları için birkaç gün önceden rezervasyon önerildiği Gurme Rehber, Müdavim ve mekân derlemelerinde tutarlı biçimde tekrarlanıyor. Bahar-yaz aylarında bahçe için ayrıca rezervasyon öneriliyor. Somut bekleme süresi veren bir kaynak bulunamadı.",
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
      "diger": "Gault&Millau Türkiye 2026 (1 toque, 12,5/20), restoranın resmî sitesi ve Temmuz 2026 menüsü, Gurme Rehber ve Müdavim'in Etiler şubesi incelemeleri, Ekşi Sözlük 'da mario' başlığı, Şikayetvar kaydı, meyhankoli, RestaurantGuru ve OpenStreetMap POI kaydı da değerlendirmeye dahil edildi."
    },
    "fotolar": [
      {
        "dosya": "fotolar/da-mario-etiler-1.jpg",
        "alt": "Kapari, zeytin ve domatesli spagetti; yanında zeytin ve ekmek sepeti",
        "kaynak": "https://www.damario.com.tr/static/uploads/2026/01/bg-1.webp",
        "kredi": "Da Mario"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "hodan-nisantasi",
    "isim": "Hodan",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Nişantaşı",
    "mutfak": [
      "Modern Türk",
      "Anadolu",
      "Şef Restoranı"
    ],
    "adres": "Harbiye Mahallesi, Mim Kemal Öke Caddesi No:19/A, Nişantaşı, Şişli, İstanbul",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hodan%2C%20Mim%20Kemal%20%C3%96ke%20Caddesi%20No%3A19%2FA%2C%20Harbiye%2C%20Ni%C5%9Fanta%C5%9F%C4%B1%2C%20%C5%9Ei%C5%9Fli%2C%20%C4%B0stanbul",
    "koordinat": null,
    "fiyat": {
      "segment": "orta",
      "kisiBasi": null,
      "not": "Hiçbir kaynak kişi başı aralık vermediği için kisiBasi boş bırakıldı; ayrıca bulunabilen fiyat verilerinin çoğu tarihsiz. Doğrulanan somut veriler: Made in City rehberi mekânı '1000+ ₺' fiyat bandında etiketliyor; arama sonuçlarından okunabilen Ekşi Sözlük yorumlarında tabakların 300-900 ₺ arasında değiştiği, tek kişilik bir hesabın 1.200 ₺ civarında kaldığı, tatlıların tanesinin 200 ₺ olduğu ve brunch menüsünün 2.500 ₺ olduğu aktarılıyor — bu rakamların tarihi yorumlarda belirtilmiyor. TripAdvisor yorumlarında 'çok küçük porsiyonlar için inanılmaz yüksek fiyat' ve fiyat/performansa 10 üzerinden 4-5 veren değerlendirmeler tekrar ediyor. Mekân Beyoğlu'ndaki eski adresindeyken (Müdavim incelemesi) tabak fiyatları 60-95 ₺ bandındaydı; bu veri bugünkü seviyeyi göstermediği için yalnızca karşılaştırma amacıyla anılıyor. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) hem à la carte hesap hem brunch menüsü 'orta' bandına düşüyor; brunch tam eşiğin üzerinde değil, sınırında."
    },
    "yemek": {
      "puan": 7.5,
      "ozet": "Kaynaklar bu restoranda belirgin biçimde ikiye bölünüyor. Olumlu taraf: Gault&Millau Türkiye 2026 rehberinde 2 toque ve 13/20 (2025 rehberinde 1 toque, 12,5/20 idi — yani puanı yükselmiş), Yandex Haritalar'ın Nişantaşı kaydında 4,3/5 (34 yorum), Gault&Millau'nun 'İstanbul'un en iyi brunch mekânı' ödülü, ve Türkçe gastronomi yazılarında şef Çiğdem Seferoğlu'nun Anadolu üreticileriyle kurduğu tedarik ağının tutarlı biçimde övülmesi. Olumsuz taraf: TripAdvisor'da 3,1/5 (29 yorum, İstanbul'da 9.672 restoran içinde 5.763. sıra); 'porsiyonlar çok küçük, tatsız, özel bir şey yok' ve 'yağlı ve ağır yemekler' başlıklı yorumlar; Ekşi Sözlük'te fiyat/performansa 10 üzerinden 4-5 verilmesi ve mekânın 'çok abartıldığı' değerlendirmesi. TripAdvisor kaydının önemli bir bölümü mekânın Beyoğlu dönemine ait olduğu için Nişantaşı'ndaki yeni mutfağı birebir yansıtmayabilir; bu ayrım yapılamadı. Belirgin ve sık tekrarlanan bir zayıflık (porsiyon/fiyat dengesi) bulunduğu için 7,0-7,9 bandı."
    },
    "neYenir": [
      {
        "yemek": "Taş Fırında Konya Küflüsü",
        "kacKisiOnerdi": null,
        "not": "Şefin yeteneğini yansıtan imza tabaklar arasında Yandex kaydında, Mekan Önerisi ve Müdavim incelemelerinde tutarlı biçimde anılıyor. Müdavim'in Beyoğlu dönemine ait fiyat listesinde 75 ₺ idi."
      },
      {
        "yemek": "Erzincan Tulumlu Çıtır Pide",
        "kacKisiOnerdi": null,
        "not": "Yandex Haritalar kaydında ve Türkçe mekân yazılarında Konya küflüsüyle birlikte mekânın öne çıkan iki tabağından biri olarak geçiyor; menünün 'Taş Fırından' bölümünün merkezinde yer alıyor."
      },
      {
        "yemek": "Çıtır Enginar",
        "kacKisiOnerdi": null,
        "not": "Gault&Millau Türkiye Hodan sayfası çıtır enginarı mekânın imza lezzetlerinden biri olarak sayıyor; Türkçe derlemelerde de 'en çok beğenilen tabaklardan' diye anılıyor."
      },
      {
        "yemek": "Tiramisu",
        "kacKisiOnerdi": null,
        "not": "Gault&Millau Türkiye sayfası tiramisuyu çıtır enginarla birlikte iki imza lezzetten biri olarak öneriyor. Müdavim incelemesi tatlı olarak fıstıklı sufleyi öne çıkarıyor — kaynaklar tatlı önerisinde ayrışıyor."
      },
      {
        "yemek": "Ciğer ve Nohut Dürüm",
        "kacKisiOnerdi": null,
        "not": "Gazete Oksijen'in 14 Temmuz 2026 tarihli brunch derlemesinde, Hodan'ın hafta sonu sofrasını klasik kahvaltının ötesine taşıyan Antep esintili tabak olarak özellikle anlatılıyor. Yalnızca brunch servisinde geçerli."
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "Ambiyans, kaynakların üzerinde en çok uzlaştığı başlık. Beyoğlu dönemindeki Cezayir binasının bahçe katı 'sanat eserleri, ağaçlar, beyaz örtülü masalar' ve 'Beyoğlu'nun kalabalığından yalıtan' atmosferiyle övülüyordu; Nişantaşı'ndaki yeni adres için Indagare 'cam kubbeli bahçe terası', Oggusto ise 'şehrin merkezinde olmasına rağmen sakin ve samimi', 'daha geniş bir deneyim alanı' diyor. Ekşi Sözlük yorumlarında bahçe bölümü 'gizli bir avlu' benzetmesiyle anlatılıyor, TripAdvisor'daki olumlu yorumlarda da 'bahçe serasında muhteşem mekân, çağdaş sanat' geçiyor. Hafta sonları canlı müzik olduğu Gazete Oksijen'in Temmuz 2026 derlemesinde belirtiliyor. Puanı 9'a çıkarmamanın nedeni, mekânın Ağustos 2026 itibarıyla yeni adresinde yeni olması ve yeni salona dair bağımsız değerlendirmenin henüz az olması.",
      "etiketler": [
        "bahçe",
        "sakin",
        "şık",
        "sanat",
        "canlı-müzik"
      ],
      "dressCode": "Şık giyim öneriliyor (Made in City rehberi)",
      "uygun": [
        "çift",
        "iş yemeği",
        "grup"
      ]
    },
    "servis": {
      "puan": 7.2,
      "ozet": "Servisle ilgili tekrarlayan tek örüntü olumsuz: hem Yandex kaydındaki yorum özetinde hem Mekan Önerisi'nde hem de arama sonuçlarından okunabilen Türkçe yorumlarda 'yemekler lezzetli ama servis zaman zaman yavaş' ifadesi tekrarlanıyor. TripAdvisor'da 'kötü müşteri hizmeti, küçük porsiyon, yüksek fiyat' başlıklı olumsuz bir yorum var. Karşı tarafta TripAdvisor'daki olumlu yorumlardan biri servis kalitesini 'mükemmel ve üst düzey' diye niteliyor ve Yandex yorumlarında kokteyller ayrıca övülüyor. Yavaşlık şikâyeti belirgin ve sık tekrarlandığı için 7,0-7,9 bandı. Şikayetvar'da Hodan adına açılmış bir marka sayfası bulunamadı.",
      "artilar": [
        "TripAdvisor'daki olumlu yorumlarda 'üst düzey' bulunan servis kalitesi",
        "Yandex yorumlarında kokteyl ve bar tarafının ayrıca övülmesi",
        "Şef Çiğdem Seferoğlu'nun üretici ağının menüde ve anlatımda somut karşılığı olması"
      ],
      "eksiler": [
        "Birden fazla kaynakta tekrarlanan yavaş servis şikâyeti",
        "Porsiyonların küçük bulunması ve tüm tabakların aynı boyutta gelmesi eleştirisi",
        "TripAdvisor'da fiyat/performans dengesizliği ve 'kötü müşteri hizmeti' yorumları"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Türkiye 2026 Gastronomi Rehberi — 2 toque, 13/20, şef Çiğdem Seferoğlu (8 Aralık 2025 tarihli tören; Food in Life'ın 2026 rehberi listesinden doğrulandı). 2025 rehberinde 1 toque / 12,5/20 ile yer alıyordu ve aynı yıl 'İstanbul'un en iyi brunch mekânı' ödülünü almıştı (Gault&Millau Türkiye'nin kendi Hodan sayfası). MICHELIN Guide İstanbul seçkisinde Hodan'ın İstanbul şubesine rastlanmadı; markanın Bodrum'daki ayrı işletmesi Hodan Yalıkavak MICHELIN Guide 2026 tavsiye listesinde yer alıyor, ancak bu ayrı bir şube olduğu için buraya ödül olarak yazılmadı."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "telefon"
      ],
      "telefon": "+90 533 304 76 34",
      "link": null,
      "beklemeSuresi": "Rezervasyonun zorunlu olduğuna dair açık bir ifade bulunamadı, bu yüzden 'gerekiyor' boş bırakıldı. Buna karşılık 'hep kalabalık olduğu için gitmeden önce rezervasyon yaptırmakta fayda var' uyarısı Gazete Oksijen'in Temmuz 2026 derlemesinde, Müdavim'de ve Made in City rehberinde tekrarlanıyor. Somut bekleme süresi veren bir kaynak yok. Pazartesi kapalı; Salı-Cumartesi 12:30-16:00 öğle ve 18:00-23:00 akşam, Pazar brunch servisi çalışma düzeni Beyoğlu dönemine ait kaynaklardan geliyor ve yeni adres için doğrulanamadı.",
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
      "diger": "Gault&Millau Türkiye 2025 ve 2026 rehberleri, Yandex Haritalar'ın Nişantaşı kaydı (4,3/5, 34 yorum), Gazete Oksijen'in 14 Temmuz 2026 tarihli brunch derlemesi, Oggusto'nun 'İstanbul'un en yeni mekânları' listesi, Müdavim ve Mekan Önerisi incelemeleri, Made in City ve Indagare rehberleri, Foursquare kaydı ve Ekşi Sözlük 'hodan' başlığı da değerlendirmeye dahil edildi. Google Haritalar puanı yalnızca mekânın eski Beyoğlu adresini gösteren güncelliği şüpheli bir kaynakta görüldüğü için kullanılmadı."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "nusret-etiler",
    "isim": "Nusr-Et Steakhouse Etiler",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Etiler",
    "mutfak": [
      "Steakhouse",
      "Et",
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
      "not": "Kişi başı aralık verilmedi çünkü elde edilen rakamlar farklı yıllara ait ve birbirini tam doğrulamıyor. Doğrulanan somut veriler: (1) 12 Ağustos 2024'te sosyal medyaya düşen ve birden fazla haber sitesinde yayımlanan Etiler şubesi adisyonu 7 kişi için 16.372 ₺, yani kişi başı yaklaşık 2.339 ₺; (2) Uplifers'ın 2025 tarihli 'Etiler'in en iyi 15 restoranı' listesi Nusr-Et için kişi başı 1.500-2.500 ₺ veriyor; (3) RestaurantGuru'nun Etiler kaydı kişi başını 'yaklaşık 2.000 ₺ ve üzeri' bandında etiketliyor; (4) 2026 için birbirinden bağımsız birkaç menü listesi 200 gramlık tek bir ana yemeği 2.100-2.200 ₺ (Dana Lokum 2.100 ₺, Dana Antrikot 2.200 ₺), Dana Carpaccio'yu 1.250-1.450 ₺ ve Tomahawk'ı 4.300-5.000 ₺ bandında gösteriyor — bu listeler resmî değil, aralarında da tutarsızlıklar var, bu yüzden tek tek rakamlar değil yalnızca büyüklük mertebesi kullanıldı. Restoranın kendi sitesi ve menü sayfası fiyat yayımlamıyor; Ekşi Sözlük'te sıkça anılan 'menü verilmiyor, Nusret masaya gelip canlı menü gibi anlatıyor' düzeni de fiyatın önceden bilinmesini zorlaştırıyor. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) 2024-2025 verileri 'orta' bandının tam üst sınırında kalıyor; segment, 2026 ana yemek fiyatlarına ve tek bir ana yemeğin bile 2.000 ₺'yi aştığına dayanılarak 'pahalı' seçildi. Bu tercih, doğrulanmış 2026 kişi başı rakamı bulunmadığı için kesin değildir."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Yalnızca Etiler şubesine ait kaynaklar kullanıldı; İstinyePark, Bebek, Galataport ve yurt dışı şubelerine ait yorumlar ile Nusr-Et Burger markasının şikâyetleri kapsam dışı bırakıldı — bu ayrım özellikle Şikayetvar'da önemliydi, çünkü oradaki 36 şikâyet farklı markaları ve şubeleri karıştırıyor. Etiler için RestaurantGuru üzerinden görülen Google puanı 4,2/5 (21.083 yorum), TripAdvisor 3,9/5 (2.589 yorum); Gault&Millau Türkiye 2026 rehberinde 2 toque ve 14/20. Övgü tutarlı biçimde 28-30 gün dinlendirilmiş etin yumuşaklığında ve pişirme derecesinde yoğunlaşıyor; Ekşi Sözlük'te 'Türkiye'de et yenecek en iyi yerlerden' ifadesi geçiyor, Trip.com yorumlarında etin 'hiç yağlı olmayan, çok lezzetli' bulunduğu aktarılıyor. Puanı 9'a taşımayan şey, yemeğin kendisinden çok fiyat/performans tartışması ve TripAdvisor'ın 3,9'luk toplu puanı; ayrıca RestaurantGuru özetinde 'kalite iyi ama primli fiyat, bir kez denenir düzenli gidilmez' örüntüsü tekrar ediyor. Bu, 8,0-8,9 bandındaki 'güçlü ama tekrarlayan küçük şikâyetler var' tanımına uyuyor."
    },
    "neYenir": [
      {
        "yemek": "Lokum",
        "kacKisiOnerdi": null,
        "not": "Markanın imza eti; restoranın kendi sitesi Nusr-Et Sushi ve Nusr-Et Special ile birlikte imza tabaklar arasında sayıyor. Lokantalarım incelemesi 'ağızda dağılan, sırtın iç kısmından' diye anlatıyor. Ekşi Sözlük girdilerinde de bonfile/lokum ikilisi öne çıkan sipariş."
      },
      {
        "yemek": "Nusr-Et Sushi",
        "kacKisiOnerdi": null,
        "not": "Dana etinden yapılan, markaya özgü kalem; restoranın kendi Etiler sayfası imza tabaklar arasında ilk sıralarda anıyor. Menüde balık sushisi değil et sushisi olduğu için ayrı bir kalem olarak yazıldı."
      },
      {
        "yemek": "Tomahawk",
        "kacKisiOnerdi": null,
        "not": "Nusr-Et'in resmî menü tanıtımında Steak Tartar ve Lokum ile birlikte sayılan imza kesim. Paylaşıma açık menü listelerinde 600-800 gramlık porsiyonla en pahalı kalemlerden biri olarak geçiyor; masada kesilip servis edilmesiyle biliniyor."
      },
      {
        "yemek": "Dana Pirzola",
        "kacKisiOnerdi": null,
        "not": "Lokantalarım'ın Etiler incelemesinde T-Bone ve Dallas ile birlikte öne çıkan kesimler arasında sayılıyor ve yanına Shiraz öneriliyor. RestaurantGuru'nun popüler kalemler listesinde de 'beef ribs' geçiyor."
      },
      {
        "yemek": "Altın Baklava (Golden Baklava)",
        "kacKisiOnerdi": null,
        "not": "Restoranın kendi sitesi tatlı tarafında bu kalemi öne çıkarıyor; RestaurantGuru'nun popüler kalemler listesinde de baklava tatlı olarak ilk sırada anılıyor. Yenilebilir altın varak uygulaması markanın en çok konuşulan sunumlarından."
      }
    ],
    "ambiyans": {
      "puan": 8.0,
      "ozet": "Kaynaklar mekânı tutarlı biçimde 'şık ve lüks' diye tanımlıyor; Trip.com kaydı 'üst segment, trendy atmosfer' diyor, Türkçe mekân derlemeleri Nusr-Et'i yalnızca bir et restoranı değil 'gösteri sahnesi' olarak anlatıyor — garsonların ateş şovu, Salt Bae imzalı tuzlama hareketi ve yüksek enerjili servis. Etiler şubesi markanın doğduğu yer (2010) olduğu için ayrıca sembolik. Puanı 9'a taşımayan şey, aynı gösteri unsurunun bir bölüm yorumcuda ters tepmesi: Ekşi Sözlük girdilerinde girişe lüks otomobillerin park edilmesi ve ünlülerle çekilmiş fotoğrafların pazarlamada kullanılması 'statü satmak' diye eleştiriliyor, yoğun saatlerde oturma düzeninin sorunlu olduğu belirtiliyor.",
      "etiketler": [
        "lüks",
        "gösterişli",
        "canlı",
        "kalabalık",
        "steakhouse"
      ],
      "dressCode": null,
      "uygun": [
        "grup",
        "iş yemeği",
        "çift"
      ]
    },
    "servis": {
      "puan": 7.5,
      "ozet": "Servis, bu restoranın en bölünmüş başlığı. Olumlu tarafta Trip.com ve Türkçe derlemelerde 'servis üst düzeydi, personel çok ilgiliydi, hızlıydı' yorumları, Nusret'in bizzat masaya gelip eti kesmesi ve RestaurantGuru özetindeki 'profesyonel servis' vurgusu var. Olumsuz tarafta Ekşi Sözlük girdilerinde servisin iyi olmadığı, özellikle içecek siparişlerinde gecikme yaşandığı ve yoğun saatlerde servis kalitesinin düştüğü yazılıyor; RestaurantGuru özeti de 'zaman zaman servis aksaklıkları' diyor. Ayrıca menü verilmemesi ve fiyatların sipariş öncesi net olmaması, fiyattan bağımsız olarak bir servis sorunu olarak buraya yazıldı. Şikayetvar'daki 36 şikâyette Etiler'e özgü olanları diğer şubelerden ve Nusr-Et Burger'den ayırmak mümkün olmadığı için o kaynak puanlamada kullanılmadı. Belirgin ve sık tekrarlanan bir zayıflık olduğu için 7,0-7,9 bandı.",
      "artilar": [
        "Trip.com ve Türkçe derlemelerde ilgili, hızlı ve güler yüzlü personel yorumları",
        "Etin masada kesilip sunulması ve Salt Bae imzalı tuzlama gösterisi",
        "Vale hizmeti ve otopark sorununun olmaması (Ekşi Sözlük girdileri)"
      ],
      "eksiler": [
        "Ekşi Sözlük'te tekrarlanan yavaş içecek servisi ve yoğun saatlerde düşen servis kalitesi",
        "Basılı menü verilmemesi; fiyatların sipariş öncesi net olmaması",
        "RestaurantGuru özetinde geçen 'zaman zaman servis aksaklıkları' notu",
        "Hafta sonları için 1-2 hafta önceden rezervasyon gerekmesi"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Türkiye 2026 Gastronomi Rehberi — 2 toque, 14/20, şefler Nusret Gökçe ve Oğuzhan Dedeoğlu (8 Aralık 2025 tarihli tören; Food in Life'ın 2026 rehberi listesinden doğrulandı, kayıt açıkça 'Nusr-Et Steakhouse Etiler' şubesini adlandırıyor). MICHELIN Guide İstanbul seçkisinde Nusr-Et'e rastlanmadı; 2026 İstanbul yıldız, Bib Gourmand ve tavsiye listelerinde adı geçmiyor."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "telefon",
        "online"
      ],
      "telefon": "+90 530 919 09 94",
      "link": null,
      "beklemeSuresi": "Rezervasyonun şart olduğu iki bağımsız kaynakta belirtiliyor (Trip.com kaydı 'rezervasyon gerekli' diyor; Dress Code Finder 'rezervasyon şart, hafta içi için birkaç gün, hafta sonu için 1-2 hafta önceden' diyor). Lokantalarım incelemesi özellikle hafta içi öğle servisi için rezervasyon öneriyor. Restoranın kendi sitesinde rezervasyon bölümü var ama doğrudan erişilebilir bir rezervasyon URL'i doğrulanamadı; OpenTable üzerinde de bir Nusr-Et Etiler kaydı görünüyor, ancak sayfa açılamadığı için link boş bırakıldı.",
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
      "diger": "Gault&Millau Türkiye 2026 (2 toque, 14/20), Nusr-Et'in resmî Etiler sayfası, 12 Ağustos 2024 tarihli Etiler adisyonu haberleri (Mynet ve diğer haber siteleri), Uplifers'ın 2025 Etiler listesi, Lokantalarım incelemesi, Ekşi Sözlük 'nusr-et' başlığı, Trip.com kaydı, RestaurantGuru ve OpenStreetMap POI kaydı da değerlendirmeye dahil edildi. Şikayetvar'daki 36 şikâyet şube ve marka ayrımı yapılamadığı için puanlamada kullanılmadı."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "sunset-grill-bar",
    "isim": "Sunset Grill & Bar",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Ulus",
    "mutfak": [
      "Akdeniz",
      "Japon",
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
      "not": "Hiçbir kaynak kişi başı aralık vermediği için kisiBasi boş bırakıldı; restoranın kendi sitesindeki Temmuz 2026 menü PDF'leri makinece okunabilir olmadığı için fiyatlar oradan alınamadı. Doğrulanan en somut veri: Şikayetvar'a 19 Ekim 2025'te düşen bir şikâyette 8 kişilik bir masanın hesabı 20.291 ₺, yani kişi başı yaklaşık 2.536 ₺ — üstelik pasta ücreti ve servis bedeli bu tutarın dışında ayrıca yansıtılmış. Aynı şikâyette servis ücretinin ayrı kesildiği, üçüncü taraf derlemelerde ise hesaba yaklaşık %15 servis bedeli eklendiği belirtiliyor. RestaurantGuru kaydı kişi başını 'yaklaşık 2.000 ₺ (yaklaşık 100 avro)' diye etiketliyor; bu iki rakam birbiriyle tutarsız olduğu için yalnızca doğrulanmış adisyon esas alındı. TripAdvisor'da 'Fiyatlar aşırı yüksek' ve 'Prices beyond belief' başlıklı yorumlar bulunuyor; top25restaurants incelemesi mekânı $$$$ (çok pahalı) bandında etiketliyor ve bir misafirin şaraba 100 dolar yerine 1.000 dolar fatura edildiğini, ayrıca ambiyans ve vestiyer gibi ek kalemlerin şikâyet konusu olduğunu aktarıyor. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) Ekim 2025 tarihli doğrulanmış kişi başı ~2.536 ₺ 'pahalı' segmentine karşılık geliyor."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Sunset tek şubeli olduğu için şube ayrımı sorunu yaşanmadı. Kaynaklar: MICHELIN Guide İstanbul seçkisinde yer alıyor (yıldız veya Bib Gourmand değil), Gault&Millau Türkiye 2026'da 2 toque, RestaurantGuru üzerinden görülen Google puanı 4,1/5 (4.489 yorum), TripAdvisor 3,8/5 (1.510 yorum), Zomato 4,4/5 (723 yorum), Foursquare 9,1/10 (3.979 yorum); RestaurantGuru sıralamasında İstanbul'da 68.798 restoran içinde 315. sırada. Övgü iki yerde yoğunlaşıyor: 1999'da açılan ve Türkiye'nin ilk sushi barı sayılan bölüm ile evde 30 gün dinlendirilen kömür ateşinde ızgara etler; Voggia'nın 23 Mart 2026 tarihli incelemesi Sunset Fillet'i ve sushi barı öne çıkarıyor, Türkçe yorumlarda dana yanak 'yediğim en lezzetli et' diye anılıyor. Puanı 9'a taşımayan şey belirgin bir tutarlılık sorunu: top25restaurants incelemesi son yorumlarda porsiyon ve yemek kalitesinde ciddi dalgalanma olduğunu, miso cod'un karışık yorum aldığını yazıyor; Şikayetvar'daki Ekim 2025 şikâyetinde sushi'nin 'taze değil, bayat' geldiği bildiriliyor. Bu, 8,0-8,9 bandındaki 'güçlü ama tekrarlayan küçük şikâyetler var' tanımına uyuyor."
    },
    "neYenir": [
      {
        "yemek": "Sushi ve Sashimi Seçkisi",
        "kacKisiOnerdi": null,
        "not": "Sushi bar 1999'da açıldı ve birden fazla kaynakta Türkiye'nin ilk yüksek segment sushi barı olarak anılıyor (Gault&Millau Türkiye sayfası, Voggia, top25restaurants). Türkçe yorumlarda 'sushi'nin en güzel yapıldığı yerlerden' ifadesi geçiyor. Karşı örnek: Şikayetvar'daki 19 Ekim 2025 şikâyetinde sushi'nin bayat geldiği bildiriliyor — kaynaklar bu kalemde ayrışıyor."
      },
      {
        "yemek": "Kömür Ateşinde Dinlendirilmiş Izgara Et",
        "kacKisiOnerdi": null,
        "not": "Restoranın kendi sitesi ve Voggia'nın Mart 2026 incelemesi, evde 30 gün dinlendirilen ve kömür ateşinde pişirilen etleri menünün ana çekim noktası olarak anlatıyor. Gault&Millau sayfası da mekânın California mutfağı ve ızgara et geleneğiyle başladığını yazıyor."
      },
      {
        "yemek": "Sunset Fillet",
        "kacKisiOnerdi": null,
        "not": "Voggia'nın 23 Mart 2026 tarihli incelemesinde kuşkonmaz ve patates püresiyle servis edilen imza tabak olarak özellikle anılıyor."
      },
      {
        "yemek": "Dana Yanak",
        "kacKisiOnerdi": null,
        "not": "Türkçe yorumlarda 'yediğim en lezzetli et' diye öne çıkarılıyor. Buna karşılık Şikayetvar'daki bir şikâyette dana yanak ve ördek gibi imza tabakların porsiyon ve hazırlık kalitesinin belirgin biçimde düştüğü iddia ediliyor — kaynaklar ayrışıyor."
      },
      {
        "yemek": "Miso Cod",
        "kacKisiOnerdi": null,
        "not": "top25restaurants incelemesi bu tabağın menüde sık öne çıktığını ama karışık yorum aldığını yazıyor. Öneri listesine, hem sık anıldığı hem de tartışmalı olduğu açıkça belirtilerek eklendi."
      }
    ],
    "ambiyans": {
      "puan": 9.2,
      "ozet": "Ambiyans, kaynakların neredeyse istisnasız uzlaştığı başlık ve mekânın asıl sermayesi. Ulus Parkı'nın tepesinde, Boğaz'a ve Boğaziçi Köprüsü'ne bakan teras; MICHELIN Guide açıklaması 'şehrin ve Boğaz'ın muhteşem manzarası' diyor, top25restaurants 'asıl çekim gücü konum' diye özetliyor ve 350 kişilik iç-dış oturma alanını anlatıyor, ZAGAT alıntısı restoranın kendi sitesinde 'ılık ve yıldızlı bir gecede Boğaz'ın üzerindeki bu terasın üstüne yok' diye aktarılıyor. Voggia'nın Mart 2026 incelemesi mekânı 'yaşayan bir referans noktası' diye niteliyor ve bar, ana salon ve Sunset After olarak katmanlı bir akşam kurgusu anlattığını yazıyor. Olumsuz tarafta yalnızca oturma yeri dağıtımıyla ilgili şikâyetler var: Şikayetvar'da rezervasyona rağmen arka bölüme oturtulma ve kapıda grup bileşimine göre ayrım yapılması iddiaları geçiyor. 9,0-10 bandındaki 'o kategoride şehirde referans nokta' tanımına uyuyor.",
      "etiketler": [
        "boğaz-manzarası",
        "teras",
        "fine-dining",
        "gün-batımı",
        "bar"
      ],
      "dressCode": null,
      "uygun": [
        "çift",
        "iş yemeği",
        "grup"
      ]
    },
    "servis": {
      "puan": 8.0,
      "ozet": "Servis bu restoranda hem en güçlü hem de en tartışmalı başlık. Güçlü taraf resmî: MICHELIN Guide İstanbul'un ilk seçkisinde (Ekim 2022'de açıklanan, 2023 rehberi) Mastercard sunumuyla verilen Servis Ödülü Sunset Grill & Bar ekibine gitti; Michelin'in gerekçesi misafir konforunu mutlak öncelik yapan 'eski usul' bir konukseverlik anlayışı. Gault&Millau Türkiye de mekâna 'Sektöre Katkı' ve 'Onur' ödülleri veriyor. Zayıf taraf güncel: Şikayetvar'daki 7 şikâyetin ikisi 19 Ekim 2025'te aynı gün açılmış ve ikisi de rezervasyona rağmen yaklaşık 40 dakika barda ayakta bekletilmeyi, ardından arka bölüme oturtulmayı anlatıyor; aynı şikâyetlerde hesabı ödemek isteyen misafirin uzun süre görmezden gelindiği belirtiliyor. top25restaurants incelemesi ise bir misafire şarabın 100 dolar yerine 1.000 dolar fatura edildiğini ve ambiyans/vestiyer gibi ek kalemlerin şikâyet konusu olduğunu aktarıyor. Ödüllü bir geçmişle güncel ve tekrar eden aksaklıklar arasındaki bu makas nedeniyle puan 8,0-8,9 bandının alt ucunda tutuldu.",
      "artilar": [
        "MICHELIN Guide İstanbul Servis Ödülü (2023 seçkisi, Mastercard sunumuyla)",
        "Gault&Millau Türkiye'nin Sektöre Katkı ve Onur ödülleri",
        "Türkçe yorumlarda 'servis harikaydı' ifadesinin sık tekrarlanması",
        "Şikayetvar'daki şikâyetlerden en az birinin 'çözüldü' olarak işaretlenmesi"
      ],
      "eksiler": [
        "Rezervasyona rağmen ~40 dakika ayakta bekletilme (Şikayetvar, 19 Ekim 2025, iki ayrı şikâyet)",
        "Rezervasyon sahiplerinin arka bölüme oturtulması ve kapıda grup bileşimine göre ayrım iddiaları",
        "Hesap ödeme talebinin uzun süre karşılıksız kalması (Şikayetvar, Ekim 2025)",
        "Pasta ve servis bedelinin ayrıca yansıtılması; adisyon hatası iddiası (top25restaurants)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "MICHELIN Guide İstanbul — rehberde seçilmiş restoran. Yıldız ya da Bib Gourmand değil; 2026 İstanbul yıldız ve Bib Gourmand listelerinde yer almıyor, tavsiye edilen restoranlar seçkisinde yer alıyor. Ayrıca MICHELIN Guide İstanbul'un ilk seçkisiyle (Ekim 2022'de açıklanan 2023 rehberi) verilen Mastercard sunumlu Servis Ödülü'nün sahibi; bu ödül Michelin'in kendi duyurusundan ve Michelin Türkiye'nin basın sayfasından doğrulandı."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault&Millau Türkiye 2026 Gastronomi Rehberi — 2 toque, mutfak şefi Marios Tsouris. Puan kaynaklar arasında farklılık gösteriyor: Gault&Millau Türkiye'nin kendi Sunset Grill & Bar sayfası 14/20, 2026 rehberinin tanıtımını aktaran Food in Life listesi 14,5/20 veriyor. Aynı sayfada mekâna 'Sektöre Katkı' ve 'Onur' ödülleri de veriliyor. Restoranın kendi sitesi ayrıca Wine Spectator ve Chaîne des Rôtisseurs üyeliğini anıyor; bunlar bağımsız olarak doğrulanamadığı için ayrı ödül kaydı açılmadı."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "telefon",
        "online",
        "e-posta"
      ],
      "telefon": "+90 212 287 03 57",
      "link": null,
      "beklemeSuresi": "Rezervasyonun koşullu olarak gerekli olduğu belirtildiği için 'gerekiyor' boş bırakıldı: kaynaklar 'özellikle akşam ve hafta sonları, iyi masalardan birine oturup manzaranın tadını çıkarmak için rezervasyon önemli' diyor; top25restaurants ise doğrudan 'rezervasyon şart' diyor. Somut bekleme süresi veren doğrulanmış bir kaynak yok; buna karşılık Şikayetvar'daki 19 Ekim 2025 tarihli iki şikâyette rezervasyonlu misafirlerin barda yaklaşık 40 dakika bekletildiği anlatılıyor. Restoranın kendi sitesindeki rezervasyon düğmesi JavaScript ile çalıştığı için doğrudan bir rezervasyon URL'i çıkarılamadı, bu yüzden link boş bırakıldı; 15 kişi ve üzeri grup menüleri için info@sunsetgrillbar.com adresi veriliyor.",
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
      "diger": "MICHELIN Guide İstanbul seçkisi ve 2023 Servis Ödülü duyurusu, Michelin Türkiye basın sayfası, Gault&Millau Türkiye 2026 (2 toque), restoranın resmî sitesi ve Temmuz 2026 menü sayfaları, Voggia'nın 23 Mart 2026 tarihli incelemesi, top25restaurants değerlendirmesi, Şikayetvar'daki 7 şikâyet (19 Ekim 2025 tarihli ikisi dahil), Zomato (4,4/5, 723 yorum), Foursquare (9,1/10, 3.979 yorum), Yandex Haritalar (4,3/5, 49 yorum), RestaurantGuru ve OpenStreetMap POI kaydı da değerlendirmeye dahil edildi."
    },
    "fotolar": [
      {
        "dosya": "fotolar/sunset-grill-bar-1.jpg",
        "alt": "Bar tezgâhında kırılmış buzla servis edilen kokteyl",
        "kaynak": "https://www.sunsetgrillbar.com/assets/upload/images/bar-2535f1.jpg",
        "kredi": "Sunset Grill & Bar"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "lacivert",
    "isim": "Lacivert",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Anadolu Hisarı",
    "mutfak": [
      "Deniz Ürünleri",
      "Akdeniz",
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
      "not": "Restoranın kendi menüsü (lacivertrestaurant.com üzerindeki 'Lacivert-Menu-Temmuz26-EN.pdf', Temmuz 2026 tarihli) indirildi, ancak menü sayfaları görüntü olarak hazırlandığı için içindeki fiyatlar okunamadı; bu yüzden resmî fiyat listesi kullanılamadı. Kişi başı aralık hiçbir kaynak böyle bir aralık vermediği için boş bırakıldı. Doğrulanan somut veriler yorumlardan geliyor: Ekşi Sözlük'te yalnızca bu restoranın adisyonuna ayrılmış ayrı bir başlıkta (24 Ocak 2025) cacık 290 ₺, patlıcan salatası 440 ₺, tatlı 350 ₺, çay 80 ₺ ve bir kadeh/şişe şarap 480 ₺ olarak aktarılıyor; aynı başlıkta kuver ve servis bedelinin toplamının yaklaşık 50 dolar olduğu ve iki kişilik hesabın 11.000 ₺ civarına çıktığı yazılıyor, bir yazar kişi başı tutarı 100 avroya benzetiyor. 2 Ekim 2024 tarihli bir başka Ekşi Sözlük yorumunda kuver kişi başı 125 ₺, hesaba %10 servis bedeli eklendiği ve valenin 300 ₺ olduğu belirtiliyor. Kaynaklar tam hemfikir değil: restaurantguru.com sayfası kişi başı ~2.000 ₺ (tarihsiz, algoritmik bir tahmin) yazarken Wanderlog fiyat seviyesini $$$$ olarak etiketliyor. menufiyati.tr'de 'Lacivert Menü Fiyatları 2026' başlıklı ayrıntılı bir liste bulundu ama sayfa hiçbir kaynak göstermiyor ve restoranın kendi menüsüyle karşılaştırılamadığı için kullanılmadı. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) doğrulanmış kişi başı ~5.500 ₺'lik adisyon verisi 'pahalı' segmentine karşılık geliyor."
    },
    "yemek": {
      "puan": 7.2,
      "ozet": "Platform puanları iyi ama yorum metinleri belirgin biçimde bölünmüş. restaurantguru.com'un derlediği tabloda Google 4,3/5 (2.990 yorum), Zomato 4,4/5, Foursquare 8,8/10; TripAdvisor ise 3,9/5 (659 yorum, İstanbul'da 9.734 restoran içinde ~600. sıra) ile belirgin biçimde daha düşük. Gault & Millau Türkiye 2026 seçkisinde 1 toque / 12 üzerinden 20 puanla rehberin en alt basamağında yer alıyor. Övgü tarafında balık çorbası, levrek külbastı ve ızgara ahtapot/kalamar tekrarlanıyor. Buna karşılık Ekşi Sözlük'te okunan 40 kadar entry'de 'yemekler berbat', 'lezzet olarak 1/10', 'yemekler tırt, manzara 10 numara' ve 'porsiyonlar küçük' ifadeleri yıllara yayılarak tekrarlanıyor; birden fazla yazar mekânın 'manzara sattığını' söylüyor. Karşı tarafta 23 Mayıs 2025 tarihli bir yorum 'gayet de lezzetliydi, 8/10' diyor. Bu, 7,0-7,9 bandındaki 'iyi ama belirgin ve sık tekrarlanan bir zayıflık var' tanımına uyuyor."
    },
    "neYenir": [
      {
        "yemek": "Balık Çorbası",
        "kacKisiOnerdi": null,
        "not": "Zomato/mekan.com yorum derlemelerinde mekânın en çok anılan kalemi; 'yenmiş en iyi balık çorbalarından biri' diye anlatılıyor. Kaynaklar bu kalemde ayrışıyor: Wanderlog üzerinden okunan bir Google yorumunda 'balık çorbasının tadı iyi değildi' deniyor."
      },
      {
        "yemek": "Levrek Külbastı",
        "kacKisiOnerdi": null,
        "not": "10 Nisan 2022 tarihli bir Ekşi Sözlük yorumunda 'levrek külbastıyı kesinlikle deneyin derim, harikaydı' diye özellikle öneriliyor."
      },
      {
        "yemek": "Zahmetsiz Levrek",
        "kacKisiOnerdi": null,
        "not": "2 Ekim 2024 tarihli Ekşi Sözlük yorumu bu kalemi adıyla anıp beğendiğini yazıyor; aynı yorumda kuver ve servis bedelleri de aktarılıyor."
      },
      {
        "yemek": "Izgara Ahtapot",
        "kacKisiOnerdi": null,
        "not": "1 Nisan 2025 tarihli bir Ekşi Sözlük yorumunda başlangıç olarak ahtapot ya da kalamar ızgara öneriliyor ve 'lezzet olarak başarılıydı' deniyor. Gault & Millau Türkiye'nin restoran sayfası da ahtapotu geleneksel tekniklerle pişirdiklerini vurguluyor. Wanderlog üzerinden okunan Google yorumlarında kalamar hem çok övülüyor hem bir yorumda 'az pişmiş' bulunuyor."
      },
      {
        "yemek": "Kabak Çiçeği Dolması",
        "kacKisiOnerdi": null,
        "not": "Wanderlog üzerinden okunan bir Google yorumunda ('squash blossom stuffed') özellikle övülüyor; aynı yorumda ana yemek balığın patlıcan soslu hâli de beğeniliyor."
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "Ambiyans, kaynakların neredeyse tamamının hemfikir olduğu tek başlık. Restoran Boğaz'ın Anadolu yakasında, Fatih Sultan Mehmet Köprüsü'nün hemen altında, denize sıfır konumda; Rumeli Hisarı tarafından kalkan kendi teknesiyle karşıya geçiliyor (resmî anlatım ve birden fazla Google/Ekşi yorumu). Ekşi Sözlük'te en sert eleştiriyi yazanlar bile 'manzara 10 numara' ve 'manzara olarak bazı masalar 9/10' diyor; gün batımı saatlerinde dışarıda oturmak özellikle öneriliyor. Puanı 10'a çıkarmayan iki nokta var: manzaranın masadan masaya belirgin biçimde değişmesi ve 10 Nisan 2022 tarihli bir yorumda mekânın 'lüksünü belli eden bir şey yok, tuvaletler bile eski' denmesi.",
      "etiketler": [
        "boğaz-manzarası",
        "deniz-kenarı",
        "teras",
        "lüks",
        "tekne-servisi"
      ],
      "dressCode": null,
      "uygun": [
        "çift",
        "iş yemeği",
        "grup"
      ]
    },
    "servis": {
      "puan": 7.3,
      "ozet": "Servis yorumları ikiye bölünmüş. Olumlu tarafta Zomato/mekan.com derlemelerinde 'güler yüzlü garsonlar', 'hizmet mükemmel seviyede' ve 30 Ağustos 2016 tarihli pazar kahvaltısı yorumundaki hizmet övgüsü var; şirketlerin yurt dışı misafirlerini burada ağırladığı birden fazla yorumda geçiyor. Olumsuz tarafta tekrar eden ve somut örnekleri olan bir örüntü var: kuver (kişi başı 125 ₺), %10 servis bedeli ve 300 ₺ vale ücretinin ayrı ayrı yazılması birçok yorumda 'zorla alınan bahşiş' diye eleştiriliyor; 6 Temmuz 2021 tarihli yorumda valelerin lüks araç sahiplerine öncelik verip taksi bekleyen yaşlı çifti ayakta beklettiği anlatılıyor; 4 Nisan 2022'de tek tatlı için ikinci çatal verilmemesi ayrı bir şikâyet konusu; 15 Haziran 2025 tarihli yorumda rezervasyon için telefonun günlerce açılmadığı yazılıyor. 2016 tarihli bir yorumda menü verilmeyip yemek listesinin sözlü anlatıldığı da belirtiliyor. Belirgin ve tekrar eden zayıflık olduğu için 7,0-7,9 bandına konuldu.",
      "artilar": [
        "Rumeli Hisarı'ndan kalkan ücretsiz tekne servisi (resmî anlatım ve Google yorumları)",
        "Güler yüzlü ve ilgili personel (Zomato/mekan.com yorum derlemeleri)",
        "Pazar kahvaltısında hizmetin 'mükemmel seviyede' bulunması (Ekşi Sözlük, 2016)"
      ],
      "eksiler": [
        "Kuver (kişi başı 125 ₺), %10 servis ve 300 ₺ vale ücretinin ayrı ayrı yansıtılması (Ekşi Sözlük, Ekim 2024 ve Ocak 2025)",
        "Vale ekibinin müşteriler arasında ayrım yaptığına dair ayrıntılı şikâyet (Ekşi Sözlük, Temmuz 2021)",
        "Tek tatlıya ikinci çatal verilmemesi gibi katı tutum örnekleri (Ekşi Sözlük, Nisan 2022)",
        "Rezervasyon telefonunun açılmaması (Ekşi Sözlük, Haziran 2025)"
      ]
    },
    "oduller": [
      {
        "tip": "gault-millau",
        "detay": "Gault & Millau Türkiye 2026 seçkisi — 1 toque, 20 üzerinden 12 puan, 'Deniz Ürünleri' kategorisinde. Rehberin kendi restoran sayfasından (gault-millau.com.tr/lacivert-3) ve 2026 ödül duyuru sayfasından doğrulandı; aynı sayfada yönetici şef Rıdvan Külçek olarak veriliyor. Restoranın Michelin tarafı ayrıca kontrol edildi: MICHELIN Guide Türkiye 2026 seçkisinde (4 Aralık 2025'te açıklandı) ne yıldız, ne Bib Gourmand, ne de rehberde seçilmiş restoran olarak yer alıyor; taranan yıldız, Bib Gourmand ve İstanbul liste derlemelerinin hiçbirinde adı geçmiyor."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "telefon",
        "online"
      ],
      "telefon": "+90 216 413 37 53",
      "link": "https://rezervasyon.rezervin.com/tr/lacivert",
      "beklemeSuresi": "1 Nisan 2025 tarihli bir Ekşi Sözlük yorumunda 'rezervasyon konusu önemli, genelde yoğun' deniyor; 15 Haziran 2025 tarihli bir başka yorumda rezervasyon telefonunun günlerce açılmadığı anlatılıyor. Rezervasyonun zorunlu olup olmadığına dair resmî bir ifade bulunamadığı için 'gerekiyor' alanı boş bırakıldı. Rezervasyon bağlantısı restoranın kendi sitesinde verilen rezervin.com sayfası ve erişilebilir olduğu doğrulandı.",
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
      "diger": "Restoranın kendi sitesi ve Temmuz 2026 tarihli menü PDF'i, sahibi D-ream'in marka sayfası, Gault & Millau Türkiye'nin restoran ve 2026 ödül sayfaları, Ekşi Sözlük'teki 'lacivert restaurant' ve 'lacivert restaurant adisyonu' başlıkları, Wanderlog ve restaurantguru derlemeleri, Zomato/mekan.com yorum özetleri, OpenStreetMap POI kaydı ve MICHELIN Guide Türkiye 2026 liste derlemeleri (yokluğun doğrulanması için) değerlendirmeye dahil edildi."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "mikla",
    "isim": "Mikla",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Beyoğlu",
    "mutfak": [
      "Modern Anadolu",
      "Akdeniz",
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
      "not": "Aralık doğrudan restoranın kendi menü sayfasından alındı (miklarestaurant.com/menu, Ağustos 2026'da okundu): üç kalemlik prix fixe à la carte kişi başı 8.500 ₺, yedi kalemlik Mikla tadım menüsü kişi başı 10.500 ₺ (yalnızca tüm masa için), vegan tadım menüsü 9.600 ₺. Menüde KDV'nin dahil, servisin dahil olmadığı açıkça yazıyor. Şarap eşleşmeleri ayrıca 3.200 ₺ (üç kadeh), 5.500 ₺ ve 8.000 ₺; peynir-bal tabağı iki kişilik 2.500 ₺; kokteyller 950-1.150 ₺. Fiyatın hızlı arttığı Ekşi Sözlük kayıtlarından izlenebiliyor: tadım menüsü 26 Kasım 2022'de 2.600 ₺ + %12 servis, 14 Kasım 2025'te 8.000 ₺, Ağustos 2026'da 10.500 ₺. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) bu aralık açık biçimde 'pahalı' segmentine düşüyor."
    },
    "yemek": {
      "puan": 8.2,
      "ozet": "Kurumsal değerlendirmeler güçlü: MICHELIN Guide Türkiye 2026 seçkisinde bir yıldızını korudu, Gault & Millau Türkiye 2026'da 3 toque / 20 üzerinden 15 puan aldı, TripAdvisor 4,2/5 (2.224 yorum, İstanbul'da 9.761 restoran içinde ~478. sıra), restaurantguru'nun derlediği Google puanı 4,3/5 (2.686 yorum). Övgü tadım menüsünün bütünlüğünde, balık ekmek yorumunda, uzun pişmiş kuzuda ve şarap programında (450 etiket) yoğunlaşıyor. Puanı 9'un altında tutan şey tutarlılık eleştirisinin yıllara yayılması: Vedat Milor'un Hürriyet'teki 16 Haziran 2018 tarihli yazısı mutfağı 'çelişkili duygular' başlığıyla değerlendirip levreği kuru ve donmuş görünümlü, ayva tatlısını fazla pişmiş, kuzu incikini lezzetsiz buluyor; TripAdvisor'da 'Good, but nowhere near michelin' başlıklı bir yorum var; Ekşi Sözlük'te 3 Eylül 2025 tarihli bir yorum 'kalite baya düşmüş, düzelene kadar gidilmez' diyor ve 4 Ekim 2023 tarihli bir yorum 'Türkiye'deki diğer Michelin'lere göre bir tık altta kaldı' diye yazıyor. Bu, 8,0-8,9 bandındaki 'güçlü ama tekrarlayan küçük şikâyetler var' tanımına uyuyor. Not: restoranın çoğunluk hissesi Kasım 2023'te Fenix Yapı'ya satıldı ve kurucu şef Mehmet Gürs hisselerini devretti; ekibin ve sistemin aynı kaldığı basına yansıdı, ancak kalite tartışmalarının bir kısmı bu tarihten sonrasına ait."
    },
    "neYenir": [
      {
        "yemek": "Balık Ekmek (Hamsi)",
        "kacKisiOnerdi": null,
        "not": "Üç ayrı kaynakta öne çıkıyor: Vedat Milor'un 2018 tarihli yazısında ince ve çıtır ekmeğiyle övülüyor, ET Food Voyage incelemesi akşamın favorisi sayıyor, 28 Aralık 2022 tarihli Ekşi Sözlük yorumu 'balık ekmek yorumunun yaratıcılığı müthişti' diyor."
      },
      {
        "yemek": "Ağır Ateşte Pişmiş Kuzu",
        "kacKisiOnerdi": null,
        "not": "Restoranın Ağustos 2026'da yayımlanan tadım menüsünde 'braised lamb' olarak yer alıyor. Ekşi Sözlük'te iki ayrı kullanıcı öne çıkarıyor: biri '12 saat pişmiş kuzu sırt, muazzam bir lezzet ve doku' diyor, diğeri 'ızgara kuzu unutulmazdı' yazıyor. ET Food Voyage incelemesi de fıstıklı kuzu pirzolayı kusursuz buluyor."
      },
      {
        "yemek": "Kurutulmuş Dana Bonfile",
        "kacKisiOnerdi": null,
        "not": "Hem prix fixe à la carte hem tadım menüsünde yer alan sabit kalem (restoranın kendi menü sayfası, Ağustos 2026). Wanderlog üzerinden okunan bir Google yorumunda kuru dinlendirilmiş etin diğer Michelin restoranlarına göre 'kocaman' porsiyonla geldiği anlatılıyor."
      },
      {
        "yemek": "Ayva Tatlısı",
        "kacKisiOnerdi": null,
        "not": "Kaynaklar bu kalemde açıkça ayrışıyor: Vedat Milor 2018'de ayvanın fazla pişirilip reçele döndüğünü yazıyor, ET Food Voyage yanındaki fındıklı dondurmayı tatlının kendisinden daha çok beğeniyor; buna karşılık 28 Aralık 2022 tarihli Ekşi Sözlük yorumu 'ayva tatlısıyla bitirdim' diye olumlu anıyor. Ağustos 2026 menüsünde bu kalem yer almıyor, mevsime göre değişiyor olabilir."
      },
      {
        "yemek": "Yanmış Fındık Helvası",
        "kacKisiOnerdi": null,
        "not": "Restoranın Ağustos 2026'da yayımlanan yedi kalemlik tadım menüsünün kapanış tatlısı. Bağımsız bir yorumda ayrıca öne çıktığına dair kayıt bulunamadı; öneri yalnızca restoranın kendi menüsüne dayanıyor."
      }
    ],
    "ambiyans": {
      "puan": 9.0,
      "ozet": "Mekân The Marmara Pera'nın en üst iki katında ve panoramik İstanbul manzarası hemen her kaynakta ilk anılan şey. Wanderlog üzerinden okunan Google yorumları gün batımını 'kesinlikle büyüleyici' diye anlatıyor ve iç mekânın 20. yüzyıl ortası modern tasarımını övüyor; Vedat Milor da ambiyansı ve terası olumlu değerlendiriyor; 28 Aralık 2022 tarihli Ekşi Sözlük yorumu mekânın 'ortam yeri veya Instagram yeri değil, tam anlamıyla gerçek yemek yeri' olduğunu vurguluyor. Puanı 9,0'da tutan tek tekrar eden şikâyet masa dağılımı: 4 Ekim 2023 tarihli bir Ekşi Sözlük yorumu manzaralı masaların turistlere verildiğini, çok önceden rezervasyon yapılsa bile yerel misafirlere 'masa kalmadı' denebildiğini yazıyor; başka bir yorum da salonda Türk müşterinin azınlıkta kaldığını anlatıyor.",
      "etiketler": [
        "çatı-katı",
        "panoramik-manzara",
        "modern",
        "bar",
        "fine-dining"
      ],
      "dressCode": null,
      "uygun": [
        "çift",
        "iş yemeği"
      ]
    },
    "servis": {
      "puan": 8.7,
      "ozet": "Servis, Mikla'nın en tutarlı güçlü yanı. Wanderlog üzerinden okunan Google yorumlarında personel 'ilgili, nazik ve gerçekten tutkulu' diye tarif ediliyor; 28 Aralık 2022 tarihli Ekşi Sözlük yorumu 'hizmet, servis, garsonların ilgisi çok iyi, etkilendim' diyor; birden fazla yorum menüde olmayan ikramlardan söz ediyor. Restoranın kendi rezervasyon kuralları da şeffaf: iptalin en az 8 saat önce yapılması, rezervasyon saatinden 30 dakika sonra masanın düşmesi ve alerji notlarının önceden alınması yazılı olarak duyurulmuş. Puanı 9'un altına çeken iki şey var: manzaralı masaların dağıtımında ayrımcılık iddiaları ve hesaba eklenen %12 servis bedelinin yorumlarda sık sık ayrıca eleştirilmesi (menüde servisin dahil olmadığı yazıyor).",
      "artilar": [
        "İlgili, bilgili ve müdahaleci olmayan servis (Google yorumları ve Ekşi Sözlük)",
        "Menü dışı ikramlar ve şarap eşleşmesinde yönlendirme (Ekşi Sözlük yorumları)",
        "Rezervasyon ve iptal kurallarının restoranın kendi sitesinde açıkça yazılı olması"
      ],
      "eksiler": [
        "Manzaralı masaların dağıtımında ayrım yapıldığı yönünde tekrarlayan yorumlar (Ekşi Sözlük, 2023)",
        "%12 servis bedelinin hesabı belirgin biçimde büyütmesi (Ekşi Sözlük, 2022 ve sonrası)",
        "Tadım menüsünün yalnızca tüm masa için sipariş edilebilmesi (restoranın kendi menüsü)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "MICHELIN Guide Türkiye 2026 — 1 yıldız (korundu). 4 Aralık 2025'te açıklanan 2026 seçkisinde bir yıldızını koruyan İstanbul restoranları arasında; Anadolu Ajansı, Türkiye Today, yemek.com ve OGGUSTO'nun birbirinden bağımsız 2026 liste derlemelerinin dördünde de aynı şekilde geçiyor. İki yıldız değil, Bib Gourmand değil. guide.michelin.com doğrudan okunamadı (bot koruması) ama restoranın kendi sitesi de Michelin yıldızını duyuruyor."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault & Millau Türkiye 2026 — 3 toque, 20 üzerinden 15 puan, 'Şef Restoranı' kategorisinde. Rehberin 2026 ödül duyuru sayfasından doğrulandı; restoranın kendi sitesi de üç toque'u ve rehberin En İyi Yönetici / En İyi Barmen ödüllerini anıyor."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "telefon",
        "e-posta"
      ],
      "telefon": "+90 212 293 56 56",
      "link": "https://www.miklarestaurant.com/reservation",
      "beklemeSuresi": "Restoran pazar günleri ve öğle servisinde kapalı; akşam 18:00'de açılıyor, son yemek siparişi 21:30, kapanış 24:00, bar 02:00'ye kadar açık (restoranın kendi sitesi). Kendi rezervasyon kuralları sayfasına göre iptalin en az 8 saat önce yapılması gerekiyor ve rezervasyon saatinden 30 dakika sonra gelinmezse masa iptal ediliyor; 8 kişiden kalabalık gruplar için telefon veya e-posta isteniyor. Rezervasyonun zorunlu olduğuna dair açık bir ifade bulunamadığı için 'gerekiyor' alanı boş bırakıldı.",
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
      "diger": "MICHELIN Guide Türkiye 2026 seçkisine dair Anadolu Ajansı, Türkiye Today, yemek.com ve OGGUSTO derlemeleri; Gault & Millau Türkiye 2026 ödül sayfası; restoranın kendi menü, rezervasyon ve rezervasyon kuralları sayfaları; Vedat Milor'un Hürriyet'teki 2018 tarihli Mikla yazısı; ET Food Voyage incelemesi; Ekşi Sözlük 'mikla' başlığı; Wanderlog ve restaurantguru derlemeleri; Gazete Oksijen ve 10Haber'in 2023 tarihli sahiplik değişikliği haberleri; OpenStreetMap POI kaydı da değerlendirmeye dahil edildi."
    },
    "fotolar": [
      {
        "dosya": "fotolar/mikla-1.jpg",
        "alt": "Beyaz tabakta sunulan tek porsiyonluk imza yemek",
        "kaynak": "https://www.miklarestaurant.com/media/n03p2lla/4.webp",
        "kredi": "Mikla"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "neolokal",
    "isim": "Neolokal",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Karaköy",
    "mutfak": [
      "Modern Türk",
      "Anadolu",
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
      "not": "Restoranın kendi sitesindeki güncel tadım menüsü PDF'i (neolokal_tasting_menu_tr_2026_V2_210726.pdf, 22 Temmuz 2026'da yüklenmiş) indirildi ama sayfalar görüntü olarak hazırlandığı için içindeki fiyatlar okunamadı; bu yüzden 2026 fiyatı doğrulanamadı ve kisiBasi boş bırakıldı. Elde edilen tarihli somut veriler: 2025 için tadım menüsü kişi başı 6.100 ₺ + servis, vejetaryen tadım menüsü 5.300 ₺ + servis, şarap eşleşmeleri 4.000 ₺ ve 5.000 ₺ (KDV dahil, hepsi kişi başı); TripAdvisor yorumlarında da 6.100 ₺'lik tadım menüsü anılıyor. Ekşi Sözlük'te 27 Ağustos 2024 tarihli bir yorum tadım menüsünü 5.300 ₺ + %12 servis = 5.936 ₺ (günün kuruyla ~170 dolar) diye ayrıntılandırıyor; 14 Ocak 2024 tarihli bir yorum iki kişilik hesabı 14.500 ₺ (~500 dolar) olarak veriyor; 8 Ocak 2023 tarihli bir yorum tadım menüsünü 2.100 ₺, şarapları 9.000 ₺'den başlayan bir bant olarak anlatıyor. Aynı yorumlarda ağız temizlemek için içilen suyun hesaba ayrıca yazılması eleştiriliyor. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) bu rakamlar 'pahalı' segmentine karşılık geliyor."
    },
    "yemek": {
      "puan": 8.0,
      "ozet": "Kurumsal tarafta çok güçlü, kullanıcı tarafında belirgin biçimde bölünmüş bir dosya. MICHELIN Guide Türkiye 2026'da bir yıldızını korudu, Gault & Millau Türkiye 2026'da 4 toque / 20 üzerinden 18 puanla ülkenin en üst iki restoranından biri (yalnızca TURK Fatih Tutak önünde), 2026 seçkisinde restoranın sommelier'si Ersin Topkara Sommelier Ödülü'nü aldı; restoranın World's 50 Best 2025 listesinde 100. sırada yer aldığı da kaynaklarda geçiyor. Buna karşılık platform puanları bu seviyeye göre ölçülü: restaurantguru derlemesinde Google 4,3/5 (1.321 yorum), TripAdvisor 4,1/5 (496 yorum). Ekşi Sözlük'te okunan 20 entry'de tekrar eden üç eleştiri var: 'tadım menüsü aldığı yıldızı hak etmiyor', baharat ve tozlandırılmış garnitürlerin yemeğin önüne geçmesi ve porsiyon/malzeme cimriliği ('malzeme kalitesi aşırı düşük', 'mixed bag'). Karşı tarafta kuzu, karides ve tatlı tabağını çok öven, servis ve menü dengesini kusursuz bulan ayrıntılı yorumlar da var. Bu, 8,0-8,9 bandındaki 'güçlü ama tekrarlayan küçük şikâyetler var' tanımına uyuyor."
    },
    "neYenir": [
      {
        "yemek": "Kuzu",
        "kacKisiOnerdi": null,
        "not": "restaurantguru'nun derlediği öne çıkan yemekler listesinde 'lamb neck' olarak geçiyor; Ekşi Sözlük'te 7 Mart 2023 tarihli yorum 'kuzu muhteşemdi' diyor, aynı yazar menünün geri kalanını daha az beğeniyor."
      },
      {
        "yemek": "Ekşi Mayalı Ekmek ve Zeytinli Tereyağı",
        "kacKisiOnerdi": null,
        "not": "restaurantguru derlemesinde 'sourdough bread with olive and parsley-infused butter' diye öne çıkarılıyor; Ekşi Sözlük'te en eleştirel yorumlardan biri bile 'önden gelen tereyağ gayet güzeldi' diye yazıyor."
      },
      {
        "yemek": "Karides",
        "kacKisiOnerdi": null,
        "not": "restaurantguru derlemesinde 'red prawn' olarak listeleniyor; Ekşi Sözlük'te 7 Mart 2023 tarihli yorum 'güllü tatlı tabağı ve karides de çok çok iyiydi' diyor."
      },
      {
        "yemek": "Sinkonta (Balkabağı)",
        "kacKisiOnerdi": null,
        "not": "restaurantguru derlemesinde mekânın imza kalemlerinden biri olarak listeleniyor. Kaynaklar ayrışıyor: Ekşi Sözlük'te tadım menüsünü ayrıntılı anlatan bir yorum 'balkabağı sinkonta' için beğenisiz bir ifade kullanıyor."
      },
      {
        "yemek": "Kuzu Kulağı Sorbe",
        "kacKisiOnerdi": null,
        "not": "25 Ocak 2023 tarihli Ekşi Sözlük yorumunda menünün öne çıkan iki kaleminden biri olarak anılıyor ('kuzu kulağı sorbe ve ana yemekler güzeldi, ön plana çıkıyorlar')."
      }
    ],
    "ambiyans": {
      "puan": 8.5,
      "ozet": "Mekân, Karaköy'de tarihi Osmanlı Bankası binası olan SALT Galata'nın içinde; büyük pencereleri ve terasından tarihi yarımada görülüyor. restaurantguru'nun derlediği bir Google yorumu gün batımında Sultanahmet ve Ayasofya manzarasını 'güzel ve unutulmaz' diye anlatıyor; Ekşi Sözlük'te en sert eleştiriyi yazan kullanıcı bile 'ortamdaki fiziksel şartlar çok güzel' diyor. Restoranın NUDE Restaurant Design ödülü aldığı kendi sitesinde belirtiliyor. Puanı aşağı çeken iki somut şikâyet var: 6 Kasım 2022 tarihli yorumda 'korkunç derecede gürültü var, özellikle tüm masalar dolduğunda' deniyor; 30 Aralık 2023 tarihli yorumda bir tabak öncesinde masaya tablet ve kulaklık konup video izletilmesi gereksiz bulunuyor (kulaklığın şarjının bittiği de anlatılıyor).",
      "etiketler": [
        "tarihi-bina",
        "manzara",
        "teras",
        "gürültülü",
        "fine-dining"
      ],
      "dressCode": null,
      "uygun": [
        "çift",
        "iş yemeği"
      ]
    },
    "servis": {
      "puan": 7.8,
      "ozet": "Servis konusunda kaynaklar açıkça çelişiyor. Olumlu tarafta ayrıntılı bir Ekşi Sözlük yorumu servis ekibini 'son derece profesyonel ve belli ki iyi eğitimli' buluyor, masada sunulan ürün anlatım kartlarını başarılı sayıyor; restaurantguru'nun derlediği Google yorumlarında 'servis harikaydı' ifadesi geçiyor. Olumsuz tarafta somut ve tekrar eden örnekler var: 13 Kasım 2022'den sonraki bir yorumda girişteki karşılama tavrı ve garsonların 'aşırı fazla, samimi olmayan' hâli 'Mikla, Nicole ya da TURK'te karşılaşmadığım bir kasıntılık' diye anlatılıyor; 25 Ocak 2023 tarihli yorumda tabaklardan masaya yemek döküldüğü ve yanlış kokteyl getirildiği yazılıyor; 27 Ağustos 2024 tarihli yorumda tadım menüsündeyken ağız temizleme suyunun hesaba ayrıca yazılması 'ucuz bir hareket' olarak eleştiriliyor; restaurantguru'nun derlediği bir yorumda kredi kartından iki kez tahsilat yapıldığı bildiriliyor. Rezervasyonun kredi kartına ön provizyonla bağlanması da kimi misafirler için ek sürtünme yaratıyor.",
      "artilar": [
        "Profesyonel ve iyi eğitimli servis ekibi (Ekşi Sözlük'te ayrıntılı yorum)",
        "Masada sunulan ürün/yemek anlatım kartları (Ekşi Sözlük)",
        "2026 MICHELIN Guide Türkiye Sommelier Ödülü'nün restoranın sommelier'si Ersin Topkara'ya verilmesi"
      ],
      "eksiler": [
        "Karşılama ve garson tavrının mesafeli/'kasıntı' bulunması (Ekşi Sözlük)",
        "Tabak taşımada sakarlık ve yanlış kokteyl servisi (Ekşi Sözlük, Ocak 2023)",
        "Tadım menüsü içindeyken suyun hesaba ayrıca yazılması (Ekşi Sözlük, Ağustos 2024)",
        "Kredi kartından çift tahsilat bildirimi (restaurantguru'nun derlediği yorum)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-yildiz",
        "detay": "MICHELIN Guide Türkiye 2026 — 1 yıldız (korundu). 4 Aralık 2025'te açıklanan 2026 seçkisinde bir yıldızını koruyan İstanbul restoranları arasında; Anadolu Ajansı, Türkiye Today, yemek.com ve OGGUSTO'nun bağımsız 2026 liste derlemelerinin dördünde de aynı şekilde geçiyor. İki yıldız değil, Bib Gourmand değil. Aynı seçkide restoranın sommelier'si Ersin Topkara Sommelier Ödülü'nü aldı. Restoranın ayrıca Michelin Yeşil Yıldız'ı bulunuyor ve Türkiye'de Yeşil Yıldız alan ilk restoran olduğu birden fazla kaynakta yazıyor; Yeşil Yıldız 2026'da yeni verilenler arasında değil, önceki yıllardan devam ediyor. guide.michelin.com doğrudan okunamadı (bot koruması)."
      },
      {
        "tip": "gault-millau",
        "detay": "Gault & Millau Türkiye 2026 — 4 toque, 20 üzerinden 18 puan ('Prestijli Sofra'). Rehberin kendi 2026 ödül duyuru sayfasından doğrulandı; listede yalnızca TURK Fatih Tutak (18,5/20) daha yüksek puanlı. Not: bir üçüncü taraf sayfası Gault & Millau puanını 16/20 diye veriyor, bu büyük olasılıkla önceki bir baskıya ait; rehberin kendi 2026 sayfası esas alındı."
      }
    ],
    "rezervasyon": {
      "gerekiyor": true,
      "yontem": [
        "online",
        "telefon",
        "e-posta"
      ],
      "telefon": "+90 212 244 00 16",
      "link": "https://www.neolokal.com/#rezervasyon",
      "beklemeSuresi": "Restoran kendi Ön Bilgilendirme Formu'nda 'sınırlı sayıda masa ile hizmet vermekte olmamız' ve tadım menüsünün ön mutfak hazırlığı gerektirmesi nedeniyle rezervasyonu ön provizyona bağladığını yazıyor; rezervasyon saatine 30 dakika gecikme 'gelmeme' sayılıyor. Ekşi Sözlük'te 8 Ocak 2023 tarihli bir yorum 'rezervasyon yapmanın çok zor olduğu' bir mekân olduğunu, 25 Mart 2025 tarihli bir başka yorum genelde yoğun olduğunu belirtiyor. Somut bir bekleme süresi bulunamadı.",
      "kapora": {
        "var": true,
        "detay": "Restoranın kendi Mesafeli Satış Sözleşmesi ve Ön Bilgilendirme Formu'na göre online rezervasyonda kredi kartına, tarih/saat ve kişi sayısına göre belirlenen bir 'cayma bedeli' tutarında ön provizyon (bloke) konuyor; işlem Rezervem Teknoloji üzerinden yürütülüyor. Rezervasyona uygun şekilde gelinirse bloke kaldırılıyor. Gelinmemesi ya da 30 dakikadan fazla gecikilmesi hâlinde tutar tahsil ediliyor ve iade edilmiyor. Cayma hakkı standart rezervasyonlarda en az 48 saat, özel etkinlik ve 7+ kişilik rezervasyonlarda en az 72 saat öncesine kadar kullanılabiliyor. Tutarın kendisi rezervasyon ekranında belirtiliyor ve önceden sabit bir rakam olarak yayımlanmıyor."
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
      "diger": "Restoranın kendi Türkçe ve İngilizce siteleri, Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi, 22 Temmuz 2026 tarihli tadım menüsü PDF'i ve Rezervem rezervasyon sayfası; MICHELIN Guide Türkiye 2026 seçkisine dair Anadolu Ajansı, Türkiye Today, yemek.com ve OGGUSTO derlemeleri; Gault & Millau Türkiye 2026 ödül sayfası; Ekşi Sözlük 'neolokal' başlığı; restaurantguru derlemesi ve Foodle kaydı da değerlendirmeye dahil edildi."
    },
    "fotolar": [
      {
        "dosya": "fotolar/neolokal-1.jpg",
        "alt": "Pişirme kâğıdı üzerine dizilmiş taze ıspanak yaprakları",
        "kaynak": "https://www.neolokal.com/wp-content/uploads/2023/01/11.01.2023_Neolokal-22820-copy.jpg",
        "kredi": "Neolokal"
      }
    ],
    "sonGuncelleme": "2026-08-08"
  },
  {
    "id": "yeni-lokanta",
    "isim": "Yeni Lokanta",
    "ulke": "Türkiye",
    "sehir": "İstanbul",
    "semt": "Beyoğlu",
    "mutfak": [
      "Modern Türk",
      "Anadolu",
      "Akdeniz"
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
      "not": "Aralık doğrudan restoranın kendi sitesinde yayımlanan menü PDF'lerinden alındı (Ağustos 2026'da indirildi): dokuz kalemlik tadım menüsü kişi başı 6.500 ₺, yedi kalemlik tadım menüsü kişi başı 5.350 ₺; her ikisi de tüm masa tarafından sipariş edilmek zorunda. Şarap eşleşmesi dokuz kalemlik menüde beş kadeh için +3.750 ₺, yedi kalemlik menüde dört kadeh için +3.150 ₺. À la carte yenirse kalemler daha düşük: başlangıçlar 740-880 ₺ (elma-sultani bezelye salatası 740 ₺, köfte tartar 880 ₺, asma karides 860 ₺), ana yemekler 1.950-2.300 ₺ (isotlu dana kaburga 2.150 ₺, kuzu 2.150 ₺, dana uykuluk 1.950 ₺, deniz levreği 2.300 ₺), tatlılar 780 ₺, ev yapımı dondurma 240 ₺, kokteyller 930 ₺. Yani bir başlangıç + bir ana yemekle bile kişi başı 2.690 ₺'yi geçiyor. Sitenin kendisi 'menü kalemleri ve fiyatlar değişebilir' notunu düşüyor. Sahibinin belirlediği eşiklere göre (ucuz: 750 ₺ altı; orta: 750-2.500 ₺; pahalı: 2.500 ₺ üstü) hem tadım menüsü hem tipik à la carte harcaması 'pahalı' segmentine düşüyor. Ekşi Sözlük'te fiyatların 'sundukları hizmet ve klasmanındaki rakipleriyle kıyaslandığında normal' bulunduğu (2017) ve 'sundukları deneyim için bir tık fazla' bulunduğu (2022) iki ayrı yorum var."
    },
    "yemek": {
      "puan": 9.0,
      "ozet": "Bu dört restoran içinde yorum örüntüsü en tutarlı olan yer. restaurantguru'nun derlediği tabloda Google 4,8/5 (2.597 yorum) — okunan tüm kaynaklar içindeki en yüksek Google puanı — TripAdvisor 4,4/5 (593 yorum), Zomato 4,6/5. MICHELIN Guide Türkiye seçkisinde yer alıyor ve müfettiş notu şefin yaklaşımının Türk lezzetlerine 'daha taze ve hafif bir nitelik' kattığını söylüyor. Ekşi Sözlük'te 2013'ten bugüne okunan 26 entry'de olumsuz bir lezzet yorumu yok denecek kadar az; mantı, ekşi mayalı ekmek + isli tereyağı ve humus on yıldan uzun süredir aynı biçimde övülüyor. Tek yapıcı eleştiri tadım menüsünün ağırlığına dair: bir yazar menünün 'tıka basa' doyurduğunu, kapanıştaki katmerin gereksiz ağır kaldığını yazıyor. Vedat Milor'un Gurman Atlas kaydı mutfağı 'dürüst bir çaba' diye niteleyip şef Civan Er'in mutfakta olmasını olumlu buluyor, ama malzeme kalitesini sınırlayıcı bir unsur olarak işaret ediyor: 'premium kuzu ya da balık bile bazen lezzetsiz gelebiliyor'. Neredeyse hiç olumsuz yorum bulunmadığı için 9,0-10 bandının alt ucuna konuldu. Not: şefin Londra'daki şubesine ait yorumlar (Beak Street) kapsam dışı bırakıldı."
    },
    "neYenir": [
      {
        "yemek": "Yeni Lokanta Mantısı",
        "kacKisiOnerdi": 7,
        "not": "Okunan 26 Ekşi Sözlük entry'si içinde yedi farklı kullanıcı mantıyı adıyla öneriyor; kuru patlıcanlı, etli, tahinli ve zencefilli versiyonlar ayrı ayrı anılıyor. Restoranın Ağustos 2026'da yayımlanan tadım menüsünde 'yeni lokanta mantısı (dana)' açılış kalemi olarak yer alıyor. 50 Best Discovery kaydı da şefin mantıdaki kuzuyu kuru patlıcanla değiştirmesini imza hamlesi sayıyor."
      },
      {
        "yemek": "Ekşi Mayalı Ekmek ve İsli Tereyağı",
        "kacKisiOnerdi": 4,
        "not": "Okunan 26 Ekşi Sözlük entry'si içinde dört farklı kullanıcı özellikle isli tereyağını anıyor; biri 'o isli tereyağı için bir apartmanın ikinci katından atlayabilirim' diyor, bir diğeri 'mantı ve isli tereyağı artık klasik oldu' yazıyor."
      },
      {
        "yemek": "Humus",
        "kacKisiOnerdi": 4,
        "not": "Okunan 26 Ekşi Sözlük entry'si içinde dört farklı kullanıcı humusu öneriyor; biri vişneli humus versiyonunu ayrıca anıyor. 2013'teki ilk yorumdan 2017'ye kadar aralıklarla tekrar ediyor."
      },
      {
        "yemek": "İsotlu Dana Kaburga",
        "kacKisiOnerdi": null,
        "not": "Restoranın kendi à la carte menüsünde 2.150 ₺ ve dokuz kalemlik tadım menüsünün ana yemeği (Ağustos 2026). Ekşi Sözlük'te 7 Kasım 2022 tarihli yorum 'ıslama dana kaburgasını bayıla bayıla yedik' diyor, 11 Haziran 2016 tarihli yorum kış menüsündeki 'isli kaburgalar'ı öne çıkarıyor."
      },
      {
        "yemek": "Muhallebili Kadayıf Kızartması",
        "kacKisiOnerdi": null,
        "not": "Ekşi Sözlük'te 'kesinlikle orgazmik bir tatlı' diye anlatılıyor; 50 Best Discovery kaydı da şefin kadayıfa sarılıp kızartılan, manda sütlü dondurma, Antep fıstığı ve portakal şekerlemesiyle servis edilen muhallebisini 'tek başına gitmeye değer' sayıyor. Restoranın Ağustos 2026'da yayımlanan tadım menüsündeki tatlı 'baklava rulo, Boz Antep fıstığı, portakal, hindistan cevizli dondurma' olarak yazılmış, yani tatlının bugünkü hâli değişmiş olabilir."
      }
    ],
    "ambiyans": {
      "puan": 8.7,
      "ozet": "Ekşi Sözlük'te on iki yıla yayılan yorumlar mekânı tutarlı biçimde 'sıcak, samimi ve sade' diye anlatıyor: Kumbaracı Yokuşu'nda, loş, masalarda yeşil lambalar, kapasitesi 50 kişiyi geçmeyen bir salon; ayrıntılı bir yorum mekânın camla ayrılmış ön bölüm, ana salon ve arka bölüm olmak üzere üç kısımdan oluştuğunu ve rezervasyonda ön bölümün tercih edilmesi gerektiğini anlatıyor. 50 Best Discovery ve yemek yazıları odun fırınını ve rustik dekoru öne çıkarıyor. Bir yorum mekânın öğlen esnaf lokantası gibi tencere yemeği çıkardığını, akşam ise tadım menüleriyle başka bir kimliğe büründüğünü yazıyor. Puanı 9'un altında tutan tek tekrar eden nokta mekânın küçüklüğü ve akşamları rezervasyonsuz yer bulunamaması.",
      "etiketler": [
        "samimi",
        "loş",
        "küçük",
        "sade",
        "odun-fırını"
      ],
      "dressCode": null,
      "uygun": [
        "çift",
        "iş yemeği",
        "grup"
      ]
    },
    "servis": {
      "puan": 8.8,
      "ozet": "Servis, yorumlarda ayrıca ve özellikle övülen bir başlık. 2021-2022'de üç kez giden ayrıntılı bir Ekşi Sözlük yorumu servisi 'İstanbul ortalamasının çok çok üzerinde' bulup nedenini de yazıyor: menüye tam hâkim garsonlar, masada gereğinden bir saniye fazla kalmama, sohbeti bölmeme. Başka yorumlar da 'servis elemanları harika' diyor; restaurantguru'nun derlediği bir Google yorumu 'inanılmaz ilgi' ve menü dışı ikramlardan söz ediyor. Puanı 9'un altında tutan iki nokta: hesaba eklenen %10 servis bedelinin iki ayrı yorumda sert biçimde eleştirilmesi (biri bu yüzden bir daha gitmeyeceğini yazıyor) ve akşam saatlerinde rezervasyonsuz gidilmemesi gerektiğinin tekrarlanması. Not: Londra şubesinde yaşanan adisyon hatası ve servis eleştirisi, şube ayrımı gereği bu değerlendirmeye katılmadı.",
      "artilar": [
        "Menüye tam hâkim, ölçülü ve müdahaleci olmayan servis (Ekşi Sözlük'te ayrıntılı yorum, 2021-2022)",
        "Kokteyl programının ayrıca övülmesi (birden fazla Ekşi Sözlük yorumu)",
        "Menü dışı ikramlar ve sıcak karşılama (restaurantguru'nun derlediği Google yorumu)"
      ],
      "eksiler": [
        "Hesaba eklenen %10 servis bedelinin iki ayrı yorumda sert biçimde eleştirilmesi (Ekşi Sözlük, 2021)",
        "Akşam saatlerinde rezervasyonsuz yer bulunamaması (Ekşi Sözlük)",
        "Beş kişi ve üzeri gruplarda tadım menüsünün zorunlu olması (restoranın kendi sitesi)"
      ]
    },
    "oduller": [
      {
        "tip": "michelin-secilmis",
        "detay": "MICHELIN Guide Türkiye — rehberde seçilmiş restoran. Yıldız değil, Bib Gourmand değil: 4 Aralık 2025'te açıklanan 2026 seçkisinin yıldız listelerinde (Anadolu Ajansı, Türkiye Today, yemek.com, OGGUSTO derlemeleri) adı geçmiyor ve İstanbul Bib Gourmand derlemelerinde de yer almıyor; buna karşılık guide.michelin.com'da restoranın kendi kaydı bulunuyor ve müfettiş açıklaması yayımlanmış durumda. OGGUSTO'nun derlemesi restoranın rehbere ilk kez 2023 seçkisinde 'önerilen restoran' olarak girdiğini yazıyor. Ekşi Sözlük'te 12 Kasım 2023 tarihli bir yorum da yıldız alamamasını açıkça sorguluyor. guide.michelin.com doğrudan okunamadı (bot koruması), bu yüzden yıldızsız oluş dört bağımsız liste derlemesinden çapraz doğrulandı. Not: Gault & Millau Türkiye 2026 ödül listesinde restoranın adı bulunamadı."
      }
    ],
    "rezervasyon": {
      "gerekiyor": null,
      "yontem": [
        "online",
        "telefon",
        "e-posta"
      ],
      "telefon": "+90 212 292 25 50",
      "link": "https://guest.rezervem.com.tr/Yeni-Lokanta",
      "beklemeSuresi": "Restoran pazartesi-cumartesi 12:00-16:00 ve 17:00-00:30, pazar 13:00-22:00 açık (kendi sitesi). Site rezervasyon sayfasındaki işlemlerin 'talep' olduğunu, onaylanmış rezervasyon anlamına gelmediğini açıkça yazıyor; beş kişi ve üzeri gruplarda tadım menüsü zorunlu, özel oda talepleri e-posta ile alınıyor. Ekşi Sözlük'te 'akşam saatlerinde kesinlikle rezervasyonsuz gidilmemesi gereken mekân' diyen bir yorum var ama öğle servisi için böyle bir uyarı yok; koşullu olduğu için 'gerekiyor' alanı boş bırakıldı. Somut bekleme süresi bulunamadı.",
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
      "diger": "Restoranın kendi sitesi ve oradan indirilen beş menü PDF'i (tadım, à la carte, tatlı, kokteyl), MICHELIN Guide Türkiye 2026 seçkisine dair Anadolu Ajansı, Türkiye Today, yemek.com ve OGGUSTO derlemeleri, Vedat Milor'un Gurman Atlas kaydı, 50 Best Discovery sayfası, Ekşi Sözlük 'yeni lokanta' başlığı, restaurantguru derlemesi, Gault & Millau Türkiye 2026 ödül listesi (yokluğun doğrulanması için) ve OpenStreetMap POI kaydı da değerlendirmeye dahil edildi."
    },
    "fotolar": [],
    "sonGuncelleme": "2026-08-08"
  }
];
