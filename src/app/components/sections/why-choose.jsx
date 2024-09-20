// components/WhyChoose.js
import CustomSlider from "./custom-slider";

const bannerLodgos = [
  "/Group 14.png",
  "/Group 14.png",
  "/Group 14.png",
  "/Group 14.png",
  "/Group 14.png",
  "/Group 14.png",
  "/Group 14.png",
  "/Group 14.png",
];

const WhyChoose = () => {
  const features = [
    {
      title: "Job Guarantee or It’s Free",
      description:
        "Get a job after completion of the course, or your money back.",
      icon: "💼",
    },
    {
      title: "Exclusive Cohorts",
      description:
        "Get more one-on-one time and personal guidance from your instructor.",
      icon: "🎓",
    },
    {
      title: "Instant Help",
      description: "Get the help you need within 15 minutes.",
      icon: "🛠️",
    },
    {
      title: "Build and Sell AI Products",
      description: "Learn how to create AI-driven solutions.",
      icon: "🤖",
    },
    {
      title: "Work with Real Clients",
      description: "Build real products and get paid for it.",
      icon: "💼",
    },
    {
      title: "Career Support",
      description:
        "We help you with job applications, resumes, and interview tips.",
      icon: "🧑‍💼",
    },
    {
      title: "Instant Help",
      description: "Get the help you need within 15 minutes.",
      icon: "🛠️",
    },
    {
      title: "Build and Sell AI Products",
      description: "Learn how to create AI-driven solutions.",
      icon: "🤖",
    },
    {
      title: "Work with Real Clients",
      description: "Build real products and get paid for it.",
      icon: "💼",
    },
  ];

  return (
    <div className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Why Choose <span className="text-secondary">HeyLearn2Code?</span>
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0E2644] p-6 rounded-lg text-center"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Custom Slider */}
        <div className="lg:hidden">
          <CustomSlider features={features} />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
