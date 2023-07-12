import Users from "../models/Users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Register

const createUser = async (req, res) => {
    try {
        let isExist = false;
        isExist = await Users.findOne({ username: req.body.username });
        console.log("isExist", isExist);
        if (isExist) {
            res.status(401).json({
                succeded:false,
                message:"The username is already used."
            })
        } else {
            const newUser = await Users.create(req.body);
            res.status(201).json(
                {
                    succeded: true,
                    newUser,
                }
            );
        }

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}
// Login
const loginUser = async (req, res) => {
    try {
        //const { username, password } = req.body;
        const user = await Users.findOne({ username: req.body.username });
        

        let isSame = false;

        if (user) {
            isSame = await bcrypt.compare(req.body.password, user.password);
        } else {
            return res.status(401).json({
                succeded: false,
                error: "There is no such a user."
            });
        }

        if (isSame) {
            res.status(200).json({
                succeded:true,
                message:"You are succesfully logged in",
                user,
                token:createAccessToken(user._id),
            })
        } else {
            res.status(401).json({
                succeded: false,
                error: "Passwords are not matched."
            });
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}

const createAccessToken = (userId) => {
    return jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"20m"
    })
}

export { createUser, loginUser };