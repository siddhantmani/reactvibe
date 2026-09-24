"use client"

import LinearReveal from '@/components/LinearReveal'
import { motion } from 'framer-motion'
import { Bricolage_Grotesque } from 'next/font/google';
import NotificationScreenItemsPreview from './NotificationScreenItemsPreview';
import NotificationScreenItemsIphoneDUOPreview from './IphoneDuoScreen/NotificationScreenItemsIphoneDUOPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function NotificationScreenItems() {
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
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Notification Screen'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    Notification Screen is an interactive iPhone-style notification preview built for showcasing push notifications, alerts, invoices, payments, and app updates. Users can scroll through the notifications just like they would on a real phone.
                </p>

            </div>
            <div className='border-black rounded-2xl'>
                <NotificationScreenItemsIphoneDUOPreview />
            </div>
            <div className='border-black rounded-2xl'>
                <NotificationScreenItemsPreview />
            </div>
        </motion.div>
    )
}

export default NotificationScreenItems