"use client"

import React from "react"
import {
    Sparkles,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";
import { useTheme } from "@/components/ThemeProvider";
import Glow from "@/components/Docs/Components/Glow/Glow";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});


function TransactionSmartInsights() {
    const { theme } = useTheme();

    return (
        <div className="rounded-2xl border border-[#E9DDFD] dark:border-[#2A1F3D]">
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
                className="p-4 h-full "
            >

                <div className="relative z-10 space-y-4">

                    {/* Top */}
                    <div className="flex items-center gap-0">

                        <div className="flex h-8 w-8 items-center justify-center">

                            <Sparkles
                                size={14}
                                className="text-[#16A34A]"
                                strokeWidth={2.4}
                            />

                        </div>

                        <h2 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                            Smart Insights
                        </h2>

                    </div>

                    {/* Description */}
                    <p className={`${boldFont.className} text-[12px] leading-[1.7] text-[#4B5563] dark:text-white/60`}>
                        You spent{" "}
                        <span className="font-semibold text-[#16A34A]">
                            18% more
                        </span>{" "}
                        on Food & Dining
                        compared to last month.
                    </p>

                    {/* Button */}
                    <button className={`${boldFont.className} flex h-8 items-center gap-2 rounded-[8px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#070606] px-2 text-[12px] text-black/60 hover:text-black shadow-[0_8px_25px_rgba(139,92,246,0.06)] dark:shadow-none transition-all duration-300 hover:gap-3 hover:border-black/10 dark:text-white/60 hover:bg-[#FCFAFF] dark:hover:text-white`}>

                        View Insights

                        <ArrowRight
                            size={12}
                            strokeWidth={2.5}
                        />

                    </button>

                </div>
            </Glow>

        </div>
    )
}

export default TransactionSmartInsights