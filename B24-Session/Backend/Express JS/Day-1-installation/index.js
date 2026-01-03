const express = require("express");

//app setup
const app = express();

// Route with Request Handling
app.get("/", (request, response) => {
  response.json({ message: "Server running.. " });
});

// Server Listen
app.listen(3000, () => {
  console.log("Server Running..");
});