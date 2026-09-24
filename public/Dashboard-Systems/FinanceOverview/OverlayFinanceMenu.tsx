"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { manrope } from "@/lib/fonts";

import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    PiggyBank,
    TrendingUp,
    BarChart2,
    SquaresIntersect,
} from "lucide-react";

const items = [
    { name: "Finance Overview", icon: <LayoutDashboard size={15} />, link: "#" },
    { name: "Accounts", icon: <Wallet size={15} />, link: "#" },
    { name: "Transactions", icon: <ArrowLeftRight size={15} />, link: "#" },
    { name: "Budgets", icon: <PiggyBank size={15} />, link: "#" },
    { name: "Investments", icon: <TrendingUp size={15} />, link: "#" },
    { name: "Integrations", icon: <SquaresIntersect size={15} />, link: "#" },
    { name: "Reports", icon: <BarChart2 size={15} />, link: "#" },
];


export const fadeInUp = (delay = 0) => ({
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(2px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.50,
            delay,
        },
    },
});

export default function OverlayFinanceMenu() {
    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const targetId = link.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };
    return (
        <div className="relative max-w-5xl mx-auto">

            <motion.div
                animate={{
                    width: scrolled ? "100%" : "100%",
                    y: scrolled ? 12 : 0,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                }}
                className={`
        overflow-hidden
        mx-auto
        flex items-center justify-between
        px-6 py-4
        rounded-full
        transition-all duration-300
        ${scrolled
                        ? "bg-[#0c0c0c]/60 backdrop-blur-lg border border-white/10 shadow-2xl"
                        : "bg-transparent border border-transparent"
                    }
    `}
            >
                <h1 className={`${manrope.className} text-2xl dark:text-white text-black`}>
                    Taskforge
                </h1>

                <button
                    onClick={() => {
                        setOpen(true);
                    }}
                    className="text-black dark:text-white"
                >
                    <Menu />
                </button>
            </motion.div>


            <AnimatePresence mode="wait">
                {open && (
                    <motion.div
                        variants={fadeInUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        className="flex flex-col justify-between z-50 p-5 overflow-hidden h-screen -mt-14 dark:bg-[#0c0c0c] bg-white"
                    >
                        <div className="h-full flex-1">
                            <div className="flex justify-between text-black dark:text-white">
                                <h1 className={`${manrope.className} text-2xl`}>Taskforge</h1>

                                <motion.div
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Close</span>

                                    <motion.div
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <X />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <motion.div
                                className="space-y-3 mt-5"
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            staggerChildren: 0.15,
                                        },
                                    },
                                }}
                            >
                                {items.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.link || "#"}
                                        onClick={(e) => handleScroll(e, item.link)}
                                        className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm cursor-pointer transition-colors ${item.name === "Finance Overview"
                                            ? "text-black dark:text-white"
                                            : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                                            }`}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                ))}

                            </motion.div>
                        </div>


                        <div className="rounded-[15px] absolute bottom-5 left-8 scale-[100%] overflow-hidden bg-gradient-to-br from-[#015c46] via-[#01684e] to-[#014536] dark:from-[#031A08] dark:via-[#021406] dark:to-[#010B03] p-4 w-[65%]">

                            {/* Background glow circles */}
                            <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-white/5 dark:bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-black/10 dark:bg-black/20 rounded-full blur-2xl" />

                            {/* Cards */}
                            <div className="relative flex justify-center items-center mt-1 mb-3 h-[100px]">

                                {/* Back card */}
                                <div className="absolute left-[58px] top-[4px] w-[82px] h-[58px] rounded-[12px] bg-[#f5f5f5] dark:bg-neutral-700 shadow-xl rotate-[-12deg] p-3">
                                    <div className="w-[10px] h-[10px] rounded-[3px] bg-[#b98a3f]" />
                                    <div className="mt-4 space-y-1">
                                        <div className="w-[35px] h-[3px] bg-[#d9d9d9] dark:bg-neutral-500 rounded-full" />
                                        <div className="w-[25px] h-[3px] bg-[#e8e8e8] dark:bg-neutral-600 rounded-full" />
                                    </div>
                                </div>

                                {/* Front card */}
                                <div className="absolute right-[50px] top-[18px] w-[92px] h-[62px] rounded-[12px] bg-gradient-to-br from-[#8cff8d] to-[#5fb96d] shadow-2xl rotate-[10deg] p-3">
                                    <div className="w-[10px] h-[10px] rounded-[3px] bg-[#b98a3f]" />

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="w-[40px] h-[3px] bg-white/80 rounded-full" />
                                            <div className="w-[28px] h-[3px] bg-white/60 rounded-full" />
                                        </div>

                                        <div className="flex gap-1">
                                            <div className="w-[7px] h-[7px] rounded-full bg-white/70" />
                                            <div className="w-[7px] h-[7px] rounded-full bg-white/40" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text */}

                            <div className="relative text-center text-white space-y-1 w-full">
                                <h1 className="text-[18px] leading-tight">
                                    Upgrade to Premium
                                </h1>

                                <p className="text-[12px] text-white/90 leading-[2] mt-1 px-3">
                                    Unlock advanced insights and custom reports.
                                </p>

                                <div className="w-full mt-6 px-14 rounded-[10px] bg-[#f0fff3] dark:bg-[#000000] dark:text-white p-0 py-4 text-[16px] font-semibold text-black cursor-pointer hover:scale-105 transition-transform duration-150 ease-in-out">
                                    Upgrade Now
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
