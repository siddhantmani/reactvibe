"use client"

import React from "react"
import {
    Lightbulb,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";
import Glow from "@/components/Docs/Components/Glow/Glow";
import { useTheme } from "@/components/ThemeProvider";

const fontBold = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});


function BudgetRecommendationCard() {
    const { theme } = useTheme()

    return (
        <div className="w-full rounded-2xl border border-black/10 dark:border-white/10">
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

                {/* Left */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-5">

                        {/* Icon */}
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#E6F8E8] dark:bg-[#12331D] shadow-[0_10px_30px_rgba(34,197,94,0.08)] dark:shadow-none">

                            <Lightbulb
                                size={60}
                                className="text-[#16A34A]"
                                strokeWidth={2.2}
                            />

                        </div>

                        {/* Content */}
                        <div className="space-y-3">

                            <h2 className={`${fontBold.className} text-[18px] text-[#111827] dark:text-white`}>
                                Set realistic budgets
                            </h2>

                            <p className={`${fontBold.className} text-[15px] leading-[1.7] text-[#6B7280] dark:text-white/70`}>
                                Based on your spending history, consider
                                increasing your Food & Dining budget.
                            </p>
                            <button className={`${fontBold.className} flex items-center h-10 shrink-0 gap-2 rounded-[5px] border border-[#D7E7D7] dark:border-white/10 bg-white dark:bg-[#070606] px-2 text-[12px] font-semibold text-[#374151] hover:text-black dark:text-white/60 shadow-[0_8px_25px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-300 hover:gap-3 hover:bg-[#FCFFFC] dark:hover:text-white z-50`}>

                                View Tips

                                <ArrowRight
                                    size={16}
                                    strokeWidth={2.5}
                                />

                            </button>

                        </div>
                    </div>

                    {/* Button */}
                </div>
            </Glow>
        </div>
    )
}

export default BudgetRecommendationCard