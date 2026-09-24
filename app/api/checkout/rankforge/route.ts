import { NextResponse } from "next/server";

import DodoPayments from "dodopayments";

const client = new DodoPayments({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
});

export async function POST() {
    try {
        const productId = process.env.DODO_RANKFORGE_PRODUCT_ID;

        if (!productId) {
            return NextResponse.json(
                { error: "Dodo RankForge product ID is not configured." },
                { status: 500 }
            );
        }

        const session = await client.checkoutSessions.create({
            product_cart: [
                {
                    product_id: productId,
                    quantity: 1,
                },
            ],

            feature_flags: {
                allow_discount_code: true,
            },

            return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,

            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/docs/templates/rankforge`,
        });

        return NextResponse.json({
            checkout_url: session.checkout_url,
        });
    } catch (error) {
        console.error("Dodo checkout error:", error);

        return NextResponse.json(
            { error: "Unable to create checkout session." },
            { status: 500 }
        );
    }
}