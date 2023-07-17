import jwt from "jsonwebtoken"
import User from "../models/Users.js"

const createAccessToken = (userId) => {
    const accesstoken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d"
    })
    return accesstoken
}
const verifyAccessToken = async (req, res, next) => {

    try {
        const accesstoken = req.headers["authorization"] && req.headers["authorization"].split(' ')[1]
        console.log("the access token", accesstoken);

        if (!accesstoken) {
            res.status(401).json({
                succeded: false,
                message: "There is no token."
            });
        }

        req.user = await User.findById(
            jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET).userId
        );

        next();

    } catch (error) {
        res.status(401).json({
            succeded : false,
            error:"Authorization error!"
        })
    }

}
export { createAccessToken, verifyAccessToken };