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
        <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-4">
          <li className="text-base sm:text-lg leading-relaxed">
            You are serious about learning to code and want to join a program
            that guarantees results
          </li>
          <li className="text-base sm:text-lg leading-relaxed">
            You are 40 years and below.
          </li>
          <li className="text-base sm:text-lg leading-relaxed">
            You have never coded before or you are a beginner
          </li>
        </ul>
      </div>
      <h2 className="leading-[30px] sm:leading-[50px] text-[20px] sm:text-[48px] font-bold text-primary">
        What Will You <br className="hidden sm:block" />
        <span className="text-secondary">Achieve?</span>
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
            You will get a developer job
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            You will transform from a complete beginner to a job-ready level
            developer
          </p>
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
            You will be able to build apps yourself and pick up freelancing as a
            side-hustle
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            Turn your ideas into reality. Remember that app idea you had? Well,
            you&lsquo;ll have the skills to build it from scratch. This saves
            you RM40,000 - RM60,000 as you dont need to pay a developer to do
            it!
          </p>
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
            You will make a successful career change <br /> to an in-demand
            industry
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            Tech is booming. Unlike the USA, there are very few developers in
            Malaysia. So, there&lsquo;s huge room for growth and opportunities.
            Act now!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
