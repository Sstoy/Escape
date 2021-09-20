/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css'

function Nav() {
  return (
    <header>
      <img src="https://sun9-73.userapi.com/s/v1/ig2/a4ur6dFk3Q7Ac9Ga4HPkaIaq2XFko3ABUsR5VYu4Y_OisBij_j7kCwnKKzp0sJT5yVksHp6WHqDajeE3V4SnQaXl.jpg?size=50x50&quality=96&crop=221,189,665,665&ava=1" alt=""/>
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
