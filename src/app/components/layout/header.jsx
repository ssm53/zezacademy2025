"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Next.js Link
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
    <div className="relative border-b border-[#243548]">
      <nav className="bg-primary">
        <div className="max-w-[1300px] h-[80px] flex flex-wrap items-center justify-between mx-auto p-6 lg:p-0">
          <Link href="#home" scroll={false}>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
              <span className="text-secondary">Hey</span>
              <span className="text-white">Learn</span>
              <span className="text-secondary">2</span>
              <span className="text-white">Code</span>
            </h1>
          </Link>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="text-[#FFFFFF] bg-secondary focus:ring-4 font-medium rounded-[3px] text-sm px-4 py-2 text-center hidden md:block"
            >
              Apply Now
            </button>

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
                  ${isOpen ? "translate-x-0" : "-translate-x-full"}
                  fixed top-0 left-0 md:w-[300px] h-full md:h-auto bg-white shadow-lg transform
                  md:translate-x-0 md:fixed md:top-0 md:left-0 
                  sm:translate-y-0 sm:fixed sm:bottom-0 sm:left-0 w-full sm:h-[50%]`}
              >
                <DrawerHeader>
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
                      <Link href="#home" scroll={true} onClick={toggleDrawer}>
                        <span className="hover:text-secondary-700">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#free-materials"
                        scroll={true}
                        onClick={toggleDrawer}
                      >
                        <span className="hover:text-secondary-700">
                          Free Materials
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-founder"
                        scroll={true}
                        onClick={toggleDrawer}
                      >
                        <span className="hover:text-secondary-700">
                          Our Founder
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-cohorts"
                        scroll={true}
                        onClick={toggleDrawer}
                      >
                        <span className="hover:text-secondary-700">
                          Our Cohorts
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#why-us" scroll={true} onClick={toggleDrawer}>
                        <span className="hover:text-secondary-700">Why Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#pricing"
                        scroll={true}
                        onClick={toggleDrawer}
                      >
                        <span className="hover:text-secondary-700">
                          Pricing
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contact"
                        scroll={true}
                        onClick={toggleDrawer}
                      >
                        <span className="hover:text-secondary-700">
                          Contact
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
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
    </div>
  );
};

export default Header;
