-- EATER şeması. Supabase Dashboard → SQL Editor'a yapıştırıp Run deyin.
create table profiller (
  id uuid primary key references auth.users(id) on delete cascade,
  kullanici_adi text unique not null check (char_length(kullanici_adi) between 2 and 30),
  ad text,
  tanitim text,
  created_at timestamptz not null default now()
);
create table mekanlar (
  id uuid primary key default gen_random_uuid(),
  isim text not null,
  ulke text not null,
  sehir text not null,
  ekleyen uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
create table ziyaretler (
  id uuid primary key default gen_random_uuid(),
  kullanici uuid not null references auth.users(id) on delete cascade,
  restoran_id text,
  mekan_id uuid references mekanlar(id) on delete cascade,
  tarih date not null,
  yemek_puan numeric check (yemek_puan is null or (yemek_puan between 0 and 10)),
  ambiyans_puan numeric check (ambiyans_puan is null or (ambiyans_puan between 0 and 10)),
  servis_puan numeric check (servis_puan is null or (servis_puan between 0 and 10)),
  yorum text,
  created_at timestamptz not null default now(),
  check (restoran_id is not null or mekan_id is not null)
);

alter table profiller enable row level security;
alter table mekanlar enable row level security;
alter table ziyaretler enable row level security;

-- Profiller herkese açık; herkes yalnız kendi satırını yazar/günceller.
create policy "profil okuma" on profiller for select using (true);
create policy "profil ekleme" on profiller for insert with check (auth.uid() = id);
create policy "profil güncelleme" on profiller for update using (auth.uid() = id);

-- Mekânlar herkese açık okunur; girişli herkes ekleyebilir.
create policy "mekan okuma" on mekanlar for select using (true);
create policy "mekan ekleme" on mekanlar for insert with check (auth.uid() is not null);

-- Ziyaretler herkese açık okunur (profiller açık); yazma yalnız sahibine.
create policy "ziyaret okuma" on ziyaretler for select using (true);
create policy "ziyaret ekleme" on ziyaretler for insert with check (auth.uid() = kullanici);
create policy "ziyaret güncelleme" on ziyaretler for update using (auth.uid() = kullanici);
create policy "ziyaret silme" on ziyaretler for delete using (auth.uid() = kullanici);

-- Ek 1 (10 Ağustos 2026): ziyaret başına en fazla iki favori yemek.
alter table ziyaretler add column if not exists sevilen_yemek1 text;
alter table ziyaretler add column if not exists sevilen_yemek2 text;

-- Ek 2 (10 Ağustos 2026): takip ("Eater ekle").
create table takipler (
  takip_eden uuid not null references auth.users(id) on delete cascade,
  takip_edilen uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (takip_eden, takip_edilen),
  check (takip_eden <> takip_edilen)
);
alter table takipler enable row level security;
create policy "takip okuma" on takipler for select using (true);
create policy "takip ekleme" on takipler for insert with check (auth.uid() = takip_eden);
create policy "takip silme" on takipler for delete using (auth.uid() = takip_eden);

-- Ek 3 (10 Ağustos 2026): favori yemek fotoğrafları.
-- Sütunlar Storage'daki dosya yolunu tutar (yemek-fotolari/{kullanici_id}/{uuid}-N.jpg).
alter table ziyaretler add column if not exists sevilen_yemek1_foto text;
alter table ziyaretler add column if not exists sevilen_yemek2_foto text;

-- Herkese açık okunur bucket; yalnız JPEG, en çok 5 MB — istemciyi atlayan doğrudan yüklemeler de bu sınırlara takılır.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  values ('yemek-fotolari', 'yemek-fotolari', true, 5242880, array['image/jpeg'])
  on conflict (id) do update set public = true,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

-- Postgres'te "create policy if not exists" yok — idempotentlik için drop+create.
drop policy if exists "yemek foto okuma" on storage.objects;
create policy "yemek foto okuma" on storage.objects
  for select using (bucket_id = 'yemek-fotolari');

-- Girişli kullanıcı yalnız kendi klasörüne ({kullanici_id}/...) yazar/siler.
drop policy if exists "yemek foto yukleme" on storage.objects;
create policy "yemek foto yukleme" on storage.objects
  for insert with check (
    bucket_id = 'yemek-fotolari'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "yemek foto silme" on storage.objects;
create policy "yemek foto silme" on storage.objects
  for delete using (
    bucket_id = 'yemek-fotolari'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

-- Ek 4 (11 Ağustos 2026): profil fotoğrafı + arkadaşlık istekleri.
-- avatar: yemek-fotolari bucket'ındaki dosya yolu ({kullanici_id}/avatar-*.jpg).
alter table profiller add column if not exists avatar text;

-- Takip artık istek/kabul akışı: yeni satır 'bekliyor' başlar, hedef kabul edince 'kabul'.
-- (Önce 'kabul' varsayılanıyla eklenir ki mevcut takipler arkadaş olarak kalsın.)
alter table takipler add column if not exists durum text not null default 'kabul'
  check (durum in ('bekliyor', 'kabul'));
alter table takipler alter column durum set default 'bekliyor';

-- İsteği yalnız hedef kişi yanıtlar; silmeyi (ret / geri çekme / çıkarma) iki taraf da yapabilir.
drop policy if exists "takip guncelleme" on takipler;
create policy "takip guncelleme" on takipler
  for update using (auth.uid() = takip_edilen);

drop policy if exists "takip silme" on takipler;
create policy "takip silme" on takipler
  for delete using (auth.uid() = takip_eden or auth.uid() = takip_edilen);

-- Ek 5 (12 Ağustos 2026): "Want to go" — gitmek istenen restoranlar (kalp).
create table if not exists favoriler (
  kullanici uuid not null references auth.users(id) on delete cascade,
  restoran_id text not null,
  created_at timestamptz not null default now(),
  primary key (kullanici, restoran_id)
);
alter table favoriler enable row level security;
drop policy if exists "favori okuma" on favoriler;
create policy "favori okuma" on favoriler for select using (true);
drop policy if exists "favori ekleme" on favoriler;
create policy "favori ekleme" on favoriler for insert with check (auth.uid() = kullanici);
drop policy if exists "favori silme" on favoriler;
create policy "favori silme" on favoriler for delete using (auth.uid() = kullanici);

-- Ek 6 (14 Ağustos 2026): "Best Eats" — profilde en çok önerilen yemekler.
-- Kişi yalnız GİTTİĞİ yerlerden seçer (arayüz kısıtlar); her satır bir
-- mekân + elle yazılmış yemek adıdır. Katalog restoranı restoran_id ile,
-- kullanıcının kendi eklediği mekân mekan_id ile bağlanır (ikisinden tam biri dolu).
create table if not exists en_iyi_yemekler (
  id uuid primary key default gen_random_uuid(),
  kullanici uuid not null references auth.users(id) on delete cascade,
  restoran_id text,
  mekan_id uuid references mekanlar(id) on delete cascade,
  yemek text not null check (char_length(yemek) between 1 and 80),
  created_at timestamptz not null default now(),
  check ((restoran_id is null) <> (mekan_id is null))
);
alter table en_iyi_yemekler enable row level security;
drop policy if exists "besteats okuma" on en_iyi_yemekler;
create policy "besteats okuma" on en_iyi_yemekler for select using (true);
drop policy if exists "besteats ekleme" on en_iyi_yemekler;
create policy "besteats ekleme" on en_iyi_yemekler for insert with check (auth.uid() = kullanici);
drop policy if exists "besteats silme" on en_iyi_yemekler;
create policy "besteats silme" on en_iyi_yemekler for delete using (auth.uid() = kullanici);

-- Ek 7 (14 Ağustos 2026): EATGRAM beğeni + yorum.
-- Beğeni: kişi başına ziyaret başına bir satır (tekrar tıklayınca silinir).
-- Yorum: kısa metin (300 karakter); herkes okur, yalnız sahibi ekler/siler.
create table if not exists akis_begeniler (
  ziyaret uuid not null references ziyaretler(id) on delete cascade,
  kullanici uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (ziyaret, kullanici)
);
alter table akis_begeniler enable row level security;
drop policy if exists "begeni okuma" on akis_begeniler;
create policy "begeni okuma" on akis_begeniler for select using (true);
drop policy if exists "begeni ekleme" on akis_begeniler;
create policy "begeni ekleme" on akis_begeniler for insert with check (auth.uid() = kullanici);
drop policy if exists "begeni silme" on akis_begeniler;
create policy "begeni silme" on akis_begeniler for delete using (auth.uid() = kullanici);

create table if not exists akis_yorumlar (
  id uuid primary key default gen_random_uuid(),
  ziyaret uuid not null references ziyaretler(id) on delete cascade,
  kullanici uuid not null references auth.users(id) on delete cascade,
  metin text not null check (char_length(metin) between 1 and 300),
  created_at timestamptz not null default now()
);
alter table akis_yorumlar enable row level security;
drop policy if exists "akisyorum okuma" on akis_yorumlar;
create policy "akisyorum okuma" on akis_yorumlar for select using (true);
drop policy if exists "akisyorum ekleme" on akis_yorumlar;
create policy "akisyorum ekleme" on akis_yorumlar for insert with check (auth.uid() = kullanici);
drop policy if exists "akisyorum silme" on akis_yorumlar;
create policy "akisyorum silme" on akis_yorumlar for delete using (auth.uid() = kullanici);

-- Ek 8 (14 Ağustos 2026): EATER Point — ziyaret başına 10 üzerinden genel puan.
-- Food/Ambiance/Service'in yanında kişinin mekâna verdiği tek genel not;
-- restoran sayfasında topluluk ortalaması olarak da gösterilir.
alter table ziyaretler add column if not exists genel_puan numeric
  check (genel_puan is null or (genel_puan between 0 and 10));
notify pgrst, 'reload schema';
