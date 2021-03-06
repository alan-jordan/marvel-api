import update from "immutability-helper";

const initialState = [];

function characters(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHARACTER":
      return update(state, { $push: [action.character] });
    default:
      return state;
  }
}

export default characters;
