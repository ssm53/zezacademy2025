"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Cross
import logo from "../../../public/assets/logo.png"; // Import the image using relative path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-primary">
        <div className=" h-[80px] flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="w-[200px] h-[50px] sm:w-[256px] sm:h-[51px]"
              src={logo}
              alt="Logo"
            />
          </a>
          <div className="flex items-center space-x-3">
            {/* Hide the "Apply Now" button on mobile screens */}
            <button
              type="button"
              className="text-[#FFFFFF] bg-secondary  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center    
 hidden md:block"
            >
              Apply Now
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-lightGray text-[#FFFFFF] inline-flex items-center p-2 w-10 h-10 justify-center "
            >
              {isOpen ? (
                <FiX className="w-6 h-6" aria-hidden="true" /> // Cross Icon when open
              ) : (
                <FiMenu className="w-6 h-6" aria-hidden="true" /> // Hamburger Icon when closed
              )}
              {/* <span className=" sr-only">Toggle navigation</span> */}
            </button>
          </div>
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-[70px] right-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-48 dark:bg-gray-800 dark:border-gray-700">
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:text-secondary-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:text-secondary-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:text-secondary-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:text-secondary-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
