"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"

import {
    ArrowDown,
    ArrowUp,
} from "lucide-react";
import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});

interface PercentageProgressProps {
    value?: number;
    color?: string;
    bg?: string;
}

function PercentageProgress({
    value = 66,
    color = "#16a34a",
    bg,
}: PercentageProgressProps) {
    const [progress, setProgress] = React.useState(0);
    const [displayProgress, setDisplayProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 400);
        return () => clearTimeout(timer);
    }, [value]);

    React.useEffect(() => {
        if (progress === 0) return;

        const duration = 1100;
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);

            setDisplayProgress(Math.round(eased * progress));

            if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [progress]);

    return (
        <div className="space-y-2">
            <p
                className={`${boldFont.className} text-[12px]`}
                style={{ color }}
            >
                {displayProgress}%
            </p>

            {/* <ProgressBar value={66} color="#000000" /> */}

            <div className="relative w-full h-[6px] bg-black/5 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-[1100ms]"
                    style={{
                        width: `${progress}%`,
                        background: color,
                    }}
                />
            </div>
        </div>
    );
}

interface StatCardProps {
    title: string;
    amount: string;
    percentage: number;
    icon: React.ReactNode;
    color: string;
    bg: string;
}

function StatCard({
    title,
    amount,
    percentage,
    icon,
    color,
    bg,
}: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
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
            className="flex-1 aspect-video bg-white dark:bg-[#070606] dark:border-white/10 rounded-[15px] border border-black/10 p-3 px-3 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">

            {/* Top */}
            <div className="flex items-start justify-between">
                <div>
                    <p className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white`}>
                        {title}
                    </p>

                    <LinearReveal
                        as='h2'
                        Text={amount}
                        className={`${boldFont.className} text-[18px] font-bold text-[#0f172a] dark:text-white mt-3 tracking-[-1px]`}
                    />
                </div>

                <div
                    className="h-8 w-8 rounded-full flex items-center justify-center"
                    style={{ background: bg }}
                >
                    {icon}
                </div>
            </div>

            {/* Progress */}
            <div className="mt-10">
                <PercentageProgress
                    value={percentage}
                    color={color}
                    bg={bg}
                />
            </div>
        </motion.div>
    );
}

function BudgetsMetricsGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <div className="grid grid-cols-4 gap-2">

            {/* Main Balance Card */}
            <div className="relative aspect-video flex-1 rounded-[15px] bg-gradient-to-br from-[#006b46] via-[#00754d] to-[#00573a] dark:from-[#031A08] dark:via-[#021406] dark:to-[#010B03] p-3 px-3 shadow-[0_20px_60px_rgba(0,100,60,0.25)] dark:shadow-none dark:border dark:border-white/10">

                {/* Glow */}
                <div className="absolute top-[-60px] right-[-40px] w-[180px] h-[150px] bg-white/5 rounded-[18px] blur-3xl" />

                <div className="relative z-10 flex flex-col justify-between">

                    <div>
                        <p className={`${boldFont.className} text-white/90 text-[11px]`}>
                            Total Balance
                        </p>

                        <LinearReveal
                            as='h1'
                            Text="$24,250.00"
                            className={`${boldFont.className} text-white text-[20px] mt-2`}
                        />

                    </div>

                    {/* Bottom */}
                    <div className="mt-12 flex items-end justify-between relative">

                        <div className="flex items-center gap-2 text-[#d7ffd7]">
                            <span className="text-[12px]">▲</span>

                            <p className={`${boldFont.className} text-[11px] font-normal`}>
                                8.5% vs last month
                            </p>
                        </div>

                        <div className="absolute right-0 bottom-2">
                            {/* Graph */}
                            <motion.svg
                                ref={ref}
                                width="140"
                                height="70"
                                viewBox="0 0 130 70"
                                fill="none"
                                className="opacity-95 scale-[100%]"
                            >
                                <motion.path
                                    d="M4 55C18 15 38 70 58 40C75 15 92 60 126 6"
                                    stroke="white"
                                    strokeWidth="1"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: isInView ? 1 : 0 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 0.2,
                                    }}
                                />

                                <motion.circle
                                    r="5"
                                    fill="white"
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 0.2,
                                    }}
                                >
                                    <animateMotion
                                        begin="0.4s"
                                        dur="0.9s"
                                        fill="freeze"
                                        path="M4 55C18 15 38 70 58 40C75 15 92 60 126 6"
                                    />
                                </motion.circle>
                            </motion.svg>
                        </div>

                    </div>
                </div>
            </div>

            {/* Income */}
            <StatCard
                title="Income"
                amount="$8,420.00"
                percentage={82}
                color="#16a34a"
                bg="#dcfce7"
                icon={
                    <ArrowDown
                        size={20}
                        className="text-[#16a34a]"
                        strokeWidth={2.5}
                    />
                }
            />

            {/* Expenses */}
            <StatCard
                title="Expenses"
                amount="$4,680.00"
                percentage={52}
                color="#ef4444"
                bg="#fee2e2"
                icon={
                    <ArrowUp
                        size={20}
                        className="text-[#ef4444]"
                        strokeWidth={2.5}
                    />
                }
            />

            {/* Savings */}
            <div className="flex-1 bg-white dark:bg-[#070606] dark:border-white/10 rounded-[15px] border border-black/10 p-3 px-3 shadow-[0_10px_30px_rgba(0,0,0,0.03)] aspect-video">

                <div className="flex items-start justify-between">

                    <div>
                        <p className={`${boldFont.className} text-[11px] font-medium text-[#111827] dark:text-white`}>
                            Savings
                        </p>

                        <LinearReveal
                            as='h2'
                            Text="$3,740.00"
                            className={`${boldFont.className} text-[18px] text-[#0f172a] dark:text-white mt-3 tracking-[-1px]`}
                        />
                    </div>

                    <div className="flex flex-col items-end gap-6">

                        {/* Dropdown */}
                        <button className={`${boldFont.className} px-2 py-1 rounded-[4px] border border-black/10 text-[10px] text-[#111827] dark:text-white/60 dark:hover:text-white dark:border-white/10`}>
                            This Month
                        </button>


                    </div>
                </div>

                <div className="mt-10">
                    <PercentageProgress
                        value={75}
                        color="#16a34a"
                        bg="#dcfce7"
                    />
                </div>
            </div>
        </div>
    );
}

export default BudgetsMetricsGrid;