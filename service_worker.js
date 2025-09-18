const CACHE_NAME = 'pnbfinance-cache-v1';
const urlsToCache = [
  '/',                  // index.html (your main page)
  '/images.jpg',
  '/images.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
