"use client"

import ReactVibeLogo from '@/components/ReactVibeLogo'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { motion } from "framer-motion"
import { Figtree, Manrope } from 'next/font/google'
import GithubStars from '@/components/GithubStars'

const footerFont = Manrope({
    weight: "800",
    subsets: ["latin"],
})

const menuItemFont = Figtree({
    weight: "400",
    subsets: ["latin"],
})

function DeskHeader() {

    const items = ['Docs', 'Github']

    return (
        <div className='max-w-7xl mx-auto xl:py-10 py-5 px-2 md:px-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center xl:gap-10 md:gap-5'>
                    <div className='flex items-center gap-3'>
                        <div className='scale-[52%]'>
                            <ReactVibeLogo />
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
                                delay: 0.4
                            }}

                        >
                            <h1 className={`${footerFont.className} text-xl`}>React Vibe</h1>
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
                            delay: 0.5
                        }}

                    >
                        <div>
                            <Separator orientation='vertical' className='bg-[#b4b3b3]' />
                        </div>
                    </motion.div>

                    <div className='hidden md:inline-block'>
                        <ul className='flex items-center gap-8'>
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className={`${menuItemFont.className} cursor-pointer text-sm`}
                                    initial={{ filter: "blur(8px)", opacity: 0 }}
                                    animate={{ filter: "blur(0px)", opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
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
                        delay: 0.6
                    }}

                >
                    <GithubStars />
                </motion.div>
            </div>
        </div>
    )
}

export default DeskHeader