import express from "express"
import * as orderController from "../controllers/orderController.js"

const router = express.Router();

router.route('/add-order').post(orderController.createNewOrder);
router.route('/all-orders').get(orderController.getAllOrders);


export default router;