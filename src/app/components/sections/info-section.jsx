import React from "react";

const InfoSection = () => {
  return (
    <div
      className="mx-auto max-w-[1300px] p-6 lg:p-0 my-12"
      id="compare-us-vs-others"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card */}
        <div className=" rounded-lg ">
          <h3 className="sm:text-4xl text-primary  text-2xl font-bold mb-2">
            Cant Commit To a Fixed Schedule and can only do part-time?
          </h3>
          <p className="text-gray-600 mb-6">
            Don’t worry, we have our flexible option where you learn at your own
            pace. No need to quit your job.
          </p>
          <a
            href="#our-curriculum"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Tell Me More →
          </a>
        </div>

        {/* Second Card */}
        <div className=" rounded-lg ">
          <h3 className="sm:text-4xl text-primary  text-2xl font-bold mb-2">
            Zez Academy vs Master&lsquo;s/Degree
          </h3>
          <p className="text-gray-600 mb-6">
            We offer an alternative to the long and expensive process of
            universities
          </p>
          <a
            href="#comparison-section"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            See Comparison →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
