import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Navbar from './Navigations/Navbar'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books'

function App2() {
  const [state, setState] = useState({ 
    text: "",
    checked: false
  })
  const mergeState = partialState => 
    setState(prevState => ({
      ...prevState,
      ...partialState
    }))
  const handleCheckBoxToggle = e => mergeState({checked: !state.checked})
  const handleTextChange = e => mergeState({text: e.target.value})
  return(
   <React.Fragment>
      <input 
        type="text" 
        value={state.text} 
        onChange={handleTextChange} 
      />
       <input 
        type="checkbox" 
        checked={state.checked} 
        onChange={handleCheckBoxToggle} 
      />
      <ul>
        <li>{state.text}</li>
        <li>{state.checked.toString()}</li>
      </ul>
   </React.Fragment>
    
  )
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      menu: { open : false }
    }
  }

  toggleMenu = () => {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  render() {
    const { menu } = this.state

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />
        <Navbar toggleMenu={this.toggleMenu} />
        <Header title="Library" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App2
