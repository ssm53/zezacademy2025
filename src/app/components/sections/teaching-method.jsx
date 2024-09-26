import React from "react";
import Image from "next/image";

const TeachingMethod = () => {
  return (
    <section className="bg-white max-w-[1300px] mx-auto py-16 px-4 lg:px-0">
      <div className="max-w-[1300px] mx-auto">
        {/* Upper Section - Teaching Method and Career Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between">
          {/* Left Section - Our Teaching Method */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              Our Teaching Method
            </h2>
            <p className="text-[16px] text-gray-600">
              Unlock full access to our bootcamp resources for a limited time
              —absolutely free!
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[16px] text-gray-600">
              <li>100% theory 20% practical.</li>
              <li>We dive deep into building projects very fast.</li>
              <li>
                This is not your high school or university… It is easy to read
                material or listen to a lecture. So there won&apos;t be any
                lectures. We have 700+ hours worth of material.
              </li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/teaching.svg"
              alt="Teaching Method"
              width={450}
              height={300}
              className="w-[450px] h-auto object-cover rounded-[15px]"
            />
          </div>
        </div>

        {/* Career Support Section */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-start mt-16  ">
          {/* Left Section - Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <Image
              src="/meeting.svg"
              alt="Career Support"
              width={450}
              height={300}
              className="w-[450px] h-auto object-cover rounded-[15px]"
            />
          </div>

          {/* Right Section - Career Support Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              Career Support
            </h2>
            <p className="text-[16px] text-gray-600">
              Upon graduation, you will get:
            </p>
            <ul className="flex gap-[2rem] list-disc ml-6 space-y-2 text-[16px] text-gray-600">
              <div>
                <li>A certificate</li>
                <li>A great recommendation letter</li>
                <li>Resume templates</li>
                <li>Cover letter templates</li>
                <li>Portfolio templates</li>
              </div>
              <div>
                <li>Real interview practice</li>
                <li>Guidance on how to get your first job.</li>
              </div>
            </ul>
          </div>
        </div>

        {/* Money Back Guarantee Section */}
        <div className="mt-16 bg-primary text-white rounded-[23px] p-8 relative">
          <h2 className="text-[32px] sm:text-4xl font-bold">
            100% Money-back <br /> Guarantee
          </h2>
          <p className="mt-4 text-[16px] sm:text-[#FFFFFFCC]">
            We&apos;re confident in our program, which is why we offer a
            money-back guarantee:
          </p>
          <ul className="w-full sm:w-1/2 text-[16px] sm:text-[#FFFFFFCC] list-disc ml-[-1px] mt-4 space-y-2 border border-[#19395F] p-8 rounded-[15px]">
            <p>
              To qualify, students must meet and maintain eligibility as
              outlined below:
            </p>
            <li>You graduate from the bootcamp and receive our certificate.</li>
            <li>
              You apply to tech jobs, get interviews, and do your part for six
              months.
            </li>
            <li>If you don&apos;t get a job, get your money back!</li>
          </ul>
          <p className="pt-[12px] text-[16px] sm:text-[#FFFFFFCC]">
            *If you follow those steps above, but still don&apos;t get a tech
            job, you get a full-refund!
          </p>
          <Image
            src="/Rectangle.svg"
            alt="rectangle"
            width={300}
            height={300}
            className="hidden sm:block absolute bottom-0 right-0 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TeachingMethod;
