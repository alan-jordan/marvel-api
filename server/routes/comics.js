const express = require("express");
const router = express.Router();
const request = require("superagent");

var utils = require("../lib/utils");

require("dotenv").config();
const timeStamp = utils.getTimeStamp();
const hash = utils.createHash(
  timeStamp,
  process.env.PRIVATE_KEY,
  process.env.PUBLIC_KEY
);
const publicKey = process.env.PUBLIC_KEY;

router.get("/comics", (req, res) => {
  request
    .get(
      `${
        process.env.URL
      }/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    )
    .set("Accept", "application/json")
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body);
    });
});

router.get("/comics/:id", (req, res) => {
  request
    .get(
      `${process.env.URL}/v1/public/comics/${
        req.params.id
      }?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    )
    .set("Accept", "application/json")
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body);
    });
});

router.get("/comics/year/:year", (req, res) => {
  request
    .get(
      `${process.env.URL}/v1/public/comics?format=comic&startYear=${
        req.params.year
      }&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    )
    .set("Accept", "application/json")
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body);
    });
});

router.get("/comics/character/:id", (req, res) => {
  request
    .get(
      `${process.env.URL}/v1/public/characters/${
        req.params.id
      }/comics&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    )
    .set("Accept", "application/json")
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body);
    });
});

module.exports = router;
