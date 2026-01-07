import Express from "express";

const EmployeeRouter = Express.Router();

// Import controller
import { handleCreateEmployeeAccount } from "../controllers/employee.controller.js";

// Import middleware - auth
import handleUserAuth from "../middleware/useAuth.js";

// Employee Router

// 1. create employee
EmployeeRouter.post("/create", handleUserAuth, handleCreateEmployeeAccount);

//   .get()
//   .put()
//   .delete();

export default EmployeeRouter;

// http://localhost:3000/api/employee/create - POST
