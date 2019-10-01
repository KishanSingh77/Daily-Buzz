const express = require("express");
const router = express.Router();
const request = require("request");

const { googleNewsApiKey, news_url } = require("../secrets/Credentials");

router.get("/:search", (req, res, next) => {
  const search_keyword = req.params.search;
  const urlQuery = news_url + `?q=${search_keyword}&apiKey=${googleNewsApiKey}`;

  request({ url: urlQuery }, (error, response, body) => {
    let output = JSON.parse(body);
    let display = '<h1 style="text-align:center;">News DashBoard</h1>';
    console.log(output[0]);

    // <p style="text-align:center;">Learn for free</p>

    output.articles.forEach(article => {
      display = display.concat(
        "<h4>Source : " +
          article.source.name +
          "</h4><h1>" +
          article.title +
          "</h1> " +
          "<h4> By " +
          article.author +
          "</h4> " +
          "<h4> " +
          article.publishedAt +
          "</h4> " +
          article.description +
          '<a href="' +
          article.url +
          '" >' +
          article.url +
          " </a>" +
          // article.urlToImage +

          "<h4> " +
          article.content +
          "</h4> "
      );
    });

    res.send(display);
  });
});

module.exports = router;