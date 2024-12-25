import { dbConnect } from "@/utilities/dbConnect";
import userModel from "@/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export const POST = async (res, req)=>{
    try {
        // getting incoming values
        const {region, name, email, password}=await res.json();

        // calling database connection
        await dbConnect()

        // prevent user from registring twice with the same email address
        const userExists = await userModel.findOne({email:email});
        if (userExists) {
            return new NextResponse(JSON.stringify({msg:'user already exisst'}), {status:200});
        }

        // hashing of password with salt and bcrypt
        const salt =bcrypt.genSaltSync(16)
        const hashedPassword = bcrypt.hashSync(password, salt);

        // store the value of the hased password
        const user  =new userModel({region, name, email, password:hashedPassword})
        await user.save()

        if(!user) {
            return new NextResponse(JSON.stringify({msg:'user not created'}), {status:400});
        }

        else return new NextResponse(JSON.stringify({msg:'user created successfully'}), {status:201});

    } 
    
     
    catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:'Error! Check server:'}), {status:500});
        
    }











}
