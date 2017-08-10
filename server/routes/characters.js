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
    .get(`${process.env.URL}/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error
      ? console.log(error)
      : res.json(response.body)
    })
})



// utils.createHash(timeStamp, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY)

module.exports = router
