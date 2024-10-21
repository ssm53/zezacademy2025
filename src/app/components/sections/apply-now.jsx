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
    fullorpart: "Fixed",
    remoteoronsite: "Remote",
  });

  const [thankYouMessage, setThankYouMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.fullname &&
      formData.email &&
      formData.whatsapp &&
      formData.reason
    ) {
      setLoading(true); // Start loading
      try {
        const response = await fetch("/api/new-applicant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
        setLoading(false); // Stop loading
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="md:w-1/2 w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Start your coding journey
        </h2>
        {thankYouMessage ? (
          <div className="p-4 text-center">
            <p>{thankYouMessage}</p>
            <div className="mt-10">
              <a
                href="/"
                className="mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go back to home
              </a>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">Full Name*</label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <label className="block mt-5">Email*</label>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <label className="block mt-5">Whatsapp*</label>
            <input
              type="text"
              name="whatsapp"
              placeholder="Whatsapp Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <label className="block mt-5">
              Why do you want to learn to code?*
            </label>
            <textarea
              name="reason"
              placeholder="Why do you want to learn to code?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <label className="block mt-5">
              What is your current coding level?*
            </label>
            <select
              name="codingexperience"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              <option value="I have not written a single line of code">
                I have not written a single line of code
              </option>
              <option value="I have done a little bit of coding (Youtube videos/short online course)">
                I have done a little bit of coding (Youtube videos/short online
                course)
              </option>
            </select>
            <label className="block mt-5">
              What stage of your career are you at?*
            </label>
            <select
              name="stageofcareer"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              <option value="I am still in school/college/university">
                I am still in school/college/university
              </option>
              <option value="I have been working for 1-3 years already">
                I have been working for 1-3 years already
              </option>
              <option value="I have been working for 4-10 years already">
                I have been working for 4-10 years already
              </option>
              <option value="I have been working for more than 10 years already">
                I have been working for more than 10 years already
              </option>
              <option value="I am an entrepreneur">I am an entrepreneur</option>
              <option value="I am currently unemployed">
                I am currently unemployed
              </option>
            </select>
            <label className="block mt-5">
              Are you joining fixed or flexible schedule?*
            </label>
            <select
              name="fullorpart"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              <option value="Fixed">Fixed</option>
              <option value="Flexible">Flexible</option>
              <option value="I am not sure yet">I am not sure yet</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 focus:outline-none"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Apply Now"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyNow;
