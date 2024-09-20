import React from "react";
import Image from "next/image";

const OurFounder = () => {
  return (
    <section className="bg-primary py-16 ">
      <div className=" max-w-[1300px] mx-auto px-6 lg:flex lg:items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/founder-video-thumbnail.jpg"
              alt="Founder presenting"
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
            <a
              href="https://www.youtube.com/watch?v=HF0iqQ2ZzFU&t=2s"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
              aria-label="Play video"
            >
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-12 text-white">
          <h4 className="text-sm font-semibold text-secondary uppercase mb-2">
            About Founder
          </h4>
          <h2 className="text-4xl font-bold mb-4">Our Founder</h2>
          <p className="text-lg font-medium mb-6">
            Hey peeps, I'm Shaun, Founder of{" "}
            <span className="font-bold">"HeyLearn2Code"</span>
          </p>
          <p className="mb-6">
            I started learning to code in April 2023, and by the end of the
            year, I had four software developer job offers. Without a degree.
            Now, I’m building AI products, including EZLA, an AI SaaS launching
            Q4 2024.
          </p>
          <p className="mb-8">
            Emphasize your switch from accounting to coding, showcasing the
            value of learning tech skills even without formal education.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shaun"
              className="bg-white text-primary font-medium py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition"
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
            <a
              href="/founder-details"
              className="bg-secondary text-white font-medium py-2 px-4 rounded-lg hover:bg-secondary transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
