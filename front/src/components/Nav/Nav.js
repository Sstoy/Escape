/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import img1 from './logo.png'

function Nav() {
  return (
    <header className={styles.nav}>
      <img className={styles.logo_img} src={img1} alt=""/>
      <nav>
        <ul>
          <li className={styles.li}><Link className={styles.a} to="/">Главная</Link></li>
          <li className={styles.li}><Link className={styles.a} to="/clubs">Клубы</Link></li>
          <li className={styles.li}><Link className={styles.a} to="/about">О нас</Link></li>
          <li className={styles.li}><Link className={styles.a} to="/galery">Галерея</Link></li>
          <li className={styles.li}><Link className={styles.a} to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
