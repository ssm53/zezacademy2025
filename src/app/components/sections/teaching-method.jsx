import React from "react";
import Image from "next/image";

const TeachingMethod = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              Our Teaching Method
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>100% theory 20% practical.</li>
              <li>
                We dive deep into building projects very fast. This is not for
                aspiring school or university. It is fast-paced.
              </li>
              <li>
                No need for materials or lectures, we have 700+ hours of
                content!
              </li>
            </ul>
          </div>

          <div className="flex justify-end rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/teaching.svg"
              alt="Teaching Method"
              width={500}
              height={300}
              className="w-auto"
              style={{ width: "fit-content" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-16 justify-between">
          <div className="flex justify-start rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/meeting.svg"
              alt="Career Support"
              width={500}
              height={300}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Career Support</h2>
            <p className="text-gray-600">Upon graduation, you will get:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>A certificate</li>
              <li>A great recommendation letter</li>
              <li>Resume templates</li>
              <li>Cover letter templates</li>
              <li>Portfolio templates</li>
              <li>Real interview practice</li>
              <li>Guidance on how to get your first job.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-primary text-white rounded-[23px] p-8 relative">
          <h2 className="text-2xl sm:text-4xl font-bold">
            100% Money-back <br /> Guarantee
          </h2>
          <p className="mt-4">
            We're confident in our program, which is why we offer a money-back
            guarantee:
          </p>
          <ul className="w-full sm:w-1/2 text-[#FFFFFFCC] list-disc ml-[-1px] mt-4 space-y-2 border border-[#19395F] p-8 rounded-[15px]">
            <p>
              To qualify, students must meet and maintain eligibility as
              outlined below:
            </p>
            <li>You graduate from the bootcamp and receive our certificate.</li>
            <li>
              You apply to tech jobs, get interviews, and do your part for six
              months.
            </li>
            <li>If you don't get a job, get your money back!</li>
          </ul>
          <p className="pt-[12px] text-[#FFFFFFCC]">
            *If you follow those steps above, but still don't get a tech job,
            you get a full-refund!
          </p>
          <img
            src="/Rectangle.svg"
            alt="rectangle"
            className="hidden sm:block absolute bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default TeachingMethod;
