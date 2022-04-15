import React from 'react'
import logo from '../images/airbnb-logo.png'


const Navbar = () => {
  return (
    <div className = 'nav'>  
    <img className = "nav__logo" src={logo} alt="logo" />
    </div>
  )
}

export default Navbar