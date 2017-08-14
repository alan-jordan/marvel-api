const initialState = {
  name: 'None selected',
  characterImage: 'http://via.placeholder.com/250x250',
  description: 'None yet'
}

function characters (state = initialState, action = {}) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return action.character
    default:
      return state
  }
}

export default characters
