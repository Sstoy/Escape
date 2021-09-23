import React from 'react';
import styles from './Success.module.css'

function Success() {
  return (
    <div className={styles.success}>
      <span className={styles.span}>СПАСИБО ЗА РЕГИСТРАЦИЮ! СКАЖИТЕ АДМИНИСТРАТОРУ КЛУБА ВАШ НОМЕР ТЕЛЕФОНА.</span>
    </div>
  );
}

export default Success;
