import request from "superagent";

import * as errors from "./errors";

export const getCharacter = characterId => {
  return dispatch => {
    request
      .get(`/api/v1/characters/${characterId}`)
      .end(
        (err, res) =>
          err
            ? dispatch(errors.throwError(err.message))
            : dispatch(setCharacter(res.body.data))
      );
  };
};

export const setCharacter = characterObj => {
  console.log(characterObj);
  return {
    type: "SET_CHARACTER",
    character: {
      id: characterObj.results[0].id,
      name: characterObj.results[0].name,
      characterImage: `${characterObj.results[0].thumbnail.path}/detail.${
        characterObj.results[0].thumbnail.extension
      }`,
      description: `${characterObj.results[0].description}`
    }
  };
};
