import React from "react";

const OurCohorts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Cohorts
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg">
          Hurry! Only limited seats remaining. Secure your spot today and start
          your coding journey with personalized support, real-world projects,
          and a 100% job guarantee.
        </p>
      </div>

      {/* Cohort Dates Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Date Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900">15th Oct, 2024</h3>
          <p className="text-gray-600 mt-2">5 Spots left</p>
        </div>

        {/* Date Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900">15th Feb, 2024</h3>
          <p className="text-gray-600 mt-2">6 Spots left</p>
        </div>

        {/* Date Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900">15th Jun, 2024</h3>
          <p className="text-gray-600 mt-2">6 Spots left</p>
        </div>
      </div>
    </section>
  );
};

export default OurCohorts;
