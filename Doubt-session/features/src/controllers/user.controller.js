import UserModel from "../model/user.model.js";
import { matchedData } from "express-validator";

export function createUserAccount(req, res) {
  try {
    const validatedData = matchedData(req);
    res.status(201).json({
      error: false,
      message: "user account created!",
      user: validatedData,
    });
  } catch (error) {
    console.log("Internal server error", error);
  }
}
