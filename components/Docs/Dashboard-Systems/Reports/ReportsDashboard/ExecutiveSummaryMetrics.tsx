"use client"

import React from "react"
import {
    ArrowDown,
    ArrowUp,
    Sparkles,
} from "lucide-react"

import { Manrope } from "next/font/google"

const fontBold = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const stats = [
    {
        title: "Total Income",
        value: "$8,420.00",
        change: "12.5% vs Apr",
        positive: true,
    },
    {
        title: "Total Expenses",
        value: "$4,680.00",
        change: "5.2% vs Apr",
        positive: false,
    },
    {
        title: "Net Cashflow",
        value: "$3,740.00",
        change: "15.3% vs Apr",
        positive: true,
    },
    {
        title: "Savings Rate",
        value: "44.4%",
        change: "6.1% vs Apr",
        positive: true,
    },
]

function ExecutiveSummaryMetrics() {

    return (

        <div
            className="relative overflow-hidden rounded-[18px] border border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#070606] px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-none"
        >

            {/* Purple Glow */}
            <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#8B5CF6]/[0.05] blur-3xl" />

            <div className="relative z-10 flex items-start justify-between gap-10">

                {/* Left Side */}
                <div className="flex-1">

                    {/* Heading */}
                    <div className="flex items-center gap-4">

                        {/* Icon */}
                        <div
                            className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#8B5CF6]/10 dark:border-[#3A2A5A] bg-[#8B5CF6]/[0.06] dark:bg-[#181222] shadow-[0_8px_24px_rgba(139,92,246,0.08)] dark:shadow-none"
                        >

                            <Sparkles
                                size={17}
                                className="text-[#8B5CF6]"
                                strokeWidth={2.3}
                            />

                        </div>

                        {/* Text */}
                        <div>

                            <h2
                                className={`${fontBold.className} text-[15px] tracking-[-0.04em] text-[#111111] dark:text-white`}
                            >
                                Executive Summary
                            </h2>

                            <p
                                className={`${fontBold.className} mt-1 text-[11px] text-black/45 dark:text-white/60`}
                            >
                                Here’s how your finances performed this month.
                            </p>

                        </div>

                    </div>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-4 gap-4">

                        {stats.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-[14px] border border-black/[0.05] dark:border-white/10 bg-black/[0.015] dark:bg-[#070606] p-4 transition-all duration-300 hover:bg-black/[0.025] dark:hover:bg-white/[0.05] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-none"
                            >
                                {/* Label */}
                                <p
                                    className={`${fontBold.className} text-[11px] text-black/45 dark:text-white/60`}
                                >
                                    {item.title}
                                </p>

                                {/* Value */}
                                <h3
                                    className={`${fontBold.className} mt-3 text-[26px] tracking-[-0.06em] text-[#111111] dark:text-white`}
                                >
                                    {item.value}
                                </h3>

                                {/* Change */}
                                <div
                                    className={`${fontBold.className} mt-3 flex items-center gap-2 text-[11px] ${item.positive
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

                                            <ArrowUp
                                                size={11}
                                                strokeWidth={2.8}
                                            />

                                        ) : (

                                            <ArrowDown
                                                size={11}
                                                strokeWidth={2.8}
                                            />

                                        )}

                                    </div>

                                    {item.change}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ExecutiveSummaryMetrics