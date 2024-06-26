import React from 'react';
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import Footer from './Footer';
import Header from './Header';

const Contact: React.FC = ()=>{
    return(
        <div>
            <Header/>
     
        <div className='contact-page'>
<div className='contact-sec1'>
    <h1>Get in Touch </h1>
    <div className='paragraph'>
<p>
    
I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunities that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
</p>
<ul className='contact-links'>
    <li>  <  FaLinkedin size={30} /></li>
   <li><FaGithub size={30} /></li>
</ul>
    </div>


</div >
<div className='contact-sec2'>
    <h1>Contact Me</h1>
<form>
    <label>Name </label>
 <input type='text' placeholder="Enter your name" />
 <label>Email Address</label>
 <input type="text" placeholder='Enter your email'/>
 <label>Message</label>
 <textarea placeholder='How can I help you?' cols={35} />
 <button>Send message</button>
</form>
</div>
        </div>
             <Footer/>  
        </div>
    )
}
export default Contact;