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
        <div className="relative">

            <svg viewBox="0 0 280 280" className="-rotate-90 w-40 h-40">
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

                <p className={`${manrope.className} text-[10px] text-gray-500 dark:text-[#ffffff] transition-colors duration-300`}>
                    Total Expense
                </p>

                <LinearReveal
                    as='h2'
                    delay={0.4}
                    Text="$4,680"
                    className={`${manrope.className} text-[20px] font-bold tracking-[-1px] text-gray-900 dark:text-[#ffffff] mt-2 transition-colors duration-300`}
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
        <div className="flex items-center justify-between @md:gap-10 @lg:gap-20 @xl:gap-15 @2xl:gap-10">

            {/* Left */}
            <div className="flex items-center gap-4">

                <div
                    className="w-2 h-2 rounded-full"
                    style={{
                        background: color,
                    }}
                />

                <p className={`${manrope.className} text-[11px] text-gray-700 dark:text-[#ffffff] transition-colors duration-300`}>
                    {title}
                </p>
            </div>

            {/* Percentage */}
            <p className={`${manrope.className} text-[9px] text-gray-700 dark:text-[#ffffff] text-right transition-colors duration-300`}>
                {percentage}%
            </p>

            {/* Amount */}
            <p className={`${manrope.className} text-[11px] text-gray-900 dark:text-[#ffffff] text-right transition-colors duration-300`}>
                {amount}
            </p>
        </div>
    );
}

function ReportsSpendingBreakdown() {
    const { theme } = useTheme()
    return (
        <div className="w-full rounded-[15px] transition-colors duration-300  rounded-2xl border dark:border-[#222121] border-black/10">
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

                {/* Content */}
                <div className="flex flex-col @xl:flex-row @xl:items-center justify-between">

                    {/* Donut Chart */}
                    <div className="flex items-center justify-center">
                        <DonutChart />
                    </div>

                    {/* Expense List */}
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

                {/* Footer */}
                <button className={`${manrope.className} mt-5 flex items-center gap-3 text-[10px] text-gray-900 dark:text-[#ffffff] hover:opacity-80 transition-opacity transition-colors duration-300`}>
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