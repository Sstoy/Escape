import React from 'react';
import './runText.css'

function RunText(props) {
  return (
    <div>
    <svg width="500px" height="200px" viewBox="-80 -80 500 300" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1">
      <path id="path">
        <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="3.8s" begin="0s" repeatCount="indefinite" />
      </path>
      <text fontSize="80px" fontFamily="Montserrat" fill='hsla(36,95%, 95%, 1)'>
        <textPath  xlinkHref="#path">Приходи играть в CS, брат
        </textPath>
      </text>
    </svg>
    </div>
  );
}

export default RunText;
