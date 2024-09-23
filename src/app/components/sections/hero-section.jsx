"use client";
import React, { useState } from "react";
import { CardStackDemo } from "../card-stackdemo";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section
      id="home"
      className="bg-[#0F243D] py-12 pb-16 px-6 sm:h-[40rem] h-auto flex items-center"
    >
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 items-center md:gap-[14rem]">
        {/* Left Side - Heading and Text */}
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center md:text-left">
            <span className="text-secondary">Hey</span>
            <span className="text-white">Learn</span>
            <span className="text-secondary">2</span>
            <span className="text-white">Code's</span>
            <br className="hidden md:block" />
            Full Stack Coding <br /> Bootcamp
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 text-center md:text-left">
            Become a Full-Stack Developer in 4 Months and get a developer job.
            If not, it is 100% FREE.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="w-[142px] sm:w-[193px] h-[50px] bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px]">
              Apply Now
            </button>
            <button
              onClick={togglePopup}
              className="w-[142px] sm:w-[193px] h-[50px] bg-white  hover:bg-blue-100 px-6 py-3 rounded-[5px] whitespace-nowrap flex justify-center"
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

      {showPopup && <Popup togglePopup={togglePopup} />}
    </section>
  );
};

// Popup Component
const Popup = ({ togglePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 sm:w-[90%] md:w-[60%] lg:w-[50%] relative">
        <button
          className="absolute top-3 right-3 text-black font-bold"
          onClick={togglePopup}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row">
          {/* Left Side Content */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">
              Get a Sneak Peek at the Best Live Online Coding Bootcamp!
            </h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Foundations of Coding Module:</strong> Get a 2-week free
                access to the beginner module covering HTML, CSS, and JavaScript
                fundamentals.
              </li>
              <li>
                <strong>Engaging Video Tutorials:</strong> Easy-to-follow
                explainer videos that make coding fun and accessible.
              </li>
              <li>
                <strong>Supportive Learning Community:</strong> Connect with
                peers, join discussions, and learn together with like-minded
                individuals.
              </li>
            </ul>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">
              Get Free Access To Our Bootcamp Materials
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-2 border rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="+123 Phone number"
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
              >
                Get Free Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
