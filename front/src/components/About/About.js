import React from 'react';
import styles from './About.module.css';

function About(props) {
  return (
    <div className={styles.about}>
      <div className={styles.about_content}>
        <h1 className={styles.about_title}>Наши преимущества</h1>
      </div>
      <div className={styles.about_text}>

        <div className={styles.about_adv}>
          <img src={"https://thumb.tildacdn.com/tild6331-3836-4163-a262-303335613838/-/cover/561x358/center/center/-/format/webp/IMG_2704_2.jpg"} alt="" />
          <div className={styles.about_adv_text_right}>
            <h2>Комфорт и атмосфера</h2>
            <div className={styles.about_text_p}>
            Мы долго работали над тем, что бы у нас вы смогли чувствовать себя комфортно и погрузиться в мир игр.
          </div>
          </div>
        </div>

        <div className={styles.about_adv}>
          <div className={styles.about_adv_text_left}>
            <h2>Топовое железо</h2>
            <p>В наших клубах установлено самые современные компоненты способные выдержать любые нагрузки
              на ультрах.</p>
          </div>
          <img src={"https://thumb.tildacdn.com/tild6536-3130-4334-a135-623566343030/-/cover/500x361/center/center/-/format/webp/IMG_7969_2.jpg"} alt="" />
        </div>

        <div className={styles.about_adv}>
          <img src={"https://thumb.tildacdn.com/tild3030-6161-4930-b434-666232663332/-/cover/561x361/center/center/-/format/webp/IMG_1450_2.jpg"} alt="" />
          <div className={styles.about_adv_text_right}>
            <h2>Админ-поддержка 24/7</h2>
            <div className={styles.about_text_p}>
            Вы всегда можете рассчитывать на помощь администратора если вдруг, что-то пойдет не так.
            </div>
          </div>
        </div>

        <div className={styles.about_adv}>
          <div className={styles.about_adv_text_left}>
          <h2>Чистота и порядок</h2>
          <p>В течении смены периодически администратор протирает стол и девайсы, производит дезинфекцию клавиатур,
          мышек, столов, мониторов, так что вы можете быть спокойны за гигиену.</p>
          </div>
          <img src={"https://thumb.tildacdn.com/tild6566-6336-4432-a335-396630333031/-/cover/500x361/center/center/-/format/webp/IMG_6471_2.jpg"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
