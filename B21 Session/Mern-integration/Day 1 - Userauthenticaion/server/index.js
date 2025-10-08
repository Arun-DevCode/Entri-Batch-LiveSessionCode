const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// File Imports
const DBConnector = require("./config/db");
const authenticate = require("./middleware/authenticate");
const authorization = require("./middleware/authorization");
const UserModel = require("./models/users");
const BlogModel = require("./models/blog");

//App setup
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan());
//App Router

//Step 1 : User registeration - A/c
app.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    console.log(req.body);

    // Filed validation
    if (!username || !email | !password) {
      return res.json({ success: false, message: "All fiedls are required!" });
    }

    // Hashing Password
    const hashPassword = await bcrypt.hash(password, 10);

    // Store data
    // const newUser = await UserModel.create({
    //   username,
    //   email,
    //   password: hashPassword,
    // });

    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
      role,
    });

    await newUser.save();
    // Response to client
    res
      .status(201)
      .json({ success: true, message: "User Created Success", user: newUser });
  } catch (error) {
    console.log(error);
  }
});

//Step 2 : User authenticate - Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    // validation
    if (!email || !password) {
      return res.status(404).json({ message: "All fields are required!" });
    }

    // Validate on User exist
    const isExistUser = await UserModel.findOne({ email: email });
    if (!isExistUser) {
      return res
        .status(404)
        .json({ message: "User not found.Please go to register!" });
    }

    // Generate secret key
    const payload = {
      userId: isExistUser._id,
      email: isExistUser.email,
      role: isExistUser.role,
    };
    const token = jwt.sign(payload, "entri@2025", { expiresIn: "24hr" });

    // Success res to client
    res.status(200).json({
      success: true,
      message: "User loggedin success..",
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
});

//Step 3 : List all user with authentication
app.get("/list-all-users", async (req, res) => {
  console.log(req.user);
  try {
    const UsersList = await UserModel.find();

    //Validation
    if (!UsersList) {
      return res
        .status(404)
        .json({ success: false, message: "No Users Found!" });
    }

    res.status(200).json({
      success: true,
      message: "Users fetched success!",
      users: UsersList,
    });
  } catch (error) {
    return req.status(500).json({ success: false, message: "Internal Server" });
  }
});

// Step 4 : To create a blog
app.post(
  "/create-blog",
  authenticate,
  authorization("Create:blog"),
  async (req, res) => {
    try {
      const { title, imageurl, desc } = req.body;
      const userId = req.user;
      console.log("UserID:", userId);

      // Data validation
      if (!title || !imageurl || !desc || !userId) {
        return res.status(400).json({
          success: false,
          message: "All fields are required!",
        });
      }

      // Check if user exists
      const isExistUser = await UserModel.findOne({ _id: userId });

      if (!isExistUser) {
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });
      }

      // Create new blog
      const newblog = new BlogModel({
        title,
        imageurl,
        desc,
        userId,
      });

      await newblog.save();

      // Send response to client
      res.status(201).json({
        success: true,
        message: "Blog created successfully!",
        blog: newblog,
      });
    } catch (error) {
      // Handle mongoose validation errors
      if (error.name === "ValidationError") {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      // Handle invalid ObjectId
      if (error.name === "CastError") {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID format",
        });
      }

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

// Step 5 : GET all blogs
app.get("/get-all-blogs", authenticate, async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    res.status(500).json({ message: "Server error while fetching blogs" });
  }
});

// Step 4 : DELETE a blog by ID
app.delete("/blogs/:id", async (req, res) => {
  try {
    const blogId = req.params.id;

    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    res.status(500).json({ message: "Server error while deleting blog" });
  }
});

// Database Connection
DBConnector();

//Server listen
app.listen(3000, () => console.log("Server Running.."));
