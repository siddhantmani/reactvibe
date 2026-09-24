"use client"
import { motion } from 'framer-motion'

import LinearReveal from '@/components/LinearReveal';
import ProgressOverviewListItemsPreview from './ProgressOverviewListItemsPreview';
import { LinearRevealFont } from '@/lib/fonts';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

function ProgressOverviewListItems() {
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
            className='px-2 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>

            <Link href="/docs/dashboard-ui/list">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to List blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} font-[700] text-2xl md:text-5xl`}
                    Text='Progress Overview List'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A reusable React Progress Bar and Progress List Component for displaying project progress, status tracking, and completion metrics in modern dashboard applications.
                </p>

            </div>

            <div className='border-black rounded-2xl'>
                <ProgressOverviewListItemsPreview />
            </div>
        </motion.div>
    )
}

export default ProgressOverviewListItems