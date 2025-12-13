"use client";

import { Manrope } from "next/font/google";
import { motion } from "framer-motion";

import { IoLogoGithub } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiGoogleauthenticator } from "react-icons/si";
import { SiGoogleadsense } from "react-icons/si";
import { SiGooglephotos } from "react-icons/si";
import { PiGoogleChromeLogoLight } from "react-icons/pi";

const logoFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});

const brands = [
    IoLogoGithub,
    SiReact,
    RiNextjsLine,
    FaGoogle,
    FaGooglePay,
    SiGoogleauthenticator,
    SiGoogleadsense,
    SiGooglephotos,
    PiGoogleChromeLogoLight
];

function BrandLogoPreview() {
    return (
        <div className="space-y-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
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
            >
                <h3 className={`${logoFont.className} text-sm text-center text-gray-400`}            >
                    Chosen by top brands around the world.
                </h3>
            </motion.div>

            <div className="relative flex overflow-hidden max-w-3xl mx-auto">
                {/* Fade effect on edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#ffffff]  to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#ffffff]  to-transparent z-10" />

                {/* Scrolling animation */}
                <motion.div
                    className="flex gap-12 min-w-max"
                    animate={{
                        // left to right
                        x: ["-100%", "0"],

                        // right to left
                        // x: ["0", "-100%"]
                    }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                    }}
                >
                    {[...brands, ...brands].map((LogoComponent, index) => (
                        <LogoComponent
                            key={index}
                            className="h-12 w-auto text-gray-600"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default BrandLogoPreview;
