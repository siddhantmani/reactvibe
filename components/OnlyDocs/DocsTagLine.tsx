"use client"

import { Manrope } from "next/font/google"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import LinearReveal from "../LinearReveal"

const HeadingFont = Manrope({
    weight: "700",
    subsets: ["latin"],
})

const ButtonFont = Manrope({
    weight: "500",
    subsets: ["latin"],
})

type Props = {
    className?: string
    onPrimaryClick?: () => void
    onSecondaryClick?: () => void
}

function DocsTagLine({
    className,
    onPrimaryClick,
    onSecondaryClick,
}: Props) {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth"

        return () => {
            document.documentElement.style.scrollBehavior = ""
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            whileInView={{ opacity: 1 }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px",
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
            }}
            className={cn("mt-6 space-y-5", className)}
        >
            {/* Heading */}
            <div
                className={cn(
                    HeadingFont.className,
                    "max-w-4xl text-3xl leading-[1.08] sm:text-4xl lg:text-5xl"
                )}
            >
                <h1 className="text-foreground">
                    Production-Ready
                </h1>

                <h1 className="bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Motion-first React Components
                </h1>

                <h1 className="text-foreground">
                    for Modern Interfaces
                </h1>
            </div>

            {/* Description */}
            <div className="max-w-3xl space-y-3">
                <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                    React Vibe is a collection of production-ready React
                    components, UI blocks, dashboard systems, hero sections,
                    and motion built for modern web applications. Copy the
                    source, customize it, and ship with full code ownership.
                </p>

                <p className="text-xs leading-5 text-muted-foreground/80 sm:text-sm">
                    React Vibe itself doesn't require installation. Components
                    that use <span className="font-medium text-foreground">Framer Motion</span>{" "}
                    only require Framer Motion to be installed once in your
                    project.
                </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary */}
                <Link
                    href="/docs/explore-components"
                    onClick={onPrimaryClick}
                >
                    <LinearReveal
                        Text="Browse Components"
                        as="button"
                        delay={0.5}
                        className={cn(
                            ButtonFont.className,
                            "cursor-pointer rounded-lg px-5 py-3 text-[14px] font-medium transition-all",
                            "bg-primary text-primary-foreground hover:opacity-90",
                            "dark:shadow-lg dark:shadow-[#7c3aed]/30",
                            "hover:scale-[1.05] active:scale-[0.98]"
                        )}
                    />
                </Link>

                {/* Secondary */}
                <Link
                    href="#howitworks"
                    onClick={onSecondaryClick}
                    className={cn(
                        ButtonFont.className,
                        "flex items-center rounded-lg px-5 py-3 text-[14px] font-medium border transition-all",
                        "border-border bg-muted text-foreground hover:bg-accent",
                        "dark:border-[#2a2040] dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:to-[#131212]",
                        "dark:hover:border-[#7c3aed]/60",
                        "hover:scale-[1.05] active:scale-[0.98]"
                    )}
                >
                    How it Works
                </Link>
            </div>
        </motion.div>
    )
}

export default DocsTagLine