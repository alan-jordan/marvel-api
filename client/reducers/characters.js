const initialState = {
  name: 'None selected',
  characterImage: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2420378/580/580/m1/fpnw/wm0/1080-.jpg?1489744788&s=8e8c4c9ca5dbda3a322fa256c2f0a71d',
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
