import './modal.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ModalComps({ active, setActive, computers }) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:5000/api/computers', { credential: true })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'INIT_COMPUTERS', payload: data }))
  }, [dispatch])
  
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {computers?.map((el) => {
          return <div className="prices">
            <div className="price">
              {
                el.room === 'common' ?              
                <p>Общий зал:</p> : 
                <p>VIP зал:</p> 
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
  );
}

export default ModalComps;
