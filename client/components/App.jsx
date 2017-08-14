import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import CharacterCard from './CharacterCard'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <CharacterCard />
    </div>
  </Router>
)

export default App
