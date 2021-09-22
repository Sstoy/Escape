import React, { useState, useEffect } from 'react';
import ModalPrices from '../ModalPrices/ModalPrices'
import ModalComps from '../ModalComps/ModalComps'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Club/Club.module.css';

function Club({ club }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalCompActive, setModalCompActive] = useState(false);
  const dispatch = useDispatch();

  const computers = useSelector(state => state.computers);
  const prices = useSelector(state => state.prices);

  useEffect(() => {
    if (computers.length === 0) {
      fetch('http://localhost:5000/api/computers', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_COMPUTERS', payload: data }))
    }
    if (prices.length === 0) {
      fetch('http://localhost:5000/api/prices', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_PRICES', payload: data }))
    }
  }, [computers.length, prices.length, dispatch])

  const clubComputers = computers.filter((el) => el.ClubId === club.id);
  const clubPrice = prices.filter((el) => el.ClubId === club.id);

  return (
    <div className={styles.card}>
      <div>

      <h2>
        {club?.name}
      </h2>
      <p>{club?.address}</p>
      <a className={styles.phone} href={`tel:${club?.phone}`}>{club?.phone}</a>
      <p>{club?.computers} игровых PC</p>
      <p className={styles.hours}>Круглосуточно (24/7)</p>
      <div className={styles.buttonFlex}>
        <button onClick={() => setModalActive(true)}>Цены</button>
        <button onClick={() => setModalCompActive(true)}>Компьютеры</button>
      </div>
      <ModalPrices prices={clubPrice} active={modalActive} setActive={setModalActive} />
      <ModalComps computers={clubComputers} active={modalCompActive} setActive={setModalCompActive} />
      </div>
    </div>
  );
}

export default Club;
