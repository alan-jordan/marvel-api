function characters (state = {}, action = {}) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return action.characterObj
    default:
      return state
  }
}

export default characters
