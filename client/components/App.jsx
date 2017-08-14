import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import CharacterCard from './CharacterCard'
import CharacterSearch from './CharacterSearch'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <CharacterSearch />
      <CharacterCard />
    </div>
  </Router>
)

export default App
