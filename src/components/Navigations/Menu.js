import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'
import Button from '../Button'

const Menu = (props) => (
  <SideMenu isOpen={props.isOpen} toggleMenu={props.toggleMenu}>
    <div style={{ position: 'absolute', right: '10px' }}>
      <Button onClick={() => props.toggleMenu()}>
        <i className="fa fa-close" />
      </Button>
    </div>
    <h4>Next Courses</h4>
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
