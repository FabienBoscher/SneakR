import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import HOME from './components/Home'
import LOGIN from './components/Login'
import REGISTER from './components/Register'
import PROFIL from './components/Profil'
import NAVBAR from './components/NavBar'
import FOOTER from './components/Footer'
import WISHLIST from './components/WishList'


function App() {
  return(
    <div className='min-h-screen flex flex-col'>
      <Router>
        <NAVBAR />
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/login' element={<LOGIN />} />
          <Route path='/register' element={<REGISTER />} />
          <Route path='/profil' element={<PROFIL />} />
          <Route path='/favoris' element={<WISHLIST />} />
        </Routes>
        <FOOTER />
      </Router>
    </div>
  )
}

export default App
