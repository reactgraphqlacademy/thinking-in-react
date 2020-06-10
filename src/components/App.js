import React, { useState } from 'react'

import Header from './Header'
import Books from './Books'
import Footer from './Footer'
import About from './About'
import NavMenu from './Navigations/NavMenu'

function App() {
  return (
    <div id="page-wrap">
      <NavMenu />
      <Header title="By React GraphQL Academy" />
      <Books />
      <About />
      <Footer />
    </div>
  )
}

export default App
