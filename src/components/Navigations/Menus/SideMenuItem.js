import React from 'react'

const SideMenuItem = ({ children, link }) => (
  <p>
    <a href={ link } target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
      { children }
    </a>
  </p>
)

export default SideMenuItem
