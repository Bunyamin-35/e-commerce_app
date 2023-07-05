import express from "express"
import Products from "../models/Products.js"

const router = express.Router();
// Create a new product
router.route("/add-product").post(async (req, res) => {
    try {
        const newProduct = new Products(req.body);
        await newProduct.save();
        res.status(200).json("Product added successfully.")
    } catch (error) {
        res.status(400).json(error);
    }
});

//Get all products
router.route("/all-products").get(async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Update the product
router.route("/update-product").put(async (req, res) => {
    try {
        await Products.findByIdAndUpdate({_id: req.body.product_id},req.body)
        res.status(200).json("Product updated successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
});
//Delete the product
router.route("/delete-product").delete(async (req, res) => {
    try {
        await Products.findOneAndDelete({_id: req.body.product_id})
        res.status(200).json("Product deleted successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
});
export default router;