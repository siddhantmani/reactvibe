"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion';
import OrbitBorder from '../Components/Orbit-Border/OrbitBorder';
import { useTheme } from '@/components/ThemeProvider';

const lightRingColors = ["#C0C7D0", "#C0C7D0", "#ffffff", "#ffffff", "#ffffff"]
const darkRingColors = ["#3B82F6", "#6366F1", "#1E293B", "#1E293B", "#0F172A"]

function ConnectionFlowPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { theme } = useTheme()
    const ringColors = theme === 'dark' ? darkRingColors : lightRingColors
    return (
        <div className='flex items-center border border-black/10 dark:border-[#0F172A] rounded-2xl max-w-xl mt-40 mx-auto'>
            <div className=''>
                <div className='rotate-90'>

                    <motion.svg
                        ref={ref}
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 500"
                    >
                        <motion.path
                            d="
      M 850 380
      L 850 300
      Q 850 200 740 200
      L 260 200
      Q 150 200 150 300
      L 150 380
    "
                            stroke={`${theme == "dark" ? "#0F172A" : "#D6DAE096"}`}
                            strokeWidth="14"
                            fill="none"
                            opacity="0.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isInView ? 1 : 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        />

                        <motion.circle
                            r="15"
                            fill={`${theme == "dark" ? "#3B82F6" : "#D6DAE096"}`}
                            filter="drop-shadow(0 0 8px #ffb6e0)"
                        >
                            <animateMotion

                                dur="3.5s"
                                repeatCount="indefinite"
                                path="
        M 850 380
        L 850 300
        Q 850 200 740 200
        L 260 200
        Q 150 200 150 300
        L 150 380
      "
                            />
                        </motion.circle>
                    </motion.svg>
                </div>
            </div>
            <div className=''>
                <div className='relative top-6'>
                    <motion.svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 500"
                    >
                        <motion.path
                            d="
      M 150 120
      L 150 200
      Q 150 300 260 300
      L 740 300
      Q 850 300 850 200
      L 850 120
    "
                            // stroke="#D6DAE096"
                            stroke={`${theme == "dark" ? "#0F172A" : "#D6DAE096"}`}
                            strokeWidth="14"
                            fill="none"
                            opacity="0.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isInView ? 1 : 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        />

                        <motion.circle
                            r="15"
                            // fill="#D6DAE096"
                            fill={`${theme == "dark" ? "#3B82F6" : "#D6DAE096"}`}
                            filter="drop-shadow(0 0 8px #ffb6e0)"
                        >
                            <animateMotion
                                dur="3.5s"
                                repeatCount="indefinite"
                                path="
        M 150 120
        L 150 200
        Q 150 300 260 300
        L 740 300
        Q 850 300 850 200
        L 850 120
      "
                            />
                        </motion.circle>
                    </motion.svg>


                </div>
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
                    className=''
                >
                    <div className='ml-2'>
                        <OrbitBorder
                            padding={3}
                            rotate={0}
                            rounded={20}
                            className='bg-[#ffffff] dark:bg-[#0c0c0c] text-[15px] w-40 rounded-[20px] p-2 py-2 text-black px-2 flex items-center gap-2'
                            RingColors={ringColors}
                            style={{
                                boxShadow: `
                                                     0px 12px 40px rgba(60, 80, 180, 0.08),
                                                     0px 20px 60px rgba(0, 0, 0, 0.05)
                                                   `,
                            }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1627554785796-f9646d15c2da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8MnwwfHx8MA%3D%3D"
                                height={1000}
                                width={1000}
                                alt='men'
                                className='rounded-full h-10 w-10'
                            />
                            <div className='space-y-2'>
                                <div className='h-[8px] w-20 animate-pulse bg-[#D6DAE099] dark:bg-[#5f88ca] rounded-full' />
                                <div className='h-[8px] w-10 animate-pulse bg-[#131925] rounded-full' />
                            </div>
                        </OrbitBorder>
                    </div>
                </motion.div>
                <div className='relative -top-6'>
                    <motion.svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 500"
                    >
                        <motion.path
                            d="
      M 150 380
      L 150 300
      Q 150 200 260 200
      L 740 200
      Q 850 200 850 300
      L 850 380
    "
                            stroke={`${theme == "dark" ? "#0F172A" : "#D6DAE096"}`}
                            strokeWidth="14"
                            fill="none"
                            opacity="0.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isInView ? 1 : 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        />

                        <motion.circle
                            r="15"
                            fill={`${theme == "dark" ? "#3B82F6" : "#D6DAE096"}`}
                            filter="drop-shadow(0 0 8px #ffb6e0)"
                        >
                            <animateMotion
                                dur="3.5s"
                                repeatCount="indefinite"
                                path="
        M 150 380
        L 150 300
        Q 150 200 260 200
        L 740 200
        Q 850 200 850 300
        L 850 380
      "
                            />
                        </motion.circle>
                    </motion.svg>



                </div>
            </div>
            <div className='-rotate-90'>
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1000 500"
                >
                    <motion.path
                        d="
      M 850 380
      L 850 300
      Q 850 200 740 200
      L 260 200
      Q 150 200 150 300
      L 150 380
    "
                        stroke={`${theme == "dark" ? "#0F172A" : "#D6DAE096"}`}
                        strokeWidth="14"
                        fill="none"
                        opacity="0.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    />

                    <motion.circle
                        r="15"
                        fill={`${theme == "dark" ? "#3B82F6" : "#D6DAE096"}`}
                        filter="drop-shadow(0 0 8px #ffb6e0)"
                    >
                        <animateMotion
                            dur="3.5s"
                            repeatCount="indefinite"
                            path="
        M 850 380
        L 850 300
        Q 850 200 740 200
        L 260 200
        Q 150 200 150 300
        L 150 380
      "
                        />
                    </motion.circle>
                </motion.svg>



            </div>
        </div>

    )
}

export default ConnectionFlowPreview