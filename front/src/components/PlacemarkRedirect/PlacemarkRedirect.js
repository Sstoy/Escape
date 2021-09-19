import React from 'react';
import { useHistory } from 'react-router-dom'


function PlacemarkRedirect({ coordinates }) {
  console.log('coordinates', coordinates)
  const history = useHistory();

  const redirectToAddress = async () => {
    console.log('coordinates.id', coordinates.id)
// if(coordinates.id === '1'){
//   // <Link to={`/componentone`}>componentone</Link>
  history.push('/componentone');
// }else if(coordinates.id === '2'){
//   // <Link to={`/componenttwo`}>componenttwo</Link>
//   history.push('/componenttwo');
// }else if(coordinates.id === '3'){
//   // <Link to={`/componentthree`}>componentthree</Link>
//   history.push('/componentthree');
// }else{
//   // <Link to={`/componentfour`}>componentfour</Link>
//   history.push('/componentfour');
}

  return (
<>
<div onClick={redirectToAddress}>{coordinates.id}</div>
<div>{coordinates.coords}</div>
</>
  );
}

export default PlacemarkRedirect;
