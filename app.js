const express = require("express");
const app = express();
const weatherRoute = require("./api/weather");

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/weather", weatherRoute);

app.listen("3000", () => {
  console.log("Server running");
});
