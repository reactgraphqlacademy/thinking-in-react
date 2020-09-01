import React from 'react'

import Header from './Header'
import Books from './Books'
import Footer from './Footer'
import About from './About'
import Navigations from './Navigations'

function App() {
  return (
    <div id="page-wrap">
      <Navigations />
      <Header title="By React GraphQL Academy" />
      <Books />
      <About />
      <Footer />
    </div>
  )
}

export default App
