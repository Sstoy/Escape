import React from 'react';
import  './news.css'


function News({news}) {
  return (
    <div>
      <p className='x'>{news?.text}</p>
      <p className='x'>{news?.ref}</p>
    </div>
  );
}

export default News;
