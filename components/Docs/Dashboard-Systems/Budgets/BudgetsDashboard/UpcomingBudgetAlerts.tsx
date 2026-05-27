"use client"

import React from "react"
import {
    AlertTriangle,
    ChevronRight,
    CircleAlert,
    Check,
} from "lucide-react"
import { Manrope } from "next/font/google";

const fontBold = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});


const alerts = [
    {
        title: "Health & Fitness",
        description: "You've exceeded your budget by $20.50",
        percentage: "107%",
        danger: true,
        icon: AlertTriangle,
        iconBg: "bg-[#FEF2F2]",
        iconColor: "text-[#F97316]",
    },
    {
        title: "Shopping",
        description: "You're close to your budget limit",
        percentage: "78%",
        danger: false,
        icon: CircleAlert,
        iconBg: "bg-[#EFF6FF]",
        iconColor: "text-[#3B82F6]",
    },
    {
        title: "Great job!",
        description: "5 categories are on track",
        percentage: "",
        danger: false,
        icon: Check,
        iconBg: "bg-[#F0FDF4]",
        iconColor: "text-[#16A34A]",
    },
]

function UpcomingBudgetAlerts() {

    return (
        <div className="rounded-[15px] border border-black/10 bg-white p-3 px-3 aspect-auto">

            {/* Top */}
            <div className="flex items-center justify-between">

                <h2 className={`${fontBold.className} text-[13px] text-[#111827]`}>
                    Upcoming Budget Alerts
                </h2>

                <button className={`${fontBold.className} text-[13px] text-[#16A34A] transition-all duration-300 hover:text-[#15803D]`}>
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
                            className={`group flex items-center justify-between px-5 py-5 transition-all duration-300 hover:bg-black/[0.015] ${index !== alerts.length - 1
                                ? "border-b border-black/5"
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

                                    <h3 className={`${fontBold.className} text-[13px] text-[#111827]`}>
                                        {item.title}
                                    </h3>

                                    <p className={`${fontBold.className} text-[12px] text-[#6B7280]`}>
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                            {/* Right */}
                            <div className="flex items-center">

                                {item.percentage && (
                                    <span
                                        className={`${fontBold.className} text-[14px] ${item.danger
                                            ? "text-[#EF4444]"
                                            : "text-[#374151]"
                                            }`}
                                    >
                                        {item.percentage}
                                    </span>
                                )}

                                <button className="flex h-8 w-8 items-center justify-center rounded-xl text-[#9CA3AF] transition-all duration-300 hover:bg-black/[0.04] hover:text-[#111827]">

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

        </div>
    )
}

export default UpcomingBudgetAlerts