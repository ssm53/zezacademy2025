

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Pricing = () => {
//   // const [showPopup, setShowPopup] = useState(false);
//   const [paymentPlan, setPaymentPlan] = useState("one-time");
//   const [moneyBackGuarantee, setMoneyBackGuarantee] = useState(false); // New state for money-back guarantee

//   // const togglePopup = () => {
//   //   setShowPopup(!showPopup);
//   // };

//   const handlePaymentChange = (e) => {
//     setPaymentPlan(e.target.value);
//   };

//   const handleGuaranteeChange = (e) => {
//     setMoneyBackGuarantee(e.target.checked);
//   };

//   const getPriceDetails = () => {
//     if (!moneyBackGuarantee) {
//       // Prices with money-back guarantee
//       switch (paymentPlan) {
//         case "one-time":
//           return {
//             price: "RM 7000",
//             description: "One-time payment with money-back guarantee",
//           };
//         case "6-months":
//           return {
//             price: "RM 1500/month for 6 months",
//             description: "9-month payment plan with money-back guarantee",
//           };
//         case "12-months":
//           return {
//             price: "RM 1000/month for 12 months",
//             description: "12-month payment plan with money-back guarantee",
//           };
//         default:
//           return {
//             price: "RM 7000",
//             description: "One-time payment with money-back guarantee",
//           };
//       }
//     } else {
//       // Original prices without money-back guarantee
//       switch (paymentPlan) {
//         case "one-time":
//           return {
//             price: "RM 4000",
//             description: "One-time payment",
//           };
//         case "6-months":
//           return {
//             price: "RM 1000/month for 6 months",
//             description: "6-month payment plan",
//           };
//         case "12-months":
//           return {
//             price: "RM 750/month for 12 months",
//             description: "12-month payment plan",
//           };
//         default:
//           return {
//             price: "RM 4000",
//             description: "One-time payment",
//           };
//       }
//     }
//   };

//   const { price, description } = getPriceDetails();

//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             Choose how you want to pay
//           </h2>
//           {/* Payment Plan Options */}
//           <div className="mt-4">
//             <label className="block text-gray-700 mb-2">
//               Select a payment plan:
//             </label>
//             <select
//               value={paymentPlan}
//               onChange={handlePaymentChange}
//               className="w-full p-2 bg-gray-700 text-white border border-gray-300 rounded-lg"
//             >
//               <option value="one-time">One-time payment</option>
//               <option value="6-months">Over 6 months</option>
//               {/* <option value="12-months">Over 12 months</option> */}
//             </select>
//           </div>

//           {/* Money-back Guarantee Option */}
//           <div className="mt-4 flex items-center">
//             <label className="text-blue-700 mr-2 font-bold ">
//               Dont need a job? You want to go down the startup founder/freelance
//               route?
//             </label>

//             <input
//               type="checkbox"
//               checked={moneyBackGuarantee}
//               onChange={handleGuaranteeChange}
//               className="w-4 h-4"
//             />
//           </div>
//         </div>

//         {/* Right Section (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           <h3 className="text-[22px] font-bold text-primary mb-2">Pricing</h3>
//           <h3 className="text-[22px] font-bold text-red-700 mb-2">
//             These pricings are only in 2024 for you early birds. It will
//             increase in 2025
//           </h3>
//           <div className="bg-primary shadow-sm rounded-lg p-6 relative">
//             {/* Pricing Box */}
//             <h4 className="text-4xl font-extrabold text-white">{price}</h4>
//             <p className="mt-2 text-sm text-white">{description}</p>

//             {/* Apply Now Button */}
//             <a
//               href="/apply-now"
//               target="_blank"
//               className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* <AnimatePresence>
//         {showPopup && <Popup togglePopup={togglePopup} />}
//       </AnimatePresence> */}
//     </section>
//   );
// };

// export default Pricing;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [moneyBackGuarantee, setMoneyBackGuarantee] = useState(false);

  const { price, description } = moneyBackGuarantee
    ? { price: "RM 12,000", description: "Includes Job Guarantee (money-back)" }
    : { price: "RM 7,000", description: "Standard tuition" };

  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
            Tuition Fees
          </h2>

          {/* Money-back Guarantee Toggle */}
          <div className="mt-5">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={moneyBackGuarantee}
                onChange={(e) => setMoneyBackGuarantee(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300"
              />
              <span className="text-sm sm:text-base text-gray-800">
                <span className="font-semibold">Add Job Guarantee</span> 
              </span>
            </label>
          </div>
        </div>

        {/* Right Section (Pricing Card) */}
        <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
          {/* <h3 className="text-[22px] font-bold text-primary mb-4">Pricing</h3> */}

          <div className="bg-primary rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="flex items-baseline gap-3">
              <h4 className="text-4xl sm:text-5xl font-extrabold text-white">{price}</h4>
            </div>
            {/* <p className="mt-2 text-sm sm:text-base text-white/90">{description}</p> */}

            {/* Apply Now Button (unchanged) */}
            <a
              href="/apply-now"
              target="_blank"
              className="inline-block mt-6 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3 w-full sm:w-auto"
            >
              Apply Now
            </a>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
