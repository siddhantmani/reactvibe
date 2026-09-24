"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaThreads, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { manrope } from "@/lib/fonts";
import LinearReveal from "@/components/LinearReveal";

const socialIcons = [
    <FaXTwitter key="s1" size={50} />,
    <FaThreads key="s2" size={50} />,
    <FaInstagram key="s3" size={50} />,
    <FaLinkedinIn key="s4" size={50} />,
];

const menuItems = [
    { subMenu: 'Platform', subMenu_key: 'platform', link: '#' },
    { subMenu: 'Solutions', subMenu_key: 'solutions', link: '#' },
    { subMenu: 'Ethics', subMenu_key: 'ethics', link: '#' },
    { subMenu: 'Enterprise', subMenu_key: 'enterprise', link: '#' },
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

export default function MorphMenu() {
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
        <motion.div>

            <motion.div
                animate={{
                    width: scrolled ? 370 : "100%",
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
                        ? "bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-white/10 shadow-2xl"
                        : "bg-transparent border border-transparent"
                    }
    `}
            >
                <h1 className={`${manrope.className} text-2xl dark:text-white text-black`}>
                    Cognito AI
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
                        className="flex flex-col justify-between z-50 p-5 overflow-hidden h-screen -mt-17 bg-white dark:bg-[#0c0c0c]"
                    >
                        <div className="h-full flex-1">
                            <div className="flex justify-between text-black dark:text-white">
                                <h1 className={`${manrope.className} text-2xl`}>Cognito AI</h1>

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
                                {menuItems.map((item) => (
                                    <motion.div
                                        key={item.subMenu_key}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <div aria-label={item.subMenu_key}>
                                            <Link href={item.link} onClick={(e) => handleScroll(e, item.link)}>
                                                <LinearReveal
                                                    Text={item.subMenu}
                                                    className="text-[35px] text-black dark:text-white"
                                                />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}

                            </motion.div>
                        </div>

                        <div className="w-full relative -top-20">
                            <h1 className={`${manrope.className} text-2xl text-black dark:text-white`}>Social proof</h1>
                            <motion.div
                                className="flex space-x-4 mt-6 "
                                variants={fadeInUp(0.1)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                            >
                                {socialIcons.map((icon, idx) => (
                                    <div key={idx} className="text-black dark:text-white">
                                        {icon}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
