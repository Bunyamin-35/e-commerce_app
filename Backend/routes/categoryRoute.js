import express from "express"
import * as categoryController from "../controllers/categoryController.js"

const router = express.Router();

router.route('/add-category').post(categoryController.createCategory);
router.route('/all-categories').get(categoryController.getAllCategories);
router.route('/update-category').put(categoryController.updateTheCategory);
router.route('/delete-category').delete(categoryController.deleteTheCategory);


export default router;