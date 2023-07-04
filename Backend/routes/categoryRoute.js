import express from "express"
import Category from "../models/Category.js"

const router = express.Router();
// Create a new category
router.route("/add-category").post(async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("Category added successfully.")
    } catch (error) {
        res.status(400).json(error);
    }
});

//Get all categories
router.route("/all-category").get(async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Update the category
router.route("/update-category").put(async (req, res) => {
    try {
        await Category.findByIdAndUpdate({_id: req.body.category_id},req.body)
        res.status(200).json("Category updated successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
});
//Delete the category
router.route("/delete-category").delete(async (req, res) => {
    try {
        await Category.findOneAndDelete({_id: req.body.category_id})
        res.status(200).json("Category deleted successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
});
export default router;