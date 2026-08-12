# Kart illüstrasyonları — üretim notu

Durum (11 Ağustos 2026): 17 mutfak kategorisinden 6'sı üretildi (bu klasör).
Kalanlar HF ücretsiz kredisi yenilenince (ay başı) üretilecek; site şimdilik
`mutfak-gorselleri.js` içindeki SVG çizgi ikonları kullanıyor — bu klasör YAYINDA DEĞİL.

Model: black-forest-labs/FLUX.1-schnell (huggingface_hub, provider="auto";
jeton: ~/.config/eater/hf-token). 1024x1024 PNG.

Stil istemi (her görselin başına):
"elegant flat illustration, warm gold and cream tones on a deep crimson red background,
minimalist restaurant menu art style, matte texture, no text, centered composition"

Eksik anahtarlar ve konu istemleri:
- gyoza: three pan-fried gyoza dumplings with golden crispy bottoms on a small plate
- cocktail: a coupe cocktail glass with a cherry garnish
- coffee: a coffee cup on a saucer with rising steam
- skewer: two yakitori chicken skewers
- steak: a grilled steak with dark grill marks on a plate
- tea: a Turkish tulip-shaped tea glass with steam on a small saucer
- fish: an elegant whole fish on a serving plate with a lemon slice
- pasta: a fork twirling golden spaghetti above a plate
- wine: a wine bottle beside a glass of red wine
- cloche: a silver restaurant cloche dome on a plate with wisps of steam
- plate: an elegant empty dinner plate with a fork and knife on the sides

Set tamamlanınca: 640px'e küçült, `gorseller/` klasörüne JPG olarak koy,
`mutfak-gorselleri.js`'i SVG yerine <img> dönecek şekilde güncelle (eşleme sırası aynı).
Not: Pollinations.ai denendi; stil eşleşmedi (yumuşak/bulanık) — kullanma.
