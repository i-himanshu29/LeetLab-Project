import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./Routes/auth.routes.js";
import problemRoutes from "./Routes/problem.routes.js";
import executionRoute from "./Routes/executeCode.routes.js";
import submissionRoutes from "./Routes/submission.routes.js";
import playlistRoutes from "./Routes/playlist.routes.js";



dotenv.config();
const app = express();

app.use(
    cors({
        origin:"http://localhost:5173",
        credential:true
    })
)

app.use(express.json());
app.use(cookieParser())


// app.use("/",(req,res)=>{
//     res.send("Welcome to Leetlab🔥");
// })

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/problems",problemRoutes)
app.use("/api/v1/execute-code",executionRoute)
app.use("/api/v1/submission",submissionRoutes)
app.use("/api/v1/playlist",playlistRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 8080")
})