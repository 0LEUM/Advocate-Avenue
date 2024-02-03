/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'

import './header.css'
import logo_dark from '../../assets/logo-light.png'
import search_icon_dark from '../../assets/search-b.png'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
        <div className="navbar">

            <img src={logo_dark} alt="" className='logo'/>

            <ul>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='/about'>
                  <li>About Us</li>
                </Link>
                <Link to='/fal'>
                  <li>Find an Advocate</li>
                </Link>
                <Link to='/contactus'>
                  <li>Contact Us</li>
                </Link>
            </ul>

            <div className="search-box">

              <input type="text" name="" id="" placeholder='Search'/> 
              
              <img src={search_icon_dark} alt="" />

            </div>

            <div className="button">
              <Link to='/login'>
                <button className='button-navbar1'>Login</button>
              </Link>
              <Link to='/register'>
                <button className='button-navbar2'>Register</button>
              </Link>
            </div>

            {/* <img src={toggle_light} alt="" className='toggle-icon'/> */}

                
        </div>
    </div>
  )
}

export default Header