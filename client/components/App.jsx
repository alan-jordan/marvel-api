import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import CharacterSearch from './CharacterSearch'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <Route path='/' component={CharacterSearch} />
    </div>
  </Router>
)

export default App
