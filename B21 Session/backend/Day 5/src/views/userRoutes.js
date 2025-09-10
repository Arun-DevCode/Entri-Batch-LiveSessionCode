import express from "express";
import {
  handleUserRegister,
  handleUserLogin,
} from "../controllers/users.controller.js";

//Router setup
const Router = express.Router();

//GET : To greetings to client
Router.post("/register", handleUserRegister);

//POST : To create a product
Router.post("/login", handleUserLogin);

//export router
export default Router;
