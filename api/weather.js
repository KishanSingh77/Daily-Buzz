const express = require("express");
const router = express.Router();
const { openWeatherMapApiKey, weather_url } = require("../secrets/Credentials");

const request = require("request");
let userCount = 0;
let places = [];

router.get("/:location", (req, res, next) => {
  userCount++;
  const location = req.params.location;
  places.push(location);
  const urlQuery = weather_url + `?q=${location}&APPID=${openWeatherMapApiKey}`;

  request({ url: urlQuery }, (error, response, body) => {
    res.send(body);
  });
});

router.get("/users/places", (req, res, next) => {
  res.send("<h1>People checked for " + places.toString() + "</h1>");
});

router.get("/users/count", (req, res, next) => {
  res.send("<h1>People count " + userCount + "</h1>");
});

module.exports = router;
