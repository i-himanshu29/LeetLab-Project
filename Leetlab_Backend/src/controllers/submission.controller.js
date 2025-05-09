import { db } from "../libs/db.js";

export const getAllSubmission = async (req,res)=>{
    try {
        const userId = req.user.id;

        const submissions = await db.submission.findMany({
            where:{
                userId:userId
            }
        })

        res.status(200).json({
            success:"true",
            message:"Submission fetched Successfully",
            submissions
        })
    } catch (error) {
        console.error("Fetched Submission Error:",error);
        res.status(500).json({error:"Failed to Fetched submissions"});
    }
}


export const getSubmissionForProblem = async (req,res)=>{
    try {
        const userId = req.user.id;
        const problemId = req.params.problemId;
        const submissions = await db.submission.findMany({
            where:{
                userId:userId,
                problemId:problemId
            }
        })
        res.status(200).json({
            success:true,
            message:"Submission fetched Successfully",
            submissions
        })

    } catch (error) {
        console.error("Fetched Submission Error:",error);
        res.status(500).json({error:"Failed to Fetched submissions"});
    }
}


export const getAllTheSubmissionForProblem = async (req,res)=>{
    try {
        const problemId = req.params.problemId;
        const submission = await db.submission.count({
            where:{
                problemId:problemId
            }
        })

        res.status(200).json({
            success:true,
            message:"Submission fetched Successfully",
            count:submission
        })

    } catch (error) {
         console.error("Fetched Submission Error:",error);
        res.status(500).json({error:"Failed to Fetched submissions"});
    }
}

