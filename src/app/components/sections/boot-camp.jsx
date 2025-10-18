"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import clock from "/public/clock.svg";
import idea from "/public/idea.svg";
import search from "/public/search.svg";
import { useRef } from "react";

export default function BootcampSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false }); // Ensure it animates every time in view

  // Variants for container to control the stagger and transition
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between the animations of each card
      },
    },
  };

  // Variants for each card, animating from bottom to top
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the viewport
    visible: {
      opacity: 1,
      y: 0, // Move to natural position
      transition: { duration: 0.8, ease: "easeInOut" }, // Smooth transition
    },
  };

  return (
    <section
      className="max-w-[1300px] mx-auto py-16 px-4 lg:px-0"
      ref={sectionRef}
    >
      <div className="text-start mb-8">
        <h2 className="leading-[30px] sm:leading-[50px] text-[20px] sm:text-[48px] font-bold text-primary">
          Who Is This <br className="hidden sm:block" />
          <span className="text-secondary">For?</span>
        </h2>

        {/* <p className="mt-4 text-gray-600">
          Feeling stuck in your current career? Whether you’re new to coding{" "}
          <br /> or just need a real-world project push, this bootcamp is for
          you. With <br /> personalized support and a community of learners,
          you’ll reach your <br /> goals faster than you think.
        </p> */}
        {/* <p className="mt-4 text-lg sm:text-xl font-semibold text-primary">
          Only for those who are serious about changing their career into tech
          and coding. You also should be:
        </p> */}
        <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-4">
          <li className="text-base sm:text-lg leading-relaxed">
            A complete beginner at coding. 
          </li>
          <li className="text-base sm:text-lg leading-relaxed">
            willing to attend our live classes (minimum of 15 hours a week). This means you&apos;re serious.
          </li>
          <li className="text-base sm:text-lg leading-relaxed">
            want to get a software developer job / build your own apps from scratch
          </li>
        </ul>
      </div>
      <h2 className="leading-[30px] sm:leading-[50px] text-[20px] sm:text-[48px] font-bold text-primary">
        What Can You Do <br className="hidden sm:block" />
        <span className="text-secondary">After?</span>
      </h2>

      {/* Animated Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
      >
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg w-full h-[252px] sm:w-auto sm:h-auto"
          variants={cardVariants}
        >
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
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
            Land a Software Developer Job
          </h3>
          {/* <p className="text-[16px] sm:text-gray-600">
            Go from complete beginner to job-ready developer. Launch your career
            in the fast-growing tech industry
          </p> */}
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg w-full h-[252px] sm:w-auto sm:h-auto"
          variants={cardVariants}
        >
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
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
            Build your own apps from scratch.
          </h3>
          {/* <p className="text-[16px] sm:text-gray-600">
            Remember that app idea you had? Well, you&lsquo;ll have the skills
            to build it from scratch yourself saving you RM40000- RM150,000 in
            developer fees. This is the beginning of yout startup founder
            journey.
          </p> */}
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg w-full h-[252px] sm:w-auto sm:h-auto"
          variants={cardVariants}
        >
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
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
            Be a Freelancer - Build Apps For Others
          </h3>
          {/* <p className="text-[16px] sm:text-gray-600">
            Enjoy the freedom & flexibility as a freelance developer. Work
            remotely from anywhere can get paid in USD
          </p> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
