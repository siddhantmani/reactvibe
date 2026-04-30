"use client"

import { Manrope } from "next/font/google"
import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const WhatsInsideFont = Manrope({
    weight: "600",
    subsets: ["latin"],
})

import { motion } from "framer-motion"

function WhatsInside({ className }: { className?: string }) {
    const stats = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
            ),
            stat: '12+',
            label: 'Animated React Components',
            description: 'Production-ready React UI components with smooth animations and interactions',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                </svg>
            ),
            stat: '14+',
            label: 'React UI Blocks & Sections',
            description: 'Pre-built React UI blocks including pricing, testimonials, FAQ, and more',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 7h8M8 11h8M8 15h5" />
                </svg>
            ),
            stat: '4+',
            label: 'Hero Sections & Landing UI',
            description: '4 hero sections and complete landing page sections built for modern React apps',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                </svg>
            ),
            stat: '100%',
            label: 'Open Source React Components',
            description: 'MIT licensed React components you can copy, customize, and ship freely',
        },
    ]

    return (
        <div className={cn("w-full px-2 py-10", className)}>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <motion.h2
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.5
                    }}
                    className={cn(
                        WhatsInsideFont.className,
                        "text-2xl font-bold tracking-tight text-foreground"
                    )}>
                    React UI Components, Blocks & Sections
                </motion.h2>

                <Link href="/docs/explore-components">
                    <motion.button
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{
                            once: true,
                            amount: 0.2, // Trigger when 20% visible
                            margin: "50px"
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                            delay: 0.5
                        }}
                        className={cn(
                            "flex items-center gap-1.5 px-4 py-2 rounded-lg border text-[13px] transition-all cursor-pointer",

                            // light
                            "border-border text-foreground hover:bg-accent",

                            // dark override
                            "dark:border-[#2a2040] dark:hover:border-[#7c3aed]/60 dark:hover:bg-[#1a1528]"
                        )}>
                        View all
                    </motion.button>
                </Link>
            </div>

            {/* Container */}
            <div className={cn(
                "rounded-2xl border overflow-hidden",

                // light
                "bg-card border-border",

                // dark gradient
                "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:from-[33%] dark:to-[#131212]",
                "dark:border-[#1e1a30]"
            )}>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 border-border dark:divide-[#1e1a30]">

                    {stats.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            whileInView={{ opacity: 1 }}
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
                            key={item.label}
                            className={cn(
                                "flex flex-col gap-3 p-6 transition-colors group",

                                // light
                                "hover:bg-accent",

                                // dark
                                "dark:hover:bg-gradient-to-r dark:from-[#0d0d0d] dark:to-[#111111]"
                            )}
                        >
                            {/* Icon */}
                            <div className={cn(
                                "w-10 h-10 flex items-center justify-center rounded-lg border transition-all",

                                // light
                                "bg-muted text-primary border-border",

                                // dark
                                "dark:bg-gradient-to-r dark:from-[#1d1c1c] dark:to-[#272525]",
                                "dark:border-[#2e2050] dark:text-[#a855f7]",
                                "dark:group-hover:bg-[#2a1d4a] dark:group-hover:text-[#c084fc]"
                            )}>
                                {item.icon}
                            </div>

                            {/* Stat */}
                            <span className="text-3xl font-bold tracking-tight leading-none text-foreground">
                                {item.stat}
                            </span>

                            {/* Text */}
                            <div>
                                <p className="text-[13px] font-semibold text-foreground">
                                    {item.label}
                                </p>
                                <p className="text-[12px] mt-0.5 text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
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
                        delay: 0.5
                    }}
                    className={cn(
                        "flex items-center justify-center gap-2 border-t py-3 px-6",

                        // light
                        "border-border bg-muted",

                        // dark
                        "dark:border-[#1e1a30] dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:to-[#131212]"
                    )}>
                    <span className="text-[12px] text-muted-foreground text-center">
                        New animated React components, UI blocks, and background effects added regularly. <br />
                        Background animations, hero sections, UI blocks, and components built for modern React apps.
                    </span>
                </motion.div>
            </div>
        </div>
    )
}

export default WhatsInside