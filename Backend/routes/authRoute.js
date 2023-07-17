import express from "express"
import * as authController from "../controllers/authController.js"
//import { verifyAccessToken } from "../middlewares/authMiddleware.js"

const router = express.Router();

router.route('/register').post(authController.createUser);
router.route('/login').post(authController.loginUser);

export default router;