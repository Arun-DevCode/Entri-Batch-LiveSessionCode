// Express Route Step
const express = require("express");

// Router step
const PostRouter = express.Router();

// Post Routes
// to get all post
PostRouter.get("/post", (request, response) => {
  response.end("Posts fetched success");
});

// to create post
PostRouter.post("/create-post", (request, response) => {
  response.end("Created Post success");
});

// to update post
PostRouter.put("/post", (request, response) => {
  response.end("Posts fetched success");
});

// to delete a post
PostRouter.delete("/post", (request, response) => {
  response.end("Posts fetched success");
});

module.exports = PostRouter;
