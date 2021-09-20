import React from 'react';
import './SocialLink.css'
// import './review.css'
function SocialLink(props) {
  return (
    <div className='socialmedia'>            
      <div className='yandex_review'>
        <div className='reviewsmap'>
         <iframe className='iframe'  src="https://yandex.ru/maps-reviews-widget/175271499615?comments"></iframe>
         <a className='amap' href="https://yandex.ru/maps/org/kompyuterny_klub_escape/175271499615/" target="_blank" >Компьютерный клуб Escape на карте Санкт‑Петербурга — Яндекс.Карты</a></div>
      </div>  
      <ul className='ul'>
        <li className='li'>
          <a className='a' href="https://www.facebook.com/profile.php?id=100012512077239">
          <i className='fa fa-vk fa-2x' aria-hidden="true"></i></a>
        </li>
        <li className='li'>
          <a className='a' href="#1"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li className='li'>
          <a className='a' href="#1"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
        </li>
        <li className='li'>
          <a className='a' href="https://www.linkedin.com/in/raj-kumar-web-designer/"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
          </li>
        <li className='li'>
          <a className='a' href="#1"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLink;
