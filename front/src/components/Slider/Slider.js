import React, { useState } from 'react';
import uuid from 'react-uuid';

import Slide from '../Slide/Slide';
import style from './styles.module.css'

import src1 from './1.jpeg'
import src2 from './2.jpeg'
import src3 from './3.jpeg'
import src4 from './4.jpeg'
import src5 from './5.jpeg'
import src6 from './6.jpeg'
import src7 from './7.jpeg'
import src8 from './8.jpeg'
import src9 from './9.jpeg'
import src10 from './10.jpeg'


function Slider(props) {
  const [slideActive, setSlideActive] = useState('slide10');
  
  const images = [
    { src: src1, id: 'slide1' },
    { src: src2, id: 'slide2' },
    { src: src3, id: 'slide3' },
    { src: src4, id: 'slide4' },
    { src: src5, id: 'slide5' },
    { src: src6, id: 'slide6' },
    { src: src7, id: 'slide7' },
    { src: src8, id: 'slide8' },
    { src: src9, id: 'slide9' },
    { src: src10, id: 'slide10' },
  ]


  return (
    <>
      <h1 className={style.h1} id ="galeryHeader">Атмосфера в наших клубах:</h1>
    <div className={style.container}>
      {images.map((slide) => < Slide  key={uuid()} slideActive= {slideActive} setSlideActive ={setSlideActive} src ={slide.src} id={slide.id}/>)}
    </div>
    </>
  );
}

export default Slider;
