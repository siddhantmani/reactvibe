"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import PathFlowPreview from "../Docs/Backgrounds/PathFlow/PathFlowPreview"

const steps = [
    {
        number: 1,
        title: "Browse",
        description: "Explore dashboards, UI blocks, and production-ready React components.",
    },
    {
        number: 2,
        title: "Copy",
        description: "Copy the source code and install only the required dependencies.",
    },
    {
        number: 3,
        title: "Customize",
        description:
            "Edit layouts, styles, animations, and logic with complete code ownership.",
    },
    {
        number: 4,
        title: "Ship",
        description: "Deploy production-ready React interfaces without vendor lock-in.",
    },
]

// Clean code block
function CodeBlock({ code }: { code: string }) {
    return (
        <pre className="text-[12px] leading-6 font-mono overflow-x-auto">
            <code>{code}</code>
        </pre>
    )
}

function HowItWorks({ className }: { className?: string }) {
    // 👇 File config (scalable later)
    const fileTree = {
        Components: [
            { name: "PathFlow.tsx", path: "/Backgrounds/Path-Flow/PathFlow.tsx" },
        ],
    }

    const [activeTab, setActiveTab] = useState<"preview" | "code">("code")
    const [activeStep, setActiveStep] = useState(1)
    const [copied, setCopied] = useState(false)

    // 👇 REAL CODE STATE
    const [code, setCode] = useState("")
    const [activeFile, setActiveFile] = useState<{
        name: string
        path: string
    } | null>(fileTree.Components[0])

    // 👇 FETCH CODE (core fix)
    useEffect(() => {
        if (!activeFile) return

        fetch(activeFile.path)
            .then((res) => res.text())
            .then(setCode)
            .catch(() => setCode("// Failed to load file"))
    }, [activeFile])

    // 👇 COPY REAL CODE
    const handleCopy = async () => {
        if (!code) return
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("w-full px-2 py-10", className)}>
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                }}
            >
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    How React Vibe Components Work
                </h2>
                <p className="text-[13px] mt-1 mb-8 text-muted-foreground">
                    Get started in seconds. No React Vibe install — just copy and use.
                </p>
            </motion.div>

            <div className="flex flex-col xl:flex-row gap-8">
                {/* Steps */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2, margin: "50px" }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.6,
                    }}
                    className="flex flex-col gap-1 xl:w-56 flex-shrink-0"
                >
                    {steps.map((step) => {
                        const isActive = activeStep === step.number

                        return (
                            <button
                                key={step.number}
                                onClick={() => setActiveStep(step.number)}
                                className={cn(
                                    "flex gap-3 items-start text-left px-3 py-3 rounded-xl transition-all group",
                                    "hover:bg-accent",
                                    "dark:hover:bg-gradient-to-r dark:from-[#1d1c1c] dark:to-[#272525]",
                                    isActive &&
                                    "bg-accent dark:bg-gradient-to-r dark:from-[#1d1c1c] dark:to-[#272525]"
                                )}
                            >
                                <span
                                    className={cn(
                                        "xl:w-13 lg:w-6 md:w-6 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5 transition-all",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground group-hover:bg-accent"
                                    )}
                                >
                                    {step.number}
                                </span>

                                <div>
                                    <p
                                        className={cn(
                                            "text-[14px] font-semibold leading-snug",
                                            isActive ? "text-foreground" : "text-muted-foreground"
                                        )}
                                    >
                                        {step.title}
                                    </p>
                                    <p className="text-[12px] leading-relaxed mt-0.5 text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </motion.div>

                {/* Panel */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2, margin: "50px" }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.7,
                    }}
                    className={cn(
                        "flex-1 rounded-2xl border overflow-hidden flex flex-col min-h-0",
                        "bg-card border-border",
                        "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:to-[#131212]",
                        "dark:border-[#1e1a30]"
                    )}
                >
                    {/* Tabs */}
                    <div className="flex items-center justify-between px-4 pt-3 border-b border-border dark:border-[#1e1a30]">
                        <div className="flex gap-1">
                            {(["preview", "code"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-4 py-2 text-[13px] font-medium capitalize border-b-2 -mb-px transition-all",
                                        activeTab === tab
                                            ? "text-foreground border-primary"
                                            : "text-muted-foreground border-transparent hover:text-foreground"
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 px-3 py-1.5 mb-2 rounded-lg border text-[12px] transition-all
              border-border text-muted-foreground hover:text-foreground hover:bg-accent
              dark:border-[#2a2040] dark:hover:border-[#7c3aed]/60"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-5 overflow-y-auto ">
                        {activeTab === "code" ? (
                            <div className="h-96">
                                <CodeBlock code={code} />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-[13px] text-muted-foreground h-96">
                                <PathFlowPreview />
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div
                        className={cn(
                            "flex items-center gap-2 border-t py-3 px-5 text-[12px]",
                            "border-border bg-muted text-muted-foreground",
                            "dark:border-[#1e1a30] dark:bg-[#0f0d1a]"
                        )}
                    >
                        No React Vibe install. No wrappers. Just real React components.
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HowItWorks