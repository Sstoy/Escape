import React from 'react';
import Footer from '../Footer/Footer';
import News from '../News/News';
import Promo from '../Promo/Promo';
import RunText from '../RunText/RunText';
import YandexMap from '../YandexMap/YandexMap';

import styles from './MainPage.module.css'

function MainPage(props) {
  return (
    <div className={styles.mainpage}>
      <div className={styles.runtext}>
      <RunText />
      </div>
      <div className={styles.map_promo}>
      <YandexMap />
      <Promo />
      </div>
      <News />
      <Footer />
    </div>
  );
}

export default MainPage;
