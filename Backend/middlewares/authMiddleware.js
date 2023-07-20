import jwt from "jsonwebtoken"
import User from "../models/Users.js"

const createAccessToken = (userId) => {
    const accesstoken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60s"
    })
    return accesstoken
}
const verifyAccessToken = async (req, res) => {
    const accesstoken = req.headers["authorization"] && req.headers["authorization"].split(' ')[1]
    console.log("the access token", accesstoken);

    if (!accesstoken) {
        res.status(401).json({
            succeded: false,
            message: "There is no token."
        });
    }

    jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET, async (err, data) => {
        console.log(data);
        if (err) {
            return res.json({
                status: false,
                err
            })
        } else {
            const user = await User.findById(data.userId)
            if (user) return res.json({ user })
            else return res.json({ status: false })
        }
    })
    // req.user = await User.findById(
    //     jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET).userId
    // );

}
export { createAccessToken, verifyAccessToken };