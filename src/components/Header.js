import React from "react";

const Header = props => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img
            alt=""
            className="img-responsive logo-academy"
            src="/img/logo.png"
          />
          <div className="intro-text">
            <span className="name">{props.title}</span>
            <hr className="star-light" />
            <span className="skills">Thinking in React exercise</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
