import React from 'react'
import { NavbarContainer } from './Navbar.style'
import bombasticLogo from './../../../assets/img/bombastic.png'
import { Logo, NavigationTag } from '../../../styles/Typography'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <NavbarContainer>
      <div className='logo'>
        <img src={bombasticLogo} alt="logo" />
        <Logo href='/'>OMBASTIC <span>UI</span></Logo>
      </div>
      <div className='navigation'>
        <NavigationTag active={pathname === '/documentation'} href='/documentation'>Documentation</NavigationTag>
        <NavigationTag active={pathname === '/about-us'} href='/about-us'>About us</NavigationTag>
      </div>
    </NavbarContainer>
  )
}

export default Navbar