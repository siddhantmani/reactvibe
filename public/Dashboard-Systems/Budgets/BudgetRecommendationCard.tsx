"use client"

import React from "react"
import {
    Lightbulb,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";

const fontBold = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});


function BudgetRecommendationCard() {

    return (
        <div className="relative overflow-hidden rounded-[28px] border border-[#DDEEDD] bg-[#ffffff] p-3 px-3 aspect-auto">

            {/* Soft Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(34,197,94,0.08),_transparent_35%)]" />



            {/* Left */}
            <div className="flex flex-col 2xl:flex-row items-center">
                <div className="flex items-center gap-5">

                    {/* Icon */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#E6F8E8] shadow-[0_10px_30px_rgba(34,197,94,0.08)]">

                        <Lightbulb
                            size={60}
                            className="text-[#16A34A]"
                            strokeWidth={2.2}
                        />

                    </div>

                    {/* Content */}
                    <div>

                        <h2 className={`${fontBold.className} text-[18px] text-[#111827]`}>
                            Set realistic budgets
                        </h2>

                        <p className={`${fontBold.className} mt-3 text-[15px] leading-[1.7] text-[#6B7280]`}>
                            Based on your spending history, consider
                            increasing your Food & Dining budget.
                        </p>

                    </div>
                </div>

                {/* Button */}
                <button className={`${fontBold.className} flex h-10 shrink-0 items-center gap-2 rounded-[5px] border border-[#D7E7D7] bg-white px-2 text-[12px] font-semibold text-[#374151] shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:gap-3 hover:bg-[#FCFFFC]`}>

                    View Tips

                    <ArrowRight
                        size={16}
                        strokeWidth={2.5}
                    />

                </button>
            </div>
        </div>
    )
}

export default BudgetRecommendationCard