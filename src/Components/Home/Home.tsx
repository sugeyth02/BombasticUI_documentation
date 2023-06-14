import React from 'react'
import { HomeContainer } from './Home.styles'
import { PrimaryTitle } from '../../styles/Typography'
import Navbar from '../../Layout/NavBar/Navbar'
import { PrimaryButton } from '../../styles/Button'
import arrow from './../../assets/img/arrow.png'

const Home = () => {
  return (
      <HomeContainer>
          <Navbar />
          <div className='content'>
              <PrimaryTitle>Why Settle for Ordinary When You Can Go Bombastic?</PrimaryTitle>
              <PrimaryButton as='a' href='/documentation'>Get started <img src={arrow}  alt="arrow icon"/></PrimaryButton>
          </div>
    </HomeContainer>
  )
}

export default Home