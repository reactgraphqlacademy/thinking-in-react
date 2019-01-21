import React from "react";
import PropTypes from "prop-types";

const Navbar = props => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="https://reactjs.academy">
          ReactJS Academy
        </a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li className="hidden-xs">
          <a href="#about">About</a>
        </li>
        <li>
          <button onClick={props.toggleMenu} className="btn btn-lg btn-outline">
            <i className="fa fa-graduation-cap" /> <span>Training</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default Navbar;
