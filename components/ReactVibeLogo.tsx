import React from "react";
import { motion, Variants } from "framer-motion";

type Bar = { height: number; rise: number };

const bars: Bar[] = [
    { height: 35, rise: 0 },   // shortest, baseline
    { height: 40, rise: 14 },  // medium, lifted a bit
    { height: 43, rise: 28 },  // tallest, lifted more
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const barVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (rise: number) => ({
        opacity: 1,
        y: -rise,
        transition: {
            duration: 0.42,
            ease: [0.32, 0.72, 0, 1] as const // cubic bezier for easeOut
        },
    }),
};

export default function ReactVibeLogo() {
    return (
        <motion.div
            className="flex items-end gap-[5px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label="ReactVibe logo"
            role="img"
        >
            {bars.map((b, i) => (
                <motion.div
                    key={i}
                    custom={b.rise}
                    variants={barVariants}
                    className="w-[13px] rounded-full bg-black dark:bg-white relative top-3"
                    style={{ height: b.height }}
                />
            ))}
        </motion.div>
    );
}