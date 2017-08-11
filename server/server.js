const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const characters = require('./routes/characters')
const comics = require('./routes/comics')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', characters)
server.use('/api/v1', comics)

module.exports = function(db) {
  server.set('db', db)
  return server
}
