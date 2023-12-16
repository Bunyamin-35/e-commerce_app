import express from "express"

import * as cartController from "../controllers/cartController.js"

const router = express.Router();

router.route('/get-cart/:userId').get(cartController.getCart);


export default router;