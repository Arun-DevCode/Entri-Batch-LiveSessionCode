import Express from "express";
import { config } from "dotenv";
import cors from "cors";

// File Imports
import DBCONNECTION from "./src/config/db.config.js";
import UserRouter from "./src/views/UserRoutes.js";

//App setup
const app = Express();

// Env
config();
app.use(cors());

// middleware
app.use(Express.json());
app.use(UserRouter);

// API Endpoints
app.get("/", (req, res) => res.json("Welcome to server!"));

// PORT NO
const PORTNO = process.env.PORT_NO || 4230;

// DB CONNECTION
DBCONNECTION();

// Server runs
app.listen(PORTNO, () => {
  console.log(`Server running on http://localhost:${PORTNO}/`);
});
