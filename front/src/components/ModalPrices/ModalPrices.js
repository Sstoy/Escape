import './modal.css';
import React from 'react';


function ModalPrices({ club, active, setActive, prices }) {
  return (

    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <div className="noneFlex">Escape {club?.name}</div>
        <div className="bigFlex">
          {prices?.map((el) => {
            return <div className="prices">
              <div className="price">
                {
                  el.room === 'common' ?
                    <p className="roomStyle">Общий зал:</p> :
                    <p className="roomStyle">VIP зал:</p>
                }
                <p>Цена за 1 час: <span>{el.onehour}</span></p>
                <p>Цена за 5 часов: <span>{el.fivehours}</span> </p>
                <p>Ночной пакет будни: <span>{el.nightweekday}</span> </p>
                <p>Ночной пакет выходные: <span>{el.nightweekend}</span> </p>
                <p>Утренний пакет: <span>{el.morning}</span> </p>
                <p>Цена за сутки: <span>{el.twentyfourhours}</span> </p>
                {el.PS ?
                  <p> Playstation за 1 час: <span>{el.PS}</span> </p>
                  :
                  <p></p>
                }
              </div>
              {/* {(el.PS) ? <p>Цена за 1 час PS</p> : el.PS} */}
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default ModalPrices;
