"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

import { motion } from "framer-motion"

type Props = {
    title?: string
    description?: string
    primaryText?: string
    secondaryText?: string
    onPrimaryClick?: () => void
    onSecondaryClick?: () => void
    className?: string
}

function CTADocs({
    title = "Ship Faster with Copy-Paste React UI Components",
    description = "Use production-ready React animation components, UI blocks, and Framer Motion interactions — no library installs, no overhead.",
    primaryText = "Browse Components",
    secondaryText = "Star on GitHub",
    onPrimaryClick,
    onSecondaryClick,
    className,
}: Props) {
    return (
        <div className={cn("w-full px-2 py-6", className)}>
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
                    "relative w-full rounded-2xl border overflow-hidden px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",

                    "bg-card border-border",

                    "dark:border-[#2a1f5e]",
                    "dark:bg-[radial-gradient(ellipse_at_60%_50%,#1e1050_0%,#0f0a24_55%,#0a0812_100%)]"
                )}
            >
                {/* Star field */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    {[
                        [12, 20], [28, 65], [40, 10], [55, 80], [70, 35],
                        [82, 15], [90, 70], [15, 88], [60, 55], [35, 42],
                    ].map(([x, y], i) => (
                        <span
                            key={i}
                            className="absolute w-0.5 h-0.5 rounded-full bg-foreground/20"
                            style={{ left: `${x}%`, top: `${y}%` }}
                        />
                    ))}
                </div>

                {/* Text */}
                <div className="relative z-10 max-w-lg">
                    <h3 className="text-xl font-bold tracking-tight leading-snug text-foreground">
                        {title}
                    </h3>
                    <p className="text-[13px] mt-2 leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>

                {/* Buttons */}
                <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
                    <Link href="/docs/explore-components">
                        <button
                            onClick={onPrimaryClick}
                            className={cn(
                                "px-6 py-3 rounded-xl text-[14px] font-semibold transition-all shadow-lg cursor-pointer",

                                // light
                                "bg-primary text-primary-foreground hover:opacity-90",

                                // dark glow
                                "dark:shadow-[#7c3aed]/30"
                            )}
                        >
                            {primaryText}
                        </button>
                    </Link>

                    <Link href="https://github.com/siddhantmani/reactvibe" target="_blank">
                        <button
                            onClick={onSecondaryClick}
                            className={cn(
                                "flex items-center gap-2 px-5 py-3 rounded-xl border text-[14px] font-medium transition-all cursor-pointer",

                                // light
                                "border-border bg-muted hover:bg-accent text-foreground",

                                // dark
                                "dark:border-[#2a2040] dark:bg-[#13101f]/80 dark:hover:border-[#7c3aed]/60 dark:hover:bg-[#1a1528]"
                            )}
                        >
                            ⭐ {secondaryText}
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default CTADocs