import React from 'react';
import  './SocialLink.css'
function SocialLink(props) {
  return (
    <div className='socialmedia'>
           {/* <h1>Escape in Social Media:</h1> */}
      <ul className='ul'>
        <li className='li'>
          <a className='a' href="https://www.facebook.com/profile.php?id=100012512077239">
          <i className='fa fa-facebook' aria-hidden="true"></i></a>
        </li>
        <li className='li'>
          <a className='a' href="#1"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li className='li'>
          <a className='a' href="#1"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
        </li>
        <li className='li'>
          <a className='a' href="https://www.linkedin.com/in/raj-kumar-web-designer/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>
        <li className='li'>
          <a className='a' href="#1"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLink;
