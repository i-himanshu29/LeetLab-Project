import React from "react";
import video from "../../../public/Leetcode.mp4"
const Video = () => {
  return (
    <div className="flex h-max mt-5 mb-10 flex-col items-center p-4">
      <h1 className="font-bold font-serif text-gray-200 text-4xl mb-7 text-center">
        Some Glimpses of CodeBeta
      </h1>
      <div className="border-10 border-gray-800 shadow-gray-800 rounded-md">
        <video controls autoPlay muted loop width="1050" height="500" className=" rounded-md">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
