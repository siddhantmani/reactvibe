"use client"

import React from "react"
import {
    Sparkles,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});


function TransactionSmartInsights() {

    return (
        <div className="relative overflow-hidden rounded-[15px] border border-[#E9DDFD] bg-gradient-to-br from-[#FBF8FF] to-[#F8F5FF] p-3 px-3">

            {/* Background Glow */}
            <div className="absolute right-[-40px] top-[-40px] h-[180px] w-[180px] rounded-full bg-[#A970FF]/10 blur-3xl" />

            <div className="relative z-10 space-y-4">

                {/* Top */}
                <div className="flex items-center gap-0">

                    <div className="flex h-8 w-8 items-center justify-center">

                        <Sparkles
                            size={14}
                            className="text-[#8B5CF6]"
                            strokeWidth={2.4}
                        />

                    </div>

                    <h2 className={`${boldFont.className} text-[12px] text-[#111827]`}>
                        Smart Insights
                    </h2>

                </div>

                {/* Description */}
                <p className={`${boldFont.className} text-[12px] leading-[1.7] text-[#4B5563]`}>
                    You spent{" "}
                    <span className="font-semibold text-[#8B5CF6]">
                        18% more
                    </span>{" "}
                    on Food & Dining
                    compared to last month.
                </p>

                {/* Button */}
                <button className={`${boldFont.className} flex h-8 items-center gap-2 rounded-[8px] border border-[#D9C2FF] bg-white px-2 text-[12px] text-[#8B5CF6] shadow-[0_8px_25px_rgba(139,92,246,0.06)] transition-all duration-300 hover:gap-3 hover:border-[#C4A2FF] hover:bg-[#FCFAFF]`}>

                    View Insights

                    <ArrowRight
                        size={12}
                        strokeWidth={2.5}
                    />

                </button>

            </div>

        </div>
    )
}

export default TransactionSmartInsights