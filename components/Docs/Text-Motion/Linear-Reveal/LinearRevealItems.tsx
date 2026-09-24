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
        <div className='px-2 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl`}
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
                    A character-by-character React text animation for creating engaging hero headlines, headings, and UI reveals.
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