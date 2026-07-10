"use client";

import { motion, animate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface AnimatedGradientBadgeProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    rotationDuration?: number;
    gradients?: string[][];
}

const defaultGradients = [
    ["#0F0F0F", "#141313", "#1B1A1A"],
    ["#141313", "#1E1D1D", "#2A2929"],
    ["#111111", "#181717", "#242323"],
    ["#161515", "#232222", "#2F2E2E"],
    ["#1A1919", "#2A2828", "#3A3838"],
];

export default function AnimatedGradientBadge({
    children,
    className = "",
    duration = 6,
    rotationDuration = 12,
    gradients = defaultGradients,
}: AnimatedGradientBadgeProps) {
    const angle = useMotionValue(0);
    const colorIndex = useMotionValue(0);

    const smoothIndex = useSpring(colorIndex, {
        stiffness: 15,
        damping: 15,
    });

    const mix = (start: string, end: string, progress: number) => {
        const s = parseInt(start.slice(1), 16);
        const e = parseInt(end.slice(1), 16);

        const sr = (s >> 16) & 255;
        const sg = (s >> 8) & 255;
        const sb = s & 255;

        const er = (e >> 16) & 255;
        const eg = (e >> 8) & 255;
        const eb = e & 255;

        const r = Math.round(sr + (er - sr) * progress);
        const g = Math.round(sg + (eg - sg) * progress);
        const b = Math.round(sb + (eb - sb) * progress);

        return `rgb(${r}, ${g}, ${b})`;
    };

    const background = useTransform(
        [angle, smoothIndex],
        ([a, i]: number[]) => {
            const index = Math.floor(i) % gradients.length;
            const next = (index + 1) % gradients.length;
            const t = i - Math.floor(i);

            const [c1a, c2a, c3a] = gradients[index];
            const [c1b, c2b, c3b] = gradients[next];

            return `linear-gradient(${a}deg,
                ${mix(c1a, c1b, t)} 10%,
                ${mix(c2a, c2b, t)} 60%,
                ${mix(c3a, c3b, t)} 100%)`;
        }
    );

    useEffect(() => {
        const rotate = animate(angle, 360, {
            duration: rotationDuration,
            ease: "linear",
            repeat: Infinity,
        });

        const colors = animate(colorIndex, gradients.length, {
            duration: gradients.length * duration,
            ease: "linear",
            repeat: Infinity,
        });

        return () => {
            rotate.stop();
            colors.stop();
        };
    }, [angle, colorIndex, gradients, duration, rotationDuration]);

    return (
        <motion.div
            style={{ background }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
}