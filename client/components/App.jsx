import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import CharacterCard from './CharacterCard'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <Route path ='/test' exact component={CharacterCard} />
    </div>
  </Router>
)

export default App
