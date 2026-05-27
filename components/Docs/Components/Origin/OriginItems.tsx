"use client"

import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import OriginItemsPreview from './OriginItemsPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});
import { motion } from 'framer-motion'

function OriginItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Origin'
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
                    A flexible React logo grid component designed for modern landing pages, combining brand visibility with motion-driven UI. This component supports animated brand logo sections in React, making it ideal for building logo showcase React components, SaaS “trusted by” sections, and company logos sections in React. Beyond simple grids, it can also be adapted into integration logo UIs or even a React network diagram UI component, helping visualize connections between platforms, partners, or services with smooth animations.
                </motion.p>
            </div>
            <div className='border-black rounded-2xl'>
                <OriginItemsPreview />
            </div>
        </div>
    )
}

export default OriginItems