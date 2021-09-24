import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './Reg.module.css';

function AdminTable(props) {
  const inputPhone = useRef(null);
  const isAdmin = useSelector(state => state.isAdmin);
  const history = useHistory();
  const dispatch = useDispatch();

  const checkUser = () => {
    // eslint-disable-next-line no-useless-escape
    const regexp = /[\+][7]\d{3}\d{3}\d{2}\d{2}/gm;

    if (inputPhone.current.value.match(regexp)) {
      fetch('http://localhost:5000/api/user-check', {
        method: 'POST',
        body: JSON.stringify({
          phone: inputPhone.current.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(user => {
          if (user.phone) {
            dispatch({ type: 'INIT_USER', payload: user })
            history.push(`/user/${user.id}`)
          } else {
            history.push('/user/absent')
          }
        })
    } else {
      console.error('Данные введены в неверном формате')
    }
  }

  return (
    <>
      {isAdmin === true ?
        <>
          <div className={styles.adminForm}>
            <h2>Администрирование сайта Escape</h2>
            <div className={styles.form}>
              <input
                ref={inputPhone}
                id="tel"
                className={styles.input}
                type="tel"
                placeholder="Номер телефона пользователя"
                required
              />
              <button onClick={checkUser} type="text" className={styles.submit}>Проверить пользователя</button>
            </div>

            <div className={styles.form}>
              <button onClick={() => { history.push() }} type="text" className={styles.submit}>Изменить цены</button>
            </div>
          </div>
        </>
        :
        <>
          <div className={styles.adminForm}>
            <h2>Пройдите аутентификацию</h2>
            <div className={styles.form}>
              <button onClick={() => history.push('/admin')} type="text" className={styles.submit}>К форме аутентификации</button>
            </div>
          </div>
        </>}
    </>
  );
}

export default AdminTable;
