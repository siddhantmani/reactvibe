"use client"

import OrbitBorder from "@/public/Components/TheOrbitBorderCode/OrbitBorder";
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'
import { Manrope } from "next/font/google";


const labelName = Manrope({
    weight: '500', // Specify the font weight if needed  
    subsets: ['latin']
});


const subHeading = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});
const Heading = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});

function HeroSection() {
    return (
        <div className="relative h-screen"
            style={{
                backgroundColor: '#080707', // light pink base
                backgroundImage: `
                    linear-gradient(to right, rgba(20, 20, 20) 0.1px, transparent 1px),
                    linear-gradient(to bottom, rgba(20, 20, 20) 0.1px, transparent 1px)
                `,
                backgroundSize: '80px 80px', // grid square size
                borderRadius: '0px',
                padding: "10px"
            }}
        >
            <div className=''>
                <div className="xl:max-w-6xl lg:max-w-2xl sm:max-w-xl md:max-w-xl mx-auto space-y-3 mt-40">
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
                            delay: 0.4
                        }}

                        className=""
                    >
                        <h1 className={`${Heading.className} text-[#ffffff] text-2xl sm:text-4xl lg:max-w-6xl xl:max-w-7xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extralight min-[320px]:text-[22px] min-[375px]:text-[27px] min-[425px]:text-[31px]`}>Motion-first </h1>
                        <h1 className={`${Heading.className} text-[#ffffff] text-2xl sm:text-4xl lg:max-w-6xl xl:max-7xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extralight min-[320px]:text-[22px] min-[375px]:text-[27px] min-[425px]:text-[31px]`}>React Components </h1>
                    </motion.div>
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
                            delay: 0.5
                        }}
                    >
                        <h2 className={`${subHeading.className} text-[13px] px-5 xl:text-[15px] text-[#ffffff]/70 text-center xl:max-w-lg md:max-w-lg mx-auto font-extralight min-[375px]:text-[14px] min-[425px]:text-[14px] min-[320px]:text-[10px]`}>Production-Ready Motion Components.
                            Copy, Paste, Ship.
                        </h2>
                    </motion.div>
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
                        className="flex justify-center"
                    >
                        <div className=' max-w-36 mx-auto'>
                            <OrbitBorder
                                rotate={0}
                                padding={1}
                                rounded={8}
                                className='bg-[#141414] rounded-[8px] p-1 text-white'
                                RingColors={["#141414, #000000, #ffffff, #141414, #141414"]}
                                style={{
                                    boxShadow: `
                                                      0px 12px 40px rgba(60, 80, 180, 0.08),
                                                      0px 20px 60px rgba(0, 0, 0, 0.05)
                                                    `,
                                }}
                            >
                                <div
                                    style={{
                                        background: `
              linear-gradient(
                180deg,
                #141414 100%,
                #1a1818 100%,
                #0d0c0c 100%
                )
            `,
                                        boxShadow: `
                0px 24px 48px rgba(13, 12, 12 0.45),
                inset 7px 7px 31px rgba(18, 17, 17, 0.35),
                inset 2px 2px 20px rgba(13, 12, 12, 0.25)
              `,
                                        borderImage: "linear-gradient(180deg, #141414, #121111) 1"
                                    }}
                                    className='flex items-center gap-3 justify-center rounded-full px-3 py-3'
                                >
                                    <h1 className={`${labelName.className} text-[14px] text-white whitespace-nowrap`}>Get a Demo</h1>
                                    <ChevronRight size={17} />
                                </div>
                            </OrbitBorder>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 min-[320px]:inset-3 opacity-[0.15] border-white min-[320px]:h-[200px] min-[320px]:mt-[380px] min-[320px]:inset-6 min-[320px]:mt-[400px] min-[768px]:inset-20 min-[768px]:h-[250px] min-[768px]:mt-[350px] min-[1024px]:inset-20 min-[1440px]:inset-52 min-[1440px]:mt-[250px] "
                style={{
                    backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                #D1D5DB 10px,
                #D1D5DB 11px
            )`
                }}
            />

        </div>

    )
}

export default HeroSection