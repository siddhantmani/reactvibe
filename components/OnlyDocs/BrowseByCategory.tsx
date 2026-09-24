"use client"

import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { PreviewCanvas } from "@/components/PreviewCanvas"

import FinanceOverview from "@/public/Dashboard-Systems/FinanceOverview/FinanceOverview"
import PerformanceTrendCharPreview from "@/public/Dashboard-UI/Chart/PerformanceTrendChart/Preview"
import ZenithPreview from "@/public/Blocks/Pricing/Zenith/Page"
import BranchFlowPreview from "@/public/Motion/BranchFlow/Preview"
import RisingLinesPreview from "@/public/Backgrounds/RisingLines/Preview"
import FlowListPreview from "@/public/Components/Flowlist/Page"
import LinerPreview from "@/public/Text-Motion/LinearReveal/Page"

const categories = [
    {
        title: "Motion",
        description:
            "Interactive animations and motion patterns for expressive React interfaces.",
        link: "/docs/motion/branch-flow",
        preview: <BranchFlowPreview />,
    },
    {
        title: "Backgrounds",
        description:
            "Animated backgrounds, gradients, particles, and interactive visual effects.",
        link: "/docs/backgrounds/rising-lines",
        preview: <RisingLinesPreview />,
    },
    {
        title: "Dashboard Systems",
        description:
            "Complete finance, reporting, budgeting, investment, and analytics dashboards.",
        link: "/docs/dashboard-systems/finance-overview",
        preview: <FinanceOverview />,
    },
    {
        title: "Dashboard UI",
        description:
            "Tables, charts, metrics, activity feeds, timelines, and reusable dashboard UI.",
        link: "/docs/dashboard-ui/chart/performance-trend-chart",
        preview: <PerformanceTrendCharPreview />,
    },
    {
        title: "Blocks",
        description:
            "Pricing, testimonials, CTAs, FAQs, sections, and reusable SaaS interface blocks.",
        link: "/docs/blocks/pricing/zenith",
        preview: <ZenithPreview />,
    },
    {
        title: "Components",
        description:
            "Reusable React UI components built for modern websites and applications.",
        link: "/docs/components/flowlist",
        preview: <FlowListPreview />,
    },
    {
        title: "Text",
        description:
            "Animated text, reveals, typography effects, and motion-driven type.",
        link: "/docs/text/linear-reveal",
        preview: <LinerPreview />,
    },
]

type Props = {
    className?: string
    onCategoryClick?: (title: string) => void
}

function BrowseByCategory({
    className,
    onCategoryClick,
}: Props) {
    return (
        <div className={cn("w-full px-2 py-10", className)}>
            {/* Header */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 8,
                    filter: "blur(6px)",
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "50px",
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mb-6 flex items-center justify-between gap-4"
            >
                <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        Explore
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        React Components, UI Blocks & Dashboard Systems
                    </h2>
                </div>
            </motion.div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{
                            opacity: 0,
                            y: 12,
                            filter: "blur(5px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                            margin: "50px",
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.08 * index,
                        }}
                    >
                        <Link
                            href={category.link}
                            onClick={() =>
                                onCategoryClick?.(category.title)
                            }
                            className="
                                group block overflow-hidden
                                rounded-2xl border border-border
                                bg-background
                                text-left
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:border-primary/20
                                hover:shadow-md
                                dark:bg-card/20
                                dark:hover:border-[#7c3aed]/30
                            "
                        >
                            {/* 16:9 Preview */}
                            {/* 16:9 Preview */}
                            <div
                                className="
        relative aspect-video
        w-full overflow-hidden
        border-b border-border
        bg-muted/30
    "
                            >
                                <div
                                    className="
            absolute inset-0
            overflow-hidden
            transition-transform duration-500
            group-hover:scale-[1.02]
        "
                                >
                                    <PreviewCanvas>
                                        <div
                                            className={cn(
                                                "relative h-full w-full",
                                                category.title === "Backgrounds"
                                                    ? "overflow-hidden"
                                                    : "flex items-center justify-center"
                                            )}
                                        >
                                            {category.preview}
                                        </div>
                                    </PreviewCanvas>
                                </div>

                                {/* Preview hover arrow */}
                                <div
                                    className="
            absolute right-3 top-3
            flex h-7 w-7
            items-center justify-center
            rounded-full
            bg-black/40
            text-white
            opacity-0
            backdrop-blur-sm
            transition-all duration-300
            group-hover:opacity-100
        "
                                >
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>


                            {/* Card Content */}
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <h3
                                        className="
                                            text-[14px]
                                            font-semibold
                                            tracking-tight
                                            text-foreground
                                        "
                                    >
                                        {category.title}
                                    </h3>

                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.7}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-muted-foreground
                                            transition-all duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:text-foreground
                                        "
                                    />
                                </div>

                                <p
                                    className="
                                        mt-1.5
                                        text-[12px]
                                        leading-[1.55]
                                        text-muted-foreground
                                    "
                                >
                                    {category.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default BrowseByCategory