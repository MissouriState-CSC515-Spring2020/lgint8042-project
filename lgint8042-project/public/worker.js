var CACHE_NAME = 'lgint8042-project';
var urlsToCache = [
    '/',
    '/playlist',
    '/playlists',
    '/video'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response) {
            return response
        }
        return fetch(event.request);
    }))
});

self.addEventListener('activate', event => {
    var cacheWhiteList = ['lgint8042-project'];
    event.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => {
            if (cacheWhiteList.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
        }))
    }));
});