import './modal.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Modal({ active, setActive, prices }) {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:5000/api/prices', { credential: true })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'INIT_PRICES', payload: data }))
  }, [dispatch])


  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {prices?.map((el) => {
          return <div className="prices">
            <div className="price">
              <p>Зал: {el.room}</p>
              <p>Цена за 1 час: {el.onehour}</p>
              <p>Цена за 5 часов: {el.fivehours}</p>
              <p>Ночной пакет будни: {el.nightweekday}</p>
              <p>Ночной пакет выходные: {el.nightweekend}</p>
              <p>Утренний пакет: {el.morning}</p>
              <p>Цена за сутки: {el.twentyfourhours}</p>
              {el.PS ? 
              <p> Playstation за 1 час: {el.PS}</p>
                      :
              <p></p>
              }
            </div>
            {/* {(el.PS) ? <p>Цена за 1 час PS</p> : el.PS} */}
          </div>
        })}
      </div>
    </div>
  );
}

export default Modal;
