import mongoose from "mongoose"

const {Schema} = mongoose;

const productSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now,
    },
})

const Products = mongoose.model("Product",productSchema);
export default Products;