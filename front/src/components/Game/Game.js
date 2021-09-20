import React from 'react';
import './Game.css'
function Game(props) {
  return (
    <div className='gameblock'>
    <div className='row'>
       <div className="game dota"><span className='span'>Dota 2 <br /><span className='spanDesc'>играем на РС</span></span></div> 
       <div className="game warface"><span className='span'>Warfaсe <br /><span className='spanDesc'>играем на РС</span></span></div>   
       <div className="game gta"><span className='span'>GTA 5<br /><span className='spanDesc'>играем на РС</span></span></div>  
       <div className="game csgo"><span className='span'>CS:GO <br /><span className='spanDesc'>играем на РС</span></span></div>  
       <div className="game overwatch"><span className='span'>Overwatch<br /><span className='spanDesc'>играем на РС</span></span></div>               
    </div>
    <div className='row'>
       <div className="game pubg"><span className='span'>Pubg<br /><span className='spanDesc'>играем на РС</span></span></div> 
       <div className="game apex"><span className='span'>Apex<br /><span className='spanDesc'>играем на РС</span></span></div>   
       <div className="game mortal"><span className='span'>Mortal<br /><span className='spanDesc'>играем на РС</span></span></div>  
       <div className="game ufc"><span className='span'>UFC<br /><span className='spanDesc'>играем на РС</span></span></div>  
       <div className="game fifa"><span className='span'>PES 2022<br /><span className='spanDesc'>играем на РС</span></span></div>               
    </div>
   </div>
  );
}

export default Game;
