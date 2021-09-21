import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';


import News from '../News/News';

function NewsList() {
  const dispatch = useDispatch()

  useEffect(() => {

    fetch('http://localhost:5000/api/news')
      .then(res => res.json())

      .then(news => dispatch({ type: 'INIT_NEWS', payload: news.slice(0, 5) }))

  }, [dispatch])

  const allNews = useSelector(state => state.news)

  return (
    <div className='news-list'>
      <ol className="gradient-list">
        {allNews?.map((news) => <li> < News key={uuid()} news={news} /> </li>)}
      </ol>
    </div>

  );
}

export default NewsList;
