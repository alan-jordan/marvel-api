import request from 'superagent'

import * as errors from './errors'

export const getCharacter = (searchStr) => {
  return (dispatch) => {
    request
      .get(`/api/v1/characters/search/${searchStr}`)
      .end((err, res) => err ? dispatch(errors.throwError(err.message) : dispatch(setCharacter(res.body.data))))
  }
}

export const setCharacter = (characterObj) => {
  return {
    type: 'SET_CHARACTER',
    characterObj
  }
}

// Need to create actions to
// Set character name in store
// Create an API request to go off and search for the character
// Set a loading state
// Once data is back
// Turn loading state off
// Set character data into store
// Display data
