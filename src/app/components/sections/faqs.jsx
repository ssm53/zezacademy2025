"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need any coding experience to join the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "How long is the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "What do I need to bring to the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  // Add more FAQ items here if needed
];

export default function FaqAccordian() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Got questions? We’ve got answers! Here's everything you need to know
        before joining.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 pt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
