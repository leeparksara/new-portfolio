import React from 'react';
import {Link} from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import logo from '../images/Logo Shapes 20.svg'
const Footer: React.FC = () =>{
    return(
        <div className='footer'>

           <div>
            
           <nav>
           <img className='logo' src={logo} alt="sara leepark logo"/>
          <ul> <li><Link className='nav-link' to="/">Home</Link></li></ul>
          <ul><li><Link className='nav-link' to="/">My Works</Link></li></ul>
          <ul><li><Link className='nav-link' to="/">About</Link></li></ul>
          <ul><li><Link className='nav-link' to="contact">Contact</Link></li></ul>
            </nav>
           </div>

           <ul className='contact-links'>
    <li>  <  FaLinkedin size={30} /></li>
   <li><FaGithub size={30} /></li>
</ul>
         
        </div>
    )
}


export default Footer;