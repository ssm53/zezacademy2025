// components/BootcampSection.jsx

import Image from "next/image";
import clock from "/public/clock.svg";
import idea from "/public/idea.svg";
import search from "/public/search.svg";

export default function BootcampSection() {
  return (
    <section className="max-w-[1300px] mx-auto py-16 px-4 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary">
          Who Is This <span className="text-secondary">Bootcamp For?</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Feeling stuck in your current career? Whether you’re new to coding or
          just need a real-world project push, this bootcamp is for you. With
          personalized support and a community of learners, you’ll reach your
          goals faster than you think.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-start mb-4">
            <div className="h-16 w-16 flex items-center justify-center">
              {/* Adjust the image here */}
              <Image src={clock} alt="Icon" width={60} height={60} />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            Have never Coded before but want to Learn
          </h3>
          <p className="text-gray-600">
            Jumpstart your coding journey with hands-on learning and guidance,
            perfect for complete beginners.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-start mb-4">
            <div className="h-16 w-16  flex items-center justify-center">
              {/* Adjust the image here */}
              <Image src={idea} alt="Icon" width={60} height={60} />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            Tried online Tutorials but feel Stuck
          </h3>
          <p className="text-gray-600">
            Turn your ideas into real-world applications by learning to code and
            create your own solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-start mb-4">
            <div className="h-16 w-16 flex items-center justify-center">
              {/* Adjust the image here */}
              <Image src={search} alt="Icon" width={60} height={60} />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            Looking for a career switch or start-up Builder
          </h3>
          <p className="text-gray-600">
            Transition into the tech industry with the skills and confidence
            needed to land a developer job.
          </p>
        </div>
      </div>
    </section>
  );
}
