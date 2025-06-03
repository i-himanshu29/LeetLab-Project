import React, { useState } from "react";
import "../../page/LandingPage.css";
import {
  FilePlus2,
  ListPlus,
  FileQuestion,
  ShieldQuestion,
  Sheet,
  Languages,
} from "lucide-react";
const KeyBenefits = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
//   top-[1000px] in div2
  return (
    <div
      className=" overflow-hidden relative gap-10 flex flex-col h-max mt-5 mb-10  items-center  justify-center "
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute  w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"
        style={{
          top: cursorPosition.y - 150,
          left: cursorPosition.x - 150,
        }}
      ></div>
      <h1 className=" text-white justify-center mt-1 text-4xl font-bold font-serif">
        Key Benefits
      </h1>

      <div className="grid grid-cols-1 grid-rows-2 gap-6 p-6 mx-10 sm:grid-cols-2 lg:grid-cols-3 md:mx-10">
        {/* <!-- Card 1 --> */}
        <div className="flex flex-col items-center p-2 shadow-5xl bg-gradient-to-tr border-3 border-blue-950 rounded-md transform transition-transform duration-300 hover:scale-105">
          <div className="flex gap-5 p-4">
            <FileQuestion className="h-15 w-15" />
            <h3 className="font-extrabold font-serif  mt-3  sm:text-2xl   text-2xl text-gray-900">
              Practice DSA Questions
            </h3>
          </div>
          <p className="text-white  text-sm sm:text-base  flex-wrap text-center">
            You Can solve as many problems you can.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="flex flex-col items-center p-2  shadow-5xl border-3 border-blue-950 rounded-md transform transition-transform duration-300 hover:scale-105">
          <div className="flex gap-5 p-4">
            <ShieldQuestion className="h-15 w-15" />
            <h3 className="font-extrabold font-serif  mt-3 text-2xl text-gray-900">
              FAANG Questions
            </h3>
          </div>
          <p className="text-white  flex-wrap text-center">
            You can practice FAANG questions which is asked in interviews.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="flex flex-col items-center p-2  shadow-5xl border-3 border-blue-950 rounded-md transform transition-transform duration-300 hover:scale-105">
          <div className="flex gap-5 p-4">
            <Sheet className="h-15 w-15" />
            <h3 className="font-extrabold font-serif  mt-3 text-2xl text-gray-900">
              Personalized Sheet
            </h3>
          </div>
          <p className="text-white  flex-wrap text-center">
            There you can find questions sheet whichever company you are
            targeting.
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="flex flex-col items-center p-2  shadow-5xl border-3 border-blue-950 rounded-md transform transition-transform duration-300 hover:scale-105">
          <div className="flex gap-5 p-4">
            <ListPlus className="h-15 w-15" />
            <h3 className="font-extrabold font-serif text-2xl mt-3 text-gray-900">
              Create Playlist
            </h3>
          </div>
          <p className="text-white  flex-wrap text-center">
            You can create Playlist according to you need.
          </p>
        </div>

        {/* <!-- Card 5 --> */}
        <div className="flex flex-col items-center p-2  shadow-5xl border-3 border-blue-950 rounded-md transform transition-transform duration-300 hover:scale-105">
          <div className="flex gap-5 p-4">
            <Languages className="h-15 w-15" />
            <h3 className="font-extrabold font-serif  mt-3 text-2xl text-gray-900">
              Choose Your Language
            </h3>
          </div>
          <p className="text-white  flex-wrap text-center">
            You can Choose Your Language in which you want to Code.
          </p>
        </div>

        {/* <!-- Card 6 --> */}
        <div className="flex flex-col items-center p-2  shadow-5xl border-3 border-blue-950 rounded-md transform transition-transform duration-300 hover:scale-105">
          <div className="flex gap-5 p-4">
            <FilePlus2 className="h-15 w-15" />
            <h3 className="font-extrabold font-serif  mt-3 text-2xl text-gray-900">
              Create Questions{" "}
            </h3>
          </div>
          <p className="text-white  flex-wrap text-center">
            You Can Create a Problem Very Easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;

// import React, { useState } from "react";
// import { Target, ListPlus } from "lucide-react";

// const KeyBenefits = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setCursorPosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div
//       className="relative flex flex-col h-auto items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Dynamic Background */}
//       <div
//         className="absolute w-1/3 h-1/3 bg-success opacity-30 blur-3xl rounded-md"
//         style={{
//           top: cursorPosition.y - 150,
//           left: cursorPosition.x - 150,
//         }}
//       ></div>

//       {/* Section Title */}
//       <h1 className="text-center mt-10 mb-6 text-5xl font-bold font-serif">
//         Key Benefits
//       </h1>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-10">
//         {/* Card 1 */}
//         <div className="flex flex-col items-center p-4 shadow-lg bg-gradient-to-tr from-blue-800 to-blue-500 rounded-md transform hover:scale-105 transition-transform">
//           <div className="flex items-center gap-3 mb-3">
//             <Target className="h-12 w-12 text-white" />
//             <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
//               Practice DSA Questions
//             </h3>
//           </div>
//           <p className="text-center text-sm sm:text-base">
//             Solve as many problems as you can to improve your skills.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="flex flex-col items-center p-4 shadow-lg bg-gradient-to-tr from-green-800 to-green-500 rounded-md transform hover:scale-105 transition-transform">
//           <div className="flex items-center gap-3 mb-3">
//             <Target className="h-12 w-12 text-white" />
//             <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
//               FAANG Questions
//             </h3>
//           </div>
//           <p className="text-center text-sm sm:text-base">
//             Practice questions from top companies like FAANG.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="flex flex-col items-center p-4 shadow-lg bg-gradient-to-tr from-purple-800 to-purple-500 rounded-md transform hover:scale-105 transition-transform">
//           <div className="flex items-center gap-3 mb-3">
//             <Target className="h-12 w-12 text-white" />
//             <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
//               Personalized Sheet
//             </h3>
//           </div>
//           <p className="text-center text-sm sm:text-base">
//             Find a question sheet tailored to your target companies.
//           </p>
//         </div>

//         {/* Card 4 */}
//         <div className="flex flex-col items-center p-4 shadow-lg bg-gradient-to-tr from-red-800 to-red-500 rounded-md transform hover:scale-105 transition-transform">
//           <div className="flex items-center gap-3 mb-3">
//             <ListPlus className="h-12 w-12 text-white" />
//             <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
//               Create Playlist
//             </h3>
//           </div>
//           <p className="text-center text-sm sm:text-base">
//             Organize questions into playlists for focused preparation.
//           </p>
//         </div>

//         {/* Card 5 */}
//         <div className="flex flex-col items-center p-4 shadow-lg bg-gradient-to-tr from-yellow-800 to-yellow-500 rounded-md transform hover:scale-105 transition-transform">
//           <div className="flex items-center gap-3 mb-3">
//             <Target className="h-12 w-12 text-white" />
//             <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
//               Choose Your Language
//             </h3>
//           </div>
//           <p className="text-center text-sm sm:text-base">
//             Select your preferred programming language for coding.
//           </p>
//         </div>

//         {/* Card 6 */}
//         <div className="flex flex-col items-center p-4 shadow-lg bg-gradient-to-tr from-teal-800 to-teal-500 rounded-md transform hover:scale-105 transition-transform">
//           <div className="flex items-center gap-3 mb-3">
//             <Target className="h-12 w-12 text-white" />
//             <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
//               Create Questions
//             </h3>
//           </div>
//           <p className="text-center text-sm sm:text-base">
//             Easily create custom problems for practice.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeyBenefits;
