import Cart from "../models/Cart.js"

// Cart Page for the user

const getCart = async (req,res) => {
    try{
        const userId = req.userId;
        res.status(201).json({
            succeded:true,
            userId,
        });
        // const cart = await Cart.findOne({userId})
        // console.log("cart user:",cart);
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}

export {getCart};