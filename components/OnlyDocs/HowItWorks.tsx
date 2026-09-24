"use client"

import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import PathFlowPreview from "@/public/Backgrounds/Path-Flow/Page"

const steps = [
    {
        number: 1,
        title: "Browse",
        description:
            "Explore motion, backgrounds, components, UI blocks, and dashboard systems.",
    },
    {
        number: 2,
        title: "Copy",
        description:
            "Copy the component source code directly into your project.",
    },
    {
        number: 3,
        title: "Customize",
        description:
            "Modify the code, styles, animation, and logic however you need.",
    },
    {
        number: 4,
        title: "Ship",
        description:
            "Build and deploy with complete ownership of the code.",
    },
]

// Code block
function CodeBlock({ code }: { code: string }) {
    return (
        <pre className="overflow-x-auto font-mono text-[12px] leading-6">
            <code>{code}</code>
        </pre>
    )
}

function HowItWorks({
    className,
}: {
    className?: string
}) {
    const fileTree = {
        Components: [
            {
                name: "PathFlow.tsx",
                path: "/Backgrounds/Path-Flow/PathFlow.tsx",
            },
        ],
    }

    const [activeTab, setActiveTab] =
        useState<"preview" | "code">("code")

    const [activeStep, setActiveStep] = useState(1)

    const [copied, setCopied] = useState(false)

    const [code, setCode] = useState("")

    const [activeFile, setActiveFile] = useState<{
        name: string
        path: string
    } | null>(fileTree.Components[0])

    useEffect(() => {
        if (!activeFile) return

        fetch(activeFile.path)
            .then((res) => res.text())
            .then(setCode)
            .catch(() => setCode("// Failed to load file"))
    }, [activeFile])

    const handleCopy = async () => {
        if (!code) return

        await navigator.clipboard.writeText(code)

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div className={cn("w-full px-2 py-10", className)}>
            {/* Heading */}
            <motion.div
                initial={{
                    opacity: 0,
                    filter: "blur(8px)",
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
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
            >
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    How It Works
                </h2>

                <p className="mt-1 mb-8 text-[13px] text-muted-foreground">
                    Browse, copy the source code, customize it, and ship.
                </p>
            </motion.div>

            <div className="flex flex-col gap-8 xl:flex-row">
                {/* Steps */}
                <motion.div
                    initial={{
                        opacity: 0,
                        filter: "blur(8px)",
                    }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                        margin: "50px",
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.6,
                    }}
                    className="flex flex-shrink-0 flex-col gap-1 xl:w-56"
                >
                    {steps.map((step) => {
                        const isActive =
                            activeStep === step.number

                        return (
                            <button
                                key={step.number}
                                type="button"
                                onClick={() =>
                                    setActiveStep(step.number)
                                }
                                className={cn(
                                    "group flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-all",
                                    "hover:bg-accent",
                                    "dark:hover:bg-gradient-to-r dark:hover:from-[#1d1c1c] dark:hover:to-[#272525]",
                                    isActive &&
                                    "bg-accent dark:bg-gradient-to-r dark:from-[#1d1c1c] dark:to-[#272525]"
                                )}
                            >
                                {/* Number */}
                                <span
                                    className={cn(
                                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground group-hover:bg-accent"
                                    )}
                                >
                                    {step.number}
                                </span>

                                {/* Step content */}
                                <div>
                                    <p
                                        className={cn(
                                            "text-[14px] font-semibold leading-snug",
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {step.title}
                                    </p>

                                    <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </motion.div>

                {/* Panel */}
                <motion.div
                    initial={{
                        opacity: 0,
                        filter: "blur(8px)",
                    }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                        margin: "50px",
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.7,
                    }}
                    className={cn(
                        "flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border",
                        "bg-card border-border",
                        "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:to-[#131212]",
                        "dark:border-[#1e1a30]"
                    )}
                >
                    {/* Tabs */}
                    <div className="flex items-center justify-between border-b border-border px-4 pt-3 dark:border-[#1e1a30]">
                        <div className="flex gap-1">
                            {(["preview", "code"] as const).map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() =>
                                            setActiveTab(tab)
                                        }
                                        className={cn(
                                            "px-4 py-2 text-[13px] font-medium capitalize transition-all",
                                            "border-b-2 -mb-px",
                                            activeTab === tab
                                                ? "border-primary text-foreground"
                                                : "border-transparent text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                )
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={handleCopy}
                            className="
                                mb-2 flex items-center gap-1.5
                                rounded-lg border px-3 py-1.5
                                text-[12px] transition-all
                                border-border
                                text-muted-foreground
                                hover:bg-accent
                                hover:text-foreground
                                dark:border-[#2a2040]
                                dark:hover:border-[#7c3aed]/60
                            "
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-5">
                        {activeTab === "code" ? (
                            <div className="h-96">
                                <CodeBlock code={code} />
                            </div>
                        ) : (
                            <div className="relative h-[480px] w-full overflow-hidden rounded-lg -top-20">
                                <PathFlowPreview />
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div
                        className={cn(
                            "flex items-center gap-2 border-t px-5 py-3 text-[12px]",
                            "border-border bg-muted text-muted-foreground",
                            "dark:border-[#1e1a30] dark:bg-[#0f0d1a]"
                        )}
                    >
                        No React Vibe package required. Install only the
                        dependencies used by the component, such as Framer
                        Motion.
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HowItWorks