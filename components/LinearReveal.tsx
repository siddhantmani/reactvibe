"use client";

import { motion, Variants, useInView } from "framer-motion";
import React, { useRef, forwardRef } from "react";

interface LinearRevealProps {
    text: string;
    className?: string;
    colorClass?: string;
    delay?: number;
    as?: React.ElementType;
}

type PolymorphicProps<T extends React.ElementType> = {
    as?: T;
} & React.ComponentPropsWithoutRef<T>;

const MotionWrapper = motion(
    forwardRef(function Wrapper<T extends React.ElementType = "div">(
        { as, children, ...props }: PolymorphicProps<T>,
        ref: React.Ref<HTMLDivElement>
    ) {
        const Tag = as || "div";
        return (
            <Tag ref={ref} {...props}>
                {children}
            </Tag>
        );
    })
);

export default function LinearReveal({
    text,
    className = "",
    colorClass = "",
    delay = 0,
    as: Tag = "div",
}: LinearRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -15% 0px",
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

    return (
        <MotionWrapper
            as={Tag}
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
        </MotionWrapper>
    );
}
