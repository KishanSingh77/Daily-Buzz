const express = require("express");
const app = express();
const weatherRoute = require("./api/weather");
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("home");
});

app.use("/weather", weatherRoute);

app.listen(`${port}`, () => {
  console.log("Server running");
});
