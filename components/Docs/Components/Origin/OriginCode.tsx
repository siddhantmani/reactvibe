"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import TopIconIMG from "@/Images/services/firstcard/topIcons.svg";
import paypalIMG from "@/Images/services/firstcard/paypal.svg";
import CardIMG from "@/Images/services/firstcard/card.svg";
import BankBitcoin from "@/Images/services/firstcard/bank.svg";
import Bitcoin from "@/Images/services/firstcard/bitcoin.svg";

import { Manrope } from "next/font/google";

const MainHeading = Manrope({
    weight: "600",
    subsets: ["latin"],
});

const miniPara = Manrope({
    weight: "400",
    subsets: ["latin"],
});

function OriginCode() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="aspect-square bg-gradient-to-t from-[#ffffff] via-[#eef2f9] to-[#c1d1fa] w-full relative flex items-center justify-center rounded-2xl">

            <div className="">
                {/* Central Icon */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                            margin: "50px"
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 1.3
                        }}
                    >
                        <Image
                            src={TopIconIMG}
                            width={1000}
                            height={1000}
                            alt="top image"
                            className="h-12 w-12 p-2 scale-[125%] bg-white rounded-md shadow-md"
                        />
                    </motion.div>
                </div>

                {/* Animated Curved Lines */}
                <motion.svg
                    ref={ref}
                    viewBox="0 0 400 200"
                    className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[70%] h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Center to left curve */}

                    <motion.path
                        // d="M85 155 L100 170 L115 155"
                        d="M200 0 C190 120, 0 0, 5 130"
                        stroke="#94b0ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 1.4,
                        }}
                    />

                    {/* Animated dot following the same curve */}
                    <motion.circle r="4" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion
                            dur="2.8s"
                            repeatCount="indefinite"
                            path="M200 0 C190 120, 0 0, 5 130"
                        />
                    </motion.circle>

                    {/* Center straight down */}
                    <motion.path
                        d="M200 0 C180 110, 80 10, 90 130"
                        stroke="#94b0ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 1.4,

                        }}
                    />

                    {/* Animated dot following the same curve */}
                    <motion.circle r="4" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                        <animateMotion
                            dur="2.8s"
                            repeatCount="indefinite"
                            path="M200 0 C180 110, 80 10, 90 130"
                        />
                    </motion.circle>

                    {/* Center to right curve */}
                    <g transform="translate(400,0) scale(-1,1)">
                        <motion.path
                            d="M200 0 C190 120, 0 0, 5 130"
                            stroke="#94b0ff"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isInView ? 1 : 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1.4,

                            }}
                        />

                        <motion.circle r="4" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                            <animateMotion
                                dur="2.8s"
                                repeatCount="indefinite"
                                path="M200 0 C190 120, 0 0, 5 130"
                            />
                        </motion.circle>
                    </g>

                    {/* Optional: small arrow heads */}
                    <g transform="translate(400,0) scale(-1,1)">
                        <motion.path
                            d="M200 0 C190 100, 100 20, 110 130"
                            stroke="#94b0ff"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isInView ? 1 : 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1.4,

                            }}
                        />

                        <motion.circle r="4" fill="#fff" filter="drop-shadow(0 0 8px #ffb6e0)">
                            <animateMotion
                                dur="2.8s"
                                repeatCount="indefinite"
                                path="M200 0 C190 100, 100 20, 110 130"
                            />
                        </motion.circle>
                    </g>
                </motion.svg>



                <div className="flex ">
                    <Image
                        src={paypalIMG}
                        width={1000}
                        height={1000}
                        alt="top image"
                        className="h-12 w-12 p-2 scale-[125%] bg-white rounded-md shadow-md absolute left-[8%] top-[52%]"
                    />
                    <Image
                        src={CardIMG}
                        width={1000}
                        height={1000}
                        alt="top image"
                        className="h-12 w-12 p-2 scale-[125%] bg-white rounded-md shadow-md absolute left-[29%] top-[52%]"
                    />
                    <Image
                        src={BankBitcoin}
                        width={1000}
                        height={1000}
                        alt="top image"
                        className="h-12 w-12 p-2 scale-[125%] bg-white rounded-md shadow-md absolute right-[10%] top-[52%]"
                    />
                    <Image
                        src={Bitcoin}
                        width={1000}
                        height={1000}
                        alt="top image"
                        className="h-12 w-12 p-2 scale-[125%] bg-white rounded-md shadow-md absolute right-[33%] top-[52%]"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center px-5 absolute bottom-1">
                <h1 className={`${MainHeading.className} text-2xl`}>Brands</h1>
                <p className={`${miniPara.className} text-base text-center opacity-65`}>Top brands we work with.</p>
            </div>
        </div>
    );
}

export default OriginCode;
