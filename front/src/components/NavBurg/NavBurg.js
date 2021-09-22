import React from 'react';
import { Link } from 'react-router-dom';
import './NavBurg.css'

function NavBurg() {

  return ( 
    <div className ='menunav'>
      <input type="checkbox" id="active"/>
      <label htmlFor="active" className='menu-btn'><i className="fas fa-bars"></i></label>
      <div className='wrapper'>
        <ul>
          <li><Link  to="/">Главная</Link></li>
          <li><Link to="/clubs">Клубы</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/galery">Галерея</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
      </ul>
      </div>
    <div className="content">
        <div className="title">
    </div>
      <p>
      </p>
      </div> 
    </div>
   
  );
}

export default NavBurg;
