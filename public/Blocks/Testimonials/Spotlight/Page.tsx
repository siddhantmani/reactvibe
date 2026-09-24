"use client"

import OrbitBorder from '@/public/Components/TheOrbitBorderCode/OrbitBorder';
import { Zap } from 'lucide-react'
import { Manrope } from 'next/font/google';
import React from 'react'
import Spotlight from './Spotlight';

const labelName = Manrope({
    weight: '500', // Specify the font weight if needed  
    subsets: ['latin']
});

const subHeading = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});


function Page() {
    const reviews = [
        {
            key: "review-1",
            review:
                "“Subly made it so much easier for our team to manage paid memberships at scale. Tracking renewals, updating plans, and keeping everything running smoothly now takes just a few clicks.”",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
            name: "Mike Hartley",
            work: "Product Marketing Manager",
        },
        {
            key: "review-2",
            review:
                "“We replaced three internal tools with Subly. The setup was fast, the UI is intuitive, and our support tickets dropped noticeably within the first month.”",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
            name: "Sarah Collins",
            work: "Head of Growth",
        },
        {
            key: "review-3",
            review:
                "“What impressed us most was how flexible Subly is. From custom plans to real-time updates, it fits our workflow without forcing us to change how we operate.”",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
            name: "Daniel Brooks",
            work: "SaaS Founder",
        },
        {
            key: "review-4",
            review:
                "“Managing subscriptions used to be a constant pain point. With Subly, everything is centralized, predictable, and easy to scale as our customer base grows.”",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
            name: "Emily Zhao",
            work: "Operations Lead",
        },
        {
            key: "review-5",
            review:
                "“Subly feels thoughtfully built. It handles the boring but critical stuff flawlessly, which lets our team focus on shipping features instead of fighting tools.”",
            image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
            name: "Arjun Mehta",
            work: "Product Manager",
        },
    ];

    return (
        <div className="h-screen bg-gradient-to-t from-gray-50 to-white dark:from-[#141313] dark:to-[#141313] py-10 transition-colors duration-300 space-y-15">
            <div className='space-y-5'>
                <div className=' max-w-36 mx-auto'>
                    <OrbitBorder
                        rotate={0}
                        padding={1}
                        rounded={50}
                        className='bg-gray-200 dark:bg-[#141414] rounded-full p-1 text-black dark:text-white transition-colors'
                        RingColors={["#141414, #000000, #ffffff, #141414, #141414"]}
                        style={{
                            boxShadow: `
                                                                  0px 12px 40px rgba(60, 80, 180, 0.08),
                                                                  0px 20px 60px rgba(0, 0, 0, 0.05)
                                                                `,
                        }}
                    >
                        <div
                            className='flex items-center gap-3 justify-center rounded-full px-3 py-3
                            bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-sm
                            dark:from-[#141414] dark:via-[#1a1818] dark:to-[#0d0c0c] dark:border-[#141414]
                            dark:shadow-[0px_24px_48px_rgba(13,12,12,0.45),inset_7px_7px_31px_rgba(18,17,17,0.35),inset_2px_2px_20px_rgba(13,12,12,0.25)] 
                            transition-all duration-300'
                        >
                            <Zap size={17} className='fill-black dark:fill-white text-black dark:text-white transition-colors' />
                            <h1 className={`${labelName.className} text-[14px] text-black dark:text-white whitespace-nowrap transition-colors`}>Testimonials</h1>
                        </div>
                    </OrbitBorder>
                </div>
                <div className='max-w-4xl mx-auto space-y-2'>
                    <h1 className={`${labelName.className} xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl px-5 sm:px-0 md:px-0 opacity-90 text-center text-gray-900 dark:text-white transition-colors`}>See Customer Stories</h1>
                    <p className={`${subHeading.className} mx-auto xl:text-[14px] lg:text-[16px] md:text-[15px] sm:text-[10px] text-[12px] px-2 opacity-70 dark:opacity-55 text-center text-gray-700 dark:text-white/90 max-w-[70%] md:max-w-[60%] transition-colors`}>Hear from developers and teams who&#39;ve transformed their workflows and accelerated their success with our platform.</p>
                </div>
            </div>

            <div className=''>
                <Spotlight
                    reviews={reviews}
                    enableArrowNavigation
                    showDots
                />
            </div>
        </div>
    )
}

export default Page