const { DecodeToken } = require("../utility/TokenHelper");
module.exports = (req, res, next) => {
  let token = req.headers["token"];
  if (!token) {
    token = req.cookies["token"];
  }
  let decoded = DecodeToken(token);
  if (decoded === null) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  } else {
    let id = decoded.user["_id"];
    let phoneNumber = decoded.user["phoneNumber"];
    req.headers.id = id;
    req.headers.phoneNumber = phoneNumber;
    next();
  }
};
