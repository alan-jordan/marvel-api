const initialState = {
  title: 'None',
  coverImage: 'https://vignette4.wikia.nocookie.net/marveldatabase/images/6/6c/Amazing_Fantasy_Vol_1_15.jpg/revision/latest?cb=20170406022750',
  characters: []
}

function characters (state = initialState, action = {}) {
  switch(action.type) {
    case 'SET_COMIC':
      return action.comic
    default:
      return state
  }
}

export default characters
