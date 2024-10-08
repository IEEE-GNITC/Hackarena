import { useState } from 'react'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Guidelines from './pages/Guidelines'
import More from './pages/More'
import Themes from './pages/Themes'
import Contact from './pages/Contact'
import './index.css'
import FAQ from './pages/FAQ'
import ProfileCard from './components/UI/ProfileCard'





function App() {
  

  return (
    <div className="min-h-screen min-w-full">
      <Nav />
      <Home />
      <About />
      <Guidelines/>
      <More/>
            <FAQ />
      <Contact />
      {/* <Themes /> */}
    
   
      </div>
    
  )
}

export default App
