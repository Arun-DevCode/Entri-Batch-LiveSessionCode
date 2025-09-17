const express = require("express");

//File Exports
const router = require("./src/views/routes");
const connectwithDB = require("./src/config/dbconnect");
//App Setup
const app = express();

//middleware
app.use(express.json()); //body parser

//App Router
app.use(router);

// Database connection
connectwithDB();

//PORT NO
const PORTNO = 4000;
//App listen
app.listen(PORTNO, () => {
  console.log(`Server running on http://localhost:${PORTNO}/`);
});
