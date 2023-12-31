import React from 'react'
import { FooterWrapper } from './Footer.styles'
import BombasticLogo from './../../../assets/img/bombastic-logo.png'
import { NavigationTag } from '../../../styles/Typography'

const Footer = () => {
  return (
      <FooterWrapper>
          <img src={BombasticLogo} />
          <p>CodigoSaurios@{new Date().getFullYear()}</p>
      <NavigationTag href='mailto:uibombastic@gmail.com'>Contact Us</NavigationTag>
    </FooterWrapper>
  )
}

export default Footer