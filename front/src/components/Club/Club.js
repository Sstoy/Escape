import React from 'react';

function Club({ club }) {
  return (
      <div className="face face1">
        <div className="content">
          <h2>
            {club.name}
          </h2>
          <p>{club.address}</p>
          <p>{club.phone}</p>
          <p>{club.computers} игровых PC</p>
          <p>Круглосуточно (24/7)</p>
          <button>Цены</button>
          <button>Компьютеры</button>
        </div>
      </div>
  );
}

export default Club;
