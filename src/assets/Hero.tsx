import React from 'react'
import profil from '../images/profile.png'
import spa from '../images/spa.png'
import el from '../images/el2.png'
import game from '../images/game.png'
import verifier from '../images/verifer.png'
import myzada from '../images/myzada.png'

const Hero: React.FC =() =>{
return(
    <div>
 <div className='hero-section'>
    
<div className='hero'  >
    <h1 > Sara Leepark 
        <div className='hero-span'>
    <span>Frontend </span>  Developer
        </div> 
        <p>Based in Stockholm, Sweden</p> </h1>
        
        
   </div>
   <div> <img className='hero-image' src={profil} alt="profile" /></div>
    </div>
    
    <div id='work'>
    <h2 >Work</h2>
    </div>
        <div className='items-section'>
  
    <div className='card-container'>

  
    <div className='item-card1'>
        
        <img className='item1' src={verifier} alt="item"/>
        <div>
            <h1>Verifeir webapp </h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>
            <button className="card1-btn">View study case</button>
        </div>
    </div>
    <div className='item-card2'>
        
        <img className='item2' src={myzada} alt="item"/>
        <div className='card-info'>
            <h1>Myzada webapp </h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>

<button className="card1-btn">View study case</button>

        </div>
    </div>
    <div className='item-card3'>
        
        <img className='item3' src={spa} alt="item"/>
        <div className='card-info'>
            <h1>Horizon </h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>

<button className="card1-btn">View project</button>

        </div>
    </div>
    <div className='item-card4'>
        
        <img className='item4' src={el} alt="item"/>
        <div className='card-info'>
            <h1>Horizon </h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>

<button className="card1-btn">View project</button>

        </div>
    </div>
    <div className='item-card5'>
        
        <img className='item5' src={game} alt="item"/>
        <div className='card-info'>
            <h1>Horizon </h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>

<button className="card1-btn">View Project</button>

        </div>
    </div>
    </div>
</div>

    </div>
   
)
}

export default Hero;