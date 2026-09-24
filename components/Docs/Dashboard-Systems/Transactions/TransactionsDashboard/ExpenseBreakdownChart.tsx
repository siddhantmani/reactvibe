"use client"
import { motion } from "framer-motion"

import React from "react";
import { ArrowRight } from "lucide-react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";
import { useTheme } from "@/components/ThemeProvider";
import Glow from "@/components/Docs/Components/Glow/Glow";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});

const expenses = [
    {
        title: "Housing",
        percentage: 40,
        amount: "$1,872",
        color: "#007a4d",
    },
    {
        title: "Food",
        percentage: 20,
        amount: "$936",
        color: "#8ddc67",
    },
    {
        title: "Transport",
        percentage: 15,
        amount: "$702",
        color: "#1f8cff",
    },
    {
        title: "Shopping",
        percentage: 10,
        amount: "$468",
        color: "#9b5cf6",
    },
    {
        title: "Entertainment",
        percentage: 8,
        amount: "$374",
        color: "#f4b400",
    },
    {
        title: "Others",
        percentage: 7,
        amount: "$328",
        color: "#d9d9d9",
    },
];

function DonutChart() {
    const radius = 95;
    const stroke = 35;
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
        <div className="relative">

            <svg viewBox="0 0 280 280" className="-rotate-90 w-42 h-42">
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
            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className={`${boldFont.className} text-[10px] text-[#4b5563] dark:text-white/60`}>
                    Total Expense
                </p>

                <LinearReveal
                    as='h2'
                    delay={0.4}
                    Text="$4,680"
                    className={`${boldFont.className} text-[20px] font-bold tracking-[-1px] text-[#111827] dark:text-white mt-2`}
                />

            </div>
        </div>
    );
}

interface ExpenseItemProps {
    title: string;
    percentage: number;
    amount: string;
    color: string;
}

function ExpenseItem({ title, percentage, amount, color }: ExpenseItemProps) {
    return (
        <div className="flex items-center justify-between gap-2">

            {/* Left */}
            <div className="flex items-center gap-2">

                <div
                    className="w-2 h-2 rounded-full"
                    style={{
                        background: color,
                    }}
                />

                <p className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white`}>
                    {title}
                </p>
            </div>

            {/* Percentage */}
            <p className={`${boldFont.className} text-[11px] text-[#374151] dark:text-white text-right`}>
                {percentage}%
            </p>

            {/* Amount */}
            <p className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white text-right`}>
                {amount}
            </p>
        </div>
    );
}

function ExpenseBreakdownChart() {
    const { theme } = useTheme()

    return (
        <div className="w-full rounded-2xl border border-black/10 dark:border-white/10">
            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="180px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 h-full"
            >

                {/* Header */}
                <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                    Expense Breakdown
                </h1>

                {/* Content */}
                <div className="flex items-center justify-between">

                    {/* Donut Chart */}
                    <div className="flex items-center -ml-2">
                        <DonutChart />
                    </div>

                    {/* Expense List */}
                    <div className="">

                        <div className="space-y-5">
                            {expenses.map((item, index) => (
                                <ExpenseItem
                                    key={index}
                                    title={item.title}
                                    percentage={item.percentage}
                                    amount={item.amount}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <button className={`${boldFont.className} mt-0 flex items-center gap-3 text-[10px] text-[#11b827] dark:hover:text-[#0aff2a] hover:opacity-80 transition-opacity`}>
                    View full report

                    <ArrowRight
                        size={14}
                        strokeWidth={2.4}
                    />
                </button>
            </Glow>

        </div>
    );
}

export default ExpenseBreakdownChart;