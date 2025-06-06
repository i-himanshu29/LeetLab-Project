import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import Footer from "../components/LandingPage/Footer";
import KeyBenefits from "../components/LandingPage/KeyBenefits";
import Video from "../components/LandingPage/Video";
import Slider from "../components/LandingPage/Slider";
import Reviews from "../components/LandingPage/Reviews";
import Pricing from "../components/LandingPage/Pricing";
const LandingPage = () => {
  return (
    <div
      className="w-full p-0 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 overflow-x-hidden"
      data-theme="black"
    >
     
      {/* Hero section ------------------------------------------------------- */}
      <div className=" h-screen  mt-1 mb-1 flex flex-col justify-center items-center">
        <div className="absolute top-16 left-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
        <div className="absolute  right-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
        <h1 className="text-shadow mx-20 text-6xl font-bold font-serif flex justify-center items-center">
          Sharpen Your Coding Skills Daily
        </h1>

        <h2 className="text-secondary mt-10 text-4xl font-bold text-center relative">
          <span className="relative z-10 bg-gradient-to-r from-blue-600 via-green-500 to-purple-700 bg-clip-text text-transparent">
            Think. Solve. Repeat
          </span>
        </h2>
        <p className=" mt-8 max-w-4xl mx-auto p-6 text-lg leading-relaxed font-medium bg-gradient-to-r  rounded-lg  text-gray-100 ">
          <span className="text-white font-bold">
            Welcome to your ultimate coding companion
          </span>
          — a powerful platform designed for aspiring developers, competitive
          programmers, and tech enthusiasts to
          <span className="text-indigo-400"> practice</span>,
          <span className="text-green-400"> learn</span>, and
          <span className="text-yellow-400"> grow</span> every single day.
        </p>

        <Link
          to="/login"
          type="button"
          className="text-white mt-12 bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border"
        >
          Begin Your Journey . . .
        </Link>
      </div>

      {/* Some Glimpses of CodeBeta------------------------------------------  */}
      <Video />

      {/* Benefits ----------------------------------------------------------- */}
      <KeyBenefits />

      {/* Slider ------------------------------------------------------------- */}
      <Slider />

      {/* Pricing ------------------------------------------------------------ */}
      <Pricing />
     
    </div>
  );
};

export default LandingPage;
