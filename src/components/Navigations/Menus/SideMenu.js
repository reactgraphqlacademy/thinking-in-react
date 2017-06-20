import React from 'react'
import * as BurgerMenu from 'react-burger-menu'

const SideMenu = ({ isOpen, children, pageWrapId }) => (
  <div>
    <BurgerMenu.slide
       isOpen={ isOpen }
       pageWrapId={ pageWrapId || 'page-wrap' }
    >
      { children }
    </BurgerMenu.slide>
  </div>
)

export default SideMenu
