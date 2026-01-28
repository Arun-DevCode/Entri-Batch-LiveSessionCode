import express from "express";

const PostRouter = express.Router();

// Imports
import getAllPost from "../controller/post.controller.js";
import authenticate from "../middleware/auth.js";

// Root Router
PostRouter.get("/get-all-post", authenticate, getAllPost);

export default PostRouter;
