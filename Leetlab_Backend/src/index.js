import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import authRoute from "./Routes/auth.routes.js";
import problemRoutes from "./Routes/problem.routes.js";



dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser())

// app.use("/",(req,res)=>{
//     res.send("Welcome to Leetlab🔥");
// })

app.use("/api/v1/auth",authRoute)
app.use("/api/v1/problems",problemRoutes)
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 8080")
})