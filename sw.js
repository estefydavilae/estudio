// Guarda una copia de todo para que el centro de estudio funcione sin conexión.
// Al cambiar o añadir juegos, sube el número de versión.
const VERSION = 'cde-v4';
const FILES = [
  './', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png',
  './neurolab-bloque-2.html', './neuro-al-dia.html', './autapsis-voltage-clamp.html',
  './embriones-fase-a-fase.html', './planos-y-perspectivas.html', './organogenesis.html',
  './dominios-y-senalizacion.html', './flashcards-endocrino.html', './mapa-de-senalizacion.html',
  './genetica-ruta.html', './lligament-diari.html', './simulacro-genetica-medica.html'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Primero la red (para ver siempre la última versión); si no hay conexión, la copia guardada.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
