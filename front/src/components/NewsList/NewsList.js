import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';


import News from '../News/News';

function NewsList() {
  const dispatch = useDispatch()

  useEffect(() => {

    fetch('http://localhost:4000/')
      .then(res => res.json())
      // .then(data => console.log(data))

      .then(news => dispatch({ type: 'INIT_NEWS', payload: news.slice(0, 8) }))

  }, [dispatch])

  // const x = useSelector(state => state)

  // console.log(x.news);

  const allNews = useSelector(state => state.news)
  // console.log(allNews);

  return (
    <div>
      {allNews?.map((news) => < News key={uuid()} news={news} />)}
    </div>

  );
}

export default NewsList;
