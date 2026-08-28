// EATER — detay sayfası. URL'deki ?id= değerine göre tek restoranı çizer.

function maddeListesi(dizi, bosMetin) {
  if (!Array.isArray(dizi) || dizi.length === 0) {
    return `<p class="silik">${bosMetin}</p>`;
  }
  return `<ul class="madde">${dizi.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

function fiyatMetni(fiyat) {
  if (!fiyat.kisiBasi) return 'No verified per-person price data';
  const { min, max, paraBirimi } = fiyat.kisiBasi;
  const birim = paraBirimi === 'TRY' ? '₺' : ` ${paraBirimi}`;
  return `Roughly ${min.toLocaleString('en-US')}${birim} – ${max.toLocaleString('en-US')}${birim} per person`;
}

function metrikKarti(baslik, metrik) {
  return `
    <div class="metrik">
      ${puanRozeti(baslik, metrik.puan)}
      <p>${veyaYok(metrik.ozet, 'Not enough reviews for this dimension.')}</p>
    </div>`;
}

function detayHTML(r) {
  const rez = r.rezervasyon;
  const rezGerekiyorMetni = typeof rez.gerekiyor !== 'boolean'
    ? BOS_ISARET
    : (rez.gerekiyor ? 'Yes' : 'No — but expect a wait at peak hours');
  const rezSatirlari = `
      <dl class="cift">
        <dt>Required</dt><dd>${rezGerekiyorMetni}</dd>
        <dt>How</dt><dd>${rez.yontem.length ? rez.yontem.join(', ') : BOS_ISARET}</dd>
        <dt>Phone</dt><dd>${rez.telefon ? `<a href="tel:${rez.telefon.replace(/\s/g, '')}">${rez.telefon}</a>` : BOS_ISARET}</dd>
        <dt>Online</dt><dd>${rez.link ? `<a href="${rez.link}" target="_blank" rel="noopener">Booking page</a>` : BOS_ISARET}</dd>
        <dt>Wait times</dt><dd>${veyaYok(rez.beklemeSuresi)}</dd>
        <dt>Deposit</dt><dd>${rez.kapora ? (rez.kapora.var ? `Yes — ${rez.kapora.detay}` : 'Not required') : BOS_ISARET}</dd>
      </dl>`;

  return `
    <div class="detay-basi">
      <h1 class="detay-isim">${r.isim}</h1>
      <p class="detay-yer">${bayrakEtiketi(r.ulke)}${r.semt}, ${r.sehir} · ${r.mutfak.join(', ')} · ${fiyatEtiketi(r.fiyat.segment, r.ulke)}</p>
      <div class="isaretler">${asya50Rozeti(r)}${r.oduller.map(o => `<span class="odul">${odulEtiketi(o.tip)}</span>`).join('')}</div>
      ${r.oduller.length ? `<ul class="odul-detaylari silik">${r.oduller.map(o => `<li>${o.detay}</li>`).join('')}</ul>` : ''}
    </div>

    <section class="metrikler">
      ${metrikKarti('Food', r.yemek)}
      ${metrikKarti('Ambiance', r.ambiyans)}
      ${metrikKarti('Service', r.servis)}
    </section>

    <section class="blok ikili">
      <div>
        <h2>Service — pros</h2>
        ${maddeListesi(r.servis.artilar, 'No recurring positives in reviews.')}
      </div>
      <div>
        <h2>Service — cons</h2>
        ${maddeListesi(r.servis.eksiler, 'No recurring complaints in reviews.')}
      </div>
    </section>

    <div class="satir-ikili">
      <section class="blok">
        <h2>What to eat</h2>
        <ol class="yemek-kutulari">
          ${r.neYenir.map((y, i) => `
            <li>
              <span class="yemek-no">${i + 1}</span>
              <span class="yemek-ad">${y.yemek}</span>
            </li>`).join('')}
        </ol>
      </section>
      <!-- Ambiance ve Price alt alta: ikisi de kısa, yan yana yer israfıydı -->
      <div class="yigin">
        <section class="blok">
          <h2>Ambiance</h2>
          <ul class="ambiyans-listesi">
            ${r.ambiyans.etiketler.map(e => `<li class="etiket">${e}</li>`).join('')}
          </ul>
          <dl class="cift">
            <dt>Dress code</dt><dd>${veyaYok(r.ambiyans.dressCode, 'None stated')}</dd>
            <dt>Good for</dt><dd>${r.ambiyans.uygun.length ? r.ambiyans.uygun.join(', ') : BOS_ISARET}</dd>
          </dl>
        </section>
        <section class="blok">
          <h2>Price</h2>
          <p class="fiyat-ozet">${fiyatMetni(r.fiyat)}</p>
          ${r.fiyat.not ? `<p class="silik fiyat-not">${r.fiyat.not}</p>` : ''}
        </section>
      </div>
    </div>

    <div class="satir-ikili">
      <section class="blok">
        <h2>Address</h2>
        <p>${veyaYok(r.adres, 'No verified address')}</p>
        ${r.mapsUrl ? `<p><a class="harita" href="${r.mapsUrl}" target="_blank" rel="noopener">Open in Google Maps &rarr;</a></p>` : ''}
      </section>
      <section class="blok">
        <h2>Reservation</h2>
        ${rezSatirlari}
      </section>
    </div>`;
}

function bulVeCiz() {
  const id = new URLSearchParams(location.search).get('id');
  const r = RESTORANLAR.find(x => x.id === id);
  const kap = document.getElementById('detay');

  if (!r) {
    // `id` URL'den geliyor, veri.js'ten değil — bu yüzden innerHTML'e ham
    // olarak konmaz. Çevresindeki işaretleme innerHTML ile kurulur, ama
    // id değeri boş bir <code> öğesine textContent ile atanır.
    kap.innerHTML = `
      <p class="bos">No such restaurant${id ? ' (<code></code>)' : ''}.
      <a href="index.html">Back to the list</a>.</p>`;
    if (id) {
      kap.querySelector('code').textContent = id;
    }
    return;
  }

  document.title = `${r.isim} — EATER`;
  kap.innerHTML = detayHTML(r);
  kalbiKur(r);
  gunlukBaglantisiniEkle(r);
}

// Sağ üstteki kalp: "Want to go" listesine ekler/çıkarır (Ek 5). Girişsiz
// tıklamada giriş sayfasına gider; Supabase yoksa kalp hiç görünmez.
async function kalbiKur(r) {
  if (!eaterHesap.hazir()) return;
  const bas = document.querySelector('.detay-basi');
  if (!bas) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'kalp-btn';
  btn.title = 'Save to Want to go';
  btn.setAttribute('aria-label', 'Save to Want to go');
  btn.textContent = '🤍';
  bas.appendChild(btn);

  const durum = await eaterHesap.favoriMi(r.id); // girişsizse null
  let favori = durum?.favori ?? false;
  const boya = () => {
    btn.textContent = favori ? '❤️' : '🤍';
    btn.classList.toggle('kalpli', favori);
  };
  boya();
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    const oldu = await eaterHesap.favoriDegistir(r.id, favori);
    if (oldu) { favori = !favori; boya(); }
    btn.disabled = false;
  });
}

// Swarm usulü sosyal katman: Mayor rozeti başlık kutusunda + "Friends ate
// here" bölümü puan kutularının hemen altında. Veri yoksa hiçbir şey çizilmez.
async function mayorVeArkadaslariCiz(ziyaretler) {
  if (ziyaretler.length === 0) return;

  // Mayor: kişi başına ziyaret sayısı; taç için en az 2 ziyaret gerekir.
  const sayim = new Map();
  ziyaretler.forEach(v => sayim.set(v.kullanici, (sayim.get(v.kullanici) || 0) + 1));
  const [mayorId, mayorZiyaret] = [...sayim.entries()].sort((a, b) => b[1] - a[1])[0];
  const mayorVar = mayorZiyaret >= 2;

  // Arkadaşlar (kabul edilmiş takipler) — girişsizse boş kalır.
  const takip = await eaterHesap.takipEttiklerim();
  const arkadasIdler = takip
    ? [...new Set(ziyaretler.map(v => v.kullanici).filter(id => takip.kume.has(id)))]
    : [];

  const gerekliIdler = [...new Set([...(mayorVar ? [mayorId] : []), ...arkadasIdler])];
  if (gerekliIdler.length === 0) return;
  const { data: profiller = [] } = await eaterHesap.istemci
    .from('profiller').select('id, kullanici_adi').in('id', gerekliIdler);
  const adiniBul = id => profiller.find(p => p.id === id)?.kullanici_adi;

  if (mayorVar && adiniBul(mayorId)) {
    const cip = document.createElement('div');
    cip.className = 'detay-sosyal';
    cip.innerHTML = `<a class="sosyal-cip mayor-cip" href="kisi.html?id=${encodeURIComponent(mayorId)}">
      👑 Mayor: <strong>${kacis(adiniBul(mayorId))}</strong>
      <span class="silik">· ${mayorZiyaret} visits</span></a>`;
    document.querySelector('.detay-basi')?.appendChild(cip);
  }

  // Arkadaş başına TEK satır: ad · verdiği EATER Point · yediği yemekler,
  // sağda arkadaşın Eat Book'undaki o kayda giden düğme (#z-<ziyaret> çapası).
  const satirlar = arkadasIdler.filter(id => adiniBul(id)).map(id => {
    const kayitlar = ziyaretler.filter(v => v.kullanici === id)
      .sort((a, b) => (b.tarih || '').localeCompare(a.tarih || ''));
    const puanlar = kayitlar.map(v => v.genel_puan).filter(x => typeof x === 'number');
    const ort = puanlar.length
      ? puanlar.reduce((a, b) => a + b, 0) / puanlar.length : null;
    const yemekler = [...new Set(kayitlar.flatMap(v => [v.sevilen_yemek1, v.sevilen_yemek2])
      .map(y => (y || '').trim()).filter(Boolean))];
    const capa = kayitlar[0]?.id ? `#z-${encodeURIComponent(kayitlar[0].id)}` : '';
    return `
      <div class="arkadas-satir">
        <a class="arkadas-ad" href="kisi.html?id=${encodeURIComponent(id)}">👥 <strong>${kacis(adiniBul(id))}</strong></a>
        ${ort !== null ? `<span class="eater-puan arkadas-puan">⭐ ${ondalikTR(ort)}</span>` : ''}
        <span class="arkadas-yemek silik">${yemekler.length ? kacis(yemekler.join(' · ')) : 'no dish noted'}</span>
        <a class="arkadas-btn" href="kisi.html?id=${encodeURIComponent(id)}${capa}">EAT BOOK →</a>
      </div>`;
  });
  if (satirlar.length === 0) return;

  const kutu = document.createElement('section');
  kutu.className = 'blok arkadas-kutu';
  kutu.innerHTML = `<h2>Friends ate here 👥</h2>${satirlar.join('')}`;
  document.querySelector('.metrikler')?.after(kutu);
}

// Detaydan günlüğe geçiş + girişli kullanıcıya son ziyaretinin puanlarını
// site puanının yanında gösterir. Kişisel puanlar katalog puanına karışmaz.
async function gunlukBaglantisiniEkle(r) {
  const kutu = document.createElement('div');
  kutu.className = 'ate-panel';
  kutu.innerHTML = `<span class="ate-kutu"><a class="sekme sekme-aktif ate-btn" href="gunluk.html?restoran=${encodeURIComponent(r.id)}">I ATE</a></span>
    <span id="senPuanlarin"></span>
    <div id="yiyiciFavorileri"></div>`;
  document.querySelector('main').appendChild(kutu);

  if (!eaterHesap.hazir()) return;

  // Tüm kullanıcıların bu restorandaki favori yemekleri + EATER Point'leri
  // (girişsiz de görünür).
  let { data: favVeri, error: favHata } = await eaterHesap.istemci
    .from('ziyaretler').select('id, tarih, sevilen_yemek1, sevilen_yemek2, genel_puan, kullanici')
    .eq('restoran_id', r.id);
  if (favHata) {
    // genel_puan sütunu henüz yok (Ek 8 çalıştırılmamış) — favoriler puansız sürsün.
    ({ data: favVeri } = await eaterHesap.istemci
      .from('ziyaretler').select('id, tarih, sevilen_yemek1, sevilen_yemek2, kullanici')
      .eq('restoran_id', r.id));
  }

  // 👑 Mayor: bu restorana en çok kaydı olan Eater (en az 2 ziyaret şart) +
  // 👥 arkadaşlardan kimler yemiş. İkisi de mevcut ziyaret verisinden türetilir.
  await mayorVeArkadaslariCiz(favVeri || []);

  // Topluluk EATER Point ortalaması — Food/Ambiance/Service kutularının
  // hemen altında durur; hiç puan yoksa satır hiç çizilmez.
  const eaterPuanlari = (favVeri || [])
    .map(v => v.genel_puan).filter(x => typeof x === 'number');
  if (eaterPuanlari.length > 0) {
    const ortalama = eaterPuanlari.reduce((a, b) => a + b, 0) / eaterPuanlari.length;
    const ozet = document.createElement('div');
    ozet.className = 'eater-ozet';
    ozet.innerHTML = `
      <span class="eater-puan eater-buyuk">⭐ EATER Point — ${ondalikTR(ortalama)}</span>
      <span class="eater-not">${eaterPuanlari.length} Eater rating${eaterPuanlari.length === 1 ? '' : 's'}</span>`;
    // Başlık kutusunun içinde — sayfa açılır açılmaz görünür.
    document.querySelector('.detay-basi')?.appendChild(ozet);
  }
  const sayim = new Map();
  (favVeri || []).forEach(v => [v.sevilen_yemek1, v.sevilen_yemek2].forEach(y => {
    const ad = (y || '').trim();
    if (!ad) return;
    const anahtar = ad.toLocaleLowerCase('tr');
    const kayit = sayim.get(anahtar) || { ad, n: 0 };
    kayit.n += 1;
    sayim.set(anahtar, kayit);
  }));
  if (sayim.size > 0) {
    const liste = [...sayim.values()].sort((a, b) => b.n - a.n)
      .map(f => `${kacis(f.ad)}${f.n > 1 ? ` ×${f.n}` : ''}`)
      .join(' · ');
    document.getElementById('yiyiciFavorileri').innerHTML =
      `<p class="silik">Eaters' favorites: ${liste}</p>`;
  }
  const o = await eaterHesap.oturum();
  if (!o) return;
  const { data: ziyaretler } = await eaterHesap.istemci
    .from('ziyaretler').select('yemek_puan, ambiyans_puan, servis_puan')
    .eq('kullanici', o.user.id).eq('restoran_id', r.id)
    .order('tarih', { ascending: false }).limit(1);
  if (!ziyaretler || ziyaretler.length === 0) return;
  const z = ziyaretler[0];
  const ciz = (etiket, site, sen) =>
    typeof sen === 'number'
      ? `<span class="silik">${etiket} — Site: ${typeof site === 'number' ? ondalikTR(site) : '—'} · You: ${ondalikTR(sen)}</span> `
      : '';
  document.getElementById('senPuanlarin').innerHTML =
    ' ' + ciz('Food', r.yemek.puan, z.yemek_puan) +
    ciz('Ambiance', r.ambiyans.puan, z.ambiyans_puan) +
    ciz('Service', r.servis.puan, z.servis_puan);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kesfet');
  eaterHesap.hesapKutusunuCiz();
  bulVeCiz();
});
