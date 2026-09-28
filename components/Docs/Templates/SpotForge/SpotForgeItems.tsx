"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Check,
    Code2,
    CreditCard,
    Database,
    ExternalLink,
    Globe,
    Megaphone,
    MousePointerClick,
    Rocket,
    ShieldCheck,
    ShoppingCart,
    Sparkles,
    Store,
    Users,
} from "lucide-react";


import { LinearRevealFont, manrope } from "@/lib/fonts";
import OrbitBorder from "../../Components/Orbit-Border/OrbitBorder";
import AnimatedGradientBadge from "@/components/AnimatedGradientBadge";
import LinearReveal from "@/components/LinearReveal";
import Separator from "../../Separator";
import Coupon from "../Taskforge/Coupon";

import RankforgeGif from "@/images/spotforge.gif";
import { useTheme } from "@/components/ThemeProvider";
import SpotForgeCoupon from "./SpotForgeCoupon";

const lightRingColors = ["#141414,#ffffff, #ffffff, #141414"];
const darkRingColors = ["#141414, #000000, #ffffff, #141414, #141414"];

// import Coupon from "./Coupon";

function SpotForgeItems() {
    const useCases = [
        {
            icon: Megaphone,
            title: "Advertising Marketplaces",
            description:
                "Create a marketplace where brands can discover and purchase advertising positions.",
        },
        {
            icon: Store,
            title: "Product Advertising",
            description:
                "Sell advertising spots on products, product mockups, digital displays, or anything people are talking about.",
        },
        {
            icon: Globe,
            title: "Trending Products",
            description:
                "Turn trending products and topics into advertising inventory that brands can compete for.",
        },
        {
            icon: Users,
            title: "Brand Promotion",
            description:
                "Give brands a simple way to get their logo, name, or promotion displayed in front of an audience.",
        },
        {
            icon: MousePointerClick,
            title: "Paid Placement Platforms",
            description:
                "Build a platform where businesses pay to secure specific positions instead of buying generic ad space.",
        },
        {
            icon: Sparkles,
            title: "Your Own Idea",
            description:
                "Customize the source code and turn the foundation into your own advertising marketplace.",
        },
    ];

    const includedFeatures = [
        {
            icon: Code2,
            title: "Complete Next.js Source Code",
            description:
                "Get the complete source code and customize the product however you want.",
        },
        {
            icon: Megaphone,
            title: "Advertising Spot System",
            description:
                "Create and manage individual advertising positions across your platform.",
        },
        {
            icon: CreditCard,
            title: "Payment Integration",
            description:
                "Built-in Dodo Payments integration for handling paid advertising purchases.",
        },
        {
            icon: Database,
            title: "Firebase Integration",
            description:
                "Firebase-powered data and application infrastructure already integrated.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Payment Flow",
            description:
                "Includes payment processing and webhook handling for completed purchases.",
        },
        {
            icon: Store,
            title: "Product & Spot Management",
            description:
                "Manage the products, trends, and advertising inventory displayed on your platform.",
        },
        {
            icon: Users,
            title: "Brand Management",
            description:
                "Allow advertising customers to submit the information needed for their placement.",
        },
        {
            icon: Globe,
            title: "Public Advertising Pages",
            description:
                "Display available and purchased advertising spots through public-facing pages.",
        },
        {
            icon: Rocket,
            title: "Production-Ready Foundation",
            description:
                "A working foundation you can customize, deploy, and turn into your own product.",
        },
        {
            icon: Sparkles,
            title: "Responsive UI",
            description:
                "Responsive interface designed to work across desktop and mobile screens.",
        },
        {
            icon: ShieldCheck,
            title: "Private GitHub Access",
            description:
                "Source code is delivered through private GitHub repository access after purchase.",
        },
        {
            icon: Code2,
            title: "Built for Customization",
            description:
                "Change the products, advertising model, branding, pricing, and business logic.",
        },
    ];

    const setupSteps = [
        {
            number: "01",
            title: "Complete the payment",
            description:
                "Purchase SpotForge and get access to the private GitHub repository.",
        },
        {
            number: "02",
            title: "Clone the repository",
            description:
                "Accept the GitHub invitation and clone the project. Open it in VS Code.",
        },
        {
            number: "03",
            title: "Install dependencies",
            description:
                "Run the following command in your project directory.",
            code: "npm install",
        },
        {
            number: "04",
            title: "Configure your environment",
            description:
                "Add your Firebase, Dodo Payments, and application credentials to `.env.local`.",
        },
        {
            number: "05",
            title: "You're ready to launch",
            description:
                "That's it. Customize the product, connect your services, and turn the foundation into your own business.",
        },
    ];

    const handleSpotforgeCheckout = async () => {
        try {
            const response = await fetch("/api/checkout/spotforge", {
                method: "POST",
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to start checkout.");
            }

            if (!data.checkout_url) {
                throw new Error("Checkout URL was not returned.");
            }

            window.location.href = data.checkout_url;
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Unable to start checkout. Please try again.");
        }
    };


    const { theme } = useTheme();

    const ringColors =
        theme === "dark" ? darkRingColors : lightRingColors;

    return (
        <div className={`${manrope.className} px-3 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-10`}
        >
            {/* Hero */}
            {/*HERO */}

            <div className="space-y-8">
                {/* Title */}
                <div className="space-y-2">
                    <LinearReveal
                        as="h1"
                        className={`${LinearRevealFont.className} font-[700] text-5xl md:text-7xl leading-none tracking-tight text-zinc-900 dark:text-white`}
                        Text="SpotForge"
                    />

                    <p className="text-[15px] text-zinc-700 dark:text-zinc-100">
                        Advertising Marketplace SaaS Template
                    </p>
                </div>

                {/* Product Preview */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-[28px] border border-[#0d7525]/20 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-2">
                        <Image
                            src={RankforgeGif}
                            priority
                            width={1600}
                            height={1000}
                            alt="RankForge competitive leaderboard SaaS template preview"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>

            {/*DESCRIPTION */}
            <p className="max-w-5xl text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                A production-ready Next.js SaaS codebase for building advertising marketplaces where brands can purchase positions on products, trends, digital displays, and anything else you want to monetize.
                <br />
                <br />
                I'm seing everyday on x that founders are launching advertising marketplaces. <br /><br />

                {" "}
                <Link
                    href="https://x.com/divvsaxena"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    Divv Saxena ↗
                </Link>{" "}
                generated $534 from{" "}
                <Link
                    href="https://brand.divvsaxena.com/brand"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    brand.divvsaxena.com ↗
                </Link>
                , where he sold ad spot on his t-shirt for next 30 days.{" "}
                <br />

                {" "}
                <Link
                    href="https://x.com/VynseDev"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    Vincent ↗
                </Link>{" "}
                also  generated $9000 from{" "}
                <Link
                    href="https://brandmymac.com/"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    brandmymac.com ↗
                </Link>
                , where he sold ad spot on his macbook..{" "}
                <br />
                {" "}
                <Link
                    href="https://x.com/marclou"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    Marc Lou ↗
                </Link>{" "}
                also generated $112K from{" "}
                <Link
                    href="https://hyrox.marclou.com/"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    hyrox.marclou.com ↗
                </Link>
                , where he sold ad spot on his body for HYROX race.{" "}
                <br />
                <br />
                I built{" "}
                <Link
                    href="https://yourbrand.lol/"
                    target="_blank"
                    className="hover:underline dark:hover:text-white"
                >
                    yourbrand.lol ↗
                </Link>{" "}
                using this same foundation and was able to launch it in just a few hours and listed my own product, React Vibe. Just to give you the proof that it works.
                <br />
                <br />
                Building the mechanics behind these products from scratch takes time. So I built SpotForge to give you the source code to launch your own — faster. <br /> <br />
                Grab the source code now!
            </p>

            {/* PURCHASE */}

            <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-4">
                    <OrbitBorder
                        as="div"
                        rotate={0}
                        padding={2}
                        rounded={50}
                        className={`${theme === "dark"
                            ? "bg-[#141414]"
                            : "bg-white"
                            } rounded-full p-1 text-white cursor-pointer`}
                        RingColors={ringColors}
                        style={{
                            boxShadow: `
                                0px 12px 40px rgba(60, 80, 180, 0.08),
                                0px 20px 60px rgba(0, 0, 0, 0.05)
                            `,
                        }}
                    >
                        <button
                            type="button"
                            onClick={handleSpotforgeCheckout}
                            className="cursor-pointer"
                        >
                            <AnimatedGradientBadge
                                duration={3}
                                rotationDuration={7}
                                gradients={[
                                    ["#021a07", "#1B3017", "#233D1C"],
                                    ["#000000", "#070707", "#294626"],
                                    ["#021a07", "#1A3119", "#244022"],
                                    ["#000000", "#23381F", "#070707"],
                                    ["#021a07", "#070707", "#284224"],
                                ]}
                                className="flex items-center gap-3 justify-center rounded-full px-3 py-3"
                            >
                                <span className="text-[14px] text-white whitespace-nowrap">
                                    Source Code — $99
                                </span>

                                <ShoppingCart
                                    size={17}
                                    className="fill-white"
                                />
                            </AnimatedGradientBadge>
                        </button>
                    </OrbitBorder>

                    <Link
                        href="https://yourbrand.lol"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            className="h-14 px-8 rounded-full border border-zinc-300 dark:border-[#323232] hover:border-zinc-400 dark:hover:border-[#464444] hover:bg-zinc-100 dark:hover:bg-[#0E0D0D] transition-all text-zinc-900 dark:text-white flex items-center gap-2 cursor-pointer"
                        >
                            Live Preview
                            <ExternalLink size={17} />
                        </button>
                    </Link>
                </div>

                {/* Trust */}
                <p className="text-[12px] font-[500] text-zinc-500 flex items-center gap-1">
                    <ShieldCheck size={15} />
                    Secure payment. Instant GitHub access.
                </p>

                {/* Coupon */}
                <SpotForgeCoupon />
            </div>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            {/* What can you build */}
            <section className="py-0">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium text-neutral-500">
                        Use cases
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
                        What can you build with SpotForge?
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                        SpotForge gives you the foundation. You decide what gets
                        listed, what the advertising spots represent, and how you
                        want to monetize them.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900">
                                    <Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                                </div>

                                <h3 className="mt-5 text-base font-semibold text-black dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            {/* Steps */}
            <section className="py-0">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium text-neutral-500">
                        Setup
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
                        Get started in minutes
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                        You don't need to build the foundation from scratch.
                        Get the repository, configure your credentials, and
                        start customizing.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {setupSteps.map((step) => (
                        <div
                            key={step.number}
                            className="flex gap-5 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
                        >
                            <span className="shrink-0 text-sm font-semibold text-neutral-400">
                                {step.number}
                            </span>

                            <div>
                                <h3 className="text-base font-semibold text-black dark:text-white">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                                    {step.description}
                                </p>

                                {step.code && (
                                    <div className="mt-4 rounded-lg bg-neutral-100 px-4 py-3 font-mono text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                                        {step.code}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            {/* What's Included */}
            <section className="">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium text-neutral-500">
                        What's included
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
                        Everything you need to start customizing
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                        You're getting the actual source code behind the
                        product, not just a static UI template.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {includedFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900">
                                        <Icon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                                    </div>

                                    <h3 className="text-sm font-semibold text-black dark:text-white">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Separator />

            {/* Final CTA */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900">
                    <Rocket className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                    Ready to build your own advertising platform?
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                    Skip the initial development work. Get SpotForge, customize
                    the source code, and turn your advertising idea into a
                    working product.
                </p>

                <button
                    onClick={handleSpotforgeCheckout}
                    type="button"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] dark:bg-white dark:text-black"
                >
                    Get SpotForge
                    <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-500">
                    <Check className="h-3.5 w-3.5" />
                    Complete source code
                    <span>·</span>
                    Private GitHub access
                    <span>·</span>
                    One-time purchase
                </div>
            </section>
        </div>
    );
}

export default SpotForgeItems;