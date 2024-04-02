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
        // Добавьте другие страницы здесь
      },
    },
  },
  historyApiFallback: {
    rewrites: [
      { from: /\/maps/, to: '/maps.html' },
      { from: /\/mosaics/, to: '/mosaics.html' },
      // Добавьте другие правила перенаправления здесь
    ],
  },
});
