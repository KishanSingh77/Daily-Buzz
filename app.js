const express = require("express");
const app = express();
const weatherRoute = require("./api/weather");
const newsRoute = require("./api/news");
const mongoose = require("mongoose");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://sam:vivek_1234@cluster0-hj5an.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to db");
});

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("home");
});

app.use("/weather", weatherRoute);
app.use("/news", newsRoute);

app.listen(`${port}`, () => {
  console.log("Server running");
});
