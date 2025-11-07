import JWT from "jsonwebtoken";
import { config } from "dotenv";
import UserModel from "../models/users.js";

// env load
config();

async function authenticate(req, res, next) {
  try {
    // Token validation
    const accessToken = req.headers.authorization.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json("Access denied! please contact admin.");
    }

    // Token Verification
    const isTokeValid = JWT.verify(token, process.env.JWT_SECRET_KEY);
    if (!isTokeValid) {
      return res.status(401).json("Access denied! Please goto login");
    }

    // check user exists
    const isUserExists = await UserModel.findOne({ email: isTokeValid.email });
    if (!isUserExists) {
      return res.status(401).json("Unauthorized user! Please goto register.");
    }

    // foward request
    next();
  } catch (error) {
    console.log("failed to valid user token!");
  }
}

export default authenticate;
