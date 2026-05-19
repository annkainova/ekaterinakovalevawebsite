import { defineConfig } from 'vite';
import path from 'path';
import legacy from '@vitejs/plugin-legacy'; // Подключаем плагин для поддержки старых браузеров

export default defineConfig({
  base: './',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve('index.html'),
        maps: path.resolve('maps.html'),
        mosaics: path.resolve('mosaics.html'),
        waitingZone: path.resolve('waiting-zone.html'),
        horizonColonization: path.resolve('horizon-colonization.html'),
        artworks: path.resolve('artworks.html'),
        soupOfTheDay: path.resolve('soup-of-the-day.html'),
        notebooks: path.resolve('notebooks.html'),
        earlyWorks: path.resolve('early-works.html'),
        antarcticDiary: path.resolve('antarctic-diary.html'),
        workProjects: path.resolve('work-projects.html'),
        biography: path.resolve('biography.html'),
        contact: path.resolve('contact.html'),
        memorialObjects: path.resolve('memorial-objects.html'),
        rightToRest: path.resolve('right-to-rest.html'),
        events: path.resolve('events.html'),
        interview: path.resolve('interview.html'),
        cosmocow: path.resolve('cosmocow.html'),
        createMiracles: path.resolve('create-miracles.html'),
        catchFishing: path.resolve('catch-fishing.html'),
      },
      output: {
        // Опции выходных данных, позволяющие контролировать структуру имен файлов и др.
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },

      // eslint-disable-next-line consistent-return
      manualChunks(id) {
        // Определение manual chunks для разделения кода
        if (id.includes('node_modules')) {
          // Разделяем код библиотек
          return 'vendor';
        }
      },
    },
    // Включить sourcemaps для продакшена для отладки
    sourcemap: true,
    // Минификация
    minify: 'terser', // используем terser для минификации JavaScript
    terserOptions: {
      compress: {
        drop_console: true, // удаляем console.log в продакшене
      },
    },
  },
  historyApiFallback: {
    rewrites: [
      { from: /\/maps/, to: '/maps.html' },
      { from: /\/mosaics/, to: '/mosaics.html' },
      { from: /\/waiting-zone/, to: '/waiting-zone.html' },
      { from: /\/horizon-colonization/, to: '/horizon-colonization.html' },
      { from: /\/artworks/, to: '/artworks.html' },
      { from: /\/soup-of-the-day/, to: '/soup-of-the-day.html' },
      { from: /\/notebooks/, to: '/notebooks.html' },
      { from: /\/early-works/, to: '/early-works.html' },
      { from: /\/antarctic-diary/, to: '/antarctic-diary.html' },
      { from: /\/work-projects/, to: '/work-projects.html' },
      { from: /\/biography/, to: '/biography.html' },
      { from: /\/memorial-objects/, to: '/memorial-objects.html' },
      { from: /\/events/, to: '/events.html' },
      { from: /\/interview/, to: '/interview.html' },
      { from: /\/cosmocow/, to: '/cosmocow.html' },
      { from: /\/create-miracles/, to: '/create-miracles.html' },
      { from: /\/catch-fishing/, to: '/catch-fishing.html' },
    ],
  },
});
