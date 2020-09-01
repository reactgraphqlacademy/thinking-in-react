import React, { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Navbar toggleMenu={toggleMenu} />
    </>
  )
}


