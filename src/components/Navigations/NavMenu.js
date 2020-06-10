import React, { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

function NavMenu() {
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

export default NavMenu
