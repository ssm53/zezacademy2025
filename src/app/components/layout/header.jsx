"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Social Icons

// Hook to detect screen size
const useMediaQuery = (width) => {
  const [isScreenSize, setIsScreenSize] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsScreenSize(window.innerWidth >= width);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [width]);

  return isScreenSize;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // New hydration flag
  const isDesktop = useMediaQuery(1024); // Detect if the screen is larger than 1024px (lg: breakpoint)

  useEffect(() => {
    setIsHydrated(true); // Set hydrated to true once the client-side is loaded
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the drawer if clicking outside of it
  const handleOutsideClick = (e) => {
    if (isOpen && !e.target.closest(".drawer-content")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  if (!isHydrated) {
    // Prevents rendering until hydration is complete
    return null;
  }

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

            {/* Custom Drawer Trigger - Hamburger Icon */}
            <button
              type="button"
              onClick={toggleDrawer}
              className="bg-lightGray text-[#FFFFFF] inline-flex items-center p-2 w-10 h-10 justify-center"
            >
              <FiMenu className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Backdrop Effect */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={toggleDrawer} // Close drawer when clicking on backdrop
            />

            {/* Custom Drawer Component */}
            <div
              className={`fixed ${
                isDesktop ? "right-0 top-0" : "bottom-0 left-0"
              } w-full ${
                isDesktop ? "sm:w-2/5 lg:w-1/2" : "h-[90%]"
              } h-full bg-[#FFFFFF] rounded-[12px] shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
                isOpen
                  ? isDesktop
                    ? "translate-x-0"
                    : "translate-y-0"
                  : isDesktop
                  ? "translate-x-full"
                  : "translate-y-full"
              } drawer-content`}
            >
              {/* Drawer Close Button */}
              <button
                className="absolute top-5 right-5 text-2xl font-bold hover:text-secondary transition-all duration-300"
                onClick={toggleDrawer}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(34, 34, 34, 0.1)",
                }}
              >
                &times;
              </button>

              {/* Drawer Links with Arrow SVG */}
              <div className="p-8 mt-12">
                <ul
                  className={`flex flex-col ${
                    isDesktop ? "space-y-1" : "space-y-3"
                  } text-xl`}
                >
                  {[
                    "Home",
                    "Free Materials",
                    "Our Founder",
                    "Our Cohorts",
                    "Why Us",
                    "Our Teaching Methods",
                    "Our Curriculum",
                    "How to Get Started",
                    "Pricing",
                    "Our Students",
                    "FAQs",
                  ].map((link, index) => (
                    <li key={index} className="border-b border-gray-200 pb-3">
                      <Link
                        href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                        onClick={toggleDrawer}
                      >
                        <span className="flex justify-between items-center text-gray-800 hover:text-secondary">
                          {link}
                          <img
                            src="/arrrow.svg" // Arrow SVG in the public folder
                            alt="arrow"
                            className="w-5 h-5" // Adjust the arrow size
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Drawer Footer - Always visible on desktop and mobile */}
              <div className="absolute bottom-8 left-8 right-8 border-t border-gray-200 pt-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  © 2024 HeyLearn2Code. All Rights Reserved.
                </p>

                {/* Social Icons - Bottom Right */}
                <div className="flex space-x-4">
                  <Link href="https://linkedin.com">
                    <FaLinkedin className="w-6 h-6 text-gray-800 hover:text-secondary" />
                  </Link>
                  <Link href="https://twitter.com">
                    <FaTwitter className="w-6 h-6 text-gray-800 hover:text-secondary" />
                  </Link>
                  <Link href="https://youtube.com">
                    <FaYoutube className="w-6 h-6 text-gray-800 hover:text-secondary" />
                  </Link>
                  <Link href="https://instagram.com">
                    <FaInstagram className="w-6 h-6 text-gray-800 hover:text-secondary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
