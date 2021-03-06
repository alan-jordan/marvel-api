const express = require('express')
const router = express.Router()
const request = require('superagent')

var utils = require('../lib/utils')

require('dotenv').config()
const timeStamp = utils.getTimeStamp()
const hash = utils.createHash(timeStamp, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY)
const publicKey = process.env.PUBLIC_KEY

router.get('/characters', (req, res) => {
  request
    .get(`${process.env.URL}/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
    })
})

router.get('/characters/:id', (req, res) => {
  request
    .get(`${process.env.URL}/v1/public/characters/${req.params.id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
    })
})

router.get('/characters/search/:name', (req, res) => {
  request
    .get(`${process.env.URL}/v1/public/characters?name=${req.params.name}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
    })
})

router.get('/characters/:id/comics', (req, res) => {
  request
    .get(`${process.env.URL}/v1/public/characters/${req.params.id}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
    })
})

module.exports = router
