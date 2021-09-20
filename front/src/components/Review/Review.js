import React from 'react';
// import './review.css'
function Review(props) {
  return (
    <div className='yandex_review'>
      <div className='reviewsmap'>
        <iframe className='iframe'  src="https://yandex.ru/maps-reviews-widget/175271499615?comments"></iframe>
        <a className='amap' href="https://yandex.ru/maps/org/kompyuterny_klub_escape/175271499615/" target="_blank" >Компьютерный клуб Escape на карте Санкт‑Петербурга — Яндекс.Карты</a></div>
    </div>
  );
}

export default Review;
