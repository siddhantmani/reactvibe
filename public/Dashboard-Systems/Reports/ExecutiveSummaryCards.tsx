"use client";

import { motion } from "framer-motion";

import React from "react";

import {
    EllipsisVertical,
    Eye,
    FileText,
} from "lucide-react";

import { Manrope } from "next/font/google";

const reports = [
    {
        title: "Monthly Summary - May 2024",
        subtitle: "PDF • Generated 2 min ago",
    },
    {
        title: "Tax Report - FY 2023-24",
        subtitle: "PDF • Generated May 10, 2024",
    },
    {
        title: "Spending Analysis - Q2",
        subtitle: "PDF • Generated Apr 30, 2024",
    },
];

const fontBold = Manrope({
    weight: "500",
    subsets: ["latin"],
});

function ExecutiveSummaryCards() {

    return (

        <div
            className="relative overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)]"
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.05),_transparent_40%)]" />

            {/* Purple Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#8B5CF6]/[0.04] blur-3xl" />

            <div className="relative z-10">

                {/* Heading */}
                <div>

                    <h2
                        className={`${fontBold.className} text-[15px] tracking-[-0.04em] text-[#111111]`}
                    >
                        Executive Summary
                    </h2>

                    <p
                        className={`${fontBold.className} mt-1 text-[11px] text-black/45`}
                    >
                        Generated reports and financial insights.
                    </p>

                </div>

                {/* Reports */}
                <div className="mt-7 space-y-4">

                    {reports.map((report, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.35,
                                delay: index * 0.06,
                            }}
                            className="group relative overflow-hidden rounded-[16px] border border-black/[0.06] bg-black/[0.015] p-4 transition-all duration-300 hover:bg-black/[0.025] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                        >

                            {/* Card Glow */}
                            <div className="absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full bg-[#8B5CF6]/[0.03] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10 flex items-center justify-between">

                                {/* Left Side */}
                                <div className="flex items-center gap-4">

                                    {/* Icon */}
                                    <div
                                        className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-black/[0.05] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.03)]"
                                    >

                                        <FileText
                                            size={18}
                                            className="text-[#8B5CF6]"
                                            strokeWidth={2.2}
                                        />

                                    </div>

                                    {/* Content */}
                                    <div>

                                        <h3
                                            className={`${fontBold.className} text-[12px] text-[#111111]`}
                                        >
                                            {report.title}
                                        </h3>

                                        <p
                                            className={`${fontBold.className} mt-2 text-[10px] text-black/40`}
                                        >
                                            {report.subtitle}
                                        </p>

                                    </div>

                                </div>

                                {/* Right Side */}
                                <div className="flex items-center gap-3">

                                    {/* View Button */}
                                    <button
                                        className={`${fontBold.className} flex h-10 items-center gap-2 rounded-[10px] border border-black/[0.06] bg-white px-3 text-[10px] font-medium text-black/65 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-black hover:text-white`}
                                    >

                                        <Eye
                                            size={13}
                                            strokeWidth={2.3}
                                        />

                                        View

                                    </button>

                                    {/* Menu */}
                                    <button
                                        className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-black/[0.06] bg-white text-black/45 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-black hover:text-white"
                                    >

                                        <EllipsisVertical
                                            size={13}
                                            strokeWidth={2.3}
                                        />

                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default ExecutiveSummaryCards;