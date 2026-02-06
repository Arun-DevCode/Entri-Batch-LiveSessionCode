import express from "express";

//Imports
import UserRouter from "./src/router/userRoute.js";
import ProductRouter from "./src/router/productRoute.js";

// App Setup
const app = express();

// App Middleware

// App Router
app.use(UserRouter);
app.use(ProductRouter);

// Server listen
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
