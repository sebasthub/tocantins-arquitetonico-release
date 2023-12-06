'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "badea6afd4aca1af4ba3dcae0524a020",
"assets/AssetManifest.json": "8a9b39d22596070564f0eec5b3e7713c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "63020b1ae7939da57884f765bd0449e4",
"assets/lib/assets/img/base_page/CasaSussuapara1.png": "942a1fb08564511aa4dde4b64ce20a29",
"assets/lib/assets/img/base_page/CasaSussuapara2.png": "db42b610ff478280186525436c82e614",
"assets/lib/assets/img/base_page/CasaVitor1.png": "6ec7c48198532d7403ffd962fdbeb177",
"assets/lib/assets/img/base_page/CasaVitor2.png": "b8ccdcad41a4739c89c339ad45fe6eb3",
"assets/lib/assets/img/base_page/CasaVitor3.png": "7305f564fbb26c2faf909fed3381509c",
"assets/lib/assets/img/base_page/Igreja%2520de%2520Nossa%2520Senhora%2520do%2520Carmo%2520-%2520Monte%2520Carmo,%2520Tocantins%25202.png": "8ecdf3b61a0d09326f7085c6b4d4bb49",
"assets/lib/assets/img/base_page/Igreja%2520de%2520Nossa%2520Senhora%2520do%2520Carmo%2520-%2520Monte%2520Carmo,%2520Tocantins%25203.png": "8f40e2b38500c08af1580a8dfbe37096",
"assets/lib/assets/img/base_page/IgrejaCatedralNossaSenhoradaConsola%25C3%25A7%25C3%25A3o.png": "7287638bec51d051c7edd3290adf2832",
"assets/lib/assets/img/base_page/IgrejaCatedralNossaSenhoradaConsola%25C3%25A7%25C3%25A3oTocantin%25C3%25B3polis.png": "69625ec6a5c4feb77d339c40b7d58797",
"assets/lib/assets/img/base_page/MuseuCasaSussuapara.png": "823d5dd3e46bd79e0842d8188b5cd8bc",
"assets/lib/assets/img/base_page/MuseuPalacinho1.png": "5df2fe39cdd4cc0d03c7e5ac40aaa80f",
"assets/lib/assets/img/base_page/MuseuPalacinho2.png": "71a424c93bb13050df6426cf7ab7e692",
"assets/lib/assets/img/base_page/MuseuPalacinho3.png": "ce077a895816e4598122edf371503d9e",
"assets/lib/assets/img/cards/Catedral.png": "0c5d7d95a9f945ebc6995c28b91f3c90",
"assets/lib/assets/img/cards/CidadeCard.png": "d165b6430d5222b59fa9bfb3bf4a5c91",
"assets/lib/assets/img/cards/Igreja%2520de%2520Nossa%2520Senhora%2520do%2520Carmo%2520-%2520Monte%2520Carmo,%2520Tocantins%2520Pagina.png": "1d8a240f8df130b31205c23d480bd6d5",
"assets/lib/assets/img/cards/Igreja.png": "0fff62a1bf1be6677f5874254aac921f",
"assets/lib/assets/img/cards/Museu.png": "eec4092d0011d9a2730c377fc7b065e1",
"assets/lib/assets/img/cards/OldHouse.png": "847fbe3da1c7992e028993af11002443",
"assets/lib/assets/img/cards/PonteCard.png": "239cbffd7fbb90c632daeca35683f97f",
"assets/lib/assets/img/cards/Senhora%2520da%2520Consola%25C3%25A7%25C3%25A3o.png": "8d03f0207a7c84fd47a8ee9aca43c425",
"assets/lib/assets/img/carroussel/Lago.png": "cfe7a612914b99bbc578697f1b2266da",
"assets/lib/assets/img/carroussel/PaisagemPlanice.png": "cbe990d1456a78b449faecbedc1701d4",
"assets/lib/assets/img/carroussel/Ponte.png": "edd7a911a81497e04ce32e429977d255",
"assets/lib/assets/img/carroussel/PonteNiteroi.png": "a572498fe576d42633a0f154d0acd9b2",
"assets/lib/assets/img/carroussel/PorDoSol.png": "38f351df001d79e62d4e43ae79107bee",
"assets/lib/assets/img/carroussel/Serras.png": "61d6c6ed75f4f9c364b42a1929ee495e",
"assets/lib/assets/img/logo/dart.png": "76c5bc12a6129614c2bb50e55723eb37",
"assets/lib/assets/img/logo/flutter.png": "bc2aca9c4fe36d793062d47622a4dce8",
"assets/lib/assets/img/logo/LogoAppBarArquitetura.png": "41526e9cbe77120d1af6f51f8613feff",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c52ff4b6e2cf075a4ccca9eafa894a0",
"/": "7c52ff4b6e2cf075a4ccca9eafa894a0",
"main.dart.js": "01704cdf6e0ecd5759362371e56751cc",
"manifest.json": "d8ba610928a6099f2e1d73f8572838fb",
"version.json": "cc5ac9017dac5e34dfae0bb6abf4a480"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
