function characters(state = [], action = {}) {
  switch (action.type) {
    case "SET_COMICS":
      return action.comics;
    default:
      return state;
  }
}

export default characters;
