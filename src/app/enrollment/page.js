"use client";
import React, { useState } from "react";
import Image from "next/image";
import LowerHeader from "../components/layout/enrollement-header";
import CurriculumTable from "../components/sections/curriculum-table";
import WatchMore from "../components/sections/watch-more";

const EnrollmentSection = () => {
  // State for selected options
  const [selectedTuitionOption, setSelectedTuitionOption] =
    useState("Up-Front");
  const [selectedMBGOption, setSelectedMBGOption] = useState("MBG");

  return (
    <div id="get-free-access" className="bg-primary min-h-screen">
      <LowerHeader />
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Let’s Get Started. We{" "}
            <span className="text-secondary">Don’t Get Paid</span> If You Don’t
            Get A Job
          </h1>
        </div>

        {/* Enrollment Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Form Section */}
          <div className="bg-[#132647] p-8 rounded-lg">
            {/* Program Type */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white">
                Choose Program Type
              </label>
              <select className="w-full p-3 mt-2 rounded bg-gray-200 text-gray-900">
                <option>Self Paced Bootcamp</option>
                <option>Online Bootcamp (Fulltime)</option>
                <option>Onsite Bootcamp (Fulltime)</option>
              </select>
            </div>

            {/* Tuition Options */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white">
                Choose Tuition Options
              </label>
              <div className="flex space-x-4 mt-2">
                {[
                  "Up-Front",
                  "3 Month Installment",
                  "12 Month Installment",
                ].map((option) => (
                  <button
                    key={option}
                    className={`px-6 py-3 rounded-lg transition border ${
                      selectedTuitionOption === option
                        ? "bg-blue-600 text-white"
                        : "bg-transparent text-white border-white"
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
              <label className="block text-lg font-semibold text-white">
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
              <label className="block text-lg font-semibold text-white">
                Registration Fees
              </label>
              <input
                type="text"
                value="RM300"
                className="w-full p-3 mt-2 rounded bg-gray-200 text-gray-900"
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
              <Image src="/activedot.svg" alt="active" width={15} height={15} />
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
      <CurriculumTable />
      <WatchMore />
    </div>
  );
};

export default EnrollmentSection;
