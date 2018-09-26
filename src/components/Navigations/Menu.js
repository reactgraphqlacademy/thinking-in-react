import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = (props) => (
  <SideMenu
    isOpen={props.isOpen}
    toggleMenu={props.toggleMenu}
  >
    <h4>
      Next Courses <a onClick={() => props.toggleMenu()} style={{ cursor: 'pointer' }}><i className="fa fa-close pull-right"></i></a>
    </h4>
    <SideMenuItem link="https://reactjs.academy/react-redux-training-london/">London part-time course</SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-graphql-bootcamp-london/">London Bootcamp</SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-graphql-bootcamp-lisbon/">Lisbon Bootcamp</SideMenuItem>
    <SideMenuItem>GraphQL (comming soon)</SideMenuItem>

  </SideMenu>
)

export default Menu
