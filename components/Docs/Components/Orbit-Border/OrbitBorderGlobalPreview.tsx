"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, ReactNode, forwardRef } from "react"

type OrbitBorderComponentProps = {
    as?: React.ElementType
    children?: ReactNode
} & Record<string, unknown>

const MotionComponent = motion(
    forwardRef(function MotionComponent(
        { as: Tag = "button", children, ...props }: OrbitBorderComponentProps,
        ref: React.Ref<unknown>
    ) {
        return (
            <Tag ref={ref} {...props}>
                {children}
            </Tag>
        )
    })
)

interface OrbitBorderProps {
    as?: React.ElementType
    children: ReactNode
    className?: string
    RingColors?: string[]
    rotate?: number
    padding?: number
    rounded?: number
}

export default function OrbitBorderGlobalPreview({
    as: Component = "button",
    children,
    className = "",
    RingColors = ["#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"],
    rotate = 0,
    padding = 0,
    rounded = 0,
    ...props
}: OrbitBorderProps & Record<string, unknown>) {
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
            className="inline-block"
            style={{
                background: animatedBorder,
                rotate: `${rotate}deg`,
                padding: `${padding}px`,
                borderRadius: `${rounded}px`
            }}
        >
            <MotionComponent
                as={Component}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
                className={className}
            >
                {children}
            </MotionComponent>
        </motion.div>
    )
}