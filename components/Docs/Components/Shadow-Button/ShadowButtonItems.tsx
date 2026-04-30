"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import ShadowButtonItemsPreview from './ShadowButtonItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', // Specify the font weight if needed  
    subsets: ['vietnamese']
});
import { motion } from 'framer-motion'

function ShadowButtonItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Shadow Button'
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
                    A modern React button component designed to add depth and visual hierarchy through soft shadows and subtle motion. This React animated button enhances user interaction with smooth hover animations, making it ideal for call-to-action sections in landing pages and dashboards. With a focus on clean aesthetics, it can be used as a modern button UI in React or adapted into animated outline and glow-style buttons, helping create polished, production-ready interfaces.
                </motion.p>
            </div>
            <div className='border-black rounded-2xl'>
                <ShadowButtonItemsPreview />
            </div>
        </div>
    )
}

export default ShadowButtonItems