# Katkart.ru — портфолио Катерины Ковалёвой

Двуязычный (RU/EN) портфолио-сайт художницы. SPA-набор статичных страниц, собирается Vite, хостится на Rusonyx.

## Быстрый старт

```bash
npm ci
npm run dev          # дев-сервер http://localhost:5173
npm run build        # продакшн-сборка в dist/
npm run preview      # запустить prod-сборку локально http://localhost:4173
```

## Деплой

1. `npm run build` — собирает `dist/`
2. `rm -rf dist/admin` — убрать админку из сборки (см. ARCHITECTURE → CMS)
3. Загрузить содержимое `dist/` в корень сайта на Rusonyx (https://my.rusonyx.ru) через файловый менеджер или FTP

Альтернатива: каждый push в `main` автоматически запускает GitHub Action, который выкладывает готовый `dist.zip` как artifact (можно скачать с https://github.com/annkainova/ekaterinakovalevawebsite/actions). После распаковки также удалить папку `admin/` перед заливкой.

## Где что лежит

- `index.html`, `biography.html`, `catch-fishing.html` и др. — корневые страницы (≈20 шт), каждая зарегистрирована entry-point'ом в `vite.config.js`
- `src/Data/` — JSON-источники контента (RU/EN)
- `src/app/` — TypeScript-код приложения
- `src/style/` — SCSS-стили
- `public/` — статика (картинки, шрифты, PDF, админка CMS)
- `docs/` — эта документация

## Стек

Vite 5 + TypeScript 5 + SCSS, плюс jQuery 3.7, Slick (карусель), Fancyapps (лайтбокс).

## Связанные документы

- [ARCHITECTURE.md](ARCHITECTURE.md) — структура кода, потоки данных, CMS
- [ROADMAP.md](ROADMAP.md) — что сделано, что в работе, известные проблемы
