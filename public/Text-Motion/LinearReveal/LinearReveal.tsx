"use client";

import { motion, Variants, useInView } from "framer-motion";
import React, { useRef } from "react";

interface LinearRevealProps {
    text: string;
    className?: string;
    colorClass?: string;
    delay?: number;
    as?: React.ElementType;
}

export default function LinearReveal({
    text,
    className = "",
    colorClass = "",
    delay = 0,
    as: Tag = "div",
}: LinearRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -15% 0px",
    });

    const MotionTag = motion(Tag);

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

    return (
        <MotionTag
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className={className}
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
        </MotionTag>
    );
}
