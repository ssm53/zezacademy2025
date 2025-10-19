import Stripe from "stripe";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function FailedPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  // Block if no session_id
  if (!sessionId) {
    redirect("/");
  }

  // Retrieve session from Stripe
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (error) {
    console.error("Stripe session retrieval failed:", error);
    redirect("/");
  }

  // If payment was actually successful, don’t show failed page
  if (session.payment_status === "paid") {
    redirect("/success?session_id=" + sessionId);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1b3d] text-white">
      <svg
        className="w-16 h-16 text-red-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      <h1 className="text-2xl font-bold">Payment Failed</h1>
      <p className="mt-2 text-center max-w-md">
        Your payment could not be processed.
        Please try again or contact our support team.
      </p>
      <a
        href="/pay"
        className="mt-4 bg-red-500 px-6 py-2 rounded text-white"
      >
        Try Again
      </a>
    </div>
  );
}
