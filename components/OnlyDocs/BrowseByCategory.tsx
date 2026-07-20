"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

import { motion } from "framer-motion"

const iconClass =
    "w-5 h-5 stroke-[1.8] stroke-current fill-none stroke-linecap-round stroke-linejoin-round transition-transform group-hover:scale-110"

const categories = [

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <path d="M12 3v18" />
                <path d="M17 7a4 4 0 0 0-5-2 4 4 0 0 0 0 8 4 4 0 0 1 0 8 4 4 0 0 1-5-2" />
            </svg>
        ),
        title: "Dashboard Systems",
        description:
            "Production-ready finance, reporting, budgeting, investment, and analytics dashboards.",
        link: "/docs/dashboard-systems/finance-overview",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <path d="M4 6h16M4 12h16M4 18h16" />
                <path d="M9 10l3 3 3-3" />
            </svg>
        ),
        title: "UI Blocks",
        description:
            "Data tables, charts, metrics, activity feeds, timelines, and SaaS interface blocks.",
        link: "/docs/ui-blocks/transaction-table",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
        ),
        title: "Hero Sections",
        description:
            "Landing page heroes with animations, CTAs, navigation, and modern SaaS layouts.",
        link: "/docs/hero-section/launch",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <path d="M9 9l10-4-4 10-2-3-4 4z" />
            </svg>
        ),
        title: "Testimonials",
        description:
            "Customer testimonials, reviews, social proof, and carousel layouts.",
        link: "/docs/sections/spotlight",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <rect x="3" y="8" width="18" height="8" rx="4" />
            </svg>
        ),
        title: "Interactive Components",
        description:
            "Dropdowns, buttons, brand marquees, switches, and reusable UI components.",
        link: "/docs/components/motion-dropdown",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <path d="M2 12c2-4 6-4 8 0s6 4 8 0 4-4 4-4" />
            </svg>
        ),
        title: "Background Effects",
        description:
            "Animated backgrounds, gradients, particles, and interactive visual effects.",
        link: "/docs/backgrounds/dark-fusion",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <path d="M4 7h10M4 12h6M4 17h4" />
                <path d="M16 10l3 2-3 2" />
            </svg>
        ),
        title: "Text Animations",
        description:
            "Animated headings, reveal effects, and motion typography for React.",
        link: "/docs/text-motion/linear-reveal",
    },

    {
        icon: (
            <svg viewBox="0 0 24 24" className={iconClass}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 10h18" />
            </svg>
        ),
        title: "Navigation",
        description:
            "React navigation components including menus, dropdowns, and accordions",
        link: "/docs/hero-section/overlay-nav"
    },


]

type Props = {
    className?: string
    onCategoryClick?: (title: string) => void
}

function BrowseByCategory({ className, onCategoryClick }: Props) {
    return (
        <div className={cn("w-full px-2 py-10", className)}>
            {/* Header */}
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
                className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Explore React UI Components & Animations
                </h2>

                <Link href="/docs/explore-components">
                    <button
                        className={cn(
                            "flex items-center gap-1.5 px-4 py-2 rounded-lg border text-[13px] transition-all",
                            "border-border text-foreground hover:bg-accent",
                            "dark:border-[#2a2040] dark:hover:border-[#7c3aed]/60 dark:hover:bg-[#1a1528]"
                        )}
                    >
                        View all components
                    </button>
                </Link>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                {categories.map((cat, index) => (
                    <motion.button
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
                            delay: 0.1 * index
                        }}
                        key={cat.title}
                        onClick={() => onCategoryClick?.(cat.title)}
                        className={cn(
                            "group flex flex-col gap-3 rounded-2xl border p-3 text-left transition-all",
                            "bg-card border-border hover:bg-accent",
                            "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:to-[#131212]",
                            "dark:border-[#1e1a30] dark:hover:border-[#3b2d6b] dark:hover:bg-[#16122a]"
                        )}
                    >
                        <Link href={cat.link}>
                            {/* Top */}
                            <div className="flex items-start justify-between pb-5">
                                <div
                                    className={cn(
                                        "p-1 flex items-center justify-center rounded-md border transition-all",
                                        "bg-muted text-foreground border-border",
                                        "dark:bg-[#1e1533] dark:border-[#2e2050] dark:text-[#a855f7]",
                                        "dark:group-hover:bg-[#2a1d4a] dark:group-hover:text-[#c084fc]",
                                        "dark:group-hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                                    )}
                                >
                                    {cat.icon}
                                </div>

                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                    →
                                </span>
                            </div>

                            {/* Title */}
                            <p className="text-[14px] font-semibold text-foreground">
                                {cat.title}
                            </p>

                            {/* Description */}
                            <p className="text-[12px] leading-relaxed text-muted-foreground">
                                {cat.description}
                            </p>
                        </Link>

                    </motion.button>
                ))}
            </div>
        </div>
    )
}

export default BrowseByCategory