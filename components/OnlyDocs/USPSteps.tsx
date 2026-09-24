"use client"

import {
    Braces,
    Code2,
    Layers3,
    Sparkles,
    Scale,
} from "lucide-react"

import React from "react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: <Layers3 size={15} />,
        title: "74 Production-Ready Components",
        subtitle: "Across 7 categories",
    },
    {
        icon: <Sparkles size={15} />,
        title: "Motion-First UI",
        subtitle: "Built for expressive interfaces",
    },
    {
        icon: <Code2 size={15} />,
        title: "Copy, Paste & Customize",
        subtitle: "Own the source code",
    },
    {
        icon: <Braces size={15} />,
        title: "Framer Motion Powered",
        subtitle: "Install once, use across components",
    },
    {
        icon: <Scale size={15} />,
        title: "MIT Licensed",
        subtitle: "Free for commercial use",
    },
]

function USPSteps() {
    return (
        <div className="w-full py-4 xl:mt-10">
            <div className="flex flex-wrap items-center gap-2">
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                filter: "blur(4px)",
                            }}
                            animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                            }}
                            whileInView={{ opacity: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                                margin: "50px",
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2 * index,
                            }}
                            className="
                                group flex items-center gap-3
                                rounded-full border border-border
                                px-4 py-2.5
                                transition-all duration-300
                                hover:border-primary/40
                                hover:bg-accent
                                dark:bg-gradient-to-r
                                dark:from-[#0b0b0b]
                                dark:from-[33%]
                                dark:to-[#131212]
                            "
                        >
                            {/* Icon */}
                            <div
                                className="
                                    flex h-8 w-8 items-center justify-center
                                    rounded-full bg-background
                                    text-primary
                                    transition-all duration-300
                                    group-hover:bg-primary/10
                                "
                            >
                                {step.icon}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col">
                                <span className="text-[13px] font-semibold leading-tight tracking-tight text-foreground">
                                    {step.title}
                                </span>

                                <span className="text-[11px] leading-tight text-muted-foreground">
                                    {step.subtitle}
                                </span>
                            </div>
                        </motion.div>

                        {index < steps.length - 1 && (
                            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default USPSteps