


// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Pricing = () => {
//   const [jobGuarantee, setJobGuarantee] = useState(false);

//   const { price, badge, blurb } = jobGuarantee
//     ? {
//         price: "A$ 4,000",
//         badge: "Job Guarantee",
//         blurb:
//           "If you don't land a software developer role, we refund 50% of tuition.",
//       }
//     : {
//         price: "A$ 3,000",
//         badge: "Standard Tuition",
//         blurb:
//           "Same curriculum, same support—ideal if you don't need the Job Guarantee.",
//       };

//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             Tuition Fees
//           </h2>

//           {/* <p className="mt-3 text-sm sm:text-base text-[#0F243DCC]">
//             Choose the option that fits your goals. Both include live support,
//             projects, and career prep.
//           </p> */}

//           {/* Job Guarantee Toggle */}
//           <div className="mt-6">
//             <label className="flex items-start gap-3 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={jobGuarantee}
//                 onChange={(e) => setJobGuarantee(e.target.checked)}
//                 className="mt-1 h-5 w-5 rounded border-gray-300"
//               />
//               <span className="text-sm sm:text-base text-gray-800">
//                 <span className="font-semibold">Add Job Guarantee</span>{" "}
//                 <span className="text-gray-600">
//                   — 50% refund if you don&apos;t land a software developer role.
//                 </span>
//               </span>
//             </label>
//           </div>
//         </div>

//         {/* Right (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           <div className="bg-primary rounded-lg p-6 sm:p-8 shadow-sm">
//             <div className="flex items-center justify-between">
//               <h4 className="text-4xl sm:text-5xl font-extrabold text-white">
//                 {price}
//               </h4>
//               <span className="hidden sm:inline-block text-xs font-semibold bg-white/15 text-white px-3 py-1 rounded-md">
//                 {badge}
//               </span>
//             </div>

//             <p className="mt-3 text-sm sm:text-base text-white/90">{blurb}</p>

//             {/* Features (kept concise for consistency) */}
//             <ul className="mt-4 space-y-2 text-white/90 text-sm">
//               <li>• Full stack curriculum (projects & portfolio)</li>
//               <li>• Live support + interview prep</li>
//               <li>• Full-time or evening schedule options</li>
//             </ul>

//             {/* CTA (unchanged) */}
//             <a
//               href="/apply-now"
//               target="_blank"
//               className="inline-block mt-6 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3 w-full sm:w-auto"
//             >
//               Apply Now
//             </a>

//             {/* Fine print */}
//             {/* <p className="mt-3 text-[11px] text-white/70">
//               Job Guarantee terms: complete the program and required job-search
//               tasks. Full details in FAQ.
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [jobGuarantee, setJobGuarantee] = useState(false);

  // Base (original) and sale prices in AUD
  const pricing = jobGuarantee
    ? { original: 7500, sale: 5000, badge: "Job Guarantee" }
    : { original: 5500, sale: 3500, badge: "Standard Tuition" };

  const fmt = useMemo(
    () => new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }),
    []
  );

  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      {/* Sale banner */}
      <div className="mb-6">
        <div className="w-full rounded-[14px] bg-gradient-to-r from-[#FF7A59] to-[#FF4D4D] text-white px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md">
          <p className="text-lg sm:text-xl font-extrabold tracking-wide">
            AUSSIE SUMMER SALE
          </p>
          <p className="text-sm sm:text-base mt-1 sm:mt-0 opacity-95">
            Limited time only 
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: copy + toggle */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
            Tuition Fees
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#0F243DCC]">
            Choose the option that fits your goals. Both are almost identical and includes live support and full access to all material. If you want a job, there is a guarantee together with career support.
          </p>

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
                  — 50% refund if you don&apos;t land a software developer role.
                </span>
              </span>
            </label>
          </div>
        </div>

        {/* Right: pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md"
        >
          <div className="bg-primary rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                {/* Original price (strikethrough) */}
                <div className="text-white/80 text-sm line-through">
                  {fmt.format(pricing.original)}
                </div>
                {/* Sale price */}
                <div className="mt-1 text-4xl sm:text-5xl font-extrabold text-white">
                  {fmt.format(pricing.sale)}
                </div>
              </div>

              <span className="inline-flex text-xs font-semibold bg-white/15 text-white px-3 py-1 rounded-md">
                {pricing.badge}
              </span>
            </div>

            {/* Savings chip */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-1 text-[12px] text-white">
              Save {fmt.format(pricing.original - pricing.sale)} this cohort
            </div>

            {/* Bullets */}
            <ul className="mt-5 space-y-2 text-white/90 text-sm">
              <li>• Full-stack curriculum (projects & portfolio)</li>
              <li>• Live support</li>
              <li>• Full-time or evening schedule options</li>
            </ul>

            {/* CTA */}
            <a
              href="/apply-now"
              target="_blank"
              className="inline-block mt-6 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3 w-full sm:w-auto"
            >
              Apply Now
            </a>

            {/* Fine print */}
            {/* <p className="mt-3 text-[11px] text-white/70">
              Job Guarantee terms apply: complete the program and required job-search tasks. Full details in FAQ.
            </p> */}
          </div>
        </motion.div>
      </div>

      {/* Side-by-side mini cards (optional, mobile-friendly) */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-[12px] border border-[#E6E8EB] bg-white p-4">
          <div className="text-xs font-semibold text-[#0D2138]">Standard Tuition</div>
          <div className="mt-1 text-sm text-gray-500 line-through">{fmt.format(5500)}</div>
          <div className="text-2xl font-bold text-primary">{fmt.format(3500)}</div>
        </div>
        <div className="rounded-[12px] border border-[#E6E8EB] bg-white p-4">
          <div className="text-xs font-semibold text-[#0D2138]">Job Guarantee</div>
          <div className="mt-1 text-sm text-gray-500 line-through">{fmt.format(7500)}</div>
          <div className="text-2xl font-bold text-primary">{fmt.format(5000)}</div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
