const C='ironlog-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./manifest.webmanifest'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(f=>{const cl=f.clone();caches.open(C).then(c=>c.put(e.request,cl));return f}).catch(()=>caches.match('./'))))});
