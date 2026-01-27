import bcrypt from "bcryptjs";

// User Controller
import UserModel from "../model/user.js";

// 1. To create user account
export const handleToCreateAccount = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Field validation
    if (!name || !email || !password) {
      return res.json({
        error: false,
        message: "Please fill all required fields.",
      });
    }

    // Hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check User Exists
    const isUserFound = await UserModel.find({ email });
    if (!isUserFound && isUserFound.length === 0) {
      return res.json({
        error: true,
        message: "User already exists. Please go to login.",
      });
    }
    // Store User
    const now = new Date();
    const payload = {
      name,
      email,
      password: hashedPassword,
      createAt: now,
    };
    const newUser = await UserModel.insertOne(payload);

    if (!newUser) {
      return res.json({
        error: true,
        message: "failed to create user account. Try later",
      });
    }

    res.json({ error: false, message: "User Account Created..." });
  } catch (error) {
    console.log(error);
  }
};
