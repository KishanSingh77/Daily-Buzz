const express = require("express");
const router = express.Router();
const { apiKey } = require("../secrets/cred");
const url = "http://api.openweathermap.org/data/2.5/weather";
const request = require("request");
let userCount = 0;

router.get("/:location", (req, res, next) => {
  userCount++;
  const location = req.params.location;

  request({
    uri: url + `?q=${location}&APPID=${apiKey}`
  }).pipe("Welcome user" + userCount + res);
});

module.exports = router;
