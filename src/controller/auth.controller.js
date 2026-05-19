const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      msg: "User Already exist ",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    msg: "User registered Successfully",
    user,
    token,
  });
}

async function getRegister(req, res) {
  console.log("Cookies", req.cookies);
  res.json({
    msg: "Test route",
    cookies: req.cookies,
  });
}

module.exports = { registerUser, getRegister };
