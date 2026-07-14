"use client"
import { motion } from "framer-motion"

import React from "react"
import {
    AlertTriangle,
    ChevronRight,
    CircleAlert,
    Check,
} from "lucide-react"
import { Manrope } from "next/font/google";

const fontBold = Manrope({
    weight: '600',
    subsets: ['latin']
});

const alerts = [
    {
        title: "Health & Fitness",
        description: "You've exceeded your budget by $20.50",
        percentage: "107%",
        danger: true,
        icon: AlertTriangle,
        iconBg: "bg-[#FEF2F2] dark:bg-red-500/15",
        iconColor: "text-[#F97316] dark:text-orange-400",
    },
    {
        title: "Shopping",
        description: "You're close to your budget limit",
        percentage: "78%",
        danger: false,
        icon: CircleAlert,
        iconBg: "bg-[#EFF6FF] dark:bg-blue-500/15",
        iconColor: "text-[#3B82F6] dark:text-blue-400",
    },
    {
        title: "Great job!",
        description: "5 categories are on track",
        percentage: "",
        danger: false,
        icon: Check,
        iconBg: "bg-[#F0FDF4] dark:bg-green-500/15",
        iconColor: "text-[#16A34A] dark:text-green-400",
    },
]

function AlertNotificationListPreview() {

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
            className="rounded-[15px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0c0c] p-3 px-3 aspect-auto">

            {/* Top */}
            <div className="flex items-center justify-between">

                <h2 className={`${fontBold.className} text-[13px] text-[#111827] dark:text-white`}>
                    Alert Notification List
                </h2>

                <button className={`${fontBold.className} text-[13px] text-[#16A34A] dark:text-green-400 transition-all duration-300 hover:text-[#15803D] dark:hover:text-green-300`}>
                    View all
                </button>

            </div>

            {/* Alerts */}
            <div className="mt-7 overflow-hidden">

                {alerts.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className={`group flex items-center justify-between px-5 py-5 transition-all duration-300 hover:bg-black/[0.015] dark:hover:bg-white/[0.03] ${index !== alerts.length - 1
                                ? "border-b border-black/5 dark:border-white/10"
                                : ""
                                }`}
                        >

                            {/* Left */}
                            <div className="flex items-center gap-4">

                                {/* Icon */}
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-[4px] ${item.iconBg}`}
                                >

                                    <Icon
                                        size={15}
                                        className={item.iconColor}
                                        strokeWidth={2.3}
                                    />

                                </div>

                                {/* Content */}
                                <div>

                                    <h3 className={`${fontBold.className} text-[13px] text-[#111827] dark:text-white`}>
                                        {item.title}
                                    </h3>

                                    <p className={`${fontBold.className} text-[12px] text-[#6B7280] dark:text-gray-400`}>
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                            {/* Right */}
                            <div className="flex items-center">

                                {item.percentage && (
                                    <span
                                        className={`${fontBold.className} text-[14px] ${item.danger
                                            ? "text-[#EF4444] dark:text-red-400"
                                            : "text-[#374151] dark:text-gray-300"
                                            }`}
                                    >
                                        {item.percentage}
                                    </span>
                                )}

                                <button className="flex h-8 w-8 items-center justify-center rounded-xl text-[#9CA3AF] dark:text-gray-500 transition-all duration-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:text-[#111827] dark:hover:text-white">

                                    <ChevronRight
                                        size={14}
                                        strokeWidth={2.5}
                                    />

                                </button>

                            </div>

                        </div>
                    )
                })}

            </div>

        </motion.div>
    )
}

export default AlertNotificationListPreview