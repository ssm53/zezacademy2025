import React from "react";

const SixHundred = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className=" px-6 lg:flex lg:justify-between lg:items-center">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            600+ HOURS OF MATERIAL
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Full Bootcamp Material{" "}
            <span className="text-blue-600">Access For Free</span>
          </h2>
          <p className="text-gray-600 mb-6">
            From complete beginner to building full-stack apps. 7 actual
            projects (not just your normal build a to-do list).
          </p>
          <p className="text-gray-600 mb-8">
            Click the button below, fill up a few questions, and get your free
            access! We will email you your login credentials within a day.
          </p>
          <button className="bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
            Get Free Access
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:pl-16 mt-10 lg:mt-0 flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
            <h3 className="text-4xl font-bold text-blue-600">600+</h3>
            <p className="text-gray-600 mt-2">Hours of material</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
            <h3 className="text-4xl font-bold text-blue-600">07</h3>
            <p className="text-gray-600 mt-2">Projects</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
            <h3 className="text-4xl font-bold text-blue-600">20</h3>
            <p className="text-gray-600 mt-2">Challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixHundred;
