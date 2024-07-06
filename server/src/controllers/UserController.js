const { EncodeToken } = require("../utility/TokenHelper");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
exports.SignUp = async (req, res) => {
  try {
    let reqBody = req.body;
    let existAccount = await UserModel.findOne({
      phoneNumber: reqBody.phoneNumber,
    });
    if (existAccount) {
      return res.status(200).json({ status: "Already have an account" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(reqBody.password, salt);
    req.body.password = hash;
    // Replace the original password with the hashed password
    reqBody.password = hash;
    // Create the user with the hashed password
    let data = await UserModel.create(reqBody);
    res
      .status(200)
      .json({
        status: true,
        message: "Account created successfully",
        data: data,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong", error: error.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    // Check if the user exists
    const user = await UserModel.findOne({ phoneNumber });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User is not registered" });
    }
    // password matching
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Crediantial" });
    }
    // generate token
    const token = EncodeToken({ user });
    // response
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });
    res.status(200).json({
      success: true,
      message: "User Login Successful",
      token: token,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.UserLogout = async (req, res) => {
  let cookieOption = {
    expires: new Date(Date.now() - 60 * 60 * 60 * 1000),
    httpOnly: false,
  };
  res.cookie("token", "", cookieOption);
  return res.status(200).json({ status: "success" });
};
