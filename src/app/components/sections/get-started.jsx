import React from "react";

const GetStarted = () => {
  return (
    <section id="how-to-get-started" className="bg-[#F7F8F9]">
      <div className="   max-w-[1300px] mx-auto py-16 px-4 lg:px-0">
        {/* Button and Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h2 className="sm:text-4xl text-2xl font-bold text-primary">
              How to Get Started?
            </h2>
            <p className="text-gray-600 mt-2">
              Start Your Coding Journey in 3 Simple Steps
            </p>
          </div>
          {/* Apply Now Button */}
          <div className="mt-4 md:mt-0">
            <button className="bg-secondary sm:w-[190px] w-[160px]  h-[50px] text-white font-semibold px-6 py-3 rounded-[5px] hover:bg-secondary">
              Apply Now
            </button>
          </div>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 bg-white 200 rounded-lg  shadow-none sm:shadow-md">
            <div className="flex items-center mb-4">
              <div className="m:text-[25px] text-auto w-12 h-12 bg-[#F5BB42] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
                01
              </div>
              <br />
            </div>
            <h4 className=" text-xl font-semibold text-gray-700">
              Fill out the application form
            </h4>
            <p className="text-gray-600">
              No experience? No problem. We’ll get back to you within 5 days.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white 200 rounded-lg shadow-none sm:shadow-md">
            <div className="flex items-center mb-4">
              <div className=" sm:text-[25px] text-auto            w-12 h-12 bg-[#5BF542] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
                02
              </div>
            </div>
            <h4 className=" text-xl font-semibold text-gray-700">Interview</h4>
            <p className="text-gray-600">
              We’ll have a quick chat to understand your goals and ensure the
              bootcamp is a good fit.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white 200 rounded-lg shadow-none sm:shadow-md">
            <div className="flex items-center mb-4">
              <div className="       sm:text-[25px] text-auto     w-12 h-12 bg-[#4183F5] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
                03
              </div>
            </div>
            <h4 className=" text-xl font-semibold text-gray-700">Acceptance</h4>
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
