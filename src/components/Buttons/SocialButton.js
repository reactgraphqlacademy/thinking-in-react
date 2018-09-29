import React from 'react'

const SocialButton = (props) => (
  <a
    target={props.target || "_blank"}
    href={props.to}
    className="btn-social btn-outline"
  >
    <i className={`fa fa-fw fa-${props.icon}`}></i>
  </a>
)

export default SocialButton
