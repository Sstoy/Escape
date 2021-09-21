import React from 'react';
import styles from './promo.module.css'

function Promo() {
  return (
    <div className={styles.promo}>
      <span className={styles.span}>Получи два часа бесплатно! или час</span>
      <div className={styles.button}></div>
    </div>
  );
}

export default Promo;
