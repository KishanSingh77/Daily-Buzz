const express = require("express");
const router = express.Router();
const https = require("https");
const { apiKey } = require("../secrets/cred");
const url = "http://api.openweathermap.org/data/2.5/weather";
const request = require("request");

router.get("/:location", (req, res, next) => {
  const location = req.params.location;

  request({
    uri: url + `?q=${location}&APPID=${apiKey}`
  }).pipe(res);
});

module.exports = router;
