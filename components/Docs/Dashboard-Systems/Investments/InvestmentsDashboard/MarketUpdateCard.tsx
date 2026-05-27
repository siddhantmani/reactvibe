"use client"

import React from "react"
import {
    ArrowRight,
    TrendingUp,
} from "lucide-react"
import { Manrope } from "next/font/google"

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
})

function MarketUpdateCard() {

    return (

        <div
            className={`${boldFont.className} relative overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)] w-[450px]`}
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.05),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.04),_transparent_45%)]" />

            {/* Soft Green Glow */}
            <div className="absolute left-[-40px] top-[-40px] h-[180px] w-[180px] rounded-full bg-[#22C55E]/[0.05] blur-3xl" />

            <div className="relative z-10">

                {/* Top */}
                <div className="flex items-center justify-between px-2">

                    <div>

                        <h2
                            className={`${boldFont.className} text-[13px] tracking-[-0.03em] text-[#111111]`}
                        >
                            Market Update
                        </h2>

                        <p
                            className={`${boldFont.className} mt-1 text-[10px] text-black/45`}
                        >
                            Daily market performance snapshot
                        </p>

                    </div>

                    <button
                        className={`${boldFont.className} group flex items-center gap-2 text-[11px] font-semibold text-[#16A34A] transition-all duration-300 hover:gap-3`}
                    >

                        View full update

                        <ArrowRight
                            size={14}
                            strokeWidth={2.5}
                            className="transition-transform duration-300 group-hover:translate-x-[2px]"
                        />

                    </button>

                </div>

                {/* Content */}
                <div
                    className="mt-3 flex items-start gap-5 rounded-[18px] border border-black/[0.06] bg-black/[0.015] p-3 transition-all duration-300 hover:bg-black/[0.025] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                >

                    {/* Icon */}
                    <div
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] border border-[#22C55E]/10 bg-[#22C55E]/[0.05] shadow-[0_10px_30px_rgba(34,197,94,0.08)]"
                    >

                        <TrendingUp
                            size={28}
                            className="text-[#16A34A]"
                            strokeWidth={2.2}
                        />

                    </div>

                    {/* Text */}
                    <div className="pt-1">

                        {/* Badge */}
                        <div
                            className="inline-flex items-center rounded-full border border-[#22C55E]/10 bg-[#22C55E]/[0.06] px-2.5 py-1"
                        >

                            <span
                                className={`${boldFont.className} text-[9px] uppercase tracking-[0.06em] text-[#16A34A]`}
                            >
                                Bullish Market
                            </span>

                        </div>

                        {/* Main Text */}
                        <p
                            className={`${boldFont.className} mt-2 max-w-[85%] text-[12px] leading-[1.8] text-black/60`}
                        >

                            Markets are trending upward today. The{" "}

                            <span className="font-semibold text-[#111111]">
                                S&P 500
                            </span>{" "}

                            gained{" "}

                            <span className="font-semibold text-[#16A34A]">
                                +0.56%
                            </span>{" "}

                            while the{" "}

                            <span className="font-semibold text-[#111111]">
                                NASDAQ
                            </span>{" "}

                            advanced{" "}

                            <span className="font-semibold text-[#16A34A]">
                                +0.78%
                            </span>

                            .

                        </p>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default MarketUpdateCard