import React, { useState }from 'react';
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux';

function Club({ club }) {
  const [modalActive, setModalActive] = useState(false);
  const prices = useSelector(state => state.prices);
  const clubPrice = prices?.filter((el) => el.ClubId === club.id);

  return (
      <div className="face face1">
        <div className="content">
          <h2>
            {club.name}
          </h2>
          <p>{club.address}</p>
          <a href={`tel:${club.phone}`}>{club.phone}</a>
          <p>{club.computers} игровых PC</p>
          <p>Круглосуточно (24/7)</p>
          <button onClick={() => setModalActive(true)}>Цены</button>
          <button>Компьютеры</button>
          <Modal prices={clubPrice} active={modalActive} setActive={setModalActive}/>
        </div>
      </div>
  );
}

export default Club;
