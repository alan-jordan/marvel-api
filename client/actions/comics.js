import request from 'superagent'

import * as errors from './errors'

export const getComic = (id) => {
  return (dispatch) => {
    request
      .get(`/api/v1/comics/${id}`)
      .end((err, res) => err ? dispatch(errors.throwError(err.message)) : (res.body.data.results))
  }
}

export const setComic = (comicObj) => {
  return {
    type: 'SET_COMIC',
    comic: comicObj
  }
}

export const getComicDetails = (comicsArray) => {
  comicsArray.map((comic) => {
    getComic(comic.items)
  })
}
