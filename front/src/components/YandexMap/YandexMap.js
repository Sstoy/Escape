import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import { useState } from 'react';
import coords from './coords.json';
import logo from './logo.png';
import styles from './YandexMap.module.css';

function YandexMap() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const mapState = {
    center: [59.91807199347784, 30.304908500000003],
    zoom: 8
  }

  return (
    <>
      {/* <YMaps query={{ apikey: '27544797-3131-4759-9f4b-54f17c827eb2&lang=ru_RU', }} version={"2.1"}> */}
      <YMaps>
        <div className={styles.mapContainer}>
          <Map state={mapState} >
            <ZoomControl options={{ float: 'left' }} />
            <Placemark geometry={[lat, lng]} />

            {coords.map((coordinates, idx) => (
              <Placemark className={styles.ymapsImage}
                key={idx}
                geometry={coordinates}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: logo,
                  iconImageSize: [30, 42],
                  iconImageOffset: [-5, -38],
                }}
              />
            ))}

          </Map>
        </div>
      </YMaps>
    </>
  );
}
export default YandexMap;
