import mongoose from "mongoose"
import bcrypt from "bcrypt"

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        cartItem:{
            type:Array,
            required:true,
        }
    },
    {
        timestamps: true
    }
);
userSchema.pre('save',function(next){
    const user = this;
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash;
        next();
    });
});
const User = mongoose.model("User", userSchema);
export default User;