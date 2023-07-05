import Category from "../models/Category.js"


// Create a new category

const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json({
            succeded: true,
            newCategory,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}


// router.route("/add-category").post(async (req, res) => {
//     try {
//         const newCategory = new Category(req.body);
//         await newCategory.save();
//         res.status(200).json("Category added successfully.")
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Get all categories
const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find({});
        res.status(201).json({
            succeded: true,
            allCategories,
        });
    } catch (error) {
        res.status(201).json({
            succeded: false,
            error,
        });
    }
}
// router.route("/all-category").get(async (req, res) => {
//     try {
//         const categories = await Category.find();
//         res.status(200).json(categories);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Update the category
const updateTheCategory = async (req,res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate({_id:req.body.category_id},req.body);
        res.status(201).json({
            succeded:true,
            updatedCategory,
        })
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        })
    }
}
// router.route("/update-category").put(async (req, res) => {
//     try {
//         await Category.findByIdAndUpdate({_id: req.body.category_id},req.body)
//         res.status(200).json("Category updated successfully.");
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

//Delete the category
const deleteTheCategory = async (req,res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete({_id:req.body.category_id});
        res.status(201).json({
            succeded:true,
            deleteTheCategory,
        });
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        })        
    }
}
// router.route("/delete-category").delete(async (req, res) => {
//     try {
//         await Category.findOneAndDelete({_id: req.body.category_id})
//         res.status(200).json("Category deleted successfully.");
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

export {createCategory,getAllCategories,updateTheCategory,deleteTheCategory};