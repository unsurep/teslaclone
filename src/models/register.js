import mongoose, { mongo, Mongoose } from "mongoose";

const userSchema= new mongoose.Schema({

    region:{
        type:String,
        required:true,
        enum:[ 'canada' , 'united states','united kingdom','port harcourt',]
    },

    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        trim:true
    },

    password:{
        type:String,
        required:true,
        trim:true
    },


}, {timestamps:true});

const userModel= mongoose.models.user || mongoose.model('user', userSchema)
export default userModel