import React from 'react';
import styles from './Fail.module.css'

function Fail(props) {
  return (
      <div className={styles.fail}>
      <span className={styles.span}>Вы уже зарегистрированы, обратитесь к администратору!</span>
    </div>
  );
}

export default Fail;
