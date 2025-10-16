

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Optional for more complex animations

const OurFounder = () => {
  const [isInView, setIsInView] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const sectionRef = useRef(null);

  // Using Intersection Observer to detect when the section is in view
  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Store the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation
        } else {
          setIsInView(false); // Optionally remove animation when out of view
        }
      },
      { threshold: 0.3 } // Adjust threshold for when the animation should trigger
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef); // Use the stored ref value
      }
    };
  }, []);

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <section
      id="our-founder"
      ref={sectionRef}
      className="bg-primary py-16 px-4 lg:px-0"
    >
      <div className="max-w-[1300px] mx-auto lg:flex lg:items-center">
        <motion.div
          className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1729196914/bootcamp-website/images/g1rounbqbfvvxil84ec0.jpg"
              alt="Founder presenting"
              width={800}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className={`lg:w-1/2 lg:pl-12 text-white transform transition-all duration-1000 ${
            isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <p className="text-lg font-medium mb-4">
            Hey, I&apos;m Shaun, founder of{" "}
            <span className="font-bold">Zez Academy</span>
          </p>
          <p className="mb-4 text-[#E9EAEB]">
            This is why learning to code seems &apos;hard&apos;:{" "}
          </p>
          <ul className="mb-4 text-[#E9EAEB] list-disc pl-5">
            <li>Degree or Masters is too long & expensive</li>
            <li>
              Other bootcamps are expensive (RM30,000 - RM120,000).
            </li>
            <li>
              Online courses (Youtube or Udemy) don’t have someone to guide you when you are stuck, which will
              cause you to give up.
            </li>
            <li>Most people can’t commit to learning code full-time.</li>
          </ul>
          <p className="mb-4 text-[#E9EAEB] underline font-bold text-lg">
            My Aim
          </p>
          <p className="mb-4 text-[#E9EAEB]">
            Everyday, I will personally teach you how to code... for months... at an affordable price.
          </p>
          {showFullText ? (
            <>
              <p className="mb-4 text-[#E9EAEB] underline font-bold text-lg">
                My Story
              </p>
              <p className="mb-4 text-[#E9EAEB]">
                I was an accountant working at Deloitte, UK and it was great,
                but I was bored and unsatisfied. So, I left my job to start a
                crypto startup which had a 7-figure yearly profit, but I made mistakes and it
                ultimately failed in 2023. I was a bit lost and I did not
                want to go back to accounting, but that was the only skill I
                had!
              </p>
              <p className="mb-6 text-[#E9EAEB]">
                So, in Aug 2023, I picked up coding seriously, and by Dec 2023,
                I had 4 software developer job offers. This was done without a
                Degree or a Master’s.
              </p>
              <p className="mb-6 text-[#E9EAEB]">
                Now, I have a tech agency. Built software for 40+ clients.
              </p>
               <p className="mb-6 text-[#E9EAEB]">
                Learning to code is the best thing I&apos;ve done.
              </p>
              {/* <p className="mb-6 text-[#E9EAEB]">
                I&lsquo;m also building EZLA (funding secured), an AI-powered
                software that generates personalized job-specific cover letters
                and resumes in under 1 minute. It is in beta mode and is
                launching in Q4 2024.
              </p> */}
              <a
                href="https://www.linkedin.com/in/shaun"
                target="_blank"
                className="bg-white text-primary font-medium py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition w-max" // Add w-max to limit width to content
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.733v20.534C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.733V1.733C24 .774 23.208 0 22.23 0zM7.09 20.452H3.557V9.036H7.09v11.416zM5.324 7.732a2.04 2.04 0 01-2.05-2.05 2.047 2.047 0 012.05-2.049 2.05 2.05 0 010 4.099zm15.129 12.72h-3.533v-5.564c0-1.329-.024-3.04-1.855-3.04-1.858 0-2.143 1.45-2.143 2.947v5.657H9.388V9.036h3.39v1.563h.048c.472-.894 1.625-1.835 3.345-1.835 3.575 0 4.233 2.352 4.233 5.41v6.278z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <button
                onClick={toggleText}
                className="text-blue-500 hover:underline"
              >
                See Less ▲
              </button>
            </>
          ) : (
            <button
              onClick={toggleText}
              className="text-blue-500 hover:underline"
            >
              See My Story ▼
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurFounder;
