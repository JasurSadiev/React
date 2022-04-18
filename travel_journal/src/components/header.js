import React from 'react'
import Internet from '../images/internet_logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Internet} alt='logo' className='header__logo'/>
        <h4 className='header__text'>my travel journal</h4>
    </div>
  )
}

export default Header