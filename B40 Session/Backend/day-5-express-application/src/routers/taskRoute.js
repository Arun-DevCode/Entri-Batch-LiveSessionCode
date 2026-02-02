import express from "express";

//Imports
import { createTask, getAllTasks } from "../controllers/task.controller.js";

// Router Setup
const TaskRouter = express.Router();

// Task Routes
TaskRouter.post("/create-task", createTask);

TaskRouter.get("/get-all-tasks", getAllTasks);

// Export Router
export default TaskRouter;
