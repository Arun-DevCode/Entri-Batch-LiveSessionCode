const express = require("express");

//File imports
const {
  handleCreateStudent,
  getAllStudents,
  getStudent,
} = require("../controllers/student.controller");

//Router setup
const StudentRouter = express.Router();

//Route
// Todo : To list all students
StudentRouter.get("/", getAllStudents);

// Todo : To list a student
StudentRouter.get("/:name", getStudent);

// Todo : To create a student
StudentRouter.post("/create-student", handleCreateStudent);

//Todo : To update a student
// StudentRouter.put("/update-student");

//Todo : To delete a student
// StudentRouter.delete("/delete-student");
module.exports = StudentRouter; // export default router
