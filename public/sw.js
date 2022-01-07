let cacheData = "appV1"
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/bundle.js',
        '/bootstrap.min.css',
        '/icon-192x192.png',
        '/index.html',
        '/'
      ])
    })
  )
})

this.addEventListener("fetch", (event) => {
  event.respondWith((async () => {
    const cachedResponse = await caches.match(event.request)
    if (cachedResponse) {
      return cachedResponse
    }
  })())
})
