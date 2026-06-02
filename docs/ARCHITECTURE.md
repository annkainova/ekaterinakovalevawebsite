# Архитектура

## Технологический стек

| Слой | Что используется |
|---|---|
| Сборка | Vite 5.2 (multi-page setup, 20 entry-points) |
| Языки | TypeScript 5.4, SCSS |
| UI-библиотеки | jQuery 3.7, Slick Carousel 1.8, @fancyapps/ui 5 |
| Совместимость | @vitejs/plugin-legacy (поддержка старых браузеров кроме IE11) |
| Линтер/форматтер | ESLint (airbnb config) + Prettier + Husky pre-commit |

## Multi-page структура

Сайт — не SPA, а **набор статичных HTML-страниц** с общим JS-бандлом. Каждая страница объявлена как entry-point в `vite.config.js → rollupOptions.input`. При сборке Vite генерит для каждой по `*.html` + JS-чанк.

20 страниц: `index`, `biography`, `contact`, `events`, `interview`, проекты (`maps`, `mosaics`, `waiting-zone`, `horizon-colonization`, `artworks`, `soup-of-the-day`, `notebooks`, `early-works`, `antarctic-diary`, `work-projects`, `memorial-objects`, `right-to-rest`), события (`cosmocow`, `create-miracles`, `catch-fishing`).

## Точка входа и инициализация

`src/index.ts` → `src/app/app.ts`. В `app.ts` определяется текущая страница по `window.location.pathname` и инстанцируются нужные компоненты (HomePage, BiographyComponent, NewsPage и т.д.).

## Локализация

Один глобальный класс `src/app/pages/Localization/Localization.ts`:

- Текущий язык: `localStorage.getItem('language')`, по умолчанию `'ru'`
- Переключатели `.language-switcher__option--ru/--en` в шапке вызывают `changeLanguage()` → перезагружают страницу
- В HTML элементы помечаются `data-localize="key"`, метод `updateTexts()` пробегает по ним и подставляет строки из `dataMain[key]` / `dataMainEn[key]`

## Структура данных (src/Data/)

| Файл | Назначение |
|---|---|
| `dataMain.json` / `dataMainEn.json` | Основной контент главной + общие переводы (header, footer, hero, проекты-навигация) |
| `dataNavigation.json` / `…En.json` | Меню навигации |
| `dataAnonsment.json` / `…En.json` | Карточки событий для блока СОБЫТИЯ на главной |
| `News/dataNews.json` / `…En.json` | Карточки событий для страницы `/events.html` (с пагинацией) |
| `Events/dataEvent.json` / `…En.json` | Детальный контент страниц событий (catch-fishing, cosmocow, create-miracles) — фотогалереи, описания |
| `data.json` / `dataEn.json`, `projectData.json` | Контент проектов (галереи) |
| `cmsEvents.json` | Контейнер для событий из Decap CMS (см. ниже). Сейчас пустой. |

**Биография** живёт отдельно: `src/app/pages/Biography/dataBiography.json` и `dataBiographyEn.json`. Поле `personal.text` — большая HTML-строка с записями выставок.

## Компонент рендера события

`src/app/components/EventBlock/EventBlock.ts` — универсальный рендер карточки. Принимает объект `EventProps` (см. `src/app/interfaces/Event.ts`). Используется и на главной, и на странице событий.

Поток для блока СОБЫТИЯ:
1. `HomePage → AnnouncementsComponent → Anonsement` инстанцируется
2. Берёт `dataAnonsment` (RU) или `dataAnonsmentEn` (EN)
3. Прицепляет события из `cmsEvents.json` сверху (см. `cmsConverter.ts`)
4. Передаёт каждый event в `EventBlock` → рендер слайдера

Для `/events.html` аналогично, только источник — `News/dataNews*.json`, плюс пагинация (6 на страницу).

## Decap CMS — инфраструктура (НЕ задеплоено на прод)

В репо лежит готовая админка, **но на прод не заливается**.

Файлы:
- `public/admin/index.html` — bootstrap-страница для Decap CMS (грузит UI с CDN)
- `public/admin/config.yml` — схема формы события (RU + EN поля)
- `src/Data/cmsEvents.json` — источник правды для событий из CMS (сейчас пустой)
- `src/app/utils/cmsConverter.ts` — конвертер из CMS-формата в `EventProps`
- `src/app/interfaces/Event.ts` — типы `CmsEvent`, `CmsEventTranslation`, `CmsEventsData`

Как работает (если бы был задеплоен):
1. Открываешь `katkart.ru/admin/` → форма Decap
2. Логин через GitHub OAuth (proxy на Vercel: `katkart-oauth.vercel.app`)
3. Заполнение формы → коммит в репо через GitHub API
4. GitHub Action собирает новый `dist`
5. Скачиваешь artifact, заливаешь на Rusonyx

**Почему отключено на проде:** избежать риска несанкционированного доступа + ручной деплой и так удобен.

Локально админка работает: `npm run dev` + `npx decap-server` в отдельном терминале → `http://localhost:5174/admin/index.html`.

Чтобы **исключить admin/ из сборки**:
```bash
npm run build
rm -rf dist/admin
```

Чтобы **навсегда удалить**: удалить `public/admin/`, `src/Data/cmsEvents.json`, `src/app/utils/cmsConverter.ts`, поправить импорты в `Anonsement.ts` и `Events/Events.ts`, убрать `CmsEvent*` из `interfaces/Event.ts`. См. коммиты `5ad70169` (внедрение) и `4a04d2fb` (OAuth).

## CI/CD

`.github/workflows/build.yml` — на каждый push в `main` (и по ручному запуску):
1. `npm ci` → `npm run build`
2. Загружает `dist/` как artifact (хранится 30 дней)

Деплой ручной — скачать artifact, удалить `admin/`, залить на Rusonyx.

## Известные тонкости

- **`personal-text` в `dataMain.json`** — dead-поле. В HTML нет элемента с `data-localize="personal-text"`. Биография читается из `dataBiography.json`. Аналогично `bio-text`, `group-text` в dataMain.json — дубликаты, не рендерятся. Можно безопасно удалить.
- **`public/certificate-*.pdf`** — был случайно в бэкапе (SQL Academy сертификат разработчика), удалён 19.05.2026.
- **27 dependabot vulnerabilities** — все в devDependencies (Babel, ESLint, lint-staged, esbuild). На прод-бандл не влияют. См. `npm audit` для деталей.

## Хостинг и креды

- Прод: **katkart.ru**, хостинг **Rusonyx** (https://my.rusonyx.ru)
- Репо: **github.com/annkainova/ekaterinakovalevawebsite**
- OAuth proxy для CMS: **katkart-oauth.vercel.app** (форк `vencax/netlify-cms-github-oauth-provider`)
- Деплой: вручную, заливка содержимого `dist/` в корень сайта на Rusonyx
