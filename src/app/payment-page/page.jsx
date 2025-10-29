

"use client";

import { useMemo, useState } from "react";
import { FaLock, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // Amount is fixed here; your /api/checkout should set the currency to AUD
  const [amount] = useState(3500); // A$ 3,000

  const formattedAmount = useMemo(() => {
    try {
      return new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return `A$ ${amount.toLocaleString()}`;
    }
  }, [amount]);

  const handlePayment = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // If you need to pass amount/plan, include it in the body:
        // body: JSON.stringify({ amount }),
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (response.ok && data?.url) {
        window.location.href = data.url; // Stripe Checkout
      } else {
        setMessage("✗ Payment failed. Please try again.");
      }
    } catch (err) {
      setMessage("✗ Error processing payment. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F8F9] py-12 px-4 flex items-center">
      <div className="w-full max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Offer/Features */}
        <section className="bg-white rounded-[15px] shadow-lg p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            Zez Academy&apos;s Full-Stack & AI Coding Bootcamp
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#0F243DCC]">
            Complete your enrolment for the upcoming cohort. 
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-[2px] text-green-500" />
              <p className="text-[15px] text-[#0F243D]">
                Beginner-friendly: live help when you&apos;re stuck
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-[2px] text-green-500" />
              <p className="text-[15px] text-[#0F243D]">
                Project-based learning with a job-ready portfolio
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-[2px] text-green-500" />
              <p className="text-[15px] text-[#0F243D]">
                Full-time or evening schedule (AU local time)
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-[#0F243D99] text-sm">
            <FaLock />
            <span>Payments processed by Stripe. Your info is encrypted.</span>
          </div>
        </section>

        {/* Right: Price/Card */}
        <section className="bg-white rounded-[15px] shadow-lg p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#0F243DCC]">Amount</h2>
            <span className="inline-flex items-center rounded-full bg-[#0D2138]/5 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#0D2138]">
              Tuition
            </span>
          </div>

          <div className="mt-3 bg-[#F3F5F7] rounded-[12px] p-5">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">
              {formattedAmount}
            </div>
            {/* <p className="mt-1 text-xs sm:text-sm text-[#0F243D99]">
              Charged in AUD via Stripe
            </p> */}
          </div>

          {/* (Optional) Guarantee note—hide/remove if not relevant on this page */}
          {/* <div className="mt-6 rounded-[12px] border border-[#E6E8EB] p-4">
            <div className="flex items-center gap-2 text-[#0F243D] font-semibold text-sm">
              <FaShieldAlt className="text-secondary" />
              Job Guarantee (if selected at enrolment)
            </div>
            <p className="mt-2 text-[13px] text-[#0F243D99]">
              If you don’t land a software developer role, we refund 50% of
              tuition. Eligibility details are in the FAQ.
            </p>
          </div> */}

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-6 w-full bg-secondary hover:opacity-90 disabled:opacity-70 text-white font-semibold py-3 px-4 rounded-[10px] transition"
          >
            {loading ? "Processing…" : "Pay Now"}
          </button>

          {message && (
            <div
              className={`mt-4 p-3 rounded-[10px] text-sm text-center ${
                message.includes("successful")
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          {/* Small reassurance footer */}
          {/* <div className="mt-6 text-[11px] text-[#0F243D99]">
            By proceeding, you agree to our Terms & Refund Policy.
          </div> */}
        </section>
      </div>
    </main>
  );
}

