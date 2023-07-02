import React from 'react'
import { HomeContainer } from './Home.styles'
import { PrimaryTitle } from '../../styles/Typography'
import { PrimaryButton } from '../../styles/Button'
import arrow from './../../assets/img/arrow.png'
import Navbar from '../../Components/Layout/NavBar/Navbar'

const HomePage = () => {
  return (
    <HomeContainer>
      <Navbar />
      <div className='content'>
        <PrimaryTitle>Why Settle for Ordinary When You Can Go <span>Bombastic</span>?</PrimaryTitle>
        <PrimaryButton as='a' href='/documentation'>Get started <img src={arrow} alt="arrow icon" /></PrimaryButton>
      </div>
    </HomeContainer>
  )
}

export default HomePage