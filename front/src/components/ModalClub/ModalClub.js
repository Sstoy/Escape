import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

function ModalClub({ club }) {

  const { id } = useParams();

  const clubs = useSelector(state => state.reducer.clubs)
  const currentClub = clubs.find(el => el.id === +id)

  return (
      <div >
        <div >
          <h2>
            {currentClub.name}
          </h2>
          <p>{currentClub.address}</p>
          <a href={`tel:${currentClub.phone}`}>{currentClub.phone}</a>
          <p>{currentClub.computers} игровых PC</p>
          <p>Круглосуточно (24/7)</p>
          <button>Цены</button>
          <button>Компьютеры</button>
        </div>
      </div>
  );
}

export default ModalClub;
