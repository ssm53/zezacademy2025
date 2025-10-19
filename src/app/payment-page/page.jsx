"use client"

import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [amount, setAmount] = useState("1000")


  const handlePayment = async () => {
    setLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (response.ok) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      }
       if (response.ok) {
        // setMessage("✓ Payment successful! Thank you for your purchase.")
      } else {
        setMessage("✗ Payment failed. Please try again.")
      }
    } catch (error) {
        alert("An error occurred while processing your payment. Please try again.");
      setMessage("✗ Error processing payment. Please check your connection.")
    } finally {
      setLoading(false)
    }
  };


  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Learn & Build <span className="text-blue-500">AI Systems</span>
        </h1>
        <p className="text-slate-300 text-sm mb-6">Only For Malaysian College & Uni Students</p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-center text-slate-300">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            For complete beginners
          </div>
          <div className="flex items-center justify-center text-slate-300">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Live Remote Classes Mon - Thurs
          </div>
          <div className="flex items-center justify-center text-slate-300">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            5 students per cohort
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <p className="text-slate-400 text-sm mb-2">Amount to Pay</p>
          <input
          disabled
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            className="w-full bg-slate-700 text-white text-2xl font-bold text-center px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <p className="text-slate-400 text-xs">Rm ${amount}</p>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mb-4"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm text-center ${
              message.includes("successful") ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </main>
  )
}
