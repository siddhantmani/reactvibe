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
        <div
            className="p-[10px] rounded-none transition-colors duration-300
            bg-[#fcfcfc] dark:bg-[#080707]
            bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_0.1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_0.1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,rgba(20,20,20,1)_0.1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,1)_0.1px,transparent_1px)]
            bg-[size:80px_80px]"
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
                        <h1 className={`${Heading.className} text-black dark:text-[#ffffff] transition-colors duration-300 text-2xl sm:text-4xl lg:max-w-6xl xl:max-w-7xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extralight min-[320px]:text-[22px] min-[375px]:text-[27px] min-[425px]:text-[31px]`}>Motion-first </h1>
                        <h1 className={`${Heading.className} text-black dark:text-[#ffffff] transition-colors duration-300 text-2xl sm:text-4xl lg:max-w-6xl xl:max-7xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extralight min-[320px]:text-[22px] min-[375px]:text-[27px] min-[425px]:text-[31px]`}>React Components </h1>
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
                        <h2 className={`${subHeading.className} text-[13px] px-5 xl:text-[15px] text-black/70 dark:text-[#ffffff]/70 transition-colors duration-300 text-center xl:max-w-lg md:max-w-lg mx-auto font-extralight min-[375px]:text-[14px] min-[425px]:text-[14px] min-[320px]:text-[10px]`}>Production-Ready Motion Components.
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
                                className='bg-[#f1efef] text-black dark:bg-[#141414] dark:text-white rounded-[8px] p-1 transition-colors duration-300'
                                RingColors={["#141414, #000000, #ffffff, #141414, #141414"]}
                                style={{
                                    boxShadow: `
                                                      0px 12px 40px rgba(60, 80, 180, 0.08),
                                                      0px 20px 60px rgba(0, 0, 0, 0.05)
                                                    `,
                                }}
                            >
                                <div
                                    className='flex items-center gap-3 justify-center rounded-[6px] px-3 py-3 transition-all duration-300
                                    bg-white border border-gray-200 shadow-sm
                                    dark:border-transparent
                                    dark:bg-[linear-gradient(180deg,#141414_100%,#1a1818_100%,#0d0c0c_100%)]
                                    dark:shadow-[0px_24px_48px_rgba(13,12,12,0.45),inset_7px_7px_31px_rgba(18,17,17,0.35),inset_2px_2px_20px_rgba(13,12,12,0.25)]'
                                >
                                    <h1 className={`${labelName.className} text-[14px] text-black dark:text-white whitespace-nowrap transition-colors`}>Get a Demo</h1>
                                    <ChevronRight size={17} className="text-black dark:text-white transition-colors" />
                                </div>
                            </OrbitBorder>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="mt-15 max-w-4xl mx-auto
    inset-x-6 h-[200px] 
    md:inset-x-20 md:h-[250px] 
    lg:inset-x-52 
    opacity-[0.15] border-black dark:border-white transition-all duration-300
    bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#9ca3af_10px,#9ca3af_11px)]
    dark:bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#D1D5DB_10px,#D1D5DB_11px)]
" />

        </div>

    )
}

export default HeroSection