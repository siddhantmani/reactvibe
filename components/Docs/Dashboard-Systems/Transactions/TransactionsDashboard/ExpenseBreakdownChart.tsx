"use client"
import { motion } from "framer-motion"

import React from "react";
import { ArrowRight } from "lucide-react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

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

            <svg
                viewBox="0 0 280 280"
                className="-rotate-90 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-20 lg:h-20 xl:h-28 xl:w-28 2xl:w-40 2xl:h-40"
            >
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
                <p className={`${boldFont.className} md:text-[8px] lg:text-[4px] xl:text-[6px] 2xl:text-[8px] text-[#4b5563] dark:text-white/60`}>
                    Total Expense
                </p>

                <LinearReveal
                    as='h2'
                    delay={0.4}
                    Text="$4,680"
                    className={`${boldFont.className} md:text-[20px] lg:text-[10px] xl:text-[16px] 2xl:text-[20px] font-bold tracking-[-1px] text-[#111827] dark:text-white mt-2`}
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
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2, // Trigger when 20% visible
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.2
            }}
            className="w-full rounded-[15px] aspect-video border border-black/10 bg-white dark:bg-[#070606] dark:border-white/10 p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">

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
        </motion.div>
    );
}

export default ExpenseBreakdownChart;