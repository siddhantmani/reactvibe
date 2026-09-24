"use client"

import LinearReveal from '@/components/LinearReveal'
import { LinearRevealFont } from '@/lib/fonts'
import { motion } from 'framer-motion'
import ConnectionFlowItemsPreview from './ConnectionFlowItemsPreview'

function ConnectionFlowItems() {
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl font-[700]`}
                    Text='Connection Flow'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A smooth React animation for visualizing data flows, SaaS integrations, API connections, and connected systems with curved paths and continuously moving particles.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <ConnectionFlowItemsPreview />
            </div>
        </motion.div>
    )
}

export default ConnectionFlowItems