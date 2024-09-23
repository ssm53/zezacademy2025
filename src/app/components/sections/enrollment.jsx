"use client";
import React, { useState } from "react";
import Image from "next/image";

const EnrollmentSection = () => {
  // State for selected options
  const [selectedTuitionOption, setSelectedTuitionOption] =
    useState("Up-Front");
  const [selectedMBGOption, setSelectedMBGOption] = useState("MBG");

  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-[1300px] mx-auto sm:px-4 px-0 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Get enrolled in{" "}
            <span className="text-secondary">HeyLearn2Code</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Your Success Is Our Priority. You’ll Gain Real-World Coding
            Experience And Build Projects That Matter. Join Today And Take The
            First Step Towards A Thriving Tech Career!
          </p>
        </div>

        {/* Enrollment Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Form Section */}
          <div className="text-white  p-8 rounded-lg">
            {/* Program Type */}
            <div className="mb-6">
              <label className="block text-lg font-semibold">
                Choose Program Type
              </label>
              <select className="w-full p-3 mt-2 rounded bg-gray-200 text-gray-900">
                <option>Self Paced Bootcamp</option>
              </select>
            </div>

            {/* Tuition Options */}
            <div className="mb-6">
              <label className="block text-lg font-semibold">
                Choose Tuition Options
              </label>
              <div className="flex space-x-4 mt-2 ">
                {[
                  "Up-Front",
                  "3 Month Installment",
                  "12 Month Installment",
                ].map((option) => (
                  <button
                    key={option}
                    className={`px-6 py-3 rounded-lg transition border border-secondary ${
                      selectedTuitionOption === option
                        ? "bg-blue-600 text-white"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setSelectedTuitionOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="mb-6">
              <label className="block text-lg font-semibold">
                Money Back Guarantee
              </label>
              <div className="flex space-x-4 mt-2">
                {["MBG", "No MBG"].map((option) => (
                  <button
                    key={option}
                    className={`px-6 py-3 rounded-lg transition ${
                      selectedMBGOption === option
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                    onClick={() => setSelectedMBGOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Registration Fees */}
            <div className="mb-6">
              <label className="block text-lg font-semibold">
                Registration Fees
              </label>
              <input
                type="text"
                className="w-full p-3 mt-2 rounded  text-black"
              />
            </div>
          </div>

          {/* Right Pricing Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
              <span className="text-primary text-xl font-semibold">
                Self Paced, Online
              </span>
            </div>
            <div className="mt-8">
              <h2 className="text-5xl font-bold text-primary">RM 12,432</h2>
              <span className="block text-primary mt-2">USD 250 Up-Front</span>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Image src="/active.svg" alt="active" width={15} height={15} />
              <span className="text-green-400">3 Slots Left</span>
            </div>

            {/* Payment Options */}
            <div className="mt-6 p-4 rounded-xl bg-[#F4F4F4]">
              <h3 className="text-lg font-semibold text-primary">
                Debit / Credit Card
              </h3>
              <div className="flex space-x-4 mt-4">
                <Image src="/visa.svg" alt="Visa" width={50} height={30} />
                <Image
                  src="/mastercard.svg"
                  alt="Mastercard"
                  width={50}
                  height={30}
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-8">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-[#4F5051]">
                  I have read and agreed to the{" "}
                  <a href="#" className="text-blue-400 underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Pay Now Button */}
            <button className="mt-6 bg-blue-600 text-white w-full py-3 rounded-lg">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSection;
