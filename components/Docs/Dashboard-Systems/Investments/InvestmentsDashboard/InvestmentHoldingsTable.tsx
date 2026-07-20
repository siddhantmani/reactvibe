"use client"

import React from "react"
import { ArrowRight } from "lucide-react"
import { Manrope } from "next/font/google"

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const holdings = [
    {
        asset: "Apple Inc.",
        symbol: "(AAPL)",
        type: "Stock",
        quantity: 50,
        avgPrice: "$150.00",
        currentPrice: "$189.20",
        value: "$9,460.00",
        gain: "+$1,960.00",
        percent: "+26.12%",
        positive: true,
        logo: "",
        logoBg: "bg-black",
        logoText: "text-white",
    },
    {
        asset: "Vanguard S&P 500 ETF",
        symbol: "(VOO)",
        type: "ETF",
        quantity: 30,
        avgPrice: "$375.20",
        currentPrice: "$432.80",
        value: "$12,984.00",
        gain: "+$1,728.00",
        percent: "+15.35%",
        positive: true,
        logo: "V",
        logoBg: "bg-[#991B1B]",
        logoText: "text-white",
    },
    {
        asset: "Microsoft Corp.",
        symbol: "(MSFT)",
        type: "Stock",
        quantity: 40,
        avgPrice: "$280.50",
        currentPrice: "$415.30",
        value: "$16,612.00",
        gain: "+$5,906.00",
        percent: "+48.25%",
        positive: true,
        logo: "◼",
        logoBg: "bg-[#2563EB]",
        logoText: "text-white",
    },
    {
        asset: "US Treasury Bond 10Y",
        symbol: "(UST10Y)",
        type: "Bond",
        quantity: 20,
        avgPrice: "$98.50",
        currentPrice: "$101.20",
        value: "$2,024.00",
        gain: "+$54.00",
        percent: "+2.74%",
        positive: true,
        logo: "🛡",
        logoBg: "bg-[#EEF2FF]",
        logoText: "text-[#4338CA]",
    },
    {
        asset: "Real Estate Fund",
        symbol: "(VNQ)",
        type: "ETF",
        quantity: 25,
        avgPrice: "$92.30",
        currentPrice: "$96.10",
        value: "$2,402.50",
        gain: "+$95.00",
        percent: "+4.12%",
        positive: true,
        logo: "🏢",
        logoBg: "bg-[#F3F4F6]",
        logoText: "text-[#111827]",
    },
]

function InvestmentHoldingsTable() {

    return (

        <div
            className={`${boldFont.className} relative overflow-hidden rounded-[18px] border border-black/[0.06] bg-white dark:bg-[#070606] dark:border-white/10 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)]`}
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.05),_transparent_45%)]" />

            {/* Soft Glow */}
            <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#22C55E]/[0.04] blur-3xl" />

            <div className="relative z-10">

                {/* Heading */}
                <div className="flex items-center justify-between px-2">

                    <div>

                        <h2
                            className={`${boldFont.className} text-[15px] tracking-[-0.03em] text-[#111111] dark:text-white`}
                        >
                            Your Holdings
                        </h2>
                        <p
                            className={`${boldFont.className} mt-1 text-[12px] text-black/70 dark:text-white/60`}
                        >
                            Portfolio allocation overview
                        </p>

                    </div>

                </div>

                {/* Table */}
                <div className="mt-6 overflow-hidden rounded-[16px] border border-black/[0.06] dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.03]">

                    {/* Header */}
                    <div className="grid grid-cols-[2.2fr_1fr_1fr_1.2fr_1.2fr_1.2fr_1.4fr] items-center border-b border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] px-6 py-4">

                        {[
                            "Asset",
                            "Type",
                            "Quantity",
                            "Avg. Price",
                            "Current Price",
                            "Value",
                            "Gain / Loss",
                        ].map((item) => (

                            <p
                                key={item}
                                className={`${boldFont.className} text-[12px] whitespace-nowrap uppercase tracking-[0.04em] text-black/70 dark:text-white/50`}
                            >
                                {item}
                            </p>

                        ))}

                    </div>

                    {/* Rows */}
                    {holdings.map((item, index) => (

                        <div
                            key={index}
                            className="group grid grid-cols-[2.2fr_1fr_1fr_1.2fr_1.2fr_1.2fr_1.4fr] items-center border-b border-black/[0.05] dark:border-white/10 px-6 py-5 transition-all duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
                        >

                            {/* Asset */}
                            <div className="flex items-center gap-4">

                                {/* Logo */}
                                <div
                                    className={`flex h-6 w-6 items-center justify-center rounded-[4px] text-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.06)] ${item.logoBg} ${item.logoText}`}
                                >
                                    {item.logo}
                                </div>

                                {/* Name */}
                                <div>

                                    <h3
                                        className={`${boldFont.className} text-[12px] text-[#111111] dark:text-white transition-colors duration-300 group-hover:text-black dark:group-hover:text-white`}
                                    >
                                        {item.asset}
                                    </h3>

                                    <p
                                        className={`${boldFont.className} mt-1 text-[10px] text-black/40 dark:text-white/45`}
                                    >
                                        {item.symbol}
                                    </p>

                                </div>

                            </div>

                            {/* Type */}
                            <p
                                className={`${boldFont.className} text-[12px] text-black/65 dark:text-white/70`}
                            >
                                {item.type}
                            </p>

                            {/* Quantity */}
                            <p
                                className={`${boldFont.className} text-[12px] text-[#111111] dark:text-white`}
                            >
                                {item.quantity}
                            </p>

                            {/* Avg */}
                            <p
                                className={`${boldFont.className} text-[12px] text-[#111111] dark:text-white`}
                            >
                                {item.avgPrice}
                            </p>

                            {/* Current */}
                            <p
                                className={`${boldFont.className} text-[12px] text-[#111111] dark:text-white`}
                            >
                                {item.currentPrice}
                            </p>

                            {/* Value */}
                            <p
                                className={`${boldFont.className} text-[12px] text-[#111111] dark:text-white`}
                            >
                                {item.value}
                            </p>

                            {/* Gain */}
                            <div>

                                <p
                                    className={`${boldFont.className} text-[12px] ${item.positive
                                        ? "text-[#16A34A]"
                                        : "text-[#DC2626]"
                                        }`}
                                >
                                    {item.gain}
                                </p>

                                <p
                                    className={`${boldFont.className} mt-[2px] text-[9px] ${item.positive
                                        ? "text-[#16A34A]"
                                        : "text-[#DC2626]"
                                        }`}
                                >
                                    {item.percent}
                                </p>

                            </div>

                        </div>

                    ))}

                    {/* Footer CTA */}
                    <div className="p-4">

                        <button
                            className={`${boldFont.className} flex h-11 w-full items-center justify-center gap-2 rounded-[10px] border border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#070606] text-[12px] font-semibold text-[#111111] dark:text-white/60 dark:hover:text-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none hover:bg-black dark:hover:bg-[#0a0909] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] dark:hover:shadow-none`}
                        >
                            View all holdings

                            <ArrowRight
                                size={13}
                                strokeWidth={2.5}
                            />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default InvestmentHoldingsTable