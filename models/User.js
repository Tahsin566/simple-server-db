import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
})

export const User = mongoose.model('users',UserSchema)