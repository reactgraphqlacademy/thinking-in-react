import React from 'react'
import * as BurgerMenu from 'react-burger-menu'

const SideMenu = props => (
  <div>
    <BurgerMenu.slide
      isOpen={props.isOpen}
      pageWrapId={props.pageWrapId || 'page-wrap'}
    >
      {props.children}
    </BurgerMenu.slide>
  </div>
)

export default SideMenu
