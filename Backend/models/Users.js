import mongoose from "mongoose"

const {Schema} = mongoose;

const categorySchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now,
    },
})

const Category = mongoose.model("Category",categorySchema);
export default Category;