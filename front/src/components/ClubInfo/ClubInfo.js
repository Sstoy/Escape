import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styles from './ClubInfo.module.css';
import ModalComps from '../ModalComps/ModalComps';
import ModalPrices from '../ModalPrices/ModalPrices';
import { useHistory } from 'react-router-dom'

function ClubInfo() {
  const { id } = useParams();
  const clubs = useSelector(state => state.clubs);
  const prices = useSelector(state => state.prices);
  const computers = useSelector(state => state.computers);

  const history = useHistory();
  const [modalActive, setModalActive] = useState(false);
  const [modalCompActive, setModalCompActive] = useState(false);
  
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
    if (computers.length === 0) {
      fetch('http://localhost:5000/api/computers', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_COMPUTERS', payload: data }))
    }
  }, [clubs.length, prices.length, computers.length, dispatch])

  const club = clubs.filter((club) => club.id === Number(id));
  const currentClub = club[0];
  
  const clubPrice = prices.filter((price) => price.ClubId === Number(id))
  const clubComputers = computers.filter((comp) => comp.ClubId === Number(id));

  return (
    <div className={styles.contentClub}>
      <div className={styles.imgClubInfo}>
        <img src={`http://localhost:5000/club-imgs/${id}.jpeg`} alt="" />
      </div>
      <div className={styles.infoClub}>
        <div className={styles.clubName}>
        Escape {currentClub?.name}
        </div>
        <div>
          <button onClick={() => setModalActive(true)}>Цены</button>
          <button onClick={() => setModalCompActive(true)}>Компьютеры</button>
        </div>
        <p>{currentClub?.address}</p>
        <a className={styles.phoneHref}href={`tel:${currentClub?.phone}`}>{currentClub?.phone}</a>
        <p>{currentClub?.computers} игровых PC</p>
        <p>Круглосуточно (24/7)</p>
        <button className={styles.buttonGoback} onClick={() => history.goBack()}>Назад</button>

        <ModalPrices club={currentClub} prices={clubPrice} active={modalActive} setActive={setModalActive} />
        <ModalComps club={currentClub} computers={clubComputers} active={modalCompActive} setActive={setModalCompActive} />
      </div>
    </div>
  );
}

export default ClubInfo;
