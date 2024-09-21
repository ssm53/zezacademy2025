"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 32; // Offset for right shift
  const TOP_OFFSET = 17; // Adjust for slight upward stacking
  const SCALE_FACTOR = scaleFactor || 0.06; // Scale for the smaller card effect
  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCards(items);
  }, [items]);

  const nextCard = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop());
      return newArray;
    });
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift());
      return newArray;
    });
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative h-[434px] w-[385px] sm:h-[444px] sm:w-[385px] flex justify-start">
      {/* Card Stack */}
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white h-[434px] w-auto sm:w-385px rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
            left: index * CARD_OFFSET, // Shift cards to the right side
            top: index * TOP_OFFSET, // Stack cards upwards
            zIndex: cards.length - index, // Ensure correct z-index stacking
          }}
          initial={{
            top: index * TOP_OFFSET,
            left: index * CARD_OFFSET, // Initial right stacking
            scale: 1 - index * SCALE_FACTOR, // Scale effect
          }}
          animate={{
            top: index * TOP_OFFSET,
            left: index * CARD_OFFSET, // Right stack during animation
            scale: 1 - index * SCALE_FACTOR,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {/* Video thumbnail */}
          <div className="relative h-48 w-full rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={card.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm text-gray-600">
              {card.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            </p>
          </div>

          {/* User Info and Rating */}
          <div className="flex items-center space-x-3">
            <img
              src="/videoavatar.svg"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-900 font-medium">{card.name}</p>
              <p className="text-gray-500 text-sm">{card.designation}</p>
              {/* Star Rating */}
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27l5.18 3.73-1.64-6.03 4.55-3.88-6.05-.52L12 4.5l-2.04 6.07-6.05.52 4.55 3.88-1.64 6.03z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute -bottom-12 flex justify-center  text-center items-center ">
        <button
          className="bg-gray-300 p-2 rounded-full"
          onClick={prevCard}
          aria-label="Previous Card"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-gray-300 p-2 rounded-full"
          onClick={nextCard}
          aria-label="Next Card"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
