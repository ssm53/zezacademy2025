
"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { CardStackDemo } from "../card-stackdemo";
import { useRouter } from "next/navigation";
import Typical from "react-typical";
const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, yoyo: Infinity }, // Infinite scaling on hover
    },
  };
  return (
    <section
      id="home"
      className="bg-[#0F243D] py-12 pb-16 px-6 w-auto sm:w-full sm:h-[50rem] h-auto flex items-center justify-center"
    >
      <div className=" pt-[80px] w-full sm:max-w-[1300px] mx-auto flex flex-col items-center">
        <motion.h1
          className="text-2xl sm:text-6xl font-bold text-white text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* For mobile - block layout */}
          <span className="block md:hidden">
            4 Month Full-Stack & AI Coding Bootcamp
            {/* <span className="text-secondary whitespace-nowrap">
              Full-Stack Developer
            </span> */}
          </span>
          {/* <span className="block md:hidden">in 4 months</span> */}
          <span className="block md:hidden">
            Get a tech job or its free{" "}
            {/* <span className="text-secondary whitespace-nowrap">100% FREE</span> */}
          </span>
          {/* For desktop - inline layout */}
          <span className="hidden md:inline"> 4 Month Full-Stack & AI Coding Bootcamp</span>{" "}

          {/* <span className="hidden md:inline text-secondary">
            Full-Stack Developer
          </span>{" "}
          <span className="hidden md:inline">in 4 months</span>{" "} */}
          <br className="hidden md:block" />
          <span className="hidden md:inline">Get a tech job or its free</span>{" "}
          {/* <span className="hidden md:inline text-secondary">free</span> */}
        </motion.h1>

        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            For complete beginners
          </motion.p>
        </motion.div>
        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Full-time / Part-time
          </motion.p>
        </motion.div>
        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Remote / On-site
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Monday To Friday Live Classes
          </motion.p>
        </motion.div>

{/* here i wanna have a statement saying we're launching December 1st */}
<motion.div
  className="mt-6 flex justify-center"
  initial="hidden"
  animate="visible"
  variants={textVariants}
>
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
    <span role="img" aria-label="rocket">🚀</span>
    Launching <span className="font-semibold">1 December 2025</span>
  </span>
</motion.div>
        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.a
            href="/apply-now"
            target="_blank"
            className="w-[150px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px] text-center"
            variants={buttonVariants}
            whileHover="hover"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Popup = ({ togglePopup }) => {
  const router = useRouter();

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

export default Hero;
