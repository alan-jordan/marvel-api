import request from 'superagent'

import * as errors from './errors'

export const getComic = (id) => {
  return (dispatch) => {
    request
      .get(`/api/v1/comics/${id}`)
      .end((err, res) => err ? dispatch(errors.throwError(err.message)) : dispatch(setComic(res.body.data)))
  }
}

export const setComic = (comicObj) => {
  return {
    type: 'SET_COMIC',
    comic: comicObj
  }
}
