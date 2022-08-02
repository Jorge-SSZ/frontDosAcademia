import React from 'react'
import Button from '../components/Button';
import '../stylesheets/HeroSection.css';
import '../App.css'
import studing from '../assets/studing.mp4';
import { BiUserCircle } from 'react-icons/bi';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src={studing} autoPlay loop muted />
      <h1>Aprende de una manera sencilla</h1>
      <div className='hero-btns'>
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            REGISTRATE
          </Button>
          <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            INICIAR SESIÓN <BiUserCircle className='play-icon'/>
          </Button>
      </div>
    </div>
  )
}

export default HeroSection;