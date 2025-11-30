"use client"

import LinearReveal from "@/components/LinearReveal";
import { motion } from "framer-motion"
import { Manrope } from "next/font/google";
import TogglePricing from "./TogglePricing";
import OrbitBorderGlobalPreview from "../../Components/Orbit-Border/OrbitBorderGlobalPreview";

const MainHeading = Manrope({
    weight: "600",
    subsets: ["latin"],
});

const miniPara = Manrope({
    weight: "400",
    subsets: ["latin"],
});


function AuroraPricingCode() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center space-y-3'>
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
                        delay: 0.5
                    }}

                >
                    <OrbitBorderGlobalPreview
                        RingColors={["#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"]}
                        className='bg-[#ffffff] rounded-full p-2 text-black px-5'
                        style={{
                            boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                        }}>

                        Pricing
                    </OrbitBorderGlobalPreview>
                </motion.div>
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
                    <LinearReveal
                        as={'h1'}
                        text="Simple plans, no surprises."
                        className={`${MainHeading.className} dark:text-white text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center xl:max-w-3xl md:max-w-xl lg:max-w-3xl`}
                    />
                </motion.div>
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
                        delay: 0.7
                    }}

                >
                    <p className={`${miniPara.className} dark:text-white text-black text-sm  max-w-sm xl:text-lg xl:max-w-sm md:max-w-sm text-center`}>From Idea to Build-Ready in 3 Steps.</p>
                </motion.div>

            </div>
            <div className="w-full">
                <TogglePricing />
            </div>
        </div>
    )
}

export default AuroraPricingCode