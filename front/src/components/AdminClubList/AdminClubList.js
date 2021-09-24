import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import uuid from 'react-uuid';
import AdminClub from '../AdminClub/AdminClub';
import styles from './Reg.module.css';


function AdminClubList(props) {
  const clubs = useSelector(state => state.clubs);
  const isAdmin = useSelector(state => state.isAdmin);
  const history = useHistory()
  
  return (
    isAdmin === true ?
    clubs.map((club) => < AdminClub key={uuid()} club={club}/>)
    :
    <>
          <div className={styles.adminForm}>
            <h3>Пройдите аутентификацию</h3>
            <div className={styles.form}>
              <button onClick={() => history.push('/admin')} type="text" className={styles.submit}>К форме аутентификации</button>
            </div>
          </div>
        </>
  );
}

export default AdminClubList;
