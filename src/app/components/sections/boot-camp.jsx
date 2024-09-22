// components/BootcampSection.jsx

import Image from "next/image";
import clock from "/public/clock.svg";
import idea from "/public/idea.svg";
import search from "/public/search.svg";

export default function BootcampSection() {
  return (
    <section className="max-w-[1300px] mx-auto py-16 px-4 lg:px-8">
      <div className="text-start mb-8">
        <h2 className="leading-[30px] sm:leading-[50px] text-[20px] sm:text-[48px] font-bold text-primary">
          Who Is This <br className="hidden sm:block" />
          <span className="text-secondary">Bootcamp For?</span>
        </h2>

        <p className="mt-4 text-gray-600">
          Feeling stuck in your current career? Whether you’re new to coding{" "}
          <br /> or just need a real-world project push, this bootcamp is for
          you. With <br /> personalized support and a community of learners,
          you’ll reach your <br /> goals faster than you think
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 rounded-lg w-[390px] h-[252px] sm:w-auto sm:h-auto">
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
              {/* Adjust the image here */}
              <Image
                src={clock}
                alt="Icon"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          <h3 className="text-[18px] sm:text-lg font-semibold text-primary mb-2">
            Have never Coded before <br /> but want to Learn
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            Jumpstart your coding journey with hands-on learning and guidance,
            perfect for complete beginners.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 rounded-lg w-[390px] h-[252px] sm:w-auto sm:h-auto">
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
              {/* Adjust the image here */}
              <Image
                src={idea}
                alt="Icon"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          <h3 className="text-[18px] sm:text-lg font-semibold text-primary mb-2">
            Tried online Tutorials but <br /> feel Stuck
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            Turn your ideas into real-world applications by learning to code and
            create your own solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-6 rounded-lg w-[390px] h-[252px] sm:w-auto sm:h-auto">
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
              {/* Adjust the image here */}
              <Image
                src={search}
                alt="Icon"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          <h3 className="text-[18px] sm:text-lg font-semibold text-primary mb-2">
            Looking for a career switch <br /> or start-up Builder
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            Transition into the tech industry with the skills and confidence
            needed to land a developer job.
          </p>
        </div>
      </div>
    </section>
  );
}
