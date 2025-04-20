import express from "express"
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.use("/",(req,res)=>{
    res.send("Welcome to Leetlab");
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 8080")
})