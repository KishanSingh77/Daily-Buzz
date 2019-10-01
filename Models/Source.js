const mongoose = require("mongoose");

const sourceSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Source", sourceSchema);
