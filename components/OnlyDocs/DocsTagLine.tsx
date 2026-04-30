"use client"

import { Manrope } from "next/font/google"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import LinearReveal from "../LinearReveal"

const HeadingFont = Manrope({ weight: "700", subsets: ["latin"] })
const ButtonFont = Manrope({ weight: "500", subsets: ["latin"] })

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
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className={cn(" space-y-4 mt-6", className)}>

            {/* Heading */}
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
                    delay: 0.3
                }}
                className={cn(HeadingFont.className, "text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl")}>
                <h1 className="text-foreground">Motion-first React</h1>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500">
                    ui components you copy-paste.
                </h1>
            </motion.div>

            {/* Description */}
            <motion.p
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
                    delay: 0.4
                }}
                className="text-muted-foreground text-sm sm:text-base max-w-4xl">
                React Vibe is a motion-first React animation library built for modern UI development. It provides production-ready React components you can copy and paste directly into your project — no React Vibe install, no library overhead.
                <br />
                Built using tools like Framer Motion and Three.js when needed, it gives you fully customizable, animated React components with real code ownership — not black-box abstractions.
            </motion.p>

            {/* Actions */}
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
                    delay: 0.5
                }}
                className="flex flex-wrap gap-3 mt-6"
            >
                {/* Primary */}
                <Link href="/docs/explore-components">


                    <div
                        onClick={onPrimaryClick}
                    >
                        <LinearReveal
                            Text='Browse Components'
                            as={'button'}
                            delay={0.5}
                            className={cn(
                                ButtonFont.className,
                                "px-5 py-3 rounded-lg text-[14px] font-medium transition-all cursor-pointer",

                                // light
                                "bg-primary text-primary-foreground hover:opacity-90",

                                // dark glow
                                "dark:shadow-lg dark:shadow-[#7c3aed]/30",

                                // motion
                                "hover:scale-[1.05] active:scale-[0.98]"
                            )}
                        />
                    </div>
                </Link>

                {/* Secondary */}
                <Link href="#howitworks">
                    <div
                        onClick={onSecondaryClick}
                        className={cn(
                            ButtonFont.className,
                            "px-5 py-3 rounded-lg text-[14px] font-medium border transition-all",

                            // light
                            "border-border bg-muted text-foreground hover:bg-accent",

                            // dark
                            "dark:border-[#2a2040] dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:to-[#131212] dark:hover:border-[#7c3aed]/60",

                            // motion
                            "hover:scale-[1.05] active:scale-[0.98]"
                        )}
                    >
                        How it Works
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}

export default DocsTagLine