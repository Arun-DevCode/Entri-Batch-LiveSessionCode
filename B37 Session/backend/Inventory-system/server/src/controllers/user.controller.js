import JWT from "jsonwebtoken";
import { config } from "dotenv";
import bcrypt from "bcryptjs";

// Env config
config();

// File Imports
import UserModel from "./../models/users.js";

const UserActions = {
  hanldeUserRegister: async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    try {
      // Field validation
      if (!name || !email || !password) {
        return res
          .status(201)
          .json({ message: "Please fill all required filed!" });
      }

      //Check user exists
      const isUserFound = await UserModel.findOne({ email });
      if (isUserFound) {
        return res
          .status(201)
          .json({ message: "Already user exists. Please login!" });
      }

      // Hashing password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Store User credentials into DB
      const newUser = new UserModel({ name, email, password: hashedPassword });
      const isSaved = await newUser.save();

      // Invalid response
      if (!isSaved) {
        throw new Error("User Data not saved!");
      }

      // Success Response
      res.status(201).json({ message: "User Registered Success!" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occured. While Registering!" });
    }
  },

  handleUserLogin: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Field validation
      if (!email || !password) {
        return res
          .status(201)
          .json({ message: "Please fill all required filed!" });
      }

      //Check user exists
      const isUserFound = await UserModel.findOne({ email });
      if (!isUserFound) {
        return res
          .status(201)
          .json({ message: "User not found. Please goto register!" });
      }

      // verify password
      const isPassword = await bcrypt.compare(password, isUserFound.password);
      if (!isPassword) {
        return res.status(500).json({ message: "Invalid Credentials." });
      }

      // Generate accessToken
      const accessToken = JWT.sign(
        { email: isUserFound?.email },
        process.env.JWT_SECRET_KEY
      );

      if (!accessToken) {
        throw new Error("An error occured. Please try again later");
      }
      // Success Response
      res
        .status(200)
        .json({ message: "User login Success!", token: accessToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default UserActions;
