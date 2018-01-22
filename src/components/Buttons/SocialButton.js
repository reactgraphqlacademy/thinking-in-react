import React from 'react'

const SocialButton = ({ to, icon, target = "_blank" }) => (
  <a
    target={target}
    href={to}
    className="btn-social btn-outline"
  >
    <i className={`fa fa-fw fa-${icon}`}></i>
  </a>
)

export default SocialButton
