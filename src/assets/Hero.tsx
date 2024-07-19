import React from 'react'
import profil from '../images/profile.png'
import spa from '../images/Group 150.png'
import el from '../images/el2.png'
import {Link} from 'react-router-dom'

import verifier from '../images/verifer.png'
import myzada from '../images/myzada.png'

const Hero: React.FC =() =>{
return(
    <div >
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
        <div  className='card-info' >
            <h1>Verifeir web-app </h1>
            <p>  Designed as part of my internship. Created a new UI/UX concept and conducted UX research</p>
     <div className="card1-btn" >
     <Link   to="zada-verify">View Case Study</Link>
     </div>
          
        </div>
    </div>
    <div className='item-card2'>
        
        <img className='item2' src={myzada} alt="item"/>
        <div className='card-info'>
            <h1>Myzada web-app </h1>
            <p> Redesigned as part of my internship. My role was to revamp the UI/UX, create new use cases</p>
<div className="card1-btn">
<Link  to="myzada">View Case Study</Link>
</div>
      

        </div>
    </div>
    <div className='item-card3'>
        
        <img className='item3' src={spa} alt="item"/>
        <div className='card-info'>
            <h1>Horizon</h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>
    <div className="card1-btn">
    <Link   to="https://horizonspa.netlify.app/">View Project</Link>
    </div>
           

        </div>
    </div>
    <div className='item-card4'>
        
        <img className='item4' src={el} alt="item"/>
        <div className='card-info'>
            <h1>Urban </h1>
            <p> Designed and developed as a collaborative project with two classmates under my studies.</p>
            <div className="card1-btn">
            <Link   to="urban">View Case Study</Link>
            </div>
            

        </div>
    </div>
    
    </div>
</div>

    </div>
   
)
}

export default Hero;