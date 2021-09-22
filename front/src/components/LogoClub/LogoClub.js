import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoClub.module.css'
import img1 from './logo.png'

function LogoClub() {
  return (
    <>
      <Link to='/'><img className={styles.logo_img} src={img1} alt=""/></Link>
    </>
  );
}

export default LogoClub;
