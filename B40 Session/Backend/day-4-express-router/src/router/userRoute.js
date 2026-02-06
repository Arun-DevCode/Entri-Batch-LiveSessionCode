import express from "express";

// User Router Setup
const UserRouter = express.Router();

// User API Endpoints
// 1. User Account Create
UserRouter.post("/create-account", (req, res) =>
  res.json({ message: "User Account Created.." }),
);
// 2. Update User Profile
UserRouter.put("/update-account", (req, res) =>
  res.json({ message: "User Account Updated.." }),
);

// 3. User Profile Upload
UserRouter.post("/upload-profile", (req, res) =>
  res.json({ message: "User Profile Uploaded.." }),
);

// 4. User Account Removed
UserRouter.delete("/remove-account", (req, res) =>
  res.json({ message: "User Account removed.." }),
);

// Export User Router
export default UserRouter;
