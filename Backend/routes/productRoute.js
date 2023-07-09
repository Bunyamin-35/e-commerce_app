import express from "express"
import * as productController from "../controllers/productController.js"

const router = express.Router();

router.route('/add-product')
    .post(productController.createProduct);
router.route('/all-products')
    .get(productController.getAllProducts);
router.route("/:product_id")
    .get(productController.getTheProduct);
router.route('/update-product')
    .put(productController.updateTheProduct);
router.route('/delete-product')
    .delete(productController.deleteTheProduct);

export default router;