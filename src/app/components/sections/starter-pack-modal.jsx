"use client";
import React, { useEffect, useState } from "react";

export default function StarterPackModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [thankYou, setThankYou] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    whatsapp: "",
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.whatsapp) return;

    try {
      setLoading(true);
      const res = await fetch("/api/starter-pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setThankYou(
          "Thanks! Your Starter Pack is on the way. We’ll also reach out to schedule your free 1:1 consultation."
        );
        setTimeout(onClose, 1800);
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
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F243D]/5 px-3 py-1 text-[11px] font-semibold text-[#0F243D]">
              🎁 Free Starter Pack
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#0F243D]">
              Get Your Free Starter Pack
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Enter your details to receive:
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <ul className="mb-5 space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <svg className="h-5 w-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z"/></svg>
              A curated list of beginner-friendly learning resources
            </li>
            <li className="flex items-start gap-2">
              <svg className="h-5 w-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z"/></svg>
              A free 1:1 consultation on learning to code & career paths
            </li>
          </ul>

          {thankYou ? (
            <div className="rounded-lg bg-green-50 text-green-700 p-4 text-sm">
              {thankYou}
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full name*
                </label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  WhatsApp*
                </label>
                <input
                  name="whatsapp"
                  type="text"
                  placeholder="+60 12 345 6789"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-secondary text-white px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                {loading ? "Submitting..." : "Send me the Starter Pack"}
              </button>

              <p className="text-center text-xs text-gray-500">
                We’ll email/WhatsApp your starter pack. You can opt out anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
