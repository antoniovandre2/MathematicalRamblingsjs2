// Projeto Mathematical Ramblings (mathematicalramblings.blogspot.com).

// Arquivo service worker para "https://antoniovandre.github.io/MathematicalRamblingsjs/".

// Última atualização: 10-03-2020.

var CACHE_NAME = 'Mathematical-Ramblings-cache-v1';

var urlsToCache = [
  'index.html',
  'MathematicalRamblings-GitHub.js',
  'Javascripts/Mathematical Ramblings - 03-08-2019 - 2 - GitHub.html',
  'Javascripts/Mathematical Ramblings - 28-02-2020 - 1 - GitHub.html',
  'MathematicalRamblingsjslogo200p.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){return cache.addAll(urlsToCache);})
  );
});

self.addEventListener('activate', function (event) {
  var cacheWhitelist = ['Mathematical-Ramblings-cache-v1'];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.map(function (cacheName) {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
    }
    )
  );
});

