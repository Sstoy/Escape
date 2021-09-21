import React from 'react';
import './NavBurg.css'

function NavBurg() {
  return (   
    <div className ='menunav'>
      <input type="checkbox" id="active"/>
      <label for="active" className="menu-btn"><i className="fas fa-bars"></i></label>
      <div className="wrapper">
        <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Feedback</a></li>
      </ul>
      </div>
      <div className="content">
            <div className="title">
    </div>
      <p>
      </p>
      </div> 
    </div>
   
  );
}

export default NavBurg;
