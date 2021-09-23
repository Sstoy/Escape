import React from 'react';

import style from './styles.module.css'

function Slide({src, id, slideActive, setSlideActive}) {

  
  return (
    <div
        id={id}
        className={slideActive === id ? `${style.slide} ${style.active}` : `${style.slide}`}
        style={{ backgroundImage: `url(${src})` }}
        onClick={() => setSlideActive(id)}
      >
      </div>
  );
}

export default Slide;
