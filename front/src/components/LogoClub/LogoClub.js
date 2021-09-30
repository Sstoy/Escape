import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './LogoClub.module.css'
import img1 from './logo.png'

function LogoClub() {
  return (
    <>
      <HashLink to='/#mainPage'><img className={styles.logo_img} src={img1} alt=""/></HashLink>
    </>
  );
}

export default LogoClub;
