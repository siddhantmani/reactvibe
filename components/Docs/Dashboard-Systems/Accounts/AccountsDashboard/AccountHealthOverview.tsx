"use client"

import React from "react"
import {
    Check,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});

const expenses = [
    {
        title: "Housing",
        percentage: 30,
        amount: "$1,872",
        color: "#007a4d",
    },
    {
        title: "Food",
        percentage: 20,
        amount: "$936",
        color: "#47A44E",
    },
    {
        title: "Transport",
        percentage: 15,
        amount: "$702",
        color: "#85c977",
    },
    {
        title: "Shopping",
        percentage: 10,
        amount: "$468",
        color: "#47A44E",
    },
    {
        title: "Entertainment",
        percentage: 15,
        amount: "$374",
        color: "#007a4d",
    },
    {
        title: "Entertainment",
        percentage: 15,
        amount: "$374",
        color: "#ececee",
    }
];

function AccountHealthOverview() {
    const radius = 95;
    const stroke = 42;
    const circumference = 2 * Math.PI * radius;

    const segments = expenses.reduce<{ item: typeof expenses[0]; dash: number; offset: number }[]>(
        (acc, item) => {
            const dash = (item.percentage / 100) * circumference;
            const prevOffset = acc.length > 0 ? acc[acc.length - 1].offset + acc[acc.length - 1].dash : 0;
            acc.push({ item, dash, offset: prevOffset });
            return acc;
        },
        []
    );
    return (
        <div className="rounded-[15px] border border-black/10 bg-white dark:bg-[#070606] dark:border-white/10 p-3 px-3 aspect-auto">

            {/* Top */}
            <div className="flex items-center justify-between">

                <h2 className={`${boldFont.className} text-[14px] font-semibold tracking-[-0.04em] text-[#111827] dark:text-white`}>
                    Account Health
                </h2>

                <button className={`${boldFont.className} flex items-center gap-2 text-[12px] font-semibold text-[#191a1a] dark:text-white/70 dark:hover:text-white transition-all duration-300 hover:gap-3`}>

                    View Report

                    <ArrowRight
                        size={12}
                        strokeWidth={2.5}
                    />

                </button>

            </div>

            {/* Content */}
            <div className="mt-8 flex items-center gap-10">

                {/* Progress Circle */}
                <div className="relative flex items-center justify-center">

                    <svg viewBox="0 0 280 280" className="-rotate-90 w-h-56 h-56">
                        {segments.map(({ item, dash, offset }, index) => (
                            <circle
                                key={index}
                                cx="140"
                                cy="140"
                                r={radius}
                                fill="transparent"
                                stroke={item.color}
                                strokeWidth={stroke}
                                strokeDasharray={`${dash} ${circumference}`}
                                strokeDashoffset={-offset}
                                strokeLinecap="butt"
                                className="transition-all duration-1000"
                            />
                        ))}
                    </svg>

                    {/* Center Text */}
                    <div className="absolute flex flex-col items-center">

                        <LinearReveal
                            as='h3'
                            Text="92%"
                            delay={0.2}
                            className={`${boldFont.className} text-[30px] tracking-[-0.04em] text-[#191a1a] dark:text-white`}
                        />

                        <p className={`${boldFont.className} text-[12px] text-[#191a1a] dark:text-white/70`}>
                            Excellent
                        </p>
                        
                    </div>

                </div>

                {/* Right Side */}
                <div className="flex-1">

                    {/* Items */}
                    <div className="space-y-5">

                        {/* Item */}
                        <div className="flex items-center gap-3">

                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <Check
                                    size={12}
                                    className="text-[#16A34A]"
                                    strokeWidth={3}
                                />

                            </div>

                            <p className={`${boldFont.className} text-[14px] text-[#15803D]`}>
                                All accounts synced
                            </p>

                        </div>

                        {/* Item */}
                        <div className="flex items-center gap-3">

                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <Check
                                    size={12}
                                    className="text-[#16A34A]"
                                    strokeWidth={3}
                                />

                            </div>

                            <p className={`${boldFont.className} text-[14px] text-[#15803D]`}>

                                No issues detected
                            </p>

                        </div>

                    </div>

                    {/* Description */}
                    <p className={`${boldFont.className} mt-8 max-w-[340px] text-[14px] leading-[1.7] text-[#6B7280] dark:text-white/60`}>
                        Keep it up! Your financial
                        health looks great.
                    </p>

                </div>

            </div>

        </div>
    )
}

export default AccountHealthOverview