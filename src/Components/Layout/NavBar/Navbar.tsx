import React from 'react'
import { NavbarContainer } from './Navbar.style'
import { Logo, NavigationTag } from '../../../styles/Typography'
import BombasticLogo from './../../../assets/img/bombastic.png'
import { useLocation } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import DropDownMenu from './DropDownMenu/DropDownMenu'

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <NavbarContainer>
      <a className='logo' href='/'>
        <img src={BombasticLogo} alt="logo" />
        <Logo>OMBASTIC <span>UI</span></Logo>
      </a>
      <div className='navigation'>
        <NavigationTag active={pathname === '/documentation'} href='/documentation'>Documentation</NavigationTag>
        <NavigationTag active={pathname === '/about-us'} href='/about-us'>About us</NavigationTag>
      </div>
      <div className='navigation-mobile'>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <DropDownMenu isOpen={isOpen} />
      </div>
    </NavbarContainer>
  )
}

export default Navbar