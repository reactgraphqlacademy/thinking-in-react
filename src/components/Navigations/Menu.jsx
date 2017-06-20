import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = ({ isOpen, pageWrapId, toggleMenu}) => (
  <SideMenu
     isOpen={ isOpen }
     toggleMenu={ toggleMenu }
  >
    <h4>
      Next Courses
    </h4>
    <SideMenuItem link="https://leanjs.com/training/react-redux-graphql-london">London</SideMenuItem>
    <SideMenuItem link="https://leanjs.com/training/react-redux-graphql-london#redux-training-day">Redux Day</SideMenuItem>
    <SideMenuItem link="https://leanjs.com/training/react-redux-graphql-london#advanced-react-training-day">Advanced React</SideMenuItem>
    <SideMenuItem>GraphQL (comming soon)</SideMenuItem>

  </SideMenu>
)

export default Menu
