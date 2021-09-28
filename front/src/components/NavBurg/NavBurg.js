import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavBurg.css'

function NavBurg() {

  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <div className='menunav'>
      <input type="checkbox" id="active" onChange={() => setCheckedInput(!checkedInput)} checked={checkedInput ? 'checked' : null} />

      <label htmlFor="active" className='menu-btn'>
        <i className="fas fa-bars"></i></label>
      <div className='wrapper'>
        <ul>
          <li
            onClick={() => setCheckedInput(false)}
          ><HashLink to="/#mainPage">Главная</HashLink></li>
          <li
            onClick={() => setCheckedInput(false)}
          ><HashLink to="/clubs#clubs">Клубы</HashLink></li>
          <li
            onClick={() => setCheckedInput(false)}
          ><HashLink to="/about#aboutHeader">О нас</HashLink></li>
          <li
            onClick={() => setCheckedInput(false)}
          ><HashLink to="/galery#galeryHeader">Галерея</HashLink></li>
          <li
            onClick={() => setCheckedInput(false)}
          ><HashLink
            to="/#mainPage"
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
