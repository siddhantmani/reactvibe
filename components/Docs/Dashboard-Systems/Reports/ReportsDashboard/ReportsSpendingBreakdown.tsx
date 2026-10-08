"use client"

import { ArrowRight } from "lucide-react";
import LinearReveal from "@/components/LinearReveal";
import { manrope } from "@/lib/fonts";
import { useTheme } from "@/components/ThemeProvider";
import Glow from "@/components/Docs/Components/Glow/Glow";


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
        /* Size follows the CARD's width: 160px when narrow, 200px from 560px */
        <div className="relative size-40 @min-[560px]:size-50">

            <svg viewBox="0 0 280 280" className="-rotate-90 size-full">
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

                <p className={`${manrope.className} text-[10px] text-gray-500 dark:text-white/70 transition-colors duration-300`}>
                    Total Expense
                </p>

                <LinearReveal
                    as='h2'
                    delay={0.4}
                    Text="$4,680"
                    className={`${manrope.className} text-[18px] @min-[560px]:text-[20px] font-bold tracking-[-1px] text-gray-900 dark:text-white mt-1 @min-[560px]:mt-2 transition-colors duration-300`}
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
        /*
            3 fixed columns: name (stretches) | percentage | amount
            Tighter number columns while the card is narrow, roomier from 560px.
        */
        <div
            className="
                grid
                grid-cols-[minmax(0,1fr)_2.5rem_3.5rem]
                items-center
                gap-2
                @min-[560px]:grid-cols-[minmax(0,1fr)_3rem_4.5rem]
                @min-[560px]:gap-3
            "
        >

            {/* Name */}
            <div className="flex min-w-0 items-center gap-3">
                <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ background: color }}
                />

                <p className={`${manrope.className} truncate text-[11px] text-gray-700 dark:text-white transition-colors duration-300`}>
                    {title}
                </p>
            </div>

            {/* Percentage */}
            <p className={`${manrope.className} text-right text-[11px] text-gray-500 dark:text-white/60 tabular-nums transition-colors duration-300`}>
                {percentage}%
            </p>

            {/* Amount */}
            <p className={`${manrope.className} text-right text-[11px] text-gray-900 dark:text-white tabular-nums transition-colors duration-300`}>
                {amount}
            </p>
        </div>
    );
}

function ReportsSpendingBreakdown() {
    const { theme } = useTheme()
    return (
        /*
            @container: everything inside measures THIS CARD's width
            (via @min-[...] variants), not the whole preview.
        */
        <div className="@container w-full h-full rounded-2xl border dark:border-[#222121] border-black/10 transition-colors duration-300">
            <Glow
                backgroundColor={`${theme === "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="180px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 h-full transition-colors duration-300"
            >

                {/* Header */}
                <h2 className={`${manrope.className} text-[12px] text-gray-900 dark:text-white transition-colors duration-300`}>
                    Executive Summary
                </h2>

                {/*
                    Content, based on the card's width:
                    < 420px   -> stacked (donut on top, legend below)
                    420–559px -> donut at natural size + legend takes the rest
                    ≥ 560px   -> equal 50/50 halves
                */}
                <div
                    className="
                        mt-4
                        grid
                        grid-cols-1
                        items-center
                        gap-6
                        @min-[420px]:grid-cols-[auto_minmax(0,1fr)]
                        @min-[560px]:grid-cols-2
                        @min-[560px]:gap-8
                    "
                >

                    {/* Donut Chart */}
                    <div className="flex min-w-0 justify-center">
                        <DonutChart />
                    </div>

                    {/* Expense List */}
                    <div className="w-full min-w-0 space-y-4">
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

                {/* Footer */}
                <button className={`${manrope.className} mt-5 flex items-center gap-3 text-[10px] text-gray-900 dark:text-white hover:opacity-80 transition-opacity duration-300`}>
                    View full breakdown

                    <ArrowRight
                        size={14}
                        strokeWidth={2.4}
                    />
                </button>
            </Glow>
        </div>
    );
}

export default ReportsSpendingBreakdown;