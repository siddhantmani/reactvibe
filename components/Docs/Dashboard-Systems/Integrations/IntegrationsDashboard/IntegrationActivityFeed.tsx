"use client"

import { motion } from "framer-motion"
import React from "react"
import {
    ArrowRight,
    BadgeCheck,
} from "lucide-react"
import { Manrope } from "next/font/google"

const fontBold = Manrope({
    weight: "600",
    subsets: ["latin"],
})

const activities = [
    {
        name: "Stripe",
        description: "Payment data synced",
        time: "2 min ago",
        logo: "S",
        logoBg: "bg-[#635BFF]/10",
        logoColor: "text-[#635BFF]",
    },
    {
        name: "Xero",
        description: "Bank transactions updated",
        time: "5 min ago",
        logo: "X",
        logoBg: "bg-[#13B5EA]/10",
        logoColor: "text-[#0EA5E9]",
    },
    {
        name: "Slack",
        description: "Expense alerts enabled",
        time: "15 min ago",
        logo: "#",
        logoBg: "bg-[#E879F9]/10",
        logoColor: "text-[#D946EF]",
    },
    {
        name: "Google Analytics",
        description: "Data import completed",
        time: "30 min ago",
        logo: "G",
        logoBg: "bg-[#F59E0B]/10",
        logoColor: "text-[#F59E0B]",
    },
]

function IntegrationActivityFeed() {

    return (

        <div
            className="relative overflow-hidden rounded-[18px] border border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#070606] p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-none"
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.05),_transparent_40%)]" />

            {/* Glow Blob */}
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#22C55E]/[0.04] blur-3xl" />

            <div className="relative z-10">

                {/* Top */}
                <div className="flex items-center justify-between">

                    <div>

                        <h2
                            className={`${fontBold.className} text-[13px] tracking-[-0.03em] text-[#111111] dark:text-white`}
                        >
                            Recent Activity
                        </h2>

                        <p
                            className={`${fontBold.className} mt-1 text-[10px] text-black/45 dark:text-white/60`}
                        >
                            Latest integration updates
                        </p>

                    </div>

                    <button
                        className={`${fontBold.className} group flex items-center gap-2 text-[11px] font-semibold text-[#16A34A] dark:text-[#63D98D] transition-all duration-300 hover:gap-3`}
                    >

                        View All Activity

                        <ArrowRight
                            size={13}
                            strokeWidth={2.3}
                            className="transition-transform duration-300 group-hover:translate-x-[2px]"
                        />

                    </button>

                </div>

                {/* Activities */}
                <div className="mt-5 grid grid-cols-4 gap-4">

                    {activities.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.06,
                            }}
                            className="group flex items-start gap-4 rounded-[14px] border border-black/[0.06] dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.03] p-4 transition-all duration-300 hover:bg-black/[0.025] dark:hover:bg-white/[0.05] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-none"
                        >

                            {/* Logo */}
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-black/[0.05] dark:border-white/10 ${item.logoBg} shadow-[0_4px_14px_rgba(0,0,0,0.03)] dark:shadow-none`}
                            >

                                <span
                                    className={`${fontBold.className} text-[13px] ${item.logoColor}`}
                                >
                                    {item.logo}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="flex-1">

                                {/* Top Row */}
                                <div className="flex items-center gap-2">

                                    <h3
                                        className={`${fontBold.className} text-[12px] text-[#111111] dark:text-white`}
                                    >
                                        {item.name}
                                    </h3>

                                    <BadgeCheck
                                        size={13}
                                        className="text-[#16A34A]"
                                        strokeWidth={2.3}
                                    />

                                </div>

                                {/* Description */}
                                <p
                                    className={`${fontBold.className} mt-2 text-[10px] leading-[1.6] text-black/50 dark:text-white/65`}
                                >
                                    {item.description}
                                </p>

                                {/* Time */}
                                <div className="mt-4 flex items-center gap-2">

                                    <div className="h-[5px] w-[5px] rounded-full bg-[#16A34A]" />

                                    <p
                                        className={`${fontBold.className} text-[10px] text-black/35 dark:text-white/45`}
                                    >
                                        {item.time}
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </div>

    )
}

export default IntegrationActivityFeed