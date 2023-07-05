import Products from "../models/Products.js"


// Create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = await Products.create(req.body);
        res.status(201).json({
            succeded: true,
            newProduct,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}
// router.route("/add-product").post(async (req, res) => {
//     try {
//         const newProduct = new Products(req.body);
//         await newProduct.save();
//         res.status(200).json("Product added successfully.")
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Get all products
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.find({});
        res.status(201).json({
            succeded: true,
            allProducts,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });

    }
}
// router.route("/all-products").get(async (req, res) => {
//     try {
//         const products = await Products.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Update the product
const updateTheProduct = async (req, res) => {
    try {
        const updatedProduct = await Products.findByIdAndUpdate({ _id: req.body.product_id }, req.body);
        res.status(201).json({
            succeded: true,
            updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}

// router.route("/update-product").put(async (req, res) => {
//     try {
//         await Products.findByIdAndUpdate({_id: req.body.product_id},req.body)
//         res.status(200).json("Product updated successfully.");
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Delete the product
const deleteTheProduct = async (req, res) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete({ _id: req.body.product_id });
        res.status(201).json({
            succeded: true,
            deletedProduct,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}
// router.route("/delete-product").delete(async (req, res) => {
//     try {
//         await Products.findOneAndDelete({_id: req.body.product_id})
//         res.status(200).json("Product deleted successfully.");
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

export {createProduct,getAllProducts,updateTheProduct,deleteTheProduct};