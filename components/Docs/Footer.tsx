"use client"

import { DM_Serif_Display, Figtree, JetBrains_Mono } from 'next/font/google'
import React from 'react'

const footerFont = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"],
})

const AnimatedFont = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    style: "italic"
})

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Link from 'next/link'

function Footer() {
    return (
        <div className="">
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
                    delay: 0.8
                }}

            >
                <footer className=" relative top-12 flex flex-col justify-center items-center space-y-5">
                    <div className={`${footerFont.className} flex items-center gap-1 capitalize py-0 text-xs`}>
                        <h1>Created with</h1>
                        <div>
                            <Heart className="h-4 w-5 stroke-[#ffa600] fill-[#ffa600]" />
                        </div>
                        <h1>by <span className={` ${AnimatedFont.className} px-1 text-[#ffa600] hover:underline hover:text-[#f9b840] dark:hover:text-[#f9b840]`}> <Link href="https://x.com/_siddhantmani" target="_blank"> Siddhant Mani</Link></span></h1>
                    </div>
                </footer>
            </motion.div>
        </div>
    )
}

export default Footer