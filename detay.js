// EATER — detay sayfası. URL'deki ?id= değerine göre tek restoranı çizer.

function maddeListesi(dizi, bosMetin) {
  if (!Array.isArray(dizi) || dizi.length === 0) {
    return `<p class="silik">${bosMetin}</p>`;
  }
  return `<ul class="madde">${dizi.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

function fotoGalerisi(fotolar) {
  if (!Array.isArray(fotolar) || fotolar.length === 0) return '';
  const gorseller = fotolar
    .map((f, i) => `
      <figure class="foto${i === 0 ? ' foto-bas' : ''}">
        <img src="${f.dosya}" alt="${f.alt}"${i === 0 ? '' : ' loading="lazy"'}>
        ${fotoKredisi(f)}
      </figure>`)
    .join('');
  return `<section class="fotolar">${gorseller}</section>`;
}

function etiketler(dizi) {
  if (!Array.isArray(dizi) || dizi.length === 0) return '';
  return `<div class="etiketler">${dizi.map(e => `<span class="etiket">${e}</span>`).join('')}</div>`;
}

function fiyatMetni(fiyat) {
  if (!fiyat.kisiBasi) return 'Kişi başı fiyat bilgisi yok';
  const { min, max, paraBirimi } = fiyat.kisiBasi;
  const birim = paraBirimi === 'TRY' ? '₺' : ` ${paraBirimi}`;
  return `Kişi başı yaklaşık ${min.toLocaleString('tr-TR')}${birim} – ${max.toLocaleString('tr-TR')}${birim}`;
}

function kaynakSatiri(ad, k) {
  if (!k) return `<tr><td>${ad}</td><td class="silik" colspan="2">${BOS_ISARET}</td></tr>`;
  if (ad === 'TikTok') {
    return `<tr><td>TikTok</td><td>—</td><td>${k.incelenenVideo} video incelendi</td></tr>`;
  }
  return `<tr>
    <td>${ad}</td>
    <td>${ondalikTR(k.puan)} / 5</td>
    <td>${k.yorumSayisi.toLocaleString('tr-TR')} yorum — ${k.incelenen} tanesi incelendi</td>
  </tr>`;
}

function metrikKarti(baslik, metrik) {
  return `
    <div class="metrik">
      ${puanRozeti(baslik, metrik.puan)}
      <p>${veyaYok(metrik.ozet, 'Bu boyut için yeterli yorum bulunamadı.')}</p>
    </div>`;
}

function detayHTML(r) {
  const rez = r.rezervasyon;
  const rezGerekiyorMetni = typeof rez.gerekiyor !== 'boolean'
    ? BOS_ISARET
    : (rez.gerekiyor ? 'Evet' : 'Hayır — ama yoğun saatlerde beklemek gerekebilir');
  const rezSatirlari = `
      <dl class="cift">
        <dt>Gerekli mi</dt><dd>${rezGerekiyorMetni}</dd>
        <dt>Yöntem</dt><dd>${rez.yontem.length ? rez.yontem.join(', ') : BOS_ISARET}</dd>
        <dt>Telefon</dt><dd>${rez.telefon ? `<a href="tel:${rez.telefon.replace(/\s/g, '')}">${rez.telefon}</a>` : BOS_ISARET}</dd>
        <dt>Online</dt><dd>${rez.link ? `<a href="${rez.link}" target="_blank" rel="noopener">Rezervasyon sayfası</a>` : BOS_ISARET}</dd>
        <dt>Bekleme süresi</dt><dd>${veyaYok(rez.beklemeSuresi)}</dd>
        <dt>Kapora</dt><dd>${rez.kapora ? (rez.kapora.var ? `Evet — ${rez.kapora.detay}` : 'İstenmiyor') : BOS_ISARET}</dd>
      </dl>`;

  return `
    <div class="detay-basi">
      <h1 class="detay-isim">${r.isim}</h1>
      <p class="detay-yer">${r.semt}, ${r.sehir} · ${r.mutfak.join(', ')} · ${fiyatEtiketi(r.fiyat.segment)}</p>
      <div class="isaretler">${r.oduller.map(o => `<span class="odul">★ ${odulEtiketi(o.tip)}</span>`).join('')}</div>
      ${r.oduller.length ? `<ul class="odul-detaylari silik">${r.oduller.map(o => `<li>${o.detay}</li>`).join('')}</ul>` : ''}
    </div>

    ${fotoGalerisi(r.fotolar)}

    <section class="metrikler">
      ${metrikKarti('Yemek', r.yemek)}
      ${metrikKarti('Ambiyans', r.ambiyans)}
      ${metrikKarti('Servis', r.servis)}
    </section>

    <section class="blok">
      <h2>Ne yenir</h2>
      <ol class="yemekler">
        ${r.neYenir.map(y => `
          <li>
            <span class="yemek-ad">${y.yemek}</span>
            ${typeof y.kacKisiOnerdi === 'number' ? `<span class="yemek-sayi">${y.kacKisiOnerdi} yorumda önerildi</span>` : ''}
            ${y.not ? `<span class="yemek-not">${y.not}</span>` : ''}
          </li>`).join('')}
      </ol>
    </section>

    <section class="blok">
      <h2>Ambiyans</h2>
      ${etiketler(r.ambiyans.etiketler)}
      <dl class="cift">
        <dt>Kıyafet kuralı</dt><dd>${veyaYok(r.ambiyans.dressCode, 'Belirtilmiş bir kıyafet kuralı yok')}</dd>
        <dt>Kimler için uygun</dt><dd>${r.ambiyans.uygun.length ? r.ambiyans.uygun.join(', ') : BOS_ISARET}</dd>
      </dl>
    </section>

    <section class="blok ikili">
      <div>
        <h2>Servis — artılar</h2>
        ${maddeListesi(r.servis.artilar, 'Yorumlarda öne çıkan bir artı yok.')}
      </div>
      <div>
        <h2>Servis — eksiler</h2>
        ${maddeListesi(r.servis.eksiler, 'Yorumlarda tekrarlayan bir şikâyet yok.')}
      </div>
    </section>

    <section class="blok">
      <h2>Fiyat</h2>
      <p>${fiyatMetni(r.fiyat)}</p>
      ${r.fiyat.not ? `<p class="silik">${r.fiyat.not}</p>` : ''}
    </section>

    <section class="blok">
      <h2>Rezervasyon</h2>
      ${rezSatirlari}
    </section>

    <section class="blok">
      <h2>Adres</h2>
      <p>${veyaYok(r.adres, 'Adres bilgisi bulunamadı')}</p>
      ${r.mapsUrl ? `<p><a class="harita" href="${r.mapsUrl}" target="_blank" rel="noopener">Google Maps'te aç &rarr;</a></p>` : ''}
    </section>

    <section class="blok">
      <h2>Kaynaklar</h2>
      <table class="kaynak">
        <thead><tr><th>Platform</th><th>Puan</th><th>İncelenen</th></tr></thead>
        <tbody>
          ${kaynakSatiri('Google', r.kaynaklar.google)}
          ${kaynakSatiri('TripAdvisor', r.kaynaklar.tripadvisor)}
          ${kaynakSatiri('TikTok', r.kaynaklar.tiktok)}
          ${r.kaynaklar.diger ? `<tr><td>Diğer kaynaklar</td><td colspan="2">${r.kaynaklar.diger}</td></tr>` : ''}
        </tbody>
      </table>
      <p class="silik">Son güncelleme: ${r.sonGuncelleme}. Puanlar bu örneklemden çıkarılmış öznel değerlendirmelerdir.</p>
      <p class="silik">— işareti, ilgili alan için doğrulanmış bir veri bulunamadığını gösterir.</p>
    </section>`;
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
      <p class="bos">Böyle bir restoran bulunamadı${id ? ' (<code></code>)' : ''}.
      <a href="index.html">Listeye dön</a>.</p>`;
    if (id) {
      kap.querySelector('code').textContent = id;
    }
    return;
  }

  document.title = `${r.isim} — EATER`;
  kap.innerHTML = detayHTML(r);
  gunlukBaglantisiniEkle(r);
}

// Detaydan günlüğe geçiş + girişli kullanıcıya son ziyaretinin puanlarını
// site puanının yanında gösterir. Kişisel puanlar katalog puanına karışmaz.
async function gunlukBaglantisiniEkle(r) {
  const kutu = document.createElement('div');
  kutu.className = 'panel';
  kutu.innerHTML = `<a class="sekme sekme-aktif" href="gunluk.html?restoran=${encodeURIComponent(r.id)}">+ Günlüğüme ekle</a>
    <span id="senPuanlarin"></span>`;
  document.querySelector('main').appendChild(kutu);

  if (!eaterHesap.hazir()) return;
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
      ? `<span class="silik">${etiket} — Site: ${typeof site === 'number' ? ondalikTR(site) : '—'} · Sen: ${ondalikTR(sen)}</span> `
      : '';
  document.getElementById('senPuanlarin').innerHTML =
    ' ' + ciz('Yemek', r.yemek.puan, z.yemek_puan) +
    ciz('Ambiyans', r.ambiyans.puan, z.ambiyans_puan) +
    ciz('Servis', r.servis.puan, z.servis_puan);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gezinme').innerHTML = gezinmeHTML('kesfet');
  eaterHesap.hesapKutusunuCiz();
  bulVeCiz();
});
