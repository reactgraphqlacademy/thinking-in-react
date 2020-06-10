import React from 'react'

const Button = (props) => (
  <button onClick={props.onClick} className="btn btn-lg btn-outline">
    {props.children}
  </button>
)

export default Button
