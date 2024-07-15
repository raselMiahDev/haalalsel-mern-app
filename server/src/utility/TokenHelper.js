const jwt = require("jsonwebtoken");
const { jwt_secrete } = require("../config");
exports.EncodeToken = (user) => {
  return jwt.sign(user, jwt_secrete, {
    expiresIn: "7d",
  });
};

exports.DecodeToken = (token) => {
  try {
    return jwt.verify(token, jwt_secrete);
  } catch (err) {
    return null;
  }
};
