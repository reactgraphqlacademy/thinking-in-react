import React from 'react'

function About() {
  return (
    <section id="about" className="success">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>About The Library</h2>
            <hr className="star-light" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-2">
            <p>
              This library is an exercise for building UI in a{' '}
              <strong style={{ textDecoration: 'underline' }}>
                declarative way
              </strong>
              . This web site will help you understand the fundamental piece of
              ReactJS, components. You'll learn how to break an app in
              components (AKA componentization) and flow data accross them.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              This ReactJS web site works, but it's not well implemented. The
              problem, the developer didn't think in React and there aren't many
              components. We challenge you to fork the repo an componentizise
              the app to unleash the power of ReactJS.
            </p>
          </div>
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/reactgraphqlacademy/thinking-in-react"
              className="btn btn-lg btn-outline"
            >
              <i className="fa fa-code-fork" /> Fork me on Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
