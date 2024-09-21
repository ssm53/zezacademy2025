"use client";
import React from "react";

import { CardStackDemo } from "../card-stackdemo";

const Hero = () => {
  return (
    <section className="bg-[#0F243D] py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 items-center md:gap-[14rem]">
        {/* Left Side - Heading and Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
            <span className="text-blue-400">Hey</span>
            <span className="text-white">Learn</span>
            <span className="text-blue-400">2</span>
            <span className="text-white">Code's</span>
            <br className="hidden md:block" />
            Full Stack Coding Bootcamp
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 text-center md:text-left">
            Become a Full-Stack Developer in 4 Months and get a developer job.
            If not, it is 100% FREE.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="w-[142px] sm:w-[190px] h-[50px] bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-[5px]">
              Apply Now
            </button>
            <button className="w-[142px] sm:w-[190px] h-[50px] bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-[5px] whitespace-nowrap flex justify-center">
              Get Free Access
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center md:text-left">
            ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
          </p>
          {/* Grid with Vertical and Horizontal Lines */}
          <div className=" grid grid-cols-1 sm:grid-cols-4 sm:gap-0 gap-4 mt-6 text-sm text-white divide-y divide-[#1D436F] sm:divide-y-0 sm:divide-x border border-[#1D436F] rounded-[15px]">
            <div className="relative p-3 rounded-lg text-center">
              Get developer job or it’s 100% free
            </div>
            <div className="relative p-3 rounded-lg text-center">
              Proper career support after graduation
            </div>
            <div className="relative p-3 rounded-lg text-center">
              Only 6 Students per cohort
            </div>
            <div className="relative p-3 rounded-lg text-center">
              Flexible payment methods
            </div>
          </div>
        </div>
        <CardStackDemo />
      </div>
    </section>
  );
};

export default Hero;
