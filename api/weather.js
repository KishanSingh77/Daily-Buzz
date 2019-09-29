const express = require("express");
const router = express.Router();
const { apiKey } = require("../secrets/cred");
const url = "http://api.openweathermap.org/data/2.5/weather";
const request = require("request");
let userCount = 0;

router.get("/:location", (req, res, next) => {
  userCount++;
  const location = req.params.location;
  console.log(userCount);

  request({
    uri: url + `?q=${location}&APPID=${apiKey}`
  }).pipe(res);
});

router.get("/userCount", (req, res, next) => {
  res.send(userCount);
});

module.exports = router;
