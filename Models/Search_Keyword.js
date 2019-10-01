const mongoose = require("mongoose");

const searchWordSchema = mongoose.Schema({
  word: { type: String, required: true }
});

module.exports = mongoose.model("searchWordSchema", searchWordSchema);
