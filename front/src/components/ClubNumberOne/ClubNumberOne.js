import React from 'react';
import styles from './ClubNumberOne.module.css'

function ClubNumberOne(props) {
  return (
    <div className={styles.club_number_one} id="aboutHeader">
      <div className={styles.club_number_one_content}>
        <h1 className={styles.club_number_one_title}>Компьютерный клуб №1 в Санкт-Петербурге</h1>
        <p className={styles.club_number_one_text}>
          Что может быть лучше, чем провести свой выходной, гуляя с друзьями?
          Только провести это время в открытом компьютерном клубе!
          Приятные цены, качественное оборудование, большой выбор игр и крутая атмосфера
          в нашем компьютерном клубе в СПб. Проведи время с друзьями весело, и незабываемо играя в любимые игры,
          получив заряд эмоций и впечатлений!</p>
      </div>
    </div>
  );
}

export default ClubNumberOne;
