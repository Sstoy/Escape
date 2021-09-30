/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './YandexReview.module.css'

function YandexReview(props) {
  return (
    <>
      <div className={styles.yandex_review}>
        <div className={styles.reviewsmap}>
          <iframe className={styles.iframe} src="https://yandex.ru/maps-reviews-widget/175271499615?comments"></iframe>
          <a className={styles.amap} href="https://yandex.ru/maps/org/kompyuterny_klub_escape/175271499615/" target="_blank" rel="noreferrer" >Компьютерный клуб Escape на карте Санкт‑Петербурга — Яндекс.Карты</a></div>
      </div>
    </>
  );
}

export default YandexReview;
