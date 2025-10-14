"use client";
import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const SixHundred = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  // IntersectionObserver to check if component is in view
  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  // Animation variants for the left side
  const leftSectionVariants = {
    hidden: { opacity: 0, x: -50 }, // Start hidden, slightly off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="free-materials"
      className="bg-gray-50 py-16 px-4 lg:px-0"
      ref={ref}
    >
      <div className="lg:flex lg:justify-between lg:items-center max-w-[1300px] mx-auto">
        {/* Left Section */}
        
        <motion.div
          className="lg:w-1/2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftSectionVariants}
        >
          <h3 className="text-sm font-semibold text-[#0F243DCC] uppercase mb-2">
            600+ HOURS OF MATERIAL
          </h3>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Syllabus</span>
          </h2>
         
          <p className="text-[#0F243DCC] mb-8">
            This isn&lsquo;t your typical YouTube or Udemy experience—here,
            you&lsquo;ll master coding the right way, with structure,
            real-world applications and most importantly, live support when you are stuck.
          </p>

          {/* <button
            href="#enrollement-section"
            className="bg-primary text-white py-3 px-6 rounded-[5px] hover:bg-secondary transition w-full sm:w-auto"
          >
            Get Free Access
          </button> */}
        </motion.div>

        {/* Right Section */}
        <div className="lg:w-[39%] mt-10 lg:mt-0 flex flex-wrap justify-center lg:justify-start gap-[8px] lg:gap-[12px] bg-[#F3F5F7] p-[14px] md-p-[22px] lg:p-[22px] rounded-[15px] sm:flex-wrap xs:flex-wrap">
          <div className="bg-white rounded-[20px] md-rounded-[32px] py-[1.5rem] md:py-[3rem] px-0 text-center w-[31%] sm:w-1/2 md:w-[43%] flex-shrink-0">
            <h3 className="text-[26px] md:text-4xl font-bold text-secondary">
              {isInView ? <CountUp start={0} end={600} duration={3} /> : 0}+
            </h3>
            <p className="text-[#0F243DCC] mt-2 text-[12px] sm:text-base">
              Hours of material
            </p>
          </div>

          <div className="bg-white rounded-[20px] md-rounded-[32px] py-[1.5rem] md:py-[3rem] px-0 text-center w-[31%] sm:w-1/2 md:w-[43%] flex-shrink-0 p-4">
            <h3 className="text-[26px] md:text-4xl font-bold text-secondary">
              {isInView ? <CountUp start={0} end={7} duration={3} /> : 0}
            </h3>
            <p className="text-[#0F243DCC] mt-2 text-[12px] sm:text-base">
              Projects
            </p>
          </div>

          <div className="bg-white rounded-[20px] md-rounded-[32px] py-[1.5rem] md:py-[3rem] px-0 text-center w-[31%] sm:w-1/2 md:w-[43%] flex-shrink-0 p-4">
            <h3 className="text-[26px] md:text-4xl font-bold text-secondary">
              {isInView ? <CountUp start={0} end={20} duration={3} /> : 0}
            </h3>
            <p className="text-[#0F243DCC] mt-2 text-[12px] sm:text-base">
              Challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixHundred;
