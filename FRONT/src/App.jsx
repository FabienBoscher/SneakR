import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import HOME from './components/Home'
import LOGIN from './components/Login'
import REGISTER from './components/Register'
import PROFIL from './components/Profil'
import NAVBAR from './components/NavBar'
import FOOTER from './components/Footer'
import PRODUCT from './components/Product'


function App() {
  return(
  <div className='App'>
    <Router>
      <NAVBAR />
      <Routes>
        <Route path='/' element={<HOME />} />
        <Route path='/login' element={<LOGIN />} />
        <Route path='/register' element={<REGISTER />} />
        <Route path='/profil' element={<PROFIL />} />
        <Route path='/product' element={<PRODUCT />} />
      </Routes>
      <FOOTER />
    </Router>
  </div>
  )
}

export default App
