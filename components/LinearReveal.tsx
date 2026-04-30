"use client";

import { motion, Variants, useInView } from "framer-motion";
import React, { useRef } from "react";

interface LinearRevealProps {
    Text: string;
    className?: string;
    colorClass?: string;
    delay?: number;
    as?: keyof React.JSX.IntrinsicElements;
    style?: React.CSSProperties;
}

export default function LinearReveal({
    Text,
    className = "",
    colorClass = "",
    delay = 0,
    as: Tag = "div",
    style,
}: LinearRevealProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px 0% 0px",
    });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const child: Variants = {
        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        },
    };

    const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

    return (
        <MotionTag
            ref={ref as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className={className}
            style={style}
        >
            {Text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className={`inline-block ${colorClass}`}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </MotionTag>
    );
}