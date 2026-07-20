"use clinet"
import { AnimatePresence, motion } from "framer-motion"

import React from "react";
import { ChevronDown } from "lucide-react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});

const chartData = [
    { month: "Jan", income: 70, expense: 85 },
    { month: "Feb", income: 88, expense: 42 },
    { month: "Mar", income: 66, expense: 78 },
    { month: "Apr", income: 95, expense: 44 },
    { month: "May", income: 82, expense: 90 },
    { month: "Jun", income: 62, expense: 60 },
    { month: "Jul", income: 52, expense: 44 },
    { month: "Aug", income: 46, expense: 43 },
    { month: "Sep", income: 102, expense: 80 },
    { month: "Oct", income: 106, expense: 96 },
    { month: "Nov", income: 74, expense: 104 },
    { month: "Dec", income: 90, expense: 66 },
];

function CashflowOverviewChart() {

    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const netValue = (activeIndex !== null ? chartData[activeIndex].income : 82) -
        (activeIndex !== null ? chartData[activeIndex].expense : 90);

    return (
        <div className="w-full rounded-[15px] border border-black/10 bg-white dark:bg-[#070606] dark:border-white/10 p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">

            {/* Header */}
            <div className="flex items-start justify-between gap-5">

                {/* Left */}
                <div>
                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white whitespace-nowrap`}>
                        Cashflow Overview
                    </h1>

                    <p className={`${boldFont.className} text-[11px] text-[#4b5563] dark:text-white/40 mt-2`}>
                        Net Cashflow
                    </p>


                    <LinearReveal
                        as='h2'
                        delay={0.4}
                        Text={`$${(netValue * 100).toLocaleString()}.00`}
                        className={`${boldFont.className} text-[20px] ${netValue >= 0 ? "text-green-500" : "text-red-500"
                            }`}
                    />

                </div>

                {/* Right */}
                <div className="flex flex-col items-end gap-10">

                    {/* Dropdown */}
                    <button className={`${boldFont.className} px-2 py-1 rounded-[4px] border border-black/10 flex items-center gap-3 text-[10px] text-[#111827] dark:text-white/70 dark:hover:text-white dark:border-white/15`}>
                        This Month

                        <ChevronDown
                            size={12}
                            strokeWidth={2.4}
                        />
                    </button>

                    {/* Legend */}
                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-[2px] bg-[#006b46]" />

                            <p className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white/90`}>
                                Income
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-[2px] bg-[#86db68]" />

                            <p className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white/90`}>
                                Expenses
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="relative mt-2">



                {/* Grid */}
                <div className="relative h-[190px]">

                    {/* Horizontal Lines */}
                    {[0, 1, 2, 3, 4].map((line) => (
                        <div
                            key={line}
                            className="absolute left-0 w-full border-t border-black/6 dark:border-white/10"
                            style={{
                                top: `${line * 25}%`,
                            }}
                        />
                    ))}

                    {/* Labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2">
                        {["$6K", "$3K", "$0", "-$3K", "-$6K"].map((label) => (
                            <p
                                key={label}
                                className={`${boldFont.className} text-[9px] text-[#4b5563] dark:text-white/80`}
                            >
                                {label}
                            </p>
                        ))}
                    </div>

                    {/* Bars */}
                    <div className="absolute left-[60px] right-0 top-0 bottom-0 flex items-end justify-between">

                        {chartData.map((item, index) => {

                            const isActive = activeIndex === index

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                    className="relative flex flex-col items-center justify-end"
                                >

                                    {/* Tooltip */}
                                    <AnimatePresence>

                                        {isActive && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95,
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                                className="absolute -top-20 z-30  rounded-[10px] border border-black/10 bg-white dark:bg-[#070606] dark:border-white/10 p-2 px-2 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                                            >

                                                <p className={`${boldFont.className} text-[11px] text-[#6b7280] dark:text-white`}>
                                                    {item.month} 2024
                                                </p>

                                                <div className="mt-3 space-y-2">

                                                    <div className="flex items-center justify-between gap-4">

                                                        <span className={`${boldFont.className} text-[11px] text-[#6b7280] dark:text-white/70`}>
                                                            Income
                                                        </span>

                                                        <span className={`${boldFont.className} text-[13px] text-[#006b46]`}>
                                                            ${(item.income * 100).toLocaleString()}
                                                        </span>

                                                    </div>

                                                    <div className="flex items-center justify-between gap-4">

                                                        <span className={`${boldFont.className}  text-[11px] text-[#6b7280] dark:text-white/70`}>
                                                            Expense
                                                        </span>

                                                        <span className={`${boldFont.className} text-[13px] text-[#6fd14c]`}>
                                                            ${(item.expense * 100).toLocaleString()}
                                                        </span>

                                                    </div>

                                                </div>

                                            </motion.div>
                                        )}

                                    </AnimatePresence>

                                    {/* Bar Group */}
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.05 : 1,
                                            opacity: isActive ? 1 : 0.92,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="relative h-[140px] w-[15px] flex flex-col items-center justify-center"
                                    >

                                        {/* Income */}
                                        <div
                                            className="w-full rounded-t-[4px] bg-gradient-to-b from-[#006b46] to-[#008556] transition-all duration-300"
                                            style={{
                                                height: `${item.income}px`,
                                            }}
                                        />

                                        {/* Expense */}
                                        <div
                                            className="w-full rounded-b-[4px] bg-gradient-to-b from-[#86db68] to-[#6fd14c] transition-all duration-300"
                                            style={{
                                                height: `${item.expense}px`,
                                            }}
                                        />

                                    </motion.div>

                                    {/* Month */}
                                    <p className={`${boldFont.className} text-[9px] text-[#4b5563] dark:text-white/80 mt-5`}>
                                        {item.month}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CashflowOverviewChart;