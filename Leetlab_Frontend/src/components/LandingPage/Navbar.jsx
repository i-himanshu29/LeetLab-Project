import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react"; // Icons for user profile
import { motion } from "framer-motion"; // Framer Motion for animations

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const authUser = {
    name: "John Doe",
    image: "https://avatar.iran.liara.run/public/boy",
    role: "USER", // Replace with "ADMIN" for admin options
  };

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <motion.nav
      className="flex  shadow-2xl mb-5 items-center justify-around  px-2 py-4 bg-transition rounded-2xl w-full"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <motion.img
          src="/leetlab.svg"
          alt="Logo"
          className="h-12 w-12 bg-primary/20 text-primary border-none px-2 py-2 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.span
          className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white hidden md:block"
          whileHover={{ color: "#4ADE80" }} // Green hover effect
        >
          CodeBeta
        </motion.span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/problem"
            className="text-white text-xl md:text-2xl font-serif font-medium hover:bg-primary/20 px-3 py-2 rounded-lg transition"
          >
            Problem
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            id="pricing"
            className="text-white text-xl md:text-2xl font-serif font-medium hover:bg-primary/20 px-3 py-2 rounded-lg transition"
          >
            Pricing
          </a>
        </motion.div>
      </div>

      {/* Conditional Login/Signup or Profile */}
      {isLoggedIn ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar flex flex-row"
          >
            <motion.div
              className="w-10 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={authUser.image}
                alt="User Avatar"
                className="object-cover"
              />
            </motion.div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
          >
            <li>
              <p className="text-base font-semibold">{authUser.name}</p>
              <hr className="border-gray-200/10" />
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:bg-primary hover:text-white text-base font-semibold flex items-center"
              >
                <User className="w-4 font-serif h-4 mr-2" />
                My Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="hover:bg-primary hover:text-white flex items-center"
              >
                <LogOut className="w-4 font-serif h-4 mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/login"
            className="text-white  font-serif text-lg md:text-xl font-medium bg-primary/30  hover:bg-primary/20 px-3 py-2 rounded-lg transition"
            onClick={handleLogin}
          >
            Login
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
