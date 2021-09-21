/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css'
import img1 from './logo.png'

function Nav() {
  return (
    <header className='nav'>
      <Link to='/'>
      <img className='logo_img' src={img1} alt=""/>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/clubs">Клубы</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/galery">Галерея</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
