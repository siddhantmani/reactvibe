"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import SpotlightItemsPreview from './SpotlightItemsPreview';
import { motion } from 'framer-motion'

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function SpotlightItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Spotlight'
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
                    A modern React testimonial component built with a smooth testimonial slider and carousel animation, designed for SaaS landing pages and product websites. This animated testimonial section uses Framer Motion to create fluid transitions and interactive user experiences. Includes flexible testimonial card UI layouts, making it ideal for building a responsive testimonial slider React component with clean design and scalable structure.
                </motion.p>
            </div>

            <div className='border-black rounded-2xl'>
                <SpotlightItemsPreview />
            </div>

        </div>
    )
}

export default SpotlightItems