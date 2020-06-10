import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = (props) => (
  <SideMenu isOpen={props.isOpen} toggleMenu={props.toggleMenu}>
    <div style={{ position: 'absolute', right: '10px' }}>
      <button
        onClick={() => props.toggleMenu()}
        className="btn btn-lg btn-outline"
      >
        <i className="fa fa-close" />
      </button>
    </div>
    <h4>Next Courses</h4>
    <SideMenuItem link="https://reactgraphql.academy/react/training/bootcamp/">
      React Bootcamp
    </SideMenuItem>
    <SideMenuItem link="https://reactgraphql.academy/react/training/advanced/">
      Advanced React
    </SideMenuItem>
    <SideMenuItem link="https://reactgraphql.academy/react/training/fundamentals/">
      React Fundamentals
    </SideMenuItem>
  </SideMenu>
)

export default Menu
