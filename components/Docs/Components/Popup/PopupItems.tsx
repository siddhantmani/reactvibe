"use client"

import LinearReveal from '@/components/LinearReveal'
import { titleFont } from '@/lib/fonts'
import { motion } from 'framer-motion'
import PopupItemsPreview from './PopupItemsPreview'

function PopupItems() {
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
            exit={{ opacity: 0, y: -10 }} className='px-2 mx-auto space-y-7 lg:max-w-168 xl:max-w-5xl 2xl:max-w-[1480px]'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${titleFont.className} font-[700] text-5xl`}
                    Text='Popup'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    Pulse Ping is a lightweight React animation that continuously rotates and shifts color, making it useful for status indicators, activity states, loading cues, and decorative UI.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <PopupItemsPreview />
            </div>

            {/* <div>
                <TablePorpsForPulsePingItems />
            </div> */}
        </motion.div>
    )
}

export default PopupItems