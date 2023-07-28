"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white/30 backdrop-blur dark:bg-gray-900 fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center font-playfair text-2xl font-semibold whitespace-nowrap">
            SHARULL
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Hire me
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 w-10 h-10 text-sm text-gray-500 rounded-lg block md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              className={`w-5 h-0.5 mx-auto bg-black my-1`}
              animate={{
                rotate: menuOpen ? 45 : 0,
                translateY: menuOpen ? 6 : 0,
              }}
            />
            <motion.div
              className={`w-5 h-0.5 mx-auto bg-black my-1`}
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.div
              className={`w-5 h-0.5 mx-auto bg-black my-1`}
              animate={{
                rotate: menuOpen ? -45 : 0,
                translateY: menuOpen ? -6 : 0,
              }}
            />
          </button>
        </div>
        <motion.div
          animate={{
            translateY: menuOpen ? 0 : -100,
          }}
          className={`items-center justify-between w-full md:scale-100 md:!translate-y-0 md:flex md:w-auto md:order-1 
            ${menuOpen ? "block" : "hidden"}
          `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}
