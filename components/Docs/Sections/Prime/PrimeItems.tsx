"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import PrimeItemsPreview from './PrimeItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'

function PrimeItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl pb-10 space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Prime'
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
                    A React pricing component with a monthly and yearly toggle, built for modern SaaS pricing pages and subscription-based products. This responsive pricing section includes interactive pricing cards and dynamic plan switching, making it ideal for creating a clean and scalable pricing table design. Designed for flexibility, it helps developers build a complete React SaaS pricing page with a smooth toggle UI and customizable plans.
                </motion.p>
            </div>

            <div className='border-black rounded-2xl'>
                <PrimeItemsPreview />
            </div>
        </div>
    )
}

export default PrimeItems