import React from 'react'

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
                <a target="_blank" href="https://github.com/reactjs-academy" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/reactjsacademy" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/reactjsacademy/" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a>
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
