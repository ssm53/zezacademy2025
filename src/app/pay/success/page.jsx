import Stripe from "stripe";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function SuccessPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  // Block if no session_id in query
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

  // Block if payment not completed
  if (session.payment_status !== "paid") {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1b3d] text-white">
      <svg
        className="w-16 h-16 text-green-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p className="mt-2 text-center max-w-md">
        Thank you for your payment.
        You are now enrolled in our Full Stack & AI Coding Bootcamp.
      </p>
      <a
        href="/"
        className="mt-4 bg-blue-500 px-6 py-2 rounded text-white"
      >
        Go to Homepage
      </a>
    </div>
  );
}
