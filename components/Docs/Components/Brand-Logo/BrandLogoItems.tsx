"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import BrandLogoItemsPreview from './BrandLogoItemsPreview';
import { motion } from 'framer-motion'

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function BrandLogoItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Brand Loop'
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
                    A smooth and continuous React logo showcase component designed to display brand credibility with motion. This React logo grid component uses a looped animation to create a dynamic brand logo section in React, making it perfect for SaaS landing pages and “trusted by” sections. Ideal for building client logos sections in React or React SaaS brand sections, it helps present multiple brands in a clean, engaging, and space-efficient layout.
                </motion.p>
            </div>
            <div className='border-black rounded-2xl'>
                <BrandLogoItemsPreview />
            </div>
        </div>
    )
}

export default BrandLogoItems