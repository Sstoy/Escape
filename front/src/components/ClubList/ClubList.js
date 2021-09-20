import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalClub from '../ModalClub/ModalClub';

function ClubList(props) {

  const dispatch = useDispatch();
  const clubs = useSelector(state => state.reducer.clubs);

  useEffect(() => {
    fetch('http://localhost:4000/api/clublist', { credential: true })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'INIT_CLUBS', payload: data }))

  }, [dispatch])


  return (
    <div className="container">
      {clubs?.map((club) => <ModalClub id={club.id} club={club} />)}
    </div>
  );
}

export default ClubList;
