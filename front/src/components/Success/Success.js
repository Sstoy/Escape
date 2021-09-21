import React from 'react';
import styles from './Success.module.css'

function Success() {
  return (
    <div className={styles.success}>
      <span className={styles.span}>Спасибо за регистрацию! Скажите администратору Ваш номер телефона.</span>
    </div>
  );
}

export default Success;
