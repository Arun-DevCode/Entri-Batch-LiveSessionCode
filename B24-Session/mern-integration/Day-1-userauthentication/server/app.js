import express from "express";
import dotenv from "dotenv";

//Import
import DBConnection from "./config/db.config.js";

// App Router
import UserRouter from "./router/userRoute.js";

// App Config
const app = express();
dotenv.config(); // env loader

// App middleware
app.use(express.json()); // request body parser
app.use("/api/user", UserRouter);

//DB Connection
DBConnection();
// Server listen
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running on http:/localhost:${PORT}/`);
});
