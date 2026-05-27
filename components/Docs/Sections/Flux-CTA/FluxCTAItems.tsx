"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import FluxCTAItemsPreview from './FluxCTAItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'

function FluxCTAItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl mx-auto space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Flux CTA'
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
                    A modern React CTA section designed for landing pages, featuring an animated gradient background and interactive call-to-action elements. This component creates a visually engaging CTA section design with smooth transitions and dynamic styling, helping capture user attention and improve conversions. Ideal for building an animated CTA section in React with a clean layout and flexible customization.
                </motion.p>
            </div>

            <div className='border-black rounded-2xl'>
                <FluxCTAItemsPreview />
            </div>
        </div>
    )
}

export default FluxCTAItems