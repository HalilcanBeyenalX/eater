// EATER — hesap ve Supabase erişim katmanı. Tüm oturum işleri buradan geçer.

const eaterHesap = (() => {
  const kuruldu = typeof SUPABASE_URL === 'string' && SUPABASE_URL !== '' &&
    typeof supabase !== 'undefined';
  const istemci = kuruldu
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

  async function oturum() {
    if (!istemci) return null;
    const { data } = await istemci.auth.getSession();
    return data.session ?? null;
  }

  async function kayitOl(eposta, sifre, kullaniciAdi) {
    // Kullanıcı adı benzersiz olmalı (veritabanında unique kısıt var; burada
    // önden kontrol edip anlaşılır bir mesaj veriyoruz — büyük/küçük harf dahil).
    const { data: ayni } = await istemci.from('profiller')
      .select('id').ilike('kullanici_adi', kullaniciAdi).limit(1);
    if (ayni && ayni.length > 0) {
      return { hata: 'This username is already taken — try another one.' };
    }
    const { data, error } = await istemci.auth.signUp({ email: eposta, password: sifre });
    if (error) return { hata: error.message };
    const { error: pHata } = await istemci.from('profiller')
      .insert({ id: data.user.id, kullanici_adi: kullaniciAdi });
    if (pHata) {
      return { hata: pHata.code === '23505'
        ? 'This username is already taken — try another one.'
        : pHata.message };
    }
    return { hata: null };
  }

  async function girisYap(eposta, sifre) {
    const { error } = await istemci.auth.signInWithPassword({ email: eposta, password: sifre });
    return { hata: error ? error.message : null };
  }

  async function cikisYap() {
    await istemci.auth.signOut();
    window.location.reload();
  }

  async function hesapKutusunuCiz() {
    const kutu = document.getElementById('hesapKutusu');
    if (!kutu) return;
    if (!istemci) { kutu.innerHTML = ''; return; }
    const o = await oturum();
    kutu.innerHTML = o
      ? `<a href="kisi.html?id=${encodeURIComponent(o.user.id)}">My profile</a>
         <button type="button" id="btnCikis">Log out</button>`
      : '<a href="gunluk.html">Log in</a>';
    document.getElementById('btnCikis')?.addEventListener('click', cikisYap);
  }

  // --- Yemek fotoğrafları (Storage) ---

  // Yol: {kullanici_id}/{uuid}-{sira}.jpg — rastgele ad, ziyaret kaydından önce
  // yüklemeye izin verir; RLS ilk klasör adını auth.uid() ile karşılaştırır.
  async function fotoYukle(kullaniciId, dosyaBlob, sira) {
    const yol = `${kullaniciId}/${crypto.randomUUID()}-${sira}.jpg`;
    const { error } = await istemci.storage.from('yemek-fotolari')
      .upload(yol, dosyaBlob, { contentType: 'image/jpeg' });
    return error ? { hata: error.message } : { yol };
  }

  function fotoUrl(yol) {
    return istemci.storage.from('yemek-fotolari').getPublicUrl(yol).data.publicUrl;
  }

  // --- Profil fotoğrafı ---

  // Avatar her seferinde yeni adla yüklenir (önbellek eskimesin), eski dosya
  // silinir, profiller.avatar yeni yolu gösterir. Ek 4 gerektirir.
  async function avatarKaydet(dosyaBlob, eskiYol) {
    const o = await oturum();
    if (!o) return { hata: 'not signed in' };
    const yol = `${o.user.id}/avatar-${crypto.randomUUID()}.jpg`;
    const { error } = await istemci.storage.from('yemek-fotolari')
      .upload(yol, dosyaBlob, { contentType: 'image/jpeg' });
    if (error) return { hata: error.message };
    const { error: pHata } = await istemci.from('profiller')
      .update({ avatar: yol }).eq('id', o.user.id);
    if (pHata) return { hata: pHata.message };
    if (eskiYol) await istemci.storage.from('yemek-fotolari').remove([eskiYol]);
    return { yol };
  }

  // --- Want to go / kalp listesi (Ek 5: favoriler) ---

  async function favorilerim(kullaniciId) {
    const { data } = await istemci.from('favoriler').select('restoran_id')
      .eq('kullanici', kullaniciId).order('created_at', { ascending: false });
    return (data || []).map(f => f.restoran_id);
  }

  // Girişli kullanıcı bu restoranı kalplemiş mi; girişsizse null.
  async function favoriMi(restoranId) {
    const o = await oturum();
    if (!o) return null;
    const { data } = await istemci.from('favoriler').select('restoran_id')
      .eq('kullanici', o.user.id).eq('restoran_id', restoranId).limit(1);
    return { favori: !!(data && data.length) };
  }

  async function favoriDegistir(restoranId, suAnFavori) {
    const o = await oturum();
    if (!o) { window.location.href = 'gunluk.html'; return false; }
    const { error } = suAnFavori
      ? await istemci.from('favoriler').delete()
          .eq('kullanici', o.user.id).eq('restoran_id', restoranId)
      : await istemci.from('favoriler').insert(
          { kullanici: o.user.id, restoran_id: restoranId });
    return !error;
  }

  // --- Best Eats (Ek 6: en_iyi_yemekler) ---

  // null dönerse tablo yok demektir (Ek 6 SQL'i henüz çalıştırılmamış).
  async function bestEatsListesi(kullaniciId) {
    const { data, error } = await istemci.from('en_iyi_yemekler').select('*')
      .eq('kullanici', kullaniciId).order('created_at', { ascending: true });
    return error ? null : (data || []);
  }

  // kayit: { restoran_id } veya { mekan_id } + yemek. Hata mesajı ya da null döner.
  async function bestEatsEkle(kayit) {
    const o = await oturum();
    if (!o) return 'Not signed in.';
    const { error } = await istemci.from('en_iyi_yemekler')
      .insert({ ...kayit, kullanici: o.user.id });
    return error ? error.message : null;
  }

  async function bestEatsSil(id) {
    const { error } = await istemci.from('en_iyi_yemekler').delete().eq('id', id);
    return !error;
  }

  // --- Takip / arkadaşlık istekleri (Ek 4: takipler.durum) ---

  // Girişli kullanıcının ilişki kümeleri: kume = kabul edilmiş takipler,
  // bekleyen = gönderilmiş ama henüz yanıtlanmamış istekler. Girişsizse null.
  async function takipEttiklerim() {
    const o = await oturum();
    if (!o) return null;
    const { data } = await istemci.from('takipler')
      .select('takip_edilen, durum').eq('takip_eden', o.user.id);
    const kume = new Set(), bekleyen = new Set();
    (data || []).forEach(t =>
      (t.durum === 'kabul' ? kume : bekleyen).add(t.takip_edilen));
    return { benimId: o.user.id, kume, bekleyen };
  }

  // İstek gönder / geri çek / arkadaşlıktan çık. Girişsizse giriş sayfasına yollar.
  async function takipDegistir(hedefId, suAnIliskili) {
    const o = await oturum();
    if (!o) { window.location.href = 'gunluk.html'; return false; }
    if (suAnIliskili) {
      await istemci.from('takipler').delete()
        .eq('takip_eden', o.user.id).eq('takip_edilen', hedefId);
    } else {
      await istemci.from('takipler').insert(
        { takip_eden: o.user.id, takip_edilen: hedefId, durum: 'bekliyor' });
    }
    return true;
  }

  // Bana gelen bekleyen istekler (gönderenlerin profilleriyle).
  async function gelenIstekler() {
    const o = await oturum();
    if (!o) return [];
    const { data: istekler } = await istemci.from('takipler')
      .select('takip_eden').eq('takip_edilen', o.user.id).eq('durum', 'bekliyor');
    const idler = (istekler || []).map(i => i.takip_eden);
    if (idler.length === 0) return [];
    const { data: profiller } = await istemci.from('profiller')
      .select('id, kullanici_adi, avatar').in('id', idler);
    return profiller || [];
  }

  // Gelen isteği yanıtla: kabul → durum 'kabul'; ret → satır silinir.
  async function istekYanitla(gonderenId, kabulMu) {
    const o = await oturum();
    if (!o) return false;
    if (kabulMu) {
      const { error } = await istemci.from('takipler')
        .update({ durum: 'kabul' })
        .eq('takip_eden', gonderenId).eq('takip_edilen', o.user.id);
      return !error;
    }
    const { error } = await istemci.from('takipler').delete()
      .eq('takip_eden', gonderenId).eq('takip_edilen', o.user.id);
    return !error;
  }

  async function takipciSayisi(hedefId) {
    const { count } = await istemci.from('takipler')
      .select('*', { count: 'exact', head: true })
      .eq('takip_edilen', hedefId).eq('durum', 'kabul');
    return count ?? 0;
  }

  return { hazir: () => kuruldu, istemci, oturum, kayitOl, girisYap, cikisYap,
    hesapKutusunuCiz, takipEttiklerim, takipDegistir, takipciSayisi,
    gelenIstekler, istekYanitla, avatarKaydet, fotoYukle, fotoUrl,
    favorilerim, favoriMi, favoriDegistir,
    bestEatsListesi, bestEatsEkle, bestEatsSil };
})();
