"use client"


import Glow from "@/components/Docs/Components/Glow/Glow"
import { useTheme } from "@/components/ThemeProvider"
import { manrope } from "@/lib/fonts"
import {
    ArrowRight,
    TrendingUp,
} from "lucide-react"


function MarketUpdateCard() {
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
                            Market Update
                        </h2>

                        <button className={`${manrope.className} flex items-center gap-2 text-[12px] font-semibold text-[#22C55E] transition-all duration-300 hover:gap-3`}>

                            View full update

                            <ArrowRight
                                size={16}
                                strokeWidth={2.5}
                            />

                        </button>

                    </div>

                    {/* Content */}
                    <div className="mt-4 flex items-start gap-5 rounded-2xl border dark:border-white/5 dark:bg-white/[0.02] p-5 transition-all duration-300 dark:hover:border-white/10 dark:hover:bg-white/[0.04] border-black/5 bg-black/[0.02] border-black/1 hover:border-black/10">

                        {/* Icon */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] border border-[#22C55E]/10 bg-[#22C55E]/5 shadow-[0_0_40px_rgba(34,197,94,0.10)]">

                            <TrendingUp
                                size={30}
                                className="text-[#39E75F]"
                                strokeWidth={2}
                            />

                        </div>

                        {/* Text */}
                        <div>

                            <p className={`${manrope.className} mt-3 text-[12px] text-black/70 dark:text-white/70`}>

                                Markets are up today! The{" "}

                                <span className="font-[600] text-black dark:text-white">
                                    S&P 500
                                </span>{" "}

                                is{" "}

                                <span className="font-[600] text-[#22C55E]">
                                    +0.56%
                                </span>{" "}

                                and{" "}

                                <span className="font-[600] text-black dark:text-white">
                                    NASDAQ
                                </span>{" "}

                                is{" "}

                                <span className="font-[600] text-[#22C55E]">
                                    +0.78%
                                </span>

                                .

                            </p>

                        </div>

                    </div>

                </div>
            </Glow>

        </div>
    )
}

export default MarketUpdateCard