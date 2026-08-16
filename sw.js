// EATER — asgari service worker. Amaç yalnız "ana ekrana kur"ulabilirlik.
// fetch dinleyicisi BİLEREK boş: respondWith çağrılmayınca tarayıcı isteği
// normal yoldan yükler (araya girip iletmek, tek ağ hıçkırığında sayfayı
// karartabiliyordu). Önbellek de yok — her git push telefonda anında görünür.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
