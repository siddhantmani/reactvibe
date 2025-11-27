"use client"

import { motion, Variants } from "framer-motion"
import { Bricolage_Grotesque } from "next/font/google"

const AnimatedFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

interface LinearRevealProps {
    text: string
    className?: string
    colorClass?: string
    delay?: number
}

export default function LinearReveal({
    text,
    className = "",
    colorClass = "",
    delay = 0,
}: LinearRevealProps) {
    // Typed container animation
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    }

    // Typed child animation
    const child: Variants = {
        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className={`${AnimatedFont.className} ${className}`}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className={`inline-block ${colorClass}`}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    )
}
