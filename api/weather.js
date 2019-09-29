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
  const urlQuery = url + `?q=${location}&APPID=${apiKey}`;

  // request({
  //   uri: urlQuery
  // }).pipe(res);

  request({ url: urlQuery }, (error, response, body) => {
    // body = JSON.parse(body);
    // console.log(body);

    // const coordinate =
    //   JSON.stringify(body.coord.lon) + " " + JSON.stringify(body.coord.lat);
    // const weather = JSON.stringify(body.weather[0].description);
    // const temperature = JSON.stringify(body.main.temp);
    // const humidity = JSON.stringify(body.main.humidity);
    // const pressure = JSON.stringify(body.main.pressure);
    // const temp_min = JSON.stringify(body.main.temp_min);
    // const temp_max = JSON.stringify(body.main.temp_max);
    // const visibility = JSON.stringify(body.visibility);
    // const windSpeed = JSON.stringify(body.wind.speed);
    // const cloud = JSON.stringify(body.clouds.all);
    // const sunrise = JSON.stringify(body.sys.sunrise);
    // const sunset = JSON.stringify(body.sys.sunset);
    // const timezone = JSON.stringify(body.timezone);

    // let output = "<h3>" + coordinate + "<br/>" + weather + "</h3>";
    // res.send(output);
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
