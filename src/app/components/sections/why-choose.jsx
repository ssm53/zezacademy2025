// components/WhyChoose.js
import Image from "next/image";
import CustomSlider from "./custom-slider";

// const bannerLodgos = [
//   "/Group 14.png",
//   "/Group 14.png",
//   "/Group 14.png",
//   "/Group 14.png",
//   "/Group 14.png",
//   "/Group 14.png",
//   "/Group 14.png",
//   "/Group 14.png",
// ];

const WhyChoose = () => {
  const features = [
    {
      title: "Job Guarantee or It’s Free",
      description:
        "Get a job after completion of the course, or your money back.",
      icon: "/100.svg",
    },
    {
      title: "Exclusive Cohorts",
      description:
        "Get more one-on-one time and personal guidance from your instructor.",
      icon: "/user.svg",
    },
    {
      title: "Instant Help",
      description: "Get the help you need within 15 minutes.",
      icon: "/chatbot.svg",
    },
    {
      title: "Build and Sell AI Products",
      description: "Learn how to create AI-driven solutions.",
      icon: "/ai.svg",
    },
    {
      title: "Work with Real Clients",
      description: "Build real products and get paid for it.",
      icon: "/multiuser.svg",
    },
    {
      title: "Career Support",
      description:
        "We help you with job applications, resumes, and interview tips.",
      icon: "/people.svg",
    },
  ];

  return (
    <div id="why-us" className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Why Choose <span className="text-secondary">HeyLearn2Code?</span>
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0E2644] p-6 rounded-lg text-start">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64} // Adjust the width as needed
                height={64} // Adjust the height as needed
              />
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-[#F1F1F1]">{feature.description}</p>
            </div>
          ))}
        </div>
        <ul className="w-full sm:w-full text-[#FFFFFFCC] list-disc ml-[-1px] mt-4 space-y-2 border border-[#19395F] p-8 rounded-[15px]">
          <strong>Bonuses</strong>
          <li>You will learn how to build AI products.</li>
          <li>
            You will learn how to create a website in less than 30 minutes
            (which you can sell to businesses)
          </li>
          <li>
            You will learn how to build a google review filtering system (which
            you can sell to businesses)
          </li>
          <li>
            Chat Gpt is great. We teach you how to properly utilize it for
            coding!
          </li>
        </ul>

        {/* Mobile View - Custom Slider */}
        <div className="lg:hidden">
          <CustomSlider features={features} />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
