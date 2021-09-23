import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import styles from './NewsList.module.css'

import News from '../News/News';

function NewsList() {
  const dispatch = useDispatch()
  const allNews = useSelector(state => state.news)

  useEffect(() => {
    if (allNews.length === 0) {
      fetch('http://localhost:5000/api/news')
        .then(res => res.json())
        .then(news => dispatch({ type: 'INIT_NEWS', payload: news.slice(0, 5) }))
    }
  }, [allNews.length, dispatch])

  return (
    <div className='news-list'>
      <span className={styles.span}>Актуальные новости игровой индустрии:</span>
      <ol className="gradient-list">
        {allNews?.map((news) => <li> < News key={uuid()} news={news} /> </li>)}
      </ol>
    </div>
  );
}

export default NewsList;
