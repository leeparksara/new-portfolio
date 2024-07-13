import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/Logo Shapes 20.svg'
const Header: React.FC = () =>{
    
    return(
        <div className='header'>
           <img className='logo' src={logo} alt="logo"/>
            <nav>
          
          <ul> <li><Link className='nav-link' to="/">Home</Link></li></ul>
          <ul><li><Link className='nav-link' to="/projects">Projects</Link></li></ul>
          <ul><li><Link className='nav-link' to="/about">About</Link></li></ul>
          <ul><li><Link className='nav-link' to="/contact">Contact</Link></li></ul>
            </nav>

        </div>
    )

}


export default Header;