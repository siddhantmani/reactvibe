"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import FlowlistItemsPreview from './FlowlistItemsPreview';
import FlowlistItemsFAQPreview from './Flowlist-FAQ/FlowlistItemsFAQPreview';
import { motion } from 'framer-motion'

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function FlowlistItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Flowlist'
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
                    A React animated list component built with Framer Motion, designed for smooth content reveals and interactive UI flows. This component supports animated list React Framer Motion patterns, including staggered animations, progressive reveals, and scroll-triggered transitions.
                </motion.p>
            </div>
            <div className='space-y-20'>
                <div className='border-black rounded-2xl'>
                    <FlowlistItemsPreview />
                </div>

                <div className='border-black rounded-2xl'>
                    <FlowlistItemsFAQPreview />
                </div>
            </div>
        </div>
    )
}

export default FlowlistItems