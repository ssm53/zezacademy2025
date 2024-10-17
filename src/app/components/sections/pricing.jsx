// import React from "react";

// const Pricing = () => {
//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             How Much does it cost?
//           </h2>
//           <ul className="mt-4 space-y-4 text-gray-700">
//             <li className="text-base sm:text-lg leading-relaxed">
//               • RM 1000/month for 7 months
//             </li>
//             <li className="text-base sm:text-lg leading-relaxed">
//               • RM 5000 (one-time payment)
//             </li>
//           </ul>
//         </div>

//         {/* Right Section (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           <h3 className="text-[22px] font-bold text-primary mb-2">
//             Friends & Family Discount
//           </h3>
//           <p className="text-sm text-gray-600 mb-4">
//             If you are seeing this, you are probably either my family or friend,
//             or a friend of a friend.
//           </p>
//           <div className="bg-primary shadow-sm rounded-lg p-6 relative">
//             {/* Discount Badge */}
//             <div className="absolute top-0 right-0 bg-[#F5BB42] text-darkBlue text-xs font-bold rounded-full px-4 py-1 -mt-4 -mr-4">
//               100% OFF
//             </div>
//             {/* Pricing Box */}
//             {/* <h4 className="text-4xl font-extrabold text-white">
//               $500USD /
//               <span className="text-3xl text-gray-400 line-through ml-2">
//                 $5,000USD
//               </span>
//             </h4> */}
//             <h4 className="text-4xl font-extrabold text-white">
//               RM 0
//               <span className="text-3xl text-gray-400 line-through ml-2">
//                 RM 5000
//               </span>
//             </h4>
//             <p className="mt-2 text-sm text-white">
//               • Only for the first 10 family or friends.
//             </p>

//             {/* Apply Now Button */}
//             <a
//               href="https://docs.google.com/forms/d/e/1FAIpQLSdZbUvC0vVXuVLHg5UxAQ11wJSJeVoxtWP_EoIsfZRRUNMo5w/viewform?usp=sf_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
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

const Pricing = () => {
  // State for selected payment option
  const [paymentPlan, setPaymentPlan] = useState("one-time");

  // Function to handle payment plan change
  const handlePaymentChange = (e) => {
    setPaymentPlan(e.target.value);
  };

  // Pricing logic based on selected plan
  const getPriceDetails = () => {
    switch (paymentPlan) {
      case "one-time":
        return {
          price: "RM 7000",
          description: "One-time payment",
        };
      case "6-months":
        return {
          price: "RM 1500/month for 6 months",
          description: "6-month payment plan",
        };
      case "12-months":
        return {
          price: "RM 1000/month for 12 months",
          description: "12-month payment plan",
        };
      default:
        return {
          price: "RM 7000",
          description: "One-time payment",
        };
    }
  };

  const { price, description } = getPriceDetails();

  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
            Choose how you want to pay
          </h2>
          {/* Payment Plan Options */}
          <div className="mt-4">
            <label className="block text-gray-700 mb-2">
              Select a payment plan:
            </label>
            <select
              value={paymentPlan}
              onChange={handlePaymentChange}
              className="w-full p-2 bg-white border border-gray-300 rounded-lg"
            >
              <option value="one-time">One-time payment</option>
              <option value="6-months">Over 6 months</option>
              <option value="12-months">Over 12 months</option>
            </select>
          </div>
        </div>

        {/* Right Section (Pricing Card) */}
        <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
          <h3 className="text-[22px] font-bold text-primary mb-2">Pricing</h3>
          <div className="bg-primary shadow-sm rounded-lg p-6 relative">
            {/* Pricing Box */}
            <h4 className="text-4xl font-extrabold text-white">{price}</h4>
            <p className="mt-2 text-sm text-white">{description}</p>

            {/* Apply Now Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZbUvC0vVXuVLHg5UxAQ11wJSJeVoxtWP_EoIsfZRRUNMo5w/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
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
