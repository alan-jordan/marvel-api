import React from 'react'
import {connect} from 'react-redux'

import {getCharacter} from '../actions/characters'

class CharacterSearch extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(getCharacter(e.target.character.value))
  }

  render() {
    return (
      <form name='characterSearch' className='characterSearch'  onSubmit={this.handleSubmit.bind(this)} >
        <input type='text' name='character' placeholder='find a character...' />
        <input type='submit' value='search' />
      </form>
    )
  }
}

export default connect()(CharacterSearch)
