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

  return { hazir: () => kuruldu, istemci, oturum, kayitOl, girisYap, cikisYap, hesapKutusunuCiz };
})();
