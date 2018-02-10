import { combineReducers } from "redux";

import characters from "./characters";
import character from "./character";
import comics from "./comics";

export default combineReducers({
  characters,
  character,
  comics
});
