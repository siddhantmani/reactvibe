"use client"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"
import {
    Link2,
    Building2,
    Database,
    BellRing,
} from "lucide-react"

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
        iconColor: "text-black/55",
        valueColor: "text-[#111111]",
        glow: "bg-[#3B82F6]/[0.04]",
    },
    {
        title: "Data Sources",
        value: "23",
        subtitle: "Synced in real-time",
        icon: Database,
        iconBg: "bg-black/[0.04]",
        iconColor: "text-black/55",
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

    return (

        <div className="grid grid-cols-4 gap-3 px-2">

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
                        className="group relative overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                    >

                        {/* Glow */}
                        <div
                            className={`absolute -right-10 -top-10 h-[140px] w-[140px] rounded-full blur-3xl ${card.glow}`}
                        />

                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.03),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.03),_transparent_45%)]" />

                        {/* Content */}
                        <div className="relative z-10 aspect-video flex items-center justify-between">

                            {/* Left */}
                            <div className="space-y-3">

                                {/* Title */}
                                <p
                                    className={`${fontBold.className} text-[11px] tracking-[-0.02em] text-black/45`}
                                >
                                    {card.title}
                                </p>

                                {/* Value */}
                                <h2
                                    className={`${fontBold.className} text-[30px] tracking-[-0.06em] ${card.valueColor}`}
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
                                className={`flex h-10 w-10 items-center justify-center rounded-[12px] border border-black/[0.06] ${card.iconBg} shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:scale-105`}
                            >

                                <Icon
                                    size={18}
                                    className={card.iconColor}
                                    strokeWidth={2}
                                />

                            </div>

                        </div>

                    </motion.div>

                )

            })}

        </div>

    )
}

export default IntegrationsMetricsGrid