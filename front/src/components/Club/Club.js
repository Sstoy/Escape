import React, { useState }from 'react';
import ModalPrices from '../ModalPrices/ModalPrices'
import ModalComps from '../ModalComps/ModalComps'
import { useSelector } from 'react-redux';
import '../ClubList/clubs.css'

function Club({ club }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalCompActive, setModalCompActive] = useState(false);
  const prices = useSelector(state => state?.prices.prices);
  const computers = useSelector(state => state?.computers);
  const clubComputers = computers?.filter((el) => el.ClubId === club.id);
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
          <button onClick={() => setModalCompActive(true)}>Компьютеры</button>
          <ModalPrices prices={clubPrice} active={modalActive} setActive={setModalActive}/>
          <ModalComps computers={clubComputers} active={modalCompActive} setActive={setModalCompActive}/>
        </div>
      </div>
  );
}

export default Club;
