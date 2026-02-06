import express, { response } from "express";
import dotenv from "dotenv";
import morgan from "morgan"; // req - res monitor
import rateLimit from "express-rate-limiter";

dotenv.config();

import UserRouter from "./src/router/user.router.js";
import DbConnection from "./src/config/db.config.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

  const limiter = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 minutes
    max: 3, // limit each IP to 100 requests
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    legacyHeaders: true,
  });

  app.use(limiter);

// Routes
app.use("/api/user", UserRouter);

// Health check / default route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Database connection
DbConnection()
  .then(() => {
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed ❌", error);
    process.exit(1);
  });
