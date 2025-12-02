"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, ReactNode, ButtonHTMLAttributes } from "react"

interface OrbitBorderProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
    children: ReactNode
    className?: string
    RingColors?: string[]   
}

export default function OrbitBorder({
    children,
    className = "",
    RingColors = ["#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"], // default colors
    ...props
}: OrbitBorderProps) {
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
            className="rounded-full p-[1px] inline-block"
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
