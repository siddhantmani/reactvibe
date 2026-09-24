"use client"

import {
    EllipsisVertical,
    Eye,
    FileText,
} from "lucide-react"
import { manrope } from "@/lib/fonts";
import { useTheme } from "@/components/ThemeProvider";
import Glow from "@/components/Docs/Components/Glow/Glow";

const reports = [
    {
        title: "Monthly Summary - May 2024",
        subtitle: "PDF • Generated 2 min ago",
    },
    {
        title: "Tax Report - FY 2023-24",
        subtitle: "PDF • Generated May 10, 2024",
    },
    {
        title: "Spending Analysis - Q2",
        subtitle: "PDF • Generated Apr 30, 2024",
    },
]

function ExecutiveSummaryCards() {
    const { theme } = useTheme()
    return (
        <div className="relative overflow-hidden transition-colors duration-300  rounded-2xl border dark:border-[#222121] border-black/10">
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
                className="p-4 transition-colors duration-300"
            >

                <div className="relative z-10">

                    {/* Heading */}
                    <div>

                        <h2 className={`${manrope.className} text-[12px] text-gray-900 dark:text-white transition-colors duration-300`}>
                            Executive Summary
                        </h2>

                    </div>

                    {/* Reports */}
                    <div className="mt-6 space-y-2">

                        {reports.map((report) => (

                            <div
                                key={report.title}
                                className="group flex items-center justify-between rounded-[8px] border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] p-2 transition-all duration-300 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                            >

                                {/* Left Side */}
                                <div className="flex items-center gap-4 py-3">

                                    {/* Icon */}
                                    <div className="flex p-2 items-center justify-center rounded-[8px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] transition-colors duration-300">

                                        <FileText
                                            size={10}
                                            className="text-gray-700 dark:text-white/80 transition-colors duration-300"
                                            strokeWidth={2}
                                        />

                                    </div>

                                    {/* Content */}
                                    <div>

                                        <h3 className={`${manrope.className} text-[10px] font-semibold text-gray-900 dark:text-white transition-colors duration-300`}>
                                            {report.title}
                                        </h3>

                                        <p className={`${manrope.className} text-[9px] text-gray-500 dark:text-white/40 transition-colors duration-300`}>
                                            {report.subtitle}
                                        </p>

                                    </div>

                                </div>

                                {/* Right Side */}
                                <div className="flex items-center gap-3">

                                    {/* View Button */}
                                    <button className={`${manrope.className} flex h-7 items-center gap-2 rounded-[7px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-2 text-[10px] font-medium text-gray-700 dark:text-white/75 transition-all duration-300 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white`}>

                                        <Eye
                                            size={10}
                                            strokeWidth={2.3}
                                        />

                                        View

                                    </button>

                                    {/* Menu */}
                                    <button className="flex p-2 items-center justify-center rounded-[8px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-gray-500 dark:text-white/55 transition-all duration-300 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white">

                                        <EllipsisVertical
                                            size={10}
                                            strokeWidth={2.3}
                                        />

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </Glow>
        </div>
    )
}

export default ExecutiveSummaryCards