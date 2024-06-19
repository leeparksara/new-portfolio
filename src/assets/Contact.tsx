import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = ()=>{
    return(
        <div>
            <Header/>
          

          
        <div  className='contact-form'>

            <div className='form'>
                <h3> Thank you for taking the time. I am open to working together and discussing ideas. Please reach out, and let's start our collaboration!</h3>
                <div>
                <form>
                    <label>Name</label>
                    <input type='text' title='Name' placeholder='Enter your name'/>
                    <label>Email Address </label>
                    <input type="text" title="Email address" placeholder='Enter your email' />
                    <label>Phone</label>
                    <input type="number" title="Phone" placeholder='Enter your phone'/>
                    <label>Your text</label>
                   <textarea title="Your text" name="text" id="yourtext" cols={15}></textarea>

                </form>

                </div>
         
             <button id="sub-btn">Send message</button>
         
            </div>
           
        </div>
        
      
        <Footer/>
        </div>
    )
}

export default Contact;