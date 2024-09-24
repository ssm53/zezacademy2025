import React from "react";

const InfoSection = () => {
  return (
    <div className="mx-auto max-w-[1300px] p-6 lg:p-0 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card */}
        <div className=" rounded-lg ">
          <h3 className="sm:text-4xl text-primary  text-2xl font-bold mb-2">
            Cant Commit Full-Time?
          </h3>
          <p className="text-gray-600 mb-6">
            Don’t worry, we have our self-paced option where you learn at your
            own pace. No need to quit your job.
          </p>
          <a
            href="#curriculum-table"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Tell Me More →
          </a>
        </div>

        {/* Second Card */}
        <div className=" rounded-lg ">
          <h3 className="sm:text-4xl text-primary  text-2xl font-bold mb-2">
            Cant Choose Right Path?
          </h3>
          <p className="text-gray-600 mb-6">
            Are you thinking of pursuing a degree or master’s, or are you
            considering our bootcamp? Let’s explore which option is best for
            you!
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
