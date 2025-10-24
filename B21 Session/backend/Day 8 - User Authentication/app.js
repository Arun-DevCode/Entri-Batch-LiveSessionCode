import express from "express";
import mongoose from "mongoose";

// FIle imports

import CommentModel from "./schema.js";

// App setup
const app = express();

// DB Connection
const connect = mongoose.connect("mongodb://localhost:27017/BlogsDB");
if (connect) {
  console.log("Connection Established!");
} else {
  console.log("Not Connected");
}

app.get("/get-all-comments", async (req, res) => {
  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 10);

  try {
    const comments = await CommentModel.find()
      .skip((page - 1) * limit)
      .limit(10);
    res.json(comments).status(200);
  } catch (error) {
    console.log("Failed to retrive data!");
    res.status(500).json({ message: "Failed to retrive data!" });
  }
});

// Server listen
app.listen(3000, () => console.log("sever running..."));
