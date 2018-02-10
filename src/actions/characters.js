import request from "superagent";

import * as errors from "./errors";

export const getCharacter = (characterId, key) => {
  return dispatch => {
    request
      .get(`/api/v1/characters/${characterId}`)
      .end(
        (err, res) =>
          err
            ? dispatch(errors.throwError(err.message))
            : dispatch(setCharacter(res.body.data, key))
      );
  };
};

export const setCharacter = (characterObj, key) => {
  return {
    type: "SET_CHARACTER",
    character: {
      key: key,
      id: characterObj.results[0].id,
      name: characterObj.results[0].name,
      characterImage: `${characterObj.results[0].thumbnail.path}/detail.${
        characterObj.results[0].thumbnail.extension
      }`,
      description: `${characterObj.results[0].description}`
    }
  };
};

export const getCharacterComics = id => {
  return dispatch => {
    request
      .get(`/api/v1/characters/${id}/comics`)
      .end(
        (err, res) =>
          err
            ? dispatch(errors.throwError(err.message))
            : dispatch(setCharacterComics(res.body.data.results))
      );
  };
};

export const setCharacterComics = comicsArray => {
  return {
    type: "SET_CHARACTER_COMICS",
    comics: comicsArray
  };
};
