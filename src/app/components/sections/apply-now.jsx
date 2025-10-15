// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const ApplyNow = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     whatsapp: "",
//     reason: "",
//     codingexperience: "I have not written a single line of code",
//     stageofcareer: "I am still in school/college/university",
//     fullorpart: "Full-Time",
//     remoteoronsite: "Remote",
//   });

//   const [thankYouMessage, setThankYouMessage] = useState("");
//   const [loading, setLoading] = useState(false); // State for loading

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       formData.fullname &&
//       formData.email &&
//       formData.whatsapp &&
//       formData.reason
//     ) {
//       setLoading(true); // Start loading
//       try {
//         const response = await fetch("/api/new-applicant", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setThankYouMessage(
//             "Thank you for your application! We will review it and notify you within 3 days if you qualify for the final interview"
//           );
//         } else {
//           alert("Error submitting the form. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Error submitting the form. Please try again.");
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="md:w-1/2 w-full p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Start your coding journey
//         </h2>
//         {thankYouMessage ? (
//           <div className="p-4 text-center">
//             <p>{thankYouMessage}</p>
//             <div className="mt-10">
//               <a
//                 href="/"
//                 className="mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Go back to home
//               </a>
//             </div>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <label className="block">Full Name*</label>
//             <input
//               type="text"
//               name="fullname"
//               placeholder="Full Name"
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//             <label className="block mt-5">Email*</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Your email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//             <label className="block mt-5">Whatsapp*</label>
//             <input
//               type="text"
//               name="whatsapp"
//               placeholder="Whatsapp Number"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//             <label className="block mt-5">
//               Why do you want to learn to code?*
//             </label>
//             <textarea
//               name="reason"
//               placeholder="Why do you want to learn to code?"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//             <label className="block mt-5">
//               What is your current coding level?*
//             </label>
//             <select
//               name="codingexperience"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             >
//               <option value="I have not written a single line of code">
//                 I have not written a single line of code
//               </option>
//               <option value="I have done a little bit of coding (Youtube videos/short online course)">
//                 I have done a little bit of coding (Youtube videos/short online
//                 course)
//               </option>
//             </select>
//             <label className="block mt-5">
//               What stage of your career are you at?*
//             </label>
//             <select
//               name="stageofcareer"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             >
//               <option value="I am still in school/college/university">
//                 I am still in school/college/university
//               </option>
//               <option value="I have been working for 1-3 years already">
//                 I have been working for 1-3 years already
//               </option>
//               <option value="I have been working for 4-10 years already">
//                 I have been working for 4-10 years already
//               </option>
//               <option value="I have been working for more than 10 years already">
//                 I have been working for more than 10 years already
//               </option>
//               <option value="I am an entrepreneur">I am an entrepreneur</option>
//               <option value="I am currently unemployed">
//                 I am currently unemployed
//               </option>
//             </select>
//             <label className="block mt-5">
//               Are you joining full-time or part-time?*
//             </label>
//             <select
//               name="fullorpart"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             >
//               <option value="Fixed">Full-Time</option>
//               <option value="Flexible">Part-Time</option>
//               <option value="I am not sure yet">I am not sure yet</option>
//             </select>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 focus:outline-none"
//               disabled={loading} // Disable button when loading
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center">
//                   <svg
//                     className="animate-spin h-5 w-5 mr-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8H4z"
//                     />
//                   </svg>
//                   Submitting...
//                 </div>
//               ) : (
//                 "Apply Now"
//               )}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApplyNow;


"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ApplyNow = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    whatsapp: "",
    reason: "",
    codingexperience: "I have not written a single line of code",
    stageofcareer: "I am still in school/college/university",
    fullorpart: "Full-Time",
    remoteoronsite: "Remote",
  });

  const [thankYouMessage, setThankYouMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.fullname &&
      formData.email &&
      formData.whatsapp &&
      formData.reason
    ) {
      setLoading(true);
      try {
        const response = await fetch("/api/new-applicant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setThankYouMessage(
            "Thank you for your application! We will review it and notify you within 3 days if you qualify for the final interview"
          );
        } else {
          alert("Error submitting the form. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting the form. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F243D] to-[#0F243D]/90 py-16 px-4">
      <div className="mx-auto w-full max-w-[1100px]">
        {/* Header / Hero */}
        <div className="text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm ring-1 ring-white/20 backdrop-blur">
            <span role="img" aria-label="calendar">📅</span>
            Next Cohort: <strong className="ml-1">1 Dec 2025 – 31 Mar 2026</strong>
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold">
            Zez Academy&apos;s Full-Stack & AI Coding Bootcamp
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/80">
            For complete beginners and career switchers. Live classes • Mentorship • Job-ready projects
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Trust / Highlights */}
          <div className="order-2 lg:order-1">
            <div className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Why join this cohort?
              </h2>
              <ul className="mt-4 space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z"/></svg>
                  Structured 4-month Full-Stack & AI curriculum (beginner-friendly)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z"/></svg>
                  Live support + career guidance, portfolio & interview prep
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z"/></svg>
                  Schedules: Full-time (Mon–Fri, 10am–5pm) or Part-time (Mon–Fri, 7pm–10pm)
                </li>
              </ul>

              <div className="mt-6 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7v3H4a2 2 0 00-2 2v6h20v-6a2 2 0 00-2-2h-1V9a7 7 0 00-7-7zm0 2a5 5 0 015 5v3H7V9a5 5 0 015-5z"/></svg>
                  Your information is private and only used to evaluate your application.
                </div>
              </div>

              <div className="mt-6 text-xs sm:text-sm text-white/70">
                By applying, you agree to be contacted via email/WhatsApp about your application status and next steps.
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
              <div className="border-b border-gray-100 px-6 py-5">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0D2138]">
                  Start your coding journey
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fill in the form below. It takes less than 3 minutes.
                </p>
              </div>

              <div className="px-6 py-6">
                {thankYouMessage ? (
                  <div className="p-4 text-center">
                    <p className="text-[#0D2138]">{thankYouMessage}</p>
                    <div className="mt-8">
                      <a
                        href="/"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Go back to home
                      </a>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Jane Doe"
                        className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        WhatsApp*
                      </label>
                      <input
                        type="text"
                        name="whatsapp"
                        placeholder="+60 12 345 6789"
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Why do you want to learn to code?*
                      </label>
                      <textarea
                        name="reason"
                        placeholder="Tell us about your motivation and goals…"
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        What is your current coding level?*
                      </label>
                      <select
                        name="codingexperience"
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                      >
                        <option value="I have not written a single line of code">
                          I have not written a single line of code
                        </option>
                        <option value="I have done a little bit of coding (Youtube videos/short online course)">
                          I have done a little bit of coding (YouTube videos/short online course)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Are you joining full-time or part-time?*
                      </label>
                      <select
                        name="fullorpart"
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                      >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="I am not sure yet">I am not sure yet</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-secondary text-white p-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="inline-flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Apply Now"
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to our application terms. You can opt out of communication anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* subtle bottom note */}
        {/* <div className="mt-8 text-center text-white/70 text-xs sm:text-sm">
          Questions? <a href="https://wa.me/60123397028" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Chat with us on WhatsApp</a>.
        </div> */}
      </div>
    </div>
  );
};

export default ApplyNow;

