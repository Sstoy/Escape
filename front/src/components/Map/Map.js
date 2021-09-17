import React from 'react';
import styles from './Map.module.css';
import { YMaps } from 'react-yandex-maps';

function Map(props) {

  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('map', {
  //     center: [59.91807199347784, 30.304908500000003],
  //     zoom: 9,
  //   }, {
  //     searchControlProvider: 'yandex#search'
  //   }),

  //     myPlacemarkFour = new ymaps.Placemark([59.8548470642688, 30.212112499999996], {
  //       hintContent: 'Ленинский проспект 92к1',
  //       balloonContent: 'Ленинский проспект 92к1'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: './img/logo.png',
  //       // Размеры метки.
  //       iconImageSize: [30, 42],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-5, -38]
  //     }),

  //     myPlacemarkOne = new ymaps.Placemark([60.07451356399184, 30.331777499999962], {
  //       hintContent: 'Валерия Гаврилина, дом 3 корпус 1',
  //       balloonContent: 'Валерия Гаврилина, дом 3 корпус 1'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: './img/logo.png',
  //       // Размеры метки.
  //       iconImageSize: [30, 42],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-5, -38]
  //     }),

  //     myPlacemarkTwo = new ymaps.Placemark([59.92181306419169, 30.459400999999986], {
  //       hintContent: 'Проспект Пятилеток 8к1',
  //       balloonContent: 'Проспект Пятилеток 8к1'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: './img/logo.png',
  //       // Размеры метки.
  //       iconImageSize: [30, 42],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-5, -38]
  //     }),


  //     myPlacemarkThree = new ymaps.Placemark([59.96190356413901, 30.291478999999995], {
  //       hintContent: 'Большая Зеленина 15',
  //       balloonContent: 'Большая Зеленина 15'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: './img/logo.png',
  //       // Размеры метки.
  //       iconImageSize: [30, 42],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-5, -38]
  //     });
      

  //   myMap.geoObjects
  //     .add(myPlacemarkFour)
  //     .add(myPlacemarkOne)
  //     .add(myPlacemarkTwo)
  //     .add(myPlacemarkThree)
  // });

  return (
    <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [59.91807199347784, 30.304908500000003], zoom: 9 }} 
      onAPIAvailable={function () { console.log('API loaded'); }}
      />
    </div>
  </YMaps>
  );
}

export default Map;
