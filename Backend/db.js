import mongoose from "mongoose";

const connection = () => {
    mongoose
        .connect(process.env.DB_URI)
        .then(() => {
            console.log("Connected to MongoDB successfully.");
        })
        .catch((err) => {
            console.log(`DB connection error: ${err}`);
        })
}

export default connection;