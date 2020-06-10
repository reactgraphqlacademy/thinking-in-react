import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Navbar from './Navigations/Navbar'
import Header from './Header'
import Books from './Books'
import Footer from './Footer'
import About from './About'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Navbar toggleMenu={toggleMenu} />
      <Header title="By React GraphQL Academy" />
      <Books />
      <About />
      <Footer />
    </div>
  )
}

export default App
