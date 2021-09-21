import React from 'react';
import styles from './Game.module.css'
function Game() {
  return (
    <>
    <h1 className={styles.h1_game}>У нас вы можете поиграть в:</h1>
    <div className={styles.gameblock}>
       <div className={styles.row}>
       <div className={`${styles.game} ${styles.dota}`}><span className={styles.span}>Dota 2 <br /><span className={styles.spanDesc}>играем на РС</span></span></div> 
       <div className={`${styles.game} ${styles.warface}`}><span className={styles.span}>Warfaсe <br /><span className={styles.spanDesc}>играем на РС</span></span></div>   
       <div className={`${styles.game} ${styles.gta}`}><span className={styles.span}>GTA 5<br /><span className={styles.spanDesc}>играем на РС</span></span></div>  
       <div className={`${styles.game} ${styles.csgo}`}><span className={styles.span}>CS:GO <br /><span className={styles.spanDesc}>играем на РС</span></span></div>  
       <div className={`${styles.game} ${styles.overwatch}`}><span className={styles.span}>Overwatch<br /><span className={styles.spanDesc}>играем на РС</span></span></div>               
    </div>
    <div className={styles.row}>
       <div className={`${styles.game} ${styles.pubg}`}><span className={styles.span}>Pubg<br /><span className={styles.spanDesc}>играем на РС</span></span></div> 
       <div className={`${styles.game} ${styles.apex}`}><span className={styles.span}>Apex<br /><span className={styles.spanDesc}>играем на РС</span></span></div>   
       <div className={`${styles.game} ${styles.mortal}`}><span className={styles.span}>Mortal<br /><span className={styles.spanDesc}>играем на РС</span></span></div>  
       <div className={`${styles.game} ${styles.ufc}`}><span className={styles.span}>UFC<br /><span className={styles.spanDesc}>играем на РС</span></span></div>  
       <div className={`${styles.game} ${styles.fifa}`}><span className={styles.span}>PES 2022<br /><span className={styles.spanDesc}>играем на РС</span></span></div>               
    </div>
   </div>
   </>
  );
}

export default Game;
