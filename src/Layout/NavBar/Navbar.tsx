import React from 'react'
import { NavbarContainer } from './Navbar.style'
import bombasticLogo from './../../assets/img/bombastic.png'
import { Logo, NavigationTag } from '../../styles/Typography'

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className='logo'>
        <img src={bombasticLogo} alt="logo" />
        <Logo href='/'>OMBASTIC <span>UI</span></Logo>
      </div>
      <div className='navigation'>
        <NavigationTag href='/documentation'>Documentation</NavigationTag>
        <NavigationTag href='/about-us'>About us</NavigationTag>
      </div>
     </NavbarContainer>
  )
}

export default Navbar