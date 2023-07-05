import mongoose from "mongoose"

const {Schema} = mongoose;

const orderSchema = new Schema({
    customerName:{
        type:String,
        required:true,
    },
    cartItem:{
        type:Array,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now,
    },
})

const Orders = mongoose.model("Order",orderSchema);
export default Orders;