import React from 'react';
import {Link} from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import logo from '../images/Logo Shapes 20.svg'
const Footer: React.FC = () =>{
    return(
        <div className='footer'>

           <div >
           <nav className='footer-logo'>
           <Link to="/">
            <img className='logo' src={logo} alt="logo"/>
            </Link>
           <div className='footer-nav'>
           <ul> <li><Link className='nav-link' to="/">Home</Link></li></ul>
          <ul><li><Link className='nav-link' to="projects">Projects</Link></li></ul>
          <ul><li><Link className='nav-link' to="about">About</Link></li></ul>
          <ul><li><Link className='nav-link' to="contact">Contact</Link></li></ul>
           </div>
      
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