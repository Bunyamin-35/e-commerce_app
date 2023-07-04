import mongoose from "mongoose"

const {Schema} = mongoose;

const orderSchema = new Schema({
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
    uploadedAt:{
        type:Date,
        default:Date.now,
    },
})

const Orders = mongoose.model("Category",orderSchema);
export default Orders;