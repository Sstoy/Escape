const nodemailer = require('nodemailer');

async function sendDataToMail(email, message, name) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'escape.mailer',
      pass: 'escape2021',
    },
  });

  const mail = () => {
    transporter.sendMail({
      from: '"escape club" <escape.mailer@yandex.ru>', // sender address
      to: 'sirjik37@gmail.com', // list of receivers
      subject: 'Обратная связь', // Subject line
      text: `Добрый день, письмо от ${name} с обратной связью: ${message}. Ответ прошу прислать на эмайл: ${email}`, // plain text body
      // html: `${email}, ${message}, ${name}`, // html body
    }, (err, info) => {
      if (err) return console.log(err);
      console.log('Email sent', info);
    });
  };

  mail();
}

module.exports = sendDataToMail;
