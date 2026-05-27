"use client"

import React, { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Manrope } from "next/font/google"

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
})

const data = [
    {
        category: "Housing",
        budgeted: 2500,
        spent: 2000,
    },
    {
        category: "Food & Dining",
        budgeted: 1500,
        spent: 1250,
    },
    {
        category: "Transport",
        budgeted: 1000,
        spent: 800,
    },
    {
        category: "Entertaining",
        budgeted: 750,
        spent: 500,
    },
    {
        category: "Health & Fitness",
        budgeted: 350,
        spent: 520,
    },
    {
        category: "Others",
        budgeted: 2250,
        spent: 2000,
    },
]

function formatYAxis(value: number) {
    if (value >= 1000) {
        return `$${value / 1000} K`
    }

    return `$${value}`
}

function BudgetvsActual() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const maxValue = useMemo(() => {
        return Math.max(
            ...data.flatMap((item) => [item.budgeted, item.spent])
        )
    }, [])

    const chartHeight = 160
    const yAxisWidth = 42
    const bottomPadding = 34
    const topPadding = 8
    const usableHeight = chartHeight - bottomPadding - topPadding

    const yTicks = [0, 1000, 2000, 3000]

    const getBarHeight = (value: number) => {
        return (value / maxValue) * usableHeight
    }

    return (
        <div className="rounded-[15px] border border-black/10 bg-white aspect-auto">

            {/* Top */}
            <div className="flex items-center justify-between px-3 p-3">

                <h2
                    className={`${boldFont.className} text-[14px] tracking-[-0.04em] text-[#111827]`}
                >
                    Budget vs Actual
                </h2>

                <button
                    className={`${boldFont.className} flex items-center gap-1 rounded-[6px] border border-black/10 bg-white px-2 py-1 text-[12px] font-medium text-[#374151] transition-all duration-300 hover:bg-black/[0.02]`}
                >

                    This Month

                    <ChevronDown
                        size={12}
                        strokeWidth={2.2}
                    />

                </button>

            </div>

            {/* Legend */}
            <div className="mt-4 relative flex items-center justify-center gap-8 z-50">

                <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-[#9BE68B]" />

                    <span
                        className={`${boldFont.className} text-[12px] text-[#374151]`}
                    >
                        Budgeted
                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-[#0F7B42]" />

                    <span
                        className={`${boldFont.className} text-[12px] text-[#374151]`}
                    >
                        Spent
                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-[#FF4D4F]" />

                    <span
                        className={`${boldFont.className} text-[12px] text-[#374151]`}
                    >
                        Over Budget
                    </span>

                </div>

            </div>

            {/* Chart */}
            <div className="mt-4 h-[160px] w-full px-3 pb-2">

                <div className="relative flex h-full">

                    {/* Y Axis */}
                    <div
                        className="relative"
                        style={{
                            width: yAxisWidth,
                            height: chartHeight,
                        }}
                    >

                        {yTicks.map((tick) => {
                            const bottom =
                                bottomPadding +
                                (tick / maxValue) * usableHeight

                            return (
                                <div
                                    key={tick}
                                    className="absolute left-0 flex w-full items-center justify-end pr-2"
                                    style={{
                                        bottom,
                                        transform: "translateY(50%)",
                                    }}
                                >

                                    <span
                                        className={`${boldFont.className} text-[12px] font-normal text-[#9CA3AF]`}
                                    >
                                        {formatYAxis(tick)}
                                    </span>

                                </div>
                            )
                        })}

                    </div>

                    {/* Bars Area */}
                    <div className="relative flex-1">

                        {/* Horizontal Grid */}
                        {yTicks.map((tick) => {
                            const bottom =
                                bottomPadding +
                                (tick / maxValue) * usableHeight

                            return (
                                <div
                                    key={tick}
                                    className="absolute left-0 right-0 border-t border-[#F3F4F6]"
                                    style={{
                                        bottom,
                                    }}
                                />
                            )
                        })}

                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end justify-between px-2">

                            {data.map((item, index) => {
                                const budgetHeight = getBarHeight(item.budgeted)
                                const spentHeight = getBarHeight(item.spent)

                                return (
                                    <div
                                        key={index}
                                        className="relative flex h-full flex-1 items-end justify-center"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >

                                        {/* Hover Background */}
                                        <div
                                            className={`absolute inset-y-0 w-full rounded-[8px] transition-all duration-200 ${hoveredIndex === index
                                                ? "bg-black/[0.02]"
                                                : "bg-transparent"
                                                }`}
                                        />

                                        {/* Tooltip */}
                                        {hoveredIndex === index && (

                                            <div
                                                className="absolute z-20 rounded-[10px] border border-black/10 bg-white px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                                                style={{
                                                    bottom:
                                                        Math.max(
                                                            budgetHeight,
                                                            spentHeight
                                                        ) + 48,
                                                }}
                                            >

                                                <p
                                                    className={`${boldFont.className} text-[10px] text-[#6B7280]`}
                                                >
                                                    {item.category}
                                                </p>

                                                <div className="mt-3 space-y-2">

                                                    <div className="flex items-center justify-between gap-6">

                                                        <span
                                                            className={`${boldFont.className} text-[11px] text-[#6B7280]`}
                                                        >
                                                            Budgeted
                                                        </span>

                                                        <span
                                                            className={`${boldFont.className} text-[11px] text-[#16A34A]`}
                                                        >
                                                            ${item.budgeted}
                                                        </span>

                                                    </div>

                                                    <div className="flex items-center justify-between gap-6">

                                                        <span
                                                            className={`${boldFont.className} text-[11px] text-[#6B7280]`}
                                                        >
                                                            Spent
                                                        </span>

                                                        <span
                                                            className={`${boldFont.className} text-[11px] ${item.spent > item.budgeted
                                                                ? "text-[#f0334c]"
                                                                : "text-[#0F7B42]"
                                                                }`}
                                                        >
                                                            ${item.spent}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        )}

                                        {/* Content */}
                                        <div className="relative z-10 flex h-full flex-col justify-end">

                                            {/* Bars */}
                                            <div className="flex items-end gap-[6px]">

                                                {/* Budgeted */}
                                                <div
                                                    className="w-[10px] rounded-[4px] bg-[#9BE68B] transition-all duration-300"
                                                    style={{
                                                        height: budgetHeight,
                                                    }}
                                                />

                                                {/* Spent */}
                                                <div
                                                    className={`w-[10px] rounded-[4px] transition-all duration-300 ${item.spent > item.budgeted
                                                        ? "bg-[#FF4D4F]"
                                                        : "bg-[#0F7B42]"
                                                        }`}
                                                    style={{
                                                        height: spentHeight,
                                                    }}
                                                />

                                            </div>

                                            {/* Label */}
                                            <div className="mt-2  text-center">

                                                <span className={`${boldFont.className} text-[11px] whitespace-nowrap font-normal text-[#6B7280] `}>
                                                    {item.category}
                                                </span>

                                            </div>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default BudgetvsActual