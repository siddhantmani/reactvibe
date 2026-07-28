"use client"
import React from "react";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const AnimatedFont = Figtree({
    weight: "600",
    subsets: ["latin"],
})
const HeroSubHeading = Bricolage_Grotesque({
    weight: "500",
    subsets: ["latin"],
})

import { motion } from "framer-motion"
import HeroSectionBTN from "../LandingAnimation/Landing-Button/HeroSectionBTN";
import WhatsNew from "@/components/Docs/WhatsNew/WhatsNew";

function VibeHero() {
    return (
        <div className="flex flex-col justify-center items-center 2xl:space-y-12 xl:space-y-14 lg:space-y-5 overflow-hidden">
            <div className="relative xl:top-8 top-0 2xl:top-6">
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
                        delay: 0.5
                    }}

                >
                    <WhatsNew />
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.3
                }}
            >
                <div className="text-center xl:text-base/18 text-base/12 md:pt-5 lg:pt-0 pt-2">
                    <LinearReveal
                        as={"h1"}
                        Text="Motion-first"
                        className={` ${AnimatedFont.className} 2xl:text-[90px] xl:text-[80px] lg:text-[50px] md:text-5xl text-[40px]`}
                    />
                    <LinearReveal
                        as={"h1"}
                        Text="React Components"
                        className={` ${AnimatedFont.className} 2xl:text-[90px] xl:text-[80px] lg:text-[50px] md:text-5xl text-[40px]`}
                    />
                </div>
            </motion.div>
            {/* <h1 className="xl:text-6xl">Motion-first React components</h1> */}
            <div className="flex flex-col justify-center items-center xl:space-y-5 md:pt-10 lg:pt-0 2xl:pt-3 pt-10">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.6
                    }}

                >
                    <h2 className={`${HeroSubHeading.className} text-center capitalize px-20 lg:pt-5 xl:pt-0 text-lg 2xl:text-2xl`}>
                        Production-Ready Motion Components. <br /> Copy, Paste, Ship.
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                        margin: "50px"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        delay: 1.2
                    }}
                >

                    <div className='relative 2xl:-top-[80px] xl:-top-[100px] lg:-top-[53px] md:-top-[43px] -top-[63px]'>
                        <HeroSectionBTN />
                    </div>
                </motion.div>
            </div>
        </div>

    );
}

export default VibeHero;


