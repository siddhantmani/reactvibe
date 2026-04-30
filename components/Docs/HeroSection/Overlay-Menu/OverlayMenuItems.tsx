"use client"

import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import OverlayMenuItemsPreview from './OverlayMenuItemsPreview'
import { Bricolage_Grotesque } from 'next/font/google';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'

function OverlayMenuItems() {

    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Overlay Menu'
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
                    A React mobile overlay menu built with Framer Motion, featuring a fullscreen navigation layout and smooth animation transitions. This component includes an animated hamburger menu for triggering a responsive navigation experience, making it ideal for modern landing pages and mobile-first web applications.

                </motion.p>
            </div>
            <div className='border-black rounded-2xl'>
                <OverlayMenuItemsPreview />
            </div>

        </div>
    )
}

export default OverlayMenuItems