"use client"
import { motion } from 'framer-motion'

import LinearReveal from '@/components/LinearReveal';
import ProgressOverviewListItemsPreview from './ProgressOverviewListItemsPreview';
import { LinearRevealFont } from '@/lib/fonts';

function ProgressOverviewListItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl 2xl:max-w-7xl mx-auto space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} font-[700] text-2xl md:text-5xl`}
                    Text='Progress Overview List'
                />

                <motion.p
                    initial={{ opacity: 0, filter: "blur(2px)" }}
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
                    className="text-black/70 dark:text-white/70 text-[13px]">
                    A reusable React Progress Bar and Progress List Component for displaying project progress, status tracking, and completion metrics in modern dashboard applications.
                </motion.p>

            </div>

            <div className='border-black rounded-2xl'>
                <ProgressOverviewListItemsPreview />
            </div>
        </div>
    )
}

export default ProgressOverviewListItems