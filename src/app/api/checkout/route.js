import Stripe from "stripe";

// Use different keys for test and live environments
const isProduction = process.env.NODE_ENV === "production";
const stripeSecretKey = isProduction
  ? process.env.STRIPE_LIVE_SECRET_KEY
  : process.env.STRIPE_TEST_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error(
    `Missing Stripe secret key for ${isProduction ? "production" : "development"} environment.`
  );
}

// Initialize Stripe client (set API version via env if needed)
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: process.env.STRIPE_API_VERSION || undefined,
});

const amountInMajor = 1000; // RM 1000
const currency = "aud";
const unitAmount = Math.round(amountInMajor * 100);

export async function POST(request) {
  try {
    const idempotencyKey =
      request.headers.get("x-idempotency-key") ||
      `checkout_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    const session = await stripe.checkout.sessions.create(
      {
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency,
              product_data: {
                name:  "One-time Payment",
              },
              unit_amount: unitAmount,
            },
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pay/failed?session_id={CHECKOUT_SESSION_ID}`,
      },
      { idempotencyKey }
    );

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Stripe Checkout Error:", err);
    const safeMessage = err?.message ?? "Internal server error";
    return new Response(JSON.stringify({ error: safeMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
