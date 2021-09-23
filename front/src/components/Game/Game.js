import React from 'react';
import styles from './Game.module.css'
function Game() {
  return (
    <>
    <h1 className={styles.h1_game}>У нас вы можете поиграть в:</h1>
    <div className={styles.gameblock}>
       <div className={styles.row}>
       <div className={`${styles.game} ${styles.games} ${styles.dota}`}><span className={styles.span}>Dota 2 </span></div> 
       <div className={`${styles.game} ${styles.games} ${styles.warface}`}><span className={styles.span}>Warfaсe </span></div>   
       <div className={`${styles.game} ${styles.games} ${styles.gta}`}><span className={styles.span}>GTA 5</span></div>  
       <div className={`${styles.game} ${styles.games} ${styles.csgo}`}><span className={styles.span}>CS:GO </span></div>  
       <div className={`${styles.game} ${styles.games} ${styles.overwatch}`}><span className={styles.span}>Overwatch</span></div>               
    </div>
    <div className={styles.row}>
       <div className={`${styles.game} ${styles.games} ${styles.pubg}`}><span className={styles.span}>Pubg</span></div> 
       <div className={`${styles.game} ${styles.games} ${styles.apex}`}><span className={styles.span}>Apex</span></div>   
       <div className={`${styles.game} ${styles.games} ${styles.mortal}`}><span className={styles.span}>Mortal</span></div>  
       <div className={`${styles.game} ${styles.games} ${styles.ufc}`}><span className={styles.span}>UFC</span></div>  
       <div className={`${styles.game} ${styles.games} ${styles.fifa}`}><span className={styles.span}>FIFA21</span></div>               
    </div>
   </div>
   </>
  );
}

export default Game;
