"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { Inter_Tight, Manrope } from 'next/font/google';
import { Heart } from 'lucide-react';
import LinearReveal from '@/components/LinearReveal';
import VoiceFlow from './VoiceFlow';

const logoFont = Manrope({
    weight: "700",
    subsets: ["latin"],
});

const heading = Inter_Tight({
    weight: "600",
    subsets: ["latin"],
});


function Page() {
    const reviews = [
        {
            key: "review-1",
            review:
                "“Subly made it so much easier for our team to manage paid memberships at scale. Tracking renewals, updating plans, and keeping everything running smoothly now takes just a few clicks.”",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop",
            name: "Mike Hartley",
            work: "Product Marketing Manager",
        },
        {
            key: "review-2",
            review:
                "“We replaced three internal tools with Subly. The setup was fast, the UI is intuitive, and our support tickets dropped noticeably within the first month.”",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop",
            name: "Sarah Collins",
            work: "Head of Growth",
        },
        {
            key: "review-3",
            review:
                "“What impressed us most was how flexible Subly is. From custom plans to real-time updates, it fits our workflow without forcing us to change how we operate.”",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop",
            name: "Daniel Brooks",
            work: "SaaS Founder",
        },
        {
            key: "review-4",
            review:
                "“Managing subscriptions used to be a constant pain point. With Subly, everything is centralized, predictable, and easy to scale as our customer base grows.”",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop",
            name: "Emily Zhao",
            work: "Operations Lead",
        },
        {
            key: "review-5",
            review:
                "“Subly feels thoughtfully built. It handles the boring but critical stuff flawlessly, which lets our team focus on shipping features instead of fighting tools.”",
            image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&auto=format&fit=crop",
            name: "Arjun Mehta",
            work: "Product Manager",
        },
    ];
    return (
        <div className='space-y-8 py-20 scale-[100%] transition-colors duration-300 dark:bg-[#0c0c0c]'>
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
                    delay: 0.4
                }}
                className='mx-auto w-fit'
            >
                <div className='flex items-center gap-3 border-2 border-[#D6DAE0] dark:border-[#2A2B30] border-dashed rounded-xl p-2 px-3 scale-[90%] transition-colors'>
                    <Heart className='text-[27px] text-[#454B57] dark:text-[#E0E3E8] transition-colors' />
                    <LinearReveal
                        as={'h1'} //You can select heading from h1-h6
                        Text="From Our Community"
                        className={`${logoFont.className} xl:text-[17px] text-[#454B57] dark:text-[#E0E3E8] transition-colors`}
                    />
                </div>
            </motion.div>
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
                    delay: 0.6
                }}
                className='flex flex-col justify-center items-center text-base/13'
            >
                <h1 className={`${heading.className} text-[#C0C7D0] dark:text-[#454B57] xl:text-6xl text-[55px] transition-colors`}>What People</h1>
                <h1 className={`${heading.className} text-[#454B57] dark:text-white xl:text-6xl text-[55px] transition-colors`}>Say About Us</h1>
            </motion.div>
            <div className='max-w-3xl mx-auto'>
                <VoiceFlow
                    reviews={reviews}
                    enableArrowNavigation
                    showDots
                />
            </div>
        </div>
    )
}

export default Page