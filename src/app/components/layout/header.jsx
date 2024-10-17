"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Social Icons
import { motion, AnimatePresence } from "framer-motion";

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
//

// Move handleOutsideClick outside to prevent redefinition on each render
const handleOutsideClick = (e, setIsOpen) => {
  if (!e.target.closest(".drawer-content")) {
    setIsOpen(false);
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // New hydration flag
  const isDesktop = useMediaQuery(1024); // Detect if the screen is larger than 1024px (lg: breakpoint)
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setIsHydrated(true); // Set hydrated to true once the client-side is loaded
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const clickHandler = (e) => handleOutsideClick(e, setIsOpen);
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    }
  }, [isOpen]); // `handleOutsideClick` moved out, now no need to include it here

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
              <span className="text-secondary">Zez</span>{" "}
              <span className="text-white">Academy</span>
            </h1>
          </Link>
          <div className="flex items-center space-x-3">
            <button
              onClick={togglePopup}
              type="button"
              className="text-[#FFFFFF] bg-secondary focus:ring-4 font-medium rounded-[3px] text-sm px-4 py-2 text-center hidden md:block"
            >
              Apply Now
            </button>
            {/* <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZbUvC0vVXuVLHg5UxAQ11wJSJeVoxtWP_EoIsfZRRUNMo5w/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] bg-secondary focus:ring-4 font-medium rounded-[3px] text-sm px-4 py-2 text-center hidden md:block"
            >
              Apply Now
            </a> */}

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
                    // "Free Materials",
                    "Our Founder",
                    // "Our Cohorts",
                    "Why Us",
                    "Our Teaching Methods",
                    "Our Curriculum",
                    "How to Get Started",
                    "Pricing",
                    // "Our Students",
                    "FAQs",
                  ].map((link, index) => (
                    <li key={index} className="border-b border-gray-200 pb-3">
                      <Link
                        href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                        onClick={toggleDrawer}
                      >
                        <span className="flex justify-between items-center text-gray-800 hover:text-secondary">
                          {link}
                          <Image
                            src="/arrrow.svg" // Arrow SVG in the public folder
                            alt="arrow"
                            width={20}
                            height={20} // Replaced <img> with <Image /> component
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
                  © 2024 Zez Academy. All Rights Reserved.
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
      <AnimatePresence>
        {showPopup && <Popup togglePopup={togglePopup} />}
      </AnimatePresence>
    </div>
  );
};

const Popup = ({ togglePopup }) => {
  // const router = useRouter();

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    whatsapp: "",
    reason: "",
    codingexperience: "I have not written a single line of code",
    stageofcareer: "I am still in school/college/university",
    fullorpart: "Self-Paced",
    remoteoronsite: "Remote",
  });
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make sure all required fields are filled
    if (
      formData.fullname &&
      formData.email &&
      formData.whatsapp &&
      formData.reason
    ) {
      try {
        const response = await fetch("/api/new-applicant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Set the thank-you message
          setThankYouMessage(
            "Thanks for your application. We will notify you within 5 days if you made it to the next stage."
          );
        } else {
          alert("Error submitting the form. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md md:max-w-4xl relative mx-4 md:mx-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <button
          className="absolute top-3 right-3 text-black font-bold text-2xl"
          onClick={togglePopup}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 bg-gray-100 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-6">We win only if you win</h2>
            {/* <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Job Guarantee</strong> or you get your money-back
              </li>
              <li>
                <strong>Engaging Video Tutorials:</strong> Easy-to-follow
                explainer videos that make coding fun and accessible. Perfect
                for beginners!
              </li>
              <li>
                <strong>Supportive Learning Community:</strong> Connect with
                peers, join discussions, and learn together with like-minded
                individuals.
              </li>
            </ul> */}
          </div>

          <div className="md:w-1/2 p-6 bg-white rounded-r-lg">
            <h2 className="text-2xl font-bold mb-6">
              Start your coding journey
            </h2>
            {thankYouMessage !== "" ? (
              <div className="p-4 text-center">
                <p>{thankYouMessage}</p>
                {/* <button 
      onClick={() => {
        setThankYouMessage(""); // Reset the message when closing
        // Close the modal here if you have a modal close handler
      }} 
      className="mt-4 bg-blue-600 text-white p-2 rounded-lg"
    >
      Close
    </button> */}
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  className="p-3 border rounded-lg w-full"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Whatsapp Number"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="reason"
                  placeholder="Why do you want to learn to code?"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                  required
                />
                <select
                  name="codingexperience"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="I have not written a single line of code">
                    I have not written a single line of code
                  </option>
                  <option value="I have done a little bit of coding (Youtube videos/short online course)">
                    I have done a little bit of coding (Youtube videos/short
                    online course)
                  </option>
                </select>
                <select
                  name="stageofcareer"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="I am still in school/college/university">
                    I am still in school/college/university
                  </option>
                  <option value="I have been working for 1-3 years already">
                    I have been working for 1-3 years already
                  </option>
                  <option value="I have been working for 4-10 years already">
                    I have been working for 4-10 years already
                  </option>
                  <option value="I have been working for more than 10 years already">
                    I have been working for more than 10 years already
                  </option>
                  <option value="I am an entrepreneur">
                    I am an entrepreneur
                  </option>
                  <option value="I am currently unemployed">
                    I am currently unemployed
                  </option>
                </select>
                <select
                  name="fullorpart"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="I am not sure yet">I am not sure yet</option>
                </select>
                <select
                  name="remoteoronsite"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="I am not sure yet">I am not sure yet</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
