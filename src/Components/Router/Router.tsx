import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/Home/Home';
import Documentation from '../../Pages/Documentation/Documentation';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/documentation' element={<Documentation />} />
    </Routes>
  )
}

export default Router