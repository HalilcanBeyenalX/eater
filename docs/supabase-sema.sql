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
