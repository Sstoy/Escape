/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css'
import img1 from './logo.png'

function Nav() {
  return (
    <header className='nav'>
      <img className='logo_img' src={img1} alt=""/>
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/clubs">Клубы</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/galery">Галерея</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
