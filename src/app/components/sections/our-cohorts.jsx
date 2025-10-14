

// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const OurCohorts = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef);

//   // Variants for animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section
//       id="our-classes"
//       className="bg-[#F7F8F9] max-w-1300px mx-auto py-16 px-4 lg:px-0"
//       ref={sectionRef}
//     >
//       <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-8">
//         {/* Left Section - Date Card */}
//         <motion.div
//           className="flex flex-col justify-center items-center bg-white rounded-[19px] p-6 text-center h-[158px] sm:w-[213px] w-full lg:w-[250px] shadow-lg mx-auto"
//           variants={cardVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <span className="text-lg sm:text-xl font-bold text-primary mb-2">
//             Our Next Cohort
//           </span>
//           <h3 className="text-sm sm:text-xl font-semibold text-[#0D2138] leading-tight">
//             4th November 2024
//           </h3>
//           <p className="text-red-600 mt-2 text-xs sm:text-base font-bold uppercase">
//             ONLY 4 SPOTS LEFT
//           </p>
//         </motion.div>

//         {/* Right Section - Class Hours */}
//         <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary">
//             Class Hours
//           </h2>
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-[#0D2138] mb-4">
//               Fixed Schedule
//             </h4>
//             <p className="text-gray-600 text-base sm:text-lg">
//               Classes are held from Monday to Friday, <br />
//               10am - 5pm AND 7pm - 10pm.
//             </p>
//             <h4 className="text-xl font-semibold text-[#0D2138] mt-6 mb-4">
//               Flexible Schedule
//             </h4>
//             <p className="text-gray-600 text-base sm:text-lg">
//               The flexible schedule allows you to choose your own hours.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurCohorts;

"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurCohorts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-20% 0px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="our-classes"
      ref={sectionRef}
      className="bg-[#F7F8F9] mx-auto py-16 px-4 lg:px-0"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Left Section - Date Card (all content here) */}
        <motion.div
          className="flex flex-col gap-4 bg-white rounded-[19px] p-6 text-left w-full lg:max-w-xl shadow-lg mx-auto"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#0D2138]/5 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#0D2138]">
            📅 Our Next Cohort
          </span>

          <h3 className="text-lg sm:text-2xl font-bold text-[#0D2138] leading-snug">
            1 December 2025 – 31 March 2026
          </h3>

          <div className="h-px w-full bg-gray-200" />

          <div className="space-y-3">
            <div>
              <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
                Full-time
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Mon–Fri · 10:00am – 5:00pm
              </p>
            </div>

            <div>
              <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
                Part-time
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Mon–Fri · 7:00pm – 10:00pm
              </p>
            </div>
          </div>

          <div className="pt-2">
            <span className="inline-block rounded-md bg-red-50 px-3 py-1 text-[11px] sm:text-xs font-bold text-red-600 tracking-wide">
              ONLY 4 SPOTS LEFT
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCohorts;

