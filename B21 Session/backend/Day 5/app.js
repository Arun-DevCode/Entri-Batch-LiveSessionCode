import express from "express";
import Products from "./src/views/productRoutes.js";
import Assignments from "./src/views/assignmentRoutes.js";
import Authentication from "./src/views/userRoutes.js";

//App Setup
const app = express();

//middleware
app.use(express.json());

//App Router
app.use(Products);
app.use(Assignments);
app.use(Authentication);

app.get("/", (req, res) => res.json({ message: "Server is running.." }));
//PORT NO
const PORTNO = 4000 || 5000;
//Server listen
app.listen(PORTNO, () => {
  console.log("Server is running on localhost");
});
