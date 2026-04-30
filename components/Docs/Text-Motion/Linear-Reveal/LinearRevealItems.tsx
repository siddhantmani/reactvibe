"use client"

import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import LinearRevealItemsPreview from './LinearRevealItemsPreview'
import { Bricolage_Grotesque } from 'next/font/google';
import TablePorpsForLinearRevealItems from './TablePorpsForLinearRevealItems';
import { motion } from 'framer-motion'

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function LinearRevealItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Linear Reveal'
                />

                <motion.p
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
                    exit={{ opacity: 0, y: -10 }}
                    className="text-black/70 dark:text-white/70 text-[13px]">
                    A smooth React text animation component designed to reveal content character by character with precise control and motion. This animated text React solution is perfect for building engaging headings, supporting React text reveal animations and advanced character animation in React. Powered by motion, it works seamlessly as a Framer Motion text animation or text reveal effect, making it ideal for hero sections and text animation for landing pages in React. It also integrates cleanly with Tailwind text animation setups, allowing you to create modern, high-impact UI experiences.
                </motion.p>

            </div>
            <div className='border-black rounded-2xl'>
                <LinearRevealItemsPreview />
            </div>

            <div>
                <TablePorpsForLinearRevealItems />
            </div>
        </div>
    )
}

export default LinearRevealItems