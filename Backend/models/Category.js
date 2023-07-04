import mongoose from "mongoose"

const {Schema} = mongoose;

const categorySchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now,
    },
})

const Category = mongoose.model("Category",categorySchema);
export default Category;