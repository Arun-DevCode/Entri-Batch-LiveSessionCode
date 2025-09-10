import express from "express";

//Router setup
const Router = express.Router();

//GET : To greetings to client
Router.get("/assignment", (req, res) => {
  res.json({ message: "assignement is fetched success!.." });
});

//POST : To create a product
Router.post("/create-assignment", (req, res) => {
  const assignmentData = req.body;
  res.json({ message: "assignment fetched!", assignment: assignmentData });
});

//export router
export default Router;
