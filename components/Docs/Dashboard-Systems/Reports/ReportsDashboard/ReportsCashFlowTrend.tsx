"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

import LinearReveal from "@/components/LinearReveal"
import { manrope } from "@/lib/fonts"
import { useTheme } from "@/components/ThemeProvider"
import Glow from "@/public/Components/Glow/Glow"

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
]

function ReportsCashFlowTrend() {

    const [activeIndex, setActiveIndex] =
        useState<number | null>(null)

    const { theme } = useTheme()
    return (

        <div className="w-full   rounded-2xl border dark:border-[#222121] border-black/10 transition-colors duration-300">

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
                className="p-4 h-fulltransition-colors duration-300"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-5">

                    {/* Left */}
                    <div>

                        <div className="space-y-1">

                            <h1
                                className={`${manrope.className} text-[12px] text-gray-900 dark:text-[#ffffff] transition-colors duration-300`}
                            >
                                Cash Flow Trend
                            </h1>

                            <p
                                className={`${manrope.className} text-[9px] text-gray-500 dark:text-[#ffffff] transition-colors duration-300`}
                            >
                                Income vs expenses{" "}

                                <span className="font-normal text-gray-400 dark:text-white/70 transition-colors duration-300">
                                    over time.
                                </span>

                            </p>

                        </div>

                        <LinearReveal
                            as="h2"
                            delay={0.4}
                            Text="$3,740.00"
                            className={`${manrope.className} mt-3 text-[21px] text-gray-900 dark:text-[#ffffff] transition-colors duration-300`}
                        />

                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-end gap-10">

                        {/* Dropdown */}
                        <button
                            className={`${manrope.className} flex items-center gap-3 rounded-[4px] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-transparent px-2 py-1 text-[10px] text-gray-800 dark:text-[#ffffff] transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-white/5`}
                        >

                            This Month

                            <ChevronDown
                                size={12}
                                strokeWidth={2.4}
                            />

                        </button>

                        {/* Legend */}
                        <div className="flex items-center gap-4">

                            <div className="flex items-center gap-3">

                                <div className="h-2 w-2 rounded-[2px] bg-[#86db68]" />

                                <p
                                    className={`${manrope.className} text-[10px] text-gray-600 dark:text-[#ffffff] transition-colors duration-300`}
                                >
                                    Income
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="h-2 w-2 rounded-[2px] bg-[#E73C3C]" />

                                <p
                                    className={`${manrope.className} text-[10px] text-gray-600 dark:text-[#ffffff] transition-colors duration-300`}
                                >
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
                                className="absolute left-0 w-full border-t border-gray-100 dark:border-white/10 transition-colors duration-300"
                                style={{
                                    top: `${line * 25}%`,
                                }}
                            />

                        ))}

                        {/* Labels */}
                        <div className="absolute left-0 top-0 flex h-full flex-col justify-between py-2">

                            {[
                                "$6K",
                                "$3K",
                                "$0",
                                "-$3K",
                                "-$6K",
                            ].map((label) => (

                                <p
                                    key={label}
                                    className={`${manrope.className} text-[9px] text-gray-400 dark:text-[#ffffff]/50 transition-colors duration-300`}
                                >
                                    {label}
                                </p>

                            ))}

                        </div>

                        {/* Bars */}
                        <div className="absolute bottom-0 left-[60px] right-0 top-0 flex items-end justify-between">

                            {chartData.map((item, index) => {

                                const isActive =
                                    activeIndex === index

                                return (

                                    <div
                                        key={index}
                                        className="relative flex flex-col items-center justify-end"

                                        onMouseEnter={() =>
                                            setActiveIndex(index)
                                        }

                                        onMouseLeave={() =>
                                            setActiveIndex(null)
                                        }
                                    >

                                        {/* Tooltip */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                opacity: isActive
                                                    ? 1
                                                    : 0,
                                                y: isActive
                                                    ? -8
                                                    : 0,
                                                scale: isActive
                                                    ? 1
                                                    : 0.96,
                                            }}
                                            transition={{
                                                duration: 0.16,
                                                ease: "easeOut",
                                            }}
                                            className="pointer-events-none absolute -top-16 z-30"
                                        >

                                            <div className="min-w-[110px] rounded-[10px] border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-black/95 px-3 py-2 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors duration-300">

                                                <p
                                                    className={`${manrope.className} text-[9px] text-gray-900 dark:text-white transition-colors duration-300`}
                                                >
                                                    {item.month}
                                                </p>

                                                <div className="mt-2 space-y-1">

                                                    <div className="flex items-center justify-between gap-4">

                                                        <span
                                                            className={`${manrope.className} text-[9px] text-gray-600 dark:text-white transition-colors duration-300`}
                                                        >
                                                            Income
                                                        </span>

                                                        <span
                                                            className={`${manrope.className} text-[10px] text-green-600 dark:text-[#4cd81e] transition-colors duration-300`}
                                                        >
                                                            ${item.income}K
                                                        </span>

                                                    </div>

                                                    <div className="flex items-center justify-between gap-4">

                                                        <span
                                                            className={`${manrope.className} text-[9px] text-gray-600 dark:text-white transition-colors duration-300`}
                                                        >
                                                            Expense
                                                        </span>

                                                        <span
                                                            className={`${manrope.className} text-[10px] font-[600] text-red-600 dark:text-[#e90e0e] transition-colors duration-300`}
                                                        >
                                                            ${item.expense}K
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        </motion.div>

                                        {/* Bar Group */}
                                        <div className="relative flex h-[140px] w-[15px] flex-col items-center justify-center">

                                            {/* Glow */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    opacity: isActive
                                                        ? 1
                                                        : 0,
                                                }}
                                                transition={{
                                                    duration: 0.15,
                                                }}
                                                className="absolute inset-0 scale-[2.2] rounded-full bg-[#8B5CF6]/10 blur-xl"
                                            />

                                            {/* Income */}
                                            <motion.div
                                                animate={{
                                                    opacity: isActive
                                                        ? 1
                                                        : 0.92,
                                                    scaleX: isActive
                                                        ? 1.12
                                                        : 1,
                                                }}
                                                transition={{
                                                    duration: 0.15,
                                                }}
                                                className="relative z-10 w-full rounded-t-[4px] bg-[#6eac59]"
                                                style={{
                                                    height: `${item.income}px`,
                                                    transformOrigin:
                                                        "bottom",
                                                }}
                                            />

                                            {/* Expense */}
                                            <motion.div
                                                animate={{
                                                    opacity: isActive
                                                        ? 1
                                                        : 0.92,
                                                    scaleX: isActive
                                                        ? 1.12
                                                        : 1,
                                                }}
                                                transition={{
                                                    duration: 0.15,
                                                }}
                                                className="relative z-10 w-full rounded-b-[4px] bg-[#E73C3C]"
                                                style={{
                                                    height: `${item.expense}px`,
                                                    transformOrigin:
                                                        "top",
                                                }}
                                            />

                                        </div>

                                        {/* Month */}
                                        <motion.p
                                            animate={{
                                                opacity: isActive
                                                    ? 1
                                                    : 0.7,
                                                y: isActive
                                                    ? 2
                                                    : 0,
                                            }}
                                            transition={{
                                                duration: 0.15,
                                            }}
                                            className={`${manrope.className} mt-5 text-[9px] text-gray-600 dark:text-[#ffffff] transition-colors duration-300`}
                                        >
                                            {item.month}
                                        </motion.p>

                                    </div>

                                )

                            })}

                        </div>

                    </div>

                </div>
            </Glow>
        </div>

    )
}

export default ReportsCashFlowTrend