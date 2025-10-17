

// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const OurCohorts = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { margin: "-20% 0px" });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="our-classes"
//       ref={sectionRef}
//       className="bg-[#F7F8F9] mx-auto py-16 px-4 lg:px-0"
//     >
//       <div className="max-w-[1300px] mx-auto">
//         {/* Left Section - Date Card (all content here) */}
//         <motion.div
//           className="flex flex-col gap-4 bg-white rounded-[19px] p-6 text-left w-full lg:max-w-xl shadow-lg mx-auto"
//           variants={cardVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#0D2138]/5 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#0D2138]">
//             📅 Our Next Cohort
//           </span>

//           <h3 className="text-lg sm:text-2xl font-bold text-[#0D2138] leading-snug">
//             1 December 2025 – 31 March 2026
//           </h3>

//           <div className="h-px w-full bg-gray-200" />

//           <div className="space-y-3">
//             <div>
//               <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
//                 Full-time
//               </p>
//               <p className="text-sm sm:text-base text-gray-700">
//                 Mon–Fri · 10:00am – 5:00pm
//               </p>
//             </div>

//             <div>
//               <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
//                 Part-time
//               </p>
//               <p className="text-sm sm:text-base text-gray-700">
//                 Mon–Fri · 7:00pm – 10:00pm
//               </p>
//             </div>
//           </div>

//           <div className="pt-2">
//             <span className="inline-block rounded-md bg-red-50 px-3 py-1 text-[11px] sm:text-xs font-bold text-red-600 tracking-wide">
//               ONLY 4 SPOTS LEFT
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurCohorts;


// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const OurCohorts = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { margin: "-20% 0px" });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="our-classes"
//       ref={sectionRef}
//       className="bg-[#F7F8F9] mx-auto py-16 px-4 lg:px-0"
//     >
//       <div className="max-w-[1300px] mx-auto">
//         {/* Date & AU Schedules Card */}
//         <motion.div
//           className="flex flex-col gap-5 bg-white rounded-[19px] p-6 text-left w-full lg:max-w-3xl shadow-lg mx-auto"
//           variants={cardVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#0D2138]/5 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#0D2138]">
//             📅 Our Next Cohort
//           </span>

//           <h3 className="text-lg sm:text-2xl font-bold text-[#0D2138] leading-snug">
//             1 December 2025 – 31 March 2026
//           </h3>

//           <div className="h-px w-full bg-gray-200" />

//           {/* AU-wide schedule */}
//           <div className="space-y-3">
//             <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
//               Australia-wide Daily Schedule
//             </p>
//             <p className="text-sm sm:text-base text-gray-700">
//               Classes run <span className="font-medium">10:00am – 7:00pm</span>{" "}
//               <span className="text-gray-600">(local time, incl. breaks)</span>.
//             </p>

//             {/* Region badges */}
//             <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//               <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
//                 <p className="text-[12px] text-gray-500">Sydney · Melbourne · Canberra · Hobart</p>
//                 <p className="text-sm text-[#0D2138] font-medium">AEDT</p>
//               </div>
//               <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
//                 <p className="text-[12px] text-gray-500">Brisbane</p>
//                 <p className="text-sm text-[#0D2138] font-medium">AEST</p>
//               </div>
//               <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
//                 <p className="text-[12px] text-gray-500">Adelaide</p>
//                 <p className="text-sm text-[#0D2138] font-medium">ACDT</p>
//               </div>
//               <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
//                 <p className="text-[12px] text-gray-500">Darwin</p>
//                 <p className="text-sm text-[#0D2138] font-medium">ACST</p>
//               </div>
//               <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
//                 <p className="text-[12px] text-gray-500">Perth</p>
//                 <p className="text-sm text-[#0D2138] font-medium">AWST</p>
//               </div>
//             </div>

//             <p className="text-[11px] sm:text-xs text-gray-500">
//               Times are shown in each region’s <span className="italic">local time</span> (daylight savings applies where relevant).
//             </p>
//           </div>

//           <div className="pt-2">
//             <span className="inline-block rounded-md bg-red-50 px-3 py-1 text-[11px] sm:text-xs font-bold text-red-600 tracking-wide">
//               ONLY 4 SPOTS LEFT
//             </span>
//           </div>
//         </motion.div>
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
        {/* Date & AU Schedules Card */}
        <motion.div
          className="flex flex-col gap-5 bg-white rounded-[19px] p-6 text-left w-full lg:max-w-3xl shadow-lg mx-auto"
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

          {/* AU-wide schedule */}
          <div className="space-y-4">
            <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
              Australia-wide Daily Schedule (Local Time)
            </p>

            {/* FT / PT cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg ring-1 ring-gray-200 p-4">
                <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
                  Full-time
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Mon–Fri · <span className="font-medium">10:00am – 5:00pm</span>
                </p>
                {/* <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                  ~7 hours instruction within the day (incl. breaks)
                </p> */}
              </div>

              <div className="rounded-lg ring-1 ring-gray-200 p-4">
                <p className="text-[12px] sm:text-sm font-semibold text-[#0D2138] uppercase tracking-wide">
                  Part-time
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Mon–Fri · <span className="font-medium">7:00pm – 10:00pm</span>
                </p>
                {/* <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                  Evening classes for working professionals
                </p> */}
              </div>
            </div>

            {/* Region badges */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
                <p className="text-[12px] text-gray-500">
                  Sydney · Melbourne · Canberra · Hobart
                </p>
                <p className="text-sm text-[#0D2138] font-medium">AEDT</p>
              </div>
              <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
                <p className="text-[12px] text-gray-500">Brisbane</p>
                <p className="text-sm text-[#0D2138] font-medium">AEST</p>
              </div>
              <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
                <p className="text-[12px] text-gray-500">Adelaide</p>
                <p className="text-sm text-[#0D2138] font-medium">ACDT</p>
              </div>
              <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
                <p className="text-[12px] text-gray-500">Darwin</p>
                <p className="text-sm text-[#0D2138] font-medium">ACST</p>
              </div>
              <div className="rounded-md ring-1 ring-gray-200 px-3 py-2">
                <p className="text-[12px] text-gray-500">Perth</p>
                <p className="text-sm text-[#0D2138] font-medium">AWST</p>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-500">
              Times shown are **local** to each region (daylight savings applies where relevant).
            </p>
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

