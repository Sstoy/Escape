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
      <span className={styles.span}>Зарегистрируйся и получи 2 часа игры в любом из наших компьютерных клубов!</span>
      <div className={styles.button} onClick={getModal}></div>
    </div>}
    </>
  );
}

export default Promo;
