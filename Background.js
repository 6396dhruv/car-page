import React from 'react'
import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'




const Background = ({playstatus, herocount}) => {
  if(playstatus) {
    return (
        <video className='background fade-in' autoPlay loop muted>
            <source src={video1} type='video/mp4'></source>
        </video>
    )
  }
  else if(herocount === 0)
  {
    return(
        <img src={image1} className='background fade-in' alt=''></img>
    )
  }
  else if(herocount === 0)
    {
      return <img src={image1} className='background fade-in' alt=''></img>
    }
    else if(herocount === 1)
    {
      return <img src={image2} className='background fade-in' alt=''></img>
    }
    else if(herocount === 2)
    {
        return <img src={image3} className='background fade-in' alt=''></img>
    }
    
}

export default Background
