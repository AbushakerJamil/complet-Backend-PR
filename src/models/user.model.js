const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("User", newSchema);

module.exports = userModel;
