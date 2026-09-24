"use client"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"
import {
    Link2,
    Building2,
    Database,
    BellRing,
} from "lucide-react"
import Glow from "@/components/Docs/Components/Glow/Glow"
import { useTheme } from "@/components/ThemeProvider"

const fontBold = Manrope({
    weight: ["500"],
    subsets: ["latin"],
})

const cards = [
    {
        title: "Total Integrations",
        value: "15",
        subtitle: "Active connections",
        icon: Link2,
        iconBg: "bg-[#22C55E]/[0.08]",
        iconColor: "text-[#16A34A]",
        valueColor: "text-[#111111]",
        glow: "bg-[#22C55E]/[0.05]",
    },
    {
        title: "Connected Accounts",
        value: "10",
        subtitle: "Across institutions",
        icon: Building2,
        iconBg: "bg-black/[0.04]",
        iconColor: "text-black/80 dark:text-white/80",
        valueColor: "text-[#111111]",
        glow: "bg-[#3B82F6]/[0.04]",
    },
    {
        title: "Data Sources",
        value: "23",
        subtitle: "Synced in real-time",
        icon: Database,
        iconBg: "bg-black/[0.04]",
        iconColor: "text-black/80 dark:text-white/80",
        valueColor: "text-[#111111]",
        glow: "bg-[#A855F7]/[0.04]",
    },
    {
        title: "Alerts",
        value: "50",
        subtitle: "Requires attention",
        icon: BellRing,
        iconBg: "bg-[#F97316]/[0.08]",
        iconColor: "text-[#EA580C]",
        valueColor: "text-[#EA580C]",
        glow: "bg-[#F97316]/[0.05]",
    },
]

function IntegrationsMetricsGrid() {
    const { theme } = useTheme();

    return (

        <div className="grid grid-cols-2 @xl:grid-cols-4 gap-3 px-2">

            {cards.map((card, index) => {

                const Icon = card.icon

                return (

                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.08,
                        }}
                        className="group relative overflow-hidden rounded-2xl border dark:border-[#222121] border-black/10"
                    >

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
                            className="p-4 h-full "
                        >


                            {/* Content */}
                            <div className="relative z-10 aspect-video flex items-center justify-between">

                                {/* Left */}
                                <div className="space-y-3">

                                    {/* Title */}
                                    <p
                                        className={`${fontBold.className} text-[11px] tracking-[-0.02em] text-black/45 dark:text-white/60`}
                                    >
                                        {card.title}
                                    </p>

                                    {/* Value */}
                                    <h2
                                        className={`${fontBold.className} text-[30px] tracking-[-0.06em] ${card.valueColor} ${card.valueColor === "text-[#111111]" ? "dark:text-white" : ""}`}
                                    >
                                        {card.value}
                                    </h2>

                                    {/* Subtitle */}
                                    <p
                                        className={`${fontBold.className} text-[10px] ${card.iconColor}`}
                                    >
                                        {card.subtitle}
                                    </p>

                                </div>

                                {/* Right */}
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-[12px] border border-black/[0.06] dark:border-white/10 ${card.iconBg} shadow-[0_6px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-300 group-hover:scale-105`}
                                >

                                    <Icon
                                        size={18}
                                        className="dark:text-white/80"
                                        strokeWidth={2}
                                    />

                                </div>

                            </div>
                        </Glow>

                    </motion.div>

                )

            })}

        </div>

    )
}

export default IntegrationsMetricsGrid