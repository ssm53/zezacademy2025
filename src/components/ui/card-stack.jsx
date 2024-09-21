"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-[434px] w-[385px] md:h-[434px] md:w-[385px] flex justify-end">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white h-[434px] w-[385px] rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
            right: index * CARD_OFFSET,
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          {/* Video thumbnail */}
          <div className="relative h-48 w-full rounded-xl overflow-hidden">
            <img
              src="/videothumbnail.svg"
              alt="Video Thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-4.587-2.296a.5.5 0 00-.747.436v4.584a.5.5 0 00.747.436l4.587-2.296a.5.5 0 000-.872z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="">
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque fermentum bibendum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* User Info and Rating */}
          <div className=" flex items-center space-x-3">
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
    </div>
  );
};
