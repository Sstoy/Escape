import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Club from '../Club/Club';
import styles from './ClubList.module.css'

function ClubList() {
  
  const dispatch = useDispatch();

  const clubs = useSelector(state => state.clubs);

  useEffect(() => {
    if(clubs.length === 0) {
      fetch('http://localhost:5000/api/clublist', { credential: true })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'INIT_CLUBS', payload: data }))
    }

  }, [clubs.length, dispatch])

  return (
    <div className={styles.container} id="clubs">
      {clubs?.map((club) => <Club key={club.id} id={club.id} club={club} />)}
    </div>
  );
}

export default ClubList;
