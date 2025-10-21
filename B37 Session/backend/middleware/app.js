import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

// File imports
import AppRouter from "./src/views/appRouter.js";

// Path construct
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

//App setup
const app = express();
// Env config

dotenv.config();
// app.use((request, response, next) => {
//   console.log("Middleware running..");
//   //   response.end("You will receive your payment within 24hrs.");
//   // Request forward to route handler(API Endpoint)
//   next();
// });
app.use(express.json()); // Body parser
const folderPath = path.join(__dirname, "src", "template");
app.use(express.static(folderPath));

// Router config
app.use("/api", AppRouter);

app.get("/", (req, res) => {
  console.log("Route handler Running..");
  res.end("Payment Success!");
});

// SERVER PORT NO
const PORT = process.env.PORT;

// Server runs
app.listen(PORT, () => console.log("Server Running..", PORT));
