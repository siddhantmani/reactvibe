"use client"

import React from "react"
import {
    ChevronDown,
    Download,
    Share2,
} from "lucide-react"

import { Manrope } from "next/font/google"

const fontBold = Manrope({
    weight: "500",
    subsets: ["latin"],
})

function ReportsExportHeader() {

    return (

        <div
            className="relative overflow-hidden px-4 py-4"
        >

            {/* Background Glow */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.04),_transparent_40%)]" /> */}

            {/* Purple Glow */}
            {/* <div className="absolute right-[-80px] top-[-80px]  rounded-full bg-[#8B5CF6]/[0.05] blur-3xl" /> */}

            <div className="relative z-10 flex items-center justify-between">

                {/* Left Side */}

                {/* Right Side */}
                <div className="flex items-center justify-end  gap-3">

                    {/* Date Range */}
                    <button
                        className={`${fontBold.className} flex h-11 items-center gap-3 rounded-[10px] border border-black/[0.06] bg-black/[0.02] px-2 text-[12px] font-medium text-black/65 backdrop-blur-md transition-all duration-300 hover:bg-black/[0.04] hover:text-black whitespace-nowrap`}
                    >

                        May 1 – May 31, 2024

                        <ChevronDown
                            size={16}
                            strokeWidth={2.3}
                        />

                    </button>

                    {/* Share */}
                    <button
                        className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-black/[0.06] bg-black/[0.02] text-black/55 backdrop-blur-md transition-all duration-300 hover:bg-black/[0.05] hover:text-black"
                    >

                        <Share2
                            size={16}
                            strokeWidth={2.2}
                        />

                    </button>

                    {/* Export */}
                    <button
                        className={`${fontBold.className} flex h-11 items-center gap-2 rounded-[10px] bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] px-2 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_40px_rgba(139,92,246,0.24)]`}
                    >

                        <Download
                            size={16}
                            strokeWidth={2.4}
                        />

                        Export

                        <ChevronDown
                            size={14}
                            strokeWidth={2.4}
                        />

                    </button>

                </div>

            </div>

        </div>

    )
}

export default ReportsExportHeader