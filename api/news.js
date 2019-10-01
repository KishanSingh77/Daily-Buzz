const express = require("express");
const router = express.Router();
const request = require("request");
const mongoose = require("mongoose");
const searchWordSchema = require("../Models/Search_Keyword");

const { googleNewsApiKey, news_url } = require("../secrets/Credentials");

router.get("/:search", (req, res, next) => {
  const search_keyword = req.params.search;

  //save search to Database
  const searched_Word = new searchWordSchema({
    word: search_keyword
  });

  searched_Word.save().then(data => console.log("data saved"));

  const urlQuery = news_url + `?q=${search_keyword}&apiKey=${googleNewsApiKey}`;

  request({ url: urlQuery }, (error, response, body) => {
    let output = JSON.parse(body);
    let display = '<h1 style="text-align:center;">News DashBoard</h1>';
    //  console.log(output);

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
          '<img src="' +
          article.urlToImage +
          '"  style="width:500px;height:400px;" />' +
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
