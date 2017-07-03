import React from 'react'
import SocialButton from './Buttons/SocialButton'

const Footer = () => (
  <footer className="text-center">
    <div className="footer-above">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4">
            <h3>Main Location</h3>
            <p>
              <span>1 Fore Stree</span>
              <br />
              <span>London, EC2Y 5EJ</span>
              <br />
              <span className="fa fa-map-marker"></span>
              <a target="_blank" href="https://reactjs.academy/react-redux-training"> Other Locations </a>
            </p>
          </div>
          <div className="footer-col col-md-4">
            <h3>Around the Web</h3>
            <ul className="list-inline">
              <li>
                <SocialButton to="https://github.com//leanjscom" icon="github" />
              </li>
              <li>
                <SocialButton to="https://twitter.com/leanjscom" icon="twitter" />
              </li>
              <li>
                <SocialButton to="https://www.instagram.com/leanjscom" icon="instagram" />
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-4">
            <h3>About ReactJS Academy</h3>
            <p>
              <a href="https://reactjs.academy/">ReactJS Academy </a>
              <span>
                is devoted to teach React across Europe, providing free workshops and private trainings.
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
            <span>Copyright &copy;</span> <a href="https://reactjs.academy/" target="_blank">ReactJS Academy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
