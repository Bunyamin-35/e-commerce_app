import Orders from "../models/Orders.js"

// Create a new order
const createNewOrder = async (req, res) => {
    try {
        const newOrder = await Orders.create(req.body);
        res.status(201).json({
            succeded: true,
            newOrder,
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}
// router.route("/add-order").post(async (req, res) => {
//     try {
//         const newOrder = new Orders(req.body);
//         await newOrder.save();
//         res.status(200).json("Order added successfully.")
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Get all orders
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Orders.find({});
        res.status(201).json({
            succeded: true,
            allOrders,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}
// router.route("/all-orders").get(async (req, res) => {
//     try {
//         const orders = await Orders.find();
//         res.status(200).json(orders);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

export { createNewOrder, getAllOrders };