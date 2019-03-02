import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = props => (
  <SideMenu isOpen={props.isOpen} toggleMenu={props.toggleMenu}>
    <h4>
      Next Courses
      <button
        className="btn-link"
        onClick={() => props.toggleMenu()}
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <SideMenuItem link="https://reactjs.academy/react-redux-graphql-bootcamp/">
      Bootcamp
    </SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-graphql-part-time-course/">
      Part-time
    </SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/advanced-react-redux-graphql-bootcamp/">
      Advanced React
    </SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-native-bootcamp/">
      React Native
    </SideMenuItem>
  </SideMenu>
)

export default Menu
