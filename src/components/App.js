import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import booksMockData from '../mocks/books'

function App() {
  const [books, setBooks] = useState(booksMockData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setBooks(
      filter === 'All'
        ? booksMockData
        : booksMockData.filter((book) => book.category === filter)
    )
  }

  const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  const tabItems = filters.map((filter) => (
    <li
      className={filter === selectedFilter ? 'active' : ''}
      key={filter}
      onClick={() => selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ))

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Library
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="hidden-xs">
              <a href="#about">About us</a>
            </li>
            <li>
              <button onClick={toggleMenu} className="btn btn-lg btn-outline">
                <i className="fa fa-graduation-cap" /> <span>Training</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Header title="By React GraphQL Academy" />

      <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills text-center">{tabItems}</ul>
            </div>
          </div>
          <div className="row book-list">
            {books.map((book) => (
              <div className="col-xs-6 col-sm-3" key={book.id}>
                <div className="thumbnail">
                  <img alt="" className="img-responsive" src={book.cover} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                . This web site will help you understand the fundamental piece
                of ReactJS, components. You'll learn how to break an app in
                components (AKA componentization) and flow data accross them.
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                This ReactJS web site works, but it's not well implemented. The
                problem, the developer didn't think in React and there aren't
                many components. We challenge you to fork the repo an
                componentizise the app to unleash the power of ReactJS.
              </p>
            </div>
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leanjscom/thinking-in-react"
                className="btn btn-lg btn-outline"
              >
                <i className="fa fa-code-fork" /> Fork me on Github
              </a>
            </div>
          </div>
        </div>
      </section>

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
                <h3>About React GraphQL Academy</h3>
                <p>
                  <a href="https://reactgraphql.academy/">
                    React GraphQL Academy
                  </a>
                  <span>
                    React GraphQL Academy is Europes longest running dedicated
                    React, Redux, and GraphQL training.
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
    </div>
  )
}

export default App
