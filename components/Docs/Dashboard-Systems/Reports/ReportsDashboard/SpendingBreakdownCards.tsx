"use client";

import {
    ArrowDown,
    ArrowUp,
    ShoppingBag,
    UtensilsCrossed,
    Car,
    Clapperboard,
} from "lucide-react"
import { manrope } from "@/lib/fonts";
import Glow from "@/components/Docs/Components/Glow/Glow";
import { useTheme } from "@/components/ThemeProvider";

const categories = [
    {
        title: "Dining Out",
        percentage: "28%",
        amount: "-$120.50",
        positive: false,
        icon: UtensilsCrossed,
        iconBg: "bg-[#FF6B3D]/10",
        iconColor: "text-[#FF6B3D]",
    },
    {
        title: "Transport",
        percentage: "12%",
        amount: "-$45.20",
        positive: true,
        icon: Car,
        iconBg: "bg-[#6C63FF]/10",
        iconColor: "text-[#7C73FF]",
    },
    {
        title: "Shopping",
        percentage: "18%",
        amount: "-$75.30",
        positive: false,
        icon: ShoppingBag,
        iconBg: "bg-[#FF6B3D]/10",
        iconColor: "text-[#FF6B3D]",
    },
    {
        title: "Entertainment",
        percentage: "8%",
        amount: "-$22.10",
        positive: true,
        icon: Clapperboard,
        iconBg: "bg-[#D9F99D]/10",
        iconColor: "text-[#D9F99D]",
    },
]

function SpendingBreakdownCards() {
    const { theme } = useTheme()
    return (
        <div className="relative overflow-hidden transition-colors duration-300 rounded-2xl border dark:border-[#222121] border-black/10">
            <Glow
                backgroundColor={`${theme === "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="180px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 h-full transition-colors duration-300"
            >
                <div className="relative z-10">

                    {/* Heading */}
                    <div className="space-y-1">
                        <h1 className={`${manrope.className} text-[12px] text-gray-900 dark:text-[#ffffff] transition-colors duration-300`}>
                            Spending Breakdown
                        </h1>
                        <p className={`${manrope.className} text-[9px] text-gray-500 dark:text-[#ffffff]/60 transition-colors duration-300`}>
                            Where your money went this month.
                        </p>
                    </div>


                    {/* Categories */}
                    <div className="mt-6 grid grid-cols-1 gap-2 @md:grid-cols-2">

                        {categories.map((item) => {

                            const Icon = item.icon

                            return (
                                <div
                                    key={item.title}
                                    className="group flex items-center justify-between rounded-[10px] border border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/[0.02] p-2 transition-all duration-300 hover:border-gray-200 hover:bg-gray-100 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                                >

                                    {/* Left */}
                                    <div className="flex items-center gap-3 py-2">

                                        {/* Icon */}
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-[8px] border border-gray-200 dark:border-white/10 transition-colors duration-300 ${item.iconBg}`}
                                        >

                                            <Icon
                                                size={15}
                                                className={item.iconColor}
                                                strokeWidth={2}
                                            />

                                        </div>

                                        {/* Text */}
                                        <div>

                                            <h3 className={`${manrope.className} text-[12px] text-gray-800 dark:text-white transition-colors duration-300`}>
                                                {item.title}
                                            </h3>

                                        </div>

                                    </div>

                                    {/* Right */}
                                    <div className="text-right">

                                        <div
                                            className={`flex items-center justify-end gap-1 text-[10px] font-semibold transition-colors duration-300 ${item.positive
                                                ? "text-green-600 dark:text-[#4ADE80]"
                                                : "text-red-600 dark:text-[#FF5A5A]"
                                                }`}
                                        >

                                            {item.positive ? (
                                                <ArrowDown
                                                    size={12}
                                                    strokeWidth={2.8}
                                                />
                                            ) : (
                                                <ArrowUp
                                                    size={12}
                                                    strokeWidth={2.8}
                                                />
                                            )}

                                            {item.percentage}

                                        </div>

                                        <p
                                            className={`${manrope.className} mt-2 text-[10px] transition-colors duration-300 ${item.positive
                                                ? "text-green-600 dark:text-[#4ADE80]"
                                                : "text-red-600 dark:text-[#FF5A5A]"
                                                }`}
                                        >
                                            {item.amount}
                                        </p>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>
            </Glow>
        </div>
    )
}

export default SpendingBreakdownCards