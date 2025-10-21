const express = require("express"); // v5 - common js

// File imports
const UserRouter = require("./src/routes/userRoutes");
const PostRouter = require("./src/routes/postRoutes");

const app = express();
app.use(express.json()); // body parser

// App Routes
app.use(UserRouter);
app.use(PostRouter);

// API Endpoints
app.get("/user", (request, response) => {
  response.end("It is get method from express!");
});

// Server listen
app.listen(3001, () => console.log("Server running.."));