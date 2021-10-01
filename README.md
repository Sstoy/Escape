## Escape

### Веб - приложение для сети компьютерных клубов Escape24 в г.Санкт - Петербург.

#### Главная страница. Авторизация пользователя по номеру телефона. Стилизованные Yandex Map:
![](/screenshots/main-page.png)

####  Главная страница. Блок новостей, подключенных через API:
![](/screenshots/news.png)

#### Отзывы, реализованные посредством подключения виджета Yandex:
![](/screenshots/reviews.png)

#### Меню:
![](/screenshots/menu.png)

#### Страница "Клубы" (рендеринг списка клубов реализован динамически посредством подключения базы данных):
![](/screenshots/clubs.png)

#### Страница "О нас":
![](/screenshots/about.png)

#### Блок "Часто задаваемые вопросы":
![](/screenshots/faq.png)

## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt, Cors, Firebase, Yandex UI, Nodemailer, Cheerio

**Front**: React + Redux, SVG, HTML5, CSS/SCSS


### Установка:
В директории 2 папки:
* back Отвечает за back-end. 
 1. cd back
 2. npm ci
 3. npx sequelize db:create
 4. npx sequelize db:migrate
 5. npx sequelize db:seed:all
 6. npm run dev
* front - front-end. 
 1. cd front 
 2. npm ci
 3. npm start
