import Express from "express"; //Es6 - module js
import mongoose from "mongoose"; // ODM - Object Data Modeling

//App setup
const app = Express();

// DB Connection
const connection = mongoose.connect("mongodb://localhost:27017/");
if (!connection) {
  process.exit(1);
} else {
  console.log("Db Connected!");
}

// App Route
app.get("/", (req, res) => res.json({ message: "Server Running.." }));

//Server Listen
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
