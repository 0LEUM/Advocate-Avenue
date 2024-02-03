/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './Law.css'
import arrow_btn from '../../../assets/arrow_btn.png'
import play_icon from '../../../assets/play_icon.png'
import pause_icon from '../../../assets/pause_icon.png'
import { Link } from 'react-router-dom';

const Law = ({ lawData, setLawCount, lawCount, togglePlayStatus, playStatus }) => {

  return (
    <div className='law'>
      <div className='law-text'>
        
        <p>{lawData.text1}</p>
        <p>{lawData.text2}</p>
      </div> 
      
      <Link to='/fal'>
        <div className="law-explore">
          <p>Explore</p>
          <img src={arrow_btn} alt="" />
        </div> 
      </Link> 

      <div className="law-dot-play">
         <ul className='law-dots'>
            <li onClick={()=>setLawCount(0)} className={lawCount===0? "law-dot orange":"law-dot"}></li>
            <li onClick={()=>setLawCount(1)} className={lawCount===1? "law-dot orange":"law-dot"}></li>
            <li onClick={()=>setLawCount(2)} className={lawCount===2? "law-dot orange":"law-dot"}></li>
         </ul>
         <div className="law-play">
            <img onClick={togglePlayStatus} src={playStatus ? pause_icon : play_icon} alt='' />
            <p>see the video</p>
         </div>
      </div>   
    </div>
  )
}

export default Law

