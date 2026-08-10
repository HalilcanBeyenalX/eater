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
