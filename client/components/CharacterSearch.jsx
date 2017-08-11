import React from 'react'
import {connect} from 'react-redux'

class CharacterSearch extends React.Component {

  handleChange(e) {
    e.preventDefault()
    e.target.name = e.target.value
  }

  render() {
    return (
      <form>
        <input type='text' name='character' placeholder='find a character...' />
        <br />
        <input type='submit' value='search' />
      </form>
    )
  }
}

export default CharacterSearch
