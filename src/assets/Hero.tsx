import React from 'react'
import profil from '../images/profile.png'
import spa from '../images/spa.png'
import el from '../images/el2.png'
import game from '../images/game.png'
const Hero: React.FC =() =>{
return(
    <div>
 <div className='hero-section'>
        <div> <img className='hero-image' src={profil} alt="profile" /></div>
<div className='hero'  >
    <h1 > Sara Leepark 
        <div className='hero-span'>
    <span>Frontend </span>  Developer
        </div>  </h1>
        <p>Based in Stockholm, Sweden</p>
   </div>

    </div>
        <div className='items-section'>
    <h2>Work</h2>
    <div>
        
        <img className='item' src={spa} alt="item"/>
    </div>
    <div>
        
        <img className='item' src={el} alt="item"/>
    </div>
    <div>
        
        <img className='item' src={game} alt="item"/>
    </div>
</div>
    </div>
   
)
}

export default Hero;