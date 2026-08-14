// EATER — asgari service worker. Amaç yalnız "ana ekrana kur"ulabilirlik;
// BİLEREK hiçbir şey önbelleğe alınmaz ki her git push telefonda da anında
// görünsün (agresif önbellek, güncellemeleri günlerce gizleyebilirdi).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
