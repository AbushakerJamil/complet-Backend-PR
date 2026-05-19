const express = require("express");
const authController = require("../controller/auth.controller");

const route = express.Router();

route.post("/register", authController.registerUser);
route.get("/test", authController.getRegister);

module.exports = route;
