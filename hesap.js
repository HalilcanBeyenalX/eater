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
    const { data, error } = await istemci.auth.signUp({ email: eposta, password: sifre });
    if (error) return { hata: error.message };
    const { error: pHata } = await istemci.from('profiller')
      .insert({ id: data.user.id, kullanici_adi: kullaniciAdi });
    return { hata: pHata ? pHata.message : null };
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
      ? `<a href="kisi.html?id=${encodeURIComponent(o.user.id)}">Profilim</a>
         <button type="button" id="btnCikis">Çıkış</button>`
      : '<a href="gunluk.html">Giriş</a>';
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

  // --- Takip (Eater ekle) ---

  // Girişli kullanıcının takip ettiği kişilerin id kümesi; girişsizse null.
  async function takipEttiklerim() {
    const o = await oturum();
    if (!o) return null;
    const { data } = await istemci.from('takipler')
      .select('takip_edilen').eq('takip_eden', o.user.id);
    return { benimId: o.user.id, kume: new Set((data || []).map(t => t.takip_edilen)) };
  }

  // Takibi aç/kapat. Girişsizse giriş sayfasına yollar, false döner.
  async function takipDegistir(hedefId, suAnTakipte) {
    const o = await oturum();
    if (!o) { window.location.href = 'gunluk.html'; return false; }
    if (suAnTakipte) {
      await istemci.from('takipler').delete()
        .eq('takip_eden', o.user.id).eq('takip_edilen', hedefId);
    } else {
      await istemci.from('takipler').insert({ takip_eden: o.user.id, takip_edilen: hedefId });
    }
    return true;
  }

  async function takipciSayisi(hedefId) {
    const { count } = await istemci.from('takipler')
      .select('*', { count: 'exact', head: true }).eq('takip_edilen', hedefId);
    return count ?? 0;
  }

  return { hazir: () => kuruldu, istemci, oturum, kayitOl, girisYap, cikisYap,
    hesapKutusunuCiz, takipEttiklerim, takipDegistir, takipciSayisi,
    fotoYukle, fotoUrl };
})();
