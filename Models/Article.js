const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model("Article", articleSchema);

module.exports = { Article };
