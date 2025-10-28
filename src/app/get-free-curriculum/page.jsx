"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../components/layout/header";

const GetFreeCurriculum = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="bg-[#0F243D] text-white">

      {/* Hero */}
      <section className="max-w-[1300px] mx-auto px-4 lg:px-0 py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm ring-1 ring-white/20">
            📘 Free For A Limited Time Only
          </span>
           {/* Zez Academy brand line */}
    <h2 className="mt-3 text-secondary text-xl sm:text-2xl font-semibold tracking-wide">
      Zez Academy
    </h2>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold">
            Zero To Software Developer Complete Curriculum
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          This curriculum is built for absolute beginners. You&apos;ll learn HTML, CSS, and JavaScript, then move through front end, back end, and databases—step-by-step. By the end, you&apos;ll have the skills of a junior software developer and the confidence to build your own app
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm sm:text-base">
            <li className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3">
              ✅ 600+  hours
            </li>
            <li className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3">
              ✅ 20 challenges
            </li>
            <li className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3">
              ✅ 7 projects
            </li>
          </ul>

          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.04 }}
            className="mt-8 bg-secondary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Get Free Curriculum
          </motion.button>

          <p className="mt-3 text-white/70 text-sm">
  You also get a 1:1 call with Shaun for tips & guidance on learning to code
</p>
        </div>
      </section>

      {/* Founder (short) */}
      <section className="bg-primary">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
            <p className="mt-3 text-[#E9EAEB]">
              I&apos;m Shaun, ex-Deloitte accountant who learned to code from scratch.
              Within 4 months I landed four software developer offers—no degree or
              master&apos;s. I now build software for clients and help beginners do the
              same with a practical, job-focused approach.
            </p>
            <a
              href="https://www.linkedin.com/in/shaun-shanil-menezes/"
              target="_blank"
              className="inline-flex items-center gap-2 mt-5 bg-white text-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.77C.792 0 0 .774 0 1.733v20.534C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.733V1.733C24 .774 23.208 0 22.23 0zM7.09 20.452H3.557V9.036H7.09v11.416zM5.324 7.732a2.04 2.04 0 01-2.05-2.05 2.047 2.047 0 012.05-2.049 2.05 2.05 0 010 4.099zm15.129 12.72h-3.533v-5.564c0-1.329-.024-3.04-1.855-3.04-1.858 0-2.143 1.45-2.143 2.947v5.657H9.388V9.036h3.39v1.563h.048c.472-.894 1.625-1.835 3.345-1.835 3.575 0 4.233 2.352 4.233 5.41v6.278z"/></svg>
              LinkedIn
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden ring-1 ring-white/10 bg-white/5">
              <img
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1729196914/bootcamp-website/images/g1rounbqbfvvxil84ec0.jpg"
                alt="Founder"
                width={960}
                height={540}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && <LeadModal onClose={() => setOpen(false)} />}
    </main>
  );
};

const LeadModal = ({ onClose }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [thankYou, setThankYou] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.whatsapp) return;

    try {
      setLoading(true);
      const res = await fetch("/api/get-free-curriculum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setThankYou("Thanks! We will email you access to the curriculum within 48 hours.");
        // close + redirect after a short pause
        setTimeout(() => {
          onClose();
          router.push("https://calendly.com/shaun-ravewavedigital/1-1-consultation-call-with-shaun");
        }, 1500);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F243D]/5 px-3 py-1 text-[11px] font-semibold text-[#0F243D]">
              🎁 Free Curriculum
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#0F243D]">
              Get the Full Curriculum
            </h3>
            {/* <p className="mt-1 text-sm text-gray-500">
              This is not a PDF. It is access to
            </p> */}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          {thankYou ? (
            <div className="rounded-lg bg-green-50 text-green-700 p-4 text-sm">
              {thankYou}
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg text-black border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  WhatsApp (Please include country code)
                </label>
                <input
                  name="whatsapp"
                  type="text"
                  placeholder="+61 4xx xxx xxx"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg text-black border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-secondary text-white px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                {loading ? "Submitting… You will be redirected to the 1:1 Consultation Booking Page" : "Get Free Curriculum"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetFreeCurriculum;
