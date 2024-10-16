"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Animation variants for upward scroll animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and below
  visible: { opacity: 1, y: 0 }, // End visible and in place
};

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
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Why Choose <span className="text-secondary">Zez Academy?</span>
        </h2>

        {/* Shadcn Carousel for mobile screens */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <div className="bg-[#0E2644] p-6 rounded-lg text-start">
                      <div className="flex items-center justify-center p-6">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">
                            {feature.title}
                          </h3>
                          <p className="mt-2 text-[#F1F1F1]">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Hide arrows on mobile */}
            <CarouselPrevious className="hidden sm:block" />
            <CarouselNext className="hidden sm:block" />
          </Carousel>
        </div>

        {/* Grid layout for desktop screens */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }} // Increase delay for each card
              className="bg-[#0E2644] p-6 rounded-lg text-start"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
              />
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-[#F1F1F1]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Second row of boxes */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-8">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index + 3} // Adjust key to avoid duplication
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (index + 3) * 0.2,
              }} // Increase delay for each card
              className="bg-[#0E2644] p-6 rounded-lg text-start"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
              />
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-[#F1F1F1]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bonuses Section */}
        <ul className="w-full text-[#FFFFFFCC] list-disc ml-[-1px] mt-4 space-y-2 border border-[#19395F] p-8 rounded-[15px]">
          <strong>Bonuses</strong>
          <li>You will learn how to build AI products.</li>
          <li>
            You will learn how to create a website in less than 30 minutes
            (which you can sell to businesses).
          </li>
          <li>
            You will build a software for a real-life business. We connect you
            to them, and get your first client!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChoose;
