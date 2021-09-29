Веб - приложение для сети компьютерных клубов Escape24 в г.Санкт - Петербург.

Стек технологий:
JavaScript

DB: PostgreSQL, Sequelize ORM

Back: Node.js, Express, Sessions, Bcrypt, Cors, Firebase, Yandex UI, Nodemailer, Cheerio

Front: React + Redux, Redux Saga, SVG, HTML5, SCSS/CSS, UI Kit

Планы развития:
Интеграция с системами автоматизации IIKO и RKeeper

Использование Redux Toolkit

Полнофункциональное внедрение оплаты с другими СО Интеграция со службами доставки

Установка:
В директории 2 папки:

back Отвечает за back-end.
cd back
npm ci
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
front - front-end.
cd front
npm ci
npm start
