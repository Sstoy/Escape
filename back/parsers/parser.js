const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async () => {
  const getHtml = async (url) => {
    const { data } = await axios.get(url, {
      maxRedirects: 100,
    });

    return cheerio.load(data);
  };

  const selector = await getHtml('https://www.cybersport.ru/news');

  const newsList = selector('.cs-news__text');
  // console.log(newsList);

  const allNews = [];

  newsList.each((i, element) => {
    const text = selector(element).find('a.cs-news__link').text();
    const ref = selector(element).find('a.cs-news__link').attr('href');
    const newsObj = {
      text,
      ref: `https://www.cybersport.ru${ref}`,
    };
    allNews.push(newsObj);
  });
  return allNews;
};
