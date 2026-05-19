const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", newSchema);

module.exports = userModel;
