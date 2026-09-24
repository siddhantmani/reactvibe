import Link from "next/link";

export default function CheckoutSuccessPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="w-full max-w-md text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-2xl">
                    ✓
                </div>

                <h1 className="text-3xl font-semibold tracking-tight">
                    Payment successful
                </h1>

                <p className="mt-3 text-muted-foreground">
                    Your payment has been confirmed. Your GitHub access will be delivered to the email used during checkout.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                    Back to React Vibe
                </Link>
            </div>
        </main>
    );
}