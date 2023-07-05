import express from "express"
import Orders from "../models/Orders.js"

const router = express.Router();
// Create a new order
router.route("/add-order").post(async (req, res) => {
    try {
        const newOrder = new Orders(req.body);
        await newOrder.save();
        res.status(200).json("Order added successfully.")
    } catch (error) {
        res.status(400).json(error);
    }
});

//Get all orders
router.route("/all-orders").get(async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json(error);
    }
});

export default router;