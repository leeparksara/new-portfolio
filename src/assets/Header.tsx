import React from 'react'
import {Link} from 'react-router-dom'

const Header: React.FC = () =>{
    
    return(
        <div className='header'>
             <h4> Sara Leepark</h4>
            <nav>
          
          <ul> <li><Link className='nav-link' to="/">Home</Link></li></ul>
          <ul><li><Link className='nav-link' to="/">My Works</Link></li></ul>
          <ul><li><Link className='nav-link' to="/">About</Link></li></ul>
          <ul><li><Link className='nav-link' to="contact">Contact</Link></li></ul>
            </nav>

        </div>
    )

}


export default Header;