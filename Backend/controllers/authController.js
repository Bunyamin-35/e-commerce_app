import Users from "../models/Users.js"


// Create a new user

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

export { createUser };