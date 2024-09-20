import React from "react";

const SixHundred = () => {
  return (
    <section className="bg-gray-50 py-16 ">
      <div className=" px-6 lg:flex lg:justify-between lg:items-center max-w-[1300px] mx-auto">
        <div className="lg:w-1/2">
          <h3 className="text-sm font-semibold text-[#0F243DCC] uppercase mb-2">
            600+ HOURS OF MATERIAL
          </h3>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Get Full Bootcamp Material{" "}
            <span className="text-secondary">Access For Free</span>
          </h2>
          <p className="text-[#0F243DCC] mb-6">
            From complete beginner to building full-stack apps. 7 actual
            projects (not just your normal build a to-do list).
          </p>
          <p className="text-[#0F243DCC] mb-8">
            Click the button below, fill up a few questions, and get your free
            access! We will email you your login credentials within a day.
          </p>
          <button className="bg-primary text-white py-3 px-6 rounded-[5px] hover:bg-gray-800 transition">
            Get Free Access
          </button>
        </div>

        <div className="lg:w-[45%] lg:pl-16 mt-10 lg:mt-0 flex flex-wrap justify-center gap-6 bg-[#F3F5F7] p-[15px] rounded-[15px] sm:flex-wrap xs:flex-nowrap">
          <div className="bg-white rounded-[32px] p-10 text-center w-full xs:w-[30%] sm:w-1/2 md:w-[43%] flex-shrink-0">
            <h3 className="text-4xl font-bold text-secondary">600+</h3>
            <p className="text-[#0F243DCC] mt-2">Hours of material</p>
          </div>

          <div className="bg-white rounded-[32px] p-10 text-center w-full xs:w-[30%] sm:w-1/2 md:w-[43%] flex-shrink-0">
            <h3 className="text-4xl font-bold text-secondary">07</h3>
            <p className="text-[#0F243DCC] mt-2">Projects</p>
          </div>

          <div className="bg-white rounded-[32px] p-10 text-center w-full xs:w-[30%] sm:w-1/2 md:w-[43%] flex-shrink-0">
            <h3 className="text-4xl font-bold text-secondary">20</h3>
            <p className="text-[#0F243DCC] mt-2">Challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixHundred;
