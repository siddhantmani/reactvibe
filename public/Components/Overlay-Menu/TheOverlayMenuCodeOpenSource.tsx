"use client";
import { Manrope } from "next/font/google";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaThreads, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import LinearReveal from "@/public/LinearReveal";

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

export default function TheOverlayMenuCodeOpenSource() {
    const [open, setOpen] = useState(false);


    const menuItems = [
        { subMenu: 'Home', subMenu_key: 'Go to home page', link: '/' },
        { subMenu: 'Platforms', subMenu_key: 'Go to platforms', link: '/platforms' },
        { subMenu: 'Features', subMenu_key: 'Go to features', link: '/features' },
        { subMenu: 'Use Cases', subMenu_key: 'Go to use cases', link: '/use-case' },
        { subMenu: 'About Us', subMenu_key: 'Go to about us', link: '/about-us' },
    ];

    return (
        <div className="relative">
            {/* Top Bar */}
            <div className="flex justify-between px-5 p-3 z-50 ">
                <h1 className={`${CTAButton.className} text-2xl`}>Overlay Menu</h1>
                <button onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-black text-white h-full fixed top-0 left-0 w-full z-40 p-5"
                    >
                        {/* Header */}
                        <div className="flex justify-between">
                            <h1 className={`${CTAButton.className} text-2xl`}>Overlay Menu</h1>

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
                            className="space-y-3 mt-10"
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
                                                text={item.subMenu}
                                                className="text-4xl"
                                            />

                                        </Link>
                                    </div>
                                </motion.div>
                            ))}

                        </motion.div>

                        {/* Social icons */}
                        <div className="absolute bottom-4">
                            <h1 className={`${CTAButton.className} text-2xl`}>Social proof</h1>
                            <motion.div
                                className="flex space-x-4 mt-6 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {socialIcons.map((icon, idx) => (
                                    <div key={idx} className="">
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
