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
const port = process.env.PORT;
//Connection to the DB
connection();

const app = express();

app.listen(port, () => {
    console.log(`Server is up on : ${port}`);
})

//middlewares
app.use(
    cors({
        origin: [`http://localhost:3000`],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());


//Routes

app.use("/backend/categories", categoryRoute);
app.use("/backend/products", productRoute);
app.use("/backend/orders", orderRoute);
app.use("/backend/auth", authRoute);



