const express = require("express");
const router = express.Router();
const { apiKey } = require("../secrets/cred");
const url = "http://api.openweathermap.org/data/2.5/weather";
const request = require("request");
let userCount = 0;
let places = [];

router.get("/:location", (req, res, next) => {
  userCount++;
  const location = req.params.location;
  places.push(location);
  console.log(userCount);

  request({
    uri: url + `?q=${location}&APPID=${apiKey}`
  }).pipe(res);
});

router.get("/users/userCount", (req, res, next) => {
  console.log(userCount);
  console.log(places);

  res.send("<h1>People checked for " + places.toString + "</h1>");
});

module.exports = router;
