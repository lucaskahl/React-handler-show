import React, { Component } from 'react'

import AppContent from './components/appContent'

class App extends Component {

  handleSearch (e) {
      const value = e.target.value
      const keyCode = e.which || e.keycode
      const ENTER = 13

      if(keyCode == ENTER) {
        console.log(value);
    }
  }

  render() {  
    return <AppContent 
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

export default App
