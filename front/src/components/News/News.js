import React from 'react';
import './news.scss'


function News({ news }) {
  console.log(news);
  return (
    <>
    
    <a href={news?.href} target="_blank" rel="noreferrer">{news?.text}</a>
    </>
  );
}

export default News;
