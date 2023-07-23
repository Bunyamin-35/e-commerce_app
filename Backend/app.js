import express from "express"

import dotenv from "dotenv"

import cors from "cors"

import connection from "./db.js";

import cookieParser from "cookie-parser";


// Routes
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import orderRoute from "./routes/orderRoute.js"
import authRoute from "./routes/authRoute.js"

const app = express();
dotenv.config();

//Connection to the DB
connection();

app.listen(process.env.PORT, () => {
    console.log(`Server is up on : ${process.env.PORT}`);
})

//middlewares
app.use(
    cors({
        origin: [`http://localhost:3000`],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use(express.json());


//Routes

app.use("/backend/categories", categoryRoute);
app.use("/backend/products", productRoute);
app.use("/backend/orders", orderRoute);
app.use("/backend/auth", authRoute);



