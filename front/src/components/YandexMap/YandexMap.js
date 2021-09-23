import React, { useState } from 'react';
// подключение библиотеки yandex-map, на 22 строчке можно задать api-ключ
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import coords from './coords.json';
import logo from './logo.png';
import { useHistory } from 'react-router-dom'
// стили задаем для изменения цвета фона карты, фильтр меняет также цвет лого-меток, поэтому перезаписываем стили на лого, чтобы вернуть прежний цвет лого
import './YandexMap.css';

function YandexMap() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const history = useHistory();


  // задает центровые координаты при загрузке карты
  const mapState = {
    center: [59.95675075776964,30.355681500000006],
    // [59.91807199347784, 30.304908500000003],
    zoom: 9
  }

  const redirectToAddress = (event) => {

    if (event.originalEvent.target.geometry._coordinates[0] === coords[0].coords[0]) {
      history.push('/clubs/2');
    } else if (event.originalEvent.target.geometry._coordinates[0] === coords[1].coords[0]) {
      history.push('/clubs/4');
    } else if (event.originalEvent.target.geometry._coordinates[0] === coords[2].coords[0]) {
      history.push('/clubs/3');
    } else {
      history.push('/clubs/1');
    }
  }


  return (
    <>
      {/* <YMaps query={{ apikey: '27544797-3131-4759-9f4b-54f17c827eb2&lang=ru_RU', }} version={"2.1"}> */}
      <YMaps>
        <div className='mapContainer'>
          <Map state={mapState} width='30em'
            height='27em' instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}>
            <ZoomControl options={{ float: 'left' }} />
            <Placemark geometry={[lat, lng]} />

            {/* берет координаты из json файла, задает кастомную картинку в опциях ( Валерия Гаврилина, дом 3 корпус 1 [60.07451356399184, 30.331777499999962],
Большая Зеленина 15 [59.96190356413901, 30.291478999999995], Проспект Пятилеток 8к1 [59.92181306419169, 30.459400999999986],
Ленинский проспект 92к1 [59.8548470642688, 30.212112499999996]) */}

            {coords.map((coordinates) => (
              <>
                <Placemark
                  key={coordinates.id}
                  geometry={coordinates.coords}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: logo,
                    iconImageSize: [30, 42],
                    iconImageOffset: [-5, -38],
                  }}
                  onClick={redirectToAddress}
                />
              </>
            ))}

          </Map>
        </div>
      </YMaps>
    </>
  );
}
export default YandexMap;
