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
import ManageAccount from "./ManageAccount";

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

export default function NavMenu() {
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


                        <div className="w-full mt-auto pt-2">
                            <ManageAccount />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
