import Express from "express";

//Route Import
import UserRoute from "./src/routers/userRoute.js";

// App setup
const app = Express();

// App Middleware
app.use(Express.json()); // body-parser

//App Router
app.use(UserRoute);

// Initial-Route
app.use("/", (req, res) => {
  res.json({ message: "Server running.." });
});

//Server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server Running..");
});