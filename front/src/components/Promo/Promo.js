import React, { useState } from 'react';
import Registration from '../Registration/Registration';
import styles from './Promo.module.css'

function Promo() {

  const [modal, setModal] = useState(false)

  const getModal = () => {
    setModal(true)
  }

  return (
    <>
    {modal ? <Registration /> : <div className={styles.promo}>
      <span className={styles.span}>Получи два часа бесплатно! или час</span>
      <div className={styles.button} onClick={getModal}></div>
    </div>}
    </>
  );
}

export default Promo;
