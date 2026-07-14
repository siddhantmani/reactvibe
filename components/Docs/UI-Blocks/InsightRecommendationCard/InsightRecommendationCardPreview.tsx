"use client"
import { motion } from "framer-motion"

import React from "react"
import {
    Lightbulb,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";

const fontBold = Manrope({
    weight: '500',
    subsets: ['latin']
});

function InsightRecommendationCardPreview() {

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className="relative overflow-hidden rounded-[28px] border border-[#DDEEDD] dark:border-white/10 bg-[#ffffff] dark:bg-[#0c0c0c] p-3 px-3 aspect-auto">

            {/* Soft Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(34,197,94,0.08),_transparent_35%)] dark:bg-[radial-gradient(circle_at_left,_rgba(34,197,94,0.12),_transparent_35%)]" />

            {/* Left */}
            <div className="flex flex-col 2xl:flex-row items-center">
                <div className="flex items-center gap-5">

                    {/* Icon */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#E6F8E8] dark:bg-green-500/15 shadow-[0_10px_30px_rgba(34,197,94,0.08)] dark:shadow-none">

                        <Lightbulb
                            size={60}
                            className="text-[#16A34A] dark:text-green-400"
                            strokeWidth={2.2}
                        />

                    </div>

                    {/* Content */}
                    <div>

                        <h2 className={`${fontBold.className} text-[18px] text-[#111827] dark:text-white`}>
                            Set realistic budgets
                        </h2>

                        <p className={`${fontBold.className} mt-3 text-[15px] leading-[1.7] text-[#6B7280] dark:text-gray-400`}>
                            Based on your spending history, consider
                            increasing your Food & Dining budget.
                        </p>

                        <button className={`${fontBold.className} mt-2 flex h-10 shrink-0 items-center gap-2 rounded-[5px] border border-[#D7E7D7] dark:border-white/10 bg-white dark:bg-[#0c0c0c] px-2 text-[12px] font-semibold text-[#374151] dark:text-gray-300 shadow-[0_8px_25px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-300 hover:gap-3 hover:bg-[#FCFFFC] dark:hover:bg-white/[0.03]`}>

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
        </motion.div>
    )
}

export default InsightRecommendationCardPreview