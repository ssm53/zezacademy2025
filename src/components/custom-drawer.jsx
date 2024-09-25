"use client";
import React, { useState } from "react";
import Image from "next/image"; // For social icons
import Link from "next/link"; // For the links

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Drawer Trigger - Use your existing Hamburger Button */}
      <button
        className="bg-lightGray text-white inline-flex items-center p-2 w-10 h-10 justify-center"
        onClick={toggleDrawer}
      >
        {/* Replace this with your Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      {/* Drawer Content */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-2/4 md:w-1/3 h-full  shadow-lg transform transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Close Button */}
        <button
          className="absolute top-5 right-5 text-2xl font-bold"
          onClick={toggleDrawer}
        >
          &times;
        </button>

        {/* Drawer Links */}
        <div className="p-8 mt-12">
          <ul className="flex flex-col space-y-6 text-xl">
            <li>
              <Link href="#home">
                <span className="text-blue-600 hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#free-materials">
                <span className="hover:text-blue-600">Free Materials</span>
              </Link>
            </li>
            <li>
              <Link href="#our-founder">
                <span className="hover:text-blue-600">Our Founder</span>
              </Link>
            </li>
            <li>
              <Link href="#our-cohorts">
                <span className="hover:text-blue-600">Our Cohorts</span>
              </Link>
            </li>
            <li>
              <Link href="#why-us">
                <span className="hover:text-blue-600">Why Us</span>
              </Link>
            </li>
            <li>
              <Link href="#pricing">
                <span className="hover:text-blue-600">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="hover:text-blue-600">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 left-8 flex space-x-4">
          <Link href="https://linkedin.com">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </Link>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </>
  );
};

export default DrawerComponent;
