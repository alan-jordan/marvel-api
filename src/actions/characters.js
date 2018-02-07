import request from 'superagent'

import * as errors from './errors'

export const getCharacter = (searchStr) => {
  return (dispatch) => {
    request
      .get(`/api/v1/characters/search/${searchStr}`)
      .end((err, res) => err ? dispatch(errors.throwError(err.message))
      : dispatch(setCharacter(res.body.data))
      .then(dispatch(getCharacterComics(res.body.data.results[0].id))))
  }
}

export const setCharacter = (characterObj) => {
  return {
    type: 'SET_CHARACTER',
    character: {
      name: characterObj.results[0].name,
      characterImage: `${characterObj.results[0].thumbnail.path}/detail.${characterObj.results[0].thumbnail.extension}`,
      description: `${characterObj.results[0].description}`
    }
  }
}

export const getCharacterComics = (id) => {
  return (dispatch) => {
    request
      .get(`/api/v1/characters/${id}/comics`)
      .end((err, res) => err ? dispatch(errors.throwError(err.message)) : dispatch(setCharacterComics(res.body.data.results)))
  }
}

export const setCharacterComics = (comicsArray) => {
  return {
    type: 'SET_CHARACTER_COMICS',
    comics: comicsArray
  }
}
