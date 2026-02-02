import express from "express";

//Imports
import UserRouter from "./src/routers/userRoute.js";
import TaskRouter from "./src/routers/taskRoute.js";

// App Setup
const app = express();

// App Middleware
app.use(express.json()); // Body parser

// App Router
app.use("/api/user", UserRouter);
app.use("/api/task", TaskRouter);

// Server listen
const PORT = 4000; // ID
app.listen(PORT, () => console.log("Server is running.."));
