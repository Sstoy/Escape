import React from 'react';

import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import RunText from '../RunText/RunText';
import YandexMap from '../YandexMap/YandexMap';

import styles from './MainPage.module.css'
import NewsList from '../NewsList/NewsList';

function MainPage(props) {
  // const footerRef = useRef();
  
  return (
    <div className={styles.mainpage} id="mainPage">
      <div className={styles.runtext}>
        <RunText />
      </div>
      <div className={styles.map_promo}>
        <Promo />
        <YandexMap />
      </div>
      <div className={styles.news}>
        <NewsList />
      </div >
      < Footer />
    </div>
  );
}

export default MainPage;
