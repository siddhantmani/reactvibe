"use client"

import Glow from "@/components/Docs/Components/Glow/Glow"
import { useTheme } from "@/components/ThemeProvider"
import { manrope } from "@/lib/fonts"
import {
    ArrowRight,
} from "lucide-react"


const transactions = [
    {
        asset: "Apple Inc. (AAPL)",
        date: "May 31, 2024",
        action: "Buy 10 shares",
        amount: "-$1,892.00",
        logo: "",
        logoBg: "bg-black",
    },
    {
        asset: "Vanguard S&P 500 ETF (VOO)",
        date: "May 30, 2024",
        action: "Buy 5 shares",
        amount: "-$3,164.00",
        logo: "V",
        logoBg: "bg-[#B91C1C]",
    },
    {
        asset: "Microsoft Corp. (MSFT)",
        date: "May 28, 2024",
        action: "Buy 8 shares",
        amount: "-$3,322.40",
        logo: "◼",
        logoBg: "bg-[#2563EB]",
    },
]

function InvestmentTransactionsList() {
    const { theme } = useTheme()
    return (
        <div>
            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="180px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 h-full rounded-2xl border dark:border-[#222121] border-black/10"
            >
                <div className="relative z-10">

                    {/* Top */}
                    <div className="flex items-center justify-between">

                        <h2 className={`${manrope.className} text-[12px] text-black dark:text-white`}>
                            Recent Transactions
                        </h2>

                        <button className={`${manrope.className} flex items-center gap-2 text-[12px] font-semibold text-[#22C55E] transition-all duration-300 hover:gap-3`}>

                            View all

                            <ArrowRight
                                size={16}
                                strokeWidth={2.5}
                            />

                        </button>

                    </div>

                    {/* Transactions */}
                    <div className="mt-4 space-y-3">

                        {transactions.map((item) => (

                            <div
                                key={item.asset}
                                className="group flex items-center justify-between rounded-[8px] border dark:border-white/5 dark:bg-white/[0.02] px-2 py-2 transition-all duration-300 dark:hover:border-white/10 dark:hover:bg-white/[0.04] border-black/2 bg-black/[0.02] hover:border-black/10"
                            >

                                {/* Left */}
                                <div className="flex items-center gap-4">

                                    {/* Logo */}
                                    <div
                                        className={`flex h-6 w-6 items-center justify-center rounded-[4px] text-[12px] font-bold text-black dark:text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${item.logoBg}`}
                                    >
                                        {item.logo}
                                    </div>

                                    {/* Info */}
                                    <div>

                                        <h3 className={`${manrope.className} text-[11px] text-black dark:text-white`}>
                                            {item.asset}
                                        </h3>

                                        <p className={`${manrope.className} mt-1 text-[10px] text-black/35 dark:text-white/35`}>
                                            {item.date}
                                        </p>

                                    </div>

                                </div>

                                {/* Middle */}
                                <div>

                                    <p className={`${manrope.className} text-[11px] text-black/75 dark:text-white/75`}>
                                        {item.action}
                                    </p>

                                </div>

                                {/* Right */}
                                <div>

                                    <p className={`${manrope.className} text-[11px] text-[#FF5A5A]`}>
                                        {item.amount}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </Glow>

        </div>
    )
}

export default InvestmentTransactionsList