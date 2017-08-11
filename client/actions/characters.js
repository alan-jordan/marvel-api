import request from 'superagent'

export const setCharacterName = (name) => {
  return {
    type: 'SET_CHARACTER_NAME',
    name
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
