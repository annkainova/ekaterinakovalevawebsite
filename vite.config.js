import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Путь к корневой директории вашего проекта
  // Настройки для сборки проекта
  build: {
    // Путь, куда будет складываться собранный проект
    outDir: path.resolve(__dirname, 'dist'),

    // Настройки для Rollup (сборщика, используемого в Vite)
    rollupOptions: {
      // Точки входа для разных страниц вашего MPA
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
        memorialObjects: path.resolve('memorial-objects.html'),
        // Добавьте другие страницы здесь
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
      // Добавьте другие правила перенаправления здесь
    ],
  },
});
