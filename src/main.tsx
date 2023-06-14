import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Components/Router/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>,
)
