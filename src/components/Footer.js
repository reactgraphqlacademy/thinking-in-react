import React from "react";
import SocialButton from "./Buttons/SocialButton";

const Footer = () => (
  <footer className="text-center">
    <div className="footer-above">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4">
            <h3>Main Location</h3>
            <p>
              <span>1 St. Katharine's Way</span>
              <br />
              <span>London, E1W 1UN</span>
              <br />
              <span className="fa fa-map-marker" />
            </p>
          </div>
          <div className="footer-col col-md-4">
            <h3>Around the Web</h3>
            <ul className="list-inline">
              <li>
                <SocialButton
                  to="https://github.com//reactjsacademy"
                  icon="github"
                />
              </li>
              <li>
                <SocialButton
                  to="https://twitter.com/reactjsacademy"
                  icon="twitter"
                />
              </li>
              <li>
                <SocialButton
                  to="https://www.instagram.com/reactjsacademy"
                  icon="instagram"
                />
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-4">
            <h3>About Us</h3>
            <p>
              <a href="https://reactjs.academy/">ReactJS Academy </a> by{" "}
              <a href="https://leanjs.com/">LeanJS </a>
              <span>
                , a boutique of excellence focused on Lean, JavaScript, UX, and
                people.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-below">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span>Copyright &copy;</span>{" "}
            <a
              href="https://leanjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeanJS
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
