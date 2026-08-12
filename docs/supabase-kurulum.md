# Supabase Kurulumu (5 dakika)

1. https://supabase.com → ücretsiz hesap → "New project" (ad: eater, bölge: Frankfurt).
2. Sol menü → SQL Editor → New query → `docs/supabase-sema.sql` içeriğini yapıştır → Run.
3. Project Settings → API → "Project URL" ve "anon public" anahtarını kopyala.
4. `ayarlar.js` içindeki `SUPABASE_URL` ve `SUPABASE_ANON_KEY` değerlerine yapıştır.
5. Authentication → Providers → Email: "Confirm email" seçeneğini kapat
   (aksi hâlde kayıt sonrası e-posta onayı gerekir).
6. Siteyi yenile — gezinmede "Giriş" görünür; kayıt olup ilk ziyaretini ekle.

Not: "anon public" anahtarı tarayıcıya gömülmek üzere tasarlanmıştır, gizli
değildir; asıl koruma veritabanındaki satır seviyesi güvenlik (RLS) kurallarıdır.
`service_role` anahtarını hiçbir zaman siteye koymayın.

## Ek 3 — Yemek fotoğrafları (10 Ağustos 2026)

`docs/supabase-sema.sql` dosyasındaki "Ek 3" bloğunu SQL Editor'a yapıştırıp Run deyin.
Blok idempotenttir; yanlışlıkla iki kez çalıştırmak hata vermez. Bu blok `yemek-fotolari`
adında herkese açık bir Storage bucket'ı oluşturur — Dashboard → Storage altında görünür.

## Ek 4 — Profil fotoğrafı ve arkadaşlık istekleri (11 Ağustos 2026)

`docs/supabase-sema.sql` dosyasındaki "Ek 4" bloğunu SQL Editor'a yapıştırıp Run deyin.
İdempotenttir. Bu ek çalıştırılmadan profil/Eaters sayfalarındaki istek akışı ve
avatar yükleme hata verir (durum ve avatar sütunları eksik kalır).

## Ek 5 — Want to go / kalp listesi (12 Ağustos 2026)

`docs/supabase-sema.sql` dosyasındaki "Ek 5" bloğunu SQL Editor'a yapıştırıp Run deyin.
İdempotenttir. Çalıştırılmadan detay sayfasındaki kalp kaydetmez.
