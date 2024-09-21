"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiPlayCircle } from "react-icons/fi"; // Play button icon
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@mui/material/Fab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CardStackDemo } from "../card-stackdemo";
import "./video-card.css";

const data = [
  {
    image: "https://picsum.photos/200/300/?random=1",
    text: "hello",
    youtubeLink: "https://www.youtube.com/watch?v=abc123", // Sample YouTube link
  },
  {
    image: "https://picsum.photos/200/300/?random=12",
    text: "lel",
    youtubeLink: "https://www.youtube.com/watch?v=def456",
  },
  {
    image: "https://picsum.photos/200/300/?random=13",
    text: "kak",
    youtubeLink: "https://www.youtube.com/watch?v=ghi789",
  },
  {
    image: "https://picsum.photos/200/300/?random=15",
    text: "kk",
    youtubeLink: "https://www.youtube.com/watch?v=jkl012",
  },
  {
    image: "https://picsum.photos/200/300/?random=10",
    text: "away",
    youtubeLink: "https://www.youtube.com/watch?v=mno345",
  },
];

// Slide component for carousel
const Slide = React.memo(function ({
  data,
  dataIndex,
  isCenterSlide,
  swipeTo,
  slideIndex,
}) {
  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const youtubeLink = data[dataIndex].youtubeLink;

  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>

      {/* Video Section */}
      <div className="video-section relative">
        <img
          src={coverImage}
          alt="Video Thumbnail"
          className="w-full h-auto rounded-t-lg"
        />
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <FiPlayCircle className="text-blue-500 text-6xl" />
        </a>
      </div>

      {/* Description Section */}
      <div className="detail p-4">
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor amet consectetur pellent esque scelerisque fermentum
          bibendum ipsum massa cursus aliquet feugiat.
        </p>

        <div className="flex items-center mt-4">
          {/* Profile Image */}
          <img
            src="https://picsum.photos/40"
            alt="Profile"
            className="rounded-full w-10 h-10 mr-3"
          />

          {/* Name and Rating */}
          <div>
            <p className="font-bold text-gray-900">Kris Steigerwald</p>
            <div className="flex text-blue-500">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15 8.5 22 9.3 17 14 18 21 12 17.7 6 21 7 14 2 9.3 9 8.5 12 2" />
                  </svg>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Stacked Carousel component
const CardExample = () => {
  const ref = useRef(null);
  const [maxVisibleSlide, setMaxVisibleSlide] = useState(5); // Default to 5
  const [customScales, setCustomScales] = useState([]);

  useEffect(() => {
    const updateCarouselSettings = () => {
      const newMaxVisibleSlide = window.innerWidth < 768 ? 1 : 5;
      setMaxVisibleSlide(newMaxVisibleSlide);

      const newCustomScales = Array.from(
        { length: (newMaxVisibleSlide + 3) / 2 },
        (_, index) => 1 - index * 0.15
      );
      setCustomScales(newCustomScales);
    };

    updateCarouselSettings(); // Set initial values
    window.addEventListener("resize", updateCarouselSettings); // Update on resize

    const interval = setInterval(() => {
      ref.current?.goNext();
    }, 10000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateCarouselSettings);
    };
  }, []);

  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width) => (
            <StackedCarousel
              ref={ref}
              slideComponent={Slide}
              slideWidth={window.innerWidth < 768 ? "100%" : 450} // Full width on mobile
              carouselWidth={width} // Adjust width based on container
              data={data}
              maxVisibleSlide={maxVisibleSlide} // Pass maxVisibleSlide here
              disableSwipe
              customScales={customScales} // Use the calculated customScales
              transitionTime={450}
            />
          )}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#0F243D] py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 items-center md:gap-[14rem]">
        {/* Left Side - Heading and Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
            <span className="text-blue-400">Hey</span>
            <span className="text-white">Learn</span>
            <span className="text-blue-400">2</span>
            <span className="text-white">Code's</span>
            <br className="hidden md:block" />
            Full Stack Coding Bootcamp
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 text-center md:text-left">
            Become a Full-Stack Developer in 4 Months and get a developer job.
            If not, it is 100% FREE.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="w-[142px] sm:w-[190px] h-[50px] bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-[5px]">
              Apply Now
            </button>
            <button className="w-[142px] sm:w-[190px] h-[50px] bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-[5px] whitespace-nowrap flex justify-center">
              Get Free Access
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center md:text-left">
            ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
          </p>
          {/* Grid with Vertical and Horizontal Lines */}
          <div className=" grid grid-cols-1 sm:grid-cols-4 sm:gap-0 gap-4 mt-6 text-sm text-white divide-y divide-[#1D436F] sm:divide-y-0 sm:divide-x border border-[#1D436F] rounded-[15px]">
            <div className="relative p-3 rounded-lg text-center">
              Get developer job or it’s 100% free
            </div>
            <div className="relative p-3 rounded-lg text-center">
              Proper career support after graduation
            </div>
            <div className="relative p-3 rounded-lg text-center">
              Only 6 Students per cohort
            </div>
            <div className="relative p-3 rounded-lg text-center">
              Flexible payment methods
            </div>
          </div>
        </div>
        {/* Right Side - Stacked Video Carousel */}
        {/* <CardExample /> */}
        <CardStackDemo />
      </div>
    </section>
  );
};

export default Hero;
