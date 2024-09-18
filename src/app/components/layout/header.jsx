"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import logo from "../../../public/assets/logo.png"; // Import the image using relative path
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"; // Importing ShadCN drawer components

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-primary">
        <div className="max-w-[1440px] h-[80px] flex flex-wrap items-center justify-between mx-auto p-4">
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
              className="text-[#FFFFFF] bg-secondary focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center hidden md:block"
            >
              Apply Now
            </button>

            {/* Drawer trigger (Hamburger Icon) */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-lightGray text-[#FFFFFF] inline-flex items-center p-2 w-10 h-10 justify-center"
                >
                  <FiMenu className="w-6 h-6" aria-hidden="true" />
                </button>
              </DrawerTrigger>

              <DrawerContent
                className="drawer-animation"
                style={{
                  transition: "transform 0.3s ease-out",
                }}
              >
                <DrawerHeader>
                  <DrawerClose>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 text-xl"
                    >
                      &times;
                    </button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="p-4">
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Free Materials
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Our Founder
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Our Cohorts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Why Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary-700">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
