import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/Home/Home';
import Documentation from '../../Pages/Documentation/Documentation';
import AboutUs from '../../Pages/AboutUs/AboutUs';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/documentation' element={<Documentation />} />
      <Route path='/about-us' element={<AboutUs />} />
    </Routes>
  )
}

export default Router