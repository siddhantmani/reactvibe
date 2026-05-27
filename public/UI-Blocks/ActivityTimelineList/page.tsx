"use client"

import { motion } from "framer-motion"

import React from "react"
import {
    ArrowDown,
    ArrowUp,
} from "lucide-react"
import { Manrope } from "next/font/google";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});

const activities = [
    {
        bank: "Chase Checking",
        description: "Synced successfully",
        time: "2 min ago",
        logo: "C",
        logoBg: "bg-[#0057B8]",
        positive: true,
    },
    {
        bank: "Wells Fargo Credit Card",
        description: "Payment of $250.00",
        time: "1 hr ago",
        logo: "WF",
        logoBg: "bg-[#B91C1C]",
        positive: false,
    },
    {
        bank: "Robinhood Brokerage",
        description: "Dividend received",
        time: "3 hrs ago",
        logo: "R",
        logoBg: "bg-[#16A34A]",
        positive: true,
    },
    {
        bank: "Bank of America Savings",
        description: "Interest earned",
        time: "1 day ago",
        logo: "B",
        logoBg: "bg-[#E11D48]",
        positive: false,
    },
]

function Page() {

    return (
        <motion.div

            initial={{ opacity: 0, filter: "blur(6px)" }}
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
            exit={{ opacity: 0, y: -10 }}
            className="rounded-[15px] aspect-video border border-black/10 bg-white p-3 px-3">

            {/* Heading */}
            <div>

                <h2 className={`${boldFont.className} text-[14px] text-[#111827]`}>
                    Activity Timeline List
                </h2>

            </div>

            {/* Activities */}
            <div className="mt-7 space-y-0">

                {activities.map((item, index) => (

                    <div
                        key={index}
                        className="flex items-center justify-between rounded-2xl p-3 transition-all duration-300 hover:bg-black/[0.02]"
                    >

                        {/* Left */}
                        <div className="flex items-center gap-4">

                            {/* Logo */}
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[14px] font-bold text-white ${item.logoBg}`}
                            >
                                {item.logo}
                            </div>

                            {/* Arrow */}
                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full ${item.positive
                                    ? "bg-[#DCFCE7]"
                                    : "bg-[#FEE2E2]"
                                    }`}
                            >

                                {item.positive ? (
                                    <ArrowUp
                                        size={13}
                                        className="text-[#16A34A]"
                                        strokeWidth={2.8}
                                    />
                                ) : (
                                    <ArrowDown
                                        size={13}
                                        className="text-[#DC2626]"
                                        strokeWidth={2.8}
                                    />
                                )}

                            </div>

                            {/* Content */}
                            <div>

                                <h3 className={`${boldFont.className} text-[13px] text-[#111827]`}>
                                    {item.bank}
                                </h3>

                                <p className={`${boldFont.className} text-[10px] text-[#6B7280]`}>
                                    {item.description}
                                </p>

                            </div>

                        </div>

                        {/* Time */}
                        <p className={`${boldFont.className} text-[12px] text-[#6B7280]`}>
                            {item.time}
                        </p>

                    </div>

                ))}

            </div>

        </motion.div>
    )
}

export default Page