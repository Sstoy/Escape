import React from 'react';
import styles from './OurComputers.module.css'

function OurComputers(props) {
  return (
    <div className={styles.our_computers}>
      <div className={styles.our_computers_content}>
        <h1 className={styles.our_computers_title}>Наши компьютеры</h1>
      </div>
      <div className={styles.our_computers_text}>
        <div className={styles.our_computers_types}>
          <h2>Обычный зал </h2>
          <h2>Вип зал</h2>
        </div>
        <div className={styles.our_computers_types}>
          <img src={"https://thumb.tildacdn.com/tild3934-3430-4235-a164-626261333166/-/resize/360x/-/format/webp/00001234.png"} alt="" />
          <ul>
            <li>Видеокарта:
              GTX 1660 6GB</li>
            <li>Процессор:
              AMD Ryzen 5 1600 3.2/3.6 GHz</li>
            <li> Монитор:
              Aoc 27" 144Hz</li>
            <li>ОЗУ:
              2x8GB 2666 MHz</li>
            <li>Клавиатура:
              Rapier</li>
            <li>Мышь:
              Logitech G102 / X7</li>
          </ul>

          <img src={"https://thumb.tildacdn.com/tild6562-3233-4165-a632-323933663034/-/resize/320x/-/format/webp/00000.png"} alt="" />
          <ul>
            <li>Видеокарта:
              RTX 2070 8GB</li>
            <li>Процессор:
              AMD Ryzen 3600 4.2 GHz</li>
            <li>Монитор:
              Acer 25" 240Hz</li>
            <li>ОЗУ:
              2x8GB 3000 MHz</li>
            <li>Клавиатура:
              Hyper X</li>
            <li>Мышь:
              Logitech G102 / X7</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurComputers;
