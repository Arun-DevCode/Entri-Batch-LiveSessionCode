import { users } from "../models/users.js";

// Authenticate
const handleUserAuth = (req, res, next) => {
  const userDetails = req.body;
  try {
    console.log("Middleware running..");

    // Check permission
    const isMatch = users.find(
      (user) => user.role.toLowerCase() === userDetails.role.toLowerCase()
    );

    if (!isMatch) {
      throw new Error("Unauthorized user. Contact admin");
    }

    // Req forward
    // next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
};

export default handleUserAuth;
