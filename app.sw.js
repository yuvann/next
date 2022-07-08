/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');

let CACHE_NAME = 'BUILD_VERSION';

workbox.core.setCacheNameDetails({
    prefix: CACHE_NAME,
});

// 28 days
const maxAgeSeconds = 24 * 60 * 60 * 28;

workbox.routing.registerRoute(
    new RegExp('.*\.js$'),
    workbox.strategies.cacheFirst({
        cacheName: CACHE_NAME,
        plugins: [
            new workbox.expiration.Plugin({
                // 28 days cache before expiration
                maxAgeSeconds,
                purgeOnQuotaError: true,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('.*\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: CACHE_NAME,
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds,
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('.*fonts.googleapis.com.*'),
    workbox.strategies.cacheFirst({
        cacheName: CACHE_NAME,
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds,
                purgeOnQuotaError: true
            })
        ]
    })
);

function clearOldCache(currentCacheVersion) {
    return caches.keys()
        .then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (cacheName === currentCacheVersion) {
                    return caches.delete(cacheName);
                }
                return Promise.resolve();
            })
        ));
}

workbox.skipWaiting();

workbox.clientsClaim();

self.addEventListener('activate', (event) => {
    event.waitUntil(clearOldCache(CACHE_NAME));
});
