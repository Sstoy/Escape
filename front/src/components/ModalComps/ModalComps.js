import React from 'react';

function ModalComps({ club, active, setActive, computers }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <div className="noneFlex">Escape {club?.name}</div>
        <div className="bigFlex">
          {computers?.map((el) => {
            return <div className="prices">
              <div className="price">
                {
                  el.room === 'common' ?
                    <p className="roomStyle">Общий зал:</p> :
                    <p className="roomStyle">VIP зал:</p>
                }
                <p>Видеокарта: {el.graphics}</p>
                <p>Процессор: {el.cpu}</p>
                <p>Монитор: {el.monitor}</p>
                <p>ОЗУ: {el.ram}</p>
                <p>Клавиатура: {el.keyboard}</p>
                <p>Мышь: {el.mouse}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default ModalComps;
