const jwt = require("jsonwebtoken");
exports.EncodeToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRATE, {
    expiresIn: "7d",
  });
};

exports.DecodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRATE);
  } catch (err) {
    return null;
  }
};
