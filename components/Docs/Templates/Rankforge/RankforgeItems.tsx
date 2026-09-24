"use client";

import LinearReveal from "@/components/LinearReveal";
import { manrope } from "@/lib/fonts";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import React from "react";

import RankforgeGif from "@/images/rankforge.gif";

import OrbitBorder from "../../Components/Orbit-Border/OrbitBorder";
import AnimatedGradientBadge from "@/components/AnimatedGradientBadge";

import {
    ArrowRight,
    BadgeCheck,
    Check,
    Code2,
    ExternalLink,
    FileCode2,
    Github,
    LayoutDashboard,
    LockKeyhole,
    ShieldCheck,
    ShoppingCart,
    Sparkles,
    Trophy,
    UserRound,
    WalletCards,
    Wrench,
    Zap,
} from "lucide-react";

import Link from "next/link";
import Separator from "../../Separator";
import { useTheme } from "@/components/ThemeProvider";
import RankforgeCoupon from "./RankforgeCoupon";

const lightRingColors = ["#141414,#ffffff, #ffffff, #141414"];
const darkRingColors = ["#141414, #000000, #ffffff, #141414, #141414"];

const LinearRevealFont = Bricolage_Grotesque({
    weight: "600",
    subsets: ["vietnamese"],
});

const useCases = [
    {
        icon: Trophy,
        title: "Product Launch Boards",
        description:
            "Let users submit products and compete for top positions through a public ranking system.",
    },
    {
        icon: Sparkles,
        title: "AI Tool Rankings",
        description:
            "Create competitive rankings for AI tools, products, and services.",
    },
    {
        icon: LayoutDashboard,
        title: "Startup Leaderboards",
        description:
            "Build public startup rankings where products compete for visibility and position.",
    },
    {
        icon: WalletCards,
        title: "Niche Directories",
        description:
            "Create industry-specific directories with paid placements and competitive rankings.",
    },
    {
        icon: UserRound,
        title: "Community Rankings",
        description:
            "Build competitive boards for creators, developers, brands, communities, or any niche.",
    },
    {
        icon: Code2,
        title: "Your Own Idea",
        description:
            "Customize the source code and turn the foundation into your own competitive platform.",
    },
];

const includedFeatures = [
    {
        icon: FileCode2,
        title: "Complete Next.js Source Code",
        description:
            "Get the complete production-ready codebase instead of starting from an empty project.",
    },
    {
        icon: Trophy,
        title: "Competitive Bidding System",
        description:
            "Users can compete for leaderboard positions through a built-in bidding system.",
    },
    {
        icon: ArrowRight,
        title: "Automatic Outbid Logic",
        description:
            "Handle position changes and competitive bids with the existing ranking logic.",
    },
    {
        icon: LayoutDashboard,
        title: "Leaderboard & Position Management",
        description:
            "Manage rankings, positions, listings, categories, and competitive placement.",
    },
    {
        icon: BadgeCheck,
        title: "Product Submission & Listings",
        description:
            "Give users a structured flow to submit products and manage their listings.",
    },
    {
        icon: WalletCards,
        title: "Dodo Payments Integration",
        description:
            "Payment infrastructure is already integrated for handling competitive transactions.",
    },

    {
        icon: ShieldCheck,
        title: "Responsive UI",
        description:
            "A responsive interface designed to work across desktop, tablet, and mobile.",
    },
    {
        icon: Github,
        title: "Private GitHub Access",
        description:
            "Get access to the private RankForge repository and pull the source code directly.",
    },
    {
        icon: LockKeyhole,
        title: "Production-Ready Foundation",
        description:
            "Start with an existing application architecture instead of rebuilding the core system.",
    },
    {
        icon: Zap,
        title: "Built for Customization",
        description:
            "Replace the branding, categories, rules, and business model to create your own product.",
    },
];

const setupSteps = [
    {
        number: "01",
        title: "Complete the payment",
        description:
            "Complete your purchase to get access to the private RankForge GitHub repository.",
    },
    {
        number: "02",
        title: "Clone the repository",
        description:
            "Get access to the private GitHub repository, then clone and open RankForge in your IDE, such as VS Code.",
    },
    {
        number: "03",
        title: "Install dependencies",
        description: (
            <>
                Open the project in your terminal and run{" "}
                <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 font-mono text-[12px] text-zinc-900 dark:text-zinc-200">
                    npm install
                </code>{" "}
                to install everything RankForge needs.
            </>
        ),
    },
    {
        number: "04",
        title: "Configure your environment",
        description: (
            <>
                Add your Firebase, Dodo Payments, and other required
                credentials to your{" "}
                <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 font-mono text-[12px] text-zinc-900 dark:text-zinc-200">
                    .env.local
                </code>{" "}
                file.
            </>
        ),
    },
    {
        number: "05",
        title: "You're ready to launch",
        description:
            "That's it. Your project is ready to launch. It took me 3–4 days to build — you can get it running in just 2–3 minutes. 💀",
    },
];

function RankforgeItems() {
    const { theme } = useTheme();

    const ringColors =
        theme === "dark" ? darkRingColors : lightRingColors;

    const handleRankforgeCheckout = async () => {
        try {
            const response = await fetch("/api/checkout/rankforge", {
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


    return (
        <div
            className={`${manrope.className} px-3 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-10`}
        >
            {/*HERO */}

            <div className="space-y-8">
                {/* Title */}
                <div className="space-y-2">
                    <LinearReveal
                        as="h1"
                        className={`${LinearRevealFont.className} text-5xl md:text-7xl leading-none tracking-tight text-zinc-900 dark:text-white`}
                        Text="RankForge"
                    />

                    <p className="text-[15px] text-zinc-700 dark:text-zinc-100">
                        Competitive Leaderboard SaaS Template
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
                A production-ready Next.js SaaS template for building competitive leaderboards, paid ranking platforms, launch boards, directories, and niche competition products. Customize the source code and turn the foundation into your own product.
                <br />
                <br />
                Competitive leaderboard products have recently shown how powerful this model can be.{" "}
                <Link
                    href="https://outbid.lol/"
                    target="_blank"
                    className="hover:underline hover:text-white"
                >
                    outbid.lol ↗
                </Link>{" "}
                is one of the most notable examples, generating over $200K in reported
                bid revenue within its first week.{" "}
                <Link
                    href="https://x.com/marclou"
                    target="_blank"
                    className="hover:underline hover:text-white"
                >
                    Marc Lou ↗
                </Link>{" "}
                also recently generated $112K from{" "}
                <Link
                    href="https://hyrox.marclou.com/"
                    target="_blank"
                    className="hover:underline hover:text-white"
                >
                    hyrox.marclou.com ↗
                </Link>
                , a competitive sponsorship platform built around his HYROX race.
                <br />
                <br />
                I built{" "}
                <Link
                    href="https://yourbrand.lol/"
                    target="_blank"
                    className="hover:underline hover:text-white"
                >
                    yourbrand.lol ↗
                </Link>{" "}
                using this same foundation and was able to launch it in just a few hours.
                <br />
                <br />
                RankForge gives you the complete source code and a production-ready
                foundation to build your own competitive platform, adapt the mechanics,
                and turn your idea into a working product.
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
                            onClick={handleRankforgeCheckout}
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
                        href="https://whois1.lol"
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
                <RankforgeCoupon />
            </div>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            {/* USE CASES */}

            <section className="space-y-7">
                <div>
                    <span className="text-xs font-[500] uppercase tracking-widest text-zinc-500">
                        GET STARTED
                    </span>

                    <h2 className="mt-2 text-2xl font-[500] text-zinc-900 dark:text-white">
                        Steps to use
                    </h2>

                    <p className="mt-2 max-w-3xl text-[14px] leading-6 text-zinc-600 dark:text-zinc-400">
                        Get the complete RankForge source code and set up your own
                        competitive platform in just a few steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">

                    {setupSteps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`relative rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 min-h-[150px] ${index === 4
                                ? "md:col-span-2 xl:col-span-1"
                                : ""
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-[500] text-zinc-500">
                                    {step.number}
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500">
                                    {index + 1}
                                </span>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-[15px] font-[500] text-zinc-900 dark:text-white">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-[13px] leading-5 text-zinc-600 dark:text-zinc-400">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            <section className="space-y-7">
                <div>
                    <h2 className="text-2xl font-[500] text-zinc-900 dark:text-white">
                        What can you build with RankForge?
                    </h2>

                    <p className="mt-2 max-w-3xl text-[14px] leading-6 text-zinc-600 dark:text-zinc-400">
                        RankForge gives you the foundation for building
                        competitive ranking products across different
                        industries, communities, and business models.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {useCases.map((useCase) => {
                        const Icon = useCase.icon;

                        return (
                            <div
                                key={useCase.title}
                                className="rounded-3xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#0c0c0c] p-6 transition-all duration-300 hover:border-[#0d7525]/30 dark:hover:border-[#0d7525]/20 hover:-translate-y-1"
                            >
                                <div className="space-y-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                                        <Icon
                                            size={19}
                                            className="text-zinc-900 dark:text-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-[17px] font-[500] text-zinc-900 dark:text-white">
                                            {useCase.title}
                                        </h3>

                                        <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            {/* WHAT'S INCLUDED */}

            <section className="space-y-7">
                <div>
                    <h2 className="text-2xl font-[500] text-zinc-900 dark:text-white">
                        What&apos;s Included
                    </h2>

                    <p className="mt-2 max-w-3xl text-[14px] leading-6 text-zinc-600 dark:text-zinc-400">
                        Everything you need to take the existing RankForge
                        foundation, customize it, and turn it into your own
                        competitive platform.
                    </p>
                </div>

                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {includedFeatures.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="flex items-start gap-4 p-5 transition-colors hover:bg-zinc-50 dark:hover:bg-[#0c0c0c]"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                                        <Icon
                                            size={18}
                                            className="text-zinc-900 dark:text-white"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-[15px] font-[500] text-zinc-900 dark:text-white">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-1 text-[13px] leading-6 text-zinc-600 dark:text-zinc-400">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <Check
                                        size={17}
                                        className="ml-auto mt-1 shrink-0 text-green-500"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Separator
                direction="horizontal"
                className="bg-black/10 dark:bg-white/10"
            />

            {/* FINAL CTA */}

            <div className="dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 md:p-6">
                <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                    {/* Left */}
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10">
                            <Zap
                                size={22}
                                className="fill-zinc-900 dark:fill-white"
                            />
                        </div>

                        <div>
                            <h2 className="font-[600] text-[20px] text-zinc-900 dark:text-white">
                                Ready to build your own competitive platform?
                            </h2>

                            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-zinc-600 dark:text-zinc-400">
                                Skip months of development. Get the
                                production-ready source code behind a
                                competitive leaderboard platform and
                                customize it into your own product.
                            </p>

                            <RankforgeCoupon />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-wrap items-center gap-4 shrink-0">
                        <OrbitBorder
                            as="div"
                            rotate={0}
                            padding={1}
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
                                onClick={handleRankforgeCheckout}
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
                            href="https://whois1.lol"
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
                </div>
            </div>
        </div>
    );
}

export default RankforgeItems;