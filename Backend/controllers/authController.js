import Users from "../models/Users.js"
import bcrypt from "bcrypt"

// Register

const createUser = async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        res.status(201).json({
            succeded: true,
            newUser,
        });
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
            res.status(200).send("You are successfully logged in.");
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

export { createUser, loginUser };