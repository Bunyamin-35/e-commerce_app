import mongoose from "mongoose"

const {Schema} = mongoose;

const cartSchema = new Schema({
    userId:{
        type:String,
        require:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now,
    },
})

const Cart = mongoose.model("Cart",cartSchema);
export default Cart;