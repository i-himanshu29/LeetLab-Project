import React, { useEffect } from "react";
import { useProblemStore } from "../store/useProblemStore";
import { Loader } from "lucide-react";
import ProblemTable from "../components/ProblemTable";

const HomePage = () => {
  const { getAllProblems, problems, isProblemLoading } = useProblemStore();

  useEffect(() => {
    getAllProblems();
  }, [getAllProblems]);

  console.log(problems);

  if (isProblemLoading) {
    return (
      <div className="flex item-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center mt-14 px-4">
        <div className="absolute top-16 left-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
        <h1 className="text-4xl font-extrabold font-serif z-10 text-center">
          Welcome to <span className="text-primary">Codebeta</span>
        </h1>

        <p className="mt-4 w-auto mx-20 text-wrap text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10">
        <span className="text-white font-bold">
            Welcome to your ultimate coding companion
          </span>
          — a powerful platform designed for aspiring developers, competitive
          programmers, and tech enthusiasts to
          <span className="text-indigo-400"> practice</span>,
          <span className="text-green-400"> learn</span>, and
          <span className="text-yellow-400"> grow</span> every single day.
        </p>

        {problems.length > 0 ? (
          <ProblemTable problems={problems} />
        ) : (
          <p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
            No problems found
          </p>
        )}
      </div>
    </>
  );
};

export default HomePage;
