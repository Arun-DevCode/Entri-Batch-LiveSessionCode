import mongoose from "mongoose";

// Create a schema
const CommentSchema = mongoose.Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
});

// Create a model/collection
const CommentModel = mongoose.model("blogs", CommentSchema);

export default CommentModel;
