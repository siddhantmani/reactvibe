"use client"

import { Manrope } from "next/font/google"
import React from "react"
import { cn } from "@/lib/utils"

const WhyReactVibeFont = Manrope({
    weight: "600",
    subsets: ["latin"],
})

import { motion } from "framer-motion"

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        title: "No React Library Overhead",
        description:
            "No React Vibe install, no wrapper library, and no bundle bloat. Just copy paste React components and use only the dependencies you need.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757" />
                <path d="M10.81 15.312a4.5 4.5 0 01-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
            </svg>
        ),
        title: "Full Code Ownership",
        description:
            "Get real, customizable React components — not black-box abstractions. Edit everything, extend freely, and integrate into your own system.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
        title: "Built for Modern React Development",
        description:
            "Production-ready React UI components designed with animation, performance, and scalability in mind — built using tools like Framer Motion.",
    },
]

function WhyReactVibe({ className }: { className?: string }) {
    return (
        <div className={cn("w-full px-2 py-10", className)}>
            <motion.h2
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.5
                }}
                className={cn(
                    WhyReactVibeFont.className,
                    "text-2xl font-bold mb-6 tracking-tight text-foreground"
                )}
            >
                Why Choose React Vibe for React UI Components?
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{
                            once: true,
                            amount: 0.2, // Trigger when 20% visible
                            margin: "50px"
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                            delay: 0.3 * index
                        }}
                        key={feature.title}
                        className={cn(
                            "flex flex-col gap-4 rounded-2xl p-6 border transition-all duration-300 group",

                            "bg-card border-border hover:bg-accent",

                            "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:from-[33%] dark:to-[#131212]",
                            "dark:border-[#1e1a30] dark:hover:border-[#3b2d6b]"
                        )}
                    >

                        <div
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300",


                                "bg-muted text-primary border-border group-hover:bg-accent",


                                "dark:bg-gradient-to-r dark:from-[#1d1c1c] dark:from-[33%] dark:to-[#272525]",
                                "dark:border-[#2e2050] dark:text-[#a855f7]",
                                "dark:group-hover:bg-[#2a1d4a] dark:group-hover:text-[#c084fc]"
                            )}
                        >
                            {feature.icon}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-[13px] leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WhyReactVibe