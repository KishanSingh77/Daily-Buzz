const express = require("express");
const router = express.Router();
const request = require("request");
const mongoose = require("mongoose");
const searchWordSchema = require("../Models/Search_Keyword");
// const news_ejs = require("../view/news");

const { googleNewsApiKey, news_url } = require("../secrets/Credentials");

router.get("/:search", async (req, res, next) => {
  const search_keyword = req.params.search;

  //save search to Database
  const searched_Word = new searchWordSchema({
    word: search_keyword
  });

  searched_Word.save().then(data => console.log("data saved"));

  const urlQuery = news_url + `?q=${search_keyword}&apiKey=${googleNewsApiKey}`;

  request({ url: urlQuery }, (error, response, body) => {
    let output = JSON.parse(body);
    //   let display_header  = "<div class="header" ><style>
    //   h1 /{color:red//;}
    //   p {color:blue;}
    //   </style> <a href="#default" class="logo">CompanyLogo</a> <div class="header-right">
    //     <a class="active" href="#home">Home</a>
    //     <a href="#contact">Contact</a>
    //     <a href="#about">About</a>
    //   </div>
    // </div>";

    let display = '<h1 style="text-align:center;">Daily Buzz</h1>';
    //  console.log(output);

    // output.articles.forEach(article => {
    //   display = display.concat(
    //     "<h4>Source : " +
    //       article.source.name +
    //       "</h4><h1>" +
    //       article.title +
    //       "</h1> " +
    //       "<h4> By " +
    //       article.author +
    //       "</h4> " +
    //       "<h4> " +
    //       article.publishedAt +
    //       "</h4> " +
    //       article.description +
    //       '<a href="' +
    //       article.url +
    //       '" >' +
    //       article.url +
    //       " </a>" +
    //       '<img src="' +
    //       article.urlToImage +
    //       '"  style="width:400px;height:400px;" />' +
    //       // article.urlToImage +

    //       "<h4> " +
    //       article.content +
    //       "</h4> " +
    //       "<hr>"
    //   );
    // });

    // res.send(display);
    res.render("news", { articles: output.articles });
  });
});

module.exports = router;
