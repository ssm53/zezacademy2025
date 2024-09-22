import React from "react";

const OurCohorts = () => {
  return (
    <section className="bg-[#F7F8F9] max-w-1300px mx-auto px-4 py-16">
      <div className="sm:text-center text-start">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Our Cohorts
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg">
          Hurry! Only limited seats remaining. Secure your spot today and <br />
          start your coding journey with personalized support, real-world <br />
          projects, and a 100% job guarantee.
        </p>
      </div>

      {/* Cohort Dates Section */}
      <div className=" mt-12 flex justify-center  flex-row  gap-8  ">
        {/* Date Card 1 */}
        <div className=" flex justify-center flex-col  bg-white  rounded-[19px]  p-4 text-center  h-[79px] sm:h-[158px] sm:w-[213px] w-[105px] text-sm sm:text-base">
          <h3 className=" text-auto sm:text-xl font-semibold text-[#0D2138]">
            15th Oct, <br /> 2024
          </h3>
          <p className="text-gray-600 mt-2 sm:font-[25px] font-[18px]">
            5 Spots left
          </p>
        </div>

        {/* Date Card 2 */}
        <div className="flex justify-center flex-col bg-white  rounded-[19px] p-4 text-center h-[79px] sm:h-[158px] sm:w-[213px] w-[105px]  text-sm sm:text-base">
          <h3 className="text-auto sm:text-xl font-semibold text-[#0D2138]">
            15th Feb,
            <br /> 2024
          </h3>
          <p className="text-gray-600 mt-2 sm:font-[25px] font-[18px] ">
            6 Spots left
          </p>
        </div>

        {/* Date Card 3 */}
        <div className="flex justify-center flex-col bg-white  rounded-[19px] p-4 text-center h-[79px] sm:h-[158px] sm:w-[213px] w-[105px]  text-sm sm:text-base">
          <h3 className="text-auto sm:text-xl font-semibold text-[#0D2138]">
            15th Jun, <br /> 2024
          </h3>
          <p className="text-gray-600 mt-2 sm:font-[25px] font-[18px]">
            6 Spots left
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCohorts;
