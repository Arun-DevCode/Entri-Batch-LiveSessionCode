import Express from "express";

//Route Import
import UserRoute from "./src/routers/userRoute.js";
import EmployeeRouter from "./src/routers/employee.js";

// App setup
const app = Express();

// App Middleware
app.use(Express.json()); // body-parser

//App Router
app.use("/api/employee", EmployeeRouter);

// Initial-Route
app.use("/", (req, res) => {
  res.json({ message: "Server running.." });
});

//Server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server Running..");
});
