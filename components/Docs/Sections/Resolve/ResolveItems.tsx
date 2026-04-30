"use client"
import { motion } from 'framer-motion'

import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import ResolveItemsPreview from './ResolveItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function ResolveItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Resolve'
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
                    A React FAQ accordion component built with smooth expand and collapse interactions, ideal for modern SaaS and landing pages. This responsive FAQ section uses an animated accordion UI powered by Framer Motion, making it easy to create an interactive and clean user experience. Designed for flexibility, it works as a reusable React accordion component for handling expandable FAQ content with minimal setup.
                </motion.p>

            </div>

            <div className='border-black rounded-2xl'>
                <ResolveItemsPreview />
            </div>
        </div>
    )
}

export default ResolveItems