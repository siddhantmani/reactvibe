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

        <div className="flex flex-col justify-center items-center xl:space-y-12 overflow-hidden">
            <div className="relative xl:top-8 top-0">
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
                <div className="text-center xl:text-base/18 text-base/12">
                    <LinearReveal
                        as={"h1"}
                        text="Motion-first"
                        className={` ${AnimatedFont.className} xl:text-[90px] text-[40px]`}
                    />
                    <LinearReveal
                        as={"h1"}
                        text="React Components"
                        className={` ${AnimatedFont.className} xl:text-[90px] text-[40px]`}
                    />
                </div>
            </motion.div>
            {/* <h1 className="xl:text-6xl">Motion-first React components</h1> */}
            <div className="flex flex-col justify-center items-center xl:space-y-5 xl:text-2xl">
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
                    <h2 className={`${HeroSubHeading.className} text-center capitalize px-20`}>
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

                    <div className='relative xl:-top-[100px] -top-[60px]'>
                        <HeroSectionBTN />
                    </div>
                </motion.div>
            </div>
        </div>

    );
}

export default VibeHero;


