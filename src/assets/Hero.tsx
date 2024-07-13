import React from 'react'
import profil from '../images/profile.png'
import spa from '../images/spa.png'
import el from '../images/el2.png'

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
    <hr className='line'></hr>
   <h2 >Work</h2>
    </div>
        <div className='items-section'>
  
    <div className='card-container'>

  
    <div className='item-card1'>
        
        <img className='item1' src={verifier} alt="item"/>
        <div>
            <h1>Verifeir web-app </h1>
            <p>  Zada Verify is a web application for verifying credentials, designed as part of my internship. My role was to create a new UI/UX concept, conduct user experience research, and redesign the application</p>
            <button className="card1-btn">View study case</button>
        </div>
    </div>
    <div className='item-card2'>
        
        <img className='item2' src={myzada} alt="item"/>
        <div className='card-info'>
            <h1>Myzada web-app </h1>
            <p> Zada is a web application for requesting credentials, redesigned as part of my internship. My role was to revamp the UI/UX, create new use cases, and add new features to enhance the overall usability and efficiency of the application</p>

<button className="card1-btn">View study case</button>

        </div>
    </div>
    <div className='item-card3'>
        
        <img className='item3' src={spa} alt="item"/>
        <div className='card-info'>
            <h1>Horizon</h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>

<button className="card1-btn">View project</button>

        </div>
    </div>
    <div className='item-card4'>
        
        <img className='item4' src={el} alt="item"/>
        <div className='card-info'>
            <h1>Urban </h1>
            <p>Urban is an electronic online store, developed as a collaborative project with two classmates under my studies. My role was to design a flexible online store that works on different devices, manage the database using PostgreSQL</p>

<button className="card1-btn">View project</button>

        </div>
    </div>
    
    </div>
</div>

    </div>
   
)
}

export default Hero;