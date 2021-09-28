import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './Reg.module.css';


function User(props) {
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
 
  const changeStatus = () => {
    fetch('http://localhost:5000/api/user-check', {
        method: 'PUT',
        body: JSON.stringify({
          user,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(user => {
          console.log(user);
          if (user.phone) {
            dispatch({ type: 'CHANGE_PROMO_STATUS', payload: user })
            history.push(`/user/${user.id}`)
          } else {
            history.push('/user/absent')
          }
        })

    } 
  
  return (
    <>
    { user ?
      <div className={styles.contentClub}>
        <div className={styles.infoClub}>
          <div className={styles.clubName}>
            Escape
          </div>
          <p> Пользователь с таким номером: {user?.phone} существует в базе</p>
          <p> Результаты участия в акциях: </p>
          {user?.promoActivated === true ?
            <div>
              <p> "2 часа бесплатной игры в любом из клубов за регистрацию" : </p>
              <p> Заявка подана </p>
              <p><h2>Статус:</h2></p>
              <p> Услуга ОКАЗАНА </p>
              <div className={styles.form}>
                <button onClick={changeStatus} type="text" className={styles.submit}>Изменить статус акции</button>
              </div>
            </div>
            :
            <div>
              <p> "2 часа бесплатной игры в любом из клубов за регистрацию" : </p>
              <p> Заявка подана </p>
              <p><h2>Статус:</h2></p>
              <p> Услуга НЕ ОКАЗАНА </p>
              <div className={styles.form}>
                <button onClick={changeStatus} type="text" className={styles.submit}>Изменить статус акции</button>
              </div>
            </div>}
          <div className={styles.form}>
            <button onClick={() => history.push('/admin-site')} type="text" className={styles.submit}>Вернуться назад</button>
          </div>
        </div>
      </div>
      :
      <div className={styles.adminForm}>
        <h3>Пользователь в базе отсутствует</h3>
        <div className={styles.form}>
          <button onClick={() => history.push('/admin-site')} type="text" className={styles.submit}>Вернуться назад</button>
        </div>
      </div>}
      </>
  );
}

export default User;
