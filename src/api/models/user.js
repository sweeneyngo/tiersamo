const mongoose = require("mongoose");

// not in development (scrap)
// src: https://www.robinwieruch.de/mongodb-express-setup-tutorial

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  name: { type: String, required: true },
  pass: { type: String, required: true },
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
});

module.exports = mongoose.model("User", userSchema);
