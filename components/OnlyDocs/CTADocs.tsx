"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import { Manrope } from "next/font/google"

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["700", "800"],
})

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
    title = "Build Faster with Production-Ready React Components",
    description = "React Vibe gives 74 production-ready React components across motion, UI blocks, dashboard systems, backgrounds, and more. Copy the source code, customize everything, and ship.",
    secondaryText = "Star on GitHub",
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
                    amount: 0.2,
                    margin: "50px",
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                }}
                className={cn(
                    "relative w-full overflow-hidden rounded-2xl border px-8 py-7",
                    "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center",

                    // Light mode
                    "border-border bg-muted/30",

                    // Dark mode
                    "dark:border-[#2a1f5e]",
                    "dark:bg-[radial-gradient(ellipse_at_60%_50%,#1e1050_0%,#0f0a24_55%,#0a0812_100%)]"
                )}
            >
                {/* Decorative stars */}
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden
                >
                    {[
                        [12, 20],
                        [28, 65],
                        [40, 10],
                        [55, 80],
                        [70, 35],
                        [82, 15],
                        [90, 70],
                        [15, 88],
                        [60, 55],
                        [35, 42],
                    ].map(([x, y], i) => (
                        <span
                            key={i}
                            className="absolute h-0.5 w-0.5 rounded-full bg-foreground/20"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl">
                    <h3
                        className={cn(
                            manrope.className,
                            "text-xl font-extrabold leading-tight tracking-[-0.04em] text-foreground"
                        )}
                    >
                        {title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-muted-foreground">
                        {description}
                    </p>
                </div>

                {/* Actions */}
                <div className="relative z-10 flex shrink-0 flex-wrap items-center gap-3">

                    <Link
                        href="https://github.com/siddhantmani/reactvibe"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onSecondaryClick}
                        className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3 text-[14px] font-medium transition-all",
                            "border-border bg-muted text-foreground hover:bg-accent",
                            "dark:border-[#2a2040] dark:bg-[#13101f]/80",
                            "dark:hover:border-[#7c3aed]/60 dark:hover:bg-[#1a1528]"
                        )}
                    >
                        ⭐ {secondaryText}
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default CTADocs