const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');

const PORT = 5000;

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  // !!!!!!!!!!!! Поменять
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Сервер взлетел на ${PORT} порту`);
});
