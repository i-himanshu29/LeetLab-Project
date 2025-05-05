import { db } from "../libs/db.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submitBatch,
} from "../libs/judge0.lib.js";

export const createProblem = async (req, res) => {
  //going to get all the data from req body
  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    testcases,
    codeSnippets,
    referenceSolutions,
  } = req.body;

  //going to check the user role once again
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      message: "You are not allowed to create a problem",
    });
  }

  //loop throught each refernce solution for different languages

  try {
    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);

      if (!languageId) {
        return res.status(400).json({
          error: `Language ${language} is not support`,
        });
      }

      const submissions = testcases.map((input, output) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));

      const submissionResults = await submitBatch(submissions);

      const tokens = submissionResults.map((res) => res.token);
      console.log("tokens....",tokens)

      const results = await pollBatchResults(tokens);

      console.log("results....",results);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log("RESULT", result);

        console.log(
          `Testcase ${
            i + 1
          } and language ${language}  ---  reesult ${JSON.stringify(
            result.status.description
          )}`
        );
        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Testcase ${i + 1} failed for language ${language}`,
          });
        }
      }
    }
    // save the problem to the database
    const newProblem = await db.problem.create({
      data: {
        userId: req.user.id,
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testcases,
        codeSnippets,
        referenceSolutions,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Message created successfully",
      problem: newProblem,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error while creating Problem",
    });
  }
};

export const getAllProblems = async (req, res) => {
  try {
    const problems = await db.problem.findMany();

    if (!problems) {
      return res.status(404).json({
        error: "No Problem Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Problems fetched successfully",
      problems,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error while Fetching problems",
    });
  }
};

export const getProblemById = async (req, res) => {
  const { id } = req.params;

  try {
    const problem = await db.problem.findUnique({
      where: {
        id,
      },
    });

    if (!problem) {
      return res.status(404).json({
        error: "Problem Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Problem fetched successfully",
      problem,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error while Fetching problem by id",
    });
  }
};

export const updateProblem = async (req, res) => {
  const { id } = req.params; // Get problem ID from request params

  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    testcases,
    codeSnippets,
    referenceSolutions,
  } = req.body;

  // Check user role
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      message: "You are not allowed to update a problem",
    });
  }

  // Validate and fetch the existing problem
  try {
    if (!id) {
      return res.status(400).json({ error: "Problem ID is required" });
    }

    const existingProblem = await db.problem.findUnique({ where: { id: id } });

    if (!existingProblem) {
      return res.status(404).json({ error: "Problem not found" });
    }

    // Loop through reference solutions for different languages
    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);

      if (!languageId) {
        return res.status(400).json({
          error: `Language ${language} is not supported`,
        });
      }

      const submissions = testcases.map((testcase) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: testcase.input,
        expected_output: testcase.output,
      }));

      const submissionResults = await submitBatch(submissions);
      const tokens = submissionResults.map((res) => res.token);
      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Testcase ${i + 1} failed for language ${language}`,
          });
        }
      }
    }

    // Update the problem in the database
    const updatedProblem = await db.problem.update({
      where: { id: id },
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testcases,
        codeSnippets,
        referenceSolutions,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Problem updated successfully",
      problem: updatedProblem,
    });
  } catch (error) {
    console.error("Error while updating problem:", error);
    return res.status(500).json({
      error: "Error while updating Problem",
    });
  }
};

export const deleteProblem = async (req, res) => {
  const { id } = req.params;

  try {
    const problem = await db.problem.findUnique({ where: { id } });

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    await db.problem.delete({ where: { id } });

    return res.status(200).json({
      success: true,
      message: "Problem deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error while Deleting problem",
    });
  }
};

export const getAllProblemSolvedByUser = async (req, res) => {
  try {
    const problems = await db.problem.findMany({
      where:{
        solvedBy:{
          some:{
            userId:req.user.id
          }
        }
      },
      include:{
        solvedBy:{
          where:{
            userId:req.user.id
          }
        }
      }
    })

    res.status(200).json({
      success:true,
      message:"Problems Fetched Successfully",
      problems
    })
  } catch (error) {
    console.error("Error fetching Problems :" ,error);
    res.status(500).json({error:"Failed to fetching Problems"});
  }
};
