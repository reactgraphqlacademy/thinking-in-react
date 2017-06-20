import React from 'react'

const SideMenuItem = ({ children, toggleMenu, link }) => (
  <p>
    <a href={ link } target="_blank" style={{ cursor: 'pointer' }} onClick={ () => toggleMenu() }>
      { children }
    </a>
  </p>
)

export default SideMenuItem
