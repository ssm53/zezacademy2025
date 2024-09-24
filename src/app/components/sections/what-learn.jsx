import React from "react";

const WhatLearn = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-16 px-4 lg:px-0">
      {/* Heading Section */}
      <div className="text-start mb-8">
        <h2 className="text-4xl font-bold text-primary">
          What You will Learn In
        </h2>
        <h3 className="text-4xl font-bold text-secondary">This Course?</h3>
        <p className="text-[#0F243DCC] mt-4">
          This is not another theory-heavy course. We focus on doing. <br />{" "}
          You’ll build real projects, get feedback, and learn by doing.
        </p>
        {/* Apply Now Button */}
        <div className="flex text-center mt-4">
          <button className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark">
            Apply Now
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="p-6 border border-gray-200 rounded-2xl bg-white ">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Technical Skills
          </h4>
          <ul className="list-disc list-inside text-[#0F243DCC] space-y-2">
            <li>Fundamentals (HTML, CSS, JS)</li>
            <li>Frontend (SvelteKit, NextJS, DaisyUI, shadcn-ui)</li>
            <li>Backend (NodeJS, SQL, AWS, Docker)</li>
            <li>Algorithms & Data Structures</li>
          </ul>
        </div>

        {/* Course Breakdown */}
        <div className="p-6 border border-gray-200 rounded-2xl bg-white ">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Course Breakdown
          </h4>
          <ul className="list-disc list-inside text-[#0F243DCC] space-y-2">
            <li>Weeks 1-3: Fundamentals</li>
            <li>Weeks 4-6: Frontend</li>
            <li>Weeks 7-9: Backend</li>
            <li>Weeks 10-12: Self-paced</li>
          </ul>
        </div>
      </div>

      {/* Admission Requirements Section */}
      <div className="px-6 mt-6 bg-secondary text-white py-8 rounded-2xl">
        <h3 className="sm:text-4xl text-2xl font-semibold mb-4 text-center lg:text-start">
          Admission Requirements
        </h3>
        <p className="max-w-3xl text-center lg:text-start text-lg">
          The only admission requirement for our bootcamp is
          <strong>
            proven motivation to learn <br />
          </strong>{" "}
          that's it... but take it seriously.
        </p>
      </div>
    </section>
  );
};

export default WhatLearn;
