"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Manrope } from "next/font/google"
import Glow from "@/components/Docs/Components/Glow/Glow"
import { useTheme } from "@/components/ThemeProvider"

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
})

const data = [
    { category: "Housing", short: "Housing", budgeted: 2500, spent: 2000 },
    { category: "Food & Dining", short: "Food", budgeted: 1500, spent: 1250 },
    { category: "Transport", short: "Transport", budgeted: 1000, spent: 800 },
    { category: "Entertaining", short: "Leisure", budgeted: 750, spent: 500 },
    { category: "Health & Fitness", short: "Health", budgeted: 350, spent: 520 },
    { category: "Others", short: "Others", budgeted: 2250, spent: 2000 },
]

const yTicks = [0, 1000, 2000, 3000]

// Scale tops out at the highest tick, so every grid line sits inside the chart
const SCALE_MAX = yTicks[yTicks.length - 1]

const CHART_HEIGHT = 170
const LABEL_HEIGHT = 30 // space under the bars for category labels
const TOP_PADDING = 8
const PLOT_HEIGHT = CHART_HEIGHT - LABEL_HEIGHT - TOP_PADDING
const Y_AXIS_WIDTH = 40

// Each category column never gets narrower than this; below it the chart scrolls sideways
const MIN_COLUMN_WIDTH = 56

function formatYAxis(value: number) {
    return value >= 1000 ? `$${value / 1000}K` : `$${value}`
}

function formatMoney(value: number) {
    return `$${value.toLocaleString()}`
}

function BudgetvsActual() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const { theme } = useTheme()

    const barHeight = (value: number) => (value / SCALE_MAX) * PLOT_HEIGHT
    const tickBottom = (tick: number) => LABEL_HEIGHT + (tick / SCALE_MAX) * PLOT_HEIGHT

    return (
        /* @container: inner @min-[...] variants measure THIS CARD's width */
        <div className="@container w-full h-full rounded-2xl border border-black/10 dark:border-white/10">
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

                {/* Top */}
                <div className="flex items-center justify-between gap-3">
                    <h2 className={`${boldFont.className} whitespace-nowrap text-[14px] tracking-[-0.04em] text-[#111827] dark:text-white`}>
                        Budget vs Actual
                    </h2>

                    <button
                        className={`${boldFont.className} flex shrink-0 items-center gap-1 rounded-[6px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#070606] px-2 py-1 text-[12px] font-medium text-[#374151] dark:text-white/70 transition-all duration-300 hover:bg-black/[0.02] dark:hover:text-white`}
                    >
                        This Month
                        <ChevronDown size={12} strokeWidth={2.2} />
                    </button>
                </div>

                {/* Legend: whole items wrap to a new line, labels never break */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    {[
                        { label: "Budgeted", color: "bg-[#9BE68B]" },
                        { label: "Spent", color: "bg-[#0F7B42]" },
                        { label: "Over Budget", color: "bg-[#FF4D4F]" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                            <span className={`size-2 shrink-0 rounded-full ${item.color}`} />
                            <span className={`${boldFont.className} whitespace-nowrap text-[12px] text-[#374151] dark:text-white/70`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Chart */}
                <div className="mt-4 flex">

                    {/* Y Axis (stays fixed while the bars scroll) */}
                    <div
                        className="relative shrink-0"
                        style={{ width: Y_AXIS_WIDTH, height: CHART_HEIGHT }}
                    >
                        {yTicks.map((tick) => (
                            <span
                                key={tick}
                                className={`${boldFont.className} absolute right-2 translate-y-1/2 text-[11px] font-normal text-[#9CA3AF] dark:text-white/40`}
                                style={{ bottom: tickBottom(tick) }}
                            >
                                {formatYAxis(tick)}
                            </span>
                        ))}
                    </div>

                    {/* Bars: scroll sideways only when the card is too narrow */}
                    <div className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:thin]">
                        <div
                            className="relative"
                            style={{
                                height: CHART_HEIGHT,
                                minWidth: data.length * MIN_COLUMN_WIDTH,
                            }}
                        >

                            {/* Horizontal grid */}
                            {yTicks.map((tick) => (
                                <div
                                    key={tick}
                                    className="absolute left-0 right-0 border-t border-[#F3F4F6] dark:border-white/10"
                                    style={{ bottom: tickBottom(tick) }}
                                />
                            ))}

                            {/* Columns */}
                            <div className="absolute inset-0 flex">
                                {data.map((item, index) => {
                                    const isOver = item.spent > item.budgeted
                                    const isHovered = hoveredIndex === index
                                    const isFirst = index === 0
                                    const isLast = index === data.length - 1

                                    return (
                                        <div
                                            key={item.category}
                                            className="relative flex min-w-0 flex-1 flex-col"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {/* Hover background */}
                                            <div
                                                className={`absolute inset-x-0.5 inset-y-0 rounded-[8px] transition-colors duration-200 ${isHovered ? "bg-black/[0.03] dark:bg-white/[0.04]" : "bg-transparent"
                                                    }`}
                                            />

                                            {/* Tooltip: inside the chart, kept in bounds at the edges */}
                                            {isHovered && (
                                                <div
                                                    className={`absolute top-0 z-20 rounded-[10px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#070606] px-2.5 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-none ${isFirst ? "left-0" : isLast ? "right-0" : "left-1/2 -translate-x-1/2"
                                                        }`}
                                                >
                                                    <p className={`${boldFont.className} whitespace-nowrap text-[10px] text-[#6B7280] dark:text-white/50`}>
                                                        {item.category}
                                                    </p>

                                                    <div className="mt-2 space-y-1.5">
                                                        <div className="flex items-center justify-between gap-5">
                                                            <span className={`${boldFont.className} text-[11px] text-[#6B7280] dark:text-white/60`}>
                                                                Budgeted
                                                            </span>
                                                            <span className={`${boldFont.className} text-[11px] text-[#16A34A]`}>
                                                                {formatMoney(item.budgeted)}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center justify-between gap-5">
                                                            <span className={`${boldFont.className} text-[11px] text-[#6B7280] dark:text-white/60`}>
                                                                Spent
                                                            </span>
                                                            <span className={`${boldFont.className} text-[11px] ${isOver ? "text-[#f0334c]" : "text-[#0F7B42]"}`}>
                                                                {formatMoney(item.spent)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Bars: bottom sits exactly on the $0 line */}
                                            <div className="relative z-10 flex flex-1 items-end justify-center gap-[5px]">
                                                <div
                                                    className="w-[9px] @min-[480px]:w-[10px] rounded-[4px] bg-[#9BE68B] transition-all duration-300"
                                                    style={{ height: barHeight(item.budgeted) }}
                                                />
                                                <div
                                                    className={`w-[9px] @min-[480px]:w-[10px] rounded-[4px] transition-all duration-300 ${isOver ? "bg-[#FF4D4F]" : "bg-[#0F7B42]"
                                                        }`}
                                                    style={{ height: barHeight(item.spent) }}
                                                />
                                            </div>

                                            {/* Label: fixed height, short names on narrow cards */}
                                            <div
                                                className="relative z-10 flex items-start justify-center px-0.5 pt-2"
                                                style={{ height: LABEL_HEIGHT }}
                                                title={item.category}
                                            >
                                                <span className={`${boldFont.className} block max-w-full truncate text-center text-[10px] @min-[480px]:text-[11px] font-normal text-[#6B7280] dark:text-white/50`}>
                                                    <span className="@min-[640px]:hidden">{item.short}</span>
                                                    <span className="hidden @min-[640px]:inline">{item.category}</span>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Glow>
        </div>
    )
}

export default BudgetvsActual