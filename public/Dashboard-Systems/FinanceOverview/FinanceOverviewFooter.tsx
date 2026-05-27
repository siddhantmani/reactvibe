"use client"
import { motion } from "framer-motion"

import React from 'react'

import { Manrope } from "next/font/google";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});


function FinanceOverviewFooter() {
    return (
        <footer className="w-full  border-black/10 px-3 py-3">
            <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.2
                }}

                className="flex items-center justify-between flex-wrap gap-4">

                {/* Left Side */}
                <div>
                    <p className={`${boldFont.className} text-[11px] text-[#6B7280]`}>
                        © 2026 Taskforge. All rights reserved.
                    </p>
                </div>

                {/* Right Side */}
                <div className={`${boldFont.className} flex items-center gap-8`}>


                    <button className="text-[11px] text-[#6B7280] hover:text-[#111827] transition-colors duration-300">
                        Privacy Policy
                    </button>

                    <button className="text-[11px] text-[#6B7280] hover:text-[#111827] transition-colors duration-300">
                        Terms of Service
                    </button>

                    <button className="text-[11px] text-[#6B7280] hover:text-[#111827] transition-colors duration-300">
                        Help Center
                    </button>
                </div>
            </motion.div>
        </footer>
    )
}

export default FinanceOverviewFooter