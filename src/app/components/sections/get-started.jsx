import React from "react";

const GetStarted = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Button and Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              How to Get Started?
            </h2>
            <p className="text-gray-600 mt-2">
              Start Your Coding Journey in 3 Simple Steps
            </p>
          </div>
          {/* Apply Now Button */}
          <div className="mt-4 md:mt-0">
            <button className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary">
              Apply Now
            </button>
          </div>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 bg-white 200 rounded-lg shadow-none sm:shadow-md ">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h4 className="ml-4 text-xl font-semibold text-gray-700">
                Fill out the application form
              </h4>
            </div>
            <p className="text-gray-600">
              No experience? No problem. We’ll get back to you within 5 days.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white 200 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h4 className="ml-4 text-xl font-semibold text-gray-700">
                Interview
              </h4>
            </div>
            <p className="text-gray-600">
              We’ll have a quick chat to understand your goals and ensure the
              bootcamp is a good fit.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white 200 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h4 className="ml-4 text-xl font-semibold text-gray-700">
                Acceptance
              </h4>
            </div>
            <p className="text-gray-600">
              If selected, you’ll get immediate access to pre-bootcamp materials
              and a setup guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
