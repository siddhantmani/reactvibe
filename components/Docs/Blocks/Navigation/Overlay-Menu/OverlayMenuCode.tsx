"use client";
import { Manrope } from "next/font/google";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaThreads, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import LinearReveal from "@/components/LinearReveal";

const CTAButton = Manrope({
    weight: "500",
    subsets: ["latin"],
});

const socialIcons = [
    <FaXTwitter key="s1" size={50} />,
    <FaThreads key="s2" size={50} />,
    <FaInstagram key="s3" size={50} />,
    <FaLinkedinIn key="s4" size={50} />,
];

export default function OverlayMenuCode() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { subMenu: 'Home', subMenu_key: 'homePage', link: '#' },
        { subMenu: 'Platforms', subMenu_key: 'platForms', link: '#' },
        { subMenu: 'Features', subMenu_key: 'features', link: '#' },
        { subMenu: 'Use Cases', subMenu_key: 'useCases', link: '#' },
        { subMenu: 'About Us', subMenu_key: 'aboutUs', link: '#' },
    ];

    return (
        <div className=" dark:bg-black bg-white relative">
            {/* Top Bar */}
            <div className={`flex justify-between px-5 p-3 z-50  ${open ? 'hidden' : ''}`}>
                <h1 className={`${CTAButton.className} text-2xl dark:text-white text-black`}>React Vibe</h1>
                <button onClick={() => setOpen(!open)} className="dark:text-white text-black">
                    <Menu />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-screen w-full flex flex-col justify-between z-50 p-5 dark:bg-black bg-white"
                    >
                        <div className="flex-1 dark:bg-black bg-white">
                            {/* Header */}
                            <div className="flex justify-between dark:text-white dark:bg-black text-black bg-white">
                                <h1 className={`${CTAButton.className} text-2xl`}>React Vibe</h1>

                                <motion.div
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Close</span>

                                    <motion.div
                                        animate={{ rotate: open ? 0 : -90 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <X />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Menu items */}
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
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <div aria-label={item.subMenu_key}>
                                            <Link href={item.link}>
                                                <LinearReveal
                                                    Text={item.subMenu}
                                                    className="text-[35px] dark:text-white dark:bg-black bg-white text-black"
                                                />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Social icons */}
                        <div className="w-full pb-4 dar:bg-black bg-white dark:bg-black">
                            <h1 className={`${CTAButton.className} text-2xl dark:text-white text-black`}>Social Proof</h1>
                            <motion.div
                                className="flex space-x-4 mt-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {socialIcons.map((icon, idx) => (
                                    <div key={idx} className="dark:text-white text-black">
                                        {icon}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
