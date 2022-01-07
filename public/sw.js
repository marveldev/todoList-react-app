let cacheData = "appV1"
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/bundle.js',
        '/static/media/checklist-illustration.95d386095a8daaf7c472fb9a542bda58.svg',
        '/static/media/complete-sound.02c736a3d1f0d82cb3d6.mp3',
        '/static/media/edit-icon.8e3527b31305cf8206abeb01afef2964.svg',
        '/static/media/delete-icon.2eb4d49ac5d02fcffda2f1995041433c.svg',
        '/index.html',
        '/manifest.json',
        '/',
        '/icon-192x192.png',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
      ])
    })
  )
})

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith((async () => {
      const cachedResponse = await caches.match(event.request)
      if (cachedResponse) {
        return cachedResponse
      }
    })())
  }
})
