"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, ReactNode, ButtonHTMLAttributes } from "react"

interface OrbitBorderGlobalPreviewProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
    children: ReactNode
    className?: string
    RingColors?: string[]   // <-- new prop
}

export default function OrbitBorderGlobalPreview({
    children,
    className = "",
    RingColors = ["#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"], // default colors
    ...props
}: OrbitBorderGlobalPreviewProps) {
    const angle = useMotionValue(0)

    const animatedBorder = useTransform(
        angle,
        (a) => `linear-gradient(${a}deg, ${RingColors.join(", ")})`
    )

    useEffect(() => {
        animate(angle, 360, {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        })
    }, [angle])

    return (
        <motion.div
            className="rounded-full p-[2px] inline-block"
            style={{ background: animatedBorder }}
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
                className={` ${className}`}
            >
                {children}
            </motion.button>
        </motion.div>
    )
}
