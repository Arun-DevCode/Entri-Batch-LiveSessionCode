const jwt = require("jsonwebtoken");
const UserModel = require("../models/users");

async function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // authorization : "Bearer Token" => ["Bearer","Token"]

  // Token Validation
  if (!token) {
    return res
      .status(400)
      .json({ message: "Access Denied!. Please go to login" });
  }
  //Secret KEY validation
  const isVerified = jwt.verify(token, "entri@2025");
  if (!isVerified) {
    return res
      .status(401)
      .json({ message: "Access Denied! Pleace contact admin for assistance" });
  }

  // Check user validation
  const isMatch = await UserModel.findOne({ email: isVerified.email });
  if (!isMatch) {
    return res.json({ message: "Unauthorized User!" });
  }

  // Update payload data
  req.user = { role: isMatch.role, userId: isMatch._id };
  // Forwared request
  next();
  try {
  } catch (error) {
    return req
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = authenticate;
