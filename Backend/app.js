import express from "express"
import dotenv from "dotenv"
import connection from "./db.js";

dotenv.config();

//Connection to the DB
connection();

const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.listen(port,()=>{
    console.log(`Server is up on : ${port}`);
})