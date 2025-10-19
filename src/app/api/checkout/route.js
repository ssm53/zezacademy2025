import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const session = await stripe.checkout.sessions.create({
       payment_method_types: ["card", "fpx", "grabpay", "alipay"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "myr", // Malaysian Ringgit
            product_data: {
              name: "One-time Payment",
            },
            unit_amount: 1000 * 100, // RM 1000 in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pay/failed?session_id={CHECKOUT_SESSION_ID}`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Stripe Checkout Error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
