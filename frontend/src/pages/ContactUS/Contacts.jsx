// eslint-disable-next-line no-unused-vars
import React from 'react'
import './contacts.css'


const ContactUs = () => {
    
  return (
    <>
        <div className='main-top-contact'>
            <div className="main3">
                <div className='wrapper-1'> 
                    <form action="">
                        <h1>Contact Us</h1>
                        <hr/>

                        <div className="input-box-contacts">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="" placeholder='Enter your name'/>
                        </div>

                        <div className="input-box-contacts">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="" placeholder='example@gmail.com'/>
                        </div>

                        <div className="input-box-contacts">
                        <label htmlFor="phoneno">Phone Number:</label>
                            <input type="phone" name="phone" id="" placeholder='+1 (222) 345 6789'/>
                        </div>

                        <div className="input-box-contacts2">
                        <label htmlFor="phoneno">Message:</label>
                            <input type="phone" name="phone" id="" placeholder='type here...'/>
                        </div>

                        <button type='submit' className='button1'> Submit</button>
                    </form>
                </div>
                <div className='main-2'>
                    <h2>Lets talk about anything and<br /> everything you want to know.</h2><b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/> laboris nisi ut aliquip ex ea commodo consequat.Duis aute 
                    irure dolor in reprehenderit in<br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat<br/> non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>⟟ Address: 34 Street Name, City Name Here, India</p>
                    <p>☏ Phone: +1 (222) 345 6789</p>
                    <p>✉ Mail: example@gmail.com</p></b>
                </div>
            </div>
        </div>
    </>
  )
}


export default ContactUs