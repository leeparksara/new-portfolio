import React from 'react'
import myZada from '../images/myzadaProject.png'
import Header from './Header';
import Footer from './Footer';

const Myzada = () => {
  return (
    <div>
           <Header/>
 <div className='myzada-component'>
     
        <h2>My Zada</h2>
        <h4>Web-app redesigning</h4>
        <img  src={myZada}  alt="my zada project"/>
      
    </div>
    <Footer/>
    </div>
   
  )
}

export default Myzada