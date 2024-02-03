// import React from 'react'
import './Background.css'
import video2 from '../../../assets/video2.mp4'
import bgImage from '../../../assets/image3.png'
import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'



// eslint-disable-next-line no-unused-vars, react/prop-types
const Background = ({playStatus,lawCount}) => {
    //importing the props here
    if(playStatus) {
        return (
            <video className = 'background' autoPlay loop muted>
                <source src={video2} type='video/mp4' />
            </video>
        )
    }
    else if(lawCount===0)
    {
        return <img src={bgImage} className='background fade-in' alt="" />
    }
    else if(lawCount===1)
    {
        return <img src={image1} className='background fade-in' alt="" />
    }
    else if(lawCount===2)
    {
        return <img src={image2} className='background fade-in' alt="" />
    }
  
}

export default Background