import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './NavBurg.css'

function NavBurg() {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -10; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return ( 
    <div className ='menunav'>
      <input type="checkbox" id="active"/>
      <label htmlFor="active" className='menu-btn'><i className="fas fa-bars"></i></label>
      <div className='wrapper'>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/clubs">Клубы</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/galery">Галерея</Link></li>
          <li><HashLink 
          to="/about#footer"
          scroll={(el) => scrollWithOffset(el)}
          >Контакты</HashLink></li>
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
