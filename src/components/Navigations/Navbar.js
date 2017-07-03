import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ toggleMenu }) => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#page-top">LeanJS</a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li className="hidden-xs">
          <a href="#about">About the library</a>
        </li>
        <li>
          <button onClick={ toggleMenu } className="btn btn-lg btn-outline">
            <i className="fa fa-graduation-cap"></i> <span>Training</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}

export default Navbar
