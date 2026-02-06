import Express from "express";
import dotenv from "dotenv";

// Import
import DBConnection from "./config/db.config.js";
import ProductRouter from "./router/productRoute.js";
import OrderRouter from "./router/orderRoute.js";

//App Setup
const app = Express();

//middleware
app.use(Express.json()); // body parser

// App Route
app.use("/api/product", ProductRouter);
app.use("/api/order", OrderRouter);

//env load
dotenv.config({ path: "./src/.env" });

// DB CONNECT
DBConnection();

// Listen
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running.. on http://localhost:${PORT}`);
});