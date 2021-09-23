import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavBurg.css'

function NavBurg() {
  return ( 
    <div className ='menunav'>
      <input type="checkbox" id="active"/>
      <label htmlFor="active" className='menu-btn'><i className="fas fa-bars"></i></label>
      <div className='wrapper'>
        <ul>
          <li><HashLink  to="/#mainPage">Главная</HashLink></li>
          <li><HashLink to="/clubs#clubs">Клубы</HashLink></li>
          <li><HashLink to="/about#aboutHeader">О нас</HashLink></li>
          <li><HashLink to="/galery#galeryHeader">Галерея</HashLink></li>
          <li><HashLink 
          to="/about#footer"
          scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
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
