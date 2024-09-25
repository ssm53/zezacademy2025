import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Importing the hamburger icon

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Icon - Trigger for Drawer */}
      <button
        type="button"
        onClick={toggleDrawer}
        className="fixed bottom-4 right-4 z-50 bg-secondary text-white p-3 rounded-full shadow-lg lg:hidden"
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {/* The Drawer itself */}
      <div
        className={`fixed bottom-0 left-0 w-full  transform transition-transform duration-300 ease-in-out z-40 rounded-2xl mx-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "705px", borderRadius: "30px 30px 0 0" }} // Fixed height of 705px and border radius
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-3xl font-bold z-50"
          onClick={toggleDrawer}
        >
          &times;
        </button>

        {/* Drawer Content */}
        <div className="p-8 mt-12 overflow-y-auto h-full">
          {" "}
          {/* Added overflow for content scrolling */}
          <ul className="flex flex-col space-y-6 text-lg">
            {/* Mapping through 11 links */}
            {[
              "Home",
              "Free Materials",
              "Our Founder",
              "Our Cohorts",
              "Why Us",
              "Our Teaching Methods",
              "Our Curriculum",
              "How to get Started",
              "Pricing",
              "Our Students",
              "FAQs",
            ].map((link, index) => (
              <li key={index} className="border-b border-gray-200 pb-3">
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="flex justify-between items-center text-gray-800"
                >
                  {link}
                  <img
                    src="/arrrow.svg" // Make sure the arrow.svg is in the public folder
                    alt="arrow"
                    className="w-5 h-5" // Adjust the size of the arrow icon as needed
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
