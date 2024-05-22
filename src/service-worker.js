import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { setCacheNameDetails } from 'workbox-core';

// Настройка имен кэшей
setCacheNameDetails({
  prefix: 'my-app',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache',
});

// Предварительное кэширование файлов
precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/index.html', revision: '1' },
  { url: '/css/style.css', revision: '1' },
  { url: '/js/app.js', revision: '1' },
]);

// Кэширование JavaScript
registerRoute(
  new RegExp('.*\\.js'),
  new NetworkFirst()
);

// Кэширование CSS
registerRoute(
  new RegExp('.*\\.css'),
  new StaleWhileRevalidate()
);

// Кэширование HTML
registerRoute(
  new RegExp('.*\\.html'),
  new NetworkFirst()
);
