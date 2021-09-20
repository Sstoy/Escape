import React from 'react';
import './news.css'


function News({ news }) {
  console.log(news);
  return (
    <div>
      <a href={news?.ref} target="_blank" rel="noreferrer">{news?.text}</a>
    </div >
  );
}

export default News;
