var serviceWorkerVersion = 2;

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ' + serviceWorkerVersion, event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ' + serviceWorkerVersion, event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('[Service Worker] Intercepting fetch event with serviceWorker ' + serviceWorkerVersion, event);
  event.respondWith(fetch(event.request));
});