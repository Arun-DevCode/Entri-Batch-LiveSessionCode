const express = require("express");
const router = require("./src/views/routes");

//App Setup
const app = express();

//middleware
app.use(express.json()); //body parser

//App Router
app.use(router);

//PORT NO
const PORTNO = 4000;
//App listen
app.listen(PORTNO, () => {
  console.log(`Server running on http://localhost:${PORTNO}/`);
});
