import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import styles from './Reg.module.css'

function AdminForm(props) {

  const dispatch = useDispatch();
  const history = useHistory()

  const inputPhone = useRef(null);
  const inputLogin = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const authAdminHandler = () => {
    // eslint-disable-next-line no-useless-escape
    const regexp = /[\+][7]\d{3}\d{3}\d{2}\d{2}/gm;

    if (inputPhone.current.value.match(regexp)) {
      fetch('http://localhost:5000/api/admin', {
        method: 'POST',
        body: JSON.stringify({ 
          email: inputEmail.current.value,
          password: inputPassword.current.value,
          login: inputLogin.current.value,
          phone: inputPhone.current.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(message => {
        if(message.isAdmin){
          dispatch({type:'INIT_ADMIN', payload: message })
          history.push('/admin-site')
        } else {
          history.push('/admin')
        }
      })
    } else {
      console.error('Данные введены в неверном формате')
    }
  }

  return (
    <div className={styles.adminForm}>
      <h2>Администрирование сайта Escape</h2>
      <div className={styles.form}>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <label htmlFor="Введите login"></label>
          <input ref={inputLogin}
            id="login"
            className={styles.input}
            type="text"
            placeholder="login"
            required
          />
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <label htmlFor="Введите номер телефона"></label>
          <input ref={inputPhone}
            id="phone"
            className={styles.input}
            type="tel"
            placeholder="Phone: +79123456789"
            pattern="[+7][0-9]{9}"
            required
          />
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <label htmlFor="Введите email"></label>
          <input ref={inputEmail}
            id="email"
            className={styles.input}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <label htmlFor="Введите пароль"></label>
          <input ref={inputPassword}
            id="password"
            className={styles.input}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="text" onClick={authAdminHandler} className={styles.submit}>Войти</button>
      </div>
    </div>
  );
}

export default AdminForm;
