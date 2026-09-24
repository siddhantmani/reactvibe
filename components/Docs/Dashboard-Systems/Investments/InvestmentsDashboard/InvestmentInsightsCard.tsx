"use client"


import Glow from "@/components/Docs/Components/Glow/Glow"
import { useTheme } from "@/components/ThemeProvider"
import { manrope } from "@/lib/fonts"
import {
    ShieldCheck,
    ArrowRight,
} from "lucide-react"


function InvestmentInsightsCard() {
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
                            Investment Insights
                        </h2>

                        <button className={`${manrope.className} flex items-center gap-2 text-[12px] font-semibold text-[#22C55E] transition-all duration-300 hover:gap-3`}>

                            View all

                            <ArrowRight
                                size={16}
                                strokeWidth={2.5}
                            />

                        </button>

                    </div>

                    {/* Insight Card */}
                    <div className="mt-4 flex items-start gap-5 rounded-2xl bg-black/[0.02] hover:bg-black/[0.04] dark:bg-white/[0.02] p-5 transition-all duration-300 dark:hover:bg-white/[0.04]">

                        {/* Icon */}
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border border-[#22C55E]/10 bg-[#22C55E]/5 shadow-[0_0_40px_rgba(34,197,94,0.10)]">

                            <ShieldCheck
                                size={50}
                                className="text-[#39E75F]"
                                strokeWidth={2}
                            />

                        </div>

                        {/* Content */}
                        <div>

                            <h3 className={`${manrope.className} text-[14px] text-black dark:text-white`}>
                                Your portfolio is well diversified
                            </h3>

                            <p className={`${manrope.className} mt-3 text-[12px] dark:text-white/55 text-black/55`}>
                                Nice! Your portfolio diversity reduces risk
                                by spreading across 5 asset classes.
                            </p>

                        </div>

                    </div>

                </div>
            </Glow>

        </div>
    )
}

export default InvestmentInsightsCard