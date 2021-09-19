import React from 'react';
import './runText.css'

function RunText(props) {
  return (
    <svg width="100px" height="200px" viewBox="-50 -50 200 300" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1">
      <path id="path">
        <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" repeatCount="indefinite" />
      </path>
      <text fontSize="22" fontFamily="Montserrat" fill='hsla(36, 95%, 85%, 1)'>
        <textPath xlinkHref="#path">Приходи играть в CS
        </textPath>
      </text>
    </svg>
  );
}

export default RunText;
