"use client"

const lightRingColors = ["#141414,#ffffff, #ffffff, #141414"];
const darkRingColors = ["#141414, #000000, #ffffff, #141414, #141414"];

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';

import TaskforgeGif from "@/images/taskforge1.gif"


import { manrope } from '@/lib/fonts';
import Separator from '../../Separator';
import AnimatedGradientBadge from '@/components/AnimatedGradientBadge';
import { ExternalLink, ShieldCheck, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import {
    BadgeCheck,
    Code2,
    Laptop,
    Wrench,
    LayoutDashboard,
    Boxes,
    Component,
    Zap
} from "lucide-react";
import Coupon from './Coupon';
import OrbitBorder from '../../Components/Orbit-Border/OrbitBorder';
import { useTheme } from '@/components/ThemeProvider';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '600',
    subsets: ['vietnamese']
});

function TaskforgeItems() {

    const { theme } = useTheme();

    const ringColors =
        theme === "dark" ? darkRingColors : lightRingColors;

    const handleTaskforgeCheckout = async () => {
        try {
            const response = await fetch("/api/checkout/taskforge", {
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


    const productDetails = [
        {
            icon: BadgeCheck,
            iconSize: 14,
            label: "Commercial Use",
            value: "Unlimited personal & client projects",
        },
        {
            icon: Code2,
            iconSize: 14,
            label: "Developer Experience",
            value: "Clean, modular architecture",
        },
        {
            icon: Wrench,
            iconSize: 14,
            label: "Customization",
            value: "Easy to extend & modify",
        },
        {
            icon: Laptop,
            iconSize: 14,
            label: "Production Ready",
            value: "Built for real SaaS products",
        },
        {
            icon: ShieldCheck,
            iconSize: 18,
            label: "Mobile Optimized",
            value: "Desktop, tablet & mobile",
            labelClassName: "font-medium",
        },
    ];

    const features = [
        {
            icon: Code2,
            title: "Complete Source Code",
            description:
                "Get the complete production-ready Next.js source code with TypeScript, Tailwind CSS, and all included dashboard functionality.",
        },
        {
            icon: LayoutDashboard,
            title: "7 Complete Dashboards",
            description:
                "Finance Overview, Accounts, Transactions, Budgets, Investments, Integrations, and Reports — ready to customize and extend.",
        },
        {
            icon: Boxes,
            title: "35+ Reusable UI Blocks",
            description:
                "Professionally designed cards, tables, charts, lists, and sections that help you build new dashboard pages faster.",
        },
        {
            icon: Component,
            title: "15+ Production-Ready Components",
            description:
                "Reusable React components designed for real applications and easy customization.",
        },
        {
            icon: Laptop,
            title: "Responsive & Dark Mode",
            description:
                "Responsive layouts with built-in dark mode support for desktop, tablet, and mobile experiences.",
        },
        {
            icon: ShieldCheck,
            title: "Private GitHub Access",
            description:
                "Get access to the private GitHub repository after purchase and keep the complete source code under your own GitHub account.",
        },
    ];

    return (
        <div className='px-3 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>
            <div className="space-y-6">
                {/* Left */}
                <div className="space-y-8">
                    <div className='space-y-2'>
                        <LinearReveal
                            as={"h1"}
                            className={`${LinearRevealFont.className} text-5xl md:text-7xl leading-none tracking-tight text-zinc-900 dark:text-white`}
                            Text="TaskForge"
                        />

                        <p className={`${manrope.className} text-[15px] text-zinc-700 dark:text-zinc-100`}>
                            Finance Dashboard Template for Modern SaaS
                        </p>
                    </div>


                    <div className="relative">
                        {/* <div className="absolute inset-0 rounded-[32px] bg-[#0d7525] blur-3xl" /> */}

                        <div className="relative overflow-hidden rounded-[28px] border border-[#0d7525]/20 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-2">
                            <Image
                                src={TaskforgeGif}
                                priority
                                width={1600}
                                height={1000}
                                alt="Taskforge Preview"
                                className="w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                </div>

                {/* Right */}
                <div className="space-y-6">
                    <p className="max-w-5xl text-zinc-600 dark:text-zinc-400">
                        A premium finance dashboard template for modern SaaS products, fintech platforms, startups, and internal tools. Build polished financial interfaces faster with production-ready layouts, UI blocks, and reusable components.
                    </p>
                    {/* Stats */}
                    <div className={`${manrope.className} flex items-center gap-10`}>
                        <div>
                            <h3 className={`${manrope.className} text-5xl font-[500] text-zinc-900 dark:text-white`}>7</h3>
                            <p className="text-[14px] font-[500] text-zinc-500 dark:text-zinc-500 mt-1">
                                Dashboards
                            </p>
                        </div>
                        <Separator
                            direction='vertical'
                            className='bg-black/10 dark:bg-white/10 h-[45px]'
                        />
                        <div>
                            <h3 className={`${manrope.className} text-5xl font-[500] text-zinc-900 dark:text-white`}>35+</h3>
                            <p className="text-[14px] font-[500] text-zinc-500 dark:text-zinc-500 mt-1">
                                UI Blocks
                            </p>
                        </div>
                        <Separator
                            direction='vertical'
                            className='bg-black/10 dark:bg-white/10 h-[45px]'
                        />
                        <div>
                            <h3 className={`${manrope.className} text-5xl font-[500] text-zinc-900 dark:text-white`}>15+</h3>
                            <p className="text-[14px] font-[500] text-zinc-500 dark:text-zinc-500 mt-1">
                                Components
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='space-y-2'>
                        <div className={`${manrope.className} flex items-center gap-4`}>
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
                                    onClick={handleTaskforgeCheckout}
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

                            <Link href='https://taskforge-two-tau.vercel.app/' target='_blank'>
                                <button type='button' className="h-14 px-8 rounded-full border border-zinc-300 dark:border-[#323232] hover:border-zinc-400 dark:hover:border-[#464444] hover:bg-zinc-100 dark:hover:bg-[#0E0D0D] transition-all text-zinc-900 dark:text-white flex items-center gap-2 cursor-pointer">
                                    Live Preview
                                    <ExternalLink size={17} className='' />
                                </button>
                            </Link>
                        </div>

                        <p className={`${manrope.className} text-[12px] font-[500] text-zinc-500 dark:text-zinc-500 flex items-center gap-1`}>
                            <ShieldCheck size={15} />
                            Secure payment. Instant GitHub access.
                        </p>
                        <Coupon />
                    </div>
                </div>
            </div>
            <Separator
                direction='horizontal'
                className='bg-black/10 dark:bg-white/10 w-full'
            />
            <div className={`${manrope.className} grid lg:grid-cols-2 gap-10 lg:gap-16 items-start`}>
                {/* Left */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-[25px] font-[500] text-zinc-900 dark:text-white">
                            About Taskforge
                        </h2>

                        <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                            TaskForge is a premium finance management dashboard template built for
                            modern SaaS products, fintech platforms, startups, and internal tools. It includes
                            <span className="font-medium text-zinc-900 dark:text-white"> 7 complete dashboards</span>,
                            <span className="font-medium text-zinc-900 dark:text-white"> 35+ reusable UI blocks</span>, and
                            <span className="font-medium text-zinc-900 dark:text-white"> 15+ production-ready components</span>
                            to help you ship polished financial interfaces faster.
                        </p>

                        <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                            The template includes dedicated dashboards for
                            <span className="font-medium text-zinc-900 dark:text-white"> Finance Overview</span>,
                            <span className="font-medium text-zinc-900 dark:text-white"> Accounts</span>,
                            <span className="font-medium text-zinc-900 dark:text-white"> Transactions</span>,
                            <span className="font-medium text-zinc-900 dark:text-white"> Budgets</span>,
                            <span className="font-medium text-zinc-900 dark:text-white"> Investments</span>,
                            <span className="font-medium text-zinc-900 dark:text-white"> Integrations</span>, and
                            <span className="font-medium text-zinc-900 dark:text-white"> Reports</span>. Built with
                            reusable components, clean architecture, and fully responsive layouts,
                            TaskForge is easy to customize and ready for production.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "Next.js 15",
                            "TypeScript",
                            "Tailwind CSS",
                            "Framer Motion",
                            "Dark Mode",
                            "Responsive",
                            "Commercial Use",
                            "Production Ready",
                        ].map((item) => (
                            <span
                                key={item}
                                className={`${manrope.className} rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 px-4 py-2 text-[12px] text-zinc-700 dark:text-zinc-300`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Right */}
                <div className={`${manrope.className} rounded-3xl text-[13px] backdrop-blur border border-zinc-200 dark:border-[#323232]/15 p-4`}>

                    <div className="space-y-6">
                        {productDetails.map((item, index) => {
                            const Icon = item.icon;
                            const isLast = index === productDetails.length - 1;

                            return (
                                <div
                                    key={item.label}
                                    className={`flex items-center justify-between ${!isLast ? "border-b border-zinc-200 dark:border-zinc-800 pb-4" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={item.iconSize} className="text-zinc-500 dark:text-[#cfcdcd]" />
                                        <span
                                            className={`${item.labelClassName ?? "font-[400]"
                                                } text-zinc-900 dark:text-white`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>

                                    <span className="text-zinc-600 dark:text-zinc-400">{item.value}</span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            <Separator
                direction='horizontal'
                className='bg-black/10 dark:bg-white/10 w-full'
            />
            <div className={`${manrope.className} space-y-8`}>
                <div>
                    <h2 className="text-2xl font-[500] text-zinc-900 dark:text-white">
                        What's Included
                    </h2>

                    <p className="mt-2 text-[14px] text-zinc-600 dark:text-zinc-400">
                        Everything you need to launch modern finance management applications faster, from complete dashboards to reusable UI blocks and production-ready components.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-3xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#0c0c0c] p-6 transition-all duration-300 hover:border-[#0d7525]/30 dark:hover:border-[#0d7525]/10 hover:-translate-y-1"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                                            <Icon size={20} className="text-zinc-900 dark:text-white" />
                                        </div>

                                        <h3 className="text-[18px] font-[500] text-zinc-900 dark:text-white">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-600 dark:text-zinc-400 text-[13px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Separator
                direction='horizontal'
                className='bg-black/10 dark:bg-white/10 w-full'
            />
            <div className={`${manrope.className} dark:bg-[#0c0c0c] border rounded-2xl p-4 pb-10 py-4`}>

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
                            <h2 className="text-[20px] font-medium text-zinc-900 dark:text-white">
                                Ready to build with TaskForge?
                            </h2>

                            <p className="mt-2 text-[14px] leading-6 text-zinc-600 dark:text-zinc-400">
                                Skip weeks of dashboard development. Get instant access to production-ready finance dashboards, reusable UI blocks, and components built for modern applications.
                            </p>
                            <Coupon />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4 shrink-0">

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
                                onClick={handleTaskforgeCheckout}
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

                        <Link href='https://taskforge-two-tau.vercel.app/' target='_blank'>
                            <button type='button' className="h-14 px-8 rounded-full border border-zinc-300 dark:border-[#323232] hover:border-zinc-400 dark:hover:border-[#464444] hover:bg-zinc-100 dark:hover:bg-[#0E0D0D] transition-all text-zinc-900 dark:text-white flex items-center gap-2 cursor-pointer">
                                Live Preview
                                <ExternalLink size={17} className='' />
                            </button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskforgeItems