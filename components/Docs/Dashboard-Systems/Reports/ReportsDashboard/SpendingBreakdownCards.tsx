"use client";

import { motion } from "framer-motion";

import React from "react";
import {
    ArrowDown,
    ArrowUp,
    ShoppingBag,
    UtensilsCrossed,
    Car,
    Clapperboard,
} from "lucide-react";

import { Manrope } from "next/font/google";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});

const categories = [
    {
        title: "Dining Out",
        percentage: "28%",
        amount: "-$120.50",
        positive: false,
        icon: UtensilsCrossed,
        iconBg: "bg-[#F97316]/10",
        iconColor: "text-[#EA580C]",
        glow: "bg-[#F97316]/[0.05]",
    },
    {
        title: "Transport",
        percentage: "12%",
        amount: "-$45.20",
        positive: true,
        icon: Car,
        iconBg: "bg-[#6366F1]/10",
        iconColor: "text-[#4F46E5]",
        glow: "bg-[#6366F1]/[0.05]",
    },
    {
        title: "Shopping",
        percentage: "18%",
        amount: "-$75.30",
        positive: false,
        icon: ShoppingBag,
        iconBg: "bg-[#EC4899]/10",
        iconColor: "text-[#DB2777]",
        glow: "bg-[#EC4899]/[0.05]",
    },
    {
        title: "Entertainment",
        percentage: "8%",
        amount: "-$22.10",
        positive: true,
        icon: Clapperboard,
        iconBg: "bg-[#84CC16]/10",
        iconColor: "text-[#65A30D]",
        glow: "bg-[#84CC16]/[0.05]",
    },
];

function SpendingBreakdownCards() {

    return (

        <div
            className="relative overflow-hidden rounded-[18px] border border-black/[0.06] bg-white dark:bg-[#070606] dark:border-white/10 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)]"
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.05),_transparent_40%)]" />

            {/* Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#8B5CF6]/[0.04] blur-3xl" />

            <div className="relative z-10">

                {/* Heading */}
                <div className="space-y-1">

                    <h1
                        className={`${boldFont.className} text-[15px] tracking-[-0.04em] text-[#111111] dark:text-white`}
                    >
                        Spending Breakdown
                    </h1>

                    <p
                        className={`${boldFont.className} text-[11px] text-black/45 dark:text-white/60`}
                    >
                        Where your money went this month.
                    </p>

                </div>

                {/* Categories */}
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

                    {categories.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.06,
                                }}
                                className="group relative overflow-hidden rounded-[16px] border border-black/[0.06] dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.03] p-4 transition-all duration-300 hover:bg-black/[0.025] dark:hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-none"
                            >

                                {/* Card Glow */}
                                <div
                                    className={`absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-70 ${item.glow}`}
                                />

                                <div className="relative z-10 flex items-center justify-between">

                                    {/* Left */}
                                    <div className="flex items-center gap-4">

                                        {/* Icon */}
                                        <div
                                            className={`flex h-11 w-11 items-center justify-center rounded-[12px] border border-black/[0.05] dark:border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.03)] dark:shadow-none ${item.iconBg}`}
                                        >

                                            <Icon
                                                size={18}
                                                className={item.iconColor}
                                                strokeWidth={2.2}
                                            />

                                        </div>

                                        {/* Text */}
                                        <div>

                                            <h3
                                                className={`${boldFont.className} text-[12px] text-[#111111] dark:text-white`}
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className={`${boldFont.className} mt-1 text-[10px] text-black/40 dark:text-white/60`}
                                            >
                                                Monthly category spending
                                            </p>

                                        </div>

                                    </div>

                                    {/* Right */}
                                    <div className="text-right">

                                        {/* Percentage */}
                                        <div
                                            className={`flex items-center justify-end gap-1 text-[10px] font-semibold ${item.positive
                                                ? "text-[#16A34A]"
                                                : "text-[#DC2626]"
                                                }`}
                                        >

                                            <div
                                                className={`flex h-5 w-5 items-center justify-center rounded-full ${item.positive
                                                    ? "bg-[#22C55E]/10"
                                                    : "bg-[#EF4444]/10"
                                                    }`}
                                            >

                                                {item.positive ? (

                                                    <ArrowDown
                                                        size={11}
                                                        strokeWidth={2.8}
                                                    />

                                                ) : (

                                                    <ArrowUp
                                                        size={11}
                                                        strokeWidth={2.8}
                                                    />

                                                )}

                                            </div>

                                            {item.percentage}

                                        </div>

                                        {/* Amount */}
                                        <p
                                            className={`${boldFont.className} mt-3 text-[12px] ${item.positive
                                                ? "text-[#16A34A]"
                                                : "text-[#DC2626]"
                                                }`}
                                        >
                                            {item.amount}
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        );
                    })}

                </div>

            </div>

        </div>
    );
}

export default SpendingBreakdownCards;