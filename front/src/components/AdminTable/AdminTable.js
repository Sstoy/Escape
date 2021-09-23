import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './Reg.module.css'

function AdminTable(props) {
  const isAdmin = useSelector(state => state.isAdmin)
  const history = useHistory();
  return (
    <>
      {isAdmin ?
        <>
          <div className={styles.adminForm}>
            <h2>Администрирование сайта Escape</h2>
            <div className={styles.form}>
              <button onClick={() => {history.push()}} type="text" className={styles.submit}>Проверить</button>
              <button onClick={() => {history.push()}} type="text" className={styles.submit}>Изменить цены</button>

            </div>
          </div>
        </>
        :
        <>
          <div className={styles.adminForm}>
            <h3>Уважаемая Ирландская сучка, пройдите аутентификацию</h3>
            <div className={styles.form}>
              <button onClick={()=> history.push('/admin')} type="text" className={styles.submit}>К форме аутентификации</button>
            </div>
          </div>
        </>}
    </>
  );
}

export default AdminTable;
