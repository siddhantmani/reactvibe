"use client"

import React from "react"
import {
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google"

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
})

const transactions = [
    {
        asset: "Apple Inc. (AAPL)",
        date: "May 31, 2024",
        action: "Buy 10 shares",
        amount: "-$1,892.00",
        logo: "",
        logoBg: "bg-black",
        logoText: "text-white",
    },
    {
        asset: "Vanguard S&P 500 ETF (VOO)",
        date: "May 30, 2024",
        action: "Buy 5 shares",
        amount: "-$3,164.00",
        logo: "V",
        logoBg: "bg-[#991B1B]",
        logoText: "text-white",
    },
    {
        asset: "Microsoft Corp. (MSFT)",
        date: "May 28, 2024",
        action: "Buy 8 shares",
        amount: "-$3,322.40",
        logo: "◼",
        logoBg: "bg-[#2563EB]",
        logoText: "text-white",
    },
]

function InvestmentTransactionsList() {

    return (

        <div
            className={`${boldFont.className} relative overflow-hidden rounded-[18px] border border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#070606] p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-none w-[450px]`}
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.05),_transparent_45%)]" />

            {/* Soft Glow */}
            <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#22C55E]/[0.04] dark:bg-[#22C55E]/[0.08] blur-3xl" />

            <div className="relative z-10">

                {/* Top */}
                <div className="flex items-center justify-between">

                    <div>

                        <h2
                            className={`${boldFont.className} text-[13px] tracking-[-0.03em] text-[#111111] dark:text-white`}
                        >
                            Recent Transactions
                        </h2>

                        <p
                            className={`${boldFont.className} mt-1 text-[10px] text-black/45 dark:text-white/60`}
                        >
                            Latest portfolio activity
                        </p>

                    </div>

                    <button
                        className={`${boldFont.className} group flex items-center gap-2 text-[11px] font-semibold text-[#16A34A] dark:text-[#16A34A] transition-all duration-300 hover:gap-3`}
                    >

                        View all

                        <ArrowRight
                            size={14}
                            strokeWidth={2.5}
                            className="transition-transform duration-300 group-hover:translate-x-[2px]"
                        />

                    </button>

                </div>

                {/* Transactions */}
                <div className="mt-3 space-y-1">

                    {transactions.map((item, index) => (

                        <div
                            key={index}
                            className="group flex items-center justify-between rounded-[8px] border border-black/[0.06] dark:border-white/10 bg-black/[0.015] dark:bg-[#070606] px-2 py-2 transition-all duration-300 hover:bg-black/[0.025] dark:hover:bg-white/[0.05] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-none"
                        >

                            {/* Left */}
                            <div className="flex items-center gap-4">

                                {/* Logo */}
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-[10px] text-[15px] shadow-[0_6px_20px_rgba(0,0,0,0.06)] ${item.logoBg} ${item.logoText}`}
                                >
                                    {item.logo}
                                </div>

                                {/* Info */}
                                <div>

                                    <h3
                                        className={`${boldFont.className} text-[11px] leading-none text-[#111111] dark:text-white`}
                                    >
                                        {item.asset}
                                    </h3>

                                    <p
                                        className={`${boldFont.className} mt-2 text-[10px] text-black/40 dark:text-white/50`}
                                    >
                                        {item.date}
                                    </p>

                                </div>

                            </div>

                            {/* Middle */}
                            <div
                                className="rounded-[8px] border border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#070606] px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none"
                            >

                                <p
                                    className={`${boldFont.className} text-[10px] text-black/65 dark:text-white/70`}
                                >
                                    {item.action}
                                </p>

                            </div>

                            {/* Right */}
                            <div className="text-right">

                                <p
                                    className={`${boldFont.className} text-[11px] text-[#DC2626]`}
                                >
                                    {item.amount}
                                </p>

                                <p
                                    className={`${boldFont.className} mt-1 text-[9px] text-black/35 dark:text-white/40`}
                                >
                                    Executed
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )
}

export default InvestmentTransactionsList