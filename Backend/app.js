import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connection from "./db.js";

// Routes
import categoryRoute from "./routes/categoryRoute.js"

dotenv.config();

//Connection to the DB
connection();

const app = express();
const port = process.env.PORT;

//middlewares

app.use(express.json());
app.use(cors());

app.use("/backend/categories",categoryRoute);

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.listen(port,()=>{
    console.log(`Server is up on : ${port}`);
})