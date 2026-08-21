const C='ironlog-v2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./manifest.webmanifest'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(f=>{const cl=f.clone();caches.open(C).then(c=>c.put(e.request,cl));return f}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./'))))});


