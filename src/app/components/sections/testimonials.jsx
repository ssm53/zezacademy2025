"use client";

import React from "react";
import { motion, useInView } from "framer-motion"; // Ensure these are imported correctly
import { BiSolidQuoteLeft } from "react-icons/bi";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Sample testimonials data
const testimonials = [
  {
    name: "Chris Do",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat..",
    image: "/reviewer.svg",
    rating: 4,
  },
  {
    name: "Kris Steigerwald",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat..",
    image: "/reviewer.svg",
    rating: 4,
  },
  {
    name: "Aliya M.",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat..",
    image: "/reviewer.svg",
    rating: 5,
  },
  {
    name: "Hussain K.",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat..",
    image: "/reviewer.svg",
    rating: 4,
  },
  {
    name: "Denial S.",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat..",
    image: "/reviewer.svg",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat..",
    image: "/reviewer.svg",
    rating: 5,
  },
];

// Testimonials component
export default function Testimonials() {
  // Use useInView hook to check if the component is in view
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  return (
    <div id="our-students" className="bg-[#F7F8F9]">
      <section ref={ref} className="max-w-[1300px] mx-auto px-4 py-16">
        {/* Title with animation */}
        <motion.h2
          className={`text-primary text-2xl sm:text-4xl font-bold text-center mb-6 transition-opacity duration-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 20 }}
        >
          What Our Students <br /> Are Saying
        </motion.h2>

        {/* Subtitle with animation */}
        <motion.p
          className={`text-lg text-center text-gray-600 mb-12 transition-opacity duration-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 20 }}
        >
          Real experiences, real results. Hear from students who have
          transformed their careers with our bootcamp.
        </motion.p>

        {/* Mobile View - Marquee Slider */}
        <div className="lg:hidden">
          <Marquee gradient={false} speed={50}>
            <div className="flex space-x-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-sm rounded-md text-start"
                  style={{ width: "329px", height: "236px" }}
                >
                  <div className="text-xl text-secondary mb-2">
                    <BiSolidQuoteLeft />
                  </div>
                  <p
                    className="text-gray-600 mb-4"
                    style={{ fontSize: "12px" }}
                  >
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-start justify-start mb-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-bold" style={{ fontSize: "12px" }}>
                        {testimonial.name}
                      </p>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400"
                              style={{ fontSize: "12px" }}
                            >
                              ★
                            </span>
                          )
                        )}
                        {Array.from({ length: 5 - testimonial.rating }).map(
                          (_, i) => (
                            <span
                              key={i}
                              className="text-gray-300"
                              style={{ fontSize: "12px" }}
                            >
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-sm rounded-md text-start"
            >
              <div className="text-2xl text-secondary mb-4">
                <BiSolidQuoteLeft />
              </div>
              <p className="text-gray-600 mt-[-10px] mb-6">
                {testimonial.feedback}
              </p>
              <div className="flex items-start justify-start mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map(
                      (_, i) => (
                        <span key={i} className="text-gray-300">
                          ★
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
