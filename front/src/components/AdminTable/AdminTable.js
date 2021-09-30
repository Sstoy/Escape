import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './Reg.module.css';

function AdminTable(props) {
  const inputPhone = useRef(null);
  const isAdmin = useSelector(state => state.isAdmin);
  const prices = useSelector(state => state.prices);
  const clubs = useSelector(state => state.clubs);
  const computers = useSelector(state => state.computers);

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

  const addUser = () => {
    // eslint-disable-next-line no-useless-escape
    const regexp = /[\+][7]\d{3}\d{3}\d{2}\d{2}/gm;

    if (inputPhone.current.value.match(regexp)) {
      fetch('http://localhost:5000/api/user-new', {
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
      alert('Данные не введены или введены в неверном формате')
      console.error('Данные введены в неверном формате')
    }
  }

  const changePrices = () => {
    if (prices.length === 0) {
      fetch('http://localhost:5000/api/prices', { credential: true })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: 'INIT_PRICES', payload: data });
        })
    }
    if (clubs.length === 0) {
      fetch('http://localhost:5000/api/clublist', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_CLUBS', payload: data }))
    }
    if (computers.length === 0) {
      fetch('http://localhost:5000/api/computers', { credential: true })
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'INIT_COMPUTERS', payload: data }))
    }

    history.push('/admin/prices')
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
              <button onClick={addUser} type="text" className={styles.submit}>Добавить пользователя</button>

            </div>

            <div className={styles.form}>
              <button onClick={changePrices} type="text" className={styles.submit}>Изменить цены</button>
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
