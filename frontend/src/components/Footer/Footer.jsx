/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Something About Us...</h1>
        
          <ul className="indi-social">
            <li>
              <a href="https://github.com/0LEUM" className='name-footer'><FaGithubSquare className='icon-footer' />&nbsp;Ritam Chakraborty</a>
            </li>
            <li>
              <a href="https://github.com/Diganta2804" className='name-footer'><FaGithubSquare className='icon-footer' />&nbsp;Diganta Dutta</a>
            </li>
            <li>
              <a href="https://github.com/sajilic" className='name-footer'><FaGithubSquare className='icon-footer' />&nbsp;Sajili Chakraborty</a>
            </li>
            <li>
              <a href="" className='name-footer'><FaGithubSquare className='icon-footer' />&nbsp;Ratul Sur</a>
            </li>
          </ul>
          
          <br/><br />
              
          {/* <button className='send-icon'href="mailto:example@gmail.com"><b>Email Us</b></button> */}

      </div>

      <ul className="footer__nav">
    
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title"><b>Technology</b></h2>
          
          <ul className="nav__ul nav__ul--extra">
            <li>
              <Link to='/'>
                <a href="#">Home</a>
              </Link>
            </li>
            
            <li>
              <Link to='/about'>
                <a href="#">About</a>
              </Link>
            </li>
            
            
            <li>
              <Link to='/fal'>
                <a href="#">Find an Advocate</a>
              </Link>
            </li>

            <li>
              <Link to='/contactus'>
                <a href="#">Contact Us</a>
              </Link>
            </li>
          </ul>
        </li>
    
        <li className="nav__item">
          <h2 className="nav__title"><b>Legal</b></h2>
          
          <ul className="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            
            <li>
              <a href="#">Terms of Use</a>
            </li>
            
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title"><b>Media</b></h2>

          <ul className="nav__ul_footer">
            <li>
              <a href="#"><FaFacebookSquare /></a>
            </li>

            <li>
              <a href="#"><FaSquareXTwitter /></a>
            </li>
                
            <li>
              <a href="#"><FaInstagramSquare /></a>
            </li>

            <li>
              <a href="#"><FaLinkedin /></a>
            </li>
          </ul>
        </li>
      </ul>
  
      <div className="legal">
        <p>&copy; CopyPaste</p>
    
        <div className="legal__links">
          <span>Made with MERN Stack</span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer