"use client"
import { motion } from "framer-motion"

import React from "react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});

const list = [
    {
        title: "List 1",
        spent: 320,
        total: 500,
        progress: 64,
    },
    {
        title: "List 2",
        spent: 120,
        total: 250,
        progress: 48,
    },
    {
        title: "List 3",
        spent: 200,
        total: 400,
        progress: 50,
    },
    {
        title: "List 4",
        spent: 80,
        total: 200,
        progress: 40,
    },
];

interface ProgressProps {
    progress: number
}

function Progress({ progress }: ProgressProps) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setValue(progress);
        }, 250);

        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <div className="relative w-full h-[4px] bg-[#ececec] rounded-full overflow-hidden">
            <div
                className="h-full rounded-full bg-[#16a34a] transition-all duration-[1200ms] ease-out"
                style={{
                    width: `${value}%`,
                }}
            />
        </div>
    );
}

interface ProgressOverviewListItemProps {
    title: string;
    spent: number;
    total: number;
    progress: number
}

function ProgressOverviewListItem({ title, spent, total, progress }: ProgressOverviewListItemProps) {
    return (
        <div className="space-y-[1px]">

            {/* Top */}
            <div className="flex items-start justify-between">

                <div>
                    <h3 className={`${boldFont.className} text-[11px] text-[#111827]`}>
                        {title}
                    </h3>

                    <LinearReveal
                        delay={0.4}
                        as='p'
                        Text={`${spent} of ${total}`}
                        className={`${boldFont.className} text-[11px] text-[#4b5563] mt-3`}
                    />

                </div>

                <LinearReveal
                    as='p'
                    delay={0.4}
                    Text={`${progress}%`}
                    className={`${boldFont.className} text-[12px] text-[#111827] mt-3`}
                />

            </div>

            {/* Progress */}
            <Progress progress={progress} />
        </div>
    );
}

function ProgressOverviewList() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2, // Trigger when 20% visible
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-[15px] border border-black/10 bg-white p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">

                <h1 className={`${boldFont.className} text-[12px] text-[#111827]`}>
                    Progress Overview List
                </h1>

                <button className={`${boldFont.className} text-[12px] text-[#15803d] hover:opacity-80 transition-opacity`}>
                    View All
                </button>
            </div>

            {/* Budget Items */}
            <div className="space-y-4">
                {list.map((item, index) => (
                    <ProgressOverviewListItem
                        key={index}
                        title={item.title}
                        spent={item.spent}
                        total={item.total}
                        progress={item.progress}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default ProgressOverviewList;