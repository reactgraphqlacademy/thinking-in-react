import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = ({ isOpen, pageWrapId, toggleMenu}) => (
  <SideMenu
     isOpen={ isOpen }
     toggleMenu={ toggleMenu }
  >
    <h4>
      Next Courses <a onClick={() => toggleMenu() } style={{ cursor: 'pointer' }}><i className="fa fa-close pull-right"></i></a>
    </h4>
    <SideMenuItem link="https://leanjs.com/training/react-redux-graphql-london">London</SideMenuItem>
    <SideMenuItem link="https://leanjs.com/training/react-redux-graphql-london#redux-training-day">Redux Day</SideMenuItem>
    <SideMenuItem link="https://leanjs.com/training/react-redux-graphql-london#advanced-react-training-day">Advanced React</SideMenuItem>
    <SideMenuItem>GraphQL (comming soon)</SideMenuItem>

  </SideMenu>
)

export default Menu
