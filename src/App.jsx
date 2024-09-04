import { useState } from 'react'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Guidelines from './pages/Guidelines'
import Themes from './pages/Themes'

import Contact from './pages/Contact'
import './index.css'
import FAQ from './pages/FAQ'
function App() {
  

  return (
    <>
      <Nav />
      {/* <Home />
      <About />
      <Guidelines />
      <Themes /> */}
      <FAQ />
      <Contact />

    </>
  )
}

export default App
