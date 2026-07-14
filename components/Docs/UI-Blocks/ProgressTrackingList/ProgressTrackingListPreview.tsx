"use client"
import { motion } from "framer-motion"

import React from "react";
import {
    Shield,
    Gift,
    Laptop,
} from "lucide-react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});

const goals = [
    {
        title: "Emergency Fund",
        current: "$3,200",
        total: "$10,000",
        progress: 32,
        icon: (
            <Shield
                size={26}
                strokeWidth={2.2}
                className="text-[#111827] dark:text-white"
            />
        ),
    },
    {
        title: "Vacation to Bali",
        current: "$1,250",
        total: "$3,000",
        progress: 42,
        icon: (
            <Gift
                size={26}
                strokeWidth={2.2}
                className="text-[#111827] dark:text-white"
            />
        ),
    },
    {
        title: "New Laptop",
        current: "$800",
        total: "$1,500",
        progress: 53,
        icon: (
            <Laptop
                size={26}
                strokeWidth={2.2}
                className="text-[#111827] dark:text-white"
            />
        ),
    },
];

interface GoalProgressProps {
    progress: number
}

function GoalProgress({ progress }: GoalProgressProps) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setValue(progress);
        }, 250);

        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <div className="relative w-full h-[5px] bg-[#ececec] dark:bg-white/10 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full bg-[#16a34a] dark:bg-green-500 transition-all duration-[1200ms] ease-out"
                style={{
                    width: `${value}%`,
                }}
            />
        </div>
    );
}

interface GoalItemProps {
    title: string;
    current: string;
    total: string;
    progress: number;
    icon: React.ReactNode;
    last: boolean;
}

function GoalItem({
    title,
    current,
    total,
    progress,
    icon,
    last,
}: GoalItemProps) {
    return (
        <div
            className={`pb-3 ${!last ? "border-b border-black/8 dark:border-white/10 mb-4" : ""
                }`}
        >

            <div className="flex items-start gap-2">

                {/* Icon */}
                <div className="w-8 h-8 rounded-[10px] p-2 border border-black/8 dark:border-white/10 bg-[#f8f8f8] dark:bg-[#0c0c0c] flex items-center justify-center shrink-0">
                    {icon}
                </div>

                {/* Content */}
                <div className="flex-1">

                    {/* Top */}
                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4 flex-wrap">

                            <h3 className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white`}>
                                {title}
                            </h3>

                            <LinearReveal
                                as='p'
                                delay={0.3}
                                Text={`${current} of ${total}`}
                                className={`${boldFont.className} text-[12px] text-[#4b5563] dark:text-gray-400`}
                            />

                        </div>

                        <LinearReveal
                            as='p'
                            delay={0.4}
                            Text={`${progress}%`}
                            className={`${boldFont.className} text-[13px] text-[#111827] dark:text-white`}
                        />

                    </div>

                    {/* Progress */}
                    <div className="mt-2">
                        <GoalProgress progress={progress} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProgressTrackingListPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full rounded-[15px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0c0c] p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">

                <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                    Progress Tracking List
                </h1>

                <button className={`${boldFont.className} text-[12px] text-[#006b46] dark:text-green-400 hover:opacity-80 transition-opacity`}>
                    View All
                </button>
            </div>

            {/* Goals */}
            <div>
                {goals.map((goal, index) => (
                    <GoalItem
                        key={index}
                        {...goal}
                        last={index === goals.length - 1}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default ProgressTrackingListPreview;