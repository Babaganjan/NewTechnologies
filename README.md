## О проекте

- Сайт компании NTOUCH (ТОО «Новые Технологии – Тараз») — производство систем безопасности и
  IT‑оборудования в Казахстане.
- Назначение: показать продукцию, услуги и реализованные проекты, собирать заявки на консультации и
  расчеты.

## Технологии (для понимания без деталей кода)

- Next.js 16 (App Router), React 19, TypeScript, Turbopack.
- Стили: SCSS/SCSS‑modules, PostCSS (pxtorem, autoprefixer).
- Формы: react-hook-form + zod (валидация).
- Анимации/слайдеры: framer-motion, swiper, embla-carousel.
- SEO: собственный `seo.config.ts`, разметка Schema.org через `schema-dts`.

## Быстрый старт локально

1. Установите Node.js 18+ и npm.
2. В корне проекта: `npm install`
3. Запуск разработки: `npm run dev` → открыть http://localhost:3000
4. Прод-сборка: `npm run build`, запуск сборки: `npm start`

## Скрипты

- `npm run dev` — локальная разработка (Turbopack).
- `npm run build` — продакшн-сборка.
- `npm start` — запуск собранной версии.
- `npm run lint` / `npm run lint:fix` — проверка и автоправка кода.
- `npm run format` / `npm run format:check` — форматирование Prettier.

## Структура (основное)

- `src/app` — страницы (главная, about, contacts, products, services, privacy, sitemap/robots).
- `src/widgets` — готовые секции страниц (hero, services, products, projectMenu и др.).
- `src/shared` — общие компоненты, ui, константы, хуки, иконки, SEO-конфиг.
- `public/img`, `public/video`, `public/fonts` — статические ассеты.
- `out/` — статический вывод, если делали экспорт.

## Навигация по контенту

- Товары: `src/app/products/*` + изображения в `public/img/products`.
- Услуги: `src/app/services/*` — описания направлений.
- О компании/документы: `src/app/about` и виджеты документов.
- Контакты и формы: `src/app/contacts`; формы обратной связи в виджетах Feedback/Questions.
- SEO тексты/мета: `src/shared/config/seo.config.ts`.

## Деплой (общее)

- Классический сервер: `npm run build` → `npm start` на Node.js 18+.
- Платформы типа Vercel: достаточно стандартного билда `npm run build`.
