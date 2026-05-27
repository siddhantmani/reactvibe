"use client"

import React from "react"
import {
    ArrowDown,
    ArrowUp,
} from "lucide-react"
import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});


const activities = [
    {
        name: "Amazon.com",
        amount: "-$89.99",
        time: "Today, 10:42 AM",
        logo: "a",
        logoBg: "bg-[#F3F4F6]",
        logoColor: "text-[#111827]",
        positive: false,
    },
    {
        name: "Direct Deposit",
        amount: "+$4,250.00",
        time: "Today, 8:00 AM",
        logo: "↓",
        logoBg: "bg-[#DCFCE7]",
        logoColor: "text-[#16A34A]",
        positive: true,
    },
    {
        name: "Netflix",
        amount: "-$15.99",
        time: "May 30, 7:30 PM",
        logo: "N",
        logoBg: "bg-black",
        logoColor: "text-[#E50914]",
        positive: false,
    },
    {
        name: "Uber Ride",
        amount: "-$24.50",
        time: "May 30, 6:12 PM",
        logo: "ub",
        logoBg: "bg-black",
        logoColor: "text-white",
        positive: false,
    },
]

function RecentTransactionActivity() {

    return (
        <div className="rounded-[15px] border border-black/10 bg-white p-3 px-3 aspect-video">

            {/* Top */}
            <div className="flex items-center justify-between">

                <h2 className={`${boldFont.className} text-[13px] text-[#111827]`}>
                    Recent Activity
                </h2>

                <button className={`${boldFont.className} text-[12px] text-[#16A34A] transition-all duration-300 hover:text-[#15803D]`}>
                    View all
                </button>

            </div>

            {/* Activity List */}
            <div className="mt-2 space-y-2">

                {activities.map((item, index) => (

                    <div
                        key={index}
                        className="group flex items-center justify-between rounded-2xl py-2 transition-all duration-300 hover:bg-black/[0.02]"
                    >

                        {/* Left */}
                        <div className="flex items-center gap-4">

                            {/* Logo */}
                            <div
                                className={`flex h-5 w-5 items-center justify-center rounded-[4px] text-[14px] font-bold ${item.logoBg}`}
                            >

                                <span
                                    className={`text-[12px] font-bold ${item.logoColor}`}
                                >
                                    {item.logo}
                                </span>

                            </div>

                            {/* Name */}
                            <div>

                                <h3 className={`${boldFont.className} whitespace-nowrap text-[12px] text-[#111827]`}>
                                    {item.name}
                                </h3>

                            </div>

                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">

                            {/* Amount */}
                        

                            <LinearReveal
                                as='p'
                                delay={0.2}
                                Text={item.amount}
                                className={`text-[11px] ${item.positive
                                    ? "text-[#16A34A]"
                                    : "text-[#FF3B30]"
                                    }`}
                            />

                            {/* Time */}
                            <p className={`${boldFont.className} text-[10px] text-[#6B7280]`}>
                                {item.time}
                            </p>

                            {/* Arrow */}
                            <div
                                className={`flex items-center justify-center rounded-full`}
                            >

                                {item.positive ? (
                                    <ArrowUp
                                        size={12}
                                        className="text-[#16A34A]"
                                        strokeWidth={2.8}
                                    />
                                ) : (
                                    <ArrowDown
                                        size={12}
                                        className="text-[#FF3B30]"
                                        strokeWidth={2.8}
                                    />
                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default RecentTransactionActivity