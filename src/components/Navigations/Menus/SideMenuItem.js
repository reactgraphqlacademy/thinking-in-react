import React from 'react'

const SideMenuItem = props => (
  <p>
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ cursor: 'pointer' }}
    >
      {props.children}
    </a>
  </p>
)

export default SideMenuItem
