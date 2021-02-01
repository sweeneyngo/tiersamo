const mongoose = require("mongoose");

// not in development (scrap)
// src: https://www.robinwieruch.de/mongodb-express-setup-tutorial

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  pass: String,
});

module.exports = mongoose.model("User", userSchema);
