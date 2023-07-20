import express from "express"
import * as authController from "../controllers/authController.js"
import * as authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router();

router.route('/register').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/').post(authMiddleware.verifyAccessToken);

export default router;