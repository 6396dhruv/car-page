import React from 'react'
import './Hero.css'
import arrowbtn from '../../../../Assets/arrowbtn.png'
import playicon from '../../../../Assets/playicon.png'
import pauseicon from '../../../../Assets/pauseicon.png'

const Hero = ({heroData, setHerocount, herocount, setPlaystatus, playstatus}) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>

      </div>
      <div className='hero_explore'>
        <p>Explore all the features.</p>
        <img src= {arrowbtn} alt=''></img>
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
            <li onClick={() => setHerocount(0)} className={herocount === 0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={() => setHerocount(1)} className={herocount === 1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={() => setHerocount(2)} className={herocount === 2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className='hero-play'>
            <img onClick={() =>setPlaystatus(!playstatus)} src={playstatus?pauseicon:playicon} alt=''></img>
            <p>you can see the video.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
