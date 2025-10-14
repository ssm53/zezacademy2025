"use client";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import the icons

const faqs = [
  {
    question: "Do I need any coding experience to join?",
    answer: "You really dont. Zez Academy is catered for complete beginners. ",
  },
  {
    question: "Do you have installment payment options?",
    answer: "We can arrange one for you.",
  },
  {
    question: "Its too expensive.",
    answer:
      "There are 0 programs out there offering a lower price, with a job guarantee and actual live support. If this is too expensive for you, even with the installment payment options, I then suggest that you learn through self-studying. Its possible, but its difficult.",
  },
  // {
  //   question: "What is the fixed and flexible option?",
  //   answer:
  //     "Our flexible option is where you can choose your own hours of study. This is suitable for students who can only do this part-time. We will be available to help you from 7-10pm mon-fri",
  // },
  // {
  //   question: "Do you have a full-time option?",
  //   answer:
  //     "Yes, we do. This is only available for students who choose the fixed option. Our class hours are from 10am-5pm mon-fri",
  // },
  // {
  //   question: "Do I really get my money-back if I dont get a job?",
  //   answer:
  //     "Yes, if you continue applying for jobs and you dont get a job upon graduation, you get all your money-back.",
  // },
  {
    question: "What do I need to bring?",
    answer: "All you need is a laptop and the motivation to learn.",
  },
  {
    question: "Is this remote or in-person?",
    answer:
      "For full-time students, both options are available. On-site location is in Kinrara, Selangor, Malaysia. For students with the part-time option, it is fully remote.",
  },
  {
    question: "How can you teach us so fast and get us a job?",
    answer:
      "I did it myself. I get rid of alot of unneccessary theory and throw you to the deep end of building projects. Thats where you learn. Too many courses focus on the theory, and not on the practical side of coding. I teach all that I have learnt so far.",
  },
  {
    question: "What happens after completing the bootcamp?",
    answer:
      "It depends on your goal. If you want a developer job, we will support you with alot of material and weekly calls to keep you accountable.",
  },
];

export default function FaqAccordian() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-[#F7F8F9]">
      <section className=" max-w-[1300px] mx-auto px-6 md:px-16 lg:px-32 py-16">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">
          Frequently Asked Questions
        </h2>
        {/* <p className="text-lg text-center text-gray-600 mb-12">
          Got questions? We&rsquo;ve got answers! Here&apos;s everything you
          need to know <br />
          before joining.
        </p> */}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border shadow-md bg-white rounded-lg pb-4"
              style={{ borderRadius: "10px" }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left flex justify-between items-center py-4 px-6 focus:outline-none"
              >
                <span className=" font-semibold text-[15px] sm:text-lg text-lightGray">
                  {faq.question}
                </span>
                <span className="text-xl">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-secondary" /> // Use arrow up for expanded
                  ) : (
                    <FaChevronDown className="text-secondary" /> // Use arrow down for collapsed
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden  transition-all duration-100 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 pt-2 px-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
