"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { FiArrowDown } from "react-icons/fi"; // Down arrow icon for mobile drawer
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"; // Importing ShadCN drawer components

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative border-b border-[#243548] sm:border-b-[#243548] md:border-b-[#243548] lg:border-b-[#243548] xl:border-b-[#243548]">
      <nav className="bg-primary">
        <div className="max-w-[1300px] h-[80px] flex flex-wrap items-center justify-between mx-auto p-6 lg:p-0">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
              <span className="text-secondary">Hey</span>
              <span className="text-white">Learn</span>
              <span className="text-secondary">2</span>
              <span className="text-white">Code</span>
            </h1>
          </a>
          <div className="flex items-center space-x-3">
            {/* Hide the "Apply Now" button on mobile screens */}
            <button
              type="button"
              className="text-[#FFFFFF] bg-secondary focus:ring-4 font-medium rounded-[3px] text-sm px-4 py-2 text-center hidden md:block"
            >
              Apply Now
            </button>

            {/* Drawer trigger (Hamburger Icon) */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <button
                  type="button"
                  onClick={toggleDrawer}
                  className="bg-lightGray text-[#FFFFFF] inline-flex items-center p-2 w-10 h-10 justify-center"
                >
                  <FiMenu className="w-6 h-6" aria-hidden="true" />
                </button>
              </DrawerTrigger>

              <DrawerContent
                className={`
                  transition-transform duration-300 
                  ${isOpen ? "translate-x-0" : "translate-x-full"}
                  fixed top-0 right-0 md:w-[300px] h-full md:h-auto bg-white shadow-lg transform
                  md:translate-x-0 md:fixed md:top-0 md:right-0 
                  sm:translate-y-0 sm:fixed sm:bottom-0 sm:left-0 w-full sm:h-[50%]`} // Responsive behavior for mobile (opens from bottom) and desktop (opens from right)
              >
                <DrawerHeader>
                  {/* Close Button */}
                  <DrawerClose>
                    <button
                      onClick={toggleDrawer}
                      className="absolute top-4 right-4 text-xl"
                    >
                      &times;
                    </button>
                  </DrawerClose>
                  <div className="md:hidden flex justify-center mt-2">
                    <FiArrowDown className="text-2xl text-gray-500" />
                  </div>
                </DrawerHeader>
                <div className="p-4">
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <a href="#home" className="hover:text-secondary-700">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#free-materials"
                        className="hover:text-secondary-700"
                      >
                        Free Materials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#our-founder"
                        className="hover:text-secondary-700"
                      >
                        Our Founder
                      </a>
                    </li>
                    <li>
                      <a
                        href="#our-cohorts"
                        className="hover:text-secondary-700"
                      >
                        Our Cohorts
                      </a>
                    </li>
                    <li>
                      <a href="#why-us" className="hover:text-secondary-700">
                        Why Us
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="hover:text-secondary-700">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-secondary-700">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Drawer Footer */}
                <DrawerFooter className="text-center border-t border-gray-200">
                  <p className="py-4 text-sm text-gray-500">
                    © 2024 HeyLearn2Code. All Rights Reserved.
                  </p>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
      {/* <hr className="lg:border border-[#243548] sm:border-[#243548]" /> */}
    </div>
  );
};

export default Header;
