import { body, query } from "express-validator";

// User Request Body
export const userValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required!")
    .isString()
    .trim()
    .isLength({ min: 3, max: 32 })
    .withMessage("Name must be at least 3 characters"),
  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isString()
    .trim()
    .isEmail()
    .withMessage("Invalid email format."),
  body("password").notEmpty().withMessage("Password is required!").isString(),
];

export const productSearch = [query("search").notEmpty()];
