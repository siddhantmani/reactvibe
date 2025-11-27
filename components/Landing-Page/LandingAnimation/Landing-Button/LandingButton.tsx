"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, ReactNode, ButtonHTMLAttributes } from "react"

interface LandingButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
    children: ReactNode
    className?: string
}

export default function LandingButton({
    children,
    className = "",
    ...props
}: LandingButtonProps) {
    const angle = useMotionValue(0)

    const animatedBorder = useTransform(
        angle,
        (a) =>
            `linear-gradient(${a}deg,  #fcba03, #fcba03, #000000, #000000, #ffffff)`
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
            className="rounded-full p-[2px] inline-block scale-105"
            style={{ background: animatedBorder }}
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
                className={`rounded-full px-5 py-3 text-sm font-medium bg-[#0A0A0A] text-[#ffffff] shadow-sm ${className}`}
            >
                {children}
            </motion.button>
        </motion.div>
    )
}