import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
            How Much does It costs?
          </h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li className="text-base sm:text-lg leading-relaxed">
              • RM 1000/month for 7 months
            </li>
            <li className="text-base sm:text-lg leading-relaxed">
              • RM 5000 (one-time payment)
            </li>
          </ul>
        </div>

        {/* Right Section (Pricing Card) */}
        <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
          <h3 className="text-[22px] font-bold text-primary mb-2">
            Friends & Family Discount
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            If you are seeing this, you are probably either my family or friend,
            or a friend of a friend.
          </p>
          <div className="bg-primary shadow-sm rounded-lg p-6 relative">
            {/* Discount Badge */}
            <div className="absolute top-0 right-0 bg-[#F5BB42] text-darkBlue text-xs font-bold rounded-full px-4 py-1 -mt-4 -mr-4">
              100% OFF
            </div>
            {/* Pricing Box */}
            {/* <h4 className="text-4xl font-extrabold text-white">
              $500USD /
              <span className="text-3xl text-gray-400 line-through ml-2">
                $5,000USD
              </span>
            </h4> */}
            <h4 className="text-4xl font-extrabold text-white">
              RM 0
              <span className="text-3xl text-gray-400 line-through ml-2">
                RM 5000
              </span>
            </h4>
            <p className="mt-2 text-sm text-white">
              • Only for the first 10 family or friends.
            </p>

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
