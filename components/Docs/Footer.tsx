"use client"

import { JetBrains_Mono } from 'next/font/google'
import React from 'react'

const footerFont = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"],
})

import { motion } from 'framer-motion'
import { ArrowUpRight, Heart } from 'lucide-react'
import Link from 'next/link'
import Separator from './Separator'

function Footer() {
    return (

        <motion.div
            className="mt-auto w-full"
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
                delay: 0.8
            }}

        >
            <footer className="flex flex-col justify-center items-center space-y-5 py-12">
                <div className={`${footerFont.className} flex items-center gap-1 capitalize py-0 text-xs`}>
                    <h1>Created with</h1>
                    <div>
                        <Heart className="h-4 w-5 stroke-[#ffa600] fill-[#ffa600]" />
                    </div>
                    <h1>by <span className={` ${footerFont.className} px-1 text-[#ffa600] hover:underline hover:text-[#f9b840] dark:hover:text-[#f9b840]`}> <Link href="https://www.linkedin.com/in/siddhantmani" target="_blank"> Siddhant Mani</Link></span></h1>
                </div>
                <Separator
                    direction="horizontal"
                    className='dark:bg-white/10 bg-black/10 max-w-2xl'
                />
                <div className={`${footerFont.className} flex items-center gap-1 capitalize py-0 text-xs`}>
                    <div>
                        <Heart className="h-4 w-5  text-purple-500" />
                    </div>
                    <h1>
                        <span className={` ${footerFont.className} flex items-center px-1 dark:text-white/50 text-black/50 hover:underline hover:dark:text-white hover:text-black gap-1`}>
                            <Link
                                href="/docs/templates/overview"
                                className="flex items-center gap-1 px-1 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                            >
                                Support React Vibe
                                <ArrowUpRight size={13} />
                            </Link>
                        </span>
                    </h1>
                </div>
            </footer>
        </motion.div>

    )
}

export default Footer