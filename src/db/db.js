const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Databased Connected Sucessfuly");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

module.exports = connectDB;
