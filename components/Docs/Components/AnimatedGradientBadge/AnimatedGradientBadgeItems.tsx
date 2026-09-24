"use client"
import LinearReveal from '@/components/LinearReveal'
import { motion } from 'framer-motion'
import { Bricolage_Grotesque } from 'next/font/google';
import AnimatedGradientBadgeItemsPreview from './AnimatedGradientBadgeItemsPreview';
import BuiltWithAnimatedGradientBadge from './BuiltWithAnimatedGradientBadge';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function AnimatedGradientBadgeItems() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Animated Gradient Badge'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A polished React badge component with a continuously rotating gradient border and changing inner colors. Use it for CTAs, announcements, status labels, featured tags, or anywhere you want a small UI element to grab attention.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <AnimatedGradientBadgeItemsPreview />
            </div>
            <div className='mt-15'>
                <BuiltWithAnimatedGradientBadge />
            </div>
        </motion.div>
    )
}

export default AnimatedGradientBadgeItems