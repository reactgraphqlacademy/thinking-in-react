import React from 'react'

function Footer() {
  return (
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
              </p>
            </div>
            <div className="footer-col col-md-4">
              <h3>Around the Web</h3>
              <ul className="list-inline">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/leanjscom"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-github" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/leanjscom"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/leanjscom/"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>About ReactJS Academy</h3>
              <p>
                <a href="https://reactjs.academy/">ReactJS Academy</a>
                <span>
                  ReactJS Academy is Europes longest running dedicated React,
                  Redux, and GraphQL training.
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
              <span>Copyright &copy;</span>{' '}
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
  )
}

export default Footer
