import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Import
import DBConnection from "./config/db.config.js";

// App Router
import UserRouter from "./router/userRoute.js";
import PostRouter from "./router/postRoute.js";

// App Config
const app = express();
dotenv.config(); // env loader

// App middleware
app.use(express.json()); // request body parser
app.use(cors());
app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);

//DB Connection
DBConnection();
// Server listen
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running on http:/localhost:${PORT}/`);
});
