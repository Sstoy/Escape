import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styles from './ClubInfo.module.css'

function ClubInfo(props) {
  const { id } = useParams();
  const clubs = useSelector(state => state.clubs);
  const prices = useSelector(state => state.prices);

  const dispatch = useDispatch();

  useEffect(() => {
    if (clubs.length === 0) {
      fetch('http://localhost:5000/api/clublist', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_CLUBS', payload: data }))
    }
    if (prices.length === 0) {
      fetch('http://localhost:5000/api/prices', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_PRICES', payload: data }))
    }
  }, [clubs.length, prices.length, dispatch])

  const club = clubs.filter((club) => club.id === Number(id))
  const clubPrice = prices.filter((price) => price.ClubId === Number(id))

  return (
    <div className={styles.contentClub}>
      <div>
        <h2>

        </h2>
        <img src={`http://localhost:5000/club-imgs/${id}.jpeg`} alt="" />
        <p>{club[0]?.address}</p>
        <a href={`tel:${club[0]?.phone}`}>{club[0]?.phone}</a>
        <p>{club[0]?.computers} игровых PC</p>
        <p>Круглосуточно (24/7)</p>
      </div>
      <div className="prices">
        <div className="price">
          <p>Зал: {clubPrice[0]?.room}</p>
          <p>Цена за 1 час: {clubPrice[0]?.onehour}</p>
          <p>Цена за 5 часов: {clubPrice[0]?.fivehours}</p>
          <p>Ночной пакет будни: {clubPrice[0]?.nightweekday}</p>
          <p>Ночной пакет выходные: {clubPrice[0]?.nightweekend}</p>
          <p>Утренний пакет: {clubPrice[0]?.morning}</p>
          <p>Цена за сутки: {clubPrice[0]?.twentyfourhours}</p>
          {clubPrice[0]?.PS ?
            <p> Playstation за 1 час: {clubPrice[0]?.PS}</p>
            :
            <p></p>
          }
        </div>
        <div className="price">
          <p>Зал: {clubPrice[1]?.room}</p>
          <p>Цена за 1 час: {clubPrice[1]?.onehour}</p>
          <p>Цена за 5 часов: {clubPrice[1]?.fivehours}</p>
          <p>Ночной пакет будни: {clubPrice[1]?.nightweekday}</p>
          <p>Ночной пакет выходные: {clubPrice[1]?.nightweekend}</p>
          <p>Утренний пакет: {clubPrice[1]?.morning}</p>
          <p>Цена за сутки: {clubPrice[1]?.twentyfourhours}</p>
          {clubPrice[1]?.PS ?
            <p> Playstation за 1 час: {clubPrice[1]?.PS}</p>
            :
            <p></p>
          }
        </div>
      </div>
    </div>
  );
}

export default ClubInfo;
