const axios = require('axios');
const cheerio = require('cheerio');

const parse = async () => {
  const getHtml = async (url) => {
    const { data } = await axios.get(url);

    return cheerio.load(data);
  };

  const selector = await getHtml('https://www.cybersport.ru/news');

  const newsList = selector('.cs-news__text');

  const allNews = [];

  newsList.each((i, element) => {
    const news = selector(element).find('a.cs-news__link').text();
    const ref = selector(element).find('a.cs-news__link').attr('href');
    const newsObj = {
      news,
      ref,
    };

    allNews.push(newsObj);
  });
  return allNews;
};

module.exports = parse;
