

// Perfect ...........................................................................

import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Code, User } from "lucide-react"; // Icons for user profile
import { motion } from "framer-motion"; // Framer Motion for animations
import { useAuthStore } from "../../store/useAuthStore"; // Adjust path accordingly

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <motion.nav
      className="flex shadow-2xl items-center justify-around px-2 py-4 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 w-full"
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
            to="/home"
            className="text-white text-xl md:text-2xl font-serif font-medium hover:bg-primary/20 px-3 py-2 rounded-lg transition"
          >
            Problem
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/pricing"
            className="text-white text-xl md:text-2xl font-serif font-medium hover:bg-primary/20 px-3 py-2 rounded-lg transition"
          >
            Pricing
          </Link>
        </motion.div>
      </div>

      {/* Conditional Login/Signup or Profile */}
      {authUser ? (
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
                src={authUser.image || "https://avatar.iran.liara.run/public/boy"} // Fallback image
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
            {authUser?.role === "ADMIN" && (
                <li>
                  <Link
                    to="/add-problem"
                    className="hover:bg-primary hover:text-white text-base font-semibold"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    Add Problem
                  </Link>
                </li>
              )}
            <li>
              <Link to='/'
                onClick={logout}
                className="hover:bg-primary hover:text-white flex items-center"
              >
                <LogOut className="w-4 font-serif h-4 mr-2" />
                Logout
              </Link>
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
            className="text-white font-serif text-lg md:text-xl font-medium bg-primary/30 hover:bg-primary/20 px-3 py-2 rounded-lg transition"
          >
            Login
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
