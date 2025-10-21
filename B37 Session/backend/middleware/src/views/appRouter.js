import express from "express";

// Router setup
const AppRouter = express.Router();

// Router-level middleware
AppRouter.use((req, res, next) => {
  console.log("Router middleware running..");

  // Request forward
  next();
});
// Test route
AppRouter.get("/", (req, res) => res.json("User response.."));

// User Route
AppRouter.post("/register", (req, res) => res.json(req.body));

export default AppRouter;
