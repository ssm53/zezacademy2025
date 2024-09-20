import React from "react";

const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How Much Does It Costs?
          </h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li className="text-lg">
              • Our bootcamp is only $500, a 90% discount <br /> from the
              regular price of $5,000.
            </li>
            <li className="text-lg">
              • And, if you don’t land a job after completing our <br />{" "}
              program, you get a full refund. 100% risk-free.
            </li>
          </ul>
        </div>

        {/* Right Section (Pricing Card) */}
        <div className="bg-[#F7F8F9] rounded-[15px] p-8">
          <h3 className="text-xl font-bold text-primary  mb-2">Pricing</h3>
          <p className="text-sm text-gray-600 mb-4">
            Note: this offer is limited, make sure to get it asap.
          </p>
          <div className="bg-primary shadow-lg rounded-lg p-6">
            {/* Pricing Box */}
            <div className="relative bg-darkBlue text-white p-6 rounded-lg">
              {/* Discount Badge */}
              <div className="absolute top-0 right-0 bg-[#F5BB42] text-darkBlue text-xs font-bold rounded-full px-4 py-1 -mt-4 -mr-4">
                90% OFF
              </div>
              {/* Price Details */}
              <h4 className="text-4xl font-extrabold">
                $500USD/ &nbsp;
                <span className="text-3xl text-gray-400 line-through">
                  $5,000USD
                </span>
              </h4>
              {/* <span className="text-gray-400 line-through">$5,000USD</span> */}
              <p className="mt-2 text-sm">
                • Our bootcamp is only $500, a 90% discount from the regular
                price of $5,000.
              </p>

              {/* Apply Now Button */}
              <a
                href="#"
                className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
