const router = require('express').Router();
const parse = require('../parsers/parser');
const { Club, Price, News } = require('../database/models');

router.get('/news', async (req, res) => {
  const news = await News.findAll({
    raw: true,
  });

  if (news.length > 0) {
    const thisMomentDate = new Date().getTime();
    const newsParseDate = news[0].createdAt.getTime();

    if (thisMomentDate - newsParseDate < (12 * 60 * 60 * 1000)) {
      res.status(200).json(news);
    } else {
      const parsingNews = await parse();

      if (parsingNews) {
        await News.destroy({
          where: {
          },
        });

        const newsPushingToDataBase = await News.bulkCreate(parsingNews);

        if (newsPushingToDataBase) {
          res.status(200).json(newsPushingToDataBase);
        }
      } else {
        res.status(200).json(news);
      }
    }
  } else {
    const parsingNews = await parse();
    const newsPushingToDataBase = await News.bulkCreate(parsingNews);

    if (newsPushingToDataBase) {
      res.status(200).json(newsPushingToDataBase);
    } else {
      res.status(200).json(news);
    }
  }
});

router.get('/clublist', async (req, res) => {
  const clubs = await Club.findAll({
    attributes: ['id', 'name', 'address', 'phone', 'computers'],
    raw: true,
  });
  res.json({ clubs });
});

router.get('/prices', async (req, res) => {
  const prices = await Price.findAll({
    attributes: [
      'id',
      'ClubId',
      'room',
      'onehour',
      'fivehours',
      'nightweekday',
      'nightweekend',
      'morning',
      'twentyfourhours',
      'PS',
    ],
    raw: true,
  });
  res.json({ prices });
});

module.exports = router;
