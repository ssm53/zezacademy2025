"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurCohorts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  // Variants for container to control the stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time gap between each card's animation
      },
    },
  };

  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" }, // Animation duration and easing
    },
  };

  return (
    <section
      id="our-cohorts"
      className="bg-[#F7F8F9] max-w-1300px mx-auto py-16 px-4 lg:px-0"
      ref={sectionRef}
    >
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
      <motion.div
        className="mt-12 flex justify-center flex-row gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animation triggered by the in-view state
      >
        {/* Date Card 1 */}
        <motion.div
          className="flex justify-center flex-col bg-white rounded-[19px] p-4 text-center h-[95px] sm:h-[158px] sm:w-[213px] w-[120px] text-sm sm:text-base"
          variants={cardVariants}
        >
          <h3 className="sm:py-4 px-0 text-sm sm:text-xl font-semibold text-[#0D2138] leading-tight">
            15th Oct, <br /> 2024
          </h3>
          <p className="text-gray-600 mt-2 text-xs sm:text-base font-medium">
            5 Spots left
          </p>
        </motion.div>

        {/* Date Card 2 */}
        <motion.div
          className="flex justify-center flex-col bg-white rounded-[19px] p-4 text-center h-[95px] sm:h-[158px] sm:w-[213px] w-[120px] text-sm sm:text-base"
          variants={cardVariants}
        >
          <h3 className="sm:py-4 px-0 text-sm sm:text-xl font-semibold text-[#0D2138] leading-tight">
            15th Feb, <br /> 2024
          </h3>
          <p className="text-gray-600 mt-2 text-xs sm:text-base font-medium">
            6 Spots left
          </p>
        </motion.div>

        {/* Date Card 3 */}
        <motion.div
          className="flex justify-center flex-col bg-white rounded-[19px] p-4 text-center h-[95px] sm:h-[158px] sm:w-[213px] w-[120px] text-sm sm:text-base"
          variants={cardVariants}
        >
          <h3 className="sm:py-4 px-0 text-sm sm:text-xl font-semibold text-[#0D2138] leading-tight">
            15th Jun, <br /> 2024
          </h3>
          <p className="text-gray-600 mt-2 text-xs sm:text-base font-medium">
            6 Spots left
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurCohorts;
