import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0F243D] py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
            <span className="text-blue-400">Hey</span>
            <span className="text-white">Learn</span>
            <span className="text-blue-400">2</span>
            <span className="text-white">Code's</span>{" "}
            <br className="hidden md:block" />
            Full Stack Coding Bootcamp
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 text-center md:text-left">
            Become a Full-Stack Developer in 4 Months and get a developer job.
            If not, it is 100% FREE.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
              Apply Now
            </button>
            <button className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg">
              Get Free Access
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center md:text-left">
            ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-white">
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              Get developer job or it’s 100% free
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              Proper career support after graduation
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              Only 6 Students per cohort
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              Build project that impress recruiters
            </div>
          </div>
        </div>

        <div className="relative bg-white p-6 rounded-lg shadow-lg">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="180"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor amet consectetur pellentesque scelerisque
            fermentum bibendum ipsum massa cursus aliquet feugiat.
          </p>

          <div className="flex items-center mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Reviewer"
            />
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-800">
                Kris Steigerwald
              </p>
              <p className="text-xs text-yellow-400">★★★★★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
