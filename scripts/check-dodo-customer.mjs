import DodoPayments from "dodopayments";

const email = process.argv[2];

if (!email) {
    console.error(
        "\nUsage:\nnode scripts/check-dodo-customer.mjs customer@email.com\n"
    );
    process.exit(1);
}

const apiKey = process.env.DODO_PAYMENTS_API_KEY;

if (!apiKey) {
    console.error("❌ DODO_PAYMENTS_API_KEY is missing");
    process.exit(1);
}

const client = new DodoPayments({
    bearerToken: apiKey,
});

console.log(`\nLooking up customer: ${email}\n`);

const customers = await client.customers.list({
    email,
});

const customer = customers.items?.[0];

if (!customer) {
    console.error("❌ Customer not found");
    process.exit(1);
}

console.log("Customer:");
console.log({
    id: customer.customer_id,
    email: customer.email,
    name: customer.name,
});

console.log("\nFetching entitlement grants...\n");

const grants = await client.customers.listEntitlementGrants(
    customer.customer_id,
    {
        integration_type: "github",
        page_size: 100,
    }
);

for (const grant of grants.items ?? []) {
    console.log(
        JSON.stringify(
            {
                id: grant.id,
                status: grant.status,
                entitlement_id: grant.entitlement_id,
                customer_id: grant.customer_id,
                payment_id: grant.payment_id,
                created_at: grant.created_at,
                updated_at: grant.updated_at,
                delivered_at: grant.delivered_at,
                oauth_url: grant.oauth_url,
                oauth_expires_at: grant.oauth_expires_at,
                error_code: grant.error_code,
                error_message: grant.error_message,
                metadata: grant.metadata,
            },
            null,
            2
        )
    );
}