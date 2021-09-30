import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css'

function Blog(props) {
  return (
    <div className={styles.blog}>
      <div className={styles.blog_content}>
        <h2 className={styles.blog_title}>Escape блог</h2>
        <p className={styles.blog_one_text}>
          Про индустрию киберспорта и не только</p>
      </div>


      <div className={styles.wrapper}>
        <div className={styles.container}>

          <div className={styles.card}>
            <div className={`${styles.face} ${styles.face1}`}>
              <div className={styles.content}>
                <Link to="/blog/1">
                <h2>
                  5 причин посетить игровой компьютерный клуб
                </h2>
                <p>
                  Компьютерный клуб в наши дни все так же остается популярным выбором молодежи в том числе и в СПБ...
                </p>
              </Link>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <h2>01</h2>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <Link to="/blog/2">
                <h2>
                  Открытие компьютерного клуба
                </h2>
                <p>
                  Актуальность компьютерных клубов совсем не угасает как могло показаться,
                  напротив, они становятся все популярнее, в особенности среди молодежи...
                </p>
                </Link>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <h2>02</h2>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <Link to="/blog/3">
                <h2>
                  Особенности работы кибер клуба
                </h2>
                <p>
                  Специальный кибер клуб предлагает множество доступных развлечений и готов принять
                  большую аудиторию за счёт применения нового оборудования и уникальных наработок...
                </p>
                </Link>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <h2>03</h2>
          </div>
        </div>

      </div>

    </div>
    </div >


  );
}

export default Blog;
