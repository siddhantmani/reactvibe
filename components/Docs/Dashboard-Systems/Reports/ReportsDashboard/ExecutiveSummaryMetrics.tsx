"use client"

import React from "react"
import {
    ArrowDown,
    ArrowUp,
    Sparkles,

} from "lucide-react"
import { Manrope } from "next/font/google";
import { useTheme } from "@/components/ThemeProvider";
import Glow from "@/components/Docs/Components/Glow/Glow";

const fontBold = Manrope({
    weight: '500',
    subsets: ['latin']
});


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
    const { theme } = useTheme()
    return (
        <div className="relative overflow-hidden rounded-[15px] transition-colors duration-300  rounded-2xl border dark:border-[#222121] border-black/10">

            <Glow
                backgroundColor={`${theme === "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="250px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 h-full  transition-colors duration-300"
            >


                <div className="relative z-10 flex items-start justify-between gap-10">

                    {/* Left Side */}
                    <div className="flex-1">

                        {/* Heading */}
                        <div className="flex items-center gap-3">

                            <div className="flex p-2 items-center justify-center rounded-[8px] border border-[#0d7525]/20 bg-[#0d7525]/10 transition-colors duration-300">

                                <Sparkles
                                    size={12}
                                    className="text-[#0d7525]"
                                    strokeWidth={2.2}
                                />

                            </div>

                            <div>

                                <h2 className={`${fontBold.className} text-[10px] @2xl:text-[12px] text-gray-900 dark:text-white transition-colors duration-300`}>
                                    Executive Summary
                                </h2>

                                <p className={`${fontBold.className} mt-0 text-[8px] @2xl:text-[10px] text-gray-500 dark:text-white/45 transition-colors duration-300`}>
                                    Here how your finances performed this month.
                                </p>

                            </div>

                        </div>

                        {/* Stats */}
                        <div className="mt-4 grid grid-cols-2 gap-4 space-y-4 @md:grid-cols-4">

                            {stats.map((item, index) => (

                                <div key={index} className="space-y-2">

                                    <p className={`${fontBold.className} text-[10px] @2xl:text-[11px] text-gray-600 dark:text-white/55 transition-colors duration-300`}>
                                        {item.title}
                                    </p>

                                    <h3 className={`${fontBold.className} mt-1 text-[18px] @2xl:text-3xl text-gray-900 dark:text-white transition-colors duration-300`}>
                                        {item.value}
                                    </h3>

                                    <div
                                        className={`${fontBold.className} flex items-center gap-2 text-[9px] @2xl:text-xs transition-colors duration-300 ${item.positive
                                            ? "text-green-600 dark:text-[#4ADE80]"
                                            : "text-red-600 dark:text-[#FF5A5A]"
                                            }`}
                                    >

                                        {item.positive ? (
                                            <ArrowUp
                                                size={10}
                                                strokeWidth={2.5}
                                            />
                                        ) : (
                                            <ArrowDown
                                                size={10}
                                                strokeWidth={2.5}
                                            />
                                        )}

                                        {item.change}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>



                </div>
            </Glow>
        </div >
    )
}

export default ExecutiveSummaryMetrics