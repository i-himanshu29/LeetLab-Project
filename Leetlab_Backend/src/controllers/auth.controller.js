import bcrypt from "bcryptjs"
import {db} from "../libs/db.js"
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken"


export const register = async (req,res)=>{
    const {email,password,name} = req.body;

    try {
        const existingUser = await db.user.findUnique({
            where:{
                email
            }
        })
        console.log(existingUser)

        if(existingUser){
            return res.status(400).json({
                error:"User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await db.user.create({
            data:{
                email,
                password:hashedPassword,
                name,
                role:UserRole.USER
            }
        })

        console.log(newUser);
        const token = jwt.sign({id:newUser.id},process.env.JWT_SECRET,{
            expiresIn:"7d"
        })

        res.cookie("jwt",token , {
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "development",
            maxAge:7 * 24 * 60 * 60 * 1000 // 7days
        })

        res.status(201).json({
            success:true,
            message:"User created successfully",
            user:{
                id:newUser.id,
                email:newUser.email,
                name:newUser.name,
                role:newUser.role,
                image:newUser.image
            }
        })


    } catch (error) {
        console.log("user creating error",error);
        res.status(500).json({
            error:"user creating error"
        })
    }
}

export const login = async (req,res)=>{
    const {email,password} = req.body;

    try {

        const user = await db.user.findUnique({
            where:{
                email
            }
        })


        if(!user){
            return res.status(401).json({
                error:"User not found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                error:"Invalid credentials"
            })
        }

        const token = jwt.sign({id:user.id},process.env.JWT_SECRET , {
            expiresIn:"7d"
        })

        res.cookie("jwt",token , {
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "development",
            maxAge:7 * 24 * 60 * 60 * 1000 // 7days
        })

        res.status(200).json({
            success:true,
            message:"User login successfully",
            user:{
                id:user.id,
                email:user.email,
                name:user.name,
                role:user.role,
                image:user.image
            }
        })

    } catch (error) {
        console.log("user loggin error",error);
        res.status(500).json({
            error:"user login error"
        })
    }
}

export const logout = async (req,res)=>{
    try {
        res.clearCookie("jwt",{
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "development",
        })

        res.status(200).json({
            success:true,
            message:"User logged out successfully"
        })
    } catch (error) {
        console.log("user logout error",error);
        res.status(500).json({
            error:"user logout error"
        })
    }
}

export const check = async (req,res)=>{
    try {
        res.status(200).json({
            sucess:true,
            message:"User authenticated successfully",
            user:req.user
        })
    } catch (error) {
        console.log("Error checking user",error);
        res.status(500).json({
            error:"Error checking user"
        })   
    }
}