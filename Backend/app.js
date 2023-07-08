import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connection from "./db.js";

// Routes
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import orderRoute from "./routes/orderRoute.js"
import authRoute from "./routes/authRoute.js"

dotenv.config();

//Connection to the DB
connection();

const app = express();
const port = process.env.PORT;

//middlewares

app.use(express.json());
app.use(cors());

//Routes

app.use("/backend/categories",categoryRoute);
app.use("/backend/products",productRoute);
app.use("/backend/orders",orderRoute);
app.use("/backend/auth",authRoute);



app.listen(port,()=>{
    console.log(`Server is up on : ${port}`);
})