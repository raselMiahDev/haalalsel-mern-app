const UserModel = require("../models/UserModel");
module.exports = async (req, res, next) => {
  try {
    const phoneNumber = req.headers.phoneNumber;
    const query = { phoneNumber: phoneNumber };
    const user = await UserModel.findOne(query);
    if (user?.role !== "admin") {
      return res
        .status(403)
        .json({ status: false, message: "Forbidden Access" });
    }
    next();
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
