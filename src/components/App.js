import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Navbar from './Navigations/Navbar'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books'

function App2() {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  const handleCheckBoxToggle = e => setChecked(!checked)
  const handleTextChange = e => setText(e.target.value)
  return(
   <React.Fragment>
      <input 
        type="text" 
        value={text} 
        onChange={handleTextChange} 
      />
       <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleCheckBoxToggle} 
      />
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
