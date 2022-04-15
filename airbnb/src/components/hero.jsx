import React from 'react'
import hero from '../images/photo-grid.png';

const Hero = () => {
  return (
    <section>
      <img className="hero__img" src={hero} alt="hero" />
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero