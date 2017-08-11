import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
    </div>
  </Router>
)

export default App
