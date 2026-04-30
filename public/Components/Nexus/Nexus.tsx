"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import zAPIERimg from "@/images/brands/zapier-1.svg";
import SlacIMG from "@/images/brands/slac-2.svg";
import StripeIMG from "@/images/brands/stripe-3.svg";
import NothionIMG from "@/images/brands/nothion.svg";
import SheetIMg from "@/images/brands/sheet.svg";
import FinalIMG from "@/images/brands/final.svg";

import { Geist } from "next/font/google";

const MiniHeading = Geist({
    weight: "200",
    subsets: ["latin"],
});

function Nexus() {

    const angle = useMotionValue(0)
    const colorIndex = useMotionValue(0)

    // Smoothing transitions
    const smoothAngle = useSpring(angle, { stiffness: 30, damping: 20 })
    const smoothIndex = useSpring(colorIndex, { stiffness: 15, damping: 15 })

    const gradients = [
        ["#0F0F0F", "#141313", "#1B1A1A"], // Pure charcoal shift (safest, premium)
        ["#141313", "#1E1D1D", "#2A2929"], // Elevated surface (buttons / cards)
        ["#111111", "#181717", "#242323"], // Subtle depth (hover states)
        ["#161515", "#232222", "#2F2E2E"], // Soft contrast (secondary buttons)
        ["#1A1919", "#2A2828", "#3A3838"], // Strongest allowed contrast
    ];

    // RGB color blending function
    const mix = (start: string, end: string, progress: number) => {
        const s = parseInt(start.slice(1), 16)
        const e = parseInt(end.slice(1), 16)
        const sr = (s >> 16) & 255,
            sg = (s >> 8) & 255,
            sb = s & 255
        const er = (e >> 16) & 255,
            eg = (e >> 8) & 255,
            eb = e & 255
        const r = Math.round(sr + (er - sr) * progress)
        const g = Math.round(sg + (eg - sg) * progress)
        const b = Math.round(sb + (eb - sb) * progress)
        return `rgb(${r}, ${g}, ${b})`
    }

    // Background and Button color interpolation
    const background = useTransform([smoothAngle, smoothIndex], (values: number[]) => {
        const [a, i] = values
        const index = Math.floor(i) % gradients.length
        const nextIndex = (index + 1) % gradients.length
        const t = i - Math.floor(i)

        const [c1a, c2a, c3a] = gradients[index]
        const [c1b, c2b, c3b] = gradients[nextIndex]

        const c1 = mix(c1a, c1b, t)
        const c2 = mix(c2a, c2b, t)
        const c3 = mix(c3a, c3b, t)

        return `linear-gradient(${a}deg, ${c1} 10%, ${c2} 60%, ${c3} 100%)`
    })

    // Animations
    useEffect(() => {
        animate(angle, 360, {
            duration: 12,
            ease: "linear",
            repeat: Infinity,
        })

        animate(colorIndex, gradients.length, {
            duration: gradients.length * 6,
            ease: "linear",
            repeat: Infinity,
        })
    }, [angle, colorIndex, gradients.length])
    return (
        <motion.div

            style={{ background }}
            className="relative w-full px-0 md:px-2 h-[55vh] rounded-xl p-3 overflow-hidden"
        >
            {/* Top Row */}
            <div className="flex justify-between md:px-11 relative z-10">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src={zAPIERimg}
                        width={100}
                        height={100}
                        alt="Zapier"
                        className="mt-20 md:mt-10 z-50"
                    />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={SlacIMG} width={100} height={100} alt="Slack" className="z-20 mt-10 md:mt-3" />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={StripeIMG} width={100} height={100} alt="Stripe" className="mt-20 z-20 md:mt-10" />
                </motion.div>

            </div>


            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.button
                    style={{ background }}
                    className={`${MiniHeading.className} bg-gradient-to-r from-[#efc2d7] to-[#c5bdf1]
                      text-white text-[17px] font-bold rounded-lg px-6 py-3 drop-shadow-md`}
                >
                    Integrated
                </motion.button>
            </div>

            {/* Bottom Row */}
            <div className="relative z-10 top-[150px] flex justify-between md:px-11">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={NothionIMG} width={100} height={100} alt="Notion" className="-mt-20 z-10 md:-mt-10" />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={SheetIMg} width={100} height={100} alt="Sheets" className="z-10 -mt-14 md:-mt-0" />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={FinalIMG} width={100} height={100} alt="Cal.com" className="-mt-20 z-10 md:-mt-10" />
                </motion.div>

            </div>

            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Zapier → Button */}
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1000 500"
                    className="z-0 scale-[120%] md:scale-[100%] absolute top-0 left-0"
                >
                    <path
                        d="M150 120 C200 10, 20 300, 500 240"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />
                    <motion.circle
                        r="5"
                        fill="#fff"
                        filter="drop-shadow(0 0 8px #ffb6e0)"
                    >
                        <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            path="M150 120 C200 10, 20 300, 500 240"
                        />
                    </motion.circle>
                </motion.svg>

                {/* Slack → Button */}
                <motion.svg width="100%" height="100%" viewBox="0 0 1000 500" className="absolute top-0 left-0 scale-[120%] md:scale-[100%]">
                    <path d="M500 20 L500 250"
                        stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.7" />
                    <motion.circle r="5" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion dur="2.2s" repeatCount="indefinite" path="M500 20 L500 250" />
                    </motion.circle>
                </motion.svg>

                {/* Stripe → Button */}
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1000 500"
                    className="absolute top-0 left-0 scale-[120%] md:scale-[100%]"
                >
                    {/* Path curve */}
                    <path
                        d="M830 120 C820 330, 400 200, 500 240"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />

                    {/* Animated dot following the same curve */}
                    <motion.circle r="5" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion
                            dur="2.8s"
                            repeatCount="indefinite"
                            path="M830 120 C820 330, 400 200, 500 240"
                        />
                    </motion.circle>
                </motion.svg>


                {/* Notion → Button */}
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1000 500"
                    className="absolute top-0 left-0 scale-[125%] md:scale-[100%]"
                >
                    {/* Path curve */}
                    <path
                        d="M150 350 C160 380, 100 220, 500 260"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />

                    {/* Animated dot following the same curve */}
                    <motion.circle r="5" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            path="M150 350 C180 360, 100 220, 500 260"
                        />
                    </motion.circle>
                </motion.svg>

                {/* Sheets → Button */}
                <motion.svg width="100%" height="100%" viewBox="0 0 1000 500" className="absolute top-0 left-0 scale-[120%] md:scale-[100%]">
                    {/* draw line from bottom (button) → top */}
                    <path
                        d="M500 420 L500 250"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />

                    {/* animate along the same path (bottom → top) */}
                    <motion.circle r="5" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion
                            dur="2.2s"
                            repeatCount="indefinite"
                            path="M500 420 L500 250"
                        />
                    </motion.circle>
                </motion.svg>


                {/* Cal.com → Button */}
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1000 500"
                    className="absolute top-0 left-0 scale-[120%] md:scale-[100%]"
                >
                    {/* Path curve */}
                    <path
                        d="M850 380 C820 137, 250 320, 500 260"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />

                    {/* Animated dot following the same curve */}
                    <motion.circle r="5" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion
                            dur="2.8s"
                            repeatCount="indefinite"
                            path="M850 380 C820 137, 250 320, 500 260"
                        />
                    </motion.circle>
                </motion.svg>

            </div>

        </motion.div>
    );
}

export default Nexus;
