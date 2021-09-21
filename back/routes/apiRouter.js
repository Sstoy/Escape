const router = require('express').Router();
const { Club, Price } = require('../database/models');

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
