import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
        
      <footer className="footer border-t-2 border-gray-900 items-center justify-around  flex footer-horizontal footer-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-base-content rounded p-10 shadow-gray-400 ">

        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <motion.img
            src="/leetlab.svg"
            alt="Logo"
            className="h-16 w-16 bg-primary/20 text-primary border-none px-2 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.span
            className="text-2xl font-serif md:text-2xl font-extrabold tracking-tight text-white hidden md:block"
            whileHover={{ color: "#4ADE80" }} // Green hover effect
          >
            CodeBeta
          </motion.span>
        </Link>

        <div className=" mt-6 gap-8">
          <nav className="grid grid-flow-col gap-6">
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link to="/problem" className="link link-hover">
              Problems
            </Link>
            <Link to='/pricing' className="link link-hover">Pricing</Link>
          </nav>

          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link
                to="https://x.com/ihimanshu29"
                target="_blank"
                rel="noopener noreferrer"
                className="btn tooltip"
                data-tip="Twitter"
              >
                <BsTwitterX className="text-white hover:text-blue-900 text-2xl transition-transform hover:scale-110" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn tooltip"
                data-tip="Instagram"
              >
                <FaInstagram className="text-white hover:text-blue-900 text-2xl transition-transform hover:scale-110" />
              </Link>

              <Link
                to="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn tooltip"
                data-tip="Youtube"
              >
                <FaYoutube className="text-white hover:text-blue-900 text-2xl transition-transform hover:scale-110" />
              </Link>
            </div>
          </nav>

          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              CodeBeta
            </p>
          </aside>
        </div>

        <div className="flex flex-col items-center gap-1 p-2 mt-5">
          <h1 className="text-xl font-serif text-gray-100 p-5 mt-3">Address:</h1>
          <IoLocationOutline className="text-white text-3xl" />
          <p className="text-blue-100 font-semibold text-md">Lucknow, Uttar Pradesh</p>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer