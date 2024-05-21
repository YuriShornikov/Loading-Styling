workbox.core.setCacheNameDetails({ prefix: 'my-app' });

workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/index.html', revision: '1' },
  { url: '/style.css', revision: '1' },
  { url: '/script.js', revision: '1' },
  // добавьте сюда остальные файлы, которые нужно кэшировать
]);

// Кэширование запросов
workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('.*\.html'),
  new workbox.strategies.NetworkFirst()
);