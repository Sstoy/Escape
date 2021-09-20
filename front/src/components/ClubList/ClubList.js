import React, { useEffect } from 'react';
// <<<<<<< ClubComponent
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Club from '../Club/Club';
import './clubs.css'

function ClubList() {
  
  const dispatch = useDispatch();
  const clubs = useSelector(state => state.clubs?.clubs);
  useEffect(() => {
    fetch('http://localhost:4000/api/clublist', { credential: true })
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'INIT_CLUBS', payload: data }))
// =======
// import { useSelector, useDispatch } from 'react-redux';
// import ModalClub from '../ModalClub/ModalClub';

// function ClubList(props) {

//   const dispatch = useDispatch();
//   const clubs = useSelector(state => state.reducer.clubs);
// console.log('clubs', clubs)

//   useEffect(() => {
//     fetch('http://localhost:4000/api/clublist', { credential: true })
//       .then((res) => res.json())
//       .then((data) => dispatch({ type: 'INIT_CLUBS', payload: data }))
     
// >>>>>>> devtest
  }, [dispatch])


  return (
    <div className="container">
      {clubs?.map((club) => <Club id={club.id} club={club} />)}
    </div>
  );
}

export default ClubList;
