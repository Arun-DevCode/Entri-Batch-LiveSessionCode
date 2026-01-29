import express from "express";
import dotenv from "dotenv";

dotenv.config();

import UserRouter from "./src/router/user.router.js";
import DbConnection from "./src/config/db.config.js";

const app = express();

// Middleware
app.use(express.json());

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
