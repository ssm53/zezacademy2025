"use client";
import React from "react";
import Link from "next/link";

const LowerHeader = () => {
  return (
    <header className="bg-[#0a2540]">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-0 h-[80px] flex justify-between items-center">
        <Link href="/" className="text-3xl md:text-4xl font-bold">
          <span className="text-[#0099FF]">Hey</span>
          <span className="text-white">Learn</span>
          <span className="text-[#0099FF]">2</span>
          <span className="text-white">Code</span>
        </Link>
        <Link
          href="/"
          className="text-white text-sm flex items-center space-x-1"
        >
          <span>Back to Home</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      {/* Lower Header */}
      <div className="bg-white border-b border-gray-200">
        <nav className="max-w-[1300px] mx-auto px-6 lg:px-0 h-[45px] flex items-center  space-x-8">
          <Link
            href="/signup"
            className="text-sm text-gray-400 hover:text-black"
          >
            Sign Up
          </Link>
          <Link href="/enrollment" className="text-sm font-semibold underline">
            Enrolment
          </Link>
          <Link
            href="/confirmation"
            className="text-sm text-gray-400 hover:text-black"
          >
            Confirmation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default LowerHeader;
