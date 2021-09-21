import './modal.css';
import React from 'react';

function ModalComps({ active, setActive, computers }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {computers?.map((el) => {
          return <div className="prices">
            <div className="price">
              <p>Зал: {el.room}</p>
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
  );
}

export default ModalComps;
