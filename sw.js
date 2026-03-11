const CACHE = 'hebrew-clock-v4';
const ASSETS = [
    './',
    './index.html',
    './manifest.webmanifest',
    './style.css',
    './clock.js',
    './favicon.svg',
    './icons/icon-192.svg',
    './icons/icon-512.svg',
    './sound/morning_heb_meditation.mp3'
];

const OFFLINE_AUDIO_PATH = './sound/morning_heb_meditation.mp3';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

async function putInCache(request, response) {
    if (!response || response.status !== 200 || response.type !== 'basic') return;
    const cache = await caches.open(CACHE);
    await cache.put(request, response);
}

async function handleRangeRequest(request) {
    const fullResponse = await caches.match(OFFLINE_AUDIO_PATH);
    if (!fullResponse) {
        return fetch(request).catch(() => new Response(null, { status: 503, statusText: 'Offline' }));
    }

    const rangeHeader = request.headers.get('range');
    if (!rangeHeader) {
        return fullResponse;
    }

    const matches = /bytes=(\d+)-(\d+)?/.exec(rangeHeader);
    if (!matches) {
        return fullResponse;
    }

    const data = await fullResponse.arrayBuffer();
    const size = data.byteLength;
    const start = Number.parseInt(matches[1], 10);
    const end = matches[2] ? Number.parseInt(matches[2], 10) : size - 1;

    if (!Number.isInteger(start) || !Number.isInteger(end) || start > end || end >= size) {
        return new Response(null, {
            status: 416,
            headers: {
                'Content-Range': `bytes */${size}`
            }
        });
    }

    const chunk = data.slice(start, end + 1);
    return new Response(chunk, {
        status: 206,
        statusText: 'Partial Content',
        headers: {
            'Accept-Ranges': 'bytes',
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Content-Length': String(chunk.byteLength),
            'Content-Type': fullResponse.headers.get('Content-Type') || 'audio/mpeg'
        }
    });
}

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;

    const url = new URL(e.request.url);
    if (url.origin !== self.location.origin) return;

    if (e.request.headers.has('range') && url.pathname.endsWith('.mp3')) {
        e.respondWith(handleRangeRequest(e.request));
        return;
    }

    if (e.request.mode === 'navigate') {
        e.respondWith(
            fetch(e.request)
                .then(networkResponse => {
                    putInCache('./index.html', networkResponse.clone());
                    return networkResponse;
                })
                .catch(async () => {
                    const cachedPage = await caches.match(e.request);
                    return cachedPage || caches.match('./index.html');
                })
        );
        return;
    }

    e.respondWith(
        caches.match(e.request).then(cached => {
            if (cached) return cached;
            return fetch(e.request)
                .then(networkResponse => {
                    putInCache(e.request, networkResponse.clone());
                    return networkResponse;
                })
                .catch(() => new Response(null, { status: 503, statusText: 'Offline' }));
        })
    );
});
