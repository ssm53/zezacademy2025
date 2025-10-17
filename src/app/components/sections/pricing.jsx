

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Pricing = () => {
//   const [moneyBackGuarantee, setMoneyBackGuarantee] = useState(false);

//   const { price, description } = moneyBackGuarantee
//     ? { price: "RM 12,000", description: "Includes Job Guarantee (money-back)" }
//     : { price: "RM 7,000", description: "Standard tuition" };

//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             Tuition Fees
//           </h2>

//           {/* Money-back Guarantee Toggle */}
//           <div className="mt-5">
//             <label className="flex items-start gap-3">
//               <input
//                 type="checkbox"
//                 checked={moneyBackGuarantee}
//                 onChange={(e) => setMoneyBackGuarantee(e.target.checked)}
//                 className="mt-1 h-5 w-5 rounded border-gray-300"
//               />
//               <span className="text-sm sm:text-base text-gray-800">
//                 <span className="font-semibold">Add Job Guarantee</span> 
//               </span>
//             </label>
//           </div>
//         </div>

//         {/* Right Section (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           {/* <h3 className="text-[22px] font-bold text-primary mb-4">Pricing</h3> */}

//           <div className="bg-primary rounded-lg p-6 sm:p-8 shadow-sm">
//             <div className="flex items-baseline gap-3">
//               <h4 className="text-4xl sm:text-5xl font-extrabold text-white">{price}</h4>
//             </div>
//             {/* <p className="mt-2 text-sm sm:text-base text-white/90">{description}</p> */}

//             {/* Apply Now Button (unchanged) */}
//             <a
//               href="/apply-now"
//               target="_blank"
//               className="inline-block mt-6 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3 w-full sm:w-auto"
//             >
//               Apply Now
//             </a>

            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [jobGuarantee, setJobGuarantee] = useState(false);

  const { price, badge, blurb } = jobGuarantee
    ? {
        price: "A$ 4,000",
        badge: "Job Guarantee",
        blurb:
          "If you don’t land a software developer role, we refund 50% of tuition.",
      }
    : {
        price: "A$ 3,000",
        badge: "Standard Tuition",
        blurb:
          "Same curriculum, same support—ideal if you don’t need the Job Guarantee.",
      };

  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
            Tuition Fees
          </h2>

          {/* <p className="mt-3 text-sm sm:text-base text-[#0F243DCC]">
            Choose the option that fits your goals. Both include live support,
            projects, and career prep.
          </p> */}

          {/* Job Guarantee Toggle */}
          <div className="mt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={jobGuarantee}
                onChange={(e) => setJobGuarantee(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300"
              />
              <span className="text-sm sm:text-base text-gray-800">
                <span className="font-semibold">Add Job Guarantee</span>{" "}
                <span className="text-gray-600">
                  — 50% refund if you don’t land a software developer role.
                </span>
              </span>
            </label>
          </div>
        </div>

        {/* Right (Pricing Card) */}
        <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
          <div className="bg-primary rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-4xl sm:text-5xl font-extrabold text-white">
                {price}
              </h4>
              <span className="hidden sm:inline-block text-xs font-semibold bg-white/15 text-white px-3 py-1 rounded-md">
                {badge}
              </span>
            </div>

            <p className="mt-3 text-sm sm:text-base text-white/90">{blurb}</p>

            {/* Features (kept concise for consistency) */}
            <ul className="mt-4 space-y-2 text-white/90 text-sm">
              <li>• Full stack curriculum (projects & portfolio)</li>
              <li>• Live support + interview prep</li>
              <li>• Full-time or evening schedule options</li>
            </ul>

            {/* CTA (unchanged) */}
            <a
              href="/apply-now"
              target="_blank"
              className="inline-block mt-6 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3 w-full sm:w-auto"
            >
              Apply Now
            </a>

            {/* Fine print */}
            {/* <p className="mt-3 text-[11px] text-white/70">
              Job Guarantee terms: complete the program and required job-search
              tasks. Full details in FAQ.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

