"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { CardStackDemo } from "../card-stackdemo";
import { useRouter } from "next/navigation"; // Use the new app router

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section
      id="home"
      className="bg-[#0F243D] py-12 pb-16 px-6 w-auto sm:w-full sm:h-[40rem] h-auto flex items-center"
    >
      <div className="w-full   sm:max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 items-center md:gap-[14rem]">
        {/* Left Side - Heading and Text */}
        <div className="w-full">
          <h1 className="text-2xl sm:text-6xl font-bold text-white text-center md:text-left">
            <span className="text-secondary">Hey</span>
            <span className="text-white">Learn</span>
            <span className="text-secondary">2</span>
            <span className="text-white">Code&apos;s</span>
            <br className="hidden md:block" />
            Full Stack Coding <br /> Bootcamp
          </h1>

          <p className="mt-6 text-sm md:text-lg text-gray-300 text-center md:text-left">
            Become a Full-Stack Developer in 4 Months and get a developer job.
            If not, it is 100% FREE.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="w-[120px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px]">
              Apply Now
            </button>
            <button
              onClick={togglePopup}
              className="w-[120px] sm:w-[193px] h-[50px] bg-white text-sm  hover:bg-blue-100 px-6 py-3 rounded-[5px] whitespace-nowrap flex justify-center"
            >
              Get Free Access
            </button>
          </div>

          <p className="mt-4 text-xs text-white text-center md:text-left">
            ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
          </p>
          {/* Grid with Vertical and Horizontal Lines */}
          <div className="w-auto sm:w-[571px] wh-auto ">
            <div className=" grid grid-cols-2 sm:grid-cols-4  mt-6 text-sm text-white  sm:divide-y-0 sm:divide-x border border-[#1D436F] rounded-[8px] lg:py-4">
              <div className="relative p-[20px] lg:py-0 text-start border-r border-[#1D436F] text-[14px] lg:text-[12px] font-[400] leading-[18px]">
                Get developer job or it’s 100% free
              </div>
              <div className="relative p-[20px] lg:py-0 text-start border-r border-[#1D436F] text-[14px] lg:text-[12px] font-[400] leading-[18px]">
                Proper career support after
              </div>
              <div className="relative p-[20px] lg:py-0 text-start border-r border-[#1D436F] border-t text-[14px] lg:text-[12px] font-[400] leading-[18px]">
                Only 6 Students per cohort
              </div>
              <div className="relative p-[20px] lg:py-0 text-start border-t border-[#1D436F] text-[14px] lg:text-[12px] font-[400] leading-[18px]">
                Flexible payment methods
              </div>
            </div>
          </div>
        </div>
        <CardStackDemo />
      </div>

      {/* Popup Modal with Animation */}
      <AnimatePresence>
        {showPopup && <Popup togglePopup={togglePopup} />}
      </AnimatePresence>
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    ) {
      router.push("/enrollment");
    } else {
      alert("Please fill in all fields.");
    }
  };

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
          {/* Left Side Content */}
          <div className="md:w-1/2 p-6 bg-gray-100 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-6">
              Get a Sneak Peek at the Best Live Online Coding Bootcamp!
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Foundations of Coding Module:</strong> Get a 2-week free
                access to the beginner module covering HTML, CSS, and JavaScript
                fundamentals. Start building projects and develop job-ready
                skills.
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
            </ul>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 p-6 bg-white rounded-r-lg">
            <h2 className="text-2xl font-bold mb-6">
              Get Free Access To Our Bootcamp Materials
            </h2>
            <p className="mb-4 text-gray-600">You can reach us any time</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="p-3 border rounded-lg w-full"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="p-3 border rounded-lg w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="+123 Phone number"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Access
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
