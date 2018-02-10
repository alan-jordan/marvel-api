import update from "immutability-helper";

const initialState = {};

function characters(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "SET_CHARACTER":
      return update(state, { $set: action.character });
    default:
      return state;
  }
}

export default characters;
